import Link from "next/link";

export default function LabPage() {
  const navItems = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Lab", href: "/lab", active: true },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#131313] font-sans text-[#e5e2e1] selection:bg-[#c0c1ff] selection:text-[#0d0096]">
      <nav className="fixed top-0 z-50 w-full border-b border-[#464554]/20 bg-[#131313]/60 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-8">
          <div className="text-2xl font-bold tracking-tight">STUDIO.FE</div>
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
          <button className="rounded-full bg-[#c0c1ff] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0096] transition-all hover:bg-[#c0c1ff]/90 active:scale-95">
            Start Project
          </button>
        </div>
      </nav>

      <main className="pt-20">
        <section className="relative overflow-hidden py-20 [background-image:linear-gradient(rgba(192,193,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(192,193,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]">
          <div className="relative z-10 mx-auto max-w-[1280px] px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a4d64c]/30 bg-[#a4d64c]/10 px-3 py-1 text-[#a4d64c]">
              <span className="text-sm">⚗</span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                Research &amp; Development
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              The <span className="text-[#c0c1ff]">Lab</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#c7c4d7]">
              Where we push the boundaries of frontend engineering through
              technical experiments, open-source R&amp;D, and performance stress
              tests.
            </p>
          </div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c0c1ff]/5 blur-[120px]" />
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:col-span-8">
                <div className="mb-10 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-3xl font-semibold">
                      Custom Physics Engine
                    </h3>
                    <p className="max-w-md text-[#c7c4d7]">
                      A deterministic 2D physics engine optimized for React
                      reconciler performance. Featuring sub-stepping and spatial
                      partitioning.
                    </p>
                  </div>
                  <span className="text-5xl text-[#a4d64c]">▦</span>
                </div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {["TYPESCRIPT", "REACT", "SIMULATION"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[#464554]/30 bg-[#353534] px-3 py-1 text-[10px] font-semibold tracking-[0.1em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="h-48 overflow-hidden rounded-lg border border-[#464554]/20 bg-[#0e0e0e] p-6 font-mono text-sm text-[#a4d64c]/80">
                  <pre>{`const engine = new QuantumPhysics({
  gravity: { x: 0, y: 9.81 },
  solver: 'verlet',
  precision: 'high-performance'
});

engine.on('collision', (event) => {
  calculateImpulse(event.bodies);
});`}</pre>
                </div>
              </article>

              <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:col-span-4">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-[#a4d64c]/20 bg-[#a4d64c]/10">
                  <span className="text-[#a4d64c]">▣</span>
                </div>
                <h3 className="mb-2 text-2xl font-medium">Performance Benchmarks</h3>
                <p className="text-[#c7c4d7]">
                  Comparative analysis of Hydration vs. Streaming across various
                  V8 environments.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    ["VIRTUAL DOM", "42ms", "40%"],
                    ["OBSIDIAN CORE", "12ms", "12%"],
                  ].map(([label, value, width]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-xs font-semibold uppercase tracking-[0.1em]">
                        <span>{label}</span>
                        <span className="text-[#a4d64c]">{value}</span>
                      </div>
                      <div className="h-1 w-full overflow-hidden rounded-full bg-[#2a2a2a]">
                        <div
                          className="h-full bg-[#a4d64c]"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
