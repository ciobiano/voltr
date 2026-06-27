import { cn } from "@/lib/utils";
import { buttonVariants } from "@/design-system/variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: "primary" | "accent" | "ghost";
  shape?: "pill" | "semi";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "leading" | "trailing";
  children: React.ReactNode;
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
  return (
    <button
      className={cn(buttonVariants({ intent, shape, size }), className)}
      {...props}
    >
      {icon && iconPosition === "leading" && icon}
      {children}
      {icon && iconPosition === "trailing" && icon}
    </button>
  );
}
