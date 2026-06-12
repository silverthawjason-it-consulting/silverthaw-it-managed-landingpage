const STATS: [string, string, string][] = [
  [
    "43%",
    "of cyberattacks target small businesses — most of whom have no proactive security monitoring in place",
    "d1",
  ],
  [
    "$100k+",
    "annual cost of a single internal IT hire — who rarely covers cybersecurity, software selection, and strategic planning",
    "d2",
  ],
  [
    "$8k+",
    "average hourly cost of unplanned IT downtime for an SMB — the gap between reactive and proactive support",
    "d3",
  ],
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-white px-5 py-section-sm sm:px-6 sm:py-section"
    >
      {/* ghost text de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[70px] -right-[30px] select-none whitespace-nowrap font-serif text-[clamp(100px,14vw,220px)] font-black leading-none text-navy opacity-[0.035]"
      >
        The IT Gap
      </div>

      <div className="mx-auto max-w-site">
        <div className="mb-[60px] max-w-[680px]">
          <p className="reveal mb-[18px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
            The Problem
          </p>
          <h2 className="reveal d1 font-serif text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.13] text-navy">
            Most Ontario Businesses Are
            <br />
            Operating in The IT Gap.
          </h2>
          <div className="reveal d2 mt-[22px] max-w-[620px] text-[16.5px] leading-[1.82] text-ink-body [&>p+p]:mt-[15px]">
            <p>
              No internal IT team. A provider that only shows up when something
              breaks. Technology decisions made without expertise. Free tools
              that stopped scaling two years ago.
            </p>
            <p>
              The IT Gap is the space between what your business needs from
              technology — and what it actually has. It&apos;s invisible until
              it isn&apos;t: a ransomware attack, a critical outage, a system
              that can&apos;t support the next hire.
            </p>
            <p>
              <strong className="text-navy">
                It costs you more than you think.
              </strong>
            </p>
          </div>
        </div>

        <div className="relative z-[1] mt-[54px] grid grid-cols-1 gap-[14px] lg:grid-cols-3 lg:gap-[22px]">
          {STATS.map(([n, l, d]) => (
            <div
              key={n}
              className={`reveal ${d} rounded-r-card-sm border-l-[3px] border-navy bg-white px-[26px] py-6 shadow-soft`}
            >
              <p className="mb-[9px] font-serif text-[44px] font-extrabold leading-none text-navy">
                {n}
              </p>
              <p className="text-[13.5px] leading-[1.55] text-ink-muted">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
