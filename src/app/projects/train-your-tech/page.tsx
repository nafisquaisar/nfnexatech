import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import TrainYourTechClient from "./TrainYourTechClient";

/* ── SEO Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Train Your Tech — AI-Powered Placement Platform Case Study | NF Nexa Tech",
  description:
    "How NF Nexa Tech built Train Your Tech — an AI-powered EdTech SaaS platform with mock interviews, resume analyzer, job portal, course management, and online tests using Spring Boot, React, Firebase, and MySQL.",
  alternates: {
    canonical: `${siteConfig.url}/projects/train-your-tech`,
  },
  openGraph: {
    title: "Train Your Tech Case Study | NF Nexa Tech",
    description:
      "AI-Powered Placement Preparation Platform — Spring Boot, React, Firebase, MySQL, AI Integration.",
    url: `${siteConfig.url}/projects/train-your-tech`,
    type: "article",
    images: [{ url: `${siteConfig.url}/images/projects/trainyourtech/landing.png`, width: 1200, height: 630 }],
  },
};

/* ── Static data ─────────────────────────────────────────── */
export const tytData = {
  slug: "train-your-tech",
  title: "Train Your Tech",
  subtitle: "AI-Powered Placement Preparation Platform",
  category: "SaaS Platform",
  color: "#a855f7",
  colorRgb: "168,85,247",
  liveUrl: null,

  meta: [
    { icon: "🌐", label: "Platform", value: "Web (React + Spring Boot)" },
    { icon: "⏱️", label: "Timeline", value: "4 Months" },
    { icon: "🏭", label: "Industry", value: "EdTech" },
    { icon: "👥", label: "Users", value: "500+ Beta Students" },
    { icon: "💼", label: "Type", value: "Enterprise SaaS" },
    { icon: "🤖", label: "AI", value: "Interview + Resume AI" },
  ],

  overview:
    "Train Your Tech is an end-to-end placement preparation SaaS platform for engineering students and fresh graduates. Combining AI mock interviews, resume analysis, job portal aggregation, online test infrastructure, and course management into a single cohesive system — built on Spring Boot + MySQL backend with a React frontend and Firebase for real-time features and auth.",

  problem: {
    heading: "Problem Statement",
    body: "Engineering students preparing for placements face a fragmented ecosystem — YouTube for learning, LeetCode for coding, Google Docs for resumes, LinkedIn for jobs, and WhatsApp for mock interviews. None of these are integrated or personalised, and no single platform addresses the complete placement journey from learning to job offer.",
    points: [
      "Fragmented tools with no unified placement preparation system",
      "No AI-powered interview practice with real-time feedback",
      "Resume optimization is manual and lacks ATS scoring",
      "Job search is scattered across multiple platforms with no aggregation",
      "No structured online assessment system for skill verification",
    ],
  },

  solution: {
    heading: "The Solution",
    body: "We built a comprehensive SaaS platform that unifies every step of the placement journey. An AI interview engine generates role-specific questions and evaluates responses. A resume analyzer provides ATS scores and keyword suggestions. A job portal aggregates listings from multiple sources. A course system, test engine, and admin dashboard complete the ecosystem.",
    points: [
      "AI Mock Interview with dynamic question generation and NLP response scoring",
      "Resume Analyzer with ATS score, keyword gaps, and rewrite suggestions",
      "Job Portal aggregating listings from multiple sources in one searchable feed",
      "Online Test Platform with anti-cheating, timer, and auto-evaluation",
      "Full Course Management System with video content and progress tracking",
    ],
  },

  modules: [
    { icon: "🔐", name: "Authentication", desc: "Firebase Auth with role-based access — Student, Admin, and Instructor tiers with JWT session management." },
    { icon: "📚", name: "Course Management", desc: "Video-based course system with chapters, progress tracking, and completion certificates." },
    { icon: "🤖", name: "AI Mock Interviews", desc: "LLM-powered interview engine generating contextual technical and HR questions with multi-factor response scoring." },
    { icon: "📄", name: "Resume Analyzer", desc: "ATS compatibility scoring with section-level feedback, keyword gap analysis, and AI rewrite suggestions." },
    { icon: "💼", name: "Job Portal", desc: "Aggregated job listings with one-click apply, filters by role/location/company, and application tracking." },
    { icon: "📝", name: "Online Tests", desc: "Timed assessments with browser-lock anti-cheating, auto-evaluation, and detailed result reports." },
    { icon: "💳", name: "Billing & Plans", desc: "Subscription management with plan tiers, payment processing, and feature gating." },
    { icon: "📊", name: "Admin Dashboard", desc: "Full content management, student analytics, test management, and platform health monitoring." },
  ],

  screenshots: [
    { src: "/images/projects/trainyourtech/landing.png", label: "Landing Page", desc: "Conversion-focused hero with feature highlights and social proof" },
    { src: "/images/projects/trainyourtech/dashboard.png", label: "Student Dashboard", desc: "Unified dashboard showing preparation progress, upcoming interviews, and job applications" },
  ],

  architecture: [
    { layer: "Frontend", tech: "React", icon: "⚛️", color: "#61dafb", desc: "Component-based SPA with Axios API calls, React Router, and context-based state management." },
    { layer: "Backend", tech: "Spring Boot", icon: "🌱", color: "#6db33f", desc: "RESTful microservices with Spring Security, JWT validation, and modular service architecture." },
    { layer: "Database", tech: "MySQL", icon: "🗄️", color: "#00618a", desc: "Relational database for persistent data — users, courses, tests, results, and job applications." },
    { layer: "Cloud & Auth", tech: "Firebase", icon: "🔥", color: "#ffa000", desc: "Firebase Authentication, Firestore for real-time notifications, and Cloud Messaging for alerts." },
    { layer: "AI Engine", tech: "Interview Assistant", icon: "🤖", color: "#a855f7", desc: "LLM integration with structured prompt engineering for role-specific question generation and NLP-based response evaluation." },
    { layer: "Infrastructure", tech: "Docker", icon: "🐳", color: "#2496ed", desc: "Containerized backend services with Docker Compose for local development and cloud-ready production deployment." },
  ],

  results: [
    { value: 500, suffix: "+", label: "Beta Students" },
    { value: 8, suffix: "+", label: "Core Modules" },
    { value: 89, suffix: "%", label: "AI Feedback Satisfaction" },
    { value: 3, suffix: ".2×", label: "Weekly Sessions / Student" },
  ],

  timeline: [
    { phase: "01", title: "Architecture & Auth", duration: "Month 1", desc: "System design, database schema, Spring Boot API scaffold, Firebase Auth integration, and student/admin dashboards." },
    { phase: "02", title: "Course & Test Platform", duration: "Month 2–3", desc: "Video course management with chapter system, progress tracking, and the full online test engine with anti-cheating." },
    { phase: "03", title: "AI Interview Module", duration: "Month 3–4", desc: "LLM prompt engineering, question generation API, response evaluation pipeline, and student feedback UI." },
    { phase: "04", title: "Resume Analyzer", duration: "Month 4", desc: "ATS scoring engine, keyword gap analysis, section-level recommendations, and PDF parsing pipeline." },
    { phase: "05", title: "Job Portal & Profile", duration: "Month 4–5", desc: "Job listing aggregation, search and filter system, application tracking, and student profile with placement-readiness score." },
    { phase: "06", title: "Billing, QA & Launch", duration: "Month 5–6", desc: "Subscription system, payment integration, full QA cycle with 50+ beta students, performance optimization, and production deployment." },
  ],

  techStack: [
    { name: "React", category: "Frontend", icon: "⚛️", desc: "Component-driven SPA with hooks, context, and Axios-based API communication." },
    { name: "Spring Boot", category: "Backend", icon: "🌱", desc: "RESTful API with Spring Security, JWT auth, and modular service layer." },
    { name: "MySQL", category: "Database", icon: "🗄️", desc: "Relational database handling all persistent entities with optimized queries." },
    { name: "Firebase", category: "Cloud", icon: "🔥", desc: "Authentication, real-time notifications, Firestore, and Cloud Messaging." },
    { name: "AI Integration", category: "AI Engine", icon: "🤖", desc: "LLM-based interview question generation and NLP response scoring." },
    { name: "Docker", category: "Infrastructure", icon: "🐳", desc: "Container-based deployment with Docker Compose for all services." },
    { name: "REST API", category: "API Layer", icon: "🔌", desc: "Well-structured RESTful endpoints with Swagger documentation." },
    { name: "JWT Auth", category: "Security", icon: "🔐", desc: "Token-based authentication with refresh token rotation and role gating." },
  ],
};

/* ── Page (RSC shell) ────────────────────────────────────── */
export default function TrainYourTechPage() {
  return <TrainYourTechClient data={tytData} />;
}
