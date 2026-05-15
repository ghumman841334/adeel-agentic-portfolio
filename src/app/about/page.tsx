import Link from "next/link";

export default function AboutPage() {
  const navItems = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Lab", href: "/lab" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#" },
  ];

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
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] selection:bg-[#c0c1ff]/30">
      <nav className="fixed top-0 z-50 h-20 w-full border-b border-[#464554]/20 bg-[#131313]/60 backdrop-blur-xl">
        <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-8">
          <div className="text-2xl font-bold tracking-tight">Adeel Javed</div>
          <div className="hidden items-center gap-12 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.1em] text-[#c7c4d7] transition-colors hover:text-[#e5e2e1]"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="rounded-lg bg-[#c0c1ff] px-6 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#1000a9] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(164,214,76,0.3)] active:scale-95">
            Start a Project
          </button>
        </div>
      </nav>

      <main className="pt-20">
        <section className="relative mx-auto max-w-[1280px] overflow-hidden px-8 py-20">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
            <div className="z-10 md:col-span-7">
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-[#a4d64c]">
                Senior Full-Stack Engineer
              </span>
              <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
                Building SaaS dashboards, cloud apps, and AI workflows.
              </h1>
              <p className="mb-12 max-w-xl text-lg leading-relaxed text-[#c7c4d7]">
                I am Adeel Javed, a full-stack engineer based in Lahore,
                Pakistan. I build production-ready web applications, dashboards,
                APIs, cloud deployments, real-time communication features, and AI
                automation workflows for teams that need reliable delivery.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="rounded-xl bg-[#c0c1ff] px-8 py-4 text-base font-bold text-[#1000a9] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Get in Touch
                </button>
                <button className="rounded-xl border border-[#a4d64c] px-8 py-4 text-base font-bold text-[#a4d64c] transition-colors hover:bg-[#a4d64c]/5 active:scale-[0.98]">
                  View Stack
                </button>
              </div>
            </div>

            <div className="relative md:col-span-5">
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                <img
                  alt="Founder Portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQEMMat_8bP0vA2vJ1bJ4QH9UwNk0EGajd44sCpYfUxwkvSsvTsOPRCCOeRqcNclewdFSZ4eFLhl9bwWNmhF51Y1EbSS7_1dGQQ2PVokbuRDqnpbhnWkm2G5_mVE592v6SxBTTvMMqEG4SQd1MhSrlAi__lVpNYquBFmrr54yLZm8H5VatmcLAh5RvTJUEHjnX-2WkHp9IwY7EAjSyQFhEUr-KsS7ipDYoPIcREQXPqC1GhbCBRdK29oypEaU9OA3qC1YjY-FgFGls"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 bg-[radial-gradient(circle_at_center,rgba(192,193,255,0.08)_0%,transparent_70%)]" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-8 py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-1 text-5xl font-semibold tracking-tight">
              Technical Stack
            </h2>
            <p className="text-[#c7c4d7]">
              Tools I use to build maintainable full-stack products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {stackItems.map(([icon, label]) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#c0c1ff]/30"
              >
                <span className="text-4xl text-[#c0c1ff]">{icon}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.1em]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1c1b1b] px-8 py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {principles.map((item) => (
                <article key={item.title} className="p-6">
                  <div className="mb-6 h-1 w-12 border-t-2 border-[#a4d64c]" />
                  <h3 className="mb-3 text-3xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-[#c7c4d7]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-8 py-20">
          <h2 className="mb-12 text-5xl font-semibold tracking-tight">Journey</h2>
          <div className="space-y-6">
            {journeyItems.map((item) => (
              <div key={item.years} className="group grid grid-cols-1 gap-6 md:grid-cols-12">
                <div className="md:col-span-2">
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.1em] ${
                      item.active ? "text-[#c0c1ff]" : "text-[#c7c4d7]/60"
                    }`}
                  >
                    {item.years}
                  </span>
                </div>
                <div className="flex items-start justify-start pt-1 md:col-span-1 md:justify-center">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      item.active
                        ? "bg-[#a4d64c] shadow-[0_0_10px_rgba(164,214,76,0.5)]"
                        : "bg-[#464554]"
                    }`}
                  />
                </div>
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors group-hover:border-[#c0c1ff]/20 md:col-span-9">
                  <h4 className="text-2xl font-medium">{item.role}</h4>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#c7c4d7]">
                    {item.company}
                  </p>
                  <p className="leading-relaxed text-[#c7c4d7]">
                    {item.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full rounded-t-2xl border-t border-[#464554]/20 bg-[#0e0e0e]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-8 py-20 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="mb-3 text-3xl font-semibold">Adeel Javed</div>
            <p className="mb-6 max-w-xs text-[#c7c4d7]">
              Building practical full-stack products and automation workflows.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-50">
              Navigation
            </span>
              {["Work", "Stack", "Availability"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#c7c4d7] transition-all duration-200 hover:translate-x-1 hover:text-[#c0c1ff]"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-50">
              Legal
            </span>
            {["Privacy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#c7c4d7] transition-all duration-200 hover:translate-x-1 hover:text-[#c0c1ff]"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mt-12 border-t border-[#464554]/10 pt-12 md:col-span-12">
            <p className="text-[#a4d64c]">
              © 2026 Adeel Javed — Full-stack product engineering.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
