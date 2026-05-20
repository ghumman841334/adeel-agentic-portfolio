import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  MotionCard,
  SectionReveal,
  StaggerContainer,
} from "@/components/motion-primitives";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Production case studies from Adeel Javed across SaaS dashboards, public-sector workflows, migration portals, real-time communication, and MERN products.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-site-bg text-site-text selection:bg-accent-lavender/30">
      <SiteNav />

      <main id="main" className="pt-20">
        <SectionReveal className="relative mx-auto max-w-[1280px] overflow-hidden px-5 py-20 sm:px-8">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(192,193,255,0.08)_0%,transparent_70%)] opacity-50 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start gap-6">
            <span className="border-l-2 border-accent-lime py-1 pl-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime">
              Selected Work
            </span>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
              Production projects with practical business value.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-site-muted">
              A focused look at SaaS dashboards, government workflow platforms,
              real-time communication features, cloud-backed portals, and
              data-heavy applications I have helped deliver.
            </p>
          </div>
        </SectionReveal>

        <section className="sticky top-20 z-40 border-b border-site-border bg-site-bg/80 py-6 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-4 px-5 sm:px-8 md:flex-row">
            <div className="flex w-full flex-wrap gap-3 md:w-auto">
              {["Type: All", "Stack: All", "Domain: All"].map((f) => (
                <button
                  key={f}
                  className="rounded-lg border border-site-border bg-site-panel px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:border-accent-lavender/50"
                >
                  {f} ▾
                </button>
              ))}
            </div>
            <div className="flex w-full items-center gap-2 border-b border-site-border md:w-auto md:border-none">
              <span className="text-site-muted" aria-hidden="true">⌕</span>
              <input
                aria-label="Search project proof"
                className="w-full bg-transparent py-2 text-sm text-site-text outline-none placeholder:text-site-muted"
                placeholder="Search project proof..."
                type="text"
              />
            </div>
          </div>
        </section>

        <SectionReveal className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <Link href="/#contact" className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent-lavender/70 md:col-span-8">
              <MotionCard className="relative h-full overflow-hidden rounded-2xl border border-site-border bg-site-card backdrop-blur-xl">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-_XTnQTHkTZcRCLNsieigsDcAu8QH82ky1frb55DYv7TliN6tWqPyzdfQYFk9EqAgoiXJ5taEgKeAO2p-tPQ9Qr0XC7JI7sNg7TJLrD-GrNHiEg7Cahpf73rjsbhs6x3ly2yl_ApwmBmMleZ9sxnfWpL6ewaOttxeXReuz36387JAmrZx_w0QFhA09HTi-1Sx-IIt5lFyjNt0oX2GQgCvXxWPxGH1DJhBOQE2LWAO11arVf4spuqCpdPXOVS_hHFqWttc2YqYfDbN"
                  alt="RAMPART fraud detection platform"
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex gap-2">
                  <span className="rounded border border-site-border bg-site-panel px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-site-muted">
                    Public Sector
                  </span>
                  <span className="rounded border border-site-border bg-site-panel px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-site-muted">
                    React
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-3xl font-semibold transition-colors group-hover:text-accent-lavender">
                    RAMPART Fraud Detection Platform
                  </h3>
                  <div className="text-right">
                    <div className="text-5xl font-bold leading-none text-accent-lime">
                      Gov
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-site-muted">
                      Fraud Workflow
                    </p>
                  </div>
                </div>
                <p className="mt-3 max-w-xl text-site-muted">
                  Led frontend development for an Ohio government fraud
                  detection platform, focusing on complex workflows, dashboard
                  usability, and delivery within scope and timeframe.
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-accent-lavender">
                  Discuss similar project →
                </p>
              </div>
              </MotionCard>
            </Link>

            <Link href="/#contact" className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent-lavender/70 md:col-span-4">
              <MotionCard className="h-full overflow-hidden rounded-2xl border border-site-border bg-site-card">
              <div className="relative h-64 overflow-hidden md:h-96">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDW11w_UrOjB3IViUqxURXyFJ03A3j5P2DZ7LSjVkfiq1yKp5aYGMinz5cCKiyGcpcP53IabUHF_sAxEafvCJ2ZEnoP5dWU4q5ZL4RUxPW3dJflH0M8w94BirWrLz49ZWArsnMOifRs-7QrmBVxrGhe9flmCIwcDdmvPsyzN85WwzPHxULm6NyoB2Q_LamrQrrDUTwrNZ-3EhV97tz62L1Gq8efSoXEvhmDOIjE-s1SUPgYlQ9mg2spbFrfPaDMYSyXh52NWcRSTbI"
                  alt="Migration Portal project"
                  fill
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium transition-colors group-hover:text-accent-lavender">
                  Migration Portal
                </h3>
                <div className="my-3 border-l-2 border-accent-lime pl-3">
                  <div className="text-3xl font-bold text-accent-lime">Azure</div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-site-muted">
                    Serverless Portal
                  </p>
                </div>
                <p className="text-sm text-site-muted">
                  Built an onboarding platform for idea submission and
                  collaboration using React, Azure Functions, and PostgreSQL.
                </p>
              </div>
              </MotionCard>
            </Link>

            {[
              {
                title: "Elder Care Communication Platform",
                stat: "RTC",
                text: "Implemented audio and video calling features for an elder care platform using real-time web technologies.",
                tags: ["MERN", "Socket.io", "WebRTC", "Peer.js"],
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAezQ2mtzYs5ySiIubEqUOinYJa-knLklG4VSt8x9ezF1mbAon8N_pnZDicbPvj88GZR-Zn9-SlU9U8uGG9kSHOrCnjz5pc5zLh9cgY3bRMK0jJnzoLLUFMXdji0P_3Qc-9tr_Ua1B5EaTOj_25p_LwxNAA5SydkgHeF46ppd5pJ78VnlLemP3XJQlpVpHkUylE9C-Rukot34EsPLLeAKVVJcjsd9vJb61FPVYL3QqujhzItN0W9Kyf-4JrFA8v4hX7yJGKKsLnx6tL",
              },
              {
                title: "MartGo & POLDIT",
                stat: "MERN",
                text: "Delivered e-commerce dashboard features and GraphQL-based data-management work with strong client satisfaction.",
                tags: ["React", "Node.js", "GraphQL", "Dashboard"],
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDrWRsXPoLhJXveCsRYpQ8Wi5ld5fNtihvZK9qBfYkFBbsanNwaGkpPzZVLAbBy4R9ThGt9B78a7rIgSq1slMjKOkIPR1Z_O1SsvrIQ_bPtKbCaLT0_d3k0k5g1T3-h3oo2SBkYmu1xxsK0JInKgXa1yg1NEEmY_qUl-p6W6VqE1YDgAJFSxavSJXLjj7kbXWr30faHf2_CuE7p76TpVVmdEhZBzl1aYN5IZ45vM_IRiECzeke-Flv0GhctRa7ESVGuUX1geVDNW_sq",
              },
            ].map((project) => (
              <Link
                key={project.title}
                href="/#contact"
                className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent-lavender/70 md:col-span-6"
              >
                <MotionCard className="h-full overflow-hidden rounded-2xl border border-site-border bg-site-card">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-medium transition-colors group-hover:text-accent-lavender">
                      {project.title}
                    </h3>
                    <span className="text-3xl font-bold text-accent-lime">
                      {project.stat}
                    </span>
                  </div>
                  <p className="text-site-muted">{project.text}</p>
                  <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="whitespace-nowrap rounded-full border border-accent-lavender/30 px-2 py-0.5 text-[10px] text-accent-lavender"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                </MotionCard>
              </Link>
            ))}
          </StaggerContainer>
        </SectionReveal>
      </main>
    </div>
  );
}
