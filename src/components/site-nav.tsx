"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Lab", href: "/lab" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-site-border bg-site-nav/95 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="group text-xl font-bold tracking-tight outline-none transition-colors hover:text-accent-lavender focus-visible:text-accent-lavender sm:text-2xl"
        >
          Adeel Javed
          <span className="mt-1 block h-px w-0 bg-accent-lavender transition-all duration-300 group-hover:w-full" />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = item.href !== "#contact" && pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative pb-2 text-xs font-semibold uppercase tracking-[0.1em] outline-none transition-colors focus-visible:text-accent-lavender",
                  isActive
                    ? "text-accent-lavender"
                    : "text-site-muted hover:text-site-text",
                )}
              >
                {item.label}
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent-lavender"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.22 }}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden rounded-full bg-accent-lavender px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-cta-foreground shadow-[0_0_20px_rgba(192,193,255,0.2)] outline-none transition-all hover:-translate-y-0.5 hover:bg-accent-lavender/90 focus-visible:ring-2 focus-visible:ring-accent-lavender/70 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:scale-95 sm:inline-flex"
          >
            Start a Project
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-site-border bg-site-card text-site-text outline-none transition-colors hover:border-accent-lavender/60 hover:text-accent-lavender focus-visible:ring-2 focus-visible:ring-accent-lavender/70 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg md:hidden"
          >
            {isOpen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="border-b border-site-border bg-site-nav px-5 pb-5 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto grid max-w-[1280px] gap-2 rounded-2xl border border-site-border bg-site-card p-3">
              {navItems.map((item) => {
                const isActive = item.href !== "/#contact" && pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent-lavender/70",
                      isActive
                        ? "bg-accent-lavender text-cta-foreground"
                        : "text-site-muted hover:bg-site-panel hover:text-site-text",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
