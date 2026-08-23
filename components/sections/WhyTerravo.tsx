"use client";

import { Reveal, RevealText } from "../ui/Reveal";

const REASONS = [
  {
    n: "01",
    title: "Nem alvállalkozó, hanem operátor",
    desc: "Minden felvételt saját, tanúsított Matterport eszközzel és saját kollégáink készítik. Nincs közvetítő, nincs minőségi ingadozás projektről projektre.",
  },
  {
    n: "02",
    title: "24 óra, nem két hét",
    desc: "A feldolgozó munkafolyamatunkat úgy építettük fel, hogy egy átlagos ingatlan bejárása másnapra élesben legyen — mire a hirdetés kimegy, a link már működik.",
  },
  {
    n: "03",
    title: "Tanácsot is adunk, nem csak fájlt",
    desc: "Megmutatjuk, hova érdemes beágyazni a bejárást, hogyan hivatkozzon rá a hirdetésben, és milyen pillanatfelvételeket érdemes kiemelni belőle a közösségi médiához.",
  },
  {
    n: "04",
    title: "Egy lakástól a teljes portfólióig",
    desc: "Ugyanazt a pontosságot és tempót tartjuk egyetlen lakásnál és egy tízemeletes irodaháznál is — a folyamat skálázódik, a minőség nem csökken.",
  },
];

export function WhyTerravo() {
  return (
    <section id="miert" className="relative bg-charcoal py-28 md:py-40">
      <div className="container-outer">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">Miért TERRAVO</p>
            </Reveal>
            <RevealText>
              <h2 className="font-display text-display-lg text-cream">
                Amit ígérünk,
                <br />
                <span className="italic text-bronze-light">azt be is tartjuk.</span>
              </h2>
            </RevealText>
            <Reveal delay={0.2} className="mt-8">
              <p className="max-w-sm text-base font-light leading-relaxed text-cream/60">
                Nincs szükségünk felsorolásra tele jelzőkkel. A munkánk
                mérhető: határidőben, konzisztens minőségben, magyarázat
                nélkül is érthetően.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-line border-t border-line">
              {REASONS.map((r, i) => (
                <Reveal key={r.n} delay={i * 0.1}>
                  <div className="grid grid-cols-[auto,1fr] gap-6 py-8 md:gap-10 md:py-10">
                    <span className="font-display text-2xl italic text-bronze/60 md:text-3xl">
                      {r.n}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-cream md:text-2xl">
                        {r.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-base font-light leading-relaxed text-cream/60">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
