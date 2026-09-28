import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import PopularBreadClient from "./PopularBreadClient";

/* ── SEO Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Popular Bread Case Study | Bread Business Management App | NF Nexa Tech",
  description:
    "See how NF Nexa Tech built a business management app for Popular Bread to manage purchases, stock, sales, rotten bread, capital, profit, and daily and monthly business analysis.",
  alternates: {
    canonical: `${siteConfig.url}/projects/popular-bread`,
  },
  openGraph: {
    title: "Popular Bread Case Study | NF Nexa Tech",
    description:
      "A business management app built for Popular Bread to manage purchases, stock, sales, wastage, capital, profit, and business analysis.",
    url: `${siteConfig.url}/projects/popular-bread`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/images/projects/popular/popular_preview.png`,
        width: 1200,
        height: 630,
        alt: "Popular Bread business management app",
      },
    ],
  },
};

/* ── Static case-study data ──────────────────────────────── */
export const popularBreadData = {
  slug: "popular-bread",
  title: "Popular Bread",
  subtitle: "A Business Management App for Daily Bread Operations",
  category: "Business Management App",
  color: "#f97316",
  colorRgb: "249,115,22",
  liveUrl: "https://play.google.com/store/apps/details?id=com.nf.popularbread&pcampaignid=web_share",

  meta: [
    { icon: "phone", label: "Platform", value: "Mobile App" },
    { icon: "store", label: "Industry", value: "Bread Distribution" },
    { icon: "package", label: "Focus", value: "Stock & Sales" },
    { icon: "chart", label: "Reports", value: "Daily & Monthly" },
    { icon: "currency", label: "Finance", value: "Capital & Profit" },
    { icon: "settings", label: "System", value: "Customizable" },
  ],

  overview:
    "Popular Bread is a business management app built around the daily operations of a bread distribution business. It helps keep track of bread purchases, stock, sales, rotten bread, capital, and business performance in one place. Instead of managing these records manually, the business can record and review its day-to-day activity directly from the app.",

  challenge: {
    heading: "The Challenge",
    body: "Managing a bread business involves many small entries every day. New stock comes in, bread is sold to different customers, some products may become unsellable, and the business needs to keep track of money and stock at the same time. Keeping all of this in notebooks or separate records makes it difficult to get a clear picture of the business.",
    points: [
      "Daily bread purchases needed to be recorded properly",
      "Purchase slips and supporting documents needed to be kept with the entries",
      "Different bread products needed separate stock tracking",
      "Sales and customer-wise records needed to stay organized",
      "Rotten and unsold bread needed to be recorded separately",
      "Business capital and profit needed to be easier to understand",
      "Daily and monthly business performance needed a clear view",
    ],
  },

  approach: {
    heading: "Our Approach",
    body: "We built a business management app around the way Popular Bread actually operates. The app brings purchases, products, stock, sales, rotten bread, capital, and business analysis together. Every part of the system can also be adjusted to match the company's own working process.",
    points: [
      "Record every bread purchase and add the purchase details",
      "Upload a photo of the purchase slip with the entry",
      "Create and manage different bread products",
      "Track available stock and stock movement",
      "Record which customers received or purchased bread",
      "Keep track of sold and rotten bread",
      "Monitor business capital and money movement",
      "View daily business performance",
      "Review monthly sales, stock, and profit information",
      "Customize the system according to the company's requirements",
    ],
  },

  modules: [
    { icon: "cart", name: "Purchase Management", desc: "Record incoming bread purchases with quantities and other required details. Purchase slip photos can also be attached to keep the record complete." },
    { icon: "receipt", name: "Purchase Slip Records", desc: "Attach a photo of the purchase slip directly to the related entry so the business can keep the supporting document with the transaction." },
    { icon: "bread", name: "Bread Management", desc: "Add and manage the different bread products handled by the business, with the information needed for daily operations." },
    { icon: "package", name: "Stock Management", desc: "Keep track of how much bread is available and follow stock changes as products are purchased and sold." },
    { icon: "users", name: "Sales & Customer Records", desc: "Record bread sold to customers and keep customer-wise sales information organized for easier tracking." },
    { icon: "recycle", name: "Rotten Bread Tracking", desc: "Record bread that becomes rotten or unsellable separately so the business can understand product wastage and its effect on stock." },
    { icon: "currency", name: "Capital Management", desc: "Keep track of business capital and related financial information to get a clearer picture of the money being used in the business." },
    { icon: "trending", name: "Profit Analysis", desc: "Use recorded purchase and sales information to understand business performance and profit over time." },
    { icon: "calendar", name: "Daily Analysis", desc: "Review the day's purchases, sales, stock, rotten bread, and other important business information from one place." },
    { icon: "chart", name: "Monthly Analysis", desc: "Get a broader view of monthly business activity and compare important figures to understand how the business is performing." },
    { icon: "settings", name: "Custom Business Setup", desc: "The system can be configured around the company's own products, workflow, and business requirements instead of forcing a fixed process." },
    { icon: "clipboard", name: "Business Records", desc: "Keep important day-to-day business information organized in one application instead of maintaining separate manual records." },
  ],

  screenshots: [
    { src: "/images/projects/popular/dashboard.jpeg", label: "Business Dashboard", desc: "A clear overview of the important numbers and activities of the bread business." },
    { src: "/images/projects/popular/dashboard2.jpeg", label: "Dashboard Details", desc: "Additional business information and quick actions from the main dashboard." },
    { src: "/images/projects/popular/breadpurchase.jpeg", label: "Purchase Entry", desc: "Record purchased bread and attach the related purchase slip for future reference." },
    { src: "/images/projects/popular/breaditem.jpeg", label: "Bread Products", desc: "Manage different bread items handled by the business." },
    { src: "/images/projects/popular/breadstock.jpeg", label: "Stock Management", desc: "View and manage the current stock of different bread products." },
    { src: "/images/projects/popular/customer.jpeg", label: "Customer Records", desc: "Keep track of customers and their purchase information." },
    { src: "/images/projects/popular/customerpurchase.jpeg", label: "Customer Sales", desc: "Record bread sold to individual customers." },
    { src: "/images/projects/popular/capital.jpeg", label: "Capital Management", desc: "Track business capital and financial information." },
    { src: "/images/projects/popular/analyse.jpeg", label: "Business Analysis", desc: "Review daily and monthly business activity, including sales, stock, wastage, and profit information." },
    { src: "/images/projects/popular/notification.jpeg", label: "Notifications", desc: "Stay updated with important business alerts and reminders." },
    { src: "/images/projects/popular/noticationdetail.jpeg", label: "Notification Details", desc: "View detailed information about specific business notifications." },
  ],

  architecture: [
    { layer: "Mobile App", tech: "Android", icon: "phone", color: "#3ddc84", desc: "The main interface used to record and review the business's daily operations." },
    { layer: "Business Data", tech: "Database", icon: "database", color: "#3b82f6", desc: "Stores purchase, product, stock, sales, customer, wastage, and business records." },
    { layer: "Documents", tech: "Purchase Slips", icon: "receipt", color: "#f97316", desc: "Purchase slip images can be attached to entries for easier record keeping." },
    { layer: "Analytics", tech: "Business Reports", icon: "chart", color: "#8b5cf6", desc: "Uses recorded business data to present daily and monthly performance information." },
  ],

  results: [
    { value: "1", suffix: "", label: "Business Management App" },
    { value: "12", suffix: "+", label: "Business Modules" },
    { value: "Daily", suffix: "", label: "Business Tracking" },
    { value: "Monthly", suffix: "", label: "Performance Analysis" },
  ],

  timeline: [
    { phase: "01", title: "Understanding the Business", desc: "We first mapped the daily workflow of the business, including purchases, stock, sales, rotten bread, capital, and reporting requirements." },
    { phase: "02", title: "Product & Stock Management", desc: "The product and stock workflow was designed to make it easier to record different bread items and follow their movement." },
    { phase: "03", title: "Purchase & Sales", desc: "Purchase entries, purchase slip uploads, customer sales, and related business records were brought into the app." },
    { phase: "04", title: "Wastage & Capital", desc: "Rotten bread tracking and capital-related information were added to give the business a clearer financial picture." },
    { phase: "05", title: "Business Analysis", desc: "Daily and monthly analysis was introduced to help the business review sales, stock, wastage, and profit information." },
    { phase: "06", title: "Customization & Refinement", desc: "The system was refined around the company's own workflow so that the application fits the business instead of forcing the business to change its process." },
  ],

  techStack: [
    { name: "Android", category: "Mobile Platform", icon: "phone", desc: "The mobile application used for managing daily business operations." },
    { name: "Firebase", category: "Backend & Auth", icon: "fire", desc: "Used for authentication, data storage, and real-time updates." },
    { name: "Cloud Storage", category: "Documents", icon: "cloud", desc: "Used for keeping purchase slip images and other uploaded business documents." },
    { name: "Hive", category: "Local Database", icon: "database", desc: "Offline-first local storage for fast access to business records." },
  ],
};

/* ── Page ─────────────────────────────────────────────────── */
export default function PopularBreadCaseStudyPage() {
  return <PopularBreadClient data={popularBreadData} />;
}
