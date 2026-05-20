import type { Metadata } from "next";

import {
  MotionCard,
  SectionReveal,
  StaggerContainer,
} from "@/components/motion-primitives";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Build Lab",
  description:
    "Experiments from Adeel Javed around AI automation, agentic workflows, cloud prototypes, real-time features, and product ideas.",
};

export default function LabPage() {
  return (
    <div className="min-h-screen bg-site-bg font-sans text-site-text selection:bg-accent-lavender selection:text-cta-foreground">
      <SiteNav />

      <main id="main" className="pt-20">
        <SectionReveal className="relative overflow-hidden py-20 [background-image:linear-gradient(rgba(192,193,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(192,193,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]">
          <div className="relative z-10 mx-auto max-w-[1280px] px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-lime/30 bg-accent-lime/10 px-3 py-1 text-accent-lime">
              <span className="text-sm" aria-hidden="true">⚗</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                Experiments &amp; Automation
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              The <span className="text-accent-lavender">Build Lab</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-site-muted">
              A working space for AI automations, agentic workflows, cloud
              prototypes, real-time features, and product ideas that can become
              reliable client solutions.
            </p>
          </div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-lavender/5 blur-[120px]" />
        </SectionReveal>

        <section className="pb-20">
          <div className="mx-auto max-w-[1280px] px-8">
            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <MotionCard className="group relative overflow-hidden rounded-2xl border border-site-border bg-site-card p-6 backdrop-blur-xl md:col-span-8">
                <div className="mb-10 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-3xl font-semibold">
                      AI Lead Qualification Workflow
                    </h3>
                    <p className="max-w-md text-site-muted">
                      An n8n or Make workflow that captures leads, qualifies
                      them with AI, triggers follow-up, updates the CRM, and
                      keeps a human approval point for sensitive actions.
                    </p>
                  </div>
                  <span className="text-5xl text-accent-lime" aria-hidden="true">▦</span>
                </div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {["N8N", "MAKE", "AI AGENTS"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-site-border bg-site-panel px-3 py-1 text-[10px] font-semibold tracking-[0.1em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="h-48 overflow-hidden rounded-lg border border-site-border bg-site-section p-6 font-mono text-sm text-accent-lime/80" aria-label="Example automation workflow code">
                  <pre>{`const workflow = new ClientAutomation({
  intake: 'website-form',
  qualify: 'ai-agent',
  handoff: 'human-review'
});

workflow.on('qualified-lead', (lead) => {
  updateCRM(lead);
  scheduleFollowUp(lead);
});`}</pre>
                </div>
              </MotionCard>

              <MotionCard className="rounded-2xl border border-site-border bg-site-card p-6 md:col-span-4">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-accent-lime/20 bg-accent-lime/10">
                  <span className="text-accent-lime" aria-hidden="true">▣</span>
                </div>
                <h3 className="mb-2 text-2xl font-medium">Automation Opportunities</h3>
                <p className="text-site-muted">
                  Practical workflows where AI can reduce manual work without
                  removing human control from important decisions.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    ["LEAD QUALIFICATION", "AI", "70%"],
                    ["CRM FOLLOW-UP", "N8N", "55%"],
                  ].map(([label, value, width]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-xs font-semibold uppercase tracking-[0.1em]">
                        <span>{label}</span>
                        <span className="text-accent-lime">{value}</span>
                      </div>
                      <div
                        className="h-1 w-full overflow-hidden rounded-full bg-site-panel"
                        role="progressbar"
                        aria-label={`${label} automation opportunity`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={Number(width.replace("%", ""))}
                      >
                        <div
                          className="h-full bg-accent-lime"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </MotionCard>
            </StaggerContainer>
          </div>
        </section>
      </main>
    </div>
  );
}
