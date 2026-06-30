import { cva } from "class-variance-authority";

export const headingVariants = cva(
  "font-display text-text-primary",
  {
    variants: {
      level: {
        display:
          "text-display tracking-[var(--tracking-display)] leading-[var(--leading-display)]",
        h1: "text-heading-xl tracking-[var(--tracking-mono)] ",
        h2: "text-subhead font-display  tracking-[var(--tracking-wide)]",
        h3: "text-body tracking-[var(--tracking-normal)]",
        
      },
    },
    defaultVariants: {
      level: "h1",
    },
  },
);

export const labelVariants = cva(
  "text-caption text-text-secondary",
  {
    variants: {
      intent: {
        scene: "",
        metric: "text-size-lg text-text-primary font-light",
      },
    },
  },
);

export const metricVariants = cva(
  "font-mono tabular-nums tracking-[var(--tracking-mono)]",
  {
    variants: {
      size: {
        sm: "text-size-body",
        md: "text-size-xs",
        lg: "text-size-lg",
        xl: "text-size-3xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-[var(--duration-ui)] ease-[var(--ease-micro)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus disabled:pointer-events-none disabled:opacity-35",
  {
    variants: {
      intent: {
        primary:
          "bg-text-primary text-surface-primary active:brightness-[0.85]",
        accent:
          "bg-accent text-surface-primary active:brightness-[0.85]",
        ghost:
          "border border-transparent bg-glass-dark text-white backdrop-blur-sm active:brightness-[0.9]",
        outline:
          "bg-white border border-border-subtle text-text-primary shadow-[var(--shadow-elevation-1)] active:brightness-[0.9]",
      },
      shape: {
        pill: "relative overflow-hidden rounded-full ",
        semi: "relative overflow-hidden rounded-lg",
      },
      size: {
        sm: "px-5 py-1.5 text-size-caption",
        md: "px-7 py-3 text-sm",
        lg: "px-10 py-3.5 text-base",
      },
    },
    compoundVariants: [
      { shape: "semi", intent: "primary", class: "hover:bg-orange" },
      { shape: "semi", intent: "accent",  class: "hover:bg-orange" },
      { shape: "semi", intent: "ghost",   class: "hover:bg-orange hover:border-orange hover:text-surface-primary" },
      { shape: "semi", intent: "outline", class: "hover:bg-orange hover:text-surface-primary hover:border-orange" },
    ],
    defaultVariants: {
      intent: "primary",
      shape: "pill",
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
