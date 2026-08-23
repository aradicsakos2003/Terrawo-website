"use client";

import Link from "next/link";
import { Reveal } from "./ui/Reveal";

const SITEMAP = [
  { href: "#elmeny", label: "Élmény" },
  { href: "#bejaras", label: "Bejárás" },
  { href: "#folyamat", label: "Folyamat" },
  { href: "#referenciak", label: "Referenciák" },
  { href: "#arak", label: "Árak" },
];

const SOCIAL = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://facebook.com", label: "Facebook" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-ink pt-24">
      <div className="container-outer">
        <Reveal>
          <Link
            href="#top"
            className="block font-display text-[clamp(3rem,12vw,9rem)] leading-[0.9] tracking-tight text-cream/95 transition-colors duration-500 hover:text-bronze-light"
          >
            TERRAVO
          </Link>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-line py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="max-w-sm text-base font-light leading-relaxed text-cream/50">
              Prémium 3D virtuális bejárások Matterport technológiával —
              ingatlanoknak, szállodáknak, irodáknak és üzleteknek.
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-bronze">
              Oldaltérkép
            </p>
            <ul className="mt-5 space-y-3">
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-light text-cream/60 transition-colors duration-300 hover:text-bronze-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-bronze">
              Közösség
            </p>
            <ul className="mt-5 space-y-3">
              {SOCIAL.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-light text-cream/60 transition-colors duration-300 hover:text-bronze-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-8 text-xs font-light text-cream/35 md:flex-row md:items-center">
          <span>© {year} TERRAVO. Minden jog fenntartva.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-bronze-light">
              Adatvédelem
            </Link>
            <Link href="#" className="hover:text-bronze-light">
              ÁSZF
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
