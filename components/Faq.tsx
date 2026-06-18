"use client";

import { useState } from "react";
import type { FaqContent } from "@/content/types";

export default function Faq({ content }: { content: FaqContent }) {
  // El primer item arranca abierto (igual que el HTML original).
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-white px-5 py-section-sm sm:px-6 sm:py-section"
    >
      <div className="mx-auto grid max-w-site grid-cols-1 items-start gap-11 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <p className="reveal mb-[18px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
            {content.eyebrow}
          </p>
          <h2 className="reveal d1 mb-[18px] font-serif text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.13] text-navy">
            {content.heading}
          </h2>
          <p className="reveal d2 max-w-[540px] text-[14.5px] leading-[1.75] text-ink-muted">
            {content.subheadline}
          </p>
        </div>

        <div className="reveal d1 flex flex-col">
          {content.items.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border-b border-[rgba(192,192,192,0.4)] ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-[14px] py-[22px] text-left"
                >
                  <span className="font-serif text-[18px] font-semibold leading-[1.4] text-navy">
                    &ldquo;{q}&rdquo;
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-all duration-[.25s] ${
                      isOpen ? "border-navy bg-navy" : "border-silver"
                    }`}
                  >
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      className={`h-[11px] w-[11px] transition-transform duration-[.25s] ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      stroke={isOpen ? "#ffffff" : "#022549"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      {isOpen ? (
                        <path d="M1 1l9 9M10 1l-9 9" />
                      ) : (
                        <path d="M5.5 1v9M1 5.5h9" />
                      )}
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-[.35s] ease"
                  style={{ maxHeight: isOpen ? 300 : 0 }}
                >
                  <p className="max-w-[520px] pb-[22px] text-[14.5px] leading-[1.78] text-ink-body">
                    {a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
