"use client";

import { cn } from "@/lib/utils";
import { VIEWS, type ViewId } from "./showcase.data";

interface ViewTabsProps {
  active: ViewId;
  onChange: (v: ViewId) => void;
}

export function ViewTabs({ active, onChange }: ViewTabsProps) {
  return (
    <div className="absolute top-10 left-1/2 z-20 -translate-x-1/2">
      <div className="flex  items-center gap-1  rounded-full bg-black/30 p-1 backdrop-blur-md">
        {VIEWS.map((v) => (
          <button
            key={v.id}
            onClick={() => onChange(v.id)}
            className={cn(
              "rounded-full px-8 md:px-5 py-1.5 text-sm font-medium transition-all duration-300 whitespace-nowrap",
              active === v.id ? "bg-text-primary text-white py-4 md:" : "text-white/70 hover:text-white",
            )}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}
