const PILLARS: [string, string, string, string][] = [
  [
    "One Partner.",
    "One Accountability.",
    "Everything under one roof — managed IT, cybersecurity, software strategy, project management, disaster recovery. No finger-pointing between providers. One relationship that owns it all.",
    "d1",
  ],
  [
    "Proactive,",
    "Not Reactive.",
    "Monthly IT status meetings. Quarterly technology reviews. 24/7 monitoring. Strategic roadmapping. We're solving tomorrow's problem today — not billing you to fix yesterday's.",
    "d2",
  ],
  [
    "Enterprise Depth.",
    "SMB Scale.",
    "Jason Saunders brings 25+ years of enterprise technology experience from Oracle and SAP. You get that strategic depth — without the enterprise price tag, and with a partner who picks up the phone.",
    "d3",
  ],
];

export default function Difference() {
  return (
    <section
      id="difference"
      className="relative overflow-hidden bg-navy px-5 py-section-sm sm:px-6 sm:py-section"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[180px] -top-[180px] h-[550px] w-[550px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(10,58,107,.55) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-site">
        <div className="mb-[60px] text-center">
          <p className="reveal mb-[18px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-silver">
            Why Silverthaw
          </p>
          <h2 className="reveal d1 font-serif text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.13] text-white">
            We Close the Gap.
          </h2>
          <p className="reveal d2 mx-auto mt-[18px] max-w-[540px] text-[16.5px] leading-[1.75] text-white/[0.52]">
            Silverthaw becomes your dedicated IT department — the managed IT services provider that is proactive, strategic, and fully accountable for your technology. Not a ticket
            number. A partner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-[rgba(192,192,192,0.12)] bg-[rgba(192,192,192,0.12)] lg:grid-cols-3">
          {PILLARS.map(([t1, t2, copy, d]) => (
            <div
              key={t1 + t2}
              className={`reveal ${d} bg-navy p-[48px_38px] transition-colors duration-300 hover:bg-[rgba(10,58,107,0.75)]`}
            >
              <div className="mb-[26px] h-[2px] w-[38px] bg-silver" />
              <h3 className="mb-[14px] font-serif text-[22px] font-bold leading-[1.3] text-white">
                {t1}
                <br />
                {t2}
              </h3>
              <p className="text-[14.5px] leading-[1.72] text-white/[0.57]">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
