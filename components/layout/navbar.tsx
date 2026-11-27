"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

// Which link is active: the Projects page, or a section on the home page.
function useActiveLink(): string {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = ["about", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // The section that covers the middle of the screen is the active one.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        setActiveSection(visible ? visible.target.id : null);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname.startsWith("/projects")) return "/projects";
  if (pathname === "/" && activeSection) return `/#${activeSection}`;
  if (pathname === "/") return "/";
  return "";
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeHref = useActiveLink();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight hover:underline underline-offset-4 focus-visible:underline focus-visible:outline-none sm:text-xl">
          {site.name}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.href === activeHref ? "page" : undefined}
              className={
                link.href === activeHref
                  ? "text-sm font-medium text-foreground hover:underline underline-offset-4 focus-visible:underline focus-visible:outline-none"
                  : "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4 focus-visible:text-foreground focus-visible:underline focus-visible:outline-none"
              }
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="border-b pb-4">
                <SheetTitle className="font-heading">{site.name}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4 pb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={link.href === activeHref ? "page" : undefined}
                    className={
                      link.href === activeHref
                        ? "rounded-md bg-accent px-3 py-2 text-base font-normal text-accent-foreground focus-visible:outline-none"
                        : "rounded-md px-3 py-2 text-base font-normal transition-colors hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}