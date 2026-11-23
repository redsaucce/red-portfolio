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
    <section id="about">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-10 lg:py-12">
        {/* Section header: full width, same pattern as Contact and Projects */}
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            About me
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            Who I am and how I work.
          </p>
        </div>

        {/* Image and bio: side by side on desktop, stacked on mobile (image first) */}
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          <ImageFallback src="/profile.jpg" alt="Red Pereda, IT professional and web developer" ratio={4 / 3} className="border" />

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">Bio</h3>
            <div className="flex flex-col gap-4 text-base text-muted-foreground md:text-lg">
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
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">Skills</h3>
            <p className="text-base text-muted-foreground md:text-lg">
              The areas I work in and the tools I use.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {skillAreas.map((area) => (
              <Card key={area.title} className="h-full gap-0 py-0">
                {/* Header: title, the strongest level */}
                <CardHeader className="px-4 pt-4 sm:px-6 sm:pt-6">
                  <CardTitle className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
                    {area.title}
                  </CardTitle>
                </CardHeader>

                {/* Body: description, the supporting level */}
                <CardContent className="px-4 pt-3 sm:px-6">
                  <CardDescription className="text-sm leading-relaxed sm:text-base">
                    {area.description}
                  </CardDescription>
                </CardContent>

                {/* Footer: tags, pushed to the bottom so all cards line up */}
                <CardFooter className="mt-auto flex flex-wrap gap-2 border-t-0 bg-transparent px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-5">
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