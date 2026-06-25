"use client";

import { useState, useRef } from "react";
import type { ServicesContent } from "@/content/types";

const S = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-7 w-7",
};

const ICONS = {
  rocket: (
    <svg {...S}>
      <path d="M12 2C9 6 8 9 8 13h8c0-4-1-7-4-11z" />
      <path d="M8 13L5 17h4M16 13l3 4h-4" />
      <path d="M10 17c0 2.5 4 2.5 4 0" />
      <circle cx="12" cy="9" r="1.5" />
    </svg>
  ),
  monitor: (
    <svg {...S}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  lightbulb: (
    <svg {...S}>
      <path d="M12 2a6 6 0 0 0-3 11.2V15h6v-1.8A6 6 0 0 0 12 2z" />
      <path d="M9 17h6M9.5 20h5" />
    </svg>
  ),
  clipboard: (
    <svg {...S}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 2h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z" />
      <path d="M9 12l2 2 4-4M9 17h4" />
    </svg>
  ),
  shield: (
    <svg {...S}>
      <path d="M12 2L4 5.5v7c0 4.75 3.5 9 8 11 4.5-2 8-6.25 8-11v-7L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  database: (
    <svg {...S}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <ellipse cx="12" cy="19" rx="9" ry="3" />
      <path d="M3 5v14M21 5v14" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
};

export default function Services({ content }: { content: ServicesContent }) {
  const [open, setOpen] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  function handleToggle(i: number) {
    const isNowOpening = open !== i;
    setOpen(isNowOpening ? i : null);
    if (isNowOpening) {
      setTimeout(() => {
        itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }

  return (
    <section
      id="services"
      className="bg-white px-5 py-section-sm sm:px-6 sm:py-section"
    >
      <div className="mx-auto max-w-site">
        {/* Header */}
        <div className="mb-[52px]">
          <p className="reveal mb-[16px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
            {content.eyebrow}
          </p>
          <h2 className="reveal d1 font-serif text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.13] text-navy">
            {content.headingLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < content.headingLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="reveal d2 mt-[14px] max-w-[540px] text-[16.5px] leading-[1.75] text-ink-muted">
            {content.subheadline}
          </p>
        </div>

        {/* Service cards grid */}
        <div className="reveal d1 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((svc, i) => {
            const isOpen = open === i;
            return (
              <div
                key={svc.name}
                ref={(el) => { itemRefs.current[i] = el; }}
                onClick={() => handleToggle(i)}
                className="group cursor-pointer rounded-card bg-silver-bg p-6 shadow-soft transition-[transform,box-shadow] duration-[.25s] ease-in-out hover:scale-[0.97] hover:shadow-none scroll-mt-24 sm:p-7"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-navy shadow-[0_1px_6px_rgba(2,37,73,0.10)]">
                  {ICONS[svc.icon]}
                </div>

                {/* Title */}
                <h3 className="mb-2 font-serif text-[17px] font-bold leading-[1.3] text-navy sm:text-[18.5px]">
                  {svc.name}
                </h3>

                {/* Summary */}
                <p className="text-[13.5px] leading-[1.65] text-ink-muted sm:text-[14px]">
                  {svc.summary}
                </p>

                {/* Expand toggle */}
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-navy-mid transition-opacity duration-[.2s] group-hover:opacity-70">
                    {isOpen ? "Close" : "Details"}
                  </span>
                  <span
                    className={`text-[13px] font-bold leading-none text-navy-mid transition-[transform,opacity] duration-[.25s] group-hover:opacity-70 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    ›
                  </span>
                </div>

                {/* Expandable panel */}
                <div
                  className={`grid transition-[grid-template-rows] duration-[.35s] ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`pt-5 transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="text-[13.5px] leading-[1.75] text-ink-body sm:text-[14px]">
                        {svc.extended}
                      </p>
                      <p className="mb-3 mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
                        What&apos;s included
                      </p>
                      <ul className="space-y-2.5">
                        {svc.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rotate-45 bg-navy" />
                            <span className="text-[13px] leading-[1.6] text-ink-body">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {svc.certifications && (
                        <>
                          <p className="mb-2 mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
                            Certifications &amp; Expertise
                          </p>
                          <p className="text-[12px] leading-[1.65] text-ink-muted">
                            {svc.certifications}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
