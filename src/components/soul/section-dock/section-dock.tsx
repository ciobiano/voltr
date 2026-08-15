"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionDockItem {
  id: string;
  label: string;
}

interface SectionDockProps {
  items: SectionDockItem[];
  className?: string;
}

export function SectionDock({ items, className }: SectionDockProps) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActiveId(mostVisible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <nav
      className={cn(
        "fixed bottom-6 left-1/2 z-40 -translate-x-1/2",
        className,
      )}
      aria-label="Section navigation"
    >
      <ul className="flex items-center gap-xs rounded-lg bg-obsidian/95 p-xs shadow-[var(--shadow-elevation-2)] backdrop-blur-sm">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
              aria-current={activeId === item.id ? "true" : undefined}
              className={cn(
                "rounded-lg px-lg py-sm text-caption font-medium transition-colors duration-[var(--duration-ui)]",
                activeId === item.id
                  ? "bg-orange text-white"
                  : "text-white/60 hover:text-white",
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
