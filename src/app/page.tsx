import Link from "next/link";

export default function Home() {
  const navItems = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Lab", href: "/lab" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e2e1]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#131313]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-8">
          <div className="text-2xl font-bold tracking-tight">STUDIO.FE</div>
          <div className="hidden items-center gap-10 md:flex">
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
          <button className="rounded-full bg-[#c0c1ff] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#1000a9] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(164,214,76,0.4)]">
            Start Project
          </button>
        </div>
      </nav>

      <main className="relative overflow-x-hidden pt-20">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(192,193,255,0.06)_0%,transparent_70%)]" />

        <section className="mx-auto mt-12 w-full max-w-[1280px] px-8 py-20">
          <div className="grid grid-cols-12 items-center gap-6">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                High-performance <br />
                <span className="text-[#c0c1ff]">web experiences</span> <br />
                that scale.
              </h1>
              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[#c7c4d7]">
                We are a precision-engineered frontend agency specializing in
                high-load SaaS, complex dashboards, and ultra-fluid interfaces
                for category-leading brands.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button className="rounded-full bg-[#c0c1ff] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#1000a9] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(164,214,76,0.3)]">
                  Start Project →
                </button>
                <button className="rounded-full border border-[#a4d64c] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#a4d64c] transition-colors hover:bg-[#a4d64c]/5">
                  View Our Stack
                </button>
              </div>
            </div>

            <div className="col-span-12 mt-8 lg:col-span-4 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["10y+", "EXP. SENIORITY"],
                  ["50+", "PRODUCT SHIPS"],
                  ["99", "LIGHTHOUSE AVG."],
                  ["2.4s", "AVG. TTI LOAD"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-[#c0c1ff]/40"
                  >
                    <div className="mb-1 text-3xl font-semibold text-[#a4d64c]">
                      {value}
                    </div>
                    <div className="text-[10px] font-semibold tracking-[0.14em] text-[#c7c4d7]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-10 border-y border-white/10 px-8 py-6 opacity-50 grayscale transition-all duration-500 hover:grayscale-0">
          {["ALPHA.SYS", "NEXUS.LAB", "QUANTUM", "VERTI.GO", "VELOCITI"].map(
            (company) => (
              <span key={company} className="text-2xl font-bold tracking-tight">
                {company}
              </span>
            ),
          )}
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-8 py-20">
          <div className="mb-12">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-[#a4d64c]">
              OUR CAPABILITIES
            </span>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Architecting the future of the web.
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 flex min-h-[400px] flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:col-span-7">
              <div>
                <div className="mb-6 text-5xl text-[#c0c1ff]">✦</div>
                <h3 className="mb-4 text-3xl font-semibold">
                  Strategic UI/UX Design
                </h3>
                <p className="max-w-md text-lg text-[#c7c4d7]">
                  We bridge the gap between aesthetic brilliance and technical
                  feasibility. Design systems that do not just look good, but
                  perform at scale.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["DESIGN SYSTEMS", "ACCESSIBILITY", "FIGMA-TO-CODE"].map(
                  (pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold tracking-[0.1em] text-[#c7c4d7]"
                    >
                      {pill}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="col-span-12 flex min-h-[400px] flex-col rounded-xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:col-span-5">
              <div className="mb-6 text-5xl text-[#c0c1ff]">⌘</div>
              <h3 className="mb-4 text-3xl font-semibold">
                Core Frontend Engineering
              </h3>
              <p className="text-[#c7c4d7]">
                Production-grade React, Next.js, and TypeScript implementation.
                We write clean, testable, and maintainable code bases that your
                internal teams will love.
              </p>
              <div className="mt-auto pt-6">
                <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[85%] bg-[#a4d64c]" />
                </div>
                <div className="mt-2 flex justify-between text-[10px] font-semibold tracking-[0.1em] text-[#c7c4d7]">
                  <span>RELIABILITY SCORE</span>
                  <span className="text-[#a4d64c]">
                    85.4% HIGHER THAN INDUSTRY AVG
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-12 rounded-xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:col-span-4">
              <div className="mb-6 text-5xl text-[#c0c1ff]">⚡</div>
              <h3 className="mb-3 text-2xl font-medium">Speed Optimization</h3>
              <p className="text-[#c7c4d7]">
                Fine-tuning Core Web Vitals, tree-shaking, and asset delivery
                for instantaneous user experiences.
              </p>
            </div>

            <div className="relative col-span-12 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:col-span-8">
              <div className="relative z-10">
                <div className="mb-6 text-5xl text-[#c0c1ff]">◉</div>
                <h3 className="mb-3 text-3xl font-semibold">
                  Scaling &amp; Infrastructure
                </h3>
                <p className="max-w-lg text-lg text-[#c7c4d7]">
                  Cloud-native frontend deployments and micro-frontend
                  architectures for enterprise ecosystems.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[#c0c1ff]/10 blur-3xl transition-all duration-500 hover:bg-[#c0c1ff]/20" />
            </div>
          </div>
        </section>

        <section className="bg-[#0e0e0e] py-20">
          <div className="mx-auto w-full max-w-[1280px] px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-[#a4d64c]">
                  CASE STUDIES
                </span>
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Engineering Impact.
                </h2>
              </div>
              <button className="hidden border-b border-[#c0c1ff]/30 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#c0c1ff] transition-colors hover:border-[#c0c1ff] md:block">
                See All Work ↗
              </button>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {[
                {
                  title: "Nexus Analytics Platform",
                  text: "Re-engineering a complex data visualization tool for 1M+ active monthly users.",
                  stat: "+140%",
                  label: "CONVERSION LIFT",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBosRci_bAj6SwNn97Ah2ZxHqkRC4S-pm7Eb7gDWn5CNFn-Cfuh9REtCf2e6IqyMPaOAIQqPk9O5yvACyiPjg6Kkj4_2JkQc0taJlNnVfQRVbXBG6TX_2cq7ri4_muR1fRg2a4XH3r13MgQ6RkFbsn94By7WMeM3f1U-h8PIdqNVEBD5QyLk-bqQBBmO_0KjCYljX0kG6phqviTt6TF0Izm2QUceeBMO4M9a5NdDvd0fDK9F3ByNrm6qbb_j8UmsiUdq3e_A_QMCoSz",
                },
                {
                  title: "Velociti Commerce",
                  text: "A custom Headless Shopify build focusing on sub-second page transitions.",
                  stat: "0.8s",
                  label: "AVG. LCP TIME",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCwrg5TERTYkeACRX3wFRvhNadVDhI8KgSXCRYj4qpcwn4-Bz74_bupLaQ11Gaat3KJ5bRXpeq6J3O8gqtFQWcQLTlUP8xDHU9nkaRMdcdD1LC22bDzDyWMGJEU5KquwcraVYYbYcJJfSkayxuWXiD-flUD2T0rFbTlDu0ujS71cMZUFFngIOFvAhtkx5XP-zdV_6qSz1hlSJSNBzteDWCGyTHxbJE9WNoVNaGvHn1X3Vpir1FzhW5mk574boa0rc_Oc_gdV-z06MeM",
                },
              ].map((study) => (
                <article key={study.title} className="group cursor-pointer">
                  <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-3xl font-semibold">
                        {study.title}
                      </h3>
                      <p className="mb-6 max-w-sm text-[#c7c4d7]">{study.text}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-[#a4d64c]">
                        {study.stat}
                      </div>
                      <div className="text-[10px] font-semibold tracking-[0.1em] text-[#c7c4d7]">
                        {study.label}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-8 py-20">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              The 5-Step Logic.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#c7c4d7]">
              Our methodology is iterative, data-driven, and built for speed.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              ["01", "Discover", "Auditing current tech debt and defining KPIs."],
              ["02", "Blueprint", "Component architecture and logic mapping."],
              ["03", "Engineer", "Ultra-clean React/Next implementation."],
              ["04", "Deploy", "CI/CD automation and edge integration."],
              ["05", "Optimize", "Post-launch tuning and performance monitoring."],
            ].map(([step, title, text]) => (
              <div key={step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-2xl font-semibold text-[#c0c1ff] ring-4 ring-[#050505]">
                  {step}
                </div>
                <h4 className="mb-2 text-2xl font-medium">{title}</h4>
                <p className="text-sm text-[#c7c4d7]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#201f1f] py-20">
          <div className="mx-auto w-full max-w-[1280px] px-8">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="mb-4 text-4xl font-semibold tracking-tight">
                  Built for builders.
                </h2>
                <p className="text-lg text-[#c7c4d7]">
                  What the technical leaders of our partners have to say about
                  working with us.
                </p>
              </div>
              <div className="col-span-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-8">
                {[
                  {
                    name: "MARCUS CHEN",
                    role: "CTO, NEXUS.LAB",
                    quote:
                      '"STUDIO.FE is quite literally the only agency we trust with our core product. Their attention to technical detail is unmatched in the industry."',
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuA87sT5yDAcnRiIRWOTcCAgXKkNfdTPD0G0fw0sxeWo4_LptYbH91AJPnp_1LGNZszuUqlvF0cSeO0z5SdoxcGwPvRFingMEDSIQPoe2MVQGmlODuXoxwk57yquh6S-wB8_lHeIDSHOlR23rjNwnTZKBXi5214ZRFQqm4pr-udF_FHOJWJ9PUYuQZ1OW_ur0nHNO5dX33MrnIjS6Z2DNSNt_PIYINbMpTYbJowkjtwI6k65CI__BoQlu2-8asvWI_kGF_EvfPXYUdl6",
                  },
                  {
                    name: "SARAH JENKINS",
                    role: "VP PRODUCT, VELOCITI",
                    quote:
                      '"The speed gain was instantaneous. They did not just rebuild our frontend, they redefined our entire delivery process."',
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyUpYqMo8NRjbMaMuVwUZbfk2ZU6JWeC0F-mUaj7vxr2SCckKMgQrzsm2iXOofyalYjuEL2o-ZaWi1mmMljoWoup2s-1CTdKWg4h4Jk2Ocmk3cFVNdMuCTZiAtyT2fVBmwwez6pKVC4SM-lT0ytYJOJ9qHDSBwlNdVQrZP4sPPldUAUjvaKKPtS9KPkARg_q0sqaCL3N8njM7v8AWYBSs3220r57DMbV5zjbYRCAkEY89Q1RCOmUZbY8sVor-AvEpAV1cli1GvInSf",
                  },
                ].map((testimonial) => (
                  <article
                    key={testimonial.name}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-8"
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full border border-[#c0c1ff]/30 object-cover"
                      />
                      <div>
                        <div className="text-xs font-semibold tracking-[0.1em]">
                          {testimonial.name}
                        </div>
                        <div className="text-[10px] text-[#c7c4d7]">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg italic leading-relaxed text-[#c7c4d7]">
                      {testimonial.quote}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-8 py-[120px]">
          <div className="relative overflow-hidden rounded-2xl bg-[#c0c1ff] p-16 text-center">
            <h2 className="relative z-10 mb-6 text-5xl font-bold leading-tight text-[#1000a9] md:text-7xl">
              Build the Future <br />
              Together.
            </h2>
            <p className="relative z-10 mx-auto mb-10 max-w-xl text-lg text-[#1000a9]/80">
              Ready to scale your digital presence with high-performance
              frontend engineering? Let us discuss your roadmap.
            </p>
            <div className="relative z-10 flex flex-wrap justify-center gap-6">
              <button className="rounded-full bg-[#0e0e0e] px-10 py-5 text-xs font-semibold uppercase tracking-[0.1em] text-[#e5e2e1] shadow-[0_0_20px_rgba(164,214,76,0.2)] transition-transform duration-300 hover:scale-105">
                START YOUR PROJECT
              </button>
              <button className="rounded-full border border-[#1000a9]/30 px-10 py-5 text-xs font-semibold uppercase tracking-[0.1em] text-[#1000a9] transition-colors hover:bg-[#1000a9]/5">
                BOOK A CALL
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full rounded-t-xl border-t border-white/10 bg-[#0e0e0e]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-6 px-8 py-20">
          <div className="col-span-12 lg:col-span-6">
            <div className="mb-6 text-3xl font-semibold">STUDIO.FE</div>
            <p className="mb-6 max-w-sm text-[#c7c4d7]">
              Engineered with precision. Delivered with speed. The senior-only
              frontend collective for high-stakes digital products.
            </p>
            <div className="flex gap-4 text-xl text-[#c7c4d7]">
              <span className="cursor-pointer transition-colors hover:text-[#c0c1ff]">
                ○
              </span>
              <span className="cursor-pointer transition-colors hover:text-[#c0c1ff]">
                @
              </span>
              <span className="cursor-pointer transition-colors hover:text-[#c0c1ff]">
                ⌂
              </span>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.1em]">
              SITEMAP
            </h4>
            <ul className="space-y-3 text-[#c7c4d7]">
              {["Case Studies", "Stack", "Availability", "Services"].map(
                (item) => (
                  <li key={item}>
                    <a
                      className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-[#c0c1ff]"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.1em]">
              LEGAL &amp; CONTACT
            </h4>
            <ul className="space-y-3 text-[#c7c4d7]">
              {["Privacy", "Terms", "hello@studio-fe.dev"].map((item) => (
                <li key={item}>
                  <a
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-[#c0c1ff]"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
            <div className="text-sm text-[#c7c4d7]">
              © 2024 STUDIO.FE — Engineered with Precision.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#a4d64c]" />
              <span className="text-[10px] font-semibold tracking-[0.1em] text-[#c7c4d7]">
                CURRENT AVAILABILITY: Q3 2024
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
