import { cva } from "class-variance-authority";

export const headingVariants = cva("font-light tracking-[0.12em] leading-none", {
  variants: {
    level: {
      display: "text-5xl md:text-7xl lg:text-8xl tracking-[0.15em]",
      h1: "text-4xl md:text-6xl tracking-[0.12em]",
      h2: "text-3xl md:text-4xl tracking-[0.1em]",
      h3: "text-2xl tracking-[0.08em]",
    },
  },
  defaultVariants: {
    level: "h1",
  },
});

export const labelVariants = cva(
  "font-mono text-sm text-white-secondary tracking-widest uppercase",
  {
    variants: {
      intent: {
        scene: "",
        metric: "text-4xl text-white-primary",
      },
    },
  },
);

export const metricVariants = cva("font-mono tabular-nums", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-2xl",
      lg: "text-4xl",
      xl: "text-6xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
