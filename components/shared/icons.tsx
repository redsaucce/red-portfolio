import type { SVGProps } from "react";

// Centralized custom icons. Each icon uses its brand's original color as a
// rounded square with a white mark, so it looks the same in light and dark mode.
// Add new icons here.

// Facebook: blue rounded square with a white "f".
export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" rx="5" fill="#1877F2" />
      <path
        fill="#FFFFFF"
        d="M15.1 22V12.9H18L18.5 9.4H15.1V7.2C15.1 6.2 15.4 5.5 16.9 5.5H18.7V2.4C18.3 2.3 17.2 2.2 15.9 2.2C13.2 2.2 11.4 3.9 11.4 6.9V9.4H8.5V12.9H11.4V22Z"
      />
    </svg>
  );
}

// GitHub: near-black rounded square with a white GitHub mark.
export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" rx="5" fill="#181717" />
      <path
        fill="#FFFFFF"
        transform="translate(12 12) scale(0.62) translate(-12 -12)"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
      />
    </svg>
  );
}

// LinkedIn: blue rounded square with a white "in".
export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" rx="5" fill="#0A66C2" />
      <g fill="#FFFFFF">
        {/* "i": dot and stem */}
        <circle cx="6.95" cy="6.9" r="1.6" />
        <rect x="5.5" y="9.6" width="2.9" height="8.8" />
        {/* "n" */}
        <path d="M10.5 9.6H13.4V10.6C13.9 9.8 14.8 9.3 16 9.3C17.9 9.3 18.5 10.6 18.5 12.4V18.4H15.5V12.8C15.5 11.9 15.3 11 14.2 11C13 11 12.5 11.9 12.5 12.9V18.4H10.5Z" />
      </g>
    </svg>
  );
}

// Instagram: rounded square with the brand gradient and a white camera outline.
export function InstagramIcon({
  gradientId = "instagram-gradient",
  ...props
}: SVGProps<SVGSVGElement> & { gradientId?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset="0.25" stopColor="#FA7E1E" />
          <stop offset="0.5" stopColor="#D62976" />
          <stop offset="0.75" stopColor="#962FBF" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5" fill={`url(#${gradientId}) #E1306C`} />
      <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="16.2" cy="7.8" r="1.1" fill="#FFFFFF" />
    </svg>
  );
}

// Red logo mark: a black rounded square with a white "R".
export function RedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" rx="5" fill="#000000" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="#FFFFFF"
      >
        R
      </text>
    </svg>
  );
}