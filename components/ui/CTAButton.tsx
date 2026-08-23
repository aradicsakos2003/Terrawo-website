"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "solid",
  className = "",
}: CTAButtonProps) {
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 ease-cinematic";

  const styles = {
    solid: "bg-bronze text-ink hover:text-cream",
    outline: "border border-bronze/50 text-cream hover:border-bronze",
    ghost: "text-cream/80 hover:text-bronze",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {variant === "solid" && (
        <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      )}
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform duration-500 ease-cinematic group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
