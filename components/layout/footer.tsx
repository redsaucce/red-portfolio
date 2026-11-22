import { Separator } from "@/components/ui/separator";
import { site } from "@/data/site";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/shared/icons";
import { Mail, MapPin, Phone } from "lucide-react";

const linkClass =
  "inline-flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground";

export default async function Footer() {
  "use cache";

  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Name and tagline */}
          <div>
            <p className="font-heading text-lg font-bold">{site.name}</p>
            <p className="mt-2 max-w-xs text-base text-muted-foreground">
              {site.tagline}
            </p>
          </div>

          {/* Reach me: icons inline with each contact detail */}
          <div className="flex flex-col gap-2 text-base">
            <p className="font-heading font-semibold">Reach me</p>
            <a href={`mailto:${site.email}`} className={linkClass}>
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={linkClass}>
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {site.phone}
            </a>
            <p className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {site.location}
            </p>
          </div>

          {/* Follow me: brand icons, slightly larger */}
          <div className="flex flex-col gap-2 text-base">
            <p className="font-heading font-semibold">Follow me</p>
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

        <Separator className="my-8" />

        <p className="text-center text-base text-muted-foreground">
          © {year} {site.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
}