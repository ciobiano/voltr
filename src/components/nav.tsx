"use client";

import { cn } from "@/lib/utils";

const links = [
  { label: "Hero", href: "#hero" },
  { label: "Performance", href: "#performance" },
  { label: "Interior", href: "#interior" },
];

interface NavProps {
  className?: string;
}

export function Nav({ className }: NavProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5 mix-blend-difference",
        className,
      )}
    >
      <span className="text-caption text-white tracking-[var(--tracking-display)]">
        VOLTR
      </span>

      <div className="flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-caption text-white/60 hover:text-white transition-all duration-[var(--duration-ui)] ease-[var(--ease-micro)]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
