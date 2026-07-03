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

export const dialogOverlayVariants = cva(
  "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm ",
);

export const dialogContentVariants = cva(
  "fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-[var(--container-dialog)] max-h-[85vh] overflow-hidden rounded-2xl bg-surface-primary shadow-[var(--shadow-elevation-1)] focus:outline-none",
);

export const dialogPanelVariants = cva(
  "h-full max-h-[85vh] overflow-y-auto p-8 md:p-12",
);

export const dialogCloseVariants = cva(
  "absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-orange text-surface-primary shadow-[var(--shadow-elevation-1)] transition-colors duration-[var(--duration-ui)] hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-primary focus:ring-border-focus",
);

export const faqIconVariants = cva(
  "transition-transform duration-[var(--duration-ui)] ease-[var(--ease-micro)]",
  {
    variants: {
      open: {
        true: "rotate-45",
        false: "rotate-0",
      },
    },
    defaultVariants: {
      open: false,
    },
  },
);

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
