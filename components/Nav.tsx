"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LINKS = [
  { href: "#elmeny", label: "Élmény" },
  { href: "#bejaras", label: "Bejárás" },
  { href: "#folyamat", label: "Folyamat" },
  { href: "#referenciak", label: "Referenciák" },
  { href: "#arak", label: "Árak" },
  { href: "#kapcsolat", label: "Elérhetőségek" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinematic ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="container-outer flex h-20 items-center justify-between md:h-24">
        <Link
          href="#top"
          className="font-display text-xl tracking-[0.32em] text-cream"
        >
          TERRAVO
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cream/70 transition-colors duration-300 hover:text-bronze"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#kapcsolat"
            className="border border-bronze/50 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:border-bronze hover:text-bronze"
          >
            Ajánlatot kérek
          </Link>
        </div>

        <button
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[6px] lg:hidden"
        >
          <span
            className={`h-px w-7 bg-cream transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-7 bg-cream transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-ink lg:hidden"
          >
            <div className="container-outer flex flex-col gap-6 py-8">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-cream/90"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#kapcsolat"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block w-fit border border-bronze/50 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream"
              >
                Ajánlatot kérek
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
