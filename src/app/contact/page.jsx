import { redirect } from "next/navigation";

// /contact redirects to homepage #contact anchor
export default function ContactPage() {
  redirect("/#contact");
}
