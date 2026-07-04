import { cn } from "@/lib/utils";

interface SpecRowProps {
  label: string;
  value: string;
  labelWidth?: string;
  className?: string;
}

export function SpecRow({
  label,
  value,
  labelWidth = "minmax(160px,320px)",
  className,
}: SpecRowProps) {
  return (
    <div
      className={cn(
        "grid gap-6 md:gap-8 border-t border-border-subtle px-6 py-5 md:px-7 first:border-t-0",
        className,
      )}
      style={{ gridTemplateColumns: `${labelWidth} 1fr` }}
    >
      <div className="text-size-body font-semibold text-text-primary">{label}</div>
      <div className="text-size-body leading-relaxed text-text-secondary">{value}</div>
    </div>
  );
}
