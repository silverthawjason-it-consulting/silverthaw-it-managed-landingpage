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
      "Launch with the right IT services for your small business in place from day one. We build your technology foundation — hardware, software, cloud, and security — lean, protected, and ready to scale from the moment you open the doors.",
    extended:
      "Getting your technology right at the start saves years of costly fixes later. We set up your complete IT foundation and provide ongoing outsourced IT support so your business is operational, protected, and ready to grow — without building an internal team to manage it.",
    bullets: [
      "Website domain registration and hosting setup",
      "Workstation and server procurement, deployment, and configuration for your team",
      "Microsoft 365, business email, and cloud backup — fully set up and secured",
      "Endpoint protection and data security built into your systems from day one",
      "IT help desk support via phone, email, and remote access immediately available to your team",
      "Dark web monitoring and anti-phishing awareness training",
      "Employee onboarding/offboarding and disaster recovery planning",
      "Monthly IT status updates and quarterly technology planning as your business grows",
    ],
  },
  {
    icon: "monitor",
    name: "Managed IT Services",
    summary:
      "Your complete outsourced IT department in Toronto and across Ontario — proactive monitoring, IT help desk support, patch management, and on-site response. Issues resolved before your team notices them.",
    extended:
      "We begin with an assessment of your current environment and where your business is headed. From there, the Silverthaw team build a managed IT services package tailored to your operations — and take full ownership of your technology: helpdesk, security, infrastructure, and strategic planning.",
    bullets: [
      "Real-time help desk support via phone, email, and ticketing — average response time under 15 minutes",
      "24/7 network monitoring for uptime, performance, and security",
      "Remote IT support and troubleshooting resolved without disrupting your operations",
      "Server monitoring, performance tuning, and operating system patch management",
      "Automated endpoint patch management across all devices on your network",
      "Firewall, router, and switch configuration, monitoring, and ongoing management",
      "Secure remote access for hybrid and remote teams",
      "Monthly IT status updates and quarterly technology reviews included",
    ],
  },
  {
    icon: "lightbulb",
    name: "IT Consulting & Software Selection",
    summary:
      "Strategic IT consulting services backed by 25+ years on the vendor side — at Oracle, SAP, and across the Ontario partner ecosystem. We assess your systems, identify what is holding you back, and map the right path forward.",
    extended:
      "We bridge the gap between high-level business strategy and technical execution. By running a clear, vendor-neutral procurement process, we shield your organization from vendor bias. This keeps your technology investments focused strictly on your operational needs and ROI, giving you the exact systems you need to scale—minus the sales pitch.",
    bullets: [
      "In-depth analysis of your existing IT systems and infrastructure and security posture",
      "Diagnosis of IT weaknesses, bottlenecks, and security gaps",
      "Strategic technology roadmap with timeline, budget guidance, and defined next steps",
      "Transparent quoting and cost analysis for recommended solutions",
      "Vendor-neutral software selection — requirements definition, request for proposal management, vendor scoring, and demo oversight across 100+ systems",
      "IT consulting deliverables at every stage: process maps, requirements lists, vendor scorecards, and final selection reports",
    ],
  },
  {
    icon: "clipboard",
    name: "Project Management & Implementation",
    summary:
      "From scope to go-live — we plan, coordinate, and deliver your IT projects as a full-service IT solutions provider. On time, on budget, with a dedicated project lead accountable for every task.",
    extended:
      "IT projects fail when no one owns the full picture. Silverthaw does. Whether you're building out a new office, deploying a business system, expanding a department, or rolling out new infrastructure, we manage the entire project as your dedicated IT consulting and services partner — scope, budget, timeline, team coordination, and delivery. You stay informed at every stage. We handle everything in between.",
    bullets: [
      "Project scope definition and collaborative planning",
      "Strategic budgeting across systems, infrastructure, and personnelresources",
      "Detailed project roadmap with milestones, timelines, and accountable owners at each stage",
      "End-to-end implementation of hardware, software, and network systems",
      "Smart office deployment — meeting systems, telephony, workstation rollouts, secure server installation",
      "Comprehensive training and ongoing support after go-live",
      "Professional cable management and physical infrastructure optimization",
    ],
  },
  {
    icon: "shield",
    name: "Cybersecurity & Protection",
    summary:
      "Continuous cybersecurity services for your data, devices, and team — monitored around the clock, managed on your behalf. Enterprise-grade IT security services without the enterprise-grade budget.",
    extended:
      "Small and medium businesses are the primary targets for cyberattacks — precisely because most are underprotected. Silverthaw wraps a managed cybersecurity services layer around your entire technology environment: devices, email, network, and credentials. Your team keeps working. Your systems stay protected. And when a threat appears, our IT security team responds immediately.",
    bullets: [
      "Advanced threat detection and real-time incident response",
      "Managed antivirus, anti-malware, and endpoint protection across all devices",
      "Firewall configuration, continuous monitoring, and ongoing management",
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
      "Your data survives anything — ransomware, hardware failure, or a server room flood. Tested backup and recovery built around your operations, so your business keeps running when the unexpected happens.",
    extended:
      "A backup that has never been tested is not a backup — it is an assumption. Silverthaw designs, automates, and regularly tests your entire backup and disaster recovery infrastructure as part of your managed IT support services. When data loss or an outage occurs, your business is back online fast, with your data intact and your operations uninterrupted.",
    bullets: [
      "Automated, encrypted backups — both local and cloud-based",
      "Disaster recovery plans designed around your specific operations",
      "Regular testing of backup integrity and restore processes",
      "Fast recovery options to minimize downtime after any incident",
      "Off-site and cloud storage for complete redundancy across physical and digital threats",
      "Network and recovery procedure documentation",
      "Scalable backup architecture that grows with your data volume and business complexity",
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
