import { cn } from "@/lib/utils";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export function Label({ children, className }: LabelProps) {
  return (
    <p className={cn("text-body text-secondary", className)}>
      {children}
    </p>
  );
}
