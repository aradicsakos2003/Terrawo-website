"use client";

import Image from "next/image";
import { Reveal, RevealText } from "../ui/Reveal";
import { referenceImages } from "../../lib/images";

const PROJECTS = [
  {
    name: "Belváros Penthouse",
    place: "Budapest, V. kerület",
    tag: "Lakóingatlan",
    span: "md:col-span-7 md:row-span-2",
    image: referenceImages.penthouse,
  },
  {
    name: "Villa Lupa",
    place: "Balatonfüred",
    tag: "Luxusvilla",
    span: "md:col-span-5",
    image: referenceImages.villa,
  },
  {
    name: "Loft Studio 34",
    place: "Budapest, IX. kerület",
    tag: "Bérlemény",
    span: "md:col-span-5",
    image: referenceImages.loft,
  },
  {
    name: "Boutique Suite",
    place: "Eger, Belváros",
    tag: "Szálláshely",
    span: "md:col-span-7",
    image: referenceImages.suite,
  },
];

function ProjectTile({
  name,
  place,
  tag,
  span,
  image,
  index,
}: {
  name: string;
  place: string;
  tag: string;
  span: string;
  image: { url: string; alt: string };
  index: number;
}) {
  return (
    <Reveal delay={index * 0.1} className={`group relative ${span}`}>
      <div className="relative aspect-[16/11] w-full overflow-hidden border border-line bg-charcoal-soft">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale-[15%] contrast-[1.05] transition-transform duration-700 ease-cinematic group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.15)_0%,rgba(10,10,10,0.05)_35%,rgba(10,10,10,0.85)_100%)]" />
        <div className="absolute inset-0 bg-bronze/10 mix-blend-color transition-opacity duration-700 group-hover:opacity-60" />
        <span className="absolute right-6 top-6 text-[0.65rem] uppercase tracking-[0.24em] text-bronze-light [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
          {tag}
        </span>
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
          <div>
            <h3 className="font-display text-2xl italic text-cream md:text-3xl">
              {name}
            </h3>
            <p className="mt-1 text-sm font-light text-cream/50">{place}</p>
          </div>
          <span className="translate-x-2 text-cream/0 transition-all duration-500 ease-cinematic group-hover:translate-x-0 group-hover:text-bronze-light">
            →
          </span>
        </div>
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

        <div className="grid grid-cols-1 gap-6 md:auto-rows-[220px] md:grid-cols-12">
          {PROJECTS.map((p, i) => (
            <ProjectTile key={p.name} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
