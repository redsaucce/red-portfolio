"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

export type ContactResult = { ok: true } | { ok: false; error: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limit: 3 messages per visitor per hour.
// This is kept in memory. On Vercel each server instance has its own count,
// so it is a basic guard rather than a strict limit.
const MAX_MESSAGES = 3;
const WINDOW_MS = 60 * 60 * 1000;
const recentMessages = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (recentMessages.get(ip) ?? []).filter(
    (time) => now - time < WINDOW_MS,
  );
  if (recent.length >= MAX_MESSAGES) {
    recentMessages.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentMessages.set(ip, recent);
  return false;
}

export async function sendContactMessage(
  formData: FormData,
): Promise<ContactResult> {
  console.info("[contact] Form received by server");

  // Honeypot: real visitors never fill this hidden field. Bots often do.
  // Pretend success so bots don't learn that the field is a trap.
  if (String(formData.get("website") ?? "").trim() !== "") {
    console.warn("[contact] Honeypot field was filled; message ignored");
    return { ok: true };
  }

  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Server-side validation, so the form cannot be bypassed.
  if (!firstName || !lastName) {
    return { ok: false, error: "Please enter your first and last name." };
  }
  if (!emailPattern.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!subject) {
    return { ok: false, error: "Please choose a subject." };
  }
  if (message.length < 10) {
    return {
      ok: false,
      error: "Message must be at least 10 characters.",
    };
  }
  if (message.length > 5000) {
    return { ok: false, error: "Message is too long." };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return {
      ok: false,
      error: "You have sent several messages recently. Please try again later.",
    };
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailPassword) {
    console.error(
      "[contact] Missing environment variables:",
      [!gmailUser && "GMAIL_USER", !gmailPassword && "GMAIL_APP_PASSWORD"]
        .filter(Boolean)
        .join(", "),
    );
    return { ok: false, error: "Email is not configured." };
  }

  console.info("[contact] Sending message from", email);

  const name = `${firstName} ${lastName}`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPassword },
  });

  try {
    await transporter.sendMail({
      from: `"Red Portfolio" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `New message from ${name}: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });
    console.info("[contact] Message sent to", gmailUser);
    return { ok: true };
  } catch (error) {
    console.error("[contact] Failed to send message:", error);
    return {
      ok: false,
      error: "Your message could not be sent. Please try again later.",
    };
  }
}