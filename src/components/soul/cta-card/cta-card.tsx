import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CtaCardProps {
  eyebrow: string;
  title: ReactNode;
  href?: string;
  tone: "dark" | "accent";
  hoverable?: boolean;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  iconSize?: number;
  iconWrapperClassName?: string;
}

export function CtaCard({
  eyebrow,
  title,
  href = "#",
  tone,
  hoverable = false,
  className,
  eyebrowClassName,
  titleClassName,
  iconSize = 16,
  iconWrapperClassName,
}: CtaCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group flex flex-col justify-between gap-lg rounded-xl px-lg py-lg text-white",
        tone === "dark" ? "bg-ink" : "bg-orange",
        hoverable && "transition-all hover:brightness-110",
        className,
      )}
    >
      <span className={cn("font-semibold text-white/70", eyebrowClassName)}>{eyebrow}</span>
      <div className="flex items-end justify-between gap-md">
        <p className={cn("font-medium leading-heading", titleClassName)}>{title}</p>
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
            tone === "dark" ? "bg-white/15" : "bg-black/15",
            iconWrapperClassName,
          )}
        >
          <ArrowRight size={iconSize} className="text-white" />
        </span>
      </div>
    </a>
  );
}
