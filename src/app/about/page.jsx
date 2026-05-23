import { redirect } from "next/navigation";

// /about redirects to homepage #about anchor
export default function AboutPage() {
  redirect("/#about");
}
