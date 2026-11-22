import { Separator } from "@/components/ui/separator";
import { site } from "@/data/site";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/shared/icons";

export default async function Footer() {
  "use cache";

  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-bold">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {site.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <p className="font-medium">Reach me</p>
            <a
              href={`mailto:${site.email}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {site.phone}
            </a>
            <p className="text-muted-foreground">{site.location}</p>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <p className="font-medium">Follow me</p>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4 shrink-0" />
              GitHub
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-4 shrink-0" />
              LinkedIn
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <InstagramIcon className="size-4 shrink-0" />
              Instagram
            </a>

            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <FacebookIcon className="size-4 shrink-0" />
              Facebook
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          © {year} {site.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
}