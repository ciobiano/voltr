import { cn } from "@/lib/utils";

interface TextProps {
  size?: "body" | "caption" | "meta";
  color?: "primary" | "secondary" | "tertiary";
  as?: "p" | "span";
  children: React.ReactNode;
  className?: string;
}

const textStyles: Record<string, string> = {
  body: "text-body text-primary",
  caption: "text-caption text-secondary",
  meta: "text-meta text-tertiary font-mono tracking-mono uppercase",
};

const textColors: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
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
