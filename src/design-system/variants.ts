import { cva } from "class-variance-authority";

export const headingVariants = cva(
  "font-light leading-[var(--leading-heading)] text-text-primary",
  {
    variants: {
      level: {
        display:
          "text-[var(--text-display)] tracking-[var(--tracking-display)] leading-[var(--leading-display)]",
        h1: "text-[var(--text-heading)] tracking-[var(--tracking-wide)]",
        h2: "text-[var(--text-subhead)] tracking-[var(--tracking-wide)]",
        h3: "text-[var(--text-body)] tracking-[var(--tracking-normal)] font-medium",
      },
    },
    defaultVariants: {
      level: "h1",
    },
  },
);

export const labelVariants = cva(
  "font-mono text-[var(--text-caption)] text-text-secondary tracking-[var(--tracking-mono)] uppercase",
  {
    variants: {
      intent: {
        scene: "",
        metric: "text-[var(--text-heading)] text-text-primary font-light",
      },
    },
  },
);

export const metricVariants = cva(
  "font-mono tabular-nums tracking-[var(--tracking-mono)]",
  {
    variants: {
      size: {
        sm: "text-[var(--text-body)]",
        md: "text-[var(--text-subhead)]",
        lg: "text-[var(--text-heading)]",
        xl: "text-[var(--text-display)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
