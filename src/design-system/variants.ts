import { cva } from "class-variance-authority";

export const headingVariants = cva(
  "font-display text-text-primary",
  {
    variants: {
      level: {
        display:
          "text-display tracking-[var(--tracking-display)] leading-[var(--leading-display)]",
        h1: "text-heading-xl tracking-[var(--tracking-mono)] ",
        h2: "text-subhead tracking-[var(--tracking-wide)]",
        h3: "text-body tracking-[var(--tracking-normal)]",
        
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

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-[var(--duration-ui)] ease-[var(--ease-micro)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus disabled:pointer-events-none disabled:opacity-35",
  {
    variants: {
      intent: {
        primary:
          "bg-text-primary text-surface-primary hover:brightness-[1.4] active:brightness-[0.75]",
        accent:
          "bg-accent text-surface-primary hover:brightness-[1.15] active:brightness-[0.85]",
      },
      size: {
        sm: "px-5 py-1.5 text-[var(--text-caption)]",
        md: "px-8 py-2.5 text-[var(--text-body)]",
        lg: "px-10 py-3.5 text-[var(--text-body)]",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  },
);

export const cardVariants = cva("rounded-none", {
  variants: {
    intent: {
      elevated: "bg-surface-primary shadow-[var(--shadow-elevation-1)]",
      flat: "bg-surface-primary",
      atmospheric: "bg-surface-secondary",
    },
  },
  defaultVariants: {
    intent: "flat",
  },
});

export const sectionVariants = cva("relative min-h-screen flex items-center justify-center", {
  variants: {
    surface: {
      light: "bg-surface-primary",
      warm: "bg-surface-secondary",
      atmospheric: "bg-surface-tertiary",
    },
  },
  defaultVariants: {
    surface: "warm",
  },
});
