import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import InvoiceLeloCaseStudyClient from "./InvoiceLeloCaseStudyClient";

/* ── SEO Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "InvoiceLelo — GST Invoicing Platform Case Study | NF Nexa Tech",
  description:
    "How NF Nexa Tech built InvoiceLelo — a simple GST invoicing platform for freelancers and small businesses using Next.js, Flutter, Firebase, and Razorpay.",
  alternates: {
    canonical: `${siteConfig.url}/projects/invoicelelo`,
  },
  openGraph: {
    title: "InvoiceLelo Case Study | NF Nexa Tech",
    description:
      "A GST billing platform built for small businesses — web + Android app using Next.js, Flutter, Firebase, Isar, and Razorpay.",
    url: `${siteConfig.url}/projects/invoicelelo`,
    type: "article",
    images: [{ url: `${siteConfig.url}/images/projects/invoicelelo/home.png`, width: 1200, height: 630 }],
  },
};

/* ── Static data ─────────────────────────────────────────── */
export const invoiceLeloData = {
  slug: "invoicelelo",
  title: "InvoiceLelo",
  subtitle: "Simple invoicing for everyday business",
  category: "Web & Android App",
  color: "#16a34a",
  colorRgb: "22,163,74",
  liveUrl: "https://invoicelelo.in",

  meta: [
    { icon: "globe", label: "Platform", value: "Web + Android" },
    { icon: "clock", label: "Timeline", value: "Planning → Launch" },
    { icon: "building", label: "Industry", value: "Business / Billing" },
    { icon: "map-pin", label: "Market", value: "India" },
    { icon: "briefcase", label: "Type", value: "SaaS Product" },
    { icon: "chart", label: "Focus", value: "Invoicing & GST" },
  ],

  overview:
    "InvoiceLelo is an online invoicing platform built for freelancers, small businesses, service providers, consultants, and independent professionals.\n\nThe idea was simple: creating an invoice shouldn't require complicated accounting software or manual formatting. Users can add their business and customer details, add products or services, apply GST when needed, and download a ready-to-share PDF invoice.",

  problem: {
    heading: "The Problem",
    title: "Invoicing was taking more time than it should.",
    body: "Many small businesses still create invoices using Word, Excel, or old templates. This means entering the same customer details again, calculating totals manually, fixing formatting, and keeping track of previous invoices.",
    conclusion: "InvoiceLelo was built to make that process simpler. Business details can be saved, customers can be managed, totals are calculated automatically, and invoices can be downloaded as PDFs when they're ready.",
  },

  approach: {
    heading: "Our Approach",
    title: "Keep the process simple.",
    body: "We focused on making the main task straightforward: create an invoice and get it ready to send.\n\nThe experience starts with business details, followed by customer information and the items or services being billed. GST can be added where applicable, totals are calculated automatically, and the finished invoice can be downloaded as a PDF. Logged-in users can also save invoices, manage customers, and track billing history.",
  },

  features: [
    { icon: "invoice", title: "Invoice Creation", desc: "Create invoices with business, customer, item, price, and tax details." },
    { icon: "calculator", title: "GST Support", desc: "Add GSTIN and set GST percentages for individual line items." },
    { icon: "users", title: "Customer Management", desc: "Save customer details and reuse them when creating future invoices." },
    { icon: "office", title: "Business Profile", desc: "Save business information, logo, contact details, GSTIN, and signature." },
    { icon: "clipboard", title: "Bill Tracking", desc: "Keep track of paid and pending invoices from the dashboard." },
    { icon: "pdf", title: "PDF Invoices", desc: "Generate and download a properly formatted PDF invoice." },
    { icon: "folder", title: "Invoice History", desc: "Keep previous invoices organised and accessible after signing in." },
    { icon: "dashboard", title: "Dashboard", desc: "View monthly billing activity, paid amounts, pending amounts, and recent bills." },
  ],

  webAndApp: {
    heading: "Web & Android App",
    title: "One product, two ways to use it",
    body: "InvoiceLelo was built for both web and Android, so users can create invoices whether they are working from a laptop or managing their business from their phone. The core experience stays simple across both platforms, including invoice creation, customer details, GST, billing history and PDF invoices.",
    note: "InvoiceLelo is available as both a web platform and an Android app, giving users a simple way to create and manage invoices from the device they use every day.",
  },

  screenshots: [
    { src: "/images/projects/invoicelelo/home.png", label: "Invoice Generator", desc: "The main invoice creation interface" },
    { src: "/images/projects/invoicelelo/login.png", label: "Business Details", desc: "Set up your business profile and details" },
    { src: "/images/projects/invoicelelo/customerdetail.png", label: "Customer Details", desc: "Add and manage customer information" },
    { src: "/images/projects/invoicelelo/itemdetail.png", label: "Invoice Creation", desc: "Add items, prices, and tax details" },
    { src: "/images/projects/invoicelelo/bill.png", label: "Invoice Preview", desc: "Preview the final invoice before download" },
  ],

  techStack: [
    { name: "Next.js", category: "Frontend / Web", icon: "nextjs", desc: "Server-rendered web application with SEO optimisation" },
    { name: "Flutter", category: "Mobile / Android", icon: "phone", desc: "Cross-platform mobile app for Android users" },
    { name: "Firebase", category: "Backend & Data", icon: "fire", desc: "Authentication, Firestore database, and cloud storage" },
    { name: "Isar", category: "Local Storage", icon: "database", desc: "Fast local database for offline-first mobile experience" },
    { name: "Razorpay", category: "Payments", icon: "credit-card", desc: "Payment gateway integration for premium features" },
  ],

  timeline: [
    { phase: "01", title: "Planning", desc: "Product scope, user research, and feature prioritisation" },
    { phase: "02", title: "Design", desc: "UI/UX design focused on simplicity and speed" },
    { phase: "03", title: "Development", desc: "Web app with Next.js, Android app with Flutter, Firebase backend" },
    { phase: "04", title: "Testing", desc: "Invoice generation, PDF output, payment flow, and edge case testing" },
    { phase: "05", title: "Launch", desc: "Production deployment on web and Play Store submission" },
  ],

  outcome: {
    heading: "Outcome",
    title: "A simpler way to handle invoices",
    body: "InvoiceLelo brings the everyday invoicing process into one place. Users can create and download invoices without signing up, while an account adds saved invoices, customer management, and billing history.",
    conclusion: "The result is a focused invoicing tool that keeps the process simple instead of trying to become a full accounting system.",
  },
};

/* ── Page (RSC shell) ────────────────────────────────────── */
export default function InvoiceLeloCaseStudyPage() {
  return <InvoiceLeloCaseStudyClient data={invoiceLeloData} />;
}
