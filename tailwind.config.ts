import type { Config } from "tailwindcss";

/**
 * Tokens extraídos 1:1 del bloque :root del index.html original.
 * Cada valor mapea directamente a una variable CSS del diseño Vanilla.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --navy / --navy-mid / --navy-dark
        navy: {
          DEFAULT: "#022549",
          mid: "#0a3a6b",
          dark: "#011a35",
        },
        // --silver / --silver-bg / --silver-line
        silver: {
          DEFAULT: "#c0c0c0",
          bg: "#f4f5f7",
          line: "rgba(192,192,192,0.35)",
        },
        // --text-dark / --text-body / --text-muted
        ink: {
          DEFAULT: "#022549", // text-dark
          body: "#3b4a5c", // text-body
          muted: "#6b7a8d", // text-muted
        },
      },
      fontFamily: {
        // --f-serif: 'Playfair Display', Georgia, serif;
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        // --f-sans: 'Open Sans', -apple-system, sans-serif;
        sans: ["var(--font-open-sans)", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        // --r: 16px;  --r-sm: 8px;
        card: "16px",
        "card-sm": "8px",
      },
      boxShadow: {
        // --sh
        soft: "0 4px 24px rgba(2,37,73,0.07)",
        // --sh-lg
        lift: "0 16px 56px rgba(2,37,73,0.14)",
        // chips del hero
        chip: "0 10px 40px rgba(0,0,0,0.3)",
        // tarjeta del formulario
        form: "0 24px 80px rgba(0,0,0,0.28)",
        // nav.up
        nav: "0 2px 18px rgba(2,37,73,0.09)",
      },
      maxWidth: {
        // --mw: 1200px;
        site: "1200px",
      },
      spacing: {
        // --sp vertical: 104px (desktop) / 72px (mobile <=640)
        section: "104px",
        "section-sm": "72px",
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
      keyframes: {
        "reveal-in": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        // Reviews marquee: el track contiene la lista duplicada 2x,
        // así que -50% produce un loop perfecto.
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration,60s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
