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
      "One dedicated team of IT experts covering everything your business needs from a managed IT services — Outsourced IT department, IT consulting, software selection, cybersecurity and network monitoring, data and recovery backup, IT project management, and day-to-day IT support, all under one roof.",
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
      "Silverthaw manages the full technology lifecycle for Ontario small and medium businesses including outsourced IT managed services, IT consulting & ERP software selection, cybersecurity and network protection, data backup and disaster recovery, all under one dedicated team.",
    items: [
      {
        icon: "monitor",
        slug: "managed-it",
        name: "Managed IT Services",
        summary:
          "Your complete outsourced IT department - remote helpdesk support, IT cloud management, cybersecurity and network protection across all technology layers of your business.",
        extended:
          "We start by understanding your business — where you are today and where you are headed. From there we build a managed IT services package tailored to your specific operations and needs. We then supervise and take full ownership of your technology: helpdesk, security, infrastructure, and strategic implementation.",
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
        slug: "it-consulting",
        name: "Software Selection & IT Consulting",
        summary:
          "Strategic IT assessment, technology roadmapping, and vendor-neutral software selection — backed by 25+ years on the vendor side in Enterprise IT Solutions.",
        extended:
          "We assess your current systems, diagnose what is holding you back, and build a roadmap aligned to your business goals. For software selection, we run a structured, vendor-neutral evaluation across 100+ systems — we aligned the software with your business needs with no vendor incentives influencing the outcome.",
        bullets: [
          "In-depth analysis of existing IT systems, infrastructure, and security posture",
          "Diagnosis of IT weaknesses, bottlenecks, and gaps",
          "Strategic technology roadmap with timeline and budget guidance",
          "Transparent cost analysis for all recommended solutions",
          "Vendor-neutral software selection: requirements definition, RFP management, vendor scoring, and demo oversight",
          "Structured deliverables at every stage — process maps, requirements lists, vendor scorecards, final recommendation reports",
        ],
      },
      {
        icon: "shield",
        slug: "cybersecurity",
        name: "Cybersecurity & Network Protection",
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
      },
      {
        icon: "database",
        slug: "data-backup",
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
      },
      {
        icon: "clipboard",
        slug: "it-projects",
        name: "Project Management & IT Implementation",
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
      },
      {
        icon: "rocket",
        slug: "new-business-it",
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
      },
    ],
  },

  advantage: {
    eyebrow: "The Silverthaw Advantage",
    headingLines: ["The Only Partner", "That Grows", "With You."],
    subheadline:
      "Technology should move your business forward, not hold it back. Silverthaw's team of IT experts give you the execution and strategic direction to make better technology decisions from the start.",
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

  testimonials: {
    eyebrow: "Client Reviews",
    headingLines: ["Trusted by Businesses", "Across Ontario."],
    subheadline:
      "What business owners say after making Silverthaw their dedicated IT partner.",
    items: [
      {
        id: "harrison-e",
        authorName: "Harrison, E.",
        date: "March 14, 2024",
        rating: 5,
        title: "The right software, finally",
        body:
          "We were overwhelmed by the software options for our industry. Silverthaw guided us to the right fit and handled the entire transition, keeping it smooth, hassle-free, and built for growth.",
      },
      {
        id: "kowalski-j",
        authorName: "Kowalski, J.",
        date: "November 2, 2025",
        rating: 5,
        title: "Security handled by experts",
        body:
          "Security was our top concern with outdated infrastructure. Silverthaw's certified experts secured our systems seamlessly, giving us the peace of mind to focus on our business instead of vulnerabilities.",
      },
      {
        id: "bennett-m",
        authorName: "Bennett, M.",
        date: "June 21, 2023",
        rating: 5,
        title: "Downtime completely resolved",
        body:
          "System availability is everything in our line of work. Before Silverthaw, downtime constantly derailed us. Now their proactive monitoring keeps our operations running, uninterrupted.",
      },
      {
        id: "nguyen-t",
        authorName: "Nguyen, T.",
        date: "February 18, 2026",
        rating: 5,
        title: "IT that scales with us",
        body:
          "As we expanded rapidly, we needed IT that could scale with us. Silverthaw delivered a clear roadmap and hands-on support, so our technology empowers our team instead of holding it back.",
      },
      {
        id: "jenkins-r",
        authorName: "Jenkins, R.",
        date: "October 12, 2023",
        rating: 5,
        title: "A true turning point",
        body:
          "Keeping up with modern technology was a struggle until we found Silverthaw. They understood our bottlenecks and built a clear digitalization roadmap that made the transition seamless for our whole team.",
      },
      {
        id: "gupta-a",
        authorName: "Gupta, A.",
        date: "January 19, 2026",
        rating: 5,
        title: "Legacy transition made simple",
        body:
          "Transitioning our legacy systems felt impossible until Silverthaw stepped in. Their strategic guidance made the digitalization of our operations simple, positioning us for long-term, secure growth.",
      },
      {
        id: "anderson-m",
        authorName: "Anderson, M.",
        date: "March 15, 2024",
        rating: 5,
        title: "Hybrid work, zero friction",
        body:
          "Silverthaw set up secure remote access for our hybrid team with ease. Their helpdesk is fast and responsive, often fixing issues before we even notice them.",
      },
      {
        id: "tremblay-s",
        authorName: "Tremblay, S.",
        date: "November 4, 2022",
        rating: 5,
        title: "Proactive, jargon-free support",
        body:
          "After evaluating several MSPs, we chose Silverthaw for cybersecurity and network support. Their technicians are knowledgeable and patient, explaining things clearly, and our downtime is now virtually nonexistent.",
      },
      {
        id: "patel-k",
        authorName: "Patel, K.",
        date: "August 22, 2025",
        rating: 5,
        title: "Fast, dedicated resolution",
        body:
          "A workstation issue was killing my productivity, but the technician made it his mission to get me back online fast. Courteous, efficient, and a pleasure to work with.",
      },
      {
        id: "rodriguez-l",
        authorName: "Rodriguez, L.",
        date: "February 10, 2026",
        rating: 5,
        title: "Three years of partnership",
        body:
          "Silverthaw has been our trusted IT partner for three years. They don't just fix what's broken. They proactively recommend scalable solutions that save us real time and money.",
      },
      {
        id: "chen-w",
        authorName: "Chen, W.",
        date: "May 18, 2023",
        rating: 5,
        title: "Dependable service desk",
        body:
          "Even a brief outage disrupts our operations, so we rely on Silverthaw to keep things running. Every ticket connects us to a polite expert who resolves issues fast.",
      },
      {
        id: "oconnor-s",
        authorName: "O'Connor, S.",
        date: "September 30, 2022",
        rating: 5,
        title: "Fragmented systems, overhauled",
        body:
          "Our IT was fragmented with poor data tracking before Silverthaw stepped in. Their hands-on, consultative approach delivered a secure setup built to scale with our business.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions We Hear",
    heading: "Common Concerns.",
    subheadline: "Straightforward answers to the questions we hear most often.",
    items: [
      {
        q: "What does an outsourced IT department actually include?",
        a: "Most people picture managed IT as help desk tickets and antivirus. Silverthaw runs as a full outsourced IT department, covering strategic planning, network monitoring, cybersecurity, cloud and infrastructure support, software selection, and end-user support. Unlike a break-fix vendor, we own every layer of your technology and the outcome it produces.",
      },
      {
        q: "How much does outsourced IT support cost?",
        a: "Cost depends on your team size, environment complexity, and which service pillars you need active first. Rather than a flat per-seat rate, we build a package around your current risk areas and growth plans, so you're not paying for coverage you don't need yet, with room to add services as you scale.",
      },
      {
        q: "We already have someone handling IT. Why would we need you?",
        a: "We love working alongside in-house teams. Think of us as a trusted extension of your IT department, covering strategic planning, security hardening, vendor management, and after-hours support. Your person gets real backup, and can focus on what only they know about your business.",
      },
      {
        q: "We're overwhelmed by software and vendor choices. Can you help us decide?",
        a: "Yes, this is a common starting point for new clients. Instead of recommending whatever's easiest to sell, we start by understanding your actual bottlenecks, then guide you through selecting and implementing the tools that fit, handling the technical work end-to-end so the transition doesn't fall on your team.",
      },
      {
        q: "We're growing fast. Can our IT infrastructure keep up?",
        a: "Rapid growth is one of the most common reasons businesses come to us. Infrastructure built for ten people often breaks down at thirty or fifty, not because anything failed, but because it was never built to scale. We build a roadmap alongside your growth plans so technology stays ahead of the business instead of catching up.",
      },
      {
        q: "Is managed IT better than in-house IT?",
        a: "For most businesses, yes. Round-the-clock monitoring catches issues before they interrupt your operations, without the cost of building an internal team. A single in-house hire runs $60,000 or more a year and covers only a couple of disciplines. Silverthaw gives you a full team of specialists for one predictable monthly investment.",
      },
      {
        q: "Do you provide managed IT services for small businesses?",
        a: "Yes. We specialize in managed IT for small and growing businesses, and build our approach around the challenges you actually face, not a one-size-fits-all package. That includes proactive support, network management, cybersecurity, and cloud solutions, all built to help your business run smoother and scale without technology holding it back.",
      },
    ],
  },
};

export default managedIT;
