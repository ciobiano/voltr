"use client";

import { useState } from "react";
import { Button } from "@/components/primitives/button";

interface NewsletterFormProps {
  submitLabel?: string;
  onSubmit?: (data: { zipCode: string; email: string }) => void;
}

export function NewsletterForm({
  submitLabel = "Register",
  onSubmit,
}: NewsletterFormProps) {
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit?.({ zipCode, email });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <input
        type="text"
        placeholder="Zip code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        className="w-full bg-surface-primary border border-border-subtle rounded-full px-5 py-3.5 text-size-body text-text-primary placeholder:text-text-tertiary outline-none focus:border-orange transition-colors duration-[var(--duration-ui)]"
      />
      <div className="flex items-center bg-surface-primary border border-border-subtle rounded-full pl-5 pr-1.5 py-1.5 focus-within:border-orange transition-colors duration-[var(--duration-ui)]">
        <input
          type="email"
          placeholder="name@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-w-0 bg-transparent text-size-body text-text-primary placeholder:text-text-tertiary outline-none"
        />
        <Button type="submit" size="sm" shape="pill">
          {submitLabel} →
        </Button>
      </div>
    </form>
  );
}
