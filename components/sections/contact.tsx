"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/shared/icons";
import { ChevronsUpDown, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const subjects = [
  "General inquiry",
  "Project collaboration",
  "Job opportunity",
  "Feedback",
  "Others",
];

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (!values.firstName.trim()) errors.firstName = "Enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name.";
  if (!emailPattern.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.subject) errors.subject = "Choose a subject.";
  if (values.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm text-destructive">{message}</p>;
}

function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  }

  function handleSubject(subject: string) {
    setValues((prev) => ({ ...prev, subject }));
    setSubjectOpen(false);
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // Placeholder: connect to a server action or email service later.
      setSubmitted(true);
      setValues(emptyValues);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-xl border p-4 sm:p-6 md:p-8"
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-lg font-semibold sm:text-xl">Send a message</h3>
        <p className="text-sm text-muted-foreground">
          Fill in the form and I will get back to you.
        </p>
      </div>

      {/* First and last name, side by side */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.firstName)}
            placeholder="First name"
          className="rounded-sm"
        />
          <ErrorText message={errors.firstName} />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.lastName)}
            placeholder="Last name"
          className="rounded-sm"
        />
          <ErrorText message={errors.lastName} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          placeholder="you@example.com"
          className="rounded-sm"
        />
        <ErrorText message={errors.email} />
      </div>

      {/* Subject combobox: the menu opens below the trigger */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Popover open={subjectOpen} onOpenChange={setSubjectOpen}>
          <PopoverTrigger asChild>
            <Button
              id="subject"
              type="button"
              variant="outline"
              role="combobox"
              aria-expanded={subjectOpen}
              aria-invalid={Boolean(errors.subject)}
              className="w-full justify-between font-normal"
            >
              {values.subject || "Select a subject"}
              <ChevronsUpDown className="ml-2 size-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            align="start"
            className="w-(--radix-popover-trigger-width) p-0"
          >
            <Command>
              <CommandList>
                <CommandEmpty>No subject found.</CommandEmpty>
                <CommandGroup>
                  {/* Placeholder option: disabled once a subject is chosen */}
                  <CommandItem
                    value="Select a subject"
                    disabled={Boolean(values.subject)}
                    onSelect={() => undefined}
                  >
                    Select a subject
                  </CommandItem>
                  {subjects.map((subject) => (
                    <CommandItem key={subject} value={subject} onSelect={handleSubject}>
                      <Check
                        className={cn(
                          "mr-2 size-4",
                          values.subject === subject ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {subject}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <ErrorText message={errors.subject} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          placeholder="How can I help?"
          className="rounded-sm"
        />
        <ErrorText message={errors.message} />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" size="lg" className="w-full px-8 sm:w-auto">
          Send message
        </Button>
        {submitted && (
          <p className="text-sm text-muted-foreground">Thanks! Your message was sent.</p>
        )}
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-10 lg:py-12">
        {/* Header: full width */}
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Get in touch
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            Have a project in mind? Send me a message and I will reply soon.
          </p>
        </div>

        {/* Row: info card on the left, form on the right */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="py-4 sm:py-6">
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="text-lg font-semibold sm:text-xl">Reach me</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 px-4 text-sm sm:px-6">
                <div className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-muted-foreground" aria-label="Email" />
                  <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-foreground">
                    {site.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-muted-foreground" aria-label="Phone" />
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-foreground">
                    {site.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="size-5 shrink-0 text-muted-foreground" aria-label="Location" />
                  <span className="text-muted-foreground">{site.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="size-5 shrink-0 text-muted-foreground" aria-label="Time zone and response time" />
                  <span className="text-muted-foreground">{site.responseNote}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="py-4 sm:py-6">
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="text-lg font-semibold sm:text-xl">Follow me</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 px-4 text-sm sm:px-6">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
                >
                  <GithubIcon className="size-5 shrink-0" />
                  <span>redsaucce</span>
                </a>

                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
                >
                  <LinkedinIcon className="size-5 shrink-0" />
                  <span>Drew Benett Pereda</span>
                </a>

                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
                >
                  <InstagramIcon gradientId="contact-instagram-gradient" className="size-5 shrink-0" />
                  <span>Red Pereda</span>
                </a>

                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook profile"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
                >
                  <FacebookIcon className="size-5 shrink-0" />
                  <span>Red Pereda</span>
                </a>
              </CardContent>
            </Card>

          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}