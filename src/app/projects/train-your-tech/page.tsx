import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import TrainYourTechClient from "./TrainYourTechClient";

/* ── SEO Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Train Your Tech Case Study | Placement Preparation Platform | NF Nexa Tech",
  description:
    "See how NF Nexa Tech built Train Your Tech, a placement preparation platform with courses, resume analysis, video and voice interviews, online tests, a job portal, and an admin panel.",
  alternates: {
    canonical: `${siteConfig.url}/projects/train-your-tech`,
  },
  openGraph: {
    title: "Train Your Tech Case Study | NF Nexa Tech",
    description:
      "A look at the placement preparation platform built by NF Nexa Tech for courses, resume preparation, interview practice, tests, and job opportunities.",
    url: `${siteConfig.url}/projects/train-your-tech`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/images/projects/trainyourtech/landing.png`,
        width: 1200,
        height: 630,
        alt: "Train Your Tech placement preparation platform",
      },
    ],
  },
};

/* ── Static case-study data ──────────────────────────────── */
export const tytData = {
  slug: "train-your-tech",
  title: "Train Your Tech",
  subtitle: "A Placement Preparation Platform for Students",
  category: "EdTech Platform",
  color: "#a855f7",
  colorRgb: "168,85,247",
  liveUrl: null,

  meta: [
    { icon: "globe", label: "Platform", value: "Web Platform" },
    { icon: "clock", label: "Timeline", value: "6 Months" },
    { icon: "graduation", label: "Industry", value: "Education & Placement" },
    { icon: "user", label: "Users", value: "Students & Admins" },
    { icon: "briefcase", label: "Type", value: "Placement Platform" },
    { icon: "robot", label: "Features", value: "AI & Interview Tools" },
  ],

  overview:
    "Train Your Tech is a placement preparation platform built to bring learning, interview practice, resume preparation, tests, and job searching into one place. Students can create an account, access courses, work on their resumes, practice interviews through video and voice sessions, take tests, and explore job opportunities from a single dashboard.",

  problem: {
    heading: "The Challenge",
    body: "Students often have to use different platforms for learning, resume preparation, interview practice, tests, and job searching. Moving between these tools can make the preparation process harder to manage. Train Your Tech was built to bring these parts of placement preparation together in one platform.",
    points: [
      "Learning content was spread across different platforms",
      "Students needed a simple way to practice interviews",
      "Resume preparation often required separate tools",
      "Tests and assessments needed their own system",
      "Job searching was separate from the preparation process",
    ],
  },

  solution: {
    heading: "Our Approach",
    body: "We built Train Your Tech around the student's placement journey. After logging in, students get access to courses, resume tools, interview practice, tests, and a job portal from one dashboard. An admin system was also added so the platform team can manage courses, content, jobs, tests, and other information without changing the application code.",
    points: [
      "Student login with a personal dashboard",
      "Courses and learning content in one place",
      "Resume analyzer for reviewing and improving resumes",
      "Interview practice through video calls and voice chat",
      "Job portal for browsing available opportunities",
      "Online tests and assessments",
      "Admin panel for managing and updating platform content",
    ],
  },

  modules: [
    { icon: "lock", name: "User Authentication", desc: "Students can create an account and log in to access their placement preparation tools and personal dashboard." },
    { icon: "book", name: "Courses", desc: "Students can access course content and learn from the material available on the platform." },
    { icon: "document", name: "Resume Analyzer", desc: "Students can upload their resume and use the resume analysis tools to review and improve it." },
    { icon: "video", name: "Video Interviews", desc: "Students can practice interviews through video-based interview sessions." },
    { icon: "mic", name: "Voice Interviews", desc: "Voice-based interview practice gives students another way to prepare for real interview conversations." },
    { icon: "briefcase", name: "Job Portal", desc: "Students can browse job opportunities and explore roles relevant to their career goals." },
    { icon: "test", name: "Online Tests", desc: "Students can take tests and assessments as part of their placement preparation." },
    { icon: "admin", name: "Admin Panel", desc: "Admins can manage platform content, upload new material, edit existing information, and manage different sections of the platform." },
  ],

  screenshots: [
    { src: "/images/projects/trainyourtech/landing.png", label: "Landing Page", desc: "The main page introduces Train Your Tech and the preparation tools available on the platform." },
    { src: "/images/projects/trainyourtech/dashboard.png", label: "Student Dashboard", desc: "The dashboard gives students access to their courses, resume tools, interviews, tests, and job opportunities." },
  ],

  architecture: [
    { layer: "Frontend", tech: "React", icon: "component", color: "#61dafb", desc: "Used to build the student and admin interfaces and the different sections of the platform." },
    { layer: "Backend", tech: "Spring Boot", icon: "server", color: "#6db33f", desc: "Handles the application APIs, business logic, authentication, and communication between the platform modules." },
    { layer: "Database", tech: "MySQL", icon: "database", color: "#00618a", desc: "Stores user, course, test, job, and other application data." },
    { layer: "Authentication & Cloud", tech: "Firebase", icon: "fire", color: "#ffa000", desc: "Used for authentication and selected real-time or cloud features." },
    { layer: "AI Features", tech: "AI Integration", icon: "robot", color: "#a855f7", desc: "Used in features such as resume analysis and interview-related functionality." },
  ],

  results: [
    { value: "1", suffix: "", label: "Student Platform" },
    { value: "1", suffix: "", label: "Admin Panel" },
    { value: "8", suffix: "+", label: "Main Modules" },
    { value: "360\u00B0", suffix: "", label: "Placement Preparation" },
  ],

  timeline: [
    { phase: "01", title: "Planning & Architecture", desc: "We planned the student journey, admin workflow, database structure, and the main modules of the platform." },
    { phase: "02", title: "Authentication & Dashboard", desc: "The login system and student dashboard were built as the starting point for the platform." },
    { phase: "03", title: "Courses & Tests", desc: "Course content, learning sections, and online tests were added to the student experience." },
    { phase: "04", title: "Resume & Interview Tools", desc: "Resume analysis and video and voice interview features were added for placement practice." },
    { phase: "05", title: "Job Portal", desc: "A job section was added so students could explore opportunities without leaving the platform." },
    { phase: "06", title: "Admin & Final Testing", desc: "The admin panel was completed for managing platform content, followed by testing and final improvements." },
  ],

  techStack: [
    { name: "React", category: "Frontend", icon: "component", desc: "Used to build the student and admin interfaces." },
    { name: "Spring Boot", category: "Backend", icon: "server", desc: "Used for APIs, application logic, and backend services." },
    { name: "MySQL", category: "Database", icon: "database", desc: "Used to store the main application data." },
    { name: "Firebase", category: "Cloud & Auth", icon: "fire", desc: "Used for authentication and supporting cloud features." },
    { name: "AI Integration", category: "AI Features", icon: "robot", desc: "Used for resume analysis and interview-related functionality." },
    { name: "REST API", category: "API Layer", icon: "plug", desc: "Connects the frontend with the backend services." },
    { name: "JWT", category: "Authentication", icon: "lock", desc: "Used for secure authenticated access to platform features." },
  ],
};

/* ── Page ─────────────────────────────────────────────────── */
export default function TrainYourTechCaseStudyPage() {
  return <TrainYourTechClient data={tytData} />;
}
