import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  AnimatedLink,
  MotionCard,
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-primitives";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Adeel Javed, a senior full-stack engineer focused on SaaS dashboards, cloud applications, real-time systems, and AI automation workflows.",
};

export default function AboutPage() {
  const stackItems = [
    ["</>", "React"],
    [">_", "Next.js"],
    ["TS", "TypeScript"],
    ["◈", "Tailwind"],
    ["◎", "GraphQL"],
    ["☁", "AWS / Azure"],
  ];

  const principles = [
    {
      title: "Ownership",
      text: "I can own a feature from UI to API, database, auth, deployment, and maintenance, keeping the work practical and easy for teams to extend.",
    },
    {
      title: "Business Fit",
      text: "Every dashboard, portal, and automation should map to the real workflow, reduce manual work, and make the product easier to operate.",
    },
    {
      title: "Maintainability",
      text: "I prefer clean architecture, clear API contracts, reliable deployment habits, and readable code over short-term shortcuts.",
    },
  ];

  const journeyItems = [
    {
      years: "2022 — PRESENT",
      active: true,
      role: "Software Engineer / Full-Stack Engineer",
      company: "Cinnova Technologies",
      description:
        "Building scalable full-stack applications with React, TypeScript, Node.js, REST and GraphQL APIs, Docker, AWS, and Azure. Led frontend work on RAMPART and delivered real-time communication features for elder care.",
    },
    {
      years: "2019 — 2022",
      active: false,
      role: "MERN Stack Developer",
      company: "CBSOL",
      description:
        "Developed full-stack MERN features, responsive interfaces, GraphQL integrations, e-commerce dashboard work, and data-driven product features for MartGo and POLDIT.",
    },
    {
      years: "2016 — 2019",
      active: false,
      role: "Web Developer",
      company: "UF Solutions / Lamprell Engineering",
      description:
        "Built web development foundations across client-facing projects before moving deeper into MERN, MEAN, cloud-backed applications, and product engineering.",
    },
  ];

  return (
    <div className="min-h-screen bg-site-bg text-site-text selection:bg-accent-lavender/30">
      <SiteNav />

      <main id="main" className="pt-20">
        <SectionReveal className="relative mx-auto max-w-[1280px] overflow-hidden px-5 py-20 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
            <div className="z-10 md:col-span-7">
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime">
                Senior Full-Stack Engineer
              </span>
              <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
                Building SaaS dashboards, cloud apps, and AI workflows.
              </h1>
              <p className="mb-12 max-w-xl text-lg leading-relaxed text-site-muted">
                I am Adeel Javed, a full-stack engineer based in Lahore,
                Pakistan. I build production-ready web applications, dashboards,
                APIs, cloud deployments, real-time communication features, and AI
                automation workflows for teams that need reliable delivery.
              </p>
              <div className="flex flex-wrap gap-6">
                <AnimatedLink href="/#contact" className="rounded-xl px-8 py-4 text-base tracking-normal">
                  Get in Touch
                </AnimatedLink>
                <AnimatedLink href="#stack" variant="secondary" className="rounded-xl border-accent-lime px-8 py-4 text-base tracking-normal text-accent-lime">
                  View Stack
                </AnimatedLink>
              </div>
            </div>

            <div className="relative md:col-span-5">
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl border border-site-border bg-site-card backdrop-blur-xl">
                <Image
                  alt="Adeel Javed, full-stack engineer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQEMMat_8bP0vA2vJ1bJ4QH9UwNk0EGajd44sCpYfUxwkvSsvTsOPRCCOeRqcNclewdFSZ4eFLhl9bwWNmhF51Y1EbSS7_1dGQQ2PVokbuRDqnpbhnWkm2G5_mVE592v6SxBTTvMMqEG4SQd1MhSrlAi__lVpNYquBFmrr54yLZm8H5VatmcLAh5RvTJUEHjnX-2WkHp9IwY7EAjSyQFhEUr-KsS7ipDYoPIcREQXPqC1GhbCBRdK29oypEaU9OA3qC1YjY-FgFGls"
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 bg-[radial-gradient(circle_at_center,rgba(192,193,255,0.08)_0%,transparent_70%)]" />
            </div>
          </div>
        </SectionReveal>

        <SectionReveal id="stack" className="mx-auto max-w-[1280px] scroll-mt-28 px-5 py-20 sm:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-1 text-5xl font-semibold tracking-tight">
              Technical Stack
            </h2>
            <p className="text-site-muted">
              Tools I use to build maintainable full-stack products.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {stackItems.map(([icon, label]) => (
              <StaggerItem
                key={label}
                className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-site-border bg-site-card p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent-lavender/30"
              >
                <span className="text-4xl text-accent-lavender" aria-hidden="true">{icon}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.1em]">
                  {label}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionReveal>

        <section className="bg-site-panel px-8 py-20">
          <div className="mx-auto max-w-[1280px]">
            <StaggerContainer className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {principles.map((item) => (
                <MotionCard key={item.title} className="rounded-2xl p-6">
                  <div className="mb-6 h-1 w-12 border-t-2 border-accent-lime" />
                  <h3 className="mb-3 text-3xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-site-muted">{item.text}</p>
                </MotionCard>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <SectionReveal className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8">
          <h2 className="mb-12 text-5xl font-semibold tracking-tight">Journey</h2>
          <div className="space-y-6" role="list">
            {journeyItems.map((item) => (
              <div key={item.years} className="group grid grid-cols-1 gap-6 md:grid-cols-12" role="listitem">
                <div className="md:col-span-2">
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.1em] ${
                      item.active ? "text-accent-lavender" : "text-site-muted/60"
                    }`}
                  >
                    {item.years}
                  </span>
                </div>
                <div className="flex items-start justify-start pt-1 md:col-span-1 md:justify-center">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      item.active
                        ? "bg-accent-lime shadow-[0_0_10px_rgba(164,214,76,0.5)]"
                        : "bg-site-border"
                    }`}
                  />
                </div>
                <MotionCard className="rounded-2xl border border-site-border bg-site-card p-6 backdrop-blur-xl transition-colors group-hover:border-accent-lavender/20 md:col-span-9">
                  <h3 className="text-2xl font-medium">{item.role}</h3>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-site-muted">
                    {item.company}
                  </p>
                  <p className="leading-relaxed text-site-muted">
                    {item.description}
                  </p>
                </MotionCard>
              </div>
            ))}
          </div>
        </SectionReveal>
      </main>

      <footer className="w-full rounded-t-2xl border-t border-site-border bg-site-section">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-8 py-20 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="mb-3 text-3xl font-semibold">Adeel Javed</div>
            <p className="mb-6 max-w-xs text-site-muted">
              Building practical full-stack products and automation workflows.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-50">
              Navigation
            </span>
            {[
              ["Work", "/work"],
              ["Stack", "#stack"],
              ["Availability", "/#contact"],
            ].map(([item, href]) => (
              <Link
                key={item}
                href={href}
                className="text-site-muted transition-all duration-200 hover:translate-x-1 hover:text-accent-lavender"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-50">
              Legal
            </span>
            <a
              href="mailto:adeeljaved839@gmail.com"
              className="text-site-muted transition-all duration-200 hover:translate-x-1 hover:text-accent-lavender"
            >
              adeeljaved839@gmail.com
            </a>
          </div>
          <div className="mt-12 border-t border-site-border pt-12 md:col-span-12">
            <p className="text-accent-lime">
              © 2026 Adeel Javed — Full-stack product engineering.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
