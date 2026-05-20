import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { RouteTransition } from "@/components/motion-primitives";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adeeljaved.dev"),
  title: {
    default: "Adeel Javed | Full-Stack SaaS & AI Automation Engineer",
    template: "%s | Adeel Javed",
  },
  description:
    "Portfolio of Adeel Javed, a senior full-stack engineer building SaaS dashboards, cloud-backed applications, real-time systems, and AI automation workflows.",
  keywords: [
    "Adeel Javed",
    "Full-stack engineer",
    "Next.js developer",
    "SaaS dashboards",
    "AI automation",
    "React",
    "Node.js",
    "AWS",
    "Azure",
  ],
  authors: [{ name: "Adeel Javed" }],
  creator: "Adeel Javed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adeeljaved.dev",
    title: "Adeel Javed | Full-Stack SaaS & AI Automation Engineer",
    description:
      "Production-ready SaaS dashboards, cloud apps, real-time systems, and AI automation workflows for recruiters, founders, and product teams.",
    siteName: "Adeel Javed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeel Javed | Full-Stack SaaS & AI Automation Engineer",
    description:
      "Senior full-stack engineer for SaaS dashboards, cloud-backed apps, real-time systems, and AI automation.",
  },
};

const themeInitScript = `
(() => {
  try {
    const savedTheme = localStorage.getItem("portfolio-theme-override");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const theme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : systemTheme;
    localStorage.removeItem("portfolio-theme");
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-site-bg text-site-text">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-accent-lavender px-4 py-2 text-sm font-semibold text-cta-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
