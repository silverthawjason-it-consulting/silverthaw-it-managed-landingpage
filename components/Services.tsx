"use client";

import { useState } from "react";

const S = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-7 w-7",
};

const ICONS = {
  rocket: (
    <svg {...S}>
      <path d="M12 2C9 6 8 9 8 13h8c0-4-1-7-4-11z" />
      <path d="M8 13L5 17h4M16 13l3 4h-4" />
      <path d="M10 17c0 2.5 4 2.5 4 0" />
      <circle cx="12" cy="9" r="1.5" />
    </svg>
  ),
  monitor: (
    <svg {...S}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  lightbulb: (
    <svg {...S}>
      <path d="M12 2a6 6 0 0 0-3 11.2V15h6v-1.8A6 6 0 0 0 12 2z" />
      <path d="M9 17h6M9.5 20h5" />
    </svg>
  ),
  clipboard: (
    <svg {...S}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 2h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z" />
      <path d="M9 12l2 2 4-4M9 17h4" />
    </svg>
  ),
  shield: (
    <svg {...S}>
      <path d="M12 2L4 5.5v7c0 4.75 3.5 9 8 11 4.5-2 8-6.25 8-11v-7L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  database: (
    <svg {...S}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <ellipse cx="12" cy="19" rx="9" ry="3" />
      <path d="M3 5v14M21 5v14" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
};

type IconKey = keyof typeof ICONS;

type Service = {
  icon: IconKey;
  name: string;
  summary: string;
  extended: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    icon: "rocket",
    name: "Startup IT Foundation",
    summary:
      "Get your technology right from day one. Our team of IT advisors will help you build a lean operation, designed to scale as your business grows.",
    extended:
      "Everything a new business needs to launch with the right technology from day one — domain, email, workstations, security, hosting, and ongoing support — so you can focus on building your business instead of troubleshooting it.",
    bullets: [
      "Website domain registration and hosting setup",
      "Workstation and server procurement, setup, and configuration",
      "Office 365, business email, and cloud backup",
      "Data security and endpoint protection from day one",
      "Remote and on-site support with ticket triage and dispatch",
      "Dark web monitoring and anti-phishing training",
      "Employee onboarding/offboarding and disaster recovery planning",
      "Monthly IT status updates and quarterly technology planning",
    ],
  },
  {
    icon: "monitor",
    name: "Managed IT Services",
    summary:
      "Proactive, ongoing managed IT services and IT support. Helpdesk, monitoring, patching, and remote and on-site support — handled before issues become outages.",
    extended:
      "We start by evaluating your unique needs and business trajectory. From there our IT leadership will develop a tailored proposal, implementation strategy, and service package to align your systems. Ultimately, our managed IT services remove the burden of infrastructure management, empowering your leadership team to focus entirely on scaling a successful business.",
    bullets: [
      "Real-time help desk support via phone, email, and ticketing",
      "24/7 network monitoring for performance, uptime, and security",
      "Remote troubleshooting that keeps your team productive",
      "Server monitoring, performance tuning, and OS patching",
      "Automated endpoint patch management across all devices",
      "Firewall, router, and switch management",
      "Secure remote access for hybrid and remote teams",
    ],
  },
  {
    icon: "lightbulb",
    name: "IT Consulting & Software Selection",
    summary:
      "Strategic technology guidance backed by 25 years on the vendor side. We assess your current systems, identify what isn't working, and recommend the right path forward.",
    extended:
      "We bridge the gap between high-level business strategy and technical execution. By running a clear, vendor-neutral procurement process, we shield your organization from vendor bias. This keeps your technology investments focused strictly on your operational needs and ROI, giving you the exact systems you need to scale—minus the sales pitch.",
    bullets: [
      "In-depth analysis of your existing IT systems and infrastructure",
      "Diagnosis of IT weaknesses, bottlenecks, and security gaps",
      "Strategic technology roadmap and timeline planning",
      "Transparent quoting and cost analysis for recommended solutions",
      "Vendor-neutral software selection — from recommendation to full RFP management, vendor scoring, and demo oversight",
      "Documented deliverables: process maps, requirements lists, vendor scorecards, and final reports",
    ],
  },
  {
    icon: "clipboard",
    name: "Project Management & Implementation",
    summary:
      "From planning to go-live — we lead your IT projects end to end.",
    extended:
      "New office build, system rollout, department expansion, software deployment — whatever the project, we plan it, lead it, and deliver it on time, on budget, with full team coordination and seasoned professionals on every task.",
    bullets: [
      "Clear project scope definition and collaborative planning",
      "Strategic budgeting for systems, infrastructure, and resources",
      "Detailed project roadmap and timeline management",
      "Seamless implementation of hardware, software, and network systems",
      "Smart office deployment — meeting systems, telephony, workstation rollouts, secure server installation",
      "Comprehensive training and ongoing support after go-live",
      "Professional cable management and physical infrastructure optimization",
    ],
  },
  {
    icon: "shield",
    name: "Cybersecurity & Protection",
    summary:
      "Proactive protection for your data, devices, and people.",
    extended:
      "An enterprise-grade security layer around your entire technology environment — keeping your systems protected and compliant, without an enterprise-grade budget and without slowing your team down.",
    bullets: [
      "Advanced threat detection and real-time incident response",
      "Managed antivirus, anti-malware, and endpoint protection across all devices",
      "Firewall configuration, monitoring, and management",
      "Email security with phishing protection and spam filtering",
      "Anti-phishing awareness training for your team",
      "Dark web monitoring to detect compromised credentials",
      "Regular security audits, compliance assessments, and ransomware response planning",
    ],
  },
  {
    icon: "database",
    name: "Data Retention & Disaster Recovery",
    summary:
      "Your data survives anything — ransomware, hardware failure, spilled coffee.",
    extended:
      "Reliable, tested backup and recovery solutions that ensure your critical information is always protected and recoverable. We design disaster recovery plans around your operations so that when the unexpected happens, your business keeps running.",
    bullets: [
      "Automated, encrypted backups — both local and cloud-based",
      "Disaster recovery plans designed around your specific operations",
      "Regular testing of backup integrity and restore processes",
      "Fast recovery options to minimize downtime after any incident",
      "Off-site and cloud storage for maximum redundancy",
      "Network and recovery procedure documentation",
      "Scalable backup solutions that grow with your data",
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="bg-white px-5 py-section-sm sm:px-6 sm:py-section"
    >
      <div className="mx-auto max-w-site">
        {/* Header */}
        <div className="mb-[52px]">
          <p className="reveal mb-[16px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
            Our Services
          </p>
          <h2 className="reveal d1 font-serif text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.13] text-navy">
            Everything Your Business
            <br />
            Needs. Under One Roof.
          </h2>
          <p className="reveal d2 mt-[14px] max-w-[540px] text-[16.5px] leading-[1.75] text-ink-muted">
            Managed IT services, IT support, IT consulting, and cybersecurity for small and medium businesses — from daily helpdesk support to long-term technology strategy, Silverthaw manages the full lifecycle.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="reveal d1 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => {
            const isOpen = open === i;
            return (
              <div
                key={svc.name}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group cursor-pointer rounded-card bg-silver-bg p-6 shadow-soft transition-[transform,box-shadow] duration-[.25s] ease-in-out hover:scale-[0.97] hover:shadow-none sm:p-7"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-navy shadow-[0_1px_6px_rgba(2,37,73,0.10)]">
                  {ICONS[svc.icon]}
                </div>

                {/* Title */}
                <h3 className="mb-2 font-serif text-[17px] font-bold leading-[1.3] text-navy sm:text-[18.5px]">
                  {svc.name}
                </h3>

                {/* Summary */}
                <p className="text-[13.5px] leading-[1.65] text-ink-muted sm:text-[14px]">
                  {svc.summary}
                </p>

                {/* Expand toggle */}
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-navy-mid transition-opacity duration-[.2s] group-hover:opacity-70">
                    {isOpen ? "Close" : "Details"}
                  </span>
                  <span
                    className={`text-[13px] font-bold leading-none text-navy-mid transition-[transform,opacity] duration-[.25s] group-hover:opacity-70 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    ›
                  </span>
                </div>

                {/* Expandable panel */}
                <div
                  className={`grid transition-[grid-template-rows] duration-[.35s] ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`pt-5 transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="text-[13.5px] leading-[1.75] text-ink-body sm:text-[14px]">
                        {svc.extended}
                      </p>
                      <p className="mb-3 mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
                        What&apos;s included
                      </p>
                      <ul className="space-y-2.5">
                        {svc.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rotate-45 bg-navy" />
                            <span className="text-[13px] leading-[1.6] text-ink-body">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
