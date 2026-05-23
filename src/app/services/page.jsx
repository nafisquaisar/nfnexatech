import { redirect } from "next/navigation";

// /services redirects to homepage #services anchor
export default function ServicesPage() {
  redirect("/#services");
}
