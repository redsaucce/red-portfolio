import ImageFallback from "@/components/shared/image-fallback";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skillAreas } from "@/data/skill-areas";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        {/* Top row: image and bio side by side on desktop, stacked on mobile */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ImageFallback src="/profile.jpg" alt="Red Pereda, IT professional and web developer" ratio={4 / 3} />

          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              About me
            </h2>

            <div className="flex flex-col gap-4 text-lg text-muted-foreground">
              <p>
                I am an IT professional focusing on web development. I design and
                build full-stack applications, covering database design, user
                interface design, and software engineering, with a focus on
                user-centered design and responsive layouts. My work includes
                progressive web apps and responsive websites that perform well across
                devices.
              </p>
              <p>
                I apply version control and modern deployment practices to deliver
                maintainable, well-structured projects. I am available for freelance
                work and collaboration on web development projects, and I welcome
                opportunities to contribute to teams that value clean code, thoughtful
                design, and reliable delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Skill areas: four cards, full width below the image and bio */}
        <div className="mt-12 flex flex-col gap-6">
          <h3 className="font-heading text-lg font-semibold">Skills</h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillAreas.map((area) => (
              <Card key={area.title} className="h-full gap-0 py-0">
                {/* Header: title, the strongest level */}
                <CardHeader className="pt-6">
                  <CardTitle className="font-heading text-xl font-semibold tracking-tight">
                    {area.title}
                  </CardTitle>
                </CardHeader>

                {/* Body: description, the supporting level */}
                <CardContent className="pt-3">
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>

                {/* Footer: tags, pushed to the bottom so all cards line up */}
                <CardFooter className="mt-auto flex flex-wrap gap-2 border-t-0 bg-transparent pb-6 pt-5">
                  {area.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}