/**
 * Service-specific FAQ data for /services/[slug] pages.
 *
 * Phase 6 — AEO: Each service page gets 3-5 genuine FAQs matching
 * real search intent. Answers are factually supported by the actual
 * technology stack described in servicesData.
 *
 * Used by: src/app/services/[slug]/page.tsx
 */
export const serviceFaqs: Record<string, { question: string; answer: string }[]> = {
  "web-development": [
    {
      question: "How much does website development cost?",
      answer:
        "Cost depends on what you need. A clean informational business website is simpler and more affordable than a web application with user accounts, payment integration, or a custom dashboard. We provide a transparent fixed-price quote after a free discovery call — no hourly billing surprises.",
    },
    {
      question: "How long does website development take?",
      answer:
        "A standard informational website typically takes 2–4 weeks. A web application with a backend, user authentication, or payment integration usually takes 6–12 weeks. We agree on a realistic timeline before starting and keep you updated throughout.",
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "We build with React and Next.js (App Router) for the frontend, using Tailwind CSS for design systems. For backends we use Firebase, Node.js/Express, and cloud databases like PostgreSQL and MongoDB. Our projects are SEO-optimised, performance-tested, and production-ready.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes. We frequently rebuild existing websites that are slow, outdated, or not generating enquiries. We review the current site first and tell you honestly whether a redesign or a complete rebuild makes more sense. We can migrate your content and improve SEO at the same time.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. We offer post-launch support and maintenance for all websites and web applications we build. This includes bug fixes, minor feature additions, content updates, and performance monitoring. We stay available after launch — we don't disappear once the site goes live.",
    },
  ],

  "android-app-development": [
    {
      question: "Do you develop native Android apps?",
      answer:
        "Yes. We build native Android applications in Kotlin and Java using MVVM architecture and Android Jetpack. Native development gives you the best performance, access to all device hardware features, and the best user experience on Android.",
    },
    {
      question: "Can you publish the app on Google Play?",
      answer:
        "Yes. App Store submission and Play Store listing are part of our Android development service. We handle the Play Console setup, app signing, store listing copy, screenshots, and ASO (App Store Optimisation) to help your app get discovered.",
    },
    {
      question: "What kinds of Android apps do you build?",
      answer:
        "We've built music streaming apps (TuneLyf), business management tools (Popular Bread inventory system), education platforms (Organizer Classes), and productivity apps (Small Steps). We build consumer apps, business tools, and internal enterprise applications.",
    },
    {
      question: "Do you provide post-launch maintenance?",
      answer:
        "Yes. We provide ongoing maintenance including bug fixes, OS compatibility updates, Firebase rule updates, and new feature development after launch. Android updates regularly — we make sure your app stays compatible and working correctly.",
    },
  ],

  "flutter-app-development": [
    {
      question: "When should I choose Flutter over native Android?",
      answer:
        "Choose Flutter when you need your app to run on both Android and iOS from a single codebase — ideal for startups that want to reach both platforms without double the development cost. If you only need Android and require deep device integration or advanced performance, native Kotlin may be a better fit. We'll help you choose the right approach after understanding your requirements.",
    },
    {
      question: "Can Flutter apps run on both Android and iOS?",
      answer:
        "Yes. Flutter compiles to native ARM code for both Android and iOS from a single codebase. The apps run at near-native performance and can be published to both the Google Play Store and Apple App Store. We handle both platform deployments as part of the project.",
    },
    {
      question: "What state management do you use in Flutter?",
      answer:
        "We use Bloc and Riverpod for state management depending on the project complexity. For local storage we use Hive and Isar. For the backend we use Firebase Firestore, Auth, and Cloud Functions — or a custom REST API when needed.",
    },
    {
      question: "Can you maintain an existing Flutter app?",
      answer:
        "Yes. We take over maintenance of existing Flutter apps including bug fixes, Flutter version upgrades, library updates, and new feature development. We review the existing codebase first and give you an honest assessment of its quality and what maintenance effort looks like.",
    },
  ],

  "ui-ux-design": [
    {
      question: "What do you deliver in a UI/UX design project?",
      answer:
        "We deliver Figma files with full high-fidelity UI screens, a component library, design tokens (colours, typography, spacing), and developer-ready handoff specs. For larger projects we also provide a clickable Figma prototype for user testing before development begins.",
    },
    {
      question: "Do you do user research before designing?",
      answer:
        "Yes. We start with user research including stakeholder interviews, competitor analysis, and user journey mapping. This ensures the design decisions are grounded in real user needs rather than guesswork or aesthetic preference alone.",
    },
    {
      question: "Can you design for both mobile and desktop?",
      answer:
        "Yes. We design responsive interfaces for web and native designs for iOS and Android. Our designs follow platform Human Interface Guidelines (HIG) for iOS and Material Design 3 for Android to ensure they feel native on each platform.",
    },
    {
      question: "Do you handle accessibility in your designs?",
      answer:
        "Yes. We design to WCAG 2.1 AA accessibility standards — sufficient colour contrast, clear focus indicators, keyboard navigability, and screen reader compatibility. Accessibility is part of the design process from the start, not added as an afterthought.",
    },
  ],

  "backend-api-development": [
    {
      question: "What backend technologies do you use?",
      answer:
        "We primarily use Node.js with Express for REST APIs, Firebase Cloud Functions for serverless backends, and Spring Boot for Java-based enterprise APIs. We've also worked with Python backends. We choose based on your project's scale, team, and existing infrastructure.",
    },
    {
      question: "Can you build REST APIs and integrate third-party services?",
      answer:
        "Yes. REST API design and development is our core backend offering. We've integrated Razorpay, Stripe, Firebase Auth, Google Maps, WhatsApp Business API, and various CRM and ERP systems. We document all APIs using OpenAPI/Swagger.",
    },
    {
      question: "Can you integrate Firebase or SQL databases?",
      answer:
        "Yes. We work with Firebase Firestore (NoSQL) and Cloud Storage for real-time apps, and with PostgreSQL and MySQL for relational data requirements. We help you choose the right database architecture for your use case and scale.",
    },
    {
      question: "How do you handle API security?",
      answer:
        "We implement JWT authentication, OAuth 2.0, rate limiting, input validation, and HTTPS enforcement as standard. For sensitive data we apply field-level encryption and access control rules. Security is planned at the architecture stage — not added later.",
    },
  ],

  "saas-mvp-development": [
    {
      question: "What is SaaS MVP development?",
      answer:
        "SaaS MVP development means building the first working version of your software product — with just enough features to validate your business idea and start acquiring paying customers. We strip away non-essential features and focus on the core value proposition so you can get to market fast without wasting budget.",
    },
    {
      question: "How long does an MVP take to build?",
      answer:
        "A focused SaaS MVP typically takes 6–10 weeks. This includes discovery, design, development, testing, and deployment. The actual timeline depends on your feature scope — we do a detailed scoping exercise before starting to give you a realistic estimate.",
    },
    {
      question: "What's included in a SaaS MVP?",
      answer:
        "Our SaaS MVPs include user authentication (Clerk or NextAuth), a subscription billing layer (Stripe), a core feature set agreed during scoping, an admin dashboard for you to manage users and data, and deployment on Vercel or a cloud provider. We build on Next.js + Node.js for the full stack.",
    },
    {
      question: "Can you scale the SaaS after the MVP launches?",
      answer:
        "Yes. We architect MVPs to be scalable from the start — multi-tenant data separation, horizontal scaling capability, and modular code structure. After launch we can continue to add features, improve performance, and scale infrastructure as your user base grows.",
    },
    {
      question: "Do you help with go-to-market after launch?",
      answer:
        "We provide technical launch support — deployment, monitoring setup, and fixing any launch-day issues. We also help with landing page optimisation and SEO basics. We're a development team, not a marketing agency, so comprehensive go-to-market strategy is outside our scope — but we'll connect you with the right people if needed.",
    },
  ],
};
