import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red | Web Portfolio",
  description:
    "Web Portfolio of Red Pereda, a BSIT student and developer building web and mobile apps.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex h-dvh flex-col overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar stays fixed at the top; the page content scrolls inside ScrollArea */}
          <Navbar />
          <ScrollArea className="min-h-0 flex-1">
            <main>{children}</main>
            <Footer />
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}