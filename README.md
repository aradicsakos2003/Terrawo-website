# TERRAVO

Prémium, egyedi Next.js weboldal a TERRAVO Matterport 3D virtuális bejárás szolgáltatónak.
A teljes UX koncepció és oldalstruktúra a [`CONCEPT.md`](./CONCEPT.md) fájlban található.

## Gyors előnézet telepítés nélkül

A `terravo-safari-preview.zip` egy önálló, statikusan exportált verzió — nincs benne
szerver-logika (a form és a Matterport-embed kliens oldalon működik). Kicsomagolás után
dupla kattintással megnyitható az `index.html` közvetlenül Safariban (vagy bármely
böngészőben), telepítés és `npm install` nélkül. Ez csak előnézetre való; a fejlesztéshez
és éles kiadáshoz a fenti `npm run dev` / `npm run build` a hivatkozási pont.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (egyedi design token-készlet: charcoal / krém / bronz)
- Framer Motion (scroll-vezérelt, finom animációk)

## Indítás

```bash
npm install
npm run dev
```

Nyisd meg: [http://localhost:3000](http://localhost:3000)

> A `Fraunces` és `Manrope` betűtípusok az `@fontsource/*` csomagokból saját maguk
> hosztoltak (nem a Google Fonts CDN-ről töltődnek runtime-ban) — így build-hez és
> futtatáshoz sincs szükség külső hálózati híváshoz a betűtípusok miatt, és nincs
> Google Fonts-függőség éles környezetben sem.

## Production build

```bash
npm run build
npm run start
```

## Mielőtt élesítenéd

- **Matterport modell:** cseréld le a demó modellt a `components/sections/MatterportDemo.tsx`
  fájlban az `src` URL-ben (`m=` paraméter) a TERRAVO saját felvételére.
- **Elérhetőségek:** `components/sections/Contact.tsx` — e-mail, telefon, székhely.
- **Árak:** `components/sections/Pricing.tsx` — a `PACKAGES` tömb.
- **Referenciák:** `components/sections/References.tsx` — a `PROJECTS` tömb, illetve ha
  valódi Matterport-modelleket szeretnél megjeleníteni képek helyett, az egyes
  `ProjectTile`-okba is beágyazhatók iframe-ek a demó szekcióhoz hasonló mintára.
- **Kontakt form:** a `Contact.tsx` jelenleg csak kliens oldali visszajelzést ad. Éles
  beküldéshez kösd össze egy szolgáltatással (pl. Resend, Formspree, saját API route).
- **Domain / metaadat:** `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` — cseréld a
  `terravo.hu` helyére a végleges domaint.

## Mappa-struktúra

```
app/                 route, layout, globals.css, SEO (robots/sitemap)
components/          Nav, Footer
components/sections/ Hero, Narrative, MatterportDemo, Process, References, Pricing,
                      WhyTerravo, Contact
components/ui/       Reveal (scroll animáció), CTAButton
public/               statikus assetek (grain textúra)
```
