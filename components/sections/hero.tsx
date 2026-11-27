import Link from "next/link";
import { FolderOpen, Mail } from "lucide-react";
import { Fragment } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ImageFallback from "@/components/shared/image-fallback";
import { marqueeSkills as skills } from "@/data/skill-areas";

function SkillsMarquee() {
  // The list is rendered twice so the -50% translate loops without a gap.
  const row = (
    <div className="flex shrink-0 items-center gap-4 pr-4">
      {skills.map((skill) => (
        <Fragment key={skill}>
          <span className="whitespace-nowrap text-base font-medium text-muted-foreground">
            {skill}
          </span>
          <span aria-hidden="true" className="text-muted-foreground">
            •
          </span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="group w-full min-w-0 overflow-hidden">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row}
        {row}
      </div>
    </div>
  );
}

function ImageCard({
  className,
  emphasized = false,
  src,
  alt,
}: {
  className?: string;
  emphasized?: boolean;
  src: string;
  alt: string;
}) {
  return (
    <div className={className}>
      <ImageFallback
        src={src}
        alt={alt}
        ratio={16 / 9}
        className={emphasized ? "rounded-lg border shadow-lg" : "rounded-lg border"}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:py-16 lg:grid-cols-2 lg:gap-12 lg:py-24">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
            IT Professional · Web Developer
          </Badge>

          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
            Production-ready web applications.
          </h1>

          <p className="max-w-md text-base text-muted-foreground md:text-lg">
            I design and build responsive websites and progressive web apps, with
            a focus on user-centered design, clean code, and reliable deployment.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-md px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg">
              <Link href="/projects">
                View Projects
                <FolderOpen className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-md px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg">
              <Link href="/#contact">
                <Mail className="size-4" aria-hidden="true" />
                Contact
              </Link>
            </Button>
          </div>
        </div>

        {/* Right column: skills marquee sits above the image cards */}
        <div className="flex min-w-0 flex-col gap-8">
          <SkillsMarquee />

          {/* Staggered layout: row 1 full width; row 2 two columns */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <ImageCard className="w-[90%] self-center" emphasized src="/mindblow.png" alt="MindBlow platform" />
            <div className="grid w-[90%] grid-cols-2 gap-3 self-center sm:gap-4">
              <ImageCard className="w-full" src="/kelly-cakes.png" alt="Web Portfolio website" />
              <ImageCard className="w-full" src="/nvsu-brims.png" alt="NVSU-BRIMS system" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}