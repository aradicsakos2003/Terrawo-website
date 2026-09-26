"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RevealText } from "../ui/Reveal";
import { referenceImages } from "../../lib/images";

const PROJECTS = [
  {
    name: "Siófoki lakás",
    place: "Siófok, Balaton-part",
    tag: "Lakóingatlan",
    span: "md:col-span-12",
    image: referenceImages.siofok,
    tourUrl: "https://my.matterport.com/show/?m=joQ3bGtDhZA&play=1&brand=0&mt=0",
  },
];

function ProjectTile({
  name,
  place,
  tag,
  span,
  image,
  index,
  tourUrl,
}: {
  name: string;
  place: string;
  tag: string;
  span: string;
  image: { url: string; alt: string };
  index: number;
  tourUrl?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <Reveal delay={index * 0.1} className={`group relative ${span}`}>
      <div className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-charcoal-soft md:aspect-[21/9]">
        <span className="absolute right-6 top-6 z-20 rounded-full border border-bronze/30 bg-ink/60 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em] text-bronze-light backdrop-blur-sm">
          {tag}
        </span>

        <AnimatePresence mode="wait">
          {!active || !tourUrl ? (
            <motion.button
              key="poster"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => tourUrl && setActive(true)}
              disabled={!tourUrl}
              className="absolute inset-0 h-full w-full"
              aria-label={
                tourUrl ? `${name} — élő 3D bejárás indítása` : name
              }
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-cover grayscale-[15%] contrast-[1.05] transition-transform duration-700 ease-cinematic group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.15)_0%,rgba(10,10,10,0.05)_35%,rgba(10,10,10,0.85)_100%)]" />
              <div className="absolute inset-0 bg-bronze/10 mix-blend-color transition-opacity duration-700 group-hover:opacity-60" />

              {tourUrl && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-bronze/60 bg-ink/60 backdrop-blur-sm opacity-0 transition-opacity duration-500 ease-cinematic group-hover:opacity-100 md:h-20 md:w-20"
                  >
                    <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-bronze-light" />
                  </motion.div>
                </div>
              )}

              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                <div className="text-left">
                  <h3 className="font-display text-2xl italic text-cream md:text-3xl">
                    {name}
                  </h3>
                  <p className="mt-1 text-sm font-light text-cream/50">{place}</p>
                </div>
              </div>
            </motion.button>
          ) : (
            <motion.iframe
              key="frame"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 z-10 h-full w-full"
              src={tourUrl}
              title={`${name} — élő 3D bejárás`}
              allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function References() {
  return (
    <section id="referenciak" className="relative bg-charcoal py-28 md:py-40">
      <div className="container-outer">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Válogatott projektek</p>
            </Reveal>
            <RevealText>
              <h2 className="max-w-xl font-display text-display-lg text-cream">
                Terek, amiket
                <br />
                <span className="italic text-bronze-light">életre keltettünk.</span>
              </h2>
            </RevealText>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {PROJECTS.map((p, i) => (
            <ProjectTile key={p.name} {...p} index={i} />
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8">
          <p className="text-sm font-light text-cream/35">
            A galéria a következő hetekben újabb siófoki és Balaton-parti
            projektekkel bővül.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
