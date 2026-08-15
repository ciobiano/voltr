import { cn } from "@/lib/utils";

interface ContainerProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

const containerSizes: Record<string, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-7xl",
};

export function Container({ size = "md", children, className }: ContainerProps) {
  return (
    <div className={cn("px-4", containerSizes[size], className)}>
      {children}
    </div>
  );
}
