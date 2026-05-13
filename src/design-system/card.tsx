import { cn } from "@/lib/utils";
import { cardVariants } from "./variants";

interface CardProps {
  intent?: "elevated" | "flat" | "atmospheric";
  children: React.ReactNode;
  className?: string;
}

export function Card({ intent = "flat", children, className }: CardProps) {
  return (
    <div className={cn(cardVariants({ intent }), "p-xl", className)}>
      {children}
    </div>
  );
}
