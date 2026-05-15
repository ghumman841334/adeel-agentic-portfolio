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
          <div className="text-2xl font-bold tracking-tight">Adeel Javed</div>
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
            Start a Project
          </button>
        </div>
      </nav>

      <main className="relative overflow-x-hidden pt-20">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(192,193,255,0.06)_0%,transparent_70%)]" />

        <section className="mx-auto mt-12 w-full max-w-[1280px] px-8 py-20">
          <div className="grid grid-cols-12 items-center gap-6">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Full-stack SaaS, <br />
                <span className="text-[#c0c1ff]">dashboards, and AI</span> <br />
                workflows that ship.
              </h1>
              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[#c7c4d7]">
                I help teams build production-ready web apps, admin dashboards,
                cloud-backed APIs, real-time communication features, and AI
                automation workflows using React, Angular, Next.js, Node.js,
                AWS, Azure, and modern delivery practices.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button className="rounded-full bg-[#c0c1ff] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#1000a9] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(164,214,76,0.3)]">
                  Start a Project →
                </button>
                <button className="rounded-full border border-[#a4d64c] px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#a4d64c] transition-colors hover:bg-[#a4d64c]/5">
                  View My Stack
                </button>
              </div>
            </div>

            <div className="col-span-12 mt-8 lg:col-span-4 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["6y+", "WEB DELIVERY"],
                  ["MERN", "MEAN + NEXT.JS"],
                  ["AWS", "AZURE + DOCKER"],
                  ["AI", "N8N + AGENTS"],
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
          {["RAMPART", "Migration Portal", "Elder Care", "MartGo", "POLDIT"].map(
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
              CORE OFFERS
            </span>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Practical engineering for products that need to work.
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 flex min-h-[400px] flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:col-span-7">
              <div>
                <div className="mb-6 text-5xl text-[#c0c1ff]">✦</div>
                <h3 className="mb-4 text-3xl font-semibold">
                  SaaS Dashboards & Portals
                </h3>
                <p className="max-w-md text-lg text-[#c7c4d7]">
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
                Full-Stack Product Engineering
              </h3>
              <p className="text-[#c7c4d7]">
                From responsive UI to REST and GraphQL APIs, auth, database
                design, Docker, CI/CD, and AWS or Azure deployment. I can take a
                feature from idea to production.
              </p>
              <div className="mt-auto pt-6">
                <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[85%] bg-[#a4d64c]" />
                </div>
                <div className="mt-2 flex justify-between text-[10px] font-semibold tracking-[0.1em] text-[#c7c4d7]">
                  <span>DELIVERY FOCUS</span>
                  <span className="text-[#a4d64c]">
                    CLEAN, MAINTAINABLE, PRODUCTION-READY
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-12 rounded-xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:col-span-4">
              <div className="mb-6 text-5xl text-[#c0c1ff]">⚡</div>
              <h3 className="mb-3 text-2xl font-medium">AI Automation</h3>
              <p className="text-[#c7c4d7]">
                n8n, Make, and AI agent workflows for lead qualification,
                appointment booking, CRM updates, follow-ups, support triage,
                and reporting.
              </p>
            </div>

            <div className="relative col-span-12 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:col-span-8">
              <div className="relative z-10">
                <div className="mb-6 text-5xl text-[#c0c1ff]">◉</div>
                <h3 className="mb-3 text-3xl font-semibold">
                  Real-Time &amp; Cloud Systems
                </h3>
                <p className="max-w-lg text-lg text-[#c7c4d7]">
                  Socket.io, WebRTC, Peer.js, AWS, Azure, Docker, PostgreSQL,
                  MongoDB, MySQL, and Redis for applications that need dependable
                  communication and scale.
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
                  PROJECT PROOF
                </span>
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Shipped work in the real world.
                </h2>
              </div>
              <button className="hidden border-b border-[#c0c1ff]/30 pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#c0c1ff] transition-colors hover:border-[#c0c1ff] md:block">
                See All Work ↗
              </button>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {[
                {
                  title: "RAMPART Fraud Detection Platform",
                  text: "Led frontend development for an Ohio government fraud detection platform with complex workflows and dashboard requirements.",
                  stat: "Gov",
                  label: "FRAUD DETECTION",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBosRci_bAj6SwNn97Ah2ZxHqkRC4S-pm7Eb7gDWn5CNFn-Cfuh9REtCf2e6IqyMPaOAIQqPk9O5yvACyiPjg6Kkj4_2JkQc0taJlNnVfQRVbXBG6TX_2cq7ri4_muR1fRg2a4XH3r13MgQ6RkFbsn94By7WMeM3f1U-h8PIdqNVEBD5QyLk-bqQBBmO_0KjCYljX0kG6phqviTt6TF0Izm2QUceeBMO4M9a5NdDvd0fDK9F3ByNrm6qbb_j8UmsiUdq3e_A_QMCoSz",
                },
                {
                  title: "Elder Care Communication Platform",
                  text: "Implemented real-time audio and video functionality using Socket.io, WebRTC, and Peer.js for an elder care use case.",
                  stat: "RTC",
                  label: "AUDIO / VIDEO",
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
              The Delivery Path.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#c7c4d7]">
              A practical process for turning scope into production software.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              ["01", "Discover", "Clarify goals, users, workflows, and technical constraints."],
              ["02", "Blueprint", "Map UI, APIs, data models, automation steps, and deployment needs."],
              ["03", "Engineer", "Build with React, Angular, Next.js, Node.js, and clean integration patterns."],
              ["04", "Deploy", "Containerize, connect cloud services, and prepare reliable releases."],
              ["05", "Improve", "Refine performance, security, usability, and maintainability after launch."],
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
                  Built for serious product teams.
                </h2>
                <p className="text-lg text-[#c7c4d7]">
                  Proof points from production work, client-facing delivery, and
                  full-stack ownership.
                </p>
              </div>
              <div className="col-span-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-8">
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
              Build your next <br />
              product with Adeel.
            </h2>
            <p className="relative z-10 mx-auto mb-10 max-w-xl text-lg text-[#1000a9]/80">
              Need a SaaS dashboard, business portal, cloud-backed app, or AI
              automation workflow? I can turn the scope into a clean,
              production-ready build.
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
            <div className="mb-6 text-3xl font-semibold">Adeel Javed</div>
            <p className="mb-6 max-w-sm text-[#c7c4d7]">
              Senior full-stack engineer for SaaS dashboards, portals, backend
              APIs, cloud deployments, real-time features, and AI automation.
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
              {["Work", "Services", "Stack", "Availability"].map(
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
              {["Privacy", "Terms", "adeeljaved839@gmail.com"].map((item) => (
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
              © 2026 Adeel Javed — Full-stack product engineering.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#a4d64c]" />
              <span className="text-[10px] font-semibold tracking-[0.1em] text-[#c7c4d7]">
                AVAILABLE FOR FREELANCE PROJECTS
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
