"use client";

import Image from "next/image";
import { Reveal, RevealText } from "../ui/Reveal";
import { narrativeImages } from "../../lib/images";

function ScanPanel({
  index,
  image,
}: {
  index: string;
  image: { url: string; alt: string };
}) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-charcoal-soft">
      <Image
        src={image.url}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 33vw, 90vw"
        className="object-cover grayscale-[20%] contrast-[1.05] transition-transform duration-[1.2s] ease-cinematic hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.15)_0%,rgba(10,10,10,0.05)_40%,rgba(10,10,10,0.75)_100%)]" />
      <div className="absolute inset-0 bg-bronze/10 mix-blend-color" />
      <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none">
        <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#C9A66B" strokeWidth="0.5" />
        <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#C9A66B" strokeWidth="0.5" />
      </svg>
      <span className="absolute bottom-6 right-7 font-display text-7xl italic text-bronze-light/70 [text-shadow:0_2px_20px_rgba(0,0,0,0.6)]">
        {index}
      </span>
      <div className="absolute left-7 top-6 h-2 w-2 rounded-full bg-bronze shadow-[0_0_8px_rgba(201,166,107,0.8)]" />
    </div>
  );
}

export function Narrative() {
  return (
    <section id="elmeny" className="relative bg-ink py-28 md:py-40">
      <div className="container-outer">
        {/* Block 1 — Experience */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 lg:col-start-1">
            <Reveal>
              <p className="eyebrow mb-6">01 — Az élmény</p>
            </Reveal>
            <RevealText delay={0.05}>
              <h2 className="font-display text-display-lg text-cream">
                Ez nem egy galéria.
                <br />
                <span className="italic text-bronze-light">Ez egy tér,</span>{" "}
                amit bejárhat.
              </h2>
            </RevealText>
            <Reveal delay={0.2} className="mt-8 max-w-lg">
              <p className="text-lg font-light leading-relaxed text-cream/70">
                A látogató nem képeket görget — besétál. Szobáról szobára
                halad, felnéz a mennyezetmagasságra, megnézi, hogyan esik a
                fény délután a nappaliba. Kimérheti a teret, mielőtt még
                egyetlen kérdést is feltenne. Ez az első pillanat, amikor egy
                idegen otthonosan érzi magát egy ingatlanban, amit még sosem
                látott élőben.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15} y={40}>
              <ScanPanel index="01" image={narrativeImages.experience} />
            </Reveal>
          </div>
        </div>

        <div className="hairline my-24 md:my-32" />

        {/* Block 2 — Comparison */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="order-2 lg:order-1 lg:col-span-4 lg:col-start-1">
            <Reveal y={40}>
              <ScanPanel index="02" image={narrativeImages.comparison} />
            </Reveal>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="eyebrow mb-6">02 — A különbség</p>
            </Reveal>
            <RevealText delay={0.05}>
              <h2 className="font-display text-display-lg text-cream">
                A fénykép megmutatja.
                <br />
                <span className="italic text-bronze-light">
                  A bejárás megérteti.
                </span>
              </h2>
            </RevealText>
            <Reveal delay={0.2} className="mt-8 max-w-lg">
              <p className="text-lg font-light leading-relaxed text-cream/70">
                Húsz fotó húsz külön pillanat — a látogató fejben rakja
                össze, mi hol van, és szinte mindig téved. A 3D bejárás egy
                folyamatos, valós teret ad vissza: az arányokat, a
                távolságokat, az átjárókat. Nem kell elképzelnie a lakást.
                Egyszerűen ott van benne.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="hairline my-24 md:my-32" />

        {/* Block 3 — Trust */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 lg:col-start-1">
            <Reveal>
              <p className="eyebrow mb-6">03 — Bizalom</p>
            </Reveal>
            <RevealText delay={0.05}>
              <h2 className="font-display text-display-lg text-cream">
                A bizalom ott kezdődik,
                <br />
                <span className="italic text-bronze-light">
                  hogy nincs mit elrejteni.
                </span>
              </h2>
            </RevealText>
            <Reveal delay={0.2} className="mt-8 max-w-lg">
              <p className="text-lg font-light leading-relaxed text-cream/70">
                Egy szűk szögből készült fotó eltakarhatja a valóságot — egy
                teljes 3D tér nem. Amikor egy vásárló szabadon körbejárhatja
                az ingatlant, egyetlen zugot sem hagyva ki, azonnal érzi: itt
                nincs trükk. Ez a fajta átláthatóság az, ami komoly
                érdeklődőt hoz az ajtóhoz — nem kíváncsiskodót.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15} y={40}>
              <ScanPanel index="03" image={narrativeImages.trust} />
            </Reveal>
          </div>
        </div>

        <div className="hairline my-24 md:my-32" />

        {/* Block 4 — Time & Filtering, two-column */}
        <div>
          <Reveal>
            <p className="eyebrow mb-6">04 — Hatékonyság</p>
          </Reveal>
          <RevealText delay={0.05}>
            <h2 className="max-w-3xl font-display text-display-lg text-cream">
              Az idő az egyetlen erőforrás,
              <br />
              <span className="italic text-bronze-light">
                amit nem lehet visszavásárolni.
              </span>
            </h2>
          </RevealText>

          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
            <Reveal delay={0.15}>
              <span className="font-display text-sm italic text-bronze">
                Kevesebb üres megtekintés
              </span>
              <p className="mt-4 max-w-md text-lg font-light leading-relaxed text-cream/70">
                Ahelyett, hogy hetente hat érdeklődőt vinne végig ugyanazon a
                lakáson, azok jönnek el személyesen, akik a bejárás után is
                komolyan gondolják. Kevesebb utazás, kevesebb elvesztegetett
                délután, több valódi tárgyalás.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <span className="font-display text-sm italic text-bronze">
                Csak a komoly érdeklődők maradnak
              </span>
              <p className="mt-4 max-w-md text-lg font-light leading-relaxed text-cream/70">
                A virtuális bejárás természetes szűrő: aki csak nézelődik,
                megnézi online és tovább görget. Aki eljön, az már döntött
                arról, hogy ez a tér érdekli — önnek csak a tárgyalást kell
                levezetnie.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
