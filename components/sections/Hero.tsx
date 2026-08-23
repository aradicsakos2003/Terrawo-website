"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CTAButton } from "../ui/CTAButton";
import { heroImage } from "../../lib/images";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-ink py-8"
    >
      {/* Cinematic photographic backdrop with scan-motif overlay */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={heroImage.url}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale-[15%] contrast-[1.05]"
        />
        {/* Duotone / brand color grade */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.55)_0%,rgba(10,10,10,0.4)_35%,rgba(10,10,10,0.88)_78%,#0a0a0a_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(36,29,19,0.55)_0%,transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_60%,rgba(173,134,84,0.16)_0%,transparent_45%)]" />
        {/* Subtle point-cloud / scan overlay — the Matterport signature */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(rgba(201,166,107,0.6) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 75%)",
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.08]"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#C9A66B" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="grain-overlay" />
      </motion.div>

      <motion.div style={{ opacity }} className="container-outer relative z-10 w-full pb-20 pt-32 md:pb-28 md:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-8"
        >
          Matterport Digital Twin Technológia
        </motion.p>

        <motion.div style={{ y }} className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-hero font-normal text-cream"
          >
            Lépjen be az ingatlanába,
            <br />
            <span className="italic text-bronze-light">még az első</span>{" "}
            megtekintés előtt.
          </motion.h1>
        </motion.div>

        <div className="mt-12 flex flex-col gap-10 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-lg font-light leading-relaxed text-cream/70"
          >
            Fotórealisztikus 3D digitális másolatot készítünk az
            ingatlanáról, amelyben a vásárló percek alatt átérzi a teret —
            mielőtt egy lábát is betenné oda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <CTAButton href="#bejaras" variant="outline">
              Referencia megtekintése
            </CTAButton>
            <CTAButton href="#kapcsolat" variant="solid">
              Ajánlatot kérek
            </CTAButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 md:flex md:right-10"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.28em] text-cream/40">
          Görgessen
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-bronze/60"
        />
      </motion.div>
    </section>
  );
}
