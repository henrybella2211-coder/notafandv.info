import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Device Watch UK editorial team about a guide, a correction or a general question.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Device Watch UK",
    description: "Get in touch with the Device Watch UK editorial team.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      <h1 className="font-heading text-3xl font-extrabold text-dw-fg">Contact</h1>
      <p className="mt-3 text-sm leading-relaxed text-dw-fg-muted">
        Spotted something inaccurate in a guide, or have a question about
        device specs we cover? Use the form below and it will open your
        email client with your message ready to send.
      </p>
      <ContactForm />
    </div>
  );
}
