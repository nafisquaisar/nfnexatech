import { redirect } from "next/navigation";

// /contact redirects to homepage #contact anchor
// noindex — this page only redirects, it should not appear in search results
export const metadata = {
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  redirect("/#contact");
}
