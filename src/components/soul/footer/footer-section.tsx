"use client";

import Image from "next/image";
import { NewsletterForm } from "@/components/primitives/newsletter-form";

function Sparkle() {
  return (
    <Image
      src="/svg/icons/sparkle.svg"
      alt=""
      width={36}
      height={36}
      aria-hidden="true"
    />
  );
}

const primaryNavLinks = [
  { label: "F2.B", href: "#ae1" },
  { label: "Technology", href: "#technology" },
  { label: "Experience", href: "#experience" },
  { label: "Buy it now", href: "#buy" },
];

const footerColumns = [
  [
    { label: "Company", href: "#" },
    { label: "Events", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Specs", href: "#" },
  ],
  [
    { label: "Journal", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "FAQ", href: "#" },
  ],
];

const socialLinks = [
  { src: "/svg/icons/instagram.svg", label: "Instagram", href: "#" },
  { src: "/svg/icons/facebook.svg", label: "Facebook", href: "#" },
  { src: "/svg/icons/linkedin.svg", label: "LinkedIn", href: "#" },
  { src: "/svg/icons/youtube.svg", label: "YouTube", href: "#" },
  { src: "/svg/icons/x.svg", label: "X", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="bg-surface-primary border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        {/* Sparkle marks */}
        <div className="flex justify-center gap-4 pt-20 pb-16 md:pt-24 md:pb-20">
          <Sparkle />
          <Sparkle />
        </div>

        {/* Tagline + nav links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pb-16 md:pb-20">
          <div className="space-y-6">
            <h2 className="font-display text-size-2xs font-medium leading-heading text-text-primary">
              Go Further.
            </h2>
            <p className="text-size-2xs text-text-secondary max-w-[20em] leading-6">
              VOLTR builds all-electric vehicles for modern adventurers.
              Powered by innovation and driven by freedom, we&apos;re redefining
              the future of electric mobility.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="divide-y divide-border-subtle border-t border-b border-border-subtle">
              {primaryNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between py-4 text-size-2xs text-text-primary hover:text-orange transition-colors duration-[var(--duration-ui)] group"
                  >
                    <span className="font-sans">{link.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-ui)] text-orange">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-border-subtle" />

        {/* Lower footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-5">
            <p className="text-body text-text-primary tracking-wide">
              Newsletter
            </p>
            <NewsletterForm />
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-16">
              {footerColumns.map((column, i) => (
                <ul key={i} className="space-y-3">
                  {column.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-size-body text-text-primary hover:underline underline-offset-2 transition-colors duration-[var(--duration-ui)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="flex items-start gap-5">
              {socialLinks.map(({ src, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="opacity-40 hover:opacity-100 transition-opacity duration-[var(--duration-ui)]"
                >
                  <Image src={src} alt="" width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="border-t border-border-subtle py-8">
          <p className="text-sm text-text-secondary leading-relaxed max-w-5xl">
            (1) &ldquo;Starting at&rdquo; payments are estimates only. Your actual payment,
            down payment, and interest rate will vary based on credit approval,
            lender requirements, and final vehicle configuration. Advertised
            rates and terms are subject to change without notice. Monthly
            payment excludes tax, title, registration, and any applicable dealer
            or documentation fees.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-subtle py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-caption text-text-secondary">
            Copyright {new Date().getFullYear()}, VOLTR.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-[var(--duration-ui)]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-caption text-text-secondary hover:text-text-primary transition-colors duration-[var(--duration-ui)]"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
