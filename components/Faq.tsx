"use client";

import { useState } from "react";

const ITEMS: [string, string][] = [
  [
    "We already have an IT company.",
    "That's great — what are they doing proactively? Most providers handle tickets and keep the lights on. Silverthaw goes further: monthly status meetings, quarterly technology reviews, strategic roadmapping, and vendor-neutral software selection. If your current provider is delivering all of that, you're in excellent hands. If not, that's the gap we fill.",
  ],
  [
    "We can't justify the cost right now.",
    "What's it costing you not to have it? Leadership time spent troubleshooting technology. Downtime during critical periods. Security vulnerabilities with no one watching. Our managed services are typically less than half the cost of a single internal IT hire — and you get a full team, not one person, with no overhead.",
  ],
  [
    "We're probably too small for managed IT.",
    "That's actually when you need it most. Small businesses are the primary targets for cyberattacks precisely because they're unprotected. And the technology decisions you make now — your systems, your security, your data practices — become the foundation everything else is built on. Getting it right from the start costs a fraction of fixing it later.",
  ],
  [
    "We've handled IT ourselves until now.",
    "You know your business better than anyone. But every hour spent troubleshooting email issues, chasing software updates, or worrying about cybersecurity is an hour you're not spending on growth. Our job is to take that entire burden off your plate — completely — so you can focus on what you actually do best.",
  ],
];

export default function Faq() {
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
            Questions We Hear
          </p>
          <h2 className="reveal d1 mb-[18px] font-serif text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.13] text-navy">
            Common Concerns.
          </h2>
          <p className="reveal d2 max-w-[540px] text-[14.5px] leading-[1.75] text-ink-muted">
            We believe in honest conversations. Here are the questions we hear
            most often — answered directly.
          </p>
        </div>

        <div className="reveal d1 flex flex-col">
          {ITEMS.map(([q, a], i) => {
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
