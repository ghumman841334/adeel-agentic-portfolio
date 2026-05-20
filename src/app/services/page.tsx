import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  AnimatedLink,
  MotionCard,
  SectionReveal,
  StaggerContainer,
} from "@/components/motion-primitives";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack services from Adeel Javed for SaaS dashboards, cloud applications, backend APIs, real-time features, and AI automation workflows.",
};

export default function ServicesPage() {
  const heroCards = [
    { icon: "◧", title: "SaaS Dashboards", color: "text-accent-lavender" },
    { icon: "</>", title: "Full-Stack Apps", color: "text-accent-lime" },
    { icon: "⚡", title: "AI Automation", color: "text-accent-lavender" },
    { icon: "↗", title: "Cloud Delivery", color: "text-accent-lime" },
  ];

  const processSteps = [
    {
      step: "01.",
      title: "Workflow Discovery",
      text: "I clarify users, business rules, integrations, data flows, and launch priorities before writing production code.",
    },
    {
      step: "02.",
      title: "Architecture Blueprint",
      text: "I map the frontend, backend APIs, database, auth, automation steps, and deployment path around the real scope.",
    },
    {
      step: "03.",
      title: "Production Build",
      text: "I implement clean, maintainable features with React, Angular, Next.js, Node.js, Docker, and cloud services.",
    },
  ];

  return (
    <div className="min-h-screen bg-site-bg text-site-text selection:bg-accent-lavender/30">
      <SiteNav />

      <main id="main" className="pt-32">
        <SectionReveal className="mx-auto mb-20 max-w-[1280px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent-lavender">
                Services for Product Teams
              </span>
              <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
                Full-stack delivery for{" "}
                <span className="bg-gradient-to-r from-accent-lavender to-accent-lime bg-clip-text text-transparent">
                  SaaS, dashboards, and automation.
                </span>
              </h1>
            </div>
            <div className="pb-4 md:col-span-4">
              <p className="text-lg text-site-muted">
                I help founders, agencies, and product teams build scalable
                dashboards, portals, backend APIs, cloud deployments, real-time
                features, and AI automation workflows.
              </p>
            </div>
          </div>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {heroCards.map((card) => (
              <MotionCard
                key={card.title}
                className="flex h-48 flex-col justify-between rounded-2xl border border-site-border bg-site-card p-8 backdrop-blur-xl hover:border-accent-lavender/30"
              >
                <span className={`text-3xl ${card.color}`} aria-hidden="true">{card.icon}</span>
                <h3 className="text-2xl font-medium">{card.title}</h3>
              </MotionCard>
            ))}
          </StaggerContainer>
        </SectionReveal>

        <SectionReveal className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <MotionCard className="relative min-h-[400px] overflow-hidden rounded-2xl border border-site-border bg-site-card p-8 backdrop-blur-xl md:col-span-7">
              <div className="relative z-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-accent-lavender">
                  01 / Product Interfaces
                </span>
                <h2 className="mb-6 text-5xl font-semibold tracking-tight">
                  SaaS Dashboards &amp; Portals
                </h2>
                <p className="mb-8 max-w-md text-site-muted">
                  Responsive, workflow-friendly React, Angular, and Next.js
                  interfaces for admin dashboards, portals, reporting screens,
                  and internal business tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["DASHBOARDS", "PORTALS", "RESPONSIVE UI"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded border border-site-border bg-site-panel px-3 py-1 text-[10px] font-semibold tracking-[0.1em]"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent-lavender/10 blur-[100px]" />
            </MotionCard>

            <MotionCard className="flex flex-col justify-between rounded-2xl border border-accent-lime/20 bg-site-card p-8 backdrop-blur-xl md:col-span-5">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-accent-lime">
                  02 / Full-Stack Architecture
                </span>
                <h2 className="mb-4 text-3xl font-semibold">Application Engineering</h2>
                <ul className="space-y-3 text-site-muted">
                  {[
                    "React, Angular, Next.js, and TypeScript",
                    "Node.js, Express.js, NestJS, REST, and GraphQL",
                    "JWT, OAuth, RBAC, PostgreSQL, MongoDB, and MySQL",
                  ].map((line) => (
                    <li key={line} className="flex items-center gap-2">
                      <span className="text-accent-lime">●</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCQRJvL4j32ORdb3TTSiC1_uTGLzTlQKpHGbOTqilHkY0iG_OnlWWd94b8BNY5fOib0JSdzJ6HBjVYDfjVOKzIW8-xYI8HbD2TsNQeXC_Gj2b6qYM5FIGwHuRC_-gx5MNNT9fUKg_3UGNR7Pi73zN_my2Zk7oEcUG5Sp6bBrBSojavg9FF7pofqd9cBBZg9sj2Nhtj1RRn4IKv-iiGVllXOjRDFGqpWcyXo_VTbX82cyGvbUcjKGpcIBdZ1rTzcSCguqsHDHuXC_YD"
                  alt="Engineering workspace"
                  width={560}
                  height={160}
                  className="h-40 w-full rounded-lg object-cover opacity-50 grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </MotionCard>

            <MotionCard className="rounded-2xl border border-site-border bg-site-card p-8 backdrop-blur-xl md:col-span-4">
              <span className="mb-4 block text-2xl text-accent-lavender" aria-hidden="true">⚡</span>
              <h3 className="mb-4 text-2xl font-medium">Cloud &amp; DevOps</h3>
              <p className="mb-6 text-site-muted">
                AWS, Azure, Docker, Docker Compose, GitHub Actions, and GitLab
                CI for releases that are easier to run and maintain.
              </p>
              <div className="h-1 w-full overflow-hidden rounded-full bg-site-panel">
                <div className="h-full w-[98%] bg-accent-lime" />
              </div>
              <div className="mt-2 flex justify-between text-[10px] font-semibold tracking-[0.1em] text-accent-lime">
                <span>DEPLOYMENT READY</span>
                <span>AWS / AZURE</span>
              </div>
            </MotionCard>

            <MotionCard className="rounded-2xl border border-site-border bg-gradient-to-br from-site-bg to-site-panel p-8 md:col-span-8">
              <div className="flex h-full flex-col items-center gap-8 md:flex-row">
                <div className="flex-1">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-accent-lavender">
                    03 / Automation
                  </span>
                  <h2 className="mb-4 text-3xl font-semibold">
                    AI Workflows &amp; Calling Agents
                  </h2>
                  <p className="text-site-muted">
                    n8n, Make, and AI agent workflows for lead qualification,
                    appointment booking, CRM updates, support triage, follow-ups,
                    reporting, and human handoff.
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 gap-4 md:w-1/3">
                  {["◔", "▦", "◎"].map((icon) => (
                    <div
                      key={icon}
                      className="flex aspect-square items-center justify-center rounded-lg border border-site-border bg-site-panel"
                    >
                      <span className="text-2xl text-site-muted" aria-hidden="true">{icon}</span>
                    </div>
                  ))}
                  <div className="flex aspect-square items-center justify-center rounded-lg bg-accent-lime">
                    <span className="text-2xl text-accent-lime-foreground" aria-hidden="true">↗</span>
                  </div>
                </div>
              </div>
            </MotionCard>
          </StaggerContainer>
        </SectionReveal>

        <section className="bg-site-section py-20">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime">
                Workflow
              </span>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight">
                How I Build
              </h2>
            </div>
            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {processSteps.map((step, idx) => (
                <MotionCard
                  key={step.title}
                  className={`border-l p-8 transition-colors ${
                    idx === 1
                      ? "border-site-border hover:border-accent-lime"
                      : "border-site-border hover:border-accent-lavender"
                  }`}
                >
                  <span className="mb-4 block text-3xl text-site-muted/40">
                    {step.step}
                  </span>
                  <h3 className="mb-3 text-2xl font-medium">{step.title}</h3>
                  <p className="text-site-muted">{step.text}</p>
                </MotionCard>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-8 py-20">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              ["Can you build both frontend and backend?", "Yes. I can own UI, APIs, auth, database work, integrations, and deployment for focused product scopes."],
              ["Can you automate our CRM or lead workflow?", "Yes. I can build AI automation workflows with n8n, Make, agents, CRM updates, follow-up logic, reporting, and human approval points."],
              ["Can you work with an existing product team?", "Yes. I can plug into an existing team, work from tickets or product briefs, and keep delivery visible through clear milestones."],
              ["Which technologies do you specialize in?", "React, Angular, Next.js, Node.js, TypeScript, REST, GraphQL, PostgreSQL, MongoDB, Docker, AWS, Azure, and AI workflow tooling."],
            ].map(([question, answer], idx) => (
              <details
                key={question}
                open={idx === 1}
                className="group rounded-2xl border border-site-border bg-site-card p-6 backdrop-blur-xl transition-colors open:border-accent-lavender/30 hover:border-accent-lavender/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-xl font-medium group-open:text-accent-lavender">
                    {question}
                  </span>
                  <span className="text-2xl text-accent-lavender transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-site-muted">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-8 py-20">
          <div className="relative overflow-hidden rounded-3xl border border-site-border bg-gradient-to-t from-accent-lavender/5 to-transparent p-16 text-center backdrop-blur-xl">
            <div className="relative z-10">
              <h2 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Ready to build your <br />
                <span className="text-accent-lime">next product or workflow?</span>
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-site-muted">
                Share your product goal, current stack, or manual process. I can
                review the scope and suggest the cleanest implementation path.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <AnimatedLink
                  href="/#contact"
                  className="bg-accent-lime px-8 py-4 text-accent-lime-foreground hover:bg-accent-lime/90"
                >
                  Book Discovery Call
                </AnimatedLink>
                <AnimatedLink href="/work" variant="secondary" className="px-8 py-4">
                  View Work
                </AnimatedLink>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,#fff_1px,transparent_0)] [background-size:40px_40px]" />
          </div>
        </section>
      </main>

      <footer className="w-full rounded-t-xl border-t border-site-border bg-site-section">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-8 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-4 text-3xl font-semibold">Adeel Javed</div>
            <p className="max-w-xs text-site-muted">
              Senior full-stack engineer for SaaS dashboards, portals, cloud
              systems, real-time features, and AI automation.
            </p>
          </div>
          <div className="md:col-span-2">
            <h5 className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-accent-lime">
              Services
            </h5>
            <ul className="space-y-3 text-site-muted">
              {[
                ["SaaS Apps", "/services"],
                ["APIs", "/services"],
                ["Automation", "/services"],
              ].map(([item, href]) => (
                <li key={item}>
                  <Link
                    href={href}
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-accent-lavender"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h5 className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-accent-lime">
              Portfolio
            </h5>
            <ul className="space-y-3 text-site-muted">
              {[
                ["Work", "/work"],
                ["Stack", "/about"],
                ["Availability", "/#contact"],
              ].map(([item, href]) => (
                <li key={item}>
                  <Link
                    href={href}
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-accent-lavender"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h5 className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-accent-lime">
              Contact
            </h5>
            <div className="flex border-b border-site-border pb-2">
              <input
                type="email"
                placeholder="adeeljaved839@gmail.com"
                className="w-full border-none bg-transparent text-site-text outline-none placeholder:text-site-muted"
              />
              <a className="text-accent-lavender" href="mailto:adeeljaved839@gmail.com" aria-label="Email Adeel">
                →
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-site-border pt-8 md:col-span-12 md:flex-row">
            <p className="text-site-muted">
              © 2026 Adeel Javed — Production-ready software delivery.
            </p>
            <div className="flex gap-6 text-site-muted">
              <a href="mailto:adeeljaved839@gmail.com" className="transition-colors hover:text-accent-lavender">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
