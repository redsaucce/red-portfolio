import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import ProjectOverview from "@/components/sections/project-overview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectOverview />
      <Contact />
    </>
  );
}