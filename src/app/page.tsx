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
  title: "Full-Stack SaaS & AI Automation Engineer",
  description:
    "Adeel Javed builds production-ready SaaS dashboards, cloud-backed apps, real-time systems, and AI automation workflows for recruiters, founders, and product teams.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-site-bg text-site-text">
      <SiteNav />

      <main id="main" className="relative overflow-x-hidden pt-20">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(192,193,255,0.06)_0%,transparent_70%)]" />

        <SectionReveal className="mx-auto mt-8 w-full max-w-[1280px] px-5 py-16 sm:px-8 md:py-20">
          <div className="grid grid-cols-12 items-center gap-6">
            <div className="col-span-12 lg:col-span-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-site-border bg-site-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-site-muted backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-accent-lime shadow-[0_0_18px_rgba(164,214,76,0.65)]" />
                Available for product builds and automation work
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
                Full-stack SaaS, dashboards, and{" "}
                <span className="bg-gradient-to-r from-accent-lavender to-accent-lime bg-clip-text text-transparent">
                  AI workflows
                </span>{" "}
                that ship cleanly.
              </h1>
              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-site-muted">
                I help founders, recruiters, and product teams turn complex
                workflows into reliable web apps with polished UI, maintainable
                APIs, cloud delivery, real-time features, and practical AI
                automation.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <AnimatedLink href="#contact" className="px-8 py-4">
                  Start a Project →
                </AnimatedLink>
                <AnimatedLink href="/about" variant="secondary" className="px-8 py-4">
                  View My Stack
                </AnimatedLink>
              </div>
            </div>

            <div className="col-span-12 mt-8 lg:col-span-4 lg:mt-0">
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {[
                  ["6y+", "PRODUCT DELIVERY"],
                  ["MERN", "MEAN + NEXT.JS"],
                  ["Cloud", "AWS + AZURE"],
                  ["AI", "N8N + AGENTS"],
                ].map(([value, label]) => (
                  <StaggerItem
                    key={label}
                    className="rounded-2xl border border-site-border bg-site-card p-5 shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-colors hover:border-accent-lavender/40 sm:p-6"
                  >
                    <div className="mb-1 text-3xl font-semibold text-accent-lime">
                      {value}
                    </div>
                    <div className="text-[10px] font-semibold tracking-[0.14em] text-site-muted">
                      {label}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-8 border-y border-site-border px-5 py-6 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:px-8">
          {["RAMPART", "Migration Portal", "Elder Care", "MartGo", "POLDIT"].map(
            (company) => (
              <span key={company} className="text-2xl font-bold tracking-tight">
                {company}
              </span>
            ),
          )}
        </SectionReveal>

        <SectionReveal className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8">
          <div className="mb-12">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-accent-lime">
              CORE OFFERS
            </span>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Practical engineering for products that need to work.
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-12 gap-6">
            <MotionCard className="col-span-12 flex min-h-[400px] flex-col justify-between rounded-2xl border border-site-border bg-site-card p-8 backdrop-blur-xl md:col-span-7 md:p-10">
              <div>
                <div className="mb-6 text-5xl text-accent-lavender" aria-hidden="true">✦</div>
                <h3 className="mb-4 text-3xl font-semibold">
                  SaaS Dashboards & Portals
                </h3>
                <p className="max-w-md text-lg text-site-muted">
                  I build internal tools, admin dashboards, onboarding portals,
                  and workflow-heavy SaaS products with clear interfaces,
                  maintainable architecture, and reliable data flows.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["REACT", "ANGULAR", "NEXT.JS"].map(
                  (pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-site-border bg-site-card px-3 py-1 text-[10px] font-semibold tracking-[0.1em] text-site-muted"
                    >
                      {pill}
                    </span>
                  ),
                )}
              </div>
            </MotionCard>

            <MotionCard className="col-span-12 flex min-h-[400px] flex-col rounded-2xl border border-site-border bg-site-card p-8 backdrop-blur-xl md:col-span-5 md:p-10">
              <div className="mb-6 text-5xl text-accent-lavender" aria-hidden="true">⌘</div>
              <h3 className="mb-4 text-3xl font-semibold">
                Full-Stack Product Engineering
              </h3>
              <p className="text-site-muted">
                From responsive UI to REST and GraphQL APIs, auth, database
                design, Docker, CI/CD, and AWS or Azure deployment. I can take a
                feature from idea to production.
              </p>
              <div className="mt-auto pt-6">
                <div className="h-0.5 w-full overflow-hidden rounded-full bg-site-border">
                  <div className="h-full w-[85%] bg-accent-lime" />
                </div>
                <div className="mt-2 flex justify-between text-[10px] font-semibold tracking-[0.1em] text-site-muted">
                  <span>DELIVERY FOCUS</span>
                  <span className="text-accent-lime">
                    CLEAN, MAINTAINABLE, PRODUCTION-READY
                  </span>
                </div>
              </div>
            </MotionCard>

            <MotionCard className="col-span-12 rounded-2xl border border-site-border bg-site-card p-8 backdrop-blur-xl md:col-span-4 md:p-10">
              <div className="mb-6 text-5xl text-accent-lavender" aria-hidden="true">⚡</div>
              <h3 className="mb-3 text-2xl font-medium">AI Automation</h3>
              <p className="text-site-muted">
                n8n, Make, and AI agent workflows for lead qualification,
                appointment booking, CRM updates, follow-ups, support triage,
                and reporting.
              </p>
            </MotionCard>

            <MotionCard className="relative col-span-12 overflow-hidden rounded-2xl border border-site-border bg-site-card p-8 backdrop-blur-xl md:col-span-8 md:p-10">
              <div className="relative z-10">
                <div className="mb-6 text-5xl text-accent-lavender" aria-hidden="true">◉</div>
                <h3 className="mb-3 text-3xl font-semibold">
                  Real-Time &amp; Cloud Systems
                </h3>
                <p className="max-w-lg text-lg text-site-muted">
                  Socket.io, WebRTC, Peer.js, AWS, Azure, Docker, PostgreSQL,
                  MongoDB, MySQL, and Redis for applications that need dependable
                  communication and scale.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-accent-lavender/10 blur-3xl transition-all duration-500 hover:bg-accent-lavender/20" />
            </MotionCard>
          </StaggerContainer>
        </SectionReveal>

        <section className="bg-site-section py-20">
          <SectionReveal className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-accent-lime">
                  PROJECT PROOF
                </span>
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Case-study proof from real product work.
                </h2>
              </div>
              <Link
                href="/work"
                className="w-fit border-b border-accent-lavender/30 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-accent-lavender outline-none transition-colors hover:border-accent-lavender focus-visible:ring-2 focus-visible:ring-accent-lavender/70"
              >
                See All Work ↗
              </Link>
            </div>

            <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  title: "RAMPART Fraud Detection Platform",
                  text: "Led frontend development for an Ohio government fraud detection platform with complex workflows and dashboard requirements.",
                  stat: "Gov",
                  label: "FRAUD DETECTION",
                  impact: "Workflow clarity for public-sector review teams",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBosRci_bAj6SwNn97Ah2ZxHqkRC4S-pm7Eb7gDWn5CNFn-Cfuh9REtCf2e6IqyMPaOAIQqPk9O5yvACyiPjg6Kkj4_2JkQc0taJlNnVfQRVbXBG6TX_2cq7ri4_muR1fRg2a4XH3r13MgQ6RkFbsn94By7WMeM3f1U-h8PIdqNVEBD5QyLk-bqQBBmO_0KjCYljX0kG6phqviTt6TF0Izm2QUceeBMO4M9a5NdDvd0fDK9F3ByNrm6qbb_j8UmsiUdq3e_A_QMCoSz",
                },
                {
                  title: "Elder Care Communication Platform",
                  text: "Implemented real-time audio and video functionality using Socket.io, WebRTC, and Peer.js for an elder care use case.",
                  stat: "RTC",
                  label: "AUDIO / VIDEO",
                  impact: "Dependable real-time communication for care workflows",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCwrg5TERTYkeACRX3wFRvhNadVDhI8KgSXCRYj4qpcwn4-Bz74_bupLaQ11Gaat3KJ5bRXpeq6J3O8gqtFQWcQLTlUP8xDHU9nkaRMdcdD1LC22bDzDyWMGJEU5KquwcraVYYbYcJJfSkayxuWXiD-flUD2T0rFbTlDu0ujS71cMZUFFngIOFvAhtkx5XP-zdV_6qSz1hlSJSNBzteDWCGyTHxbJE9WNoVNaGvHn1X3Vpir1FzhW5mk574boa0rc_Oc_gdV-z06MeM",
                },
              ].map((study) => (
                <Link
                  key={study.title}
                  href="/work"
                  className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent-lavender/70 focus-visible:ring-offset-4 focus-visible:ring-offset-site-section"
                >
                  <MotionCard className="h-full overflow-hidden rounded-2xl border border-site-border bg-site-card">
                    <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    </div>
                    <div className="p-6">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div>
                          <span className="mb-3 inline-flex rounded-full border border-site-border bg-site-panel px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-site-muted">
                            {study.impact}
                          </span>
                      <h3 className="mb-2 text-3xl font-semibold">
                        {study.title}
                      </h3>
                      <p className="mb-6 max-w-sm text-site-muted">{study.text}</p>
                        </div>
                        <div className="shrink-0 text-right">
                      <div className="text-2xl font-semibold text-accent-lime">
                        {study.stat}
                      </div>
                      <div className="text-[10px] font-semibold tracking-[0.1em] text-site-muted">
                        {study.label}
                      </div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-lavender">
                        View case study →
                      </span>
                    </div>
                  </MotionCard>
                </Link>
              ))}
            </StaggerContainer>
          </SectionReveal>
        </section>

        <SectionReveal className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              The Delivery Path.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-site-muted">
              A practical process for turning scope into production software.
            </p>
          </div>
          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              ["01", "Discover", "Clarify goals, users, workflows, and technical constraints."],
              ["02", "Blueprint", "Map UI, APIs, data models, automation steps, and deployment needs."],
              ["03", "Engineer", "Build with React, Angular, Next.js, Node.js, and clean integration patterns."],
              ["04", "Deploy", "Containerize, connect cloud services, and prepare reliable releases."],
              ["05", "Improve", "Refine performance, security, usability, and maintainability after launch."],
            ].map(([step, title, text]) => (
              <StaggerItem key={step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-site-border bg-site-card text-2xl font-semibold text-accent-lavender ring-4 ring-site-bg">
                  {step}
                </div>
                <h4 className="mb-2 text-2xl font-medium">{title}</h4>
                <p className="text-sm text-site-muted">{text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionReveal>

        <section className="bg-site-panel py-20">
          <SectionReveal className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="mb-4 text-4xl font-semibold tracking-tight">
                  Built for serious product teams.
                </h2>
                <p className="text-lg text-site-muted">
                  Proof points from production work, client-facing delivery, and
                  full-stack ownership.
                </p>
              </div>
              <StaggerContainer className="col-span-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-8">
                {[
                  {
                    name: "RAMPART",
                    role: "OHIO GOVERNMENT FRAUD PLATFORM",
                    quote:
                      '"Led frontend delivery for a fraud detection platform where workflow clarity, reliability, and delivery discipline mattered."',
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuA87sT5yDAcnRiIRWOTcCAgXKkNfdTPD0G0fw0sxeWo4_LptYbH91AJPnp_1LGNZszuUqlvF0cSeO0z5SdoxcGwPvRFingMEDSIQPoe2MVQGmlODuXoxwk57yquh6S-wB8_lHeIDSHOlR23rjNwnTZKBXi5214ZRFQqm4pr-udF_FHOJWJ9PUYuQZ1OW_ur0nHNO5dX33MrnIjS6Z2DNSNt_PIYINbMpTYbJowkjtwI6k65CI__BoQlu2-8asvWI_kGF_EvfPXYUdl6",
                  },
                  {
                    name: "MARTGO & POLDIT",
                    role: "MERN / GRAPHQL PRODUCT WORK",
                    quote:
                      '"Delivered e-commerce dashboard and data-management features with full client satisfaction and strong product ownership."',
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyUpYqMo8NRjbMaMuVwUZbfk2ZU6JWeC0F-mUaj7vxr2SCckKMgQrzsm2iXOofyalYjuEL2o-ZaWi1mmMljoWoup2s-1CTdKWg4h4Jk2Ocmk3cFVNdMuCTZiAtyT2fVBmwwez6pKVC4SM-lT0ytYJOJ9qHDSBwlNdVQrZP4sPPldUAUjvaKKPtS9KPkARg_q0sqaCL3N8njM7v8AWYBSs3220r57DMbV5zjbYRCAkEY89Q1RCOmUZbY8sVor-AvEpAV1cli1GvInSf",
                  },
                ].map((testimonial) => (
                  <MotionCard
                    key={testimonial.name}
                    className="rounded-2xl border border-site-border bg-site-card p-8"
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full border border-accent-lavender/30 object-cover"
                      />
                      <div>
                        <div className="text-xs font-semibold tracking-[0.1em]">
                          {testimonial.name}
                        </div>
                        <div className="text-[10px] text-site-muted">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg italic leading-relaxed text-site-muted">
                      {testimonial.quote}
                    </p>
                  </MotionCard>
                ))}
              </StaggerContainer>
            </div>
          </SectionReveal>
        </section>

        <SectionReveal className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 md:py-[120px]">
          <div className="relative overflow-hidden rounded-3xl bg-accent-lavender p-8 text-center sm:p-12 md:p-16">
            <h2 className="relative z-10 mb-6 text-5xl font-bold leading-tight text-cta-foreground md:text-7xl">
              Build your next <br />
              product with Adeel.
            </h2>
            <p className="relative z-10 mx-auto mb-10 max-w-xl text-lg text-cta-foreground/80">
              Need a SaaS dashboard, business portal, cloud-backed app, or AI
              automation workflow? I can turn the scope into a clean,
              production-ready build.
            </p>
            <div className="relative z-10 flex flex-wrap justify-center gap-6">
              <AnimatedLink
                href="#contact"
                variant="secondary"
                className="bg-site-section px-10 py-5 text-site-text"
              >
                START YOUR PROJECT
              </AnimatedLink>
              <AnimatedLink
                href="mailto:adeeljaved839@gmail.com?subject=Project%20Discovery%20Call"
                variant="secondary"
                className="border-cta-foreground/30 bg-transparent px-10 py-5 text-cta-foreground hover:bg-cta-foreground/10 hover:text-cta-foreground"
              >
                BOOK A CALL
              </AnimatedLink>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal
          id="contact"
          className="mx-auto w-full max-w-[1280px] scroll-mt-28 px-5 pb-24 sm:px-8"
        >
          <div className="grid gap-6 rounded-3xl border border-site-border bg-site-card p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl md:grid-cols-12 md:p-10">
            <div className="md:col-span-5">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-accent-lime">
                Contact
              </span>
              <h2 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Have a SaaS build, dashboard, or AI workflow in mind?
              </h2>
              <p className="text-site-muted">
                Send the goal, current stack, and timeline. I will reply with a
                practical next step and the cleanest path to production.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "SaaS dashboards and portals",
                  "Backend APIs and cloud delivery",
                  "Real-time audio/video systems",
                  "AI agents, n8n, and CRM automation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-site-border bg-site-panel p-4 text-sm font-medium text-site-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AnimatedLink
                  href="mailto:adeeljaved839@gmail.com?subject=Portfolio%20Project%20Inquiry"
                  className="px-8 py-4"
                >
                  Email Adeel →
                </AnimatedLink>
                <AnimatedLink href="/work" variant="secondary" className="px-8 py-4">
                  Review Work
                </AnimatedLink>
              </div>
            </div>
          </div>
        </SectionReveal>
      </main>

      <footer className="w-full rounded-t-xl border-t border-site-border bg-site-section">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-6 px-8 py-20">
          <div className="col-span-12 lg:col-span-6">
            <div className="mb-6 text-3xl font-semibold">Adeel Javed</div>
            <p className="mb-6 max-w-sm text-site-muted">
              Senior full-stack engineer for SaaS dashboards, portals, backend
              APIs, cloud deployments, real-time features, and AI automation.
            </p>
            <div className="flex gap-4 text-sm font-semibold text-site-muted">
              <Link href="/work" className="transition-colors hover:text-accent-lavender">
                Work
              </Link>
              <a href="mailto:adeeljaved839@gmail.com" className="transition-colors hover:text-accent-lavender">
                Email
              </a>
              <Link href="/about" className="transition-colors hover:text-accent-lavender">
                About
              </Link>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.1em]">
              SITEMAP
            </h4>
            <ul className="space-y-3 text-site-muted">
              {[
                ["Work", "/work"],
                ["Services", "/services"],
                ["Stack", "/about"],
                ["Availability", "/#contact"],
              ].map(([item, href]) => (
                  <li key={item}>
                    <Link
                      className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-accent-lavender"
                      href={href}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.1em]">
              LEGAL &amp; CONTACT
            </h4>
            <ul className="space-y-3 text-site-muted">
              <li>
                <a
                  className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-accent-lavender"
                  href="mailto:adeeljaved839@gmail.com"
                >
                  adeeljaved839@gmail.com
                </a>
              </li>
              <li className="text-sm text-site-muted/70">
                Privacy and terms available on request.
              </li>
            </ul>
          </div>

          <div className="col-span-12 mt-10 flex flex-col items-center justify-between gap-4 border-t border-site-border pt-8 text-center md:flex-row md:text-left">
            <div className="text-sm text-site-muted">
              © 2026 Adeel Javed — Full-stack product engineering.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-lime" />
              <span className="text-[10px] font-semibold tracking-[0.1em] text-site-muted">
                AVAILABLE FOR FREELANCE PROJECTS
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
