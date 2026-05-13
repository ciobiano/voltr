import { cn } from "@/lib/utils";

interface TextProps {
  size?: "body" | "caption" | "meta";
  color?: "primary" | "secondary" | "tertiary";
  as?: "p" | "span";
  children: React.ReactNode;
  className?: string;
}

const textStyles: Record<string, string> = {
  body: "text-body text-text-primary",
  caption: "text-caption text-text-secondary",
  meta: "text-[var(--text-meta)] text-text-tertiary font-mono tracking-[var(--tracking-mono)] uppercase",
};

const textColors: Record<string, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
};

export function Text({
  size = "body",
  color,
  as: Component = "p",
  children,
  className,
}: TextProps) {
  const base = textStyles[size];
  const overrideColor = color ? textColors[color] : "";
  return (
    <Component className={cn(base, overrideColor, className)}>
      {children}
    </Component>
  );
}
