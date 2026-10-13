/**
 * CANONICAL testimonial dataset — single source of truth.
 *
 * Phase 12: All testimonial data is consolidated here.
 * Components should import from this file, not from content.js or inline arrays.
 *
 * IMPORTANT:
 *  - Testimonials are sourced from the Google Business Profile.
 *  - The Popular Bread Hinglish review is preserved exactly as given.
 *  - The Md Ismail testimonial describes NF Nexa Tech as a "web development and SEO agency".
 *    This is the client's own wording from their Google review and has NOT been altered.
 *    FLAG (Phase 13): Business owner should confirm whether this accurately represents the
 *    engagement. If the client is willing to amend, update accordingly. Otherwise leave as-is.
 *  - Do not fabricate client company names, dates, job titles, or outcomes.
 */

export interface Testimonial {
  id: number;
  name: string;
  initials: string;
  gradient: string;
  rating: 5;
  review: string;
  accent: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Popular Bread",
    initials: "P",
    gradient: "from-[#E8763A] to-[#f5a04a]",
    rating: 5,
    review:
      "Aapne mera app banaye the popular bread that was really good app. Smooth kaaam karraha ha aur mera kaam bahut ache se aur aashan hogaya ha. aur mere according customize bhi hai",
    accent: "#E8763A",
  },
  {
    id: 2,
    name: "Asargroup Invisiblegrill",
    initials: "A",
    gradient: "from-[#1FA0B1] to-[#36c2d6]",
    rating: 5,
    review:
      "NF Nexa Tech developed a professional website for our invisible grill business, and we are very happy with the result. The website has a clean design, works smoothly on mobile, and presents our services in a simple and attractive way. They understood our requirements well and delivered everything professionally. Highly recommended for business website development.",
    accent: "#1FA0B1",
  },
  {
    id: 3,
    name: "Harsh Kumar",
    initials: "HK",
    gradient: "from-[#7C5CBF] to-[#9b7dd4]",
    rating: 5,
    review:
      "NF Nexa Tech built our company website from scratch and the result was fantastic. The design is modern, mobile-friendly, and loads very fast. Great experience overall.",
    accent: "#7C5CBF",
  },
  {
    id: 4,
    name: "Md Ismail",
    initials: "MI",
    gradient: "from-[#1FA0B1] to-[#36c2d6]",
    rating: 5,
    // FLAG (Phase 13): Client's own Google review wording — preserved as-is.
    // Business owner to confirm if amendment is needed given NF Nexa Tech's
    // primary positioning as a software/web/mobile development company.
    review:
      "I recently hired NF Nexa Tech to develop a professional website for my business, and I must say that their service has been absolutely exceptional from start to finish. If you are looking for a top-notch web development and SEO agency in Mahipalpur or the Delhi NCR region, NF Nexa Tech is undoubtedly the best choice.",
    accent: "#1FA0B1",
  },
];
