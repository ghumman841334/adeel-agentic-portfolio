"use client";

import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const serverTheme: Theme = "light";
const storageKey = "portfolio-theme-override";
const themeChangeEvent = "portfolio-theme-change";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return serverTheme;
  }

  const savedTheme = localStorage.getItem(storageKey);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return getSystemTheme();
}

function subscribeToThemeChange(onThemeChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  mediaQuery.addEventListener("change", onThemeChange);
  window.addEventListener("storage", onThemeChange);
  window.addEventListener(themeChangeEvent, onThemeChange);

  return () => {
    mediaQuery.removeEventListener("change", onThemeChange);
    window.removeEventListener("storage", onThemeChange);
    window.removeEventListener(themeChangeEvent, onThemeChange);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(storageKey, theme);
  localStorage.removeItem("portfolio-theme");
  window.dispatchEvent(new Event(themeChangeEvent));
}

export function ThemeToggle() {
  const shouldReduceMotion = useReducedMotion();
  const theme = useSyncExternalStore(
    subscribeToThemeChange,
    getInitialTheme,
    () => serverTheme,
  );

  const toggleTheme = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      suppressHydrationWarning
      whileHover={shouldReduceMotion ? undefined : { y: -1 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-site-border bg-site-card px-3 text-xs font-semibold uppercase tracking-[0.1em] text-site-text outline-none transition-colors hover:border-accent-lavender/60 hover:text-accent-lavender focus-visible:ring-2 focus-visible:ring-accent-lavender/70 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
    >
      {theme === "dark" ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
      <span className="hidden sm:inline">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </motion.button>
  );
}
