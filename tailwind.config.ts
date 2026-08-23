import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        charcoal: "#141312",
        "charcoal-soft": "#1D1B18",
        cream: "#F6F1E7",
        "warm-white": "#FBF8F2",
        bone: "#EDE6D6",
        bronze: "#AD8654",
        "bronze-light": "#D4B483",
        "bronze-dark": "#7C5C34",
        gold: "#C9A66B",
        line: "rgba(173,134,84,0.22)",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 8vw, 8.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "bronze-fade": "linear-gradient(180deg, rgba(173,134,84,0) 0%, rgba(173,134,84,0.35) 100%)",
        grain: "url('/noise.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
