import type { LandingPageContent } from "./types";

/**
 * Variant A — root keyword: "Managed IT Services".
 * Copy extracted verbatim from the original hardcoded components.
 */
const managedIT: LandingPageContent = {
  meta: {
    title: "Managed IT Services Toronto & Ontario | Silverthaw Consulting",
    description:
      "Looking for managed IT services in Ontario? Silverthaw becomes your dedicated IT partner — helpdesk, cybersecurity, cloud, infrastructure, software selection, and IT advisory, all managed by one team. Book a free consultation today.",
  },

  hero: {
    eyebrow: "Ontario · {location} · Managed IT Services",
    headlinePrefix: "Managed IT Services in",
    subheadline:
      "We build custom IT solutions that fit your unique business challenges — so you can focus on growing your business, knowing your technology is handled, protected, and scaling with you.",
    body:
      "One dedicated team of IT experts covering everything your business needs from a managed IT services provider — IT consulting, software selection, cybersecurity and network monitoring, data backup, IT project management and implementation, and day-to-day helpdesk support, all under one roof.",
    primaryCta: "Book Your Free Consultation",
    secondaryCta: "See Our Services",
    socialProofStrong: "Certified Managed IT Providers",
    socialProofSub: "25+ Years Enterprise IT Experience · Serving Toronto and Ontario SMBs",
    chip1: { eyebrow: "Protected", title: "Certified\nIT Experts" },
    chip2: { eyebrow: "#1 Trusted\nIT Provider", title: "25+ Years in\n Enterprise IT Solutions" },
  },

  services: {
    eyebrow: "Our Services",
    headingLines: [
      "Your IT. Fully Managed.",
      "Every Layer of Your Technology.",
    ],
    subheadline:
      "Silverthaw manages the full technology lifecycle for Ontario small and medium businesses including outsourced IT managed services, IT consulting and project management, ERP software selection, cybersecurity and network monitoring, data backup and disaster recovery, and day-to-day helpdesk support, all under one dedicated team.",
    items: [
      {
        icon: "monitor",
        name: "Managed IT Services",
        summary:
          "Your complete outsourced IT department and managed IT services including your business IT monitoring, remote helpdesk support, cybersecurity, network optimization and cloud solutions management across all technology layers of your business.",
        extended:
          "We start by understanding your business — where you are today and where you are headed. From there we build a managed IT services package tailored to your specific operations and needs. We then supervise and take full ownership of your technology: helpdesk, security, infrastructure, and strategic implementation.",
        bullets: [
          "Real-time help desk support via phone, email, and ticketing, with average response time under 15 minutes",
          "24/7 network monitoring for uptime, performance, and security",
          "Remote IT support and troubleshooting resolved without disrupting your operations",
          "Server monitoring, performance tuning, and operating system patch management",
          "Automated endpoint patch management across all devices on your network",
          "Firewall, router, and switch configuration, monitoring, and ongoing management",
          "Secure remote access for hybrid and remote teams",
          "Monthly IT status updates and quarterly technology reviews included",
        ],
        certifications:
          "CompTIA A+ · CompTIA Network+ · ITIL Foundation (IT Service Management) · Microsoft 365 Modern Work · HDI Support Center Analyst",
      },
      {
        icon: "shield",
        name: "Cybersecurity & Network Monitoring",
        summary:
          "Continuous threat monitoring and cybersecurity management for your devices, network, email, and credentials. Stay protected around the clock with our managed cybersecurity services.",
        extended:
          "We deploy a multi-layer security stack across your entire environment: endpoint protection, perimeter defense, email security, and credential monitoring. Your systems stay protected continuously. When a threat appears, we contain it, restore your systems, and document exactly what happened.",
        bullets: [
          "Advanced threat detection and real-time incident response",
          "Managed antivirus, anti-malware, and endpoint protection across all devices",
          "Firewall configuration, continuous monitoring, and ongoing management",
          "Network segmentation and access control",
          "Email security with phishing protection and spam filtering",
          "Anti-phishing awareness training for your team",
          "Dark web monitoring for compromised credentials",
          "Regular security audits, compliance assessments, and ransomware response planning",
        ],
        certifications:
          "CompTIA Security+ · CompTIA CySA+ · Certified Ethical Hacker (CEH) · CISM (Certified Information Security Manager) · CISSP (Certified Information Systems Security Professional) · NIST Cybersecurity Framework · PIPEDA-compliant practices",
      },
      {
        icon: "database",
        name: "Data Backup & Disaster Recovery",
        summary:
          "Automated, encrypted backup and tested disaster recovery built around your operations so your business is protected from ransomware, cyberattacks, hardware failure, or physical disaster.",
        extended:
          "We start by understanding what data drives your business and how it flows across your operations. From there we design a tailored data retention and disaster recovery plan covering on-premises and cloud environments — so your data is always recoverable and your operations stay uninterrupted.",
        bullets: [
          "Disaster recovery planning and network documentation",
          "Data categorization and storage roadmaps",
          "Automated, encrypted backup and recovery across local and cloud storage",
          "Off-site and cloud storage for maximum redundancy",
          "Fast file transfer and restoration — including large files, sensitive records, and intellectual property",
          "Recovery from ransomware, cyberattack, theft, fire, and hardware failure",
          "Regulatory compliance support through responsible data management",
          "Ongoing monitoring and defined recovery time and recovery point objectives",
        ],
        certifications:
          "CompTIA Security+ · Veeam Certified Engineer (VMCE) · AWS Certified Cloud Practitioner · Microsoft Azure Fundamentals (AZ-900) · DRII — Associate Business Continuity Professional (ABCP)",
      },
      {
        icon: "lightbulb",
        name: "IT Consulting & Software Selection",
        summary:
          "Strategic IT assessment, technology roadmapping, and vendor-neutral software selection — backed by 25+ years on the vendor side in Enterprise IT Solutions across the Ontario partner ecosystem.",
        extended:
          "We assess your current systems, diagnose what is holding you back, and build a roadmap aligned to your business goals. For software selection, we run a structured, vendor-neutral evaluation across 100+ systems — requirements definition through final recommendation — with no vendor incentives influencing the outcome.",
        bullets: [
          "In-depth analysis of existing IT systems, infrastructure, and security posture",
          "Diagnosis of IT weaknesses, bottlenecks, and gaps",
          "Strategic technology roadmap with timeline and budget guidance",
          "Transparent cost analysis for all recommended solutions",
          "Vendor-neutral software selection: requirements definition, RFP management, vendor scoring, and demo oversight",
          "Structured deliverables at every stage — process maps, requirements lists, vendor scorecards, final recommendation reports",
        ],
        certifications:
          "IIBA — Certified Business Analysis Professional (CBAP) · PMI — Project Management Professional (PMP) · TOGAF (Enterprise Architecture Framework) · Oracle Certified Partner · SAP Partner Ecosystem — 25+ years · Microsoft Solutions Partner experience",
      },
      {
        icon: "clipboard",
        name: "IT Project Management & Implementation",
        summary:
          "End-to-end IT project delivery. From scope definition to go-live, we plan, coordinate, and deliver your IT projects as a full-service IT solutions provider.",
        extended:
          "We start by understanding your project goals, complexity, and timeline. From there we manage the full project lifecycle: scope, budget, timeline, team coordination, and delivery.",
        bullets: [
          "Project scope definition and collaborative planning — requirements documented before work begins",
          "Strategic budgeting across systems, infrastructure, and resources",
          "Detailed project roadmap with milestones, timelines, and accountable owners",
          "End-to-end implementation of hardware, software, and network systems",
          "Smart office deployment — meeting systems, telephony, workstation rollouts, server installation",
          "Staff training, physical infrastructure, and post-launch IT handoff",
          "Proactive post-delivery maintenance and future-proofing recommendations",
        ],
        certifications:
          "PMP — Project Management Professional · CompTIA Project+ · PRINCE2 Foundation · ITIL Foundation (Service Transition) · Oracle and SAP implementation experience across enterprise deployments",
      },
      {
        icon: "rocket",
        name: "IT Setup & Support for New Businesses",
        summary:
          "Complete IT foundation for new businesses — hardware, software, cloud, and security set up correctly from day one and managed on an ongoing basis as your business grows.",
        extended:
          "We start with a conversation about your business — your goals, your team, and where you are headed. From there we build and manage your entire IT environment so you can focus on building your business from day one without technology slowing you down.",
        bullets: [
          "Website domain registration and hosting setup",
          "Point-of-sale systems and time management tools",
          "Workstation and server procurement, deployment, and configuration",
          "Microsoft 365, business email, and cloud backup — fully configured and secured",
          "Endpoint protection and data security across all devices from day one",
          "Helpdesk support via phone, email, and ticketing — available immediately",
          "Remote and on-site support",
          "Dark web monitoring and anti-phishing awareness training",
          "Disaster recovery planning",
          "Employee onboarding and offboarding IT processes",
          "Monthly IT status updates and quarterly technology planning",
        ],
        certifications:
          "CompTIA A+ · CompTIA Network+ · Microsoft 365 Certified Fundamentals · Google Workspace Administrator · HDI Support Center Analyst",
      },
    ],
  },

  advantage: {
    eyebrow: "The Silverthaw Advantage",
    headingLines: ["The Only Partner", "That Grows", "With You."],
    subheadline:
      "If your business is starting to slow down due to tech limitations — your team interrupted by outages, operations stalling from the wrong software and tools, security that feels like a gap nobody owns, and no IT roadmap or strategic direction to move forward — it is time to stop managing technology yourself and hand it to a full team of specialists. Without the overhead of building one internally.",
    cards: [
      {
        label: "24/7 Coverage.\nEvery Layer.",
        stat: "24/7",
        statLabel: "always on",
        body: "Your business keeps moving after hours, and so does your IT coverage. Round-the-clock network monitoring, after-hours helpdesk, and continuous threat detection mean your systems are watched and protected at all times.",
      },
      {
        label: "A Full Team.\nA Fraction of the Cost.",
        stat: "60%+",
        statLabel: "avg. savings vs. in-house",
        body: "Building an internal IT team in Ontario means $60,000+ per hire, and each person covers only two or three disciplines. Silverthaw brings cybersecurity, cloud, networking, compliance, and strategic advisory under one predictable monthly investment. More capability, no recruitment overhead, and a cost structure that actually scales with your business.",
      },
      {
        label: "Grows With\nYour Business.",
        stat: "Scalable",
        statLabel: "no renegotiating",
        body: "As your business grows, your technology needs to keep pace, without the delay of hiring cycles or the risk of skills gaps at the wrong moment. Silverthaw scales with you. Whether you're adding a department, opening a second location, or migrating to the cloud, the same team that knows your business handles it, with no renegotiating and no onboarding from scratch.",
      },
      {
        label: "One Relationship.\nFull Accountability.",
        stat: "1",
        statLabel: "partner, not a vendor pool",
        body: "Most businesses juggle three to five IT vendors with no single owner of the full picture. Silverthaw changes that. One partner holds your infrastructure, security, software, and strategy, with a dedicated advisor who owns the relationship and coordinates every specialist working on your behalf. One call. Full accountability.",
      },
    ],
    closing: {
      lead: "Technology that used to require an enterprise budget.",
      em: "Now built for businesses like yours.",
    },
    closingCta: "See What This Looks Like for Your Business",
  },

  faq: {
    eyebrow: "Questions We Hear",
    heading: "Common Concerns.",
    subheadline: "Straightforward answers to the questions we hear most often.",
    items: [
      {
        q: "We already have an IT company.",
        a: "That's great. What are they doing proactively? Most providers handle tickets and keep the lights on. Silverthaw goes further: monthly status meetings, quarterly technology reviews, strategic roadmapping, and vendor-neutral software selection. If your current provider is delivering all of that, you're in excellent hands. If not, that's the gap we fill.",
      },
      {
        q: "We can't justify the cost right now.",
        a: "What's it costing you not to have it? Leadership time spent troubleshooting technology. Downtime during critical periods. Security vulnerabilities with no one watching. Our managed services are typically less than half the cost of a single internal IT hire, and you get a full team, not one person, with no overhead.",
      },
      {
        q: "We're probably too small for managed IT.",
        a: "That's actually when you need it most. Small businesses are the primary targets for cyberattacks precisely because they're unprotected. And the technology decisions you make now, about your systems, your security, your data practices, become the foundation everything else is built on. Getting it right from the start costs a fraction of fixing it later.",
      },
      {
        q: "We've handled IT ourselves until now.",
        a: "You know your business better than anyone. But every hour spent troubleshooting email issues, chasing software updates, or worrying about cybersecurity is an hour you're not spending on growth. Our job is to take that entire burden off your plate completely, so you can focus on what you actually do best.",
      },
    ],
  },
};

export default managedIT;
