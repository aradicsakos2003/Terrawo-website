"use client";

import { Reveal, RevealText } from "../ui/Reveal";

export function Contact() {
  return (
    <section id="kapcsolat" className="relative bg-ink py-28 md:py-40">
      <div className="container-outer">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">Elérhetőségek</p>
            </Reveal>
            <RevealText>
              <h2 className="font-display text-display-lg text-cream">
                Kezdjük el
                <br />
                <span className="italic text-bronze-light">a bejárását.</span>
              </h2>
            </RevealText>
            <Reveal delay={0.2} className="mt-10 max-w-md">
              <p className="text-base font-light leading-relaxed text-cream/60">
                Írjon vagy hívjon minket — 24 órán belül visszajelzünk
                időponttal és díjazással.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.25} className="space-y-8 border-t border-line pt-10 lg:mt-auto">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-bronze">
                  E-mail
                </p>
                <a
                  href="mailto:terravo2026@gmail.com"
                  className="mt-2 block font-display text-xl text-cream hover:text-bronze-light"
                >
                  terravo2026@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-bronze">
                  Telefon
                </p>
                <a
                  href="tel:+36202801929"
                  className="mt-2 block font-display text-xl text-cream hover:text-bronze-light"
                >
                  +36 20 280 1929
                </a>
                <a
                  href="tel:+36704278437"
                  className="mt-1 block font-display text-xl text-cream hover:text-bronze-light"
                >
                  +36 70 427 8437
                </a>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-bronze">
                  Székhely
                </p>
                <p className="mt-2 font-display text-xl text-cream">
                  Siófok, Balaton-part
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
