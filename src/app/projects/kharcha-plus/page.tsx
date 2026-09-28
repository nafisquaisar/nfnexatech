import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import KharchaPlusClient from "./KharchaPlusClient";

/* ── SEO Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Kharcha Plus Case Study | Expense & Utility Management App | NF Nexa Tech",
  description:
    "Explore Kharcha Plus, an expense and utility management app built by NF Nexa Tech for tracking daily expenses, electricity bills, water, food, mess spending, and monthly expenses.",
  alternates: {
    canonical: `${siteConfig.url}/projects/kharcha-plus`,
  },
  openGraph: {
    title: "Kharcha Plus Case Study | NF Nexa Tech",
    description:
      "A simple expense and utility management app for tracking daily spending, electricity, water, food, mess expenses, and monthly financial activity.",
    url: `${siteConfig.url}/projects/kharcha-plus`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/images/projects/kharchaplus/dashboard.jpeg`,
        width: 1200,
        height: 630,
        alt: "Kharcha Plus expense management app",
      },
    ],
  },
};

/* ── Static case-study data ──────────────────────────────── */
export const kharchaPlusData = {
  slug: "kharcha-plus",
  title: "Kharcha Plus",
  subtitle: "A Simple App to Manage Expenses and Everyday Utilities",
  category: "Finance & Utility",
  color: "#0f9f9a",
  colorRgb: "15,159,154",
  liveUrl: null,

  meta: [
    { icon: "phone", label: "Platform", value: "Android App" },
    { icon: "currency", label: "Category", value: "Expense Management" },
    { icon: "bolt", label: "Utilities", value: "Bills & Tracking" },
    { icon: "chart", label: "Insights", value: "Daily & Monthly" },
    { icon: "food", label: "Food", value: "Mess & Food Tracking" },
    { icon: "robot", label: "Future", value: "AI Assistance" },
  ],

  overview:
    "Kharcha Plus is an expense and utility management app designed to make everyday money tracking easier. Users can record their expenses, see where their money is going, and keep track of things like electricity bills, water bills, drinking water, and mess food from the same app. The goal is simple: give users a clear picture of their daily spending without making money management complicated.",

  challenge: {
    heading: "The Challenge",
    body: "Managing everyday expenses can quickly become difficult when different things are tracked in different places. Small purchases, monthly bills, food expenses, and other household costs can easily be missed. Kharcha Plus was created to bring these records together and make them easier to understand.",
    points: [
      "Daily expenses are often recorded in different places",
      "It can be difficult to see where money is being spent",
      "Monthly bills need to be tracked separately",
      "Water and food-related expenses are easy to overlook",
      "Users need a simple way to review their spending over time",
      "Raw expense entries are not always enough to understand spending patterns",
    ],
  },

  approach: {
    heading: "The Solution",
    body: "We built Kharcha Plus as a single place for managing everyday expenses and utility records. Users can add expenses, track important bills, record drinking water and food usage, and view their data through simple summaries and charts. The system is designed to keep financial information organized while making the important numbers easy to understand.",
    points: [
      "Quickly record and manage everyday expenses",
      "View spending through daily and monthly summaries",
      "Track electricity bills and payments",
      "Keep records of water bills and water-related expenses",
      "Track daily drinking water intake",
      "Manage mess and food-related spending",
      "View spending patterns through charts and reports",
      "Keep different types of expenses organized in one place",
      "Customize tracking according to the user's needs",
    ],
  },

  modules: [
    { icon: "currency", name: "Expense Management", desc: "Add, edit, and organize everyday expenses so users always have a clear record of where their money goes." },
    { icon: "chart", name: "Expense Overview", desc: "A simple overview shows important spending information without making users go through every individual entry." },
    { icon: "calendar", name: "Monthly Analysis", desc: "Review expenses month by month to understand spending habits and compare different periods." },
    { icon: "bolt", name: "Electricity Tracking", desc: "Keep electricity bills and related records in one place for easier monthly tracking." },
    { icon: "water", name: "Water Management", desc: "Track water-related expenses and records separately from regular day-to-day spending." },
    { icon: "drop", name: "Drinking Water", desc: "Record daily water intake and keep track of personal drinking-water goals." },
    { icon: "food", name: "Food & Mess Tracking", desc: "Keep track of mess and food expenses to understand how much is being spent on everyday meals." },
    { icon: "trending", name: "Charts & Insights", desc: "Turn expense records into simple visual information so users can understand their spending more easily." },
    { icon: "settings", name: "Custom Tracking", desc: "The system is designed to support different tracking needs instead of forcing every user into the same setup." },
    { icon: "bell", name: "Reminders", desc: "Utility-related reminders can help users stay aware of important recurring tasks and records." },
    { icon: "robot", name: "AI Assistance", desc: "The future direction of Kharcha Plus includes AI-based assistance to help users understand and manage their expenses and utility data." },
  ],

  screenshots: [
    { src: "/images/projects/kharchaplus/dashboard.jpeg", label: "Dashboard", desc: "A quick overview of expenses, balances, utilities, and important information." },
    { src: "/images/projects/kharchaplus/expense.jpeg", label: "Expenses", desc: "Add and manage everyday expenses with a clear and simple interface." },
    { src: "/images/projects/kharchaplus/expensedetail.jpeg", label: "Expense Detail", desc: "View detailed information about individual expense entries." },
    { src: "/images/projects/kharchaplus/foodtracking.jpeg", label: "Food Tracking", desc: "Keep track of mess and food expenses as part of everyday spending." },
    { src: "/images/projects/kharchaplus/foodtrackingdetail.jpeg", label: "Food Details", desc: "View detailed food and mess tracking records." },
    { src: "/images/projects/kharchaplus/waterintake.jpeg", label: "Water Intake", desc: "Track daily drinking water intake and set personal goals." },
    { src: "/images/projects/kharchaplus/waterintakedetail.jpeg", label: "Water Details", desc: "Detailed view of water intake records over time." },
    { src: "/images/projects/kharchaplus/waterpurchasemanagement.jpeg", label: "Water Purchase", desc: "Manage water purchase records and related expenses." },
    { src: "/images/projects/kharchaplus/waterpurchasehistrty.jpeg", label: "Water History", desc: "Review complete water purchase history and spending." },
    { src: "/images/projects/kharchaplus/profile.jpeg", label: "Profile", desc: "User profile and app settings." },
  ],

  architecture: [
    { layer: "Mobile App", tech: "Flutter", icon: "phone", color: "#027DFD", desc: "The main application provides the expense, utility, food, and water tracking experience." },
    { layer: "State Management", tech: "Riverpod", icon: "refresh", color: "#0f9f9a", desc: "Manages application state and keeps different parts of the app connected cleanly." },
    { layer: "Local Database", tech: "Isar", icon: "database", color: "#3b82f6", desc: "Stores important user data locally so the app can provide a fast and responsive experience." },
    { layer: "Cloud Data", tech: "Firebase", icon: "fire", color: "#ffa000", desc: "Used for cloud-based services and keeping supported data available across the application." },
    { layer: "Notifications", tech: "Local Notifications", icon: "bell", color: "#8b5cf6", desc: "Supports reminders for recurring tracking and utility-related activities." },
  ],

  results: [
    { value: "1", suffix: "", label: "Place for Daily Expenses" },
    { value: "4", suffix: "", label: "Main Tracking Areas" },
    { value: "Daily", suffix: "", label: "Expense Tracking" },
    { value: "AI", suffix: "", label: "Future Assistance" },
  ],

  timeline: [
    { phase: "01", title: "Expense Management", desc: "The core expense system was built to make adding and reviewing everyday spending quick and simple." },
    { phase: "02", title: "Dashboard & Analysis", desc: "Expense summaries, balances, charts, and monthly views were added to make the data easier to understand." },
    { phase: "03", title: "Utility Tracking", desc: "Electricity and water tracking were introduced so regular utility records could live alongside everyday expenses." },
    { phase: "04", title: "Food & Water Tracking", desc: "Mess, food, and daily drinking-water tracking were added for more complete everyday management." },
    { phase: "05", title: "Reminders & Improvements", desc: "Reminder support and improvements to the overall tracking experience were added as the app grew." },
    { phase: "06", title: "AI-Assisted Management", desc: "The next direction is to use AI to help users understand their data and make everyday expense management easier." },
  ],

  techStack: [
    { name: "Flutter", category: "Mobile App", icon: "phone", desc: "Used to build the Android application and its responsive user interface." },
    { name: "Riverpod", category: "State Management", icon: "refresh", desc: "Used to manage application state and connect different modules." },
    { name: "Isar", category: "Local Database", icon: "database", desc: "Used for fast local data storage and offline-friendly application behaviour." },
    { name: "Firebase", category: "Cloud Services", icon: "fire", desc: "Provides cloud-based services used by the application." },
    { name: "Local Notifications", category: "Reminders", icon: "bell", desc: "Used for reminders and scheduled utility-related notifications." },
  ],
};

/* ── Page ─────────────────────────────────────────────────── */
export default function KharchaPlusCaseStudyPage() {
  return <KharchaPlusClient data={kharchaPlusData} />;
}
