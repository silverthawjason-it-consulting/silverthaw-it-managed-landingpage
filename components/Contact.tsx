import ZohoBookingWidget from "./ZohoBookingWidget";

const ZOHO_BOOKING_URL =
  "https://bookings.silverthaw.ca/portal-embed#/9508000000527050";

const EXPECT = [
  "30 minutes with Jason, your questions answered directly",
  "An honest read on your current IT posture and security gaps",
  "A clear picture of what proactive managed IT would cover, and what it costs",
];

export default function Contact() {
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
            your technology: what&apos;s working, what isn&apos;t, and what a
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

        {/* ---- tarjeta de reserva (Zoho Bookings) ---- */}
        <div className="reveal d2 rounded-[24px] bg-white p-[28px_24px] shadow-form sm:p-[36px_32px]">
          <h3 className="mb-[6px] font-serif text-[22px] font-bold text-navy">
            Pick a Time That Works
          </h3>
          <p className="mb-7 text-[13px] text-ink-muted">
            Serving Ontario businesses across the Greater Toronto Area and
            beyond.
          </p>

          <ZohoBookingWidget baseUrl={ZOHO_BOOKING_URL} />
        </div>
      </div>
    </section>
  );
}
