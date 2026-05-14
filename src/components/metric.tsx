import { cn } from "@/lib/utils";

interface MetricProps {
  value: string;
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const metricSizes: Record<string, string> = {
  sm: "text-[var(--text-body)]",
  md: "text-[var(--text-subhead)]",
  lg: "text-[var(--text-heading)]",
  xl: "text-[var(--text-display)]",
};

export function Metric({ value, label, size = "lg", className }: MetricProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <p className={cn(
        "font-mono tabular-nums tracking-[var(--tracking-mono)] text-text-primary font-light",
        metricSizes[size],
      )}>
        {value}
      </p>
      {label && (
        <p className="text-caption text-text-secondary">{label}</p>
      )}
    </div>
  );
}
