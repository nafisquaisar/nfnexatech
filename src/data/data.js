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
    slug: 'nestiva-hospital',
    title: 'Nestiva Hospital',
    subtitle: 'Multi-Specialty Hospital Website',
    category: 'Healthcare',
    industry: 'Healthcare',
    platform: 'Web',
    timeline: '6 Weeks',
    clientType: 'Healthcare Provider',
    projectValue: 'Commercial',
    role: 'UI/UX Design, Website Development',
    description:
      'A hospital website designed to help patients find doctors, explore departments, check services, and request appointments easily.',
    overview:
      'Nestiva Hospital needed a website that felt trustworthy while making everyday information easy to find. We organised the experience around the things patients are most likely to look for, such as doctors, departments, facilities, emergency information, and appointments.',
    problemStatement:
      'Healthcare websites serve users with very different intentions. Some visitors may be researching a specialist, others may be comparing departments, and some may need urgent contact information. The challenge was to organise a large amount of healthcare information without making the experience feel complicated.',
    goals: [
      'Surface important healthcare journeys through clear navigation and strong calls to action',
      'Communicate professionalism and confidence appropriate for a healthcare environment',
      'Make finding doctors, departments and appointment/emergency information easy and fast',
      'Deliver a clear, usable responsive experience across desktop, tablet and mobile',
    ],
    planningAndExecution:
      'We approached Nestiva as a patient journey rather than simply a collection of hospital pages. The information architecture was built around the most common reasons a visitor arrives — finding a doctor, understanding a department, locating emergency contact, or booking an appointment. Each page decision was evaluated from the patient perspective first.',
    uiUxDesign:
      'A clean visual system using healthcare-appropriate typography, generous whitespace, teal-accented UI elements and structured content hierarchy establishes immediate professionalism. Doctors, departments, facilities, testimonials, FAQs and health resources are each given clear dedicated sections so visitors always know where they are and what to do next.',
    developmentProcess:
      'The website was built with a component-driven architecture, ensuring reusable section blocks for doctors, departments and health content. SEO metadata was implemented across all pages. Images were optimised for performance. The responsive layout was tested across mobile, tablet and desktop breakpoints.',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    keyFeatures: [
      'Doctor directory with specialist profiles',
      'Hospital departments overview',
      'Appointment booking flow',
      'Emergency contact information',
      'Patient-friendly responsive design',
    ],
    challenges: [
      {
        title: 'Complex Information Architecture',
        description: 'Doctors, departments, facilities, patient resources and healthcare content needed clear organisation without overwhelming visitors.',
      },
      {
        title: 'Trust & Credibility',
        description: 'The visual experience needed to communicate professionalism and confidence appropriate for a healthcare environment.',
      },
      {
        title: 'Fast Patient Navigation',
        description: 'Important actions such as finding doctors, viewing departments and reaching appointment or emergency information needed to be easy to locate.',
      },
      {
        title: 'Responsive Experience',
        description: 'The experience needed to remain clear and usable across desktop, tablet and mobile screens.',
      },
    ],
    solutions: [
      {
        title: 'Patient-First Information Architecture',
        description: 'Navigation and page hierarchy were built around the most common patient journeys, with departments, doctors and emergency information surfaced at every level.',
      },
      {
        title: 'Healthcare-Focused Visual Design',
        description: 'A clean, teal-accented visual system with professional typography, generous spacing and trust signals communicates credibility without visual complexity.',
      },
    ],
    finalProduct:
      'The final experience gives Nestiva a structured digital presence where patients can move from discovering healthcare services to identifying specialists and taking the next step toward care without unnecessary complexity.',
    impact: [
      'Clear healthcare information architecture for patients',
      'Stronger doctor and department discovery',
      'Prominent appointment pathways throughout the experience',
      'Visible emergency access for urgent situations',
      'Responsive patient experience across all devices',
      'Trust-focused visual design with testimonials and facility showcases',
      'Scalable structure for additional doctors, departments and health content',
    ],
    videoUrl: '',
    heroImage: '/images/projects/nestiva/nestivahome.png',
    image: '/images/projects/nestiva/nestivahome.png',
    galleryImages: [
      '/images/projects/nestiva/nestivahome.png',
      '/images/projects/nestiva/specialist.png',
      '/images/projects/nestiva/doctorpage.png',
      '/images/projects/nestiva/gallery.png',
      '/images/projects/nestiva/article.png',
    ],
    color: '#0d9488',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    featured: true,
    featuredLabel: 'Featured Healthcare Project',
    featuredSub: 'Built for modern healthcare experiences.',
    audiences: ['hospital', 'clinic', 'doctor', 'healthcare', 'medical'],
    tags: ['Healthcare', 'Web Development', 'UI/UX'],
    liveUrl: 'https://nestivahospital.vercel.app/',
  },
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
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.song.nafis.nf.TuneLyf&hl=en_IN',
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
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nafis.organizerclasses&hl=en_IN',
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
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.app.nafis.nf2024.smallsteps&hl=en_IN',
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
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nf.popularbread&hl=en_IN',
    tech: ['Flutter', 'Firebase', 'MVVM'],
  },
  {
    slug: 'kharcha-plus',
    title: 'Kharcha Plus',
    subtitle: 'A Simple App to Manage Expenses and Everyday Utilities',
    category: 'Finance & Utility',
    industry: 'Personal Finance',
    platform: 'Android (Flutter)',
    timeline: '5 Months',
    clientType: 'Consumer Product',
    projectValue: 'Commercial',
    role: 'Mobile Development, UI/UX Design',
    description:
      'An expense and utility management app that helps users track daily spending, electricity, water, food, and mess expenses in one place.',
    overview:
      'Kharcha Plus is an expense and utility management app designed to make everyday money tracking easier. Users can record their expenses, see where their money is going, and keep track of things like electricity bills, water bills, drinking water, and mess food from the same app.',
    problemStatement:
      'Managing everyday expenses can quickly become difficult when different things are tracked in different places. Small purchases, monthly bills, food expenses, and other household costs can easily be missed.',
    goals: [
      'Give users a single place for everyday expense tracking',
      'Track utility bills alongside regular spending',
      'Make spending patterns easier to understand',
      'Support food, mess, and water tracking',
      'Keep the interface simple and quick to use',
    ],
    planningAndExecution:
      'We mapped out the most common everyday expense scenarios and designed the app around those workflows — adding an expense, checking balances, reviewing bills, and tracking food or water usage.',
    uiUxDesign:
      'The design is clean and easy to use, with a dashboard that shows the most important numbers at a glance. Category-based spending views help users understand where their money goes without digging through individual entries.',
    developmentProcess:
      'Built with Flutter using Riverpod for state management and Isar for fast local data storage. Firebase handles authentication and cloud services. The app is designed to work smoothly on mid-range Android devices.',
    techStack: ['Flutter', 'Riverpod', 'Isar', 'Firebase'],
    keyFeatures: [
      'Expense Tracking',
      'Electricity Bills',
      'Water Management',
      'Food & Mess Tracking',
      'Charts & Insights',
    ],
    challenges: [
      {
        title: 'Multiple Tracking Areas in One App',
        description: 'Bringing expenses, utilities, food, and water into one app without making the interface overwhelming.',
      },
      {
        title: 'Offline-Friendly Data Access',
        description: 'Users need quick access to their records even without internet, so local storage had to be fast and reliable.',
      },
    ],
    solutions: [
      {
        title: 'Module-Based Navigation',
        description: 'Each tracking area (expenses, water, food, bills) has its own section, keeping things organized while staying accessible from the main dashboard.',
      },
      {
        title: 'Isar Local Database',
        description: 'Using Isar for local storage gives instant access to records and ensures the app feels responsive even on slower connections.',
      },
    ],
    finalProduct:
      'Kharcha Plus brings everyday expense tracking, utility management, food, and water records into a single clean app that makes daily financial information easier to manage.',
    impact: [
      '1 app for daily expenses and utilities',
      '4 main tracking areas',
      'Daily and monthly insights',
      'AI assistance planned for future',
    ],
    videoUrl: '',
    heroImage: '/images/projects/kharchaplus/kharchaplus_preview.png',
    image: '/images/projects/kharchaplus/kharchaplus_preview.png',
    galleryImages: [],
    color: '#0f9f9a',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nafis.nf.kharchaplus&hl=en_IN',
    tech: ['Flutter', 'Riverpod', 'Isar', 'Firebase'],
  },
  {
    slug: 'medon-company',
    title: 'Medon Company',
    subtitle: 'Appliance Repair & Service Booking Website',
    category: 'Web Platform',
    industry: 'Home Services & Repair',
    platform: 'Web (Next.js)',
    timeline: '1 Month',
    clientType: 'SME Business',
    projectValue: 'Commercial',
    role: 'Web Development, UI/UX Design',
    description:
      'A service website built for Medon Company to help customers find appliance repair services, explore service areas, and book a visit online.',
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
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'Vercel'],
    keyFeatures: [
      'AC Repair',
      'Appliance Repair',
      'Service Booking',
      'Local Service Areas',
      'Reviews & Testimonials',
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
      'Medon Company now has a clear online presence where customers can explore services, find their area, and get in touch through booking, phone, or WhatsApp.',
    impact: [
      '13+ service areas covered',
      '6+ service categories listed',
      'Online booking with direct contact options',
      'Responsive across all devices',
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
    liveUrl: 'https://medoncompany.in',
  },
  {
    slug: 'train-your-tech',
    title: 'Train Your Tech',
    subtitle: 'Placement Preparation Platform for Students',
    category: 'EdTech Platform',
    industry: 'EdTech',
    platform: 'Web (React + Spring Boot)',
    timeline: '6 Months',
    clientType: 'Startup',
    projectValue: 'Commercial',
    role: 'Full-Stack Development, System Design',
    description:
      'A placement preparation platform that brings courses, resume analysis, interview practice, tests, and job opportunities together for students.',
    overview:
      'Train Your Tech is a placement preparation platform built to bring learning, interview practice, resume preparation, tests, and job searching into one place. Students can create an account, access courses, work on their resumes, practice interviews through video and voice sessions, take tests, and explore job opportunities from a single dashboard.',
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
    techStack: ['React', 'Spring Boot', 'MySQL', 'Firebase', 'REST API', 'JWT'],
    keyFeatures: [
      'Courses',
      'Resume Analysis',
      'Video Interviews',
      'Voice Interviews',
      'Job Portal',
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
      'Train Your Tech brings the full placement preparation journey into one platform — courses, resume tools, interview practice, tests, and job opportunities — accessible through a single student dashboard.',
    impact: [
      '1 student platform with personal dashboard',
      '1 admin panel for content management',
      '8+ main modules in one place',
      '360° placement preparation coverage',
    ],
    videoUrl: '',
    heroImage: '/images/projects/trainyourtech/landing.png',
    image: '/images/projects/trainyourtech/landing.png',
    galleryImages: [
      '/images/projects/trainyourtech/landing.png',
      '/images/projects/trainyourtech/dashboard.png',
    ],
    color: '#a855f7',
    tech: ['React', 'Spring Boot', 'MySQL', 'Firebase'],
  },
]
