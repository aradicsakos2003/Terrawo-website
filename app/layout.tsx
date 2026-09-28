import type { Metadata } from "next";
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/300-italic.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://terravo.hu"),
  title: "TERRAVO — Prémium 3D virtuális bejárások Matterport technológiával",
  description:
    "A TERRAVO professzionális 3D virtuális bejárásokat készít ingatlanok, szállodák és üzletek számára Matterport technológiával. Lépjen be az ingatlanába még az első megtekintés előtt.",
  keywords: [
    "Matterport",
    "virtuális bejárás",
    "3D ingatlan bemutató",
    "ingatlan fotózás",
    "virtual tour",
    "TERRAVO",
  ],
  authors: [{ name: "TERRAVO" }],
  openGraph: {
    title: "TERRAVO — Prémium 3D virtuális bejárások",
    description:
      "Lépjen be az ingatlanába még az első megtekintés előtt. Professzionális Matterport 3D bejárások ingatlanosoknak.",
    url: "https://terravo.hu",
    siteName: "TERRAVO",
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TERRAVO — Prémium 3D Matterport bejárások a Balaton-parton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TERRAVO — Prémium 3D virtuális bejárások",
    description:
      "Professzionális Matterport 3D bejárások ingatlanosoknak, szállodáknak és üzleteknek.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className="font-sans bg-ink text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
