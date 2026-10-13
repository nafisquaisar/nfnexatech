/**
 * Homepage FAQ content — single source of truth.
 *
 * Phase 4: Answers expanded to 2-4 substantive sentences each
 * for stronger AI extraction (AEO). Each answer stands alone
 * without the question context and contains enough specificity
 * to be genuinely useful.
 *
 * New questions added:
 *   - Pricing (Delhi context, no invented price ranges)
 *   - Work with clients outside Delhi
 *
 * Used by:
 *   1. src/components/Faq.jsx — visible FAQ accordion
 *   2. src/components/JsonLd.tsx — FAQPage schema (imported as `faqs`)
 */

export const faqs = [
  {
    question: "What services does NF Nexa Tech provide?",
    answer:
      "NF Nexa Tech provides web development (React, Next.js), Android app development (Java, Kotlin), Flutter cross-platform app development, UI/UX design, backend and API development (Node.js, Firebase), and SaaS MVP development. We serve startups, small and medium businesses, and growing companies across Delhi and India. Our team handles the full product lifecycle — from design and development through to deployment and post-launch support.",
  },
  {
    question: "What does website development cost?",
    answer:
      "Project cost depends on the scope, number of features, design complexity, and whether you need a backend or not. A clean informational website for a small business is simpler and less expensive than a web application with user accounts, dashboards, and payment integration. We provide a detailed quote after a free discovery call where we understand exactly what you need. Contact us to discuss your project and get a transparent proposal.",
  },
  {
    question: "How long does a software project take?",
    answer:
      "A focused MVP or small website typically takes 4–8 weeks. A web application or mobile app with backend integration usually takes 8–16 weeks. Larger or more complex platforms take longer. We agree on a realistic timeline upfront before starting and share progress updates throughout — we don't provide fixed guarantees because timelines depend heavily on scope clarity and feedback speed from the client.",
  },
  {
    question: "How does the software development process work?",
    answer:
      "We start with a discovery call to understand your requirements and goals. We then prepare a written scope and proposal. Once approved, we move through UI design, development in short cycles, testing, and finally deployment. You receive regular progress updates and can provide feedback at each stage. We use WhatsApp, Slack, and video calls to keep communication clear throughout.",
  },
  {
    question: "Does NF Nexa Tech work with clients outside Delhi?",
    answer:
      "Yes. Our office is in Mahipalpur, New Delhi, but we work with clients across India and internationally. We've built products for clients in cities like Bhopal, Patna, Mumbai, and Bangalore, as well as clients in the USA, UAE, and UK. All project communication happens remotely through WhatsApp, video calls, and written updates — location is not a barrier.",
  },
  {
    question: "What types of projects does NF Nexa Tech handle?",
    answer:
      "We build websites, web applications, Android and Flutter apps, UI/UX designs, backend APIs, and SaaS MVPs. We work with startups, small businesses, and growing companies. Past projects include a music streaming app, an education management platform, hospital websites, home services platforms, and a billing SaaS product. We work across healthcare, education, e-commerce, food and beverage, and service businesses.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with React, Next.js, Kotlin, Java, Flutter, Node.js, Firebase, Spring Boot, PostgreSQL, MySQL, and REST APIs. We choose the technology based on what works best for your specific project — not a one-size-fits-all approach. For mobile apps we build native Android or cross-platform Flutter depending on your requirements. For web we typically use Next.js for its performance and SEO advantages.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the contact form on our website, email us at nfnexatech@gmail.com, or send us a WhatsApp message. We respond the same day. We'll schedule a free 30-minute call to understand what you need and share a detailed proposal within 48 hours — no obligation, no sales pressure.",
  },
];
