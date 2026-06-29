import type { LandingPageContent } from "./types";

/**
 * Variant B — root keyword: "IT support for small businesses".
 * Same structure and rough string lengths as the managed-IT variant so the
 * shared layout renders identically; only the keyword framing changes.
 */
const itSupportSmallBusiness: LandingPageContent = {
  meta: {
    title:
      "IT Support for Small Businesses in Toronto & Ontario | Silverthaw Consulting",
    description:
      "Silverthaw Consulting delivers dependable IT support for small businesses across Toronto, Ontario, and the Greater Toronto Area. Helpdesk, cybersecurity, and on-site help. One partner, full accountability.",
  },

  hero: {
    eyebrow: "Ontario · {location} · IT Support for Small Business",
    headlinePrefix: "IT Support for Small Businesses in",
    subheadline:
      "We build custom IT support plans that fit your unique business challenges — so you can focus on growing your business, knowing your technology is handled, protected, and scaling with you.",
    body:
      "One dedicated team of IT experts covering everything your small business needs from an IT support provider — IT consulting, software selection, cybersecurity and network monitoring, data backup, IT project management and implementation, and day-to-day helpdesk support, all under one roof.",
    primaryCta: "Book Your Free Consultation",
    secondaryCta: "See How We Help",
    socialProofStrong: "Trusted by Ontario businesses",
    socialProofSub: "Small Business IT Support Experts",
    chip1: { eyebrow: "Protection", title: "24/7 Security\nMonitoring" },
    chip2: { eyebrow: "Our Approach", title: "Responsive,\nNot Reactive" },
  },

  services: {
    eyebrow: "How We Help",
    headingLines: ["Everything Your Small", "Business Needs. One Team."],
    subheadline:
      "IT support, helpdesk, IT consulting, and cybersecurity built for small and medium businesses. From everyday helpdesk requests to long-term technology guidance, Silverthaw supports the full lifecycle.",
    items: [
      {
        icon: "monitor",
        name: "Small Business IT Support",
        summary:
          "Your complete outsourced support desk in Toronto and across Ontario: responsive helpdesk, proactive monitoring, vulnerability management, and on-site help. Issues resolved before your team notices them.",
        extended:
          "We begin with an assessment of your current environment and where your business is headed. From there, the Silverthaw team build an IT support package tailored to your operations, then take full ownership of your technology: helpdesk, security, infrastructure, and day-to-day support.",
        bullets: [
          "Real-time help desk support via phone, email, and ticketing, with average response time under 15 minutes",
          "24/7 network monitoring for uptime, performance, and security",
          "Remote IT support and troubleshooting resolved without disrupting your operations",
          "Server monitoring, performance tuning, and operating system vulnerability management",
          "Automated endpoint vulnerability management across all devices on your network",
          "Firewall, router, and switch configuration, monitoring, and ongoing management",
          "Secure remote access for hybrid and remote teams",
          "Monthly IT status updates and quarterly technology reviews included",
        ],
      },
      {
        icon: "lightbulb",
        name: "IT Consulting & Software Selection",
        summary:
          "Practical IT guidance for small businesses backed by 25+ years on the vendor side, at Oracle, SAP, and across the Ontario partner ecosystem. We assess your systems, identify what is holding you back, and map the right path forward.",
        extended:
          "We bridge the gap between everyday business needs and technical execution. By running a clear, vendor-neutral selection process, we shield your small business from vendor bias. This keeps your technology spending focused strictly on your operational needs and ROI, giving you the exact systems you need to grow, minus the sales pitch.",
        bullets: [
          "In-depth analysis of your existing IT systems and infrastructure and security posture",
          "Diagnosis of IT weaknesses, bottlenecks, and security gaps",
          "Practical technology roadmap with timeline, budget guidance, and defined next steps",
          "Transparent quoting and cost analysis for recommended solutions",
          "Vendor-neutral software selection: requirements definition, request for proposal management, vendor scoring, and demo oversight across 100+ systems",
          "IT consulting deliverables at every stage: process maps, requirements lists, vendor scorecards, and final selection reports",
        ],
      },
      {
        icon: "rocket",
        name: "IT Setup & Support for New Businesses",
        summary:
          "Launch with dependable IT support for your small business in place from day one. We build your technology foundation across hardware, software, cloud, and security, so it stays lean, protected, and ready to scale from the moment you open the doors.",
        extended:
          "Getting your technology right at the start saves years of costly fixes later. We set up your complete IT foundation and provide ongoing small business IT support so your business is operational, protected, and ready to grow, all without building an internal team to manage it.",
        bullets: [
          "Website domain registration and hosting setup",
          "Workstation and server procurement, deployment, and configuration for your team",
          "Microsoft 365, business email, and cloud backup, fully set up and secured",
          "Endpoint protection and data security built into your systems from day one",
          "IT help desk support via phone, email, and remote access immediately available to your team",
          "Dark web monitoring and anti-phishing awareness training",
          "Employee onboarding/offboarding and disaster recovery planning",
          "Monthly IT status updates and quarterly technology planning as your business grows",
        ],
      },
      {
        icon: "clipboard",
        name: "Project Management & Implementation",
        summary:
          "From scope to go-live, we plan, coordinate, and deliver your IT projects as a hands-on small business IT partner. On time, on budget, with a dedicated project lead accountable for every task.",
        extended:
          "IT projects fail when no one owns the full picture. Silverthaw does. Whether you're building out a new office, deploying a business system, expanding a department, or rolling out new infrastructure, we manage the entire project as your dedicated small business IT support partner: scope, budget, timeline, team coordination, and delivery. You stay informed at every stage. We handle everything in between.",
        bullets: [
          "Project scope definition and collaborative planning",
          "Strategic budgeting across systems, infrastructure, and personnel resources",
          "Detailed project roadmap with milestones, timelines, and accountable owners at each stage",
          "End-to-end implementation of hardware, software, and network systems",
          "Smart office deployment: meeting systems, telephony, workstation rollouts, secure server installation",
          "Comprehensive training and ongoing support after go-live",
          "Professional cable management and physical infrastructure optimization",
        ],
      },
      {
        icon: "shield",
        name: "Cybersecurity & Protection",
        summary:
          "Continuous cybersecurity for your data, devices, and team, monitored around the clock and managed on your behalf. Enterprise-grade protection for small businesses without the enterprise-grade budget.",
        extended:
          "Small businesses are the primary targets for cyberattacks, precisely because most are underprotected. Silverthaw wraps a managed security layer around your entire technology environment: devices, email, network, and credentials. Your team keeps working. Your systems stay protected. And when a threat appears, our IT support team responds immediately.",
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
          "Your data survives anything: ransomware, hardware failure, or a server room flood. Tested backup and recovery built around your operations, so your business keeps running when the unexpected happens.",
        extended:
          "A backup that has never been tested is not a backup. It is an assumption. Silverthaw designs, automates, and regularly tests your entire backup and disaster recovery setup as part of your small business IT support. When data loss or an outage occurs, your business is back online fast, with your data intact and your operations uninterrupted.",
        bullets: [
          "Automated, encrypted backups, both local and cloud-based",
          "Disaster recovery plans designed around your specific operations",
          "Regular testing of backup integrity and restore processes",
          "Fast recovery options to minimize downtime after any incident",
          "Off-site and cloud storage for complete redundancy across physical and digital threats",
          "Network and recovery procedure documentation",
          "Scalable backup architecture that grows with your data volume and business complexity",
        ],
      },
    ],
  },

  advantage: {
    eyebrow: "The Silverthaw Advantage",
    headingLines: ["The Only Partner", "That Grows", "With You."],
    subheadline:
      "IT support for small businesses isn't a stopgap. It's the model built for how small companies actually scale. One responsive partner, a full team of specialists across every layer of technology, without the overhead of hiring and managing in-house staff. A fraction of the cost of building it yourself.",
    cards: [
      {
        label: "24/7 Coverage.\nEvery Layer.",
        stat: "24/7",
        statLabel: "always on",
        body: "Your business keeps moving after hours, and so does your IT support. Round-the-clock network monitoring, after-hours helpdesk, and continuous threat detection mean your systems are watched and protected at all times.",
      },
      {
        label: "A Full Team.\nA Fraction of the Cost.",
        stat: "60%+",
        statLabel: "avg. savings vs. in-house",
        body: "Hiring internal IT in Ontario means $60,000+ per person, and each one covers only two or three disciplines. Silverthaw brings helpdesk, cybersecurity, cloud, networking, and practical guidance under one predictable monthly investment. More capability, no recruitment overhead, and a cost structure that actually scales with your small business.",
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
        body: "Most small businesses juggle three to five IT vendors with no single owner of the full picture. Silverthaw changes that. One partner holds your infrastructure, security, software, and support, with a dedicated advisor who owns the relationship and coordinates every specialist working on your behalf. One call. Full accountability.",
      },
    ],
    closing: {
      lead: "Support that used to require an in-house IT team.",
      em: "Now built for small businesses like yours.",
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
        a: "That's great. What are they doing proactively? Most providers handle tickets and keep the lights on. Silverthaw goes further: monthly status meetings, quarterly technology reviews, practical roadmapping, and vendor-neutral software selection. If your current provider is delivering all of that, you're in excellent hands. If not, that's the gap we fill.",
      },
      {
        q: "We can't justify the cost right now.",
        a: "What's it costing you not to have it? Owner time spent troubleshooting technology. Downtime during your busiest periods. Security gaps with no one watching. Our IT support is typically less than half the cost of a single internal IT hire, and you get a full team, not one person, with no overhead.",
      },
      {
        q: "We're probably too small for IT support.",
        a: "That's actually when you need it most. Small businesses are the primary targets for cyberattacks precisely because they're unprotected. And the technology decisions you make now, about your systems, your security, your data practices, become the foundation everything else is built on. Getting it right from the start costs a fraction of fixing it later.",
      },
      {
        q: "We've handled IT ourselves until now.",
        a: "You know your business better than anyone. But every hour spent troubleshooting email issues, chasing software updates, or worrying about cybersecurity is an hour you're not spending on growth. Our job is to take that entire burden off your plate completely, so you can focus on what you actually do best.",
      },
    ],
  },
};

export default itSupportSmallBusiness;
