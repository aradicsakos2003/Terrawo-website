"use client";

import { Reveal, RevealText } from "../ui/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Időpont egyeztetés",
    desc: "Egy rövid hívás vagy üzenet, és már tudjuk, milyen ingatlanról, milyen határidővel van szó.",
  },
  {
    n: "02",
    title: "Helyszíni felvétel",
    desc: "60–90 perc alatt, zajtalanul, az ön vagy a vevő ütemezéséhez igazodva vesszük fel a teret.",
  },
  {
    n: "03",
    title: "Feldolgozás",
    desc: "A nyers szkennelésből fotórealisztikus, bejárható digitális másolat készül stúdiónkban.",
  },
  {
    n: "04",
    title: "24 órán belüli átadás",
    desc: "Megosztható linkkel, azonnal használható a hirdetésben, közösségi médiában, e-mailben.",
  },
];

export function Process() {
  return (
    <section id="folyamat" className="relative bg-ink py-28 md:py-40">
      <div className="container-outer">
        <div className="mb-20 md:mb-28">
          <Reveal>
            <p className="eyebrow mb-6">Hogyan dolgozunk</p>
          </Reveal>
          <RevealText>
            <h2 className="max-w-2xl font-display text-display-lg text-cream">
              Négy lépés a felvételtől
              <br />
              <span className="italic text-bronze-light">az átadásig.</span>
            </h2>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 gap-y-14 md:grid-cols-4 md:gap-x-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.12}>
              <div className="relative border-t border-line pt-8">
                <span className="font-display text-6xl italic text-bronze/50 md:text-7xl">
                  {step.n}
                </span>
                <h3 className="mt-6 font-display text-2xl text-cream">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xs text-base font-light leading-relaxed text-cream/60">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
