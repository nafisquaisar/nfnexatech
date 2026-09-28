import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import OrganizerClassesClient from "./OrganizerClassesClient";

/* ── SEO ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Organizer Classes Case Study | Online Course & Exam Preparation App | NF Nexa Tech",
  description:
    "Explore Organizer Classes, an online learning platform built by NF Nexa Tech for courses, video classes, handwritten notes, tests, previous year questions, doubt support, and online course purchases.",
  alternates: { canonical: `${siteConfig.url}/projects/organizer-classes` },
  openGraph: {
    title: "Organizer Classes Case Study | NF Nexa Tech",
    description:
      "An online learning platform with courses, video classes, handwritten notes, tests, PYQs, doubt support, notifications, and Razorpay course payments.",
    url: `${siteConfig.url}/projects/organizer-classes`,
    type: "article",
    images: [{ url: `${siteConfig.url}/images/projects/organizer/organizer_preview.png`, width: 1200, height: 630, alt: "Organizer Classes online learning platform" }],
  },
};

/* ── Data ─────────────────────────────────────────────────── */
export const organizerClassesData = {
  slug: "organizer-classes",
  title: "Organizer Classes",
  subtitle: "An Online Learning Platform for Exam Preparation",
  category: "EdTech Platform",
  color: "#f97316",
  colorRgb: "249,115,22",
  liveUrl: null,

  meta: [
    { icon: "book", label: "Platform", value: "Online Learning" },
    { icon: "graduation", label: "Category", value: "Education & Exam Prep" },
    { icon: "card", label: "Courses", value: "Online Purchase" },
    { icon: "pencil", label: "Practice", value: "Tests & PYQs" },
    { icon: "video", label: "Content", value: "Video Classes" },
    { icon: "notes", label: "Study Material", value: "Notes & Resources" },
  ],

  overview:
    "Organizer Classes is an online learning platform built for students preparing for competitive and academic exams. It brings courses, video classes, handwritten notes, tests, previous year questions, and doubt support into one place. Students can purchase courses online, follow class and subject-wise content, practice with tests, and keep up with important updates through notifications.",

  challenge: {
    heading: "The Challenge",
    body: "Students preparing for exams often have to collect study material from different places. Classes, notes, previous year questions, tests, and doubt support may all be available separately. Organizer Classes was built to bring these parts of exam preparation together in one easy-to-use platform.",
    points: [
      "Students needed one place to access their courses",
      "Study content had to be organized class-wise and subject-wise",
      "Previous year questions from different states were difficult to manage",
      "Students needed regular tests for practice",
      "Handwritten notes and video classes needed to be available together",
      "Students needed an easy way to ask and clear their doubts",
      "Important course and platform updates needed to reach students quickly",
    ],
  },

  approach: {
    heading: "The Solution",
    body: "We built Organizer Classes as a complete learning platform where students can purchase courses and access their study material from one place. Each course can be organized into classes and subjects, with videos, notes, tests, and previous year questions available as part of the learning experience.",
    points: [
      "Online course purchase through Razorpay",
      "Class-wise and subject-wise course content",
      "Video lessons for online learning",
      "Handwritten notes and study material",
      "Tests for regular practice and preparation",
      "Previous year questions from different states",
      "Doubt section for student questions",
      "Notifications for important updates",
      "Organized course content for easier learning",
    ],
  },

  modules: [
    { icon: "graduation", name: "Online Courses", desc: "Students can explore available courses and purchase the ones they want to study." },
    { icon: "card", name: "Online Payment", desc: "Razorpay is integrated into the platform so students can purchase courses online." },
    { icon: "book", name: "Class-wise Content", desc: "Course material can be organized according to different classes to make learning easier to follow." },
    { icon: "notes", name: "Subject-wise Content", desc: "Students can access learning material based on individual subjects instead of searching through the complete course." },
    { icon: "video", name: "Video Classes", desc: "Students can learn through recorded video classes available inside their courses." },
    { icon: "write", name: "Handwritten Notes", desc: "Handwritten study notes are available alongside video lessons to help students revise important topics." },
    { icon: "pencil", name: "Online Tests", desc: "Students can take tests to practice questions and check their preparation." },
    { icon: "document", name: "Previous Year Questions", desc: "PYQs are organized from different states so students can practice questions from previous examinations." },
    { icon: "question", name: "Doubt Section", desc: "Students can raise questions and use the doubt section when they need help with their studies." },
    { icon: "bell", name: "Notifications", desc: "Important updates, new content, and other course-related information can be shared with students through notifications." },
    { icon: "phone", name: "Student Learning Area", desc: "Purchased courses and learning resources are available from one place so students can continue their preparation easily." },
  ],

  screenshots: [
    { src: "/images/projects/organizer/home.jpeg", label: "Home Page", desc: "The main screen helps students discover courses and access important sections." },
    { src: "/images/projects/organizer/onlinecourse.jpeg", label: "Courses", desc: "Students can browse available courses and choose what to purchase." },
    { src: "/images/projects/organizer/coursepurchase.jpeg", label: "Course Purchase", desc: "Course details and online purchase through Razorpay." },
    { src: "/images/projects/organizer/chapter.jpeg", label: "Chapters", desc: "Course lessons organized into classes and subjects for easier navigation." },
    { src: "/images/projects/organizer/video.jpeg", label: "Video Classes", desc: "Students can watch their course lessons directly from the platform." },
    { src: "/images/projects/organizer/classnote.jpeg", label: "Handwritten Notes", desc: "Course-related handwritten notes available for study and revision." },
    { src: "/images/projects/organizer/classwisetest.jpeg", label: "Class Tests", desc: "Practice tests organized by class for regular preparation." },
    { src: "/images/projects/organizer/test.jpeg", label: "Test Interface", desc: "The test-taking experience with questions and answer options." },
    { src: "/images/projects/organizer/result.jpeg", label: "Test Results", desc: "Students can review their test performance and results." },
  ],

  architecture: [
    { layer: "Mobile App", tech: "Android", icon: "phone", color: "#3ddc84", desc: "The main learning application where students purchase courses and access study material." },
    { layer: "Course System", tech: "Course Management", icon: "book", color: "#f97316", desc: "Handles courses, classes, subjects, videos, notes, and other learning resources." },
    { layer: "Payments", tech: "Razorpay", icon: "card", color: "#3b82f6", desc: "Handles online course payments and purchase transactions." },
    { layer: "Learning Content", tech: "Video & Notes", icon: "video", color: "#8b5cf6", desc: "Provides video lessons and handwritten study material to students." },
    { layer: "Practice", tech: "Tests & PYQs", icon: "pencil", color: "#06b6d4", desc: "Provides tests and previous year questions for regular exam practice." },
    { layer: "Communication", tech: "Notifications", icon: "bell", color: "#ef4444", desc: "Keeps students informed about important course and platform updates." },
  ],

  results: [
    { value: "1", suffix: "", label: "Learning Platform" },
    { value: "5", suffix: "+", label: "Learning Features" },
    { value: "24/7", suffix: "", label: "Course Access" },
    { value: "1", suffix: "", label: "Place to Learn & Practice" },
  ],

  timeline: [
    { phase: "01", title: "Platform Planning", desc: "The learning flow was planned around courses, students, study material, tests, and exam preparation." },
    { phase: "02", title: "Course & Content System", desc: "The course structure was built to organize classes, subjects, videos, and study material." },
    { phase: "03", title: "Payments & Course Access", desc: "Razorpay was integrated so students could purchase courses online and access the content they purchased." },
    { phase: "04", title: "Tests & PYQs", desc: "Online tests and previous year questions from different states were added for exam practice." },
    { phase: "05", title: "Doubts & Notifications", desc: "Doubt support and notifications were added to make communication and regular learning easier." },
    { phase: "06", title: "Content & Experience Improvements", desc: "The platform continues to be improved with new courses, study material, tests, and other learning features." },
  ],

  techStack: [
    { name: "Android", category: "Mobile App", icon: "phone", desc: "The platform is available as a mobile learning application for students." },
    { name: "Razorpay", category: "Payments", icon: "card", desc: "Used for secure online course purchases." },
    { name: "Video System", category: "Learning", icon: "video", desc: "Used to deliver recorded course classes to students." },
    { name: "Course Management", category: "Education", icon: "book", desc: "Organizes courses, classes, subjects, and learning resources." },
    { name: "Test System", category: "Practice", icon: "pencil", desc: "Provides online tests for student practice and preparation." },
    { name: "Notifications", category: "Communication", icon: "bell", desc: "Keeps students updated about new content and important information." },
  ],
};

export default function OrganizerClassesCaseStudyPage() {
  return <OrganizerClassesClient data={organizerClassesData} />;
}
