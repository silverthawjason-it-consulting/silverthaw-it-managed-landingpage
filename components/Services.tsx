"use client";

import { useState } from "react";

type Service = {
  num: string;
  name: string;
  /** Resumen de una línea — visible siempre, debajo del nombre. */
  summary: string;
  /** Párrafo introductorio — visible al expandir. */
  extended: string;
  /** Detalle "What's included" — extraído de silverthaw-services-page.md. */
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    num: "01",
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
    num: "02",
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
    num: "03",
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
    num: "04",
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
    num: "05",
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
    num: "06",
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
  // Item abierto (solo uno a la vez). Arranca con el primero expandido.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="bg-white px-5 py-section-sm sm:px-6 sm:py-section"
    >
      <div className="mx-auto max-w-site">
        {/* Header "Our Services" — intacto */}
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

        {/* Acordeón */}
        <div className="reveal d1 flex flex-col">
          {SERVICES.map((svc, i) => {
            const isOpen = open === i;
            const panelId = `svc-panel-${i}`;
            const btnId = `svc-btn-${i}`;
            const barColor = isOpen ? "bg-white" : "bg-navy";

            return (
              <div
                key={svc.num}
                className="border-b border-[#ebebec] first:border-t"
              >
                {/* Header clickable */}
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start gap-4 py-6 text-left sm:gap-6 sm:py-7"
                >
                  <span className="shrink-0 pt-[3px] font-serif text-[14px] font-bold tracking-[.04em] text-navy/40 sm:text-[15px]">
                    {svc.num}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-[18px] font-bold leading-[1.3] text-navy transition-colors group-hover:text-navy-mid sm:text-[20px]">
                      {svc.name}
                    </span>
                    <span className="mt-1 block text-[13px] leading-[1.5] text-ink-muted sm:text-[13.5px]">
                      {svc.summary}
                    </span>
                  </span>

                  {/* Icono plus / minus */}
                  <span
                    className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-all duration-[.25s] sm:h-8 sm:w-8 ${
                      isOpen ? "border-navy bg-navy" : "border-silver"
                    }`}
                  >
                    <span
                      className={`absolute h-[1.5px] w-[11px] rounded-full ${barColor} transition-colors duration-[.25s]`}
                    />
                    <span
                      className={`absolute h-[11px] w-[1.5px] rounded-full ${barColor} transition-transform duration-[.25s] ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>

                {/* Panel expandible — animación grid-rows 0fr -> 1fr */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-[grid-template-rows] duration-[.35s] ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`pb-8 transition-opacity duration-300 sm:pl-[3.25rem] ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="max-w-[640px] text-[14px] leading-[1.75] text-ink-body sm:text-[15px]">
                        {svc.extended}
                      </p>

                      <p className="mb-4 mt-6 text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
                        What&apos;s included
                      </p>

                      <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                        {svc.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rotate-45 bg-navy" />
                            <span className="text-[13.5px] leading-[1.6] text-ink-body sm:text-[14px]">
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
