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
        "grid gap-lg border-t border-border-subtle px-lg py-md first:border-t-0",
        className,
      )}
      style={{ gridTemplateColumns: `${labelWidth} 1fr` }}
    >
      <div className="text-size-body font-semibold text-text-primary">{label}</div>
      <div className="text-size-body leading-relaxed text-text-secondary">{value}</div>
    </div>
  );
}
