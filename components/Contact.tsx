"use client";

import { useState } from "react";

const FIELD =
  "w-full rounded-card-sm border-[1.5px] border-[#e8e8e9] bg-white px-[14px] py-[11px] font-sans text-[13.5px] text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[rgba(107,122,141,0.42)] focus:border-navy focus:shadow-[0_0_0_3px_rgba(2,37,73,0.08)]";
const LABEL =
  "mb-[5px] block text-[11px] font-bold uppercase tracking-[.08em] text-navy";

const EXPECT = [
  "30 minutes with Jason — your questions, answered directly",
  "An honest read on your current IT posture and security gaps",
  "A clear picture of what proactive managed IT would cover — and what it costs",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy px-5 py-section-sm sm:px-6 sm:py-section"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[140px] -left-[140px] h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(10,58,107,.65) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-[1] mx-auto grid max-w-site grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        {/* ---- izquierda ---- */}
        <div>
          <p className="reveal mb-5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-silver">
            Get Started
          </p>
          <h2 className="reveal d1 mb-5 font-serif text-[clamp(30px,4vw,52px)] font-bold leading-[1.12] text-white">
            Book Your Free
            <br />
            IT Consultation.
          </h2>
          <p className="reveal d2 mb-[38px] text-[15.5px] leading-[1.75] text-white/[0.58]">
            No pitch. No obligation. Just a direct conversation with Jason about
            your technology — what&apos;s working, what isn&apos;t, and what a
            managed IT services partnership would actually look like for your
            business.
          </p>
          <div className="reveal d3 flex flex-col gap-[14px]">
            {EXPECT.map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 text-[14px] leading-[1.5] text-white/[0.72]"
              >
                <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-silver" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---- tarjeta de formulario ---- */}
        <div className="reveal d2 rounded-[24px] bg-white p-[44px_40px] shadow-form">
          <h3 className="mb-[6px] font-serif text-[22px] font-bold text-navy">
            Let&apos;s Talk Technology
          </h3>
          <p className="mb-7 text-[13px] text-ink-muted">
            Serving Ontario businesses across the Greater Toronto Area and
            beyond.
          </p>

          {!sent ? (
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="mb-[14px]">
                <label htmlFor="co" className={LABEL}>
                  Company Name
                </label>
                <input
                  id="co"
                  name="company"
                  type="text"
                  required
                  placeholder="Your company name"
                  className={FIELD}
                />
              </div>

              <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                <div className="mb-[14px]">
                  <label htmlFor="fn" className={LABEL}>
                    First Name
                  </label>
                  <input
                    id="fn"
                    name="first"
                    type="text"
                    required
                    placeholder="First name"
                    className={FIELD}
                  />
                </div>
                <div className="mb-[14px]">
                  <label htmlFor="ln" className={LABEL}>
                    Last Name
                  </label>
                  <input
                    id="ln"
                    name="last"
                    type="text"
                    required
                    placeholder="Last name"
                    className={FIELD}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                <div className="mb-[14px]">
                  <label htmlFor="em" className={LABEL}>
                    Email Address
                  </label>
                  <input
                    id="em"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={FIELD}
                  />
                </div>
                <div className="mb-[14px]">
                  <label htmlFor="ph" className={LABEL}>
                    Phone
                    <span className="text-[10px] font-normal normal-case tracking-normal opacity-40">
                      {" "}
                      — optional
                    </span>
                  </label>
                  <input
                    id="ph"
                    name="phone"
                    type="tel"
                    placeholder="(416) 555-0000"
                    className={FIELD}
                  />
                </div>
              </div>

              <div className="mb-[14px]">
                <label htmlFor="ch" className={LABEL}>
                  Your Biggest IT Challenge Right Now
                </label>
                <textarea
                  id="ch"
                  name="challenge"
                  placeholder="Cybersecurity concerns, outgrown tools, no IT strategy — or simply wanting technology handled…"
                  className={`${FIELD} min-h-[90px] resize-y`}
                />
              </div>

              <button
                type="submit"
                className="mt-[6px] flex w-full items-center justify-center gap-[9px] rounded-full bg-navy p-[15px] font-sans text-[14.5px] font-semibold text-white transition-[background,transform] duration-[.22s] hover:-translate-y-px hover:bg-navy-mid"
              >
                Book My Free Consultation
                <svg
                  viewBox="0 0 17 17"
                  className="h-[17px] w-[17px]"
                  stroke="white"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 14L14 3M14 3H8M14 3V9" />
                </svg>
              </button>
              <p className="mt-[12px] text-center text-[12px] text-ink-muted">
                We&apos;ll be in touch within one business day.
              </p>
            </form>
          ) : (
            <div className="px-5 py-[48px] text-center">
              <div className="mx-auto mb-[18px] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-navy">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  stroke="white"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="mb-[10px] font-serif text-[22px] text-navy">
                You&apos;re all set.
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink-muted">
                Jason will be in touch within one business day to confirm your
                consultation. Talk soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
