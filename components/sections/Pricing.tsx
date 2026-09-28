"use client";

import { Reveal, RevealText } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";

const TIERS = [
  {
    range: "0–60 m²",
    label: "Stúdió, kisebb lakás",
    corp: "20 000",
    priv: "23 000",
  },
  {
    range: "61–120 m²",
    label: "Nagyobb lakás, kisebb családi ház",
    corp: "29 900",
    priv: "34 400",
  },
  {
    range: "121–200 m²",
    label: "Családi ház",
    corp: "39 900",
    priv: "45 900",
  },
  {
    range: "201–320 m²",
    label: "Villa",
    corp: "54 900",
    priv: "63 100",
  },
  {
    range: "321–450 m²",
    label: "Balaton-parti luxusvilla",
    corp: "74 900",
    priv: "86 100",
  },
];

const AGENT_TIERS = [
  { range: "1–2 ingatlan / hó", discount: "Alapár" },
  { range: "3–4 ingatlan / hó", discount: "-10%" },
  { range: "5+ ingatlan / hó", discount: "-15%" },
];

const OFFICE_TIERS = [
  { range: "1–4 ingatlan / hó", discount: "Alapár" },
  { range: "5–9 ingatlan / hó", discount: "-10%" },
  { range: "10–14 ingatlan / hó", discount: "-15%" },
  { range: "15+ ingatlan / hó", discount: "-20%" },
];

const FEATURES = [
  "Teljes 3D bejárás",
  "Dollhouse és alaprajz nézet",
  "Beépített mérés funkció",
  "24 órás átadás",
  "Megosztható link + embed kód",
  "Díjmentes kiszállás Siófok és a Balaton-part 20 km-es körzetében",
];

export function Pricing() {
  return (
    <section id="arak" className="relative bg-ink py-28 md:py-40">
      <div className="container-outer">
        <div className="mb-16 md:mb-20">
          <Reveal>
            <p className="eyebrow mb-6">Árak</p>
          </Reveal>
          <RevealText>
            <h2 className="max-w-2xl font-display text-display-lg text-cream">
              Átlátható árazás,
              <br />
              <span className="italic text-bronze-light">alapterület szerint.</span>
            </h2>
          </RevealText>
          <Reveal delay={0.2} className="mt-8 max-w-xl">
            <p className="text-base font-light leading-relaxed text-cream/60">
              Az ár az ingatlan alapterületéhez igazodik, nem csomagnevekhez.
              Ingatlanosoknak és fejlesztőknek kedvezményes díjszabás jár a
              visszatérő együttműködésért — magánszemélyeknek (egyszeri
              értékesítés esetén) 15%-kal magasabb az ár.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="border-t border-line">
            <div className="hidden grid-cols-12 gap-4 border-b border-line py-4 md:grid">
              <span className="col-span-5 text-[0.65rem] uppercase tracking-[0.24em] text-cream/40">
                Alapterület
              </span>
              <span className="col-span-3 text-[0.65rem] uppercase tracking-[0.24em] text-bronze">
                Ingatlanosoknak / cégeknek
              </span>
              <span className="col-span-4 text-[0.65rem] uppercase tracking-[0.24em] text-cream/40">
                Magánszemélyeknek
              </span>
            </div>

            {TIERS.map((tier, i) => (
              <Reveal key={tier.range} delay={i * 0.06}>
                <div className="grid grid-cols-1 gap-2 border-b border-line py-6 md:grid-cols-12 md:items-center md:gap-4 md:py-7">
                  <div className="md:col-span-5">
                    <span className="font-display text-2xl text-cream md:text-3xl">
                      {tier.range}
                    </span>
                    <span className="ml-3 text-sm font-light text-cream/45">
                      {tier.label}
                    </span>
                  </div>
                  <div className="mt-3 md:col-span-3 md:mt-0">
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-cream/35 md:hidden">
                      Ingatlanosoknak / cégeknek
                    </span>
                    <span className="font-display text-xl text-bronze-light md:text-2xl">
                      {tier.corp} Ft
                    </span>
                  </div>
                  <div className="mt-2 md:col-span-4 md:mt-0">
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-cream/35 md:hidden">
                      Magánszemélyeknek
                    </span>
                    <span className="text-lg font-light text-cream/60">
                      {tier.priv} Ft
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={TIERS.length * 0.06}>
              <div className="grid grid-cols-1 gap-2 border-b border-line py-6 md:grid-cols-12 md:items-center md:gap-4 md:py-7">
                <div className="md:col-span-5">
                  <span className="font-display text-2xl text-cream md:text-3xl">
                    450 m² felett
                  </span>
                  <span className="ml-3 text-sm font-light text-cream/45">
                    Szállodák, éttermek, üzletek, irodák
                  </span>
                </div>
                <div className="md:col-span-7">
                  <span className="font-display text-xl italic text-cream/80">
                    Egyedi ajánlat
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-20 md:mt-28">
          <div className="border-t border-line pt-14 md:pt-20">
            <p className="eyebrow mb-6">Partnerkedvezmény</p>
            <h3 className="max-w-xl font-display text-2xl text-cream md:text-3xl">
              Minél rendszeresebb az
              <span className="italic text-bronze-light"> együttműködés</span>,
              annál kedvezőbb az ár.
            </h3>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-cream/60">
              Az alapár a fenti táblázat "Ingatlanosoknak / cégeknek"
              oszlopa. Egyéni ingatlanosoknak és irodáknak az adott hónapban
              teljesített darabszám alapján a következő hónapra
              partnerkedvezmény jár — nem visszamenőleg. Nincs minimum
              vállalás: amennyit egy adott hónapban készítünk, annak
              megfelelő kedvezmény érvényes a következőre.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.1}>
            <p className="mb-5 text-[0.65rem] uppercase tracking-[0.24em] text-bronze">
              Egyéni ingatlanos
            </p>
            <div className="border-t border-line">
              {AGENT_TIERS.map((t) => (
                <div
                  key={t.range}
                  className="flex items-center justify-between border-b border-line py-4"
                >
                  <span className="text-sm font-light text-cream/60">
                    {t.range}
                  </span>
                  <span className="font-display text-lg text-cream md:text-xl">
                    {t.discount}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mb-5 text-[0.65rem] uppercase tracking-[0.24em] text-bronze">
              Iroda
            </p>
            <div className="border-t border-line">
              {OFFICE_TIERS.map((t) => (
                <div
                  key={t.range}
                  className="flex items-center justify-between border-b border-line py-4"
                >
                  <span className="text-sm font-light text-cream/60">
                    {t.range}
                  </span>
                  <span className="font-display text-lg text-cream md:text-xl">
                    {t.discount}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f} delay={i * 0.05}>
              <div className="flex items-baseline gap-3 text-sm font-light text-cream/60">
                <span className="mt-1 h-px w-4 shrink-0 bg-bronze" />
                {f}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 flex flex-col items-start gap-6 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-lg text-sm font-light text-cream/40">
            Az árak indikatívak és nettó összeget jelentenek. Bevezető,
            piacra lépő díjszabás — a pontos ajánlatot helyszíni felmérés
            után adjuk. Az elkészült felvételeket 1 évig tároljuk, azt
            követően töröljük.
          </p>
          <CTAButton href="#kapcsolat" variant="solid">
            Ajánlatot kérek
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
