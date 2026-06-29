import { cn } from "@/lib/utils";
import { buttonVariants } from "@/design-system/variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: "primary" | "accent" | "ghost" | "outline";
  shape?: "pill" | "semi";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "leading" | "trailing";
  children?: React.ReactNode;
}

export function Button({
  intent = "primary",
  shape = "pill",
  size = "md",
  icon,
  iconPosition = "leading",
  children,
  className,
  ...props
}: ButtonProps) {
  const blobHover = shape === "pill" && children != null;

  return (
    <button
      className={cn(buttonVariants({ intent, shape, size }), blobHover && "btn-pill", className)}
      {...props}
    >
      {icon && iconPosition === "leading" && icon}
      <span>{children}</span>
      {icon && iconPosition === "trailing" && icon}
    </button>
  );
}
