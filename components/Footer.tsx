import { BrandLogo } from "./BrandLogo";

const COLS: [string, [string, string][]][] = [
  [
    "Services",
    [
      ["Managed IT Services", "#services"],
      ["IT Consulting", "#services"],
      ["Cybersecurity", "#services"],
      ["Disaster Recovery", "#services"],
      ["Project Management", "#services"],
    ],
  ],
  [
    "Company",
    [
      ["About Jason", "#about"],
      ["Testimonials", "#testimonials"],
      ["FAQ", "#faq"],
      ["Contact", "#contact"],
    ],
  ],
];

export default function Footer() {
  return (
    <footer className="border-t border-silver-line bg-white px-6 pb-9 pt-16">
      <div className="mx-auto max-w-site">
        <div className="grid grid-cols-1 gap-[30px] border-b border-silver-line pb-11 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-11">
          {/* marca */}
          <div>
            <BrandLogo
              imgHeight={34}
              imgClassName="mb-3"
              fallback={
                <p className="mb-[10px] font-serif text-[21px] font-bold text-navy">
                  Silver<em className="italic text-silver">thaw</em> Consulting
                </p>
              }
            />
            <p className="max-w-[240px] text-[13.5px] leading-[1.62] text-ink-muted">
              Your managed IT services provider and outsourced IT department for small and medium businesses. Serving Toronto, Ontario, and the Greater Toronto Area.
            </p>
          </div>

          {/* columnas de links */}
          {COLS.map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-[18px] text-[10.5px] font-bold uppercase tracking-[.16em] text-navy">
                {title}
              </h4>
              <ul className="flex flex-col gap-[10px]">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[13.5px] text-ink-muted transition-colors hover:text-navy"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contacto */}
          <div>
            <h4 className="mb-[18px] text-[10.5px] font-bold uppercase tracking-[.16em] text-navy">
              Contact
            </h4>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <a
                  href="mailto:info@silverthaw.ca"
                  className="text-[13.5px] text-ink-muted transition-colors hover:text-navy"
                >
                  info@silverthaw.ca
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[13.5px] text-ink-muted transition-colors hover:text-navy"
                >
                  Book a Consultation
                </a>
              </li>
              <li>
                <span className="text-[13.5px] text-ink-muted">
                  Toronto, Ontario
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-[14px] pt-[26px] text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-[12.5px] text-ink-muted">
            © 2026 Silverthaw Consulting Ltd. · Toronto, Ontario · All rights
            reserved.
          </p>
          <div className="flex justify-center gap-[22px]">
            <a
              href="/privacy-policy#privacy-policy"
              className="text-[12.5px] text-ink-muted transition-colors hover:text-navy"
            >
              Privacy Policy
            </a>
            <a
              href="/privacy-policy#terms-of-service"
              className="text-[12.5px] text-ink-muted transition-colors hover:text-navy"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
