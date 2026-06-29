import { cn } from "@/lib/utils";

interface MetricProps {
  value: string;
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const metricSizes: Record<string, string> = {
  sm: "text-size-body",
  md: "text-size-xs",
  lg: "text-size-lg",
  xl: "text-size-3xl",
};

export function Metric({ value, label, size = "lg", className }: MetricProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <p className={cn(
        "font-mono tabular-nums tracking-mono text-primary font-light",
        metricSizes[size],
      )}>
        {value}
      </p>
      {label && (
        <p className="text-caption text-secondary">{label}</p>
      )}
    </div>
  );
}
