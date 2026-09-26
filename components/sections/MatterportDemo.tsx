"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RevealText } from "../ui/Reveal";

const FEATURES = [
  { label: "Felbontás", value: "4K digitális twin" },
  { label: "Lefedettség", value: "360° minden helyiségben" },
  { label: "Funkció", value: "Alaprajz és mérés valós időben" },
  { label: "Elérhetőség", value: "Bármely eszközön, telepítés nélkül" },
];

export function MatterportDemo() {
  const [active, setActive] = useState(false);

  return (
    <section id="bejaras" className="relative bg-charcoal py-28 md:py-40">
      <div className="container-outer">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Élő Matterport bejárás</p>
            </Reveal>
            <RevealText>
              <h2 className="max-w-2xl font-display text-display-lg text-cream">
                Ez nem render.
                <br />
                <span className="italic text-bronze-light">Ez a valódi tér.</span>
              </h2>
            </RevealText>
          </div>
          <Reveal delay={0.2} className="max-w-sm">
            <p className="text-base font-light leading-relaxed text-cream/60">
              Kattintson bele, és járja körbe úgy, ahogyan egy vásárló tenné —
              nagyítással, alaprajz-nézettel és szoba-ugrással.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25} y={50} className="mt-16">
          <div className="relative aspect-video w-full overflow-hidden border border-bronze/30 bg-ink">
            {/* corner brackets */}
            <span className="pointer-events-none absolute left-4 top-4 z-20 h-6 w-6 border-l border-t border-bronze/70" />
            <span className="pointer-events-none absolute right-4 top-4 z-20 h-6 w-6 border-r border-t border-bronze/70" />
            <span className="pointer-events-none absolute bottom-4 left-4 z-20 h-6 w-6 border-b border-l border-bronze/70" />
            <span className="pointer-events-none absolute bottom-4 right-4 z-20 h-6 w-6 border-b border-r border-bronze/70" />

            {/* top chrome bar */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                <span className="text-[0.65rem] uppercase tracking-[0.28em] text-cream/60">
                  Élő 3D bejárás — TERRAVO Showcase
                </span>
              </div>
              <span className="text-[0.65rem] uppercase tracking-[0.28em] text-cream/40">
                Matterport
              </span>
            </div>

            <AnimatePresence mode="wait">
              {!active ? (
                <motion.button
                  key="poster"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setActive(true)}
                  className="absolute inset-0 flex h-full w-full items-center justify-center"
                  aria-label="Bejárás indítása"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_40%,#241d13_0%,#0a0a0a_70%)]" />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(201,166,107,0.5) 1px, transparent 1px)",
                      backgroundSize: "26px 26px",
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-24 w-24 items-center justify-center rounded-full border border-bronze/60 bg-ink/60 backdrop-blur-sm md:h-28 md:w-28"
                    >
                      <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-bronze-light" />
                    </motion.div>
                    <span className="text-[0.75rem] uppercase tracking-[0.28em] text-cream/80">
                      Bejárás indítása
                    </span>
                  </div>
                </motion.button>
              ) : (
                <motion.iframe
                  key="frame"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 h-full w-full"
                  src="https://my.matterport.com/show/?m=joQ3bGtDhZA&play=1&brand=0&mt=0"
                  title="TERRAVO Matterport 3D bejárás bemutató"
                  allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10 md:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08}>
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-bronze">
                {f.label}
              </p>
              <p className="mt-2 font-display text-lg text-cream/85">
                {f.value}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
