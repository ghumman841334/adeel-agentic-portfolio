"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

import { cn } from "@/lib/utils";

const defaultEase = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

type SectionRevealProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  delay?: number;
};

type StaggerProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

type MotionCardProps = HTMLMotionProps<"article"> & {
  children: ReactNode;
  hover?: boolean;
};

type AnimatedLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
        transition={{ duration: 0.32, ease: defaultEase }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay, ease: defaultEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  ...props
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.75, delay, ease: defaultEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  ...props
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: shouldReduceMotion ? 0 : 0.08,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? {} : { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.58, ease: defaultEase },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({
  children,
  className,
  hover = true,
  ...props
}: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={{
        hidden: shouldReduceMotion ? {} : { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.58, ease: defaultEase },
        },
      }}
      whileHover={
        hover && !shouldReduceMotion
          ? { y: -8, scale: 1.01, transition: { duration: 0.24 } }
          : undefined
      }
      className={cn(
        "will-change-transform transition-colors duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </motion.article>
  );
}

export function AnimatedLink({
  children,
  className,
  variant = "primary",
  ...props
}: AnimatedLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link
      className={cn(
        "group/link inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent-lavender/70 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg",
        variant === "primary" &&
          "bg-accent-lavender text-cta-foreground shadow-[0_18px_50px_rgba(111,99,255,0.24)] hover:bg-accent-lavender/90",
        variant === "secondary" &&
          "border border-site-border bg-site-card text-site-text hover:border-accent-lavender/50 hover:text-accent-lavender",
        variant === "ghost" &&
          "px-0 text-accent-lavender hover:text-site-text",
        className,
      )}
      {...props}
    >
      <motion.span
        className="inline-flex items-center gap-2"
        whileHover={shouldReduceMotion ? undefined : { x: 2 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </Link>
  );
}
