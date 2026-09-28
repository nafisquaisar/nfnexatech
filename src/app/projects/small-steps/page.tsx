import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import SmallStepsClient from "./SmallStepsClient";

/* ── SEO ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Small Steps Case Study | Notes & Checklist Android App | NF Nexa Tech",
  description:
    "Explore Small Steps, a simple Android notes and checklist app built by NF Nexa Tech with quick notes, task lists, multiple checklists, and fingerprint protection.",
  alternates: { canonical: `${siteConfig.url}/projects/small-steps` },
  openGraph: {
    title: "Small Steps Case Study | NF Nexa Tech",
    description: "A simple Android notes and checklist app for managing everyday tasks, notes, and personal lists with fingerprint protection.",
    url: `${siteConfig.url}/projects/small-steps`,
    type: "article",
    images: [{ url: `${siteConfig.url}/images/projects/smallstep/smallstep_preview.png`, width: 1200, height: 630, alt: "Small Steps notes and checklist app" }],
  },
};

/* ── Data ─────────────────────────────────────────────────── */
export const smallStepsData = {
  slug: "small-steps",
  title: "Small Steps",
  subtitle: "A Simple Notes and Checklist App",
  category: "Productivity App",
  color: "#14b8a6",
  colorRgb: "20,184,166",
  liveUrl: null,

  meta: [
    { icon: "phone", label: "Platform", value: "Android App" },
    { icon: "pencil", label: "Category", value: "Notes & Productivity" },
    { icon: "checkbox", label: "Main Feature", value: "Checklists" },
    { icon: "lock", label: "Privacy", value: "Fingerprint Lock" },
    { icon: "clipboard", label: "Notes", value: "Quick Notes" },
    { icon: "sparkle", label: "Focus", value: "Simple & Fast" },
  ],

  overview:
    "Small Steps is a lightweight notes and checklist app made for people who want a simple way to write things down and keep track of tasks. Users can create notes, make checklists, and organize multiple items under separate titles. The app also includes fingerprint protection for users who want to keep their notes private.",

  challenge: {
    heading: "The Challenge",
    body: "Many note-taking apps come with more features than users actually need. For quick notes, small task lists, or everyday checklists, a simple interface can be much easier to use. Small Steps was created around that idea.",
    points: [
      "Quick notes should be easy to create and update",
      "Users need a simple way to manage everyday tasks",
      "Multiple checklist items should be easy to organize",
      "Different lists should be kept under separate titles",
      "Private notes may need an additional layer of protection",
      "The app should stay simple instead of becoming overloaded with features",
    ],
  },

  approach: {
    heading: "The Solution",
    body: "Small Steps keeps note-taking and task tracking in one simple app. Users can create notes, add multiple checklist items under a title, mark tasks as completed, and manage their lists whenever needed. Fingerprint protection adds an extra layer of privacy for personal notes.",
    points: [
      "Create and manage quick notes",
      "Create multiple checklists",
      "Add many items under a single checklist title",
      "Mark checklist items as completed",
      "Edit and manage existing notes and lists",
      "Protect personal content with fingerprint authentication",
      "Keep the interface simple and easy to use",
    ],
  },

  modules: [
    { icon: "pencil", name: "Notes", desc: "Create simple notes for ideas, reminders, or anything that needs to be saved for later." },
    { icon: "checkbox", name: "Checklists", desc: "Create a checklist and add as many items as needed under a single title." },
    { icon: "check", name: "Task Completion", desc: "Mark individual checklist items as completed to keep track of what is done." },
    { icon: "clipboard", name: "Multiple Lists", desc: "Create separate checklists for different tasks instead of keeping everything in one list." },
    { icon: "edit", name: "Easy Editing", desc: "Update notes and checklist items whenever something changes." },
    { icon: "lock", name: "Fingerprint Lock", desc: "Use fingerprint authentication to add privacy to personal notes and saved information." },
  ],

  screenshots: [
    { src: "/images/projects/smallstep/notelist.jpeg", label: "Notes List", desc: "A simple list of all saved notes for quick access." },
    { src: "/images/projects/smallstep/updatenote.jpeg", label: "Edit Note", desc: "Update or edit existing notes easily." },
    { src: "/images/projects/smallstep/checkbox.jpeg", label: "Checklist", desc: "Create checklists with multiple items and mark tasks as completed." },
    { src: "/images/projects/smallstep/viewimage.jpeg", label: "View Image", desc: "View images attached to notes." },
    { src: "/images/projects/smallstep/different theme.jpeg", label: "Themes", desc: "Different theme options for a personalized experience." },
    { src: "/images/projects/smallstep/password.jpeg", label: "Fingerprint Lock", desc: "Fingerprint authentication keeps personal content private." },
  ],

  architecture: [
    { layer: "Mobile App", tech: "Android", icon: "phone", color: "#3ddc84", desc: "The main application for creating notes and managing personal checklists." },
    { layer: "Notes", tech: "Local Data", icon: "pencil", color: "#14b8a6", desc: "Handles saved notes and their content inside the app." },
    { layer: "Checklist", tech: "Task Management", icon: "checkbox", color: "#06b6d4", desc: "Manages checklist titles, items, and completion status." },
    { layer: "Privacy", tech: "Biometric Auth", icon: "lock", color: "#8b5cf6", desc: "Uses fingerprint authentication to provide an additional privacy layer." },
  ],

  results: [
    { value: "2", suffix: "", label: "Core Features" },
    { value: "1", suffix: "", label: "Simple Workspace" },
    { value: "Bio", suffix: "", label: "Privacy Support" },
    { value: "∞", suffix: "", label: "Checklist Items" },
  ],

  timeline: [
    { phase: "01", title: "Notes", desc: "The basic note creation and editing experience was built first." },
    { phase: "02", title: "Checklist System", desc: "Checklist titles, multiple items, and task completion were added." },
    { phase: "03", title: "Privacy", desc: "Fingerprint authentication was added for users who want to protect their personal content." },
    { phase: "04", title: "UI Improvements", desc: "The interface continues to focus on keeping everyday note-taking and task management quick and simple." },
  ],

  techStack: [
    { name: "Android", category: "Mobile App", icon: "phone", desc: "Used to build the Small Steps mobile application." },
    { name: "Local Storage", category: "Data", icon: "database", desc: "Used to keep notes and checklist information available inside the app." },
    { name: "Biometric Auth", category: "Security", icon: "lock", desc: "Provides fingerprint-based access protection for personal content." },
  ],
};

export default function SmallStepsCaseStudyPage() {
  return <SmallStepsClient data={smallStepsData} />;
}
