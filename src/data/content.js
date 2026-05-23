/**
 * Static testimonials data.
 * Add real client testimonials here as they come in.
 */
export const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    title: "Founder",
    company: "TuneLyf",
    avatar: null, // Use initials fallback
    rating: 5,
    review:
      "NF Nexa Tech delivered our music streaming app on time and exceeded every benchmark we set. The ExoPlayer integration and UI polish were truly world-class. Our beta users love it.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Director",
    company: "Organizer Classes",
    avatar: null,
    rating: 5,
    review:
      "They completely transformed how we manage 1,200+ students. The platform replaced all our spreadsheets in two weeks. Support has been excellent — they treat us like a long-term partner.",
  },
  {
    id: 3,
    name: "Rajesh Gupta",
    title: "Operations Manager",
    company: "Popular Bread",
    avatar: null,
    rating: 5,
    review:
      "The inventory system reduced our nightly stock-count from 90 minutes to 8 minutes. Wastage dropped by 68%. The ROI on this project was immediate and measurable.",
  },
];

/**
 * FAQ data — used in the FAQ section and FAQ schema markup.
 */
export const faqs = [
  {
    question: "What types of projects does NF Nexa Tech handle?",
    answer:
      "We specialise in web development, Android and Flutter mobile apps, UI/UX design, backend APIs, and SaaS MVP development. We work with startups, SMEs, and enterprises across various industries.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on scope. A focused MVP typically takes 6–10 weeks. A full-featured product — web platform, Android app, or custom SaaS — usually takes 3–5 months. We provide a detailed timeline during discovery.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile sprint model: (1) Discovery & architecture, (2) UI/UX design, (3) Development sprints with bi-weekly demos, (4) QA & performance testing, (5) Deployment & post-launch support. You are involved at every stage.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes — we work with clients globally. We communicate over email, WhatsApp, and video calls and align to your time zone for meetings. Payments are accepted internationally.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our core stack includes React, Next.js, Node.js, and Firebase for web. For mobile, we use Android (Java/Kotlin) and Flutter. For backend, we use REST APIs, Firebase Cloud Functions, and PostgreSQL/MongoDB.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us via the form below, email us at nfnexatech@gmail.com, or WhatsApp us directly. We will schedule a free 30-minute discovery call to understand your requirements and share a no-obligation proposal.",
  },
];

/**
 * Services detailed data — used for /services/[slug] pages.
 */
export const servicesData = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Scalable, high-performance websites and web applications.",
    description:
      "We build modern web platforms with React, Next.js, and cloud-native backends. From marketing sites to complex SaaS dashboards — performance, SEO, and scalability are built in from day one.",
    icon: "🌐",
    features: [
      "React & Next.js (App Router)",
      "SEO-first architecture",
      "Tailwind CSS design systems",
      "Firebase / Supabase backends",
      "REST & GraphQL APIs",
      "Auth, payments, dashboards",
    ],
    process: [
      { step: "Discovery", detail: "We map your business goals, user journeys, and technical requirements." },
      { step: "Design", detail: "Figma wireframes and high-fidelity UI design tailored to your brand." },
      { step: "Development", detail: "Agile sprints with bi-weekly demos and constant communication." },
      { step: "Launch", detail: "Deployment, performance testing, and post-launch monitoring." },
    ],
    cta: "Get a Web Project Quote",
    metaDescription:
      "NF Nexa Tech builds scalable React and Next.js web applications for startups and enterprises. SEO-optimised, high-performance, and production-ready.",
  },
  {
    slug: "android-app-development",
    title: "Android App Development",
    tagline: "Native Android apps built for performance and scale.",
    description:
      "We build production-grade Android applications in Java and Kotlin using MVVM architecture. From music streaming to enterprise tools — our Android apps are smooth, reliable, and ready for the Play Store.",
    icon: "📱",
    features: [
      "Native Android (Java / Kotlin)",
      "MVVM + Clean Architecture",
      "Firebase real-time backend",
      "ExoPlayer, Room DB, Retrofit",
      "Material Design 3",
      "Play Store deployment",
    ],
    process: [
      { step: "Research", detail: "Platform analysis, competitor audit, and user persona definition." },
      { step: "Architecture", detail: "Data model design, API contracts, and component breakdown." },
      { step: "Development", detail: "Sprint-based delivery with real device testing across configurations." },
      { step: "QA & Release", detail: "Play Store listing, ASO optimisation, and launch support." },
    ],
    cta: "Start Your Android Project",
    metaDescription:
      "NF Nexa Tech builds high-performance native Android apps in Java and Kotlin. MVVM architecture, Firebase backend, Material Design 3.",
  },
  {
    slug: "flutter-app-development",
    title: "Flutter App Development",
    tagline: "One codebase. Two platforms. Zero compromises.",
    description:
      "We build cross-platform apps with Flutter that run natively on Android and iOS with a single codebase. Ideal for startups that need fast time-to-market without sacrificing quality.",
    icon: "🦋",
    features: [
      "Flutter 3 (Android + iOS)",
      "Bloc / Provider state management",
      "Firebase Firestore & Auth",
      "Offline-first with Hive / Isar",
      "Custom animations",
      "App Store & Play Store deployment",
    ],
    process: [
      { step: "Discovery", detail: "Cross-platform feasibility analysis and architecture planning." },
      { step: "Design", detail: "Platform-native UI patterns respecting both Android & iOS HIG." },
      { step: "Development", detail: "Shared business logic with platform-adaptive UI layers." },
      { step: "Release", detail: "Simultaneous deployment to both stores with ASO." },
    ],
    cta: "Build Your Flutter App",
    metaDescription:
      "Cross-platform Flutter apps for Android and iOS by NF Nexa Tech. Single codebase, native performance, Firebase backend.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Human-centred design that converts.",
    description:
      "We design digital products from user research and wireframes to high-fidelity Figma prototypes. Every design decision is grounded in usability, accessibility, and conversion optimisation.",
    icon: "🎨",
    features: [
      "User research & personas",
      "Information architecture",
      "Wireframing & prototyping",
      "High-fidelity Figma design",
      "Design system creation",
      "Accessibility (WCAG 2.1)",
    ],
    process: [
      { step: "Research", detail: "User interviews, competitive analysis, and journey mapping." },
      { step: "Wireframes", detail: "Low-fidelity layouts that define structure before visuals." },
      { step: "Visual Design", detail: "High-fidelity screens with your brand identity applied." },
      { step: "Handoff", detail: "Developer-ready Figma files with specs, tokens, and assets." },
    ],
    cta: "Get a Design Consultation",
    metaDescription:
      "UI/UX design services by NF Nexa Tech. User research, Figma prototypes, design systems, and WCAG-compliant accessible design.",
  },
  {
    slug: "backend-api-development",
    title: "Backend & API Development",
    tagline: "Secure, scalable server-side systems.",
    description:
      "We build RESTful and GraphQL APIs with Node.js, Firebase Cloud Functions, and PostgreSQL. Designed for reliability, observability, and horizontal scale from day one.",
    icon: "⚙️",
    features: [
      "Node.js / Express APIs",
      "Firebase Cloud Functions",
      "PostgreSQL / MongoDB",
      "JWT & OAuth 2.0 auth",
      "Webhook integrations",
      "API documentation",
    ],
    process: [
      { step: "Requirements", detail: "API contract definition, data modelling, and security planning." },
      { step: "Architecture", detail: "Microservice vs monolith analysis, database schema design." },
      { step: "Development", detail: "TDD-driven API development with integration tests." },
      { step: "Deployment", detail: "Cloud deployment, monitoring setup, and documentation." },
    ],
    cta: "Discuss Your Backend Needs",
    metaDescription:
      "Backend and API development by NF Nexa Tech. Node.js, Firebase, PostgreSQL — scalable, secure, and production-ready.",
  },
  {
    slug: "saas-mvp-development",
    title: "SaaS MVP Development",
    tagline: "From idea to funded product in 8 weeks.",
    description:
      "We help founders validate SaaS ideas with production-quality MVPs built to scale. Our MVPs include auth, billing, dashboards, and all the infrastructure you need to start acquiring customers immediately.",
    icon: "🚀",
    features: [
      "Full-stack Next.js + Node.js",
      "Auth (clerk / next-auth)",
      "Stripe payments integration",
      "Multi-tenant architecture",
      "Analytics & feedback loops",
      "Investor-ready pitch decks",
    ],
    process: [
      { step: "Validation", detail: "Business model review, competitor mapping, and scope definition." },
      { step: "MVP Scope", detail: "Ruthless prioritisation — only what's needed to validate the hypothesis." },
      { step: "Build", detail: "6–10 week intensive build with weekly demos and rapid iteration." },
      { step: "Launch", detail: "Product launch support, landing page, and go-to-market guidance." },
    ],
    cta: "Build Your SaaS MVP",
    metaDescription:
      "SaaS MVP development by NF Nexa Tech. Full-stack Next.js, Stripe, auth, and multi-tenant architecture — production-ready in 8 weeks.",
  },
];
