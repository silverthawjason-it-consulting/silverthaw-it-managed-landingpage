import type { LegalContentData, LegalClause } from "@/content/legal";

function Clause({ number, heading, paragraphs, bullets }: LegalClause) {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="mb-2 flex items-baseline gap-3 font-serif text-[19px] font-bold leading-[1.3] text-navy">
        <span className="font-sans text-[13px] font-bold tracking-[.04em] text-navy/35">
          {number}
        </span>
        {heading}
      </h3>
      <div className="text-[14.5px] leading-[1.78] text-ink-body [&>p+p]:mt-3">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {bullets && (
        <ul className="mt-3 space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rotate-45 bg-navy" />
              <span className="text-[13.5px] leading-[1.6] text-ink-body">
                {b}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function LegalContent({ content }: { content: LegalContentData }) {
  const { effectiveDate, lastUpdated, intro, privacySections, termsSections, contact } =
    content;

  return (
    <>
      {/* Intro */}
      <section className="bg-white px-5 py-section-sm sm:px-6 sm:py-section">
        <div className="mx-auto max-w-[720px]">
          <p className="reveal mb-4 text-[12.5px] font-bold uppercase tracking-[.12em] text-navy/60">
            Effective Date: {effectiveDate} · Last Updated: {lastUpdated}
          </p>
          <div className="reveal d1 text-[15.5px] leading-[1.82] text-ink-body [&>p+p]:mt-[14px]">
            {intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section
        id="privacy-policy"
        className="bg-silver-bg px-5 py-section-sm sm:px-6 sm:py-section"
      >
        <div className="mx-auto max-w-[720px]">
          <p className="reveal mb-[16px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
            Clauses 01&ndash;09
          </p>
          <h2 className="reveal d1 mb-[40px] font-serif text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.13] text-navy">
            Privacy Policy
          </h2>
          <div className="reveal d2">
            {privacySections.map((clause) => (
              <Clause key={clause.number} {...clause} />
            ))}
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section
        id="terms-of-service"
        className="bg-white px-5 py-section-sm sm:px-6 sm:py-section"
      >
        <div className="mx-auto max-w-[720px]">
          <p className="reveal mb-[16px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
            Clauses 10&ndash;13
          </p>
          <h2 className="reveal d1 mb-[40px] font-serif text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.13] text-navy">
            Terms of Service
          </h2>
          <div className="reveal d2">
            {termsSections.map((clause) => (
              <Clause key={clause.number} {...clause} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-silver-bg px-5 py-section-sm sm:px-6 sm:py-section">
        <div className="mx-auto max-w-[720px]">
          <h2 className="reveal mb-[18px] font-serif text-[clamp(24px,3vw,32px)] font-bold leading-[1.2] text-navy">
            {contact.heading}
          </h2>
          <div className="reveal d1 mb-5 text-[14.5px] leading-[1.7] text-ink-body">
            {contact.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="reveal d2 flex flex-col gap-[10px]">
            <li>
              <span className="text-[13.5px] text-ink-muted">{contact.phone}</span>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="text-[13.5px] text-ink-muted transition-colors hover:text-navy"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://${contact.website}`}
                className="text-[13.5px] text-ink-muted transition-colors hover:text-navy"
              >
                {contact.website}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
