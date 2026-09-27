/**
 * Central site configuration.
 * Import this instead of hard-coding URLs, social links, or brand strings.
 */
export const siteConfig = {
  name: "NF Nexa Tech",
  tagline: "Digital Product Studio",
  description:
    "NF Nexa Tech is a software development company based in Mahipalpur, New Delhi. We build websites, web applications, Android and Flutter apps, SaaS products, and custom software for businesses in Delhi and across India.",
  url: "https://nfnexatech.in",
  locale: "en_IN",
  ogImage: "/og-default.png",

  contact: {
    email: "nfnexatech@gmail.com",
    phone: "+91 8109347584",
    phone2: "+91 9801999829",
    address: "Flat 301, Janki Hari Niwas, Block B, Bengali Market, Mahipalpur, New Delhi - 110037, South West Delhi, Delhi, India",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    countryCode: "IN",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/nfnexatech",
    instagram: "https://www.instagram.com/nfnexatech/",
    facebook: "https://www.facebook.com/nfnexatech",
    whatsapp: "https://wa.me/918109347584",
    whatsapp2: "https://wa.me/919801999829",
  },

  founder: "Nafis Quaisar",
  foundedYear: 2023,

  services: [
    { name: "Web Development", slug: "web-development" },
    { name: "Android App Development", slug: "android-app-development" },
    { name: "Flutter App Development", slug: "flutter-app-development" },
    { name: "UI/UX Design", slug: "ui-ux-design" },
    { name: "Backend & API Development", slug: "backend-api-development" },
    { name: "SaaS & MVP Development", slug: "saas-mvp-development" },
  ],

  stats: [
    { value: "15+", label: "Projects Delivered" },
    { value: "10+", label: "Happy Clients" },
    { value: "4+", label: "Years of Excellence" },
    { value: "100%", label: "On-Time Delivery" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
