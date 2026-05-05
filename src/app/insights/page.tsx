import Link from "next/link";

export default function InsightsPage() {
  const navItems = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Lab", href: "/lab" },
    { label: "Insights", href: "/insights", active: true },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] selection:bg-[#c0c1ff] selection:text-[#0d0096]">
      <nav className="fixed top-0 z-50 w-full border-b border-[#464554]/20 bg-[#131313]/60 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-8">
          <span className="text-2xl font-bold tracking-tight">STUDIO.FE</span>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`border-b-2 pb-1 text-xs font-semibold uppercase tracking-[0.1em] ${
                  item.active
                    ? "border-[#c0c1ff] text-[#c0c1ff]"
                    : "border-transparent text-[#c7c4d7] hover:text-[#e5e2e1]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="rounded-full bg-[#c0c1ff] px-6 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0096] transition-transform hover:-translate-y-0.5 active:scale-95">
            Start Project
          </button>
        </div>
      </nav>

      <main className="pt-20">
        <section className="mx-auto max-w-[1280px] px-8 pb-12 pt-20">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-2xl">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-[#a4d64c]">
                Knowledge Archive
              </span>
              <h1 className="mb-3 text-5xl font-bold tracking-tight md:text-7xl">
                Insights
              </h1>
              <p className="text-lg text-[#c7c4d7]">
                Thought leadership on the intersection of design and
                engineering. Exploring the future of high-performance digital
                experiences.
              </p>
            </div>
            <div className="w-full md:w-80">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-[#c7c4d7]">⌕</span>
                <input
                  className="w-full border-0 border-b-2 border-[#464554]/30 bg-[#1c1b1b] px-12 py-4 text-sm outline-none transition-colors focus:border-[#c0c1ff]"
                  placeholder="Search archive..."
                  type="text"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-12 max-w-[1280px] px-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {["All Posts", "Strategy", "Engineering", "Performance", "Design"].map(
              (item, idx) => (
                <button
                  key={item}
                  className={`whitespace-nowrap rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.1em] ${
                    idx === 0
                      ? "bg-[#c0c1ff] text-[#0d0096]"
                      : "border border-white/10 bg-white/[0.03] text-[#c7c4d7]"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-[1280px] px-8">
          <div className="grid min-h-[500px] grid-cols-1 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] md:grid-cols-12">
            <div className="relative h-64 overflow-hidden md:col-span-7 md:h-full">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6AXxaTNqwbnDqCs7DbcXq_MjnRLA5Mg5KJT9mPY2dF5NPKWwH_LZCO2ua9y4c5mo3RqnZmUQnSWiZ-OmVGsYIYocaVB8QHsiuvNS346NP6l5BpnHUBmV1Arxycpgfz26OLfjp6qmqyJolMtILSFZllCltGT-uewqt5ILP29EgeNjCPJj4IVEKJY-fB8q4dE2Cz1L_CDi5hpxxZoSSgKhtzLOKBePdCaEml1m5Rgeer5iVYqUuqFqdbscIBRbwP8-DDmGenJPsmv4b"
                alt="Featured article visual"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:col-span-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded border border-[#a4d64c]/20 bg-[#a4d64c]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#a4d64c]">
                  Featured
                </span>
                <span className="text-xs text-[#c7c4d7]">12 Min Read</span>
              </div>
              <h2 className="mb-4 text-4xl font-semibold tracking-tight">
                The Architectural Shift: Why Next-Gen Performance Demands
                Obsidian Foundations
              </h2>
              <p className="mb-6 text-[#c7c4d7]">
                How we engineered a sub-100ms LCP for global enterprise
                platforms by rethinking the traditional React hydration model.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
