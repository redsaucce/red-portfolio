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
    slug: "kelly-cakes",
    title: "Kelly Cakes",
    summary: "A freelance website built for a client.",
    description:
      "Kelly Cakes is a freelance website I built for a client. It presents the bakery's products and gives visitors a clear way to get in touch.",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    featured: true,
    image: "/kelly-cakes.png",
    liveUrl: "https://kelly-cakes.vercel.app",
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