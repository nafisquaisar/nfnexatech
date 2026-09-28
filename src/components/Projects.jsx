"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── All Projects ─────────────────────────────────────── */
const PROJECTS = [
  {
    slug: "popular-bread",
    title: "Popular Bread Inventory",
    category: "app",
    tags: ["Android App", "Business / Inventory"],
    tagColors: ["#E8763A", "#1FA0B1"],
    description:
      "A business inventory management app for a bread distribution company. Tracks stock, orders, deliveries, and daily reports with offline-first capability.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>, label: "Inventory\nTracking" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, label: "Delivery\nManagement" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" /></svg>, label: "Daily\nReports" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0z" /></svg>, label: "Offline\nFirst" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z" /></svg>, label: "Secure\nAuth" },
    ],
    tech: ["Flutter 3", "Firebase", "Hive", "MVVM", "Provider"],
    highlights: [
      { icon: "📦", title: "Real-time Inventory", desc: "Track stock levels live" },
      { icon: "🚚", title: "Delivery Tracking", desc: "Monitor daily deliveries" },
      { icon: "📊", title: "Business Reports", desc: "Daily/weekly summaries" },
      { icon: "📶", title: "Offline-first", desc: "Works without internet, syncs later" },
      { icon: "🔥", title: "Firebase Backend", desc: "Realtime database & auth" },
    ],
    image: "/images/projects/popular/popular_preview.png",
    thumb: "/images/projects/popular/popular_preview.png",
    demo: "https://play.google.com/store/apps/details?id=com.nf.popularbread&pcampaignid=web_share",
    accent: "#1FA0B1",
  },
  {
    slug: "invoicelelo",
    title: "InvoiceLelo",
    category: "website",
    tags: ["Web App", "Business / Billing"],
    tagColors: ["#1FA0B1", "#E8763A"],
    description:
      "InvoiceLelo is a GST billing platform built for small businesses. It helps users create invoices, manage customers, and keep track of their bills from one place.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" /></svg>, label: "Invoice\nGenerator" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>, label: "Guest\nBilling" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" /></svg>, label: "Customer\nManagement" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>, label: "Bill\nHistory" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" /></svg>, label: "Business\nVerified" },
    ],
    tech: ["Next.js", "Firebase", "Razorpay", "SEO"],
    highlights: [
      { icon: "🧾", title: "Instant Invoice", desc: "Generate PDF bills in seconds" },
      { icon: "👤", title: "No Login Required", desc: "Create invoices without an account" },
      { icon: "💼", title: "Customer Manager", desc: "Save and manage client details" },
      { icon: "✅", title: "Business Verified Badge", desc: "Verified stamp after setup" },
      { icon: "🌐", title: "Web Platform", desc: "Accessible from any browser" },
    ],
    image: "/images/projects/invoicelelo/home.png",
    thumb: "/images/projects/invoicelelo/home.png",
    demo: "https://invoicelelo.in",
    accent: "#7C5CBF",
  },
  {
    slug: "invoicelelo",
    title: "InvoiceLelo",
    category: "app",
    tags: ["Android App", "Business / Billing"],
    tagColors: ["#E8763A", "#7C5CBF"],
    description:
      "InvoiceLelo is a GST billing platform built for small businesses. It helps users create invoices, manage customers, and keep track of their bills from one place.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" /></svg>, label: "Invoice\nGenerator" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>, label: "Guest\nBilling" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" /></svg>, label: "Customer\nManagement" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>, label: "Bill\nHistory" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" /></svg>, label: "Business\nVerified" },
    ],
    tech: ["Flutter", "Firebase", "Isar", "Razorpay"],
    highlights: [
      { icon: "🧾", title: "Instant Invoice", desc: "Generate PDF bills in seconds" },
      { icon: "👤", title: "No Login Required", desc: "Create invoices without an account" },
      { icon: "💼", title: "Customer Manager", desc: "Save and manage client details" },
      { icon: "✅", title: "Business Verified Badge", desc: "Verified stamp after setup" },
      { icon: "📱", title: "Mobile App", desc: "Flutter app for Android" },
    ],
    image: "/images/projects/invoicelelo/login.png",
    thumb: "/images/projects/invoicelelo/bill.png",
    accent: "#7C5CBF",
  },
  {
    slug: "kharcha-plus",
    title: "Kharcha Plus",
    category: "app",
    tags: ["Android App", "Fintech / Utility"],
    tagColors: ["#E8763A", "#1FA0B1"],
    description:
      "Kharcha Plus is an expense and utility tracking app that helps users manage daily expenses, food, electricity, and water consumption in one place.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 10v1M5 12H3m18 0h-2M7.05 7.05 5.636 5.636M18.364 18.364l-1.414-1.414M7.05 16.95l-1.414 1.414M18.364 5.636l-1.414 1.414" /></svg>, label: "Expense\nTracking" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L6.05 15.21a2 2 0 0 0-1.806.547M8 4h8l-1 1v5.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0 0 9 10.172V5L8 4z" /></svg>, label: "Water\nTracking" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" /></svg>, label: "Analytics\n& Reports" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 0 1 7.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>, label: "Offline\nSupport" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2 1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" /></svg>, label: "Clean\nUI/UX" },
    ],
    tech: ["Flutter", "Isar DB", "Firebase", "Riverpod", "Charts"],
    highlights: [
      { icon: "📦", title: "4+ Modules", desc: "Expense, Food, Electricity, Water" },
      { icon: "☁️", title: "Offline + Cloud Sync", desc: "Works offline and syncs with Firebase" },
      { icon: "✨", title: "Beautiful & Simple UI", desc: "Easy to use for everyone" },
      { icon: "📈", title: "Real-time Insights", desc: "Track and analyze your spending" },
      { icon: "▶️", title: "Published on Play Store", desc: "Live and available for users" },
    ],
    image: "/images/projects/kharchaplus/kharchaplus_preview.png",
    thumb: "/images/projects/kharchaplus/kharchaplus_preview.png",
    demo: "https://play.google.com/store/apps/details?id=com.nafis.nf.kharchaplus&hl=en_IN",
    accent: "#E8763A",
  },
  {
    slug: "tunelyf",
    title: "TuneLyf",
    category: "app",
    tags: ["Android App", "Music / Streaming"],
    tagColors: ["#E8763A", "#7C5CBF"],
    description:
      "A modern music streaming app with personalized playlists, offline playback, dynamic player UI, and seamless user experience built for Android.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>, label: "Music\nStreaming" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4" /></svg>, label: "Offline\nPlayback" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3z" /></svg>, label: "Dynamic\nPlayer UI" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>, label: "Smart\nPlaylists" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: "Fast\nPerformance" },
    ],
    tech: ["Kotlin", "MVVM", "ExoPlayer", "Firebase", "Material Design 3"],
    highlights: [
      { icon: "🎵", title: "Full Music Player", desc: "Custom player with queue management" },
      { icon: "📱", title: "Offline Support", desc: "Download and play without internet" },
      { icon: "🔒", title: "Firebase Auth", desc: "Secure user authentication" },
      { icon: "🎨", title: "Material Design 3", desc: "Modern and clean UI" },
      { icon: "⚡", title: "MVVM Architecture", desc: "Scalable and maintainable code" },
    ],
    image: "/images/projects/tunelyf/tunelyf_preview.png",
    thumb: "/images/projects/tunelyf/tunelyf.png",
    accent: "#7C5CBF",
  },
  {
    slug: "organizer-classes",
    title: "Organizer Classes",
    category: "app",
    tags: ["EdTech App", "Web Application"],
    tagColors: ["#7C5CBF", "#1FA0B1"],
    description:
      "An ed-tech platform for online learning with video lectures, notes, quizzes, and student progress tracking. Built for coaching institutes.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25z" /></svg>, label: "Video\nLectures" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931zm0 0L19.5 7.125" /></svg>, label: "Notes &\nQuizzes" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" /></svg>, label: "Progress\nTracking" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z" /></svg>, label: "Student\nManagement" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>, label: "Notifications" },
    ],
    tech: ["React 18", "Firebase", "Tailwind CSS", "Recharts", "RBAC"],
    highlights: [
      { icon: "🎓", title: "1,200+ Students", desc: "Actively using the platform" },
      { icon: "📹", title: "Video Lectures", desc: "Organised by subject and topic" },
      { icon: "📝", title: "Quiz & Tests", desc: "Auto-graded quizzes for students" },
      { icon: "📊", title: "Admin Dashboard", desc: "Track student performance" },
      { icon: "🔒", title: "Role-based Access", desc: "Admin, Teacher, Student roles" },
    ],
    image: "/images/projects/organizer/organizer_preview.png",
    thumb: "/images/projects/organizer/organizer_preview.png",
    accent: "#7C5CBF",
  },
  {
    slug: "nestiva-hospital",
    title: "Nestiva Hospital",
    category: "website",
    tags: ["Healthcare", "Web Development"],
    tagColors: ["#1FA0B1", "#E8763A"],
    description:
      "A patient-focused digital experience for a modern multi-specialty hospital. Doctors, departments, appointments, and emergency information in one clear platform.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0" /></svg>, label: "Doctor\nDirectory" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>, label: "Appointment\nBooking" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" /></svg>, label: "Departments\nShowcase" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3" /></svg>, label: "Emergency\nInfo" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, label: "Fully\nResponsive" },
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "SEO Optimized"],
    highlights: [
      { icon: "🏥", title: "Multi-specialty Hospital", desc: "Full department showcase" },
      { icon: "👨‍⚕️", title: "Doctor Discovery", desc: "Filter by specialty" },
      { icon: "📅", title: "Appointment CTAs", desc: "Prominent booking flow" },
      { icon: "🚨", title: "Emergency Info", desc: "24/7 contact, always visible" },
      { icon: "📱", title: "100% Responsive", desc: "Mobile, tablet, desktop" },
    ],
    image: "/images/projects/nestiva/nestivahome.png",
    thumb: "/images/projects/nestiva/nestivahome.png",
    accent: "#1FA0B1",
  },
  {
    slug: "small-steps",
    title: "Small Steps",
    category: "app",
    tags: ["Android App", "Productivity"],
    tagColors: ["#E8763A", "#1FA0B1"],
    description:
      "A habit tracking and productivity app with daily streaks, reminders, and progress visualization. Designed for building consistent daily habits.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>, label: "Habit\nTracking" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z" /></svg>, label: "Daily\nStreaks" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>, label: "Smart\nReminders" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" /></svg>, label: "Progress\nCharts" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z" /></svg>, label: "Dark\nMode" },
    ],
    tech: ["Kotlin", "Jetpack Compose", "Room DB", "WorkManager", "Clean Architecture"],
    highlights: [
      { icon: "✅", title: "Habit Tracking", desc: "Daily check-in for every habit" },
      { icon: "🔥", title: "Streak System", desc: "Keep your motivation going" },
      { icon: "⏰", title: "WorkManager Reminders", desc: "Reliable background alerts" },
      { icon: "📊", title: "Progress Charts", desc: "Visual habit performance" },
      { icon: "🏗️", title: "Clean Architecture", desc: "Scalable and testable code" },
    ],
    image: "/images/projects/smallstep/smallstep_preview.png",
    thumb: "/images/projects/smallstep/smallstep_preview.png",
    accent: "#E8763A",
  },
  {
    slug: "madza-company",
    title: "MADZA Company",
    category: "website",
    tags: ["Home Services", "Web Application"],
    tagColors: ["#1FA0B1", "#E8763A"],
    description:
      "A professional home services platform for AC repair, invisible grill installation, refrigerator, washing machine, geyser repair, electrical & plumbing services across Mumbai, Bihar, Kolkata & Hyderabad.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 8h12" /></svg>, label: "AC Repair\nServices" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M12 3v18M3 12h18" /></svg>, label: "Invisible\nGrill" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6z" /><path d="M5 10h14" /><path d="M15 7v6" /></svg>, label: "Refrigerator\nRepair" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" /></svg>, label: "Multi-City\nCoverage" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>, label: "Online\nBooking" },
    ],
    tech: ["Next.js", "Tailwind CSS", "SEO", "Turbopack"],
    highlights: [
      { icon: "❄️", title: "AC & Appliance Repair", desc: "AC, Fridge, Washing Machine, Geyser" },
      { icon: "🏗️", title: "Invisible Grill", desc: "Balcony & window safety grills" },
      { icon: "📍", title: "4 Cities", desc: "Mumbai, Bihar, Kolkata, Hyderabad" },
      { icon: "⚡", title: "Electrical & Plumbing", desc: "Full home service solutions" },
      { icon: "📞", title: "WhatsApp Booking", desc: "Direct service booking via WhatsApp" },
    ],
    image: "/images/projects/madzacompany/home.png",
    thumb: "/images/projects/madzacompany/home.png",
    demo: "https://madzacompany.in",
    accent: "#1FA0B1",
  },
  {
    slug: "medon-company",
    title: "Medon Company",
    category: "website",
    tags: ["Web Application", "Service Business"],
    tagColors: ["#1FA0B1", "#E8763A"],
    description:
      "A service-based website for AC & appliance repair services with professional design, local SEO, and service booking flow for Delhi NCR.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z" /></svg>, label: "AC Repair\nServices" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.65-5.652 3.81-3.809a2.549 2.549 0 1 1 3.586 3.586l-3.81 3.81m-5.652-5.651 1.208-.766c.47-.14.94-.14 1.41 0" /></svg>, label: "Appliance\nRepair" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" /></svg>, label: "Delhi NCR\nLocal SEO" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, label: "Responsive\nDesign" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" /></svg>, label: "Reviews &\nTestimonials" },
    ],
    tech: ["Next.js", "Tailwind CSS", "SEO", "Framer Motion"],
    highlights: [
      { icon: "❄️", title: "Service Pages", desc: "AC, Refrigerator, Washing Machine" },
      { icon: "📍", title: "Local SEO", desc: "Ranked for Delhi NCR searches" },
      { icon: "📱", title: "100% Responsive", desc: "Mobile-first design" },
      { icon: "⭐", title: "Social Proof", desc: "Customer reviews & ratings" },
      { icon: "📞", title: "WhatsApp CTA", desc: "Direct booking via WhatsApp" },
    ],
    image: "/images/projects/medon/home.png",
    thumb: "/images/projects/medon/home.png",
    demo: "https://medoncompany.in",
    accent: "#1FA0B1",
  },
  {
    slug: "train-your-tech",
    title: "Train Your Tech",
    category: "website",
    tags: ["EdTech Platform", "SaaS"],
    tagColors: ["#7C5CBF", "#1FA0B1"],
    description:
      "A career development and placement preparation platform helping students with resume building, aptitude tests, coding rounds, and job applications.",
    features: [
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" /></svg>, label: "Resume\nBuilder" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456zM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423z" /></svg>, label: "Aptitude\nTests" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>, label: "Coding\nRounds" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006-3.75 3.75m0 0-3.75-3.75m3.75 3.75V2.69m0 0a48.13 48.13 0 0 0-3.413.387c-1.069.16-1.837 1.094-1.837 2.175v1.561" /></svg>, label: "Job\nApplications" },
      { icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" /></svg>, label: "Progress\nTracking" },
    ],
    tech: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    highlights: [
      { icon: "📄", title: "Resume Builder", desc: "Smart resume generation tool" },
      { icon: "🧠", title: "Mock Tests", desc: "Aptitude and reasoning practice" },
      { icon: "💻", title: "Coding Rounds", desc: "DSA problem practice" },
      { icon: "💼", title: "Job Portal", desc: "Apply directly via platform" },
      { icon: "📊", title: "Analytics Dashboard", desc: "Track student performance" },
    ],
    image: "/images/projects/trainyourtech/landing.png",
    thumb: "/images/projects/trainyourtech/dashboard.png",
    accent: "#7C5CBF",
  },
];

/* ── Derived lists ──────────────────────────────────────── */
const WEBSITES = PROJECTS.filter((p) => p.category === "website" || p.category === "both");
const APPS = PROJECTS.filter((p) => p.category === "app" || p.category === "both");

/* ── Carousel Sub-component ─────────────────────────────── */
function ProjectCarousel({ projects, sectionLabel, sectionIcon, sectionColor }) {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    setActive((idx + projects.length) % projects.length);
    setAnimKey((k) => k + 1);
  }, [projects.length]);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  const handleNav = useCallback((idx) => {
    clearTimeout(timerRef.current);
    goTo(idx);
  }, [goTo]);

  useEffect(() => {
    timerRef.current = setTimeout(next, 6000);
    return () => clearTimeout(timerRef.current);
  }, [active, next]);

  const p = projects[active];

  return (
    <div className="mb-16">
      {/* Section label + arrows */}
      <div className="mb-6 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${sectionColor}15`, color: sectionColor }}>{sectionIcon}</div>
          <h3 className="text-[20px] sm:text-[24px] font-extrabold" style={{ color: "#1a1a1a" }}>{sectionLabel}</h3>
          <div className="h-px flex-1 min-w-[20px] hidden sm:block" style={{ backgroundColor: "rgba(198,209,215,0.5)" }} />
        </div>
        <div className="flex gap-2 shrink-0">
          <button onClick={prev} className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 transition-all duration-200 hover:border-[#1FA0B1] hover:text-[#1FA0B1] hover:shadow-sm"
            style={{ borderColor: "rgba(198,209,215,0.5)", color: "#6B5A5A", backgroundColor: "white" }}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={next} className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 transition-all duration-200 hover:border-[#1FA0B1] hover:text-[#1FA0B1] hover:shadow-sm"
            style={{ borderColor: "rgba(198,209,215,0.5)", color: "#6B5A5A", backgroundColor: "white" }}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main card */}
      <div key={animKey} className="mb-5 overflow-hidden rounded-2xl border shadow-sm flex flex-col sm:grid"
        style={{ borderColor: "rgba(198,209,215,0.4)", gridTemplateColumns: "1fr 1.5fr", backgroundColor: "white" }}>
        {/* Top/Left: image with browser mockup */}
        <div className="relative flex items-center justify-center overflow-hidden p-4 sm:p-6" style={{ backgroundColor: `${p.accent}06`, background: `linear-gradient(135deg, ${p.accent}08 0%, ${p.accent}03 50%, rgba(250,247,245,1) 100%)` }}>
          {/* Decorative dots pattern */}
          <div className="pointer-events-none absolute top-4 left-4 grid grid-cols-3 gap-1.5 opacity-20">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full" style={{ backgroundColor: p.accent }} />
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-4 right-4 grid grid-cols-3 gap-1.5 opacity-20">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full" style={{ backgroundColor: p.accent }} />
            ))}
          </div>

          {/* Browser mockup frame */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-2xl" style={{ transform: "perspective(1200px) rotateY(-2deg) rotateX(1deg)", boxShadow: `0 25px 60px -12px ${p.accent}25, 0 8px 24px -8px rgba(0,0,0,0.15)` }}>
            {/* Browser top bar */}
            <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: "#f1f3f5" }}>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full" style={{ backgroundColor: "#28C840" }} />
              </div>
              <div className="mx-2 flex-1 rounded-md px-3 py-1 text-[10px] font-medium truncate" style={{ backgroundColor: "#fff", color: "#999", border: "1px solid #e5e7eb" }}>
                {p.demo || `nfnexatech.com/projects/${p.slug}`}
              </div>
            </div>
            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: "#fff" }}>
              <Image src={p.image} alt={p.title} fill className="object-contain" sizes="(max-width: 640px) 92vw, 40vw" priority />
            </div>
          </div>
        </div>
        {/* Bottom/Right: details */}
        <div className="flex flex-col gap-3 sm:gap-4 border-t sm:border-t-0 sm:border-l p-4 sm:p-6" style={{ borderColor: "rgba(198,209,215,0.3)" }}>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((tag, i) => (
              <span key={tag} className="rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider"
                style={{ backgroundColor: `${p.tagColors[i]}12`, color: p.tagColors[i] }}>{tag}</span>
            ))}
          </div>
          <h3 className="text-[22px] sm:text-[28px] font-extrabold leading-tight" style={{ color: "#1a1a1a" }}>{p.title}</h3>
          <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: "#6B5A5A" }}>{p.description}</p>
          <div className="flex flex-wrap gap-3 sm:gap-5">
            {p.features.map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-1 text-center">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl" style={{ backgroundColor: `${p.accent}12`, color: p.accent }}>{f.icon}</div>
                <span className="text-[9px] sm:text-[10px] font-medium leading-tight whitespace-pre-line" style={{ color: "#6B5A5A" }}>{f.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="rounded-full px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold"
                style={{ backgroundColor: `${p.accent}10`, color: p.accent }}>{t}</span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            <Link href={`/projects/${p.slug}`}
              className="inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
              style={{ backgroundColor: p.accent, boxShadow: `0 4px 14px ${p.accent}30` }}>
              View Case Study →
            </Link>
            {p.demo ? (
              <a href={p.demo} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 px-5 sm:px-6 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-sm"
                style={{ borderColor: "rgba(198,209,215,0.5)", color: "#1a1a1a", backgroundColor: "white" }}>Live Demo ↗</a>
            ) : (
              <Link href={`/projects/${p.slug}`}
                className="inline-flex items-center gap-2 rounded-full border-2 px-5 sm:px-6 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-sm"
                style={{ borderColor: "rgba(198,209,215,0.5)", color: "#1a1a1a", backgroundColor: "white" }}>Live Demo ↗</Link>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail cards — horizontal scroll on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-1 sm:grid sm:gap-2.5 scrollbar-hide" style={{ gridTemplateColumns: `repeat(${projects.length}, 1fr)` }}>
        {projects.map((proj, idx) => (
          <button
            key={`${proj.slug}-${idx}`}
            onClick={() => handleNav(idx)}
            className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 shrink-0 sm:shrink w-[120px] sm:w-auto ${active === idx ? "shadow-lg scale-[1.03]" : "hover:scale-[1.02] hover:shadow-md"}`}
            style={{
              borderColor: active === idx ? proj.accent : "rgba(198,209,215,0.4)",
              backgroundColor: "white",
            }}
          >
            <div className="relative aspect-[16/9] overflow-hidden" style={{ backgroundColor: `${proj.accent}08` }}>
              <Image src={proj.thumb} alt={proj.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="15vw" />
              {active === idx && (
                <div className="absolute inset-0 ring-2 ring-inset rounded-t-[10px]" style={{ ringColor: `${proj.accent}30` }} />
              )}
              {active === idx && (
                <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left" style={{ backgroundColor: proj.accent, animation: "progress 6s linear forwards" }} />
              )}
            </div>
            <div className="px-1.5 py-1.5 text-center">
              <div className="text-[10px] font-bold leading-tight truncate" style={{ color: active === idx ? proj.accent : "#4a4a4a" }}>{proj.title}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Main Section ───────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="py-16" style={{ backgroundColor: "#FAF7F5" }}>
      <div className="mx-auto w-[92%] max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-2 flex items-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: "#1FA0B1" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: "#1FA0B1" }}>Case Study</span>
            <div className="h-px w-8" style={{ backgroundColor: "#1FA0B1" }} />
          </div>
          <h2 className="text-[32px] font-extrabold tracking-tight sm:text-[40px]" style={{ color: "#1a1a1a" }}>
            Projects We&apos;ve <span style={{ color: "#E8763A" }}>Built</span>
          </h2>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed" style={{ color: "#6B5A5A" }}>
            Explore some of the websites, apps, and software products we&apos;ve built for our clients.
          </p>
        </div>

        {/* Websites Carousel */}
        <ProjectCarousel
          projects={WEBSITES}
          sectionLabel="Websites"
          sectionIcon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2" /><line x1="3" y1="7" x2="21" y2="7" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>}
          sectionColor="#1FA0B1"
        />

        {/* Apps Carousel */}
        <ProjectCarousel
          projects={APPS}
          sectionLabel="Apps"
          sectionIcon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth={2.5} /></svg>}
          sectionColor="#E8763A"
        />
      </div>

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
