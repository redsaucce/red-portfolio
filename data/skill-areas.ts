// Skill areas shown as cards in the About section. Edit the text to match your skills.
export type SkillArea = {
  title: string;
  description: string;
  tags: string[];
};

export const skillAreas: SkillArea[] = [
  {
    title: "Web Development",
    description:
      "Building responsive websites and progressive web apps that load quickly and work on any device.",
    tags: ["Next.js", "React", "Tailwind CSS", "REST APIs", "Performance Optimization"],
  },
  {
    title: "Database Design",
    description:
      "Designing data models that are clear, efficient, and easy to maintain as a project grows.",
    tags: ["Schema Design", "Data Integrity", "PostgreSQL", "SQL"],
  },
  {
    title: "Software Engineering",
    description:
      "Writing organized, maintainable code and following practices for version control and deployment.",
    tags: ["System Design", "Clean Code", "CI/CD", "Debugging"],
  },
  {
    title: "UI/UX Design",
    description:
      "Designing interfaces around user needs, with clear layouts and accessible components.",
    tags: ["Wireframing", "Responsive Design", "Accessibility", "Design Systems"],
  },
];