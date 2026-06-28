import UnsplashImage from "./UnsplashImage";
import { LOCKED_LEGAL_HERO_PHOTO_ID } from "@/lib/legalHeroPhoto";

type LegalHeroProps = {
  content: { eyebrow: string; title: string; subheadline: string };
};

export default async function LegalHero({ content }: LegalHeroProps) {
  return (
    <section className="relative flex items-center overflow-hidden bg-navy pt-[70px]">
      {/* gradientes radiales de fondo, igual al Hero principal */}
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
            {content.eyebrow}
          </p>

          <h1 className="reveal d1 mb-[26px] font-serif text-[clamp(34px,4.2vw,54px)] font-extrabold leading-[1.1] text-white">
            {content.title}
          </h1>

          <p className="reveal d2 max-w-[480px] text-[16.5px] font-medium leading-[1.7] text-white/[0.78]">
            {content.subheadline}
          </p>
        </div>

        {/* ---- Derecha: visual con foto Unsplash ---- */}
        <div className="reveal d2 relative mx-auto hidden h-[280px] max-w-[520px] lg:mx-0 lg:flex lg:h-[340px] lg:max-w-none">
          <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-[22px]">
            <UnsplashImage
              query="privacy policy data security legal document law"
              photoId={LOCKED_LEGAL_HERO_PHOTO_ID ?? undefined}
              fill
              priority
              showAttribution
              className="object-cover object-center"
            />

            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(148deg, rgba(13,64,112,0.55) 0%, rgba(26,95,160,0.35) 45%, rgba(10,53,96,0.6) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
