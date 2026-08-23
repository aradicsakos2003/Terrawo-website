# TERRAVO — UX koncepció és oldalstruktúra

## Pozicionálás
Nem "fotós weboldal". Egy high-end, spatial-capture technológiai cég, amely a Matterport
technológiát luxus élményként tálalja. A vizuális nyelv Apple (tisztaság, tipográfia, tér),
Porsche (mély feketék, bronz fém-akcent, precizitás) és Airbnb Luxe (bizalom, emberi
történetmesélés, visszafogott mozgás) metszéspontja.

## Design rendszer
- **Alap sötét:** `#0A0A0A` (ink) / `#141312` (charcoal) / `#1D1B18` (charcoal-soft) —
  meleg fekete, nem tiszta `#000`
- **Meleg fehér / krém:** `#F6F1E7` (cream), `#FBF8F2` (warm-white), `#EDE6D6` (bone) —
  papír-szerű felületek a szüneteknek, nem klinikai `#FFF`
- **Bronz/arany akcent:** `#AD8654` (bronze), `#D4B483` (bronze-light), `#7C5C34`
  (bronze-dark), `#C9A66B` (gold) — csak kiemelésre (szöveg, vonal, keret), soha nem
  nagy felületként
- **Tipográfia:** Fraunces (nagy display serif, editoriális, dőlt kiemelésekkel) +
  Manrope (UI, gombok, testszöveg) — a serif adja a luxus réteget, a geometrikus grotesk
  a tech/precizitás réteget. Fluid `clamp()` méretezés a hero és a szekció-címsorokhoz.
- **Ritmus:** minden szekció más kompozíció (aszimmetrikus 12-oszlopos rács, nem minden
  középre igazítva), bőséges whitespace, scroll-vezérelt fade/translate animációk
  (Framer Motion `whileInView`, 0.6–1.1s, cinematic easing `[0.16,1,0.3,1]`, nincs "bounce")
- **Textúra:** finom SVG film-grain overlay és pontrács ("point cloud" motívum) a sötét
  szekciókon, ez adja a Matterport-szkennelésre utaló cinematic hatást stock fotó nélkül

## Oldalstruktúra (egy hosszú, történetmesélő landing — `app/page.tsx`)
1. **Nav** (`components/Nav.tsx`) — fix, minimál, logó + 6 link + "Ajánlatot kérek" gomb,
   scroll után sötét/üveg háttér (backdrop-blur), mobil fullscreen menü
2. **Hero** (`components/sections/Hero.tsx`) — teljes képernyő, sötét, mozgó pontrács /
   gradiens háttér parallax-szal, egy soros headline ("Lépjen be az ingatlanába, még az
   első megtekintés előtt."), alatta rövid szöveg, két CTA ("Referencia megtekintése",
   "Ajánlatot kérek"), lefelé mutató finom scroll-jelzés
3. **Élmény-fejezetek** (`components/sections/Narrative.tsx`, 4 váltakozó blokk) — nem
   szolgáltatáslista, hanem végigvezetés: (1) milyen érzés belépni egy térbe, (2) miért
   jobb mint a fénykép, (3) hogyan épít bizalmat még a bejárás előtt, (4) idő-megtakarítás
   + komolytalan érdeklődők kiszűrése (két hasábos záróblokk)
4. **Matterport zászlóshajó szekció** (`components/sections/MatterportDemo.tsx`) — teljes
   szélesség, sötét keret, bronz sarokjelölők, kattintásra induló élő Matterport embed
   (nyilvános demo modell, nem statikus placeholder), alatta 4 rövid jellemző sor
5. **Hogyan dolgozunk** (`components/sections/Process.tsx`) — 4 lépés (Időpont egyeztetés,
   Helyszíni felvétel, Feldolgozás, 24 órán belüli átadás), nagy dőlt számozás (01–04)
6. **Referenciák** (`components/sections/References.tsx`) — aszimmetrikus szerkesztői
   rács, kevés, nagy elem, hover-reveal, nem "kártya-tenger"
7. **Árak** (`components/sections/Pricing.tsx`) — START / PRO / PREMIUM, aszimmetrikus
   3-oszlop, a PRO vizuálisan kiemelve (eltolva, keretezve), a PREMIUM invertált
   (bronz háttér), nem azonos dobozok
8. **Miért TERRAVO** (`components/sections/WhyTerravo.tsx`) — 4 valódi, mérhető érv
   számozott sorokban, nem ikon + egysoros marketingszöveg
9. **Kapcsolat** (`components/sections/Contact.tsx`) — minimál, nagy tipográfiájú
   email/telefon/székhely, rövid underline-stílusú form
10. **Footer** (`components/Footer.tsx`) — sötét, elegáns, óriás TERRAVO logótipó,
    oldaltérkép, közösségi linkek, jogi sorok

## Megosztott UI elemek
- `components/ui/Reveal.tsx` — `Reveal` (fade+translate `whileInView`) és `RevealText`
  (maszkolt sor-felfedés a címsorokhoz)
- `components/ui/CTAButton.tsx` — egységes CTA gomb `solid` / `outline` / `ghost`
  variánsokkal, hover-wipe animációval

## Megjegyzés az assetekről
Valódi ügyféladat, fotó/videó és Matterport modell nélkül a vizuális réteg generált
gradiensekre, finom pontrács-mintákra és egy nyilvános Matterport demo modellre épül —
így nincs stock fotó a projektben. Éles bevezetéskor cserélendő:
- a `MatterportDemo.tsx`-ben az `src` a saját Matterport `m=` modell-azonosítóra,
- a `Contact.tsx`-ben az e-mail/telefon/cím valós elérhetőségekre,
- a `Pricing.tsx`-ben az indikatív árak véglegesre,
- a `References.tsx`-ben a placeholder projektnevek valós referenciákra (és igény
  esetén tényleges Matterport-modell beágyazásokra a jelenlegi grafikus panelek helyett).
