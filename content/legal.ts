/**
 * Static content for the combined Privacy Policy & Terms of Service page.
 * Adapted from the live silverthaw.ca/privacy-policy/ document
 * (see silverthaw-privacy-policy.md at the repo root for the source).
 */

export type LegalClause = {
  id?: string;
  number: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export const legalContent = {
  meta: {
    title: "Privacy Policy & Terms of Service - Silverthaw Consulting",
    description:
      "Silverthaw Consulting's Privacy Policy and Terms of Service: how we collect, use, and protect your data, our use of AI tools, and the terms governing use of our site and services.",
  },

  hero: {
    eyebrow: "Legal",
    title: "Privacy Policy & Terms of Service",
    subheadline:
      "How Silverthaw Consulting Ltd. collects, uses, and protects your information, and the terms that govern your use of our website and services.",
  },

  effectiveDate: "August 29, 2023",
  lastUpdated: "July 4, 2025",

  intro: [
    'Welcome to Silverthaw Consulting Ltd. ("Silverthaw", "we", "us", or "our"). This Privacy Policy and Terms of Service governs your access to and use of our website at silverthaw.ca and all affiliated domains and services.',
    "By using our websites, social media channels, booking tools, or services, you agree to the practices outlined below. If you do not agree, please discontinue use of our services and websites.",
  ],

  privacySections: [
    {
      number: "01",
      heading: "Who We Are",
      paragraphs: [
        "Silverthaw Consulting Ltd. is a Canadian consulting firm owned and operated by Jason Saunders. In addition to our primary domain, we maintain a presence across affiliated websites operated by Silverthaw Consulting Ltd. or its affiliate, Blue Charm Sales Agencies, also owned by Jason Saunders.",
      ],
    },
    {
      number: "02",
      heading: "Information We Collect",
      paragraphs: [
        "We collect information you voluntarily provide, including name, email, phone number, company name, and inquiry details. We may also collect:",
      ],
      bullets: [
        "IP address and browser information for spam prevention",
        "Cookies and analytics for website functionality",
        "Media metadata (e.g., EXIF/GPS from images uploaded by users)",
      ],
    },
    {
      number: "03",
      heading: "Your Consent",
      paragraphs: [
        "By submitting your data, you authorize Silverthaw Consulting Ltd., Blue Charm Sales Agencies, and related entities to collect, store, and use your data for normal business purposes, including sales, marketing, consultation, and follow-up.",
        "We do not sell your data. We will not share your data with third parties without your express permission, unless legally required.",
      ],
    },
    {
      number: "04",
      heading: "Cookies and Tracking",
      paragraphs: [
        "Our websites use cookies to improve user experience, such as:",
      ],
      bullets: [
        "Remembering login sessions and preferences",
        "Analytics and performance tracking",
        "Managing embedded or interactive content",
      ],
    },
    {
      number: "05",
      heading: "Embedded Content",
      paragraphs: [
        "Content on this site may include embedded items (e.g., YouTube, LinkedIn). These third parties may collect your data and track interactions per their own privacy policies.",
      ],
    },
    {
      number: "06",
      heading: "Data Retention and Rights",
      paragraphs: [
        "Comments and related metadata are stored indefinitely. Registered users (if applicable) may view, edit, or delete their data. You may request a copy of your personal data or request deletion by emailing info@silverthaw.ca.",
      ],
    },
    {
      number: "07",
      heading: "Email Communications & CASL",
      paragraphs: [
        "By submitting your email, you consent to receive communications as permitted under Canada's Anti-Spam Legislation (CASL), including:",
      ],
      bullets: ["Marketing updates", "Appointment reminders", "Service follow-ups"],
    },
    {
      number: "08",
      heading: "Security",
      paragraphs: [
        "We use secure platforms and tools to protect your data. While we take precautions, no system is 100% secure, and we cannot guarantee complete protection.",
      ],
    },
    {
      number: "09",
      heading: "Third-Party Tools and Platforms",
      paragraphs: [
        "We use trusted platforms to operate our business, including:",
      ],
      bullets: [
        "Google Analytics",
        "ERP and/or CRM (e.g., Zoho, HubSpot, etc.)",
        "Scheduling (e.g., Calendly)",
        "Content Management (e.g., WordPress)",
        "Social media integrations (e.g., Facebook, LinkedIn, etc.)",
        "AI (e.g., FathomAI, OpenAI, etc.)",
      ],
    },
  ] satisfies LegalClause[],

  termsSections: [
    {
      number: "10",
      heading: "Promotions and Giveaways",
      paragraphs: [
        "For any promotion, free trial, offer, discount, or giveaway to be valid, certain conditions and limitations apply, including but not limited to:",
      ],
      bullets: [
        "No cash value",
        "One per unique user/person",
        "Eligibility requires an initial scheduled call with Silverthaw Consulting Ltd.",
        "We reserve the right to discontinue the promotion at any time",
        "We reserve the right to further restrict eligibility in any manner, at our sole discretion",
        "Any offer will be e-delivered once conditions have been met",
      ],
    },
    {
      number: "11",
      heading: "Governing Law",
      paragraphs: [
        "This Policy is governed by the laws of the Province of Ontario and applicable federal laws of Canada. Any disputes shall be resolved in the courts of Ontario.",
      ],
    },
    {
      number: "12",
      heading: "Policy Updates",
      paragraphs: [
        'We may revise this policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services implies acceptance of these changes.',
      ],
    },
    {
      number: "13",
      heading: "Use of Publicly Available Information & AI Tools",
      paragraphs: [
        "Silverthaw Consulting Ltd. and its affiliated companies may collect and analyze publicly available data to support legitimate business activities, including content found through web search engines, public directories and business registries, social media platforms, industry databases and publications, and publicly posted websites or profiles.",
        "We also make use of artificial intelligence (AI) tools and large language models (LLMs) for tasks including market research, business analysis, note-taking and summarization, automation of repetitive information gathering, and drafting internal communications, marketing content, or reports.",
        "AI Usage Consent: By using our services, websites, or communicating with us, you explicitly consent to our use of AI tools for these purposes, including processing information you provide or that is publicly available. AI is used solely to support our internal operations, and any outputs are reviewed by a human before use in decision-making or client interactions. We do not use AI to make automated decisions that directly affect individuals without human oversight. If you wish to restrict how your information is processed, you may contact us to request an exception.",
        "Informational Use Notice: All content shared through our websites, downloads, newsletters, and communications is provided for general informational and marketing purposes only. It is not legal, financial, or operational advice. By accessing our content or interacting with Silverthaw, you acknowledge that the information is not a substitute for professional, tailored advice, you alone are responsible for decisions based on this content, and Silverthaw Consulting Ltd. and its affiliates are not liable for actions taken based on any public or AI-assisted content. If you require personalized guidance or advisory services, we would be happy to assist under a duly signed Master Professional Services Agreement (MPSA).",
      ],
    },
  ] satisfies LegalClause[],

  contact: {
    heading: "Contact Information",
    paragraphs: ["Silverthaw Consulting Ltd.", "Toronto, Ontario, Canada"],
    phone: "(416) 891-5273",
    email: "info@silverthaw.ca",
    website: "www.silverthaw.ca",
  },
};

export type LegalContentData = typeof legalContent;
