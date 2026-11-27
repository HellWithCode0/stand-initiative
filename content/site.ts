/**
 * Every fact the site shows about STAND lives here.
 *
 * A value of `null` means the fact is not confirmed yet. The site then shows a
 * yellow "[ADD ...]" tag in its place, so nothing is invented. Replace a null
 * with the real value and the tag disappears everywhere that value is used.
 */

export type Link = { label: string; href: string };

export const site = {
  name: "STAND",
  fullName: "Sport Training and Assistance New Delhi",
  url: "https://www.standinitiative.com",
  description:
    "STAND (Sport Training and Assistance New Delhi) is a student led initiative working to make sport and recreation accessible to children and young people with disabilities.",
  city: "New Delhi, India",

  founder: {
    name: "Aadya Gupta",
    role: "Founder",
    school: "Sanskriti School, New Delhi",
    /** Path inside /public, for example "/team/aadya-gupta.jpg". */
    photo: null as string | null,
  },

  /** Year or month STAND started, for example "2025". */
  founded: null as string | null,

  partner: {
    name: "Help Each Other",
    website: null as string | null,
  },

  contact: {
    general: null as string | null,
    partnerships: null as string | null,
    media: null as string | null,
    phone: null as string | null,
    /** Only if STAND has an office or postal address. */
    address: null as string | null,
  },

  /** For example { label: "Instagram", href: "https://instagram.com/..." }. */
  social: [] as Link[],

  legal: {
    /** For example "Registered trust" or "Student initiative run with Help Each Other". */
    status: null as string | null,
    registration: null as string | null,
    /** 80G status for Indian donors. */
    taxExemption: null as string | null,
    /** Who receives and holds donated money. Confirmed 2026-11-27. */
    fundHolder: "STAND itself" as string | null,
    /** Teacher, mentor or board who oversees STAND. */
    oversight: null as string | null,
    safeguardingPolicy: null as string | null,
    privacyPolicy: null as string | null,
  },

  reports: {
    annual: null as string | null,
    financials: null as string | null,
    audit: null as string | null,
  },

  /**
   * Where forms send their data. Any service that accepts a plain form POST
   * and answers with JSON works, for example a Formspree form URL.
   * While this is null, forms check the input and then say they are not
   * connected. No data is sent anywhere.
   */
  forms: {
    contact: null as string | null,
    ambassador: null as string | null,
    newsletter: null as string | null,
  },

  donate: {
    /** For example "Razorpay". While null, no payment is attempted. */
    provider: null as string | null,
    /** Hosted checkout or payment page URL from the provider. */
    checkoutUrl: null as string | null,
    currency: "INR",
    presets: [500, 1000, 2500, 5000],
    defaultAmount: 1000,
    minimum: 100,
  },
} as const;

export const nav: Link[] = [
  { label: "About", href: "/about" },
  { label: "Our work", href: "/work" },
  { label: "Impact", href: "/impact" },
  { label: "News", href: "/news" },
  { label: "Get involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
