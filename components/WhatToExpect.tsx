const STEPS: {
  n: string;
  title: string;
  desc: string;
  tag: string;
  delay: string;
}[] = [
  {
    n: "1",
    title: "Discovery Call\nwith Jason",
    desc: "A 30-minute conversation. Our licensed advisors listen to how your business runs, what's working, and where technology fits your business.",
    tag: "Day 1",
    delay: "d1",
  },
  {
    n: "2",
    title: "IT Environment\nAssessment",
    desc: "We audit your current infrastructure, including network and cyber protection, hardware, software stack, and data recovery practices, then map it against where your business is headed.",
    tag: "Week 1",
    delay: "d2",
  },
  {
    n: "3",
    title: "Your IT Roadmap\nDelivered",
    desc: "You receive a clear technology roadmap: what needs attention now, what to plan for, and exactly how Silverthaw will support and manage your technology going forward.",
    tag: "Week 2",
    delay: "d3",
  },
  {
    n: "4",
    title: "Proactive Management\nBegins",
    desc: "Monitoring is activated across your environment, helpdesk access is established, and your first monthly IT review is scheduled. From this point forward, your technology is fully managed by a dedicated team.",
    tag: "Week 3 onward",
    delay: "d4",
  },
];

export default function WhatToExpect() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-silver-bg px-5 py-section-sm sm:px-6 sm:py-section"
    >
      {/* ambient glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[120px] -top-[120px] h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(2,37,73,.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-site">
        {/* header */}
        <div className="mb-16 max-w-[600px]">
          <p className="reveal mb-4 text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
            What to Expect
          </p>
          <h2 className="reveal d1 font-serif text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.13] text-navy">
            From First Call to
            <br />
            Fully Managed.
          </h2>
          <p className="reveal d2 mt-[14px] max-w-[540px] text-[16.5px] leading-[1.75] text-ink-muted">
            Four steps from first conversation to having your IT handled by a
            team of experts you can trust.
          </p>
        </div>

        {/* steps grid */}
        <div className="relative grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* connecting line — desktop only */}
          <div
            aria-hidden
            className="absolute top-7 z-0 hidden lg:block"
            style={{
              left: "calc(12.5% + 20px)",
              right: "calc(12.5% + 20px)",
              height: "1px",
              background:
                "linear-gradient(to right, #022549 0%, rgba(2,37,73,.15) 100%)",
            }}
          />

          {STEPS.map(({ n, title, desc, tag, delay }) => (
            <div
              key={n}
              className={`reveal ${delay} relative z-[1] flex flex-col items-start lg:pr-7 last:lg:pr-0`}
            >
              {/* numbered dot */}
              <div className="mb-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-[19px] font-bold text-white shadow-[0_6px_20px_rgba(2,37,73,0.18)]">
                {n}
              </div>

              <h3 className="mb-[10px] font-serif text-[17px] font-bold leading-[1.25] text-navy">
                {title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h3>

              <p className="text-[13.5px] leading-[1.72] text-ink-muted">
                {desc}
              </p>

              <span className="mt-[14px] text-[10px] font-bold uppercase tracking-[.14em] text-navy/[0.45]">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
