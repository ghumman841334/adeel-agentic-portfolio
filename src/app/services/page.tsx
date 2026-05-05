import Link from "next/link";

export default function ServicesPage() {
  const navItems = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services", active: true },
    { label: "Lab", href: "/lab" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#" },
  ];

  const heroCards = [
    { icon: "◧", title: "UI/UX Design", color: "text-[#c0c1ff]" },
    { icon: "</>", title: "Frontend", color: "text-[#a4d64c]" },
    { icon: "⚡", title: "Optimization", color: "text-[#c0c1ff]" },
    { icon: "↗", title: "CRO", color: "text-[#a4d64c]" },
  ];

  const processSteps = [
    {
      step: "01.",
      title: "Technical Discovery",
      text: "We dive deep into your codebase and business goals to map the most efficient path forward.",
    },
    {
      step: "02.",
      title: "Rapid Prototyping",
      text: "Low-fidelity logic meets high-fidelity design. We iterate fast to validate user flows before build.",
    },
    {
      step: "03.",
      title: "Precision Build",
      text: "Our engineers translate pixels into performance-first code with 100% test coverage.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] selection:bg-[#c0c1ff]/30">
      <nav className="fixed top-0 z-50 w-full border-b border-[#464554]/20 bg-[#131313]/60 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-8">
          <div className="text-2xl font-bold tracking-tight">STUDIO.FE</div>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`border-b-2 pb-1 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                  item.active
                    ? "border-[#c0c1ff] text-[#c0c1ff]"
                    : "border-transparent text-[#c7c4d7] hover:text-[#e5e2e1]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="rounded-full bg-[#c0c1ff] px-6 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#1000a9] transition-all duration-200 hover:bg-[#c0c1ff]/90 active:scale-95">
            Start Project
          </button>
        </div>
      </nav>

      <main className="pt-32">
        <section className="mx-auto mb-20 max-w-[1280px] px-8">
          <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#c0c1ff]">
                Excellence by Default
              </span>
              <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
                Precision Engineering for{" "}
                <span className="bg-gradient-to-r from-[#c0c1ff] to-[#a4d64c] bg-clip-text text-transparent">
                  Digital Leaders.
                </span>
              </h1>
            </div>
            <div className="pb-4 md:col-span-4">
              <p className="text-lg text-[#c7c4d7]">
                We bridge the gap between complex technical challenges and
                high-performance user experiences. Specialized in scaling the
                next generation of web applications.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {heroCards.map((card) => (
              <article
                key={card.title}
                className="flex h-48 flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#c0c1ff]/30 hover:bg-white/[0.05]"
              >
                <span className={`text-3xl ${card.color}`}>{card.icon}</span>
                <h3 className="text-2xl font-medium">{card.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-8 py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <article className="relative min-h-[400px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:col-span-7">
              <div className="relative z-10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-[#c0c1ff]">
                  01 / Creative Direction
                </span>
                <h2 className="mb-6 text-5xl font-semibold tracking-tight">
                  User Interface &amp; Experience
                </h2>
                <p className="mb-8 max-w-md text-[#c7c4d7]">
                  Crafting interfaces that are as functional as they are
                  beautiful. We focus on interaction design that minimizes
                  friction and maximizes delight.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["DESIGN SYSTEMS", "PROTOTYPING", "USER RESEARCH"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded border border-[#464554]/30 bg-[#201f1f] px-3 py-1 text-[10px] font-semibold tracking-[0.1em]"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#c0c1ff]/10 blur-[100px]" />
            </article>

            <article className="flex flex-col justify-between rounded-xl border border-[#a4d64c]/20 bg-white/[0.03] p-8 backdrop-blur-xl md:col-span-5">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-[#a4d64c]">
                  02 / Architecture
                </span>
                <h2 className="mb-4 text-3xl font-semibold">Frontend Engineering</h2>
                <ul className="space-y-3 text-[#c7c4d7]">
                  {[
                    "Next.js & React Mastery",
                    "Typescript Rigor",
                    "Atomic Component Logic",
                  ].map((line) => (
                    <li key={line} className="flex items-center gap-2">
                      <span className="text-[#a4d64c]">●</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCQRJvL4j32ORdb3TTSiC1_uTGLzTlQKpHGbOTqilHkY0iG_OnlWWd94b8BNY5fOib0JSdzJ6HBjVYDfjVOKzIW8-xYI8HbD2TsNQeXC_Gj2b6qYM5FIGwHuRC_-gx5MNNT9fUKg_3UGNR7Pi73zN_my2Zk7oEcUG5Sp6bBrBSojavg9FF7pofqd9cBBZg9sj2Nhtj1RRn4IKv-iiGVllXOjRDFGqpWcyXo_VTbX82cyGvbUcjKGpcIBdZ1rTzcSCguqsHDHuXC_YD"
                  alt="Engineering workspace"
                  className="h-40 w-full rounded-lg object-cover opacity-50 grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </article>

            <article className="rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:col-span-4">
              <span className="mb-4 block text-2xl text-[#c0c1ff]">⚡</span>
              <h3 className="mb-4 text-2xl font-medium">Performance Audit</h3>
              <p className="mb-6 text-[#c7c4d7]">
                Eliminate performance bottlenecks. We target sub-second TTI and
                perfect Core Web Vitals scores.
              </p>
              <div className="h-1 w-full overflow-hidden rounded-full bg-[#201f1f]">
                <div className="h-full w-[98%] bg-[#a4d64c]" />
              </div>
              <div className="mt-2 flex justify-between text-[10px] font-semibold tracking-[0.1em] text-[#a4d64c]">
                <span>LCP OPTIMIZED</span>
                <span>98/100</span>
              </div>
            </article>

            <article className="rounded-xl border border-white/10 bg-gradient-to-br from-[#131313] to-[#2a2a2a] p-8 md:col-span-8">
              <div className="flex h-full flex-col items-center gap-8 md:flex-row">
                <div className="flex-1">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-[#c0c1ff]">
                    03 / Conversion
                  </span>
                  <h2 className="mb-4 text-3xl font-semibold">
                    Growth &amp; Optimization
                  </h2>
                  <p className="text-[#c7c4d7]">
                    Data-driven refinements to your user journey. We implement
                    A/B testing and heat-mapping to turn traffic into measurable
                    revenue growth.
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 gap-4 md:w-1/3">
                  {["◔", "▦", "◎"].map((icon) => (
                    <div
                      key={icon}
                      className="flex aspect-square items-center justify-center rounded-lg border border-[#464554]/10 bg-[#201f1f]"
                    >
                      <span className="text-2xl text-[#c7c4d7]">{icon}</span>
                    </div>
                  ))}
                  <div className="flex aspect-square items-center justify-center rounded-lg bg-[#a4d64c]">
                    <span className="text-2xl text-[#233600]">↗</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-[#0e0e0e] py-20">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a4d64c]">
                Workflow
              </span>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight">
                The STUDIO.FE Standard
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {processSteps.map((step, idx) => (
                <article
                  key={step.title}
                  className={`border-l p-8 transition-colors ${
                    idx === 1
                      ? "border-[#464554]/20 hover:border-[#a4d64c]"
                      : "border-[#464554]/20 hover:border-[#c0c1ff]"
                  }`}
                >
                  <span className="mb-4 block text-3xl text-[#464554]/40">
                    {step.step}
                  </span>
                  <h3 className="mb-3 text-2xl font-medium">{step.title}</h3>
                  <p className="text-[#c7c4d7]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-8 py-20">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              "What is your typical project timeline?",
              "Do you offer ongoing maintenance?",
              "Can you work with our existing design team?",
              "What technologies do you specialize in?",
            ].map((question, idx) => (
              <article
                key={question}
                className={`rounded-xl border bg-white/[0.03] p-6 backdrop-blur-xl ${
                  idx === 1
                    ? "border-[#c0c1ff]/30"
                    : "border-white/10 hover:border-[#c0c1ff]/30"
                }`}
              >
                <div className="mb-4 flex cursor-pointer items-center justify-between">
                  <h4
                    className={`text-xl font-medium ${
                      idx === 1 ? "text-[#c0c1ff]" : "text-[#e5e2e1]"
                    }`}
                  >
                    {question}
                  </h4>
                  <span
                    className={`text-2xl text-[#c0c1ff] ${
                      idx === 1 ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                {idx === 1 && (
                  <p className="text-[#c7c4d7]">
                    Yes, we provide Retainer Engineering services for enterprise
                    partners who require constant iterative improvements,
                    security patches, and performance monitoring.
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-8 py-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-t from-[#c0c1ff]/5 to-transparent p-16 text-center backdrop-blur-xl">
            <div className="relative z-10">
              <h2 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Ready to upgrade your <br />
                <span className="text-[#a4d64c]">digital infrastructure?</span>
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-[#c7c4d7]">
                Join the ranks of high-growth teams who trust STUDIO.FE for
                their most critical frontend challenges. Discovery calls are 30
                minutes and purely technical.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button className="rounded-full bg-[#a4d64c] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#233600] shadow-[0_0_20px_rgba(164,214,76,0.15)] transition-all hover:-translate-y-0.5">
                  Book Discovery Call
                </button>
                <button className="rounded-full border border-[#464554] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-[#3a3939]">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,#fff_1px,transparent_0)] [background-size:40px_40px]" />
          </div>
        </section>
      </main>

      <footer className="w-full rounded-t-xl border-t border-[#464554]/20 bg-[#0e0e0e]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-8 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-4 text-3xl font-semibold">STUDIO.FE</div>
            <p className="max-w-xs text-[#c7c4d7]">
              The frontend partner for teams that refuse to compromise on
              quality and speed.
            </p>
          </div>
          <div className="md:col-span-2">
            <h5 className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-[#a4d64c]">
              Services
            </h5>
            <ul className="space-y-3 text-[#c7c4d7]">
              {["Design", "Engineering", "Strategy"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-[#c0c1ff]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h5 className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-[#a4d64c]">
              Studio
            </h5>
            <ul className="space-y-3 text-[#c7c4d7]">
              {["Case Studies", "Stack", "Availability"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-[#c0c1ff]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h5 className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-[#a4d64c]">
              Newsletter
            </h5>
            <div className="flex border-b border-[#464554] pb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-none bg-transparent text-[#e5e2e1] outline-none placeholder:text-[#c7c4d7]"
              />
              <button className="text-[#c0c1ff]">→</button>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#464554]/20 pt-8 md:col-span-12 md:flex-row">
            <p className="text-[#c7c4d7]">
              © 2024 STUDIO.FE — Engineered with Precision.
            </p>
            <div className="flex gap-6 text-[#c7c4d7]">
              <a href="#" className="transition-colors hover:text-[#c0c1ff]">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-[#c0c1ff]">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
