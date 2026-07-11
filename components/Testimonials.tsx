"use client";

import { useEffect, useRef } from "react";
import type { TestimonialsContent, ReviewItem } from "@/content/types";

/** "O'Connor, S." → "OS" */
function initials(name: string) {
  const parts = name.split(/[^\p{L}]+/u).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-[3px]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-[15px] w-[15px]"
          fill={i < rating ? "#FBBC04" : "#e3e6ea"}
          aria-hidden
        >
          <path d="M10 1.5l2.47 5.29 5.8.7-4.28 3.98 1.12 5.73L10 14.35 4.89 17.2l1.12-5.73L1.73 7.49l5.8-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ item }: { item: ReviewItem }) {
  return (
    <article className="flex w-[82vw] max-w-[350px] shrink-0 flex-col rounded-card bg-white p-6 shadow-lift ring-1 ring-white/10 sm:max-w-[360px] lg:w-[360px]">
      <Stars rating={item.rating} />

      <h3 className="mb-2 mt-4 font-serif text-[16.5px] font-bold leading-[1.3] text-navy">
        {item.title}
      </h3>
      <p className="mb-5 line-clamp-6 font-sans text-[13.5px] leading-[1.65] text-ink-body">
        {item.body}
      </p>

      <div className="mt-auto flex items-center gap-3 border-t border-[#ebebec] pt-4">
        {item.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.avatarUrl}
            alt=""
            loading="lazy"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-mid text-[12px] font-bold tracking-[0.04em] text-white">
            {initials(item.authorName)}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate font-serif text-[14px] font-bold text-navy">
            {item.authorName}
          </p>
          <p className="text-[11.5px] text-ink-muted">{item.date}</p>
        </div>
      </div>
    </article>
  );
}

/** Card list duplicated 2x: the -50% marquee keyframe loops seamlessly. */
function MarqueeRow({ items, duration }: { items: ReviewItem[]; duration: string }) {
  return (
    <div className="hidden overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] lg:block">
      <div
        className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        <div className="flex gap-6">
          {items.map((item) => (
            <ReviewCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex gap-6" aria-hidden>
          {items.map((item) => (
            <ReviewCard key={`${item.id}-dup`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ content }: { content: TestimonialsContent }) {
  const half = Math.ceil(content.items.length / 2);
  const rowA = content.items.slice(0, half);
  const rowB = content.items.slice(half);

  // Mobile carousel: real scroll container (native swipe) + rAF auto-drift.
  // The list is duplicated, so wrapping scrollLeft at the halfway point
  // makes the loop seamless.
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout>;
    function pause() {
      paused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, 4000);
    }
    const events = ["pointerdown", "touchstart", "wheel"] as const;
    events.forEach((e) => el.addEventListener(e, pause, { passive: true }));

    function step() {
      // scrollWidth is 0 while the carousel is display:none (lg+), so this
      // no-ops on desktop where the CSS marquee takes over.
      if (!paused && el!.scrollWidth > el!.clientWidth) {
        const half = el!.scrollWidth / 2;
        el!.scrollLeft = el!.scrollLeft >= half ? el!.scrollLeft - half : el!.scrollLeft + 0.6;
      }
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimer);
      events.forEach((e) => el.removeEventListener(e, pause));
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-gradient-to-b from-navy to-navy-dark py-section-sm sm:py-section"
    >
      {/* Header */}
      <div className="mx-auto max-w-site px-5 sm:px-6">
        <div className="mb-[52px]">
          <p className="reveal mb-[16px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-silver/60">
            {content.eyebrow}
          </p>
          <h2 className="reveal d1 font-serif text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.13] text-white">
            {content.headingLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < content.headingLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="reveal d2 mt-[14px] max-w-[540px] text-[16.5px] leading-[1.75] text-white/60">
            {content.subheadline}
          </p>
        </div>
      </div>

      {/* Desktop: two full-bleed marquee rows drifting left, pause on hover */}
      <div className="reveal d2 space-y-6">
        <MarqueeRow items={rowA} duration="55s" />
        <MarqueeRow items={rowB} duration="70s" />
      </div>

      {/* Mobile / tablet: swipeable carousel with auto-drift, next card peeking */}
      <div
        ref={scrollerRef}
        className="reveal d2 no-scrollbar flex gap-5 overflow-x-auto px-5 sm:px-6 lg:hidden"
      >
        <div className="flex gap-5">
          {content.items.map((item) => (
            <ReviewCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex gap-5" aria-hidden>
          {content.items.map((item) => (
            <ReviewCard key={`${item.id}-dup`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
