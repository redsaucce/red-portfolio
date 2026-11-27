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
    stack: ["Next.js", "FastAPI", "PostgreSQL", "AI integration"],
    featured: true,
    image: "/mindblow.png",
    repoUrl: "https://github.com/your-username/mindblow",
    liveUrl: "https://www.mindblow.online/",
  },
  {
    slug: "kelly-cakes",
    title: "Web Portfolio",
    summary: "A modern freelance web portfolio built for a client, with a responsive layout.",
    description:
      "This is a web portfolio I built for a client as a freelance project. It presents the client's work with a responsive layout and a clear way to get in touch.",
    stack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    image: "/kelly-cakes.png",
    liveUrl: "https://kelly-cakes.vercel.app",
  },
  {
    slug: "nvsu-brims",
    title: "NVSU-BRIMS",
    summary: "Borrowing and returning system for items & equipment at NVSU.",
    description:
      "NVSU-BRIMS is the Borrowing and Returning Items & Equipment Management System of Nueva Vizcaya State University. It lets students, staff, and registered student organizations browse, request, and track the loan of sports and arts equipment from the University Sports & Development Office (USDO) and the University Culture and the Arts Office (UCAO). It also sends email notifications to keep borrowers informed.",
    stack: ["Next.js", "PostgreSQL", "Email notification"],
    featured: true,
    image: "/nvsu-brims.png",
    repoUrl: "https://github.com/your-username/nvsu-brims",
    liveUrl: "https://www.nvsu-brims.online/",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    summary: "My personal portfolio, built with Next.js, Tailwind CSS, and shadcn/ui.",
    description:
      "This website presents my work, skills, and contact details. It is built with Next.js, Tailwind CSS, and shadcn/ui, with responsive layouts, dark mode, and a contact form.",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    image: "/personal-portfolio.png",
    featured: true,
    liveUrl: "https://red-pereda.vercel.app/",
  },
];