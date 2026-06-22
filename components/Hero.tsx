import UnsplashImage from "./UnsplashImage";
import type { HeroContent } from "@/content/types";

const FACES = ["LQ", "AC", "TS", "PH"];

type HeroProps = {
  /** Ubicación inyectada por la ruta dinámica (Ads/A-B). Default: "Toronto". */
  location?: string;
  /** Copy del variante A/B. */
  content: HeroContent;
};

export default async function Hero({ location = "Toronto", content }: HeroProps) {
  const eyebrow = content.eyebrow.replace(/\{location\}/g, location);
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-[70px]"
    >
      {/* gradientes radiales de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 75% at 75% 35%, rgba(10,58,107,.55) 0%, transparent 65%), radial-gradient(ellipse 35% 55% at 15% 90%, rgba(1,26,53,.7) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-[1] mx-auto grid max-w-site grid-cols-1 items-center gap-[60px] px-6 py-20 lg:grid-cols-2">
        {/* ---- Izquierda: copy ---- */}
        <div>
          <p className="reveal mb-[22px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-silver/60">
            {eyebrow}
          </p>

          <h1 className="reveal d1 mb-[26px] font-serif text-[clamp(40px,5vw,66px)] font-extrabold leading-[1.08] text-white">
            {content.headlinePrefix}{" "}
            <em className="italic text-silver/[0.88]">{location}</em>
          </h1>

          <p
            className={`reveal d2 max-w-[460px] text-[16.5px] font-medium leading-[1.7] text-white/[0.78] ${
              content.body ? "mb-4" : "mb-10"
            }`}
          >
            {content.subheadline}
          </p>

          {content.body && (
            <p className="reveal d2 mb-10 max-w-[460px] text-[14px] leading-[1.75] text-white/[0.5]">
              {content.body}
            </p>
          )}

          {/* botones */}
          <div className="reveal d3 mb-[52px] flex flex-col items-start gap-[14px] sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-[9px] whitespace-nowrap rounded-full border-2 border-white bg-white px-[26px] py-[13px] text-[13.5px] font-semibold text-navy transition-all duration-[.22s] hover:bg-transparent hover:text-white"
            >
              {content.primaryCta}
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                <svg
                  viewBox="0 0 9 9"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="h-[9px] w-[9px]"
                >
                  <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3.5M7.5 1.5V5.5" />
                </svg>
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-[9px] whitespace-nowrap rounded-full border-2 border-[rgba(192,192,192,.35)] bg-transparent px-[26px] py-[13px] text-[13.5px] font-semibold text-white/[0.78] transition-all duration-[.22s] hover:border-white/60 hover:text-white"
            >
              {content.secondaryCta}
            </a>
          </div>

          {/* prueba social */}
          <div className="reveal d4 flex items-center gap-[14px]">
            <div className="flex">
              {FACES.map((f, i) => (
                <span
                  key={f}
                  className={`flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-white/15 bg-navy-mid text-[11px] font-bold text-white/55 ${
                    i === 0 ? "" : "-ml-[9px]"
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
            <p className="text-[12.5px] leading-[1.5] text-white/[0.48]">
              <strong className="block text-white/[0.85]">
                {content.socialProofStrong}
              </strong>
              {content.socialProofSub}
            </p>
          </div>
        </div>

        {/* ---- Derecha: visual con foto Unsplash ---- */}
        <div className="reveal d2 relative mx-auto hidden h-[360px] max-w-[520px] lg:mx-0 lg:flex lg:h-[500px] lg:max-w-none">
          {/* contenedor de la imagen */}
          <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-[22px] lg:bottom-[56px] lg:left-[28px]">
            {/* foto de Unsplash como fondo */}
            <UnsplashImage
              query="IT support managed services office technology professional"
              fill
              priority
              showAttribution
              className="object-cover object-center"
            />

            {/* overlay de gradiente para mantener legibilidad de chips */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(148deg, rgba(13,64,112,0.55) 0%, rgba(26,95,160,0.35) 45%, rgba(10,53,96,0.6) 100%)",
              }}
            />
          </div>

          {/* chip 1 — Protección */}
          <div className="absolute right-[-10px] top-[28px] hidden min-w-[180px] items-center gap-[13px] rounded-[18px] border border-white/15 bg-[rgba(1,22,45,0.9)] p-[16px_18px] text-white shadow-chip backdrop-blur-[10px] lg:flex">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[rgba(192,192,192,0.13)]">
              <svg
                viewBox="0 0 24 24"
                className="h-[19px] w-[19px]"
                stroke="#c0c0c0"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="mb-[3px] text-[10px] font-bold uppercase tracking-[.1em] opacity-55">
                {content.chip1.eyebrow}
              </p>
              <p className="font-serif text-[14.5px] font-bold leading-[1.25]">
                {content.chip1.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < content.chip1.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* chip 2 — Enfoque */}
          <div className="absolute bottom-[44px] left-[-2px] hidden min-w-[180px] items-center gap-[13px] rounded-[18px] border border-[rgba(192,192,192,0.25)] bg-[rgba(192,192,192,0.12)] p-[16px_18px] text-white shadow-chip backdrop-blur-[14px] lg:flex">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[rgba(192,192,192,0.13)]">
              <svg
                viewBox="0 0 24 24"
                className="h-[19px] w-[19px]"
                stroke="#c0c0c0"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <div>
              <p className="mb-[3px] text-[10px] font-bold uppercase tracking-[.1em] opacity-55">
                {content.chip2.eyebrow}
              </p>
              <p className="font-serif text-[14.5px] font-bold leading-[1.25]">
                {content.chip2.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < content.chip2.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
