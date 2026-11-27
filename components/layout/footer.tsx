import { site } from "@/data/site";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, RedIcon } from "@/components/shared/icons";
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";

const linkClass =
  "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4 focus-visible:text-foreground focus-visible:underline focus-visible:outline-none";

export default async function Footer() {
  "use cache";

  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Name and tagline */}
          <div>
            <div className="flex items-center gap-3">
              <RedIcon className="size-6 shrink-0 sm:size-8 md:size-9" />
              <p className="font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{site.name}</p>
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {site.tagline}
            </p>
          </div>

          {/* Reach me: icons inline with each contact detail */}
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-heading text-lg font-semibold tracking-tight sm:text-xl">Reach me</p>
            <a href={`mailto:${site.email}`} className={linkClass}>
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={linkClass}>
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {site.phone}
            </a>
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {site.location}
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="size-4 shrink-0" aria-hidden="true" />
              {site.availability}
            </p>
          </div>

          {/* Follow me: brand icons, slightly larger */}
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-heading text-lg font-semibold tracking-tight sm:text-xl">Follow me</p>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <GithubIcon className="size-5 shrink-0" />
              redsaucce
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <LinkedinIcon className="size-5 shrink-0" />
              Drew Benett Pereda
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <InstagramIcon gradientId="footer-instagram-gradient" className="size-5 shrink-0" />
              Red Pereda
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <FacebookIcon className="size-5 shrink-0" />
              Red Pereda
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="my-8 h-px w-full bg-foreground/20" />

        <p className="text-center text-base text-muted-foreground">
          © {year} {site.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
}