const ITEMS: [string, string, string][] = [
  [
    "Goes above and beyond while ensuring the software recommended is right for them.",
    "Luca Quintieri",
    "d1",
  ],
  [
    "Professional, skilled and dedicated to seeing and supporting others' success.",
    "Andrew Clark",
    "d2",
  ],
  [
    "Knowledgeable, experienced, open-minded and trustworthy, with the ability to make his client feel comfortable with the process.",
    "Tim Smith",
    "d3",
  ],
  [
    "Real professional help and guidance, and we now see our way forward.",
    "Peter Hynes",
    "d4",
  ],
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-silver-bg px-5 py-section-sm sm:px-6 sm:py-section"
    >
      <div className="mx-auto max-w-site">
        <div className="mb-[52px]">
          <p className="reveal mb-[16px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
            Client Testimonials
          </p>
          <h2 className="reveal d1 font-serif text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.13] text-navy">
            What Our Partners Say.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[28px] sm:grid-cols-2">
          {ITEMS.map(([q, by, d]) => (
            <div
              key={by}
              className={`reveal ${d} relative rounded-card border-[1.5px] border-[#ebebec] p-[38px_38px_32px] transition-[box-shadow,border-color] duration-[.22s] hover:border-navy/[0.18] hover:shadow-soft`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-[30px] top-[22px] select-none font-serif text-[110px] leading-[.75] text-navy opacity-[0.065]"
              >
                &ldquo;
              </span>
              <p className="relative z-[1] mb-[26px] font-serif text-[18px] italic leading-[1.68] text-navy">
                &ldquo;{q}&rdquo;
              </p>
              <p className="border-t border-[#ebebec] pt-[16px] text-[12px] font-bold uppercase tracking-[.1em] text-ink-muted">
                {by}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
