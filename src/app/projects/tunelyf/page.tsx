import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import TuneLyfClient from "./TuneLyfClient";

/* ── SEO ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "TuneLyf Case Study | Online & Local Music Player App | NF Nexa Tech",
  description:
    "Explore how NF Nexa Tech built TuneLyf, an Android music player for online and local music with Audius streaming, music search, favorites, playlists, recent plays, and background playback.",
  alternates: { canonical: `${siteConfig.url}/projects/tunelyf` },
  openGraph: {
    title: "TuneLyf Case Study | NF Nexa Tech",
    description:
      "An Android music player combining online Audius music and songs stored on the device with playlists, favorites, search, and background playback.",
    url: `${siteConfig.url}/projects/tunelyf`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}/images/projects/tunelyf/tunelyf_preview.png`,
        width: 1200,
        height: 630,
        alt: "TuneLyf Android music player",
      },
    ],
  },
};

/* ── Data ─────────────────────────────────────────────────── */
export const tunelyfData = {
  slug: "tunelyf",
  title: "TuneLyf",
  subtitle: "A Music Player for Online and Local Music",
  category: "Music & Entertainment",
  color: "#8b5cf6",
  colorRgb: "139,92,246",
  liveUrl: null,

  meta: [
    { icon: "phone", label: "Platform", value: "Android App" },
    { icon: "music", label: "Category", value: "Music Player" },
    { icon: "globe", label: "Music", value: "Online & Local" },
    { icon: "search", label: "Discovery", value: "Music Search" },
    { icon: "headphones", label: "Playback", value: "Background Playback" },
    { icon: "library", label: "Library", value: "Favorites & Playlists" },
  ],

  overview:
    "TuneLyf is a music player built to bring online and local music into one simple listening experience. Users can search for songs and artists, stream online music, or play songs already stored on their device. The app also keeps track of recently played music and lets users save favorites and create playlists for easier access.",

  challenge: {
    heading: "The Challenge",
    body: "Music listeners often use different apps for online streaming and songs stored on their phone. Switching between players also means managing favorites, playlists, and playback separately. TuneLyf was built to bring these everyday listening needs together in one app.",
    points: [
      "Online and device music were handled separately",
      "Finding songs required a simple and quick search experience",
      "Users needed an easy way to return to recently played music",
      "Favorite songs needed to be saved for quick access",
      "Users needed playlists to organize the music they enjoy",
      "Music should continue playing while using other apps",
      "Playback controls should remain available through the notification",
    ],
  },

  approach: {
    heading: "The Solution",
    body: "We built TuneLyf as a single music player that works with both online music and songs stored on the device. Online music is currently powered through the Audius API, while local songs can be discovered and played directly from the phone. The app combines search, playback, favorites, playlists, recent listening, and background controls into one experience.",
    points: [
      "Search and stream online music through the Audius API",
      "Play songs stored locally on the user's device",
      "Browse music by artist and discover related songs",
      "Keep a history of recently played songs",
      "Save songs to favorites",
      "Create and manage personal playlists",
      "Continue music playback in the background",
      "Control playback from the notification",
      "Keep online and local playback within the same player experience",
    ],
  },

  modules: [
    { icon: "search", name: "Music Search", desc: "Search for songs, artists, and available music without having to browse through large music libraries manually." },
    { icon: "globe", name: "Online Music", desc: "Online tracks are currently provided through the Audius API, allowing users to discover and stream music inside TuneLyf." },
    { icon: "phone", name: "Device Music", desc: "Songs already stored on the user's phone can be discovered and played directly through the app." },
    { icon: "headphones", name: "Music Player", desc: "A single player experience handles online and local songs with the controls needed for everyday listening." },
    { icon: "clock", name: "Recently Played", desc: "Recently played songs are kept available so users can quickly return to music they listened to before." },
    { icon: "heart", name: "Favorites", desc: "Users can save songs they enjoy and access their favorite music from one place." },
    { icon: "playlist", name: "Playlists", desc: "Users can create playlists and organize songs according to their own listening preferences." },
    { icon: "music", name: "Artist-Based Music", desc: "Users can explore music through artist information and find more songs from the artists they enjoy." },
    { icon: "bell", name: "Background Playback", desc: "Music continues playing while the user moves to another app or locks the device." },
    { icon: "sliders", name: "Notification Controls", desc: "Playback controls remain available from the Android notification, making it easy to pause, resume, or change tracks." },
    { icon: "library", name: "Personal Library", desc: "Favorites, playlists, recent plays, and device music give users a personal place to manage their listening." },
    { icon: "refresh", name: "Unified Playback", desc: "Online and local songs are handled through the same overall listening experience instead of requiring separate players." },
  ],

  screenshots: [
    { src: "/images/projects/tunelyf/home.jpeg", label: "Home", desc: "The main screen brings together music discovery, recent plays, and quick access to the user's library." },
    { src: "/images/projects/tunelyf/searchsong.jpeg", label: "Music Search", desc: "Search for songs and artists and start listening directly from the results." },
    { src: "/images/projects/tunelyf/artistsong.jpeg", label: "Artist Songs", desc: "Browse songs by a specific artist and discover related music." },
    { src: "/images/projects/tunelyf/playlist.jpeg", label: "Playlists", desc: "Create and manage personal playlists to organize favorite music." },
    { src: "/images/projects/tunelyf/porfile.jpeg", label: "Profile", desc: "User profile and personal listening preferences." },
    { src: "/images/projects/tunelyf/drawer.jpeg", label: "Navigation", desc: "Quick navigation to different sections of the app." },
    { src: "/images/projects/tunelyf/phone.png", label: "Player View", desc: "The main player showing controls for the currently playing song." },
  ],

  architecture: [
    { layer: "Mobile App", tech: "Android", icon: "phone", color: "#3ddc84", desc: "The main TuneLyf application where users discover, organize, and play their music." },
    { layer: "Online Music", tech: "Audius API", icon: "globe", color: "#8b5cf6", desc: "Currently used to search, discover, and stream online music inside the app." },
    { layer: "Local Music", tech: "Device Storage", icon: "music", color: "#06b6d4", desc: "Used to discover and play songs already stored on the user's device." },
    { layer: "Playback", tech: "Background Audio", icon: "headphones", color: "#f97316", desc: "Handles continuous music playback and keeps controls available outside the main app screen." },
    { layer: "User Library", tech: "Local Data", icon: "library", color: "#8b5cf6", desc: "Stores user listening preferences such as favorites, playlists, and recently played music." },
  ],

  results: [
    { value: "2", suffix: "", label: "Music Sources" },
    { value: "1", suffix: "", label: "Unified Player" },
    { value: "24/7", suffix: "", label: "Background Playback" },
    { value: "∞", suffix: "", label: "Personal Playlists" },
  ],

  timeline: [
    { phase: "01", title: "Music Player Foundation", desc: "The core player experience was designed to handle the basic controls and listening flow." },
    { phase: "02", title: "Online Music Integration", desc: "Audius API integration was added to search, discover, and stream online music within the app." },
    { phase: "03", title: "Device Music", desc: "Local songs stored on the device were added to the same music experience." },
    { phase: "04", title: "Library & Discovery", desc: "Favorites, playlists, recent plays, and artist-based music discovery were introduced." },
    { phase: "05", title: "Background Playback", desc: "Background playback and notification controls were added so users could keep listening outside the app." },
    { phase: "06", title: "Ongoing Improvements", desc: "The Audius integration and overall listening experience continue to be improved with new music and playback features." },
  ],

  techStack: [
    { name: "Android", category: "Mobile Platform", icon: "phone", desc: "The platform used to build the TuneLyf mobile application." },
    { name: "Audius API", category: "Online Music", icon: "globe", desc: "Used for online music search, discovery, and streaming." },
    { name: "Local Storage", category: "Device Music", icon: "music", desc: "Used to access and play music stored on the user's device." },
    { name: "Audio Playback", category: "Music Player", icon: "headphones", desc: "Handles music playback and the listening experience across app and background states." },
    { name: "Background Service", category: "Playback", icon: "bell", desc: "Keeps music playing and provides playback controls through the Android notification." },
    { name: "Local Data", category: "User Library", icon: "library", desc: "Used for features such as favorites, playlists, and recently played music." },
  ],
};

/* ── Page ─────────────────────────────────────────────────── */
export default function TuneLyfCaseStudyPage() {
  return <TuneLyfClient data={tunelyfData} />;
}
