"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

const LINKS: [string, string][] = [
  ["Services", "/#services"],
  ["About Jason", "/#about"],
  ["FAQ", "/#faq"],
  ["Contact", "/#contact"],
];

export default function Nav() {
  const [up, setUp] = useState(false);

  useEffect(() => {
    const onScroll = () => setUp(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[200] border-b border-silver-line bg-white transition-shadow duration-300 ${
        up ? "shadow-nav" : ""
      }`}
    >
      <div className="mx-auto flex h-[70px] max-w-site items-center justify-between px-6">
        <a href="/" className="flex items-center gap-[10px]">
          <BrandLogo
            imgHeight={64}
            fallback={
              <span className="font-serif text-[21px] font-bold tracking-[-0.02em] text-navy">
                Silver<em className="italic text-silver">thaw</em>
              </span>
            }
          />
        </a>

        <ul className="hidden gap-8 sm:flex">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-[13.5px] font-medium text-ink-body transition-colors hover:text-navy"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="group inline-flex items-center gap-[9px] whitespace-nowrap rounded-full border-2 border-navy bg-navy px-5 py-[11px] text-[13px] font-semibold text-white transition-all duration-[.22s] hover:bg-transparent hover:text-navy"
        >
          Book a Free Consultation
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.18] transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
            <svg
              viewBox="0 0 9 9"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="h-[9px] w-[9px]"
            >
              <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3.5M7.5 1.5V5.5" />
            </svg>
          </span>
        </a>
      </div>
    </nav>
  );
}
