import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge, twMerge as baseTwMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-display",
        "text-heading-xl",
        "text-heading",
        "text-subhead",
        "text-body",
        "text-caption",
        "text-meta",
        "text-metric",
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
