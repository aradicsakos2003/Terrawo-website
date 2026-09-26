"use client";

import Image from "next/image";
import { Reveal, RevealText } from "../ui/Reveal";
import { referenceImages } from "../../lib/images";

const PROJECTS = [
  {
    name: "Siófok — Beszédes sétány",
    place: "Siófok, Balaton-part",
    tag: "Élő referencia",
    span: "md:col-span-12",
    image: referenceImages.siofok,
    tourUrl: "https://my.matterport.com/show/?m=joQ3bGtDhZA&brand=0",
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
  const content = (
    <div className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-charcoal-soft md:aspect-[21/9]">
      <Image
        src={image.url}
        alt={image.alt}
        fill
        sizes="100vw"
        className="object-cover grayscale-[15%] contrast-[1.05] transition-transform duration-700 ease-cinematic group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.15)_0%,rgba(10,10,10,0.05)_35%,rgba(10,10,10,0.85)_100%)]" />
      <div className="absolute inset-0 bg-bronze/10 mix-blend-color transition-opacity duration-700 group-hover:opacity-60" />
      <span className="absolute right-6 top-6 rounded-full border border-bronze/30 bg-ink/60 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.24em] text-bronze-light backdrop-blur-sm">
        {tag}
      </span>
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
        <div>
          <h3 className="font-display text-2xl italic text-cream md:text-3xl">
            {name}
          </h3>
          <p className="mt-1 text-sm font-light text-cream/50">{place}</p>
        </div>
        {tourUrl && (
          <span className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-bronze-light opacity-0 transition-all duration-500 ease-cinematic group-hover:opacity-100">
            Élő bejárás
            <span className="translate-x-0 transition-transform duration-500 ease-cinematic group-hover:translate-x-1">
              →
            </span>
          </span>
        )}
      </div>
    </div>
  );

  return (
    <Reveal delay={index * 0.1} className={`group relative ${span}`}>
      {tourUrl ? (
        <a
          href={tourUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} — élő 3D bejárás megtekintése`}
        >
          {content}
        </a>
      ) : (
        content
      )}
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

        <div className="grid grid-cols-1 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectTile key={p.name} {...p} index={i} />
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8">
          <p className="text-sm font-light text-cream/35">
            Ez az első élesben átadott TERRAVO-túránk — a galéria a következő
            hetekben újabb siófoki és Balaton-parti projektekkel bővül.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
