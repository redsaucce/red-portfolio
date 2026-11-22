import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageFallback from "@/components/shared/image-fallback";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full overflow-hidden pt-0">
      <ImageFallback
        alt={project.title}
        ratio={16 / 9}
        src={project.image}
        className="rounded-none"
      />

      <CardHeader className="flex-none">
        <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
        {/* Fixed two-line height so every card's badges start at the same line */}
        <CardDescription className="line-clamp-2 min-h-10">
          {project.summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-wrap content-start gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </CardContent>

      {/* Footer is always rendered and pushed to the bottom, so all cards align */}
      <CardFooter className="mt-auto flex min-h-14 gap-3">
        {project.liveUrl && (
          <Button asChild size="sm">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function ProjectOverview() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-20 border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Featured projects
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              An overview of selected projects I have designed and built.
            </p>
          </div>

          <Button asChild variant="outline" size="lg" className="rounded-md px-6 py-5">
            <Link href="/projects">View all projects</Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}