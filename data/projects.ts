// Placeholder project data. Replace with your real projects later.
// summary: brief text shown on the home page project overview.
// description: detailed text shown on the Projects page.
export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  featured: boolean;
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "mindblow",
    title: "MindBlow",
    summary: "RAG-based AI quiz generation platform built as a capstone project.",
    description:
      "MindBlow is an AI-powered quiz generation platform built as a capstone project. It uses retrieval-augmented generation (RAG) to create quiz questions grounded in the source material, so the questions stay relevant to the content. The frontend is built with Next.js, the backend with FastAPI, and the data is stored in PostgreSQL.",
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    featured: true,
    image: "/mindblow.png",
    repoUrl: "https://github.com/your-username/mindblow",
    liveUrl: "https://www.mindblow.online/",
  },
  {
    slug: "web-portfolio",
    title: "Web Portfolio",
    summary: "My personal portfolio website, built with Next.js, Tailwind CSS, and shadcn/ui.",
    description:
      "This website is my personal portfolio, built with Next.js, Tailwind CSS, and shadcn/ui. It features responsive layouts for mobile and desktop, a dark mode toggle, project pages, and a contact form with validation.",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    featured: true,
    image: "/web-portfolio.png",
    repoUrl: "https://github.com/your-username/red-portfolio",
    liveUrl: "https://your-demo-link.example.com",
  },
  {
    slug: "nvsu-brims",
    title: "NVSU-BRIMS",
    summary: "Borrowing and returning system for equipment at NVSU.",
    description:
      "NVSU-BRIMS is a borrowing and returning system for managing equipment at NVSU. It keeps track of which items are borrowed, by whom, and when they are due back. It is built as a web application with PHP, HTML, CSS, and JavaScript.",
    stack: ["PHP", "HTML", "CSS", "JavaScript"],
    featured: true,
    image: "/nvsu-brims.png",
    repoUrl: "https://github.com/your-username/nvsu-brims",
    liveUrl: "https://www.nvsu-brims.online/",
  },
];