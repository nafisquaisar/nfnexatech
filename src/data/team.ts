/**
 * Single source of truth for all NF Nexa Tech team members.
 * Imported by both /verify/[slug] pages and /about page.
 * Adding a member here automatically surfaces them on the About page.
 */

export interface TeamMember {
  /** URL-safe slug — matches the /verify/[slug] route */
  slug: string;
  name: string;
  designation: string;
  department: string;
  employeeId: string;
  status: "Active" | "Inactive";
  email: string;
  website: string;
  joinedYear: string;
  /** Path relative to /public */
  photo: string;
  /** Short bio shown on the About page */
  bio: string;
  /** Whether this person appears in the Leadership section */
  isLeadership: boolean;
  /** Display order (lower = first) */
  order: number;
  /** Accent colours used on verify pages and About cards */
  accent: {
    from: string; // e.g. "from-amber-500"
    via: string;  // e.g. "via-orange-400"
    to: string;   // e.g. "to-yellow-500"
    border: string; // e.g. "border-amber-500/30"
    glow: string;   // e.g. "bg-amber-500/20"
  };
  /** Short label shown in the verify badge (e.g. "NFT-CEO-001 · Founder") */
  badgeText: string;
}

export const TEAM: TeamMember[] = [
  {
    slug: "founder",
    name: "Nafis Quaisar",
    designation: "Founder & CEO",
    department: "Executive Leadership",
    employeeId: "NFT-CEO-001",
    status: "Active",
    email: "admin@nfnexatech.tech",
    website: "https://nfnexatech.tech",
    joinedYear: "2022",
    photo: "/verify/founder.jpeg",
    bio: "Nafis Quaisar founded NF Nexa Tech with a vision to make world-class software accessible to startups and enterprises across India. With expertise spanning full-stack web development, mobile apps and cloud architecture, he leads product strategy and engineering excellence at the company.",
    isLeadership: true,
    order: 1,
    accent: {
      from: "from-amber-500",
      via: "via-orange-400",
      to: "to-yellow-500",
      border: "border-amber-500/30",
      glow: "bg-amber-500/20",
    },
    badgeText: "NFT-CEO-001 · Founder",
  },
  {
    slug: "cofounder",
    name: "Saheb Alam",
    designation: "Co-Founder",
    department: "Executive Leadership",
    employeeId: "NFT-CF-002",
    status: "Active",
    email: "cofounder@nfnexatech.tech",
    website: "https://nfnexatech.tech",
    joinedYear: "2022",
    photo: "/verify/co-founder.png",
    bio: "Saheb Alam co-founded NF Nexa Tech and drives business strategy, client relationships and operational growth. His sharp commercial instincts and passion for technology-led transformation have been central to shaping the company's client-first culture.",
    isLeadership: true,
    order: 2,
    accent: {
      from: "from-violet-500",
      via: "via-purple-400",
      to: "to-fuchsia-500",
      border: "border-violet-500/30",
      glow: "bg-violet-500/20",
    },
    badgeText: "NFT-CF-002 · Co-Founder",
  },
  {
    slug: "business-development-executive",
    name: "Anzar",
    designation: "Business Development Executive",
    department: "Business Development",
    employeeId: "NFT-BDE-003",
    status: "Active",
    email: "bde@nfnexatech.tech",
    website: "https://nfnexatech.tech",
    joinedYear: "2023",
    photo: "/verify/bde.png",
    bio: "Anzar leads business development at NF Nexa Tech, identifying growth opportunities, building strategic partnerships and nurturing client relationships that translate into long-term value for the company.",
    isLeadership: false,
    order: 3,
    accent: {
      from: "from-emerald-500",
      via: "via-teal-400",
      to: "to-cyan-500",
      border: "border-emerald-500/30",
      glow: "bg-emerald-500/20",
    },
    badgeText: "NFT-BDE-003 · Business Development",
  },
  {
    slug: "hr-operations-executive",
    name: "Khushi Mishra",
    designation: "HR & Operations Executive",
    department: "Human Resources & Operations",
    employeeId: "NFT-HR-004",
    status: "Active",
    email: "hr@nfnexatech.tech",
    website: "https://nfnexatech.tech",
    joinedYear: "2023",
    photo: "/verify/hr.jpeg",
    bio: "Khushi Mishra manages human resources, recruitment and day-to-day operations at NF Nexa Tech. She ensures the team has the environment, culture and support needed to deliver exceptional work for every client.",
    isLeadership: false,
    order: 4,
    accent: {
      from: "from-sky-500",
      via: "via-blue-400",
      to: "to-indigo-500",
      border: "border-sky-500/30",
      glow: "bg-sky-500/20",
    },
    badgeText: "NFT-HR-004 · HR & Operations",
  },
  {
    slug: "ui-ux-designer",
    name: "Absar Quaisar",
    designation: "UI/UX Designer",
    department: "Design & Creative",
    employeeId: "NFT-UXD-005",
    status: "Active",
    email: "design@nfnexatech.tech",
    website: "https://nfnexatech.tech",
    joinedYear: "2023",
    photo: "/verify/uiux.png",
    bio: "Absar Quaisar crafts intuitive, pixel-perfect user experiences that delight users and drive product adoption. His design philosophy centres on clarity, accessibility and the kind of aesthetic precision that makes great products memorable.",
    isLeadership: false,
    order: 5,
    accent: {
      from: "from-pink-500",
      via: "via-rose-400",
      to: "to-fuchsia-500",
      border: "border-pink-500/30",
      glow: "bg-pink-500/20",
    },
    badgeText: "NFT-UXD-005 · Design",
  },
];

/** Convenience: all leadership members sorted by order */
export const LEADERSHIP = TEAM.filter((m) => m.isLeadership).sort(
  (a, b) => a.order - b.order
);

/** Convenience: all non-leadership members sorted by order */
export const TEAM_MEMBERS = TEAM.filter((m) => !m.isLeadership).sort(
  (a, b) => a.order - b.order
);

/** Look up a single member by slug — used by verify pages */
export function getMemberBySlug(slug: string): TeamMember | undefined {
  return TEAM.find((m) => m.slug === slug);
}
