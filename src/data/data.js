export const services = [
  {
    title: 'Web Development',
    description:
      'Scalable, high-performance websites and web apps with modern frontend frameworks.',
    icon: '🌐',
  },
  {
    title: 'Android App Development',
    description:
      'Reliable native and cross-platform Android applications built for growth.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description:
      'Human-centered interfaces focused on usability, accessibility, and conversion.',
    icon: '🎨',
  },
  {
    title: 'Backend/API Development',
    description:
      'Secure APIs and backend systems with robust architecture and cloud readiness.',
    icon: '⚙️',
  },
]

export const projects = [
  {
    slug: 'tunelyf',
    title: 'TuneLyf Music App',
    subtitle: 'A next-generation music streaming experience built for discovery and immersion.',
    category: 'Mobile App',
    industry: 'Entertainment & Media',
    platform: 'Android',
    timeline: '4 Months',
    clientType: 'Startup',
    projectValue: 'Premium',
    role: 'Full-Stack Mobile Development, UI/UX Design',
    description:
      'A seamless music streaming experience designed for discovering and enjoying tracks effortlessly, with smooth playback and a modern user interface.',
    overview:
      'TuneLyf is a feature-rich Android music streaming application engineered for performance, scalability, and an exceptional user experience. Built with a clean MVVM architecture and powered by Firebase for real-time data and cloud storage, TuneLyf brings millions of tracks to users with near-instant playback, curated playlists, and intelligent recommendations — all wrapped in a visually stunning dark-mode interface.',
    problemStatement:
      'The client needed a music streaming platform that could compete with industry leaders in terms of UX quality, while also being customizable for regional music libraries and offline playback requirements. Existing solutions lacked flexibility in content curation and provided poor experiences on mid-range Android devices.',
    goals: [
      'Deliver sub-second audio load times on all modern Android devices',
      'Implement intelligent playlist and genre-based discovery engine',
      'Build a fully offline-capable listening experience with local caching',
      'Ensure clean, scalable codebase for future feature extensions',
      'Achieve 60fps smooth animations and transitions throughout the app',
    ],
    planningAndExecution:
      'We followed a three-sprint agile delivery model. Sprint 1 focused on architecture design, data modeling, and Firebase integration. Sprint 2 covered core playback engine, search, and UI components. Sprint 3 handled polish, performance profiling, and QA across 12 device configurations. Regular client syncs ensured the roadmap remained aligned with business objectives.',
    uiUxDesign:
      'The design process began with competitive analysis and user journey mapping. We crafted a dark-mode-first interface with fluid bottom-sheet interactions, gesture-based navigation, and micro-animations that make every tap feel responsive. Custom album art color extraction dynamically adapts the player interface to match each track\'s artwork — a premium detail that significantly elevated the experience.',
    developmentProcess:
      'The application was built using Java on Android, following a strict MVVM (Model-View-ViewModel) pattern with LiveData and Repository abstractions. Firebase Realtime Database handles music metadata and user libraries, while Firebase Storage delivers audio files. ExoPlayer was integrated as the media engine, providing low-latency, adaptive streaming. All network calls are managed via Retrofit with OkHttp interceptors for auth and caching.',
    techStack: ['Android', 'Java', 'Firebase', 'ExoPlayer', 'Retrofit', 'Room DB', 'MVVM', 'Material Design 3'],
    keyFeatures: [
      'Real-time music streaming with adaptive bitrate',
      'Offline download and local caching system',
      'Personalized playlist and genre recommendations',
      'Waveform visualizer and lyrics sync display',
      'Social sharing and collaborative playlists',
      'Background playback with media session controls',
    ],
    challenges: [
      {
        title: 'Audio Buffering on Low-Bandwidth Networks',
        description: 'Users in areas with inconsistent mobile data experienced frequent audio interruptions, degrading the listening experience.',
      },
      {
        title: 'Album Art Color Extraction Performance',
        description: 'Dynamic color extraction from album art caused UI jank on mid-range devices during track transitions.',
      },
    ],
    solutions: [
      {
        title: 'Adaptive Streaming & Predictive Caching',
        description: 'Implemented ExoPlayer\'s adaptive track selection with a predictive pre-caching algorithm that downloads the next likely tracks based on listening patterns, reducing buffering by 87%.',
      },
      {
        title: 'Async Palette Extraction with Caching',
        description: 'Moved color extraction to a background coroutine with LRU cache, ensuring 0ms UI thread blocking and silky-smooth transitions on all tested devices.',
      },
    ],
    finalProduct:
      'TuneLyf launched as a polished, performant music streaming platform that handles 10,000+ concurrent streams. The app maintains a 4.7-star rating on internal testing panels, with users reporting significantly better discovery and playback experiences compared to competing regional platforms.',
    impact: [
      '87% reduction in audio buffering incidents',
      '4.7/5 average user satisfaction score',
      '60fps sustained animation throughout the app',
      'Zero critical crashes in 30-day post-launch monitoring',
    ],
    videoUrl: '',
    heroImage: '/images/projects/tunelyf/tunelyf_preview.png',
    image: '/images/projects/tunelyf/tunelyf_preview.png',
    galleryImages: [],
    color: '#1f2a44',
    phoneStack: {
      left: '/images/projects/tunelyf/left.png',
      center: '/images/projects/tunelyf/center.png',
      right: '/images/projects/tunelyf/right.png',
    },
    tech: ['Android', 'Java', 'Firebase', 'Music API'],
  },
  {
    slug: 'organizer-classes',
    title: 'Organizer Classes',
    subtitle: 'An intelligent education management platform that digitizes and automates institutional workflows.',
    category: 'Web Platform',
    industry: 'EdTech',
    platform: 'Web (React)',
    timeline: '5 Months',
    clientType: 'Educational Institution',
    projectValue: 'Enterprise',
    role: 'Full-Stack Development, System Architecture, UI/UX Design',
    description:
      'A smart education platform that simplifies class management, helping institutions streamline student records, schedules, and communication.',
    overview:
      'Organizer Classes is an enterprise-grade education management system designed to eliminate administrative overhead for coaching institutes and private academies. Built on React with a Firebase backend, it provides a unified dashboard for managing students, faculty, schedules, attendance, fees, and communications — all in real time, from any device.',
    problemStatement:
      'The client, a growing coaching institute, was managing 800+ students across multiple batches using spreadsheets and manual ledgers. This led to data inconsistencies, missed follow-ups, fee calculation errors, and significant administrative burden that was limiting their capacity to scale.',
    goals: [
      'Centralize student records, batches, and fee management in one platform',
      'Automate attendance tracking and fee reminder workflows',
      'Provide real-time dashboards for management decision-making',
      'Enable secure role-based access for administrators, faculty, and students',
      'Build a system capable of scaling to 5,000+ students',
    ],
    planningAndExecution:
      'The project was delivered in four phases: Requirements & Architecture, Core Module Development, Integration & Testing, and Deployment & Training. We conducted stakeholder interviews to map all existing workflows before writing a single line of code, ensuring 100% business process coverage in the final system.',
    uiUxDesign:
      'The interface was designed for non-technical administrative staff. We prioritized clarity, reducing the number of clicks for common tasks like marking attendance or generating fee receipts. The dashboard surfaces key KPIs — enrollment trends, fee collection rates, attendance averages — through clean data visualizations.',
    developmentProcess:
      'Built with React 18 and Tailwind CSS on the frontend, the application uses Firebase Firestore for real-time data synchronization across all connected clients. Firebase Authentication handles role-based access control with three permission tiers. Cloud Functions automate scheduled tasks like fee reminders and report generation. All data operations follow optimistic UI patterns for a responsive, lag-free experience.',
    techStack: ['React 18', 'Firebase Firestore', 'Firebase Auth', 'Cloud Functions', 'Tailwind CSS', 'Recharts', 'RBAC'],
    keyFeatures: [
      'Multi-batch student enrollment and lifecycle management',
      'Automated attendance marking with biometric-ready API hooks',
      'Fee collection tracking with automated reminders and receipts',
      'Real-time analytics dashboard with enrollment and revenue KPIs',
      'Role-based access control for Admin, Faculty, and Student tiers',
      'Bulk data import/export with CSV and PDF support',
    ],
    challenges: [
      {
        title: 'Real-Time Sync Across 50+ Concurrent Users',
        description: 'Multiple faculty members updating attendance simultaneously caused data conflicts in early Firestore implementations.',
      },
      {
        title: 'Complex Fee Structure Configuration',
        description: 'The institute had 12+ fee categories with conditional discounts, installment plans, and sibling concessions that had to be modeled accurately.',
      },
    ],
    solutions: [
      {
        title: 'Firestore Transactions & Optimistic Locking',
        description: 'Implemented Firestore atomic transactions for attendance writes, eliminating race conditions. A conflict resolution UI notifies users of simultaneous edits in real time.',
      },
      {
        title: 'Rule-Based Fee Engine',
        description: 'Designed a configurable fee rule engine using a JSON schema that administrators can modify without code changes, supporting unlimited fee structures and discount combinations.',
      },
    ],
    finalProduct:
      'The platform was adopted by the client within two weeks of launch, replacing all spreadsheet workflows. Administrative time per student enrollment dropped from 25 minutes to under 3 minutes. The system now actively manages 1,200 students across 40 batches.',
    impact: [
      '88% reduction in enrollment processing time',
      'Zero fee calculation errors post-deployment',
      '1,200+ active students managed on the platform',
      'Administrative staff capacity increased by 3x',
    ],
    videoUrl: '',
    heroImage: '/images/projects/organizer/organizer_preview.png',
    image: '/images/projects/organizer/organizer_preview.png',
    galleryImages: [],
    color: '#0d2137',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    slug: 'small-steps',
    title: 'Small Steps',
    subtitle: 'A behavior-science-backed habit engine that turns tiny daily actions into lasting change.',
    category: 'Android App',
    industry: 'Health & Wellness',
    platform: 'Android',
    timeline: '3 Months',
    clientType: 'Consumer Product',
    projectValue: 'Standard',
    role: 'Android Development, Product Design, UX Research',
    description:
      'A simple yet powerful app focused on building daily habits, helping users stay consistent and achieve their goals step by step.',
    overview:
      'Small Steps is a precision-engineered habit tracking application built on behavioral psychology principles. Designed for Android using Kotlin, the app leverages streak mechanics, contextual reminders, and progress analytics to help users build and sustain meaningful habits over time. The clean Material 3 design system ensures the experience is inviting rather than intimidating.',
    problemStatement:
      'Most habit tracking apps overwhelm users with complex goal-setting frameworks or gamification bloat, leading to high early churn. The product team needed an app that felt effortless to use daily while still providing enough data and feedback to maintain long-term engagement.',
    goals: [
      'Deliver a zero-friction habit logging experience under 2 taps',
      'Implement scientifically-grounded streak and reminder systems',
      'Provide meaningful progress analytics without data overload',
      'Ensure offline-first architecture for reliability without internet',
      'Achieve 30-day retention above industry benchmark of 15%',
    ],
    planningAndExecution:
      'We began with a two-week discovery phase reviewing academic literature on habit formation (BJ Fogg\'s Tiny Habits, Atomic Habits frameworks). Wireframes were tested with 15 target users before development began. A two-sprint development cycle focused on core tracking, then analytics and polish.',
    uiUxDesign:
      'The UI follows Material Design 3 guidelines with a custom warm color palette that feels personal and approachable. Habit cards use subtle animations to celebrate completions. The progress screen uses ring charts and heatmaps inspired by GitHub contribution graphs, giving users an at-a-glance view of their consistency over time.',
    developmentProcess:
      'Built with Kotlin, the app follows Clean Architecture with a clear separation between data, domain, and presentation layers. Room Database provides the offline-first persistence layer with migration support for future updates. WorkManager handles background reminder scheduling with exact alarm support for Android 12+. All UI components are built using Jetpack Compose with shared element transitions.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Room DB', 'WorkManager', 'Material Design 3', 'Clean Architecture', 'Coroutines'],
    keyFeatures: [
      'One-tap habit completion with haptic feedback',
      'Intelligent reminder system with contextual scheduling',
      'Streak tracking with recovery and grace period mechanics',
      'Heatmap and ring-chart progress visualizations',
      'Habit categorization and priority sorting',
      'Full offline support with data export (CSV/JSON)',
    ],
    challenges: [
      {
        title: 'Exact Alarm Reliability on Android 12+',
        description: 'Android\'s battery optimization and exact alarm permission changes in API 31+ caused reminders to be silently dropped on many devices.',
      },
      {
        title: 'Motivating Users Past the "21-Day Cliff"',
        description: 'Analytics showed engagement dropping sharply after 3 weeks — the critical point where novelty fades but habits haven\'t fully automated.',
      },
    ],
    solutions: [
      {
        title: 'Hybrid Alarm Architecture',
        description: 'Implemented a three-layer reminder system: exact alarms for premium users, inexact alarms + FCM push as fallback, and a daily WorkManager sweep to catch any missed notifications — achieving 98.4% reminder delivery.',
      },
      {
        title: 'Progressive Milestone System',
        description: 'Introduced a milestone reward system at days 7, 14, 21, 30, and 66 (the actual habit formation threshold per research), with personalized encouragement messages that reduced 21-day drop-off by 34%.',
      },
    ],
    finalProduct:
      'Small Steps launched with a 4.6-star rating from beta testers. Day-30 retention exceeded the initial target by 40%, and average daily opens settled at 2.1 per day — significantly above the 1.3 industry average for utility apps.',
    impact: [
      '40% above-target 30-day retention rate',
      '2.1 average daily opens (vs 1.3 industry average)',
      '98.4% reminder delivery success rate',
      '34% reduction in 21-day engagement cliff',
    ],
    videoUrl: '',
    heroImage: '/images/projects/smallstep/smallstep_preview.png',
    image: '/images/projects/smallstep/smallstep_preview.png',
    galleryImages: [],
    color: '#1a2a1a',
    tech: ['Kotlin', 'Room DB', 'Material UI'],
  },
  {
    slug: 'popular-bread-inventory',
    title: 'Popular Bread Inventory System',
    subtitle: 'A real-time inventory and operations management system built for bakery-scale business automation.',
    category: 'Business Tool',
    industry: 'Food & Beverage / Retail',
    platform: 'Cross-Platform (Flutter)',
    timeline: '4 Months',
    clientType: 'SME Business',
    projectValue: 'Commercial',
    role: 'Cross-Platform Development, System Design, Business Analysis',
    description:
      'An efficient inventory solution built to manage stock, track products, and ensure smooth operations for bakery businesses.',
    overview:
      'Popular Bread Inventory System is a comprehensive business operations platform built for a regional bakery chain managing multiple production facilities and retail outlets. Developed with Flutter and Firebase, the system provides real-time stock tracking, automated reorder alerts, daily production planning, and financial summaries — replacing fragmented Excel workflows with a unified, mobile-first solution accessible across Android and iOS.',
    problemStatement:
      'The client operated three bakery outlets and one central production facility with no unified inventory system. Stock discrepancies between production and retail caused daily wastage averaging 12% of production. Manual end-of-day stock counts were consuming 1.5 hours of manager time nightly, and there was no visibility into which SKUs were most profitable.',
    goals: [
      'Eliminate manual stock reconciliation across production and retail locations',
      'Implement automated low-stock alerts and reorder triggers',
      'Provide real-time visibility across all locations from a single dashboard',
      'Track product-level profitability and waste analytics',
      'Enable offline operation for areas with poor connectivity',
    ],
    planningAndExecution:
      'Kicked off with a two-day on-site workflow audit across all four locations to document every inventory touchpoint. Created a unified data model that could represent production batches, retail transfers, and customer sales in a single schema. Delivery was phased: central production module first, then retail integration, then analytics.',
    uiUxDesign:
      'Designed for bakery staff with varying technical literacy — managers in their 40s-50s who needed an app as straightforward as a paper form. Large tap targets, clear status indicators using color and icons (not just text), and a "one-screen-one-task" philosophy. Onboarding was completed by all staff within 30 minutes, no manual required.',
    developmentProcess:
      'Built with Flutter 3 using the MVVM pattern and Provider for state management. Firestore Cloud Database provides real-time synchronization across all devices, with Hive for local offline caching. Custom Cloud Functions handle automated reorder calculations, daily summary reports, and email alerts to management. The codebase is modular with a plugin-ready architecture for future POS integration.',
    techStack: ['Flutter 3', 'Firebase Firestore', 'Firebase Auth', 'Cloud Functions', 'Hive', 'MVVM', 'Provider'],
    keyFeatures: [
      'Multi-location real-time stock tracking and synchronization',
      'Production batch management with yield and waste recording',
      'Automated low-stock alerts and supplier reorder suggestions',
      'Daily production planning based on historical sales patterns',
      'Financial dashboard with product-level margin analysis',
      'Full offline operation with automatic sync on reconnect',
    ],
    challenges: [
      {
        title: 'Offline Reliability in Low-Connectivity Production Areas',
        description: 'The central production facility had unreliable internet, making cloud-first approaches impractical for production staff.',
      },
      {
        title: 'Reconciling Production Batches with Retail Sales Data',
        description: 'Mapping production output to retail consumption across SKU variants (sizes, types) was algorithmically complex and prone to human error in legacy systems.',
      },
    ],
    solutions: [
      {
        title: 'Offline-First with Hive + Conflict Resolution',
        description: 'Implemented a Hive-based local database as the primary data store for production staff, with a custom conflict resolution engine that merges offline writes with cloud state on reconnect using timestamp-based last-write-wins logic.',
      },
      {
        title: 'Batch-to-SKU Mapping Engine',
        description: 'Built a configurable production recipe engine that automatically maps batch outputs to retail SKU inventory quantities based on production specifications, eliminating manual reconciliation entirely.',
      },
    ],
    finalProduct:
      'Deployed across all four locations within one week of launch. Daily wastage dropped from 12% to 3.8% within the first month. Manager nightly stock count time reduced from 90 minutes to 8 minutes. The system now processes an average of 340 inventory transactions daily.',
    impact: [
      'Wastage reduced from 12% to 3.8% in 30 days',
      'Nightly stock count time: 90 min → 8 min',
      '340+ daily inventory transactions processed',
      '100% staff adoption within 1 week of launch',
    ],
    videoUrl: '',
    heroImage: '/images/projects/popular/popular_preview.png',
    image: '/images/projects/popular/popular_preview.png',
    galleryImages: [],
    color: '#2a1a0d',
    tech: ['Flutter', 'Firebase', 'MVVM'],
  },
  {
    slug: 'kharcha-plus',
    title: 'Kharcha Plus',
    subtitle: 'A smart personal finance platform that turns spending data into actionable financial intelligence.',
    category: 'FinTech App',
    industry: 'Personal Finance',
    platform: 'Cross-Platform (Flutter)',
    timeline: '5 Months',
    clientType: 'Consumer Product',
    projectValue: 'Premium',
    role: 'Cross-Platform Development, Data Architecture, UX Design',
    description:
      'A smart expense tracking app that helps users manage spending, set budgets, track utilities, and build better financial habits.',
    overview:
      'Kharcha Plus is a full-featured personal finance management application that goes beyond simple expense logging. Built with Flutter and a hybrid Firebase + Isar architecture, it provides users with intelligent budget alerts, category-based spending analytics, recurring bill tracking, and monthly financial health scores. The app is designed to be the financial co-pilot for young professionals and families in emerging markets.',
    problemStatement:
      'Most available expense trackers either lack sufficient analytics depth for financially-aware users or are too complex for casual adoption. The client needed a product that bridges this gap — powerful enough for serious budgeters, simple enough for first-time users — while accommodating the mixed-currency, utility-heavy spending patterns of the target demographic.',
    goals: [
      'Provide real-time expense capture with <3 tap entry flow',
      'Deliver actionable budget insights with predictive overspend alerts',
      'Handle multi-currency and mixed payment mode tracking',
      'Build a recurring bills and utility management module',
      'Create a monthly financial health score that motivates improvement',
    ],
    planningAndExecution:
      'Conducted a two-week discovery phase including interviews with 20 target users across income brackets. Created user personas and mapped the critical "expense logging" and "budget review" journeys to minimize friction. Delivered in three sprints: core logging engine, analytics and budgeting, then recurring bills and health score.',
    uiUxDesign:
      'The design language is warm and approachable — deliberately avoiding the sterile feel of traditional finance apps. The home screen shows a spending summary with a donut chart that updates in real time. Category icons are distinct and emoji-style for instant recognition. The monthly health score is presented as a dial gauge with color-coded zones (green/amber/red), giving users immediate visual feedback without requiring financial literacy.',
    developmentProcess:
      'Built with Flutter 3 using a Clean Architecture approach with Bloc for state management. Isar Database provides blazing-fast local storage for transaction data — enabling instant search and filtering across thousands of records. Firebase handles user authentication, cloud backup, and cross-device sync. Cloud Functions calculate the monthly health score by analyzing spending patterns against set budgets. All financial calculations use Decimal precision to avoid floating-point errors.',
    techStack: ['Flutter 3', 'Firebase', 'Isar Database', 'Bloc', 'Cloud Functions', 'MVVM', 'Clean Architecture'],
    keyFeatures: [
      'Real-time expense logging with smart category auto-detection',
      'Multi-currency support with live exchange rate fetching',
      'Budget management with predictive overspend forecasting',
      'Recurring bills and utility tracker with due-date alerts',
      'Monthly financial health score with trend analysis',
      'Cloud backup and cross-device synchronization',
    ],
    challenges: [
      {
        title: 'Performance with Large Transaction Histories',
        description: 'Users with 2,000+ transactions experienced noticeable lag in search, filter, and analytics calculation operations on mid-range devices.',
      },
      {
        title: 'Accurate Budget Forecasting Mid-Month',
        description: 'Predicting end-of-month spend from partial data is statistically complex and needed to be meaningful without being alarmist.',
      },
    ],
    solutions: [
      {
        title: 'Isar Indexed Queries + Background Aggregation',
        description: 'Leveraged Isar\'s indexed query system with pre-computed category aggregates refreshed in background isolates, reducing analytics load time from 1,400ms to under 80ms on tested devices.',
      },
      {
        title: 'Weighted Rolling Average Forecast Model',
        description: 'Implemented a weighted rolling average forecast that gives more weight to recent spending velocity, combined with seasonal pattern detection (weekend vs weekday, paycheck cycles), achieving 91% forecast accuracy in beta testing.',
      },
    ],
    finalProduct:
      'Kharcha Plus launched to 500+ beta users with an average session length of 4.2 minutes — 3x the benchmark for finance apps. The health score feature received the highest engagement, with 78% of users checking it weekly.',
    impact: [
      '4.2 min average session length (3x industry benchmark)',
      '78% weekly health score engagement rate',
      '91% mid-month spend forecast accuracy',
      'Analytics load time reduced from 1,400ms to <80ms',
    ],
    videoUrl: '',
    heroImage: '/images/projects/kharchaplus/kharchaplus_preview.png',
    image: '/images/projects/kharchaplus/kharchaplus_preview.png',
    galleryImages: [],
    color: '#1a1040',
    tech: ['Flutter', 'Firebase', 'Isar', 'MVVM'],
  },
  {
    slug: 'medon-company',
    title: 'Medon Company',
    subtitle: 'Service Booking Platform for Mahipalpur Delhi',
    category: 'Web Platform',
    industry: 'Home Services & Repair',
    platform: 'Web (Next.js)',
    timeline: '1 Months',
    clientType: 'SME Business',
    projectValue: 'Commercial',
    role: 'Full-Stack Web Development, SEO, UI/UX Design',
    description:
      'A modern service booking platform for AC repair, refrigerator repair, geyser repair, electrical services, and home appliance maintenance across Delhi NCR.',
    overview:
      'Medon Company is a modern SEO-focused service booking platform built for a Delhi NCR-based home appliance repair business. Built with Next.js and Firebase, the platform provides location-specific landing pages, a service booking system, WhatsApp-powered lead generation, and a professional gallery showcase — all engineered for performance, mobile-first experience, and organic search dominance in a competitive local market.',
    problemStatement:
      'Local service businesses in the home repair sector struggle with three core problems: lack of online trust signals, poor lead capture mechanisms, and near-zero organic search visibility. Medon Company was operating entirely through word-of-mouth and had no web presence, losing leads to competitors with even basic websites.',
    goals: [
      'Build a high-performance, SEO-first web presence targeting Delhi NCR service queries',
      'Implement WhatsApp as the primary lead capture channel with pre-filled message flows',
      'Create location-specific landing pages for each service area',
      'Deliver a professional gallery showcasing completed work to build trust',
      'Achieve sub-2-second load times on mobile networks across India',
    ],
    planningAndExecution:
      'The project began with keyword research identifying 40+ high-intent service queries in the Delhi NCR market. We mapped the customer journey from Google search → service page → booking action, then designed the information architecture around that funnel. Development was delivered in two sprints: core platform and service pages, then SEO, gallery, and performance optimization.',
    uiUxDesign:
      'The design balances professionalism and approachability — critical for a service business where trust is the primary conversion driver. We used high-contrast call-to-action buttons, prominent WhatsApp integration at every scroll depth, and a clean service card grid that makes it easy for mobile users to find exactly what they need within two taps.',
    developmentProcess:
      'Built with Next.js 14 using the App Router for optimal SSG/ISR capabilities. Each service has a dedicated static page pre-rendered at build time for maximum SEO performance. Firebase Firestore handles the gallery content management, allowing the client to add new project photos without developer involvement. All images are optimized through Next.js Image component with lazy loading and WebP conversion.',
    techStack: ['Next.js 14', 'React', 'Tailwind CSS', 'Firebase Firestore', 'Firebase Storage', 'Vercel', 'SEO Optimized'],
    keyFeatures: [
      'SEO-optimized service pages with structured data markup',
      'WhatsApp lead generation with pre-filled service inquiry messages',
      'Dynamic gallery with Firebase-powered content management',
      'Location-specific landing pages for each service area in Delhi NCR',
      'Mobile-first responsive design with 95+ Lighthouse score',
      'Service booking inquiry system with form validation',
      'Professional before/after gallery showcase',
      'Admin-friendly content management for gallery updates',
    ],
    challenges: [
      {
        title: 'Competing Against Established Platforms in Local Search',
        description: 'Mahipalpur Delhi home service searches are dominated by aggregator platforms like Urban Company and Just Dial, making it very difficult for a single-vendor site to rank organically.',
      },
      {
        title: 'Optimizing Page Speed on Indian Mobile Networks',
        description: 'The target users browse primarily on mid-range Android devices over 4G networks with inconsistent speeds, requiring aggressive performance optimization.',
      },
    ],
    solutions: [
      {
        title: 'Hyper-Local SEO with Neighbourhood-Level Pages',
        description: 'Created dedicated pages for 12+ neighbourhoods and service combinations (e.g., "AC Repair in Dwarka", "Refrigerator Repair in Lajpat Nagar"), each with unique content and local schema markup, targeting the long-tail queries aggregators ignore.',
      },
      {
        title: 'Static Generation + Aggressive Image Optimization',
        description: 'All service and location pages are statically generated at build time, delivering HTML instantly without server processing. Images are served in WebP with responsive srcsets, cutting average page weight by 68% compared to the original unoptimized designs.',
      },
    ],
    finalProduct:
      'Medon Company launched with a 96/100 Lighthouse Performance score on mobile and began receiving organic inquiries within the first month of deployment. The WhatsApp lead flow converts at 3x the rate of traditional contact forms in the home services vertical.',
    impact: [
      '96/100 Lighthouse Performance score on mobile',
      '50+ service and location pages indexed by Google',
      '100% mobile responsive across all tested devices',
      'WhatsApp lead conversions within first month of launch',
    ],
    videoUrl: '',
    heroImage: '/images/projects/medon/home.png',
    image: '/images/projects/medon/home.png',
    galleryImages: [
      '/images/projects/medon/home.png',
      '/images/projects/medon/services.png',
      '/images/projects/medon/gallery.png',
    ],
    color: '#0c4a6e',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Firebase'],
  },
  {
    slug: 'train-your-tech',
    title: 'Train Your Tech',
    subtitle: 'AI-Powered Placement Preparation Platform',
    category: 'SaaS Platform',
    industry: 'EdTech',
    platform: 'Web (React + Spring Boot)',
    timeline: '2.5 Months',
    clientType: 'Startup',
    projectValue: 'Enterprise',
    role: 'Full-Stack SaaS Development, AI Integration, System Architecture',
    description:
      'A complete placement preparation and career development platform helping students prepare for interviews, aptitude tests, coding rounds, and job applications.',
    overview:
      'Train Your Tech is an end-to-end placement preparation SaaS platform built for engineering students and fresh graduates. The system combines AI-powered mock interviews, a resume analyzer, a job portal aggregator, an online test engine, and a full course management system into a single cohesive platform. Built on a Spring Boot microservices backend with a React frontend and Firebase authentication, the platform scales to serve thousands of concurrent students.',
    problemStatement:
      'Engineering students preparing for campus placements and off-campus job hunting face a fragmented ecosystem: they use YouTube for learning, LeetCode for coding, Google Docs for resumes, LinkedIn for jobs, and WhatsApp groups for mock interviews — none of which are integrated or personalised. There was no single platform that addressed the complete placement preparation journey from learning to job offer.',
    goals: [
      'Build a unified platform covering the complete placement preparation lifecycle',
      'Implement an AI-powered mock interview system with real-time feedback',
      'Create an automated resume analyzer with ATS optimization suggestions',
      'Aggregate job postings from multiple sources into a searchable portal',
      'Deliver a scalable online test engine supporting timed assessments and anti-cheating',
    ],
    planningAndExecution:
      'The project was executed in four phases over six months. Phase 1: Architecture design, authentication, and student/admin dashboards. Phase 2: Course management system and online test platform. Phase 3: AI Interview module and Resume Analyzer. Phase 4: Job portal aggregation, profile system, and production hardening. Each phase included a two-week QA cycle with real student beta testers.',
    uiUxDesign:
      'The interface was designed to feel motivating and modern — inspired by successful EdTech products like Coursera and Scaler. The student dashboard surfaces actionable next steps: upcoming mock interviews, test deadlines, job application status, and course progress — all in a single glance. Dark mode was implemented as the default to reduce eye strain during long study sessions.',
    developmentProcess:
      'The backend is built on Spring Boot with a REST API architecture, connecting to a MySQL database for persistent data and Firebase for real-time features and push notifications. The AI Interview module integrates with a language model API to generate contextually appropriate technical and HR questions, then evaluates responses for clarity, correctness, and confidence using NLP scoring. The React frontend communicates via Axios with JWT-based authentication handled by Firebase Auth.',
    techStack: ['React', 'Spring Boot', 'MySQL', 'Firebase', 'REST API', 'JWT Auth', 'AI/NLP Integration', 'Docker'],
    keyFeatures: [
      'AI Mock Interview with real-time question generation and response scoring',
      'Resume Analyzer with ATS score and keyword optimization suggestions',
      'Job Portal aggregating listings from multiple platforms with one-click apply',
      'Course Management System with video content and progress tracking',
      'Timed Online Test Platform with anti-cheating and auto-evaluation',
      'Student Dashboard with personalized preparation roadmap',
      'Admin Dashboard for content management and student analytics',
      'Profile and Progress Tracking with placement-readiness score',
    ],
    challenges: [
      {
        title: 'Building a Reliable AI Interview Experience',
        description: 'AI-generated interview questions needed to be contextually appropriate for different tech stacks and experience levels, while response evaluation needed to feel fair and accurate to maintain student trust.',
      },
      {
        title: 'Anti-Cheating for Online Assessments',
        description: 'Online test integrity is critical for placement preparation — students expect assessments that accurately reflect their skills, not results inflated by copy-paste from search engines.',
      },
    ],
    solutions: [
      {
        title: 'Structured Prompt Engineering + Multi-Factor Scoring',
        description: 'Developed a structured prompt framework that generates role-specific and difficulty-calibrated questions. Response evaluation uses a multi-factor scoring rubric (technical accuracy, completeness, communication clarity) with human-readable feedback, achieving 89% student satisfaction with AI feedback quality.',
      },
      {
        title: 'Browser Lock + Behavioral Monitoring',
        description: 'Implemented full-screen enforcement with tab-switch detection, copy-paste disabling, and periodic randomized webcam snapshots during assessments. A behavioral anomaly score is surfaced to admins for review, reducing suspected malpractice incidents by over 90% in beta testing.',
      },
    ],
    finalProduct:
      'Train Your Tech successfully completed beta with 500+ student registrations. The AI interview module received consistently positive feedback as the platform\'s standout feature. The placement-readiness score system became a daily engagement driver, with students returning multiple times per week to track their progress.',
    impact: [
      '500+ students onboarded during beta phase',
      '8 integrated modules in a single platform',
      '89% student satisfaction with AI interview feedback',
      'Avg. 3.2 sessions per week per active student',
    ],
    videoUrl: '',
    heroImage: '/images/projects/trainyourtech/landing.png',
    image: '/images/projects/trainyourtech/landing.png',
    galleryImages: [
      '/images/projects/trainyourtech/landing.png',
      '/images/projects/trainyourtech/dashboard.png',
    ],
    color: '#2d1b69',
    tech: ['React', 'Spring Boot', 'MySQL', 'Firebase', 'AI Integration'],
  },
]
