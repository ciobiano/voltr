"use client";

import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/primitives/button";

// Grouping container — plain div, no duplication of button logic
function ControlGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-white/30 px-1.5 md:px-2 py-1 md:py-1.5 backdrop-blur-xs">
      {children}
    </div>
  );
}

export function ViewToggle360() {
  return (
    <Button intent="ghost" shape="pill" size="lg" className="text-sm backdrop-blur-xs" icon={<RotateCcw size={13} strokeWidth={1.8} />}>
      360 view
    </Button>
  );
}

export function ModeToggle<T extends string>({
  modes,
  active,
  onChange,
}: {
  modes: readonly { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
}) {
  return (
    <ControlGroup>
      {modes.map((m) => (
        <button
          key={m.id}
          onClick={() => onChange(m.id)}
          className={cn(
            "px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium rounded-full transition-all duration-200",
            active === m.id
              ? "bg-text-primary text-white"
              : "text-white/70 hover:text-white",
          )}
        >
          {m.label}
        </button>
      ))}
    </ControlGroup>
  );
}

export function ColorPicker<T extends string>({
  colors,
  active,
  onChange,
}: {
  colors: readonly { id: T; label: string; swatch: string }[];
  active: T;
  onChange: (id: T) => void;
}) {
  return (
    <ControlGroup>
      {colors.map((c) => (
        <button
          key={c.id}
          onClick={() => onChange(c.id)}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-2 py-1.5 md:px-3 md:py-2 text-sm font-medium transition-all duration-200",
            active === c.id ? "bg-text-primary" : "hover:bg-white/10",
          )}
        >
          <span
            className="h-5 w-5 shrink-0 rounded-full border border-white/30"
            style={{ background: `linear-gradient(310deg,#0009,#0000), ${c.swatch}` }}
          />
          <span className={cn(
            "transition-colors duration-200 hidden md:inline",
            active === c.id ? "text-white" : "text-white/70 hover:text-white",
          )}>
            {c.label}
          </span>
        </button>
      ))}
    </ControlGroup>
  );
}
