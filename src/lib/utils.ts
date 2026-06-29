import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge, twMerge as baseTwMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        // composite utilities (set full type treatment)
        "text-display",
        "text-editorial",
        "text-descriptor",
        "text-heading-xl",
        "text-heading",
        "text-subhead",
        "text-body",
        "text-caption",
        "text-metric",
        // size-only utilities (mirror CSS token scale)
        "text-size-4xl",
        "text-size-3xl",
        "text-size-editorial",
        "text-size-2xl",
        "text-size-xl",
        "text-size-lg",
        "text-size-md",
        "text-size-sm",
        "text-size-xs",
        "text-size-2xs",
        "text-size-body",
        "text-size-caption",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMetric(value: number, unit?: string): string {
  const formatted = new Intl.NumberFormat("en-US").format(value);
  return unit ? `${formatted} ${unit}` : formatted;
}
