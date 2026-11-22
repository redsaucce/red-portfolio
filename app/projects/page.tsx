import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ImageFallback from "@/components/shared/image-fallback";
import { projects, type Project } from "@/data/projects";

function ProjectRow({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* On reversed rows the image moves to the right on desktop (zigzag) */}
      <div className={reverse ? "lg:order-2" : undefined}>
        <ImageFallback
          alt={project.title}
          ratio={16 / 9}
          src={project.image}
          className="border"
        />
      </div>

      <div className={`flex flex-col gap-5 ${reverse ? "lg:order-1" : ""}`}>
        <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          {project.title}
        </h2>
        <p className="text-lg text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {project.liveUrl && (
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild size="lg">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:py-10 lg:py-12">
        <div className="flex flex-col gap-3">
          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Projects
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Selected projects I have designed and built.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
    </section>
  );
}