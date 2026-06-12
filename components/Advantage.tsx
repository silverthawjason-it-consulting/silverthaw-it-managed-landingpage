"use client";

import { useRef, useEffect, useState } from "react";

const PILLS: { label: string; desc: string; path: React.ReactNode }[] = [
  {
    label: "Cybersecurity",
    desc: "continuous threat monitoring, endpoint protection, incident response",
    path: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    label: "Infrastructure & Cloud",
    desc: "network, servers, cloud migration, configuration and upkeep",
    path: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    label: "Software Strategy",
    desc: "vendor-neutral selection, implementation oversight, staff training",
    path: (
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    ),
  },
  {
    label: "Helpdesk & IT Support",
    desc: "live support with an average response under 15 minutes",
    path: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  },
  {
    label: "Data Backup & Disaster Recovery",
    desc: "automated, tested, off-site, and ready to deploy",
    path: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </>
    ),
  },
];

const CARDS: {
  label: string;
  stat: string;
  statLabel: string;
  body: string;
  delay: string;
}[] = [
  {
    label: "24/7 Coverage.\nEvery Layer.",
    stat: "24/7",
    statLabel: "always on",
    body: "Your business doesn't run on business hours — and neither do we. Round-the-clock network monitoring, after-hours helpdesk, and continuous threat detection mean problems get caught at 2am the same as 2pm. No gaps, no handoffs, no waiting until morning.",
    delay: "d1",
  },
  {
    label: "A Full Team.\nA Fraction of the Cost.",
    stat: "60%+",
    statLabel: "avg. savings vs. in-house",
    body: "A single IT hire in Ontario costs $60,000 before benefits — and covers maybe two or three disciplines. Silverthaw brings cybersecurity, cloud, networking, compliance, and strategic planning under one monthly investment. You get more capability, zero recruitment overhead, and a cost structure that's predictable as you grow.",
    delay: "d2",
  },
  {
    label: "Grows With\nYour Business.",
    stat: "Scalable",
    statLabel: "no renegotiating",
    body: "Hiring and managing IT staff doesn't scale cleanly — headcount decisions lag behind growth, and skills gaps appear when you can least afford them. Managed IT services flex with you. Whether you're adding a department, opening a second location, or migrating to the cloud, the same partner who knows your business handles it.",
    delay: "d3",
  },
  {
    label: "One Relationship.\nFull Accountability.",
    stat: "1",
    statLabel: "partner, not a vendor pool",
    body: "Most businesses juggle three to five IT vendors with no single owner. When something breaks, everyone points elsewhere. Silverthaw holds the whole picture — infrastructure, security, software, and strategy — so there is always one person accountable: Jason. Not a ticket queue. A name you can call.",
    delay: "d4",
  },
];

export default function Advantage() {
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [visiblePills, setVisiblePills] = useState<boolean[]>(
    Array(PILLS.length).fill(false)
  );
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(CARDS.length).fill(false)
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisiblePills(Array(PILLS.length).fill(true));
      setVisibleCards(Array(CARDS.length).fill(true));
      return;
    }

    function makeObserver(
      ref: React.RefObject<HTMLDivElement>,
      count: number,
      setter: React.Dispatch<React.SetStateAction<boolean[]>>
    ) {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) return;
          Array.from({ length: count }).forEach((_, i) => {
            setTimeout(() => {
              setter((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 100);
          });
          obs.disconnect();
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }

    const cleanupPills = makeObserver(pillsContainerRef, PILLS.length, setVisiblePills);
    const cleanupCards = makeObserver(cardsContainerRef, CARDS.length, setVisibleCards);
    return () => {
      cleanupPills?.();
      cleanupCards?.();
    };
  }, []);

  return (
    <section
      id="difference"
      className="relative overflow-hidden border-t border-[rgba(192,192,192,0.12)] bg-navy px-5 py-section-sm sm:px-6 sm:py-section"
    >
      {/* ambient glow — top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[220px] -top-[220px] h-[680px] w-[680px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(10,58,107,.6) 0%, transparent 68%)",
        }}
      />
      {/* shadow depth — bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[160px] -left-[100px] h-[440px] w-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(1,26,53,.8) 0%, transparent 70%)",
        }}
      />

      {/* asymmetric 5fr / 7fr grid */}
      <div className="relative z-[1] mx-auto grid max-w-site grid-cols-1 items-start gap-[52px] lg:grid-cols-[5fr_7fr] lg:gap-[72px]">

        {/* ---- LEFT: statement + service pills ---- */}
        <div className="reveal">
          <p className="mb-5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-silver">
            The Silverthaw Advantage
          </p>

          <h2 className="mb-[22px] font-serif text-[clamp(34px,4vw,56px)] font-extrabold leading-[1.08] text-white">
            The Only Partner
            <br />
            That Grows
            <br />
            <em className="italic text-silver/[0.75]">With You.</em>
          </h2>

          <p className="mb-11 max-w-[380px] text-[16px] leading-[1.78] text-white/55 lg:max-w-none">
            Managed IT services aren&apos;t a stopgap — they&apos;re the infrastructure model built for how businesses actually scale. One flexible partner, a full team of specialists across every layer of technology, without the overhead of hiring and managing in-house staff. A fraction of the cost of building it yourself.
          </p>

          {/* service pills */}
          <div
            ref={pillsContainerRef}
            className="overflow-hidden rounded-card border border-[rgba(192,192,192,0.14)]"
          >
            {PILLS.map(({ label, desc, path }, i) => (
              <div
                key={label}
                className="flex items-start gap-[14px] border-b border-[rgba(192,192,192,0.10)] px-[22px] py-4 transition-colors last:border-b-0 hover:bg-white/[0.04]"
                style={{
                  opacity: visiblePills[i] ? 1 : 0,
                  transform: visiblePills[i]
                    ? "translateY(0)"
                    : "translateY(12px)",
                  transition:
                    "opacity 500ms ease-out, transform 500ms ease-out",
                }}
              >
                <div className="mt-[2px] flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[rgba(192,192,192,0.10)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[15px] w-[15px]"
                    stroke="rgba(192,192,192,0.8)"
                    fill="none"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {path}
                  </svg>
                </div>
                <p className="min-w-0 text-[13.5px] leading-[1.5] text-white/75">
                  <strong className="font-semibold text-white">{label}</strong>{" "}
                  — {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- RIGHT: proof cards ---- */}
        <div ref={cardsContainerRef} className="flex flex-col gap-5 pt-0 lg:pt-2">
          {CARDS.map(({ label, stat, statLabel, body }, i) => (
            <div
              key={stat + label}
              className="group relative overflow-hidden rounded-card border border-[rgba(192,192,192,0.13)] bg-white/[0.05] p-[28px_30px] transition-[background,border-color] duration-[.25s] hover:border-[rgba(192,192,192,0.24)] hover:bg-white/[0.08]"
              style={{
                opacity: visibleCards[i] ? 1 : 0,
                transform: visibleCards[i] ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 500ms ease-out, transform 500ms ease-out",
              }}
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <p className="min-w-0 font-serif text-[18px] font-bold leading-[1.25] text-white">
                  {label.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < label.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <div className="shrink-0 text-right">
                  <p className="font-serif text-[clamp(22px,2.4vw,30px)] font-extrabold leading-none text-white">
                    {stat}
                  </p>
                  <span className="mt-1 block max-w-[88px] text-[9.5px] font-semibold uppercase leading-[1.4] tracking-[.08em] text-silver/50">
                    {statLabel}
                  </span>
                </div>
              </div>
              <p className="text-[13.5px] leading-[1.72] text-white/[0.52]">
                {body}
              </p>
              {/* bottom accent line */}
              <div
                className="absolute inset-x-0 bottom-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(to right, rgba(192,192,192,.35) 0%, transparent 80%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* ---- CLOSING BAR — spans full grid ---- */}
        <div className="col-span-full mt-3 flex flex-col items-start justify-between gap-6 border-t border-[rgba(192,192,192,0.12)] pt-10 sm:flex-row sm:items-center sm:gap-10">
          <p className="font-serif text-[clamp(18px,2vw,24px)] font-semibold leading-[1.35] text-white/[0.82]">
            Technology that used to require an enterprise budget.
            <br />
            <em className="italic text-white">
              Now built for businesses like yours.
            </em>
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-[9px] whitespace-nowrap rounded-full border-2 border-white bg-white px-[26px] py-[13px] text-[13.5px] font-semibold text-navy transition-all duration-[.22s] hover:bg-transparent hover:text-white"
          >
            See What This Looks Like for Your Business
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
              <svg
                viewBox="0 0 9 9"
                className="h-[9px] w-[9px]"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3.5M7.5 1.5V5.5" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
