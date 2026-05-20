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
  title: "Insights",
  description:
    "Engineering notes from Adeel Javed on full-stack delivery, SaaS dashboards, cloud architecture, AI automation, and remote product engineering.",
};

export default function InsightsPage() {
  const posts = [
    {
      title: "Designing Dashboards Recruiters Can Understand Quickly",
      tag: "SaaS",
      text: "How layout hierarchy, metrics, and workflow copy make technical portfolio work easier to evaluate.",
    },
    {
      title: "When AI Automation Needs Human Approval",
      tag: "AI Automation",
      text: "A practical approach to agents, CRM updates, follow-ups, and safe handoff points.",
    },
    {
      title: "Shipping Cloud Features Without Creating Ops Debt",
      tag: "Cloud",
      text: "Notes on Docker, CI/CD, environment design, and release habits that keep small teams moving.",
    },
  ];

  return (
    <div className="min-h-screen bg-site-bg text-site-text selection:bg-accent-lavender selection:text-cta-foreground">
      <SiteNav />

      <main id="main" className="pt-20">
        <SectionReveal className="mx-auto max-w-[1280px] px-5 pb-12 pt-20 sm:px-8">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-2xl">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-accent-lime">
                Engineering Notes
              </span>
              <h1 className="mb-3 text-5xl font-bold tracking-tight md:text-7xl">
                Practical Insights
              </h1>
              <p className="text-lg text-site-muted">
                Notes on full-stack product delivery, SaaS dashboards, clean
                backend architecture, cloud deployment, AI automation, and
                remote engineering workflows.
              </p>
            </div>
            <div className="w-full md:w-80">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-site-muted" aria-hidden="true">⌕</span>
                <input
                  aria-label="Search engineering notes"
                  className="w-full border-0 border-b-2 border-site-border bg-site-panel px-12 py-4 text-sm outline-none transition-colors focus:border-accent-lavender"
                  placeholder="Search notes..."
                  type="text"
                />
              </div>
            </div>
          </div>
        </SectionReveal>

        <section className="mx-auto mb-12 max-w-[1280px] px-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {["All Posts", "SaaS", "Engineering", "Cloud", "AI Automation"].map(
              (item, idx) => (
                <button
                  key={item}
                  className={`whitespace-nowrap rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.1em] ${
                    idx === 0
                      ? "bg-accent-lavender text-cta-foreground"
                      : "border border-site-border bg-site-card text-site-muted"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </section>

        <SectionReveal className="mx-auto mb-20 max-w-[1280px] px-5 sm:px-8">
          <Link href="/#contact" className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent-lavender/70">
          <div className="grid min-h-[500px] grid-cols-1 overflow-hidden rounded-2xl border border-site-border bg-site-card md:grid-cols-12">
            <div className="relative h-64 overflow-hidden md:col-span-7 md:h-full">
              <Image
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6AXxaTNqwbnDqCs7DbcXq_MjnRLA5Mg5KJT9mPY2dF5NPKWwH_LZCO2ua9y4c5mo3RqnZmUQnSWiZ-OmVGsYIYocaVB8QHsiuvNS346NP6l5BpnHUBmV1Arxycpgfz26OLfjp6qmqyJolMtILSFZllCltGT-uewqt5ILP29EgeNjCPJj4IVEKJY-fB8q4dE2Cz1L_CDi5hpxxZoSSgKhtzLOKBePdCaEml1m5Rgeer5iVYqUuqFqdbscIBRbwP8-DDmGenJPsmv4b"
                alt="Featured article visual"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:col-span-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded border border-accent-lime/20 bg-accent-lime/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-accent-lime">
                  Featured
                </span>
                <span className="text-xs text-site-muted">12 Min Read</span>
              </div>
              <h2 className="mb-4 text-4xl font-semibold tracking-tight">
                Strong Foundations Before AI Hype: Building Automation That
                Teams Can Trust
              </h2>
              <p className="mb-6 text-site-muted">
                AI workflows work best when the business process is clear first:
                intake, decision logic, CRM updates, follow-up, reporting, and
                human handoff all need dependable engineering around them.
              </p>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-lavender">
                Discuss an automation strategy →
              </span>
            </div>
          </div>
          </Link>
        </SectionReveal>

        <section className="mx-auto mb-24 max-w-[1280px] px-5 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <MotionCard
                key={post.title}
                className="rounded-2xl border border-site-border bg-site-card p-6 backdrop-blur-xl"
              >
                <span className="mb-4 inline-flex rounded-full border border-accent-lavender/20 bg-accent-lavender/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-lavender">
                  {post.tag}
                </span>
                <h2 className="mb-3 text-2xl font-medium">{post.title}</h2>
                <p className="text-site-muted">{post.text}</p>
              </MotionCard>
            ))}
          </StaggerContainer>
        </section>
      </main>
    </div>
  );
}
