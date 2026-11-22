import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ImageFallback from "@/components/shared/image-fallback";
import { skills } from "@/data/skills";

function SkillsMarquee() {
  // The list is rendered twice so the -50% translate loops without a gap.
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {skills.map((skill) => (
        <span
          key={skill}
          className="whitespace-nowrap text-base font-medium text-muted-foreground"
        >
          {skill}
        </span>
      ))}
    </div>
  );

  return (
    <div className="group w-full min-w-0 overflow-hidden">
      <div className="flex w-max animate-marquee group-hover:paused motion-reduce:animate-none">
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
        ratio={2 / 3}
        className={emphasized ? "shadow-lg" : undefined}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
            IT Professional · Web Developer
          </Badge>

          <h1 className="font-heading text-5xl font-bold tracking-tight md:text-6xl">
            Production-ready web applications.
          </h1>

          <p className="max-w-md text-lg text-muted-foreground">
            I design and build responsive websites and progressive web apps, with
            a focus on user-centered design, clean code, and reliable deployment.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-md px-8 py-6 text-lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-md px-8 py-6 text-lg">
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>
        </div>

        {/* Right column: skills marquee sits above the image cards */}
        <div className="flex min-w-0 flex-col gap-8">
          <SkillsMarquee />

          <div className="flex items-center justify-center gap-4">
            <ImageCard className="hidden w-[28%] sm:block" src="/hero-1.jpg" alt="Hero image 1" />
            <ImageCard className="w-[36%]" emphasized src="/hero-2.jpg" alt="Hero image 2" />
            <ImageCard className="hidden w-[28%] sm:block" src="/hero-3.jpg" alt="Hero image 3" />
          </div>
        </div>
      </div>
    </section>
  );
}