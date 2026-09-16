import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Device Watch UK handles personal data, in plain terms.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Device Watch UK",
    description: "How Device Watch UK handles personal data.",
    url: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <h1 className="font-heading text-3xl font-extrabold text-dw-fg">Privacy Policy</h1>
      <p className="mt-2 text-sm text-dw-fg-muted">Last updated 16 September 2026</p>

      <div className="dw-prose mt-8">
        <p>
          This policy explains, in plain terms, what happens to your
          personal data when you use Device Watch UK (this website). It is
          written to comply with UK GDPR and the Data Protection Act 2018,
          which govern how websites operating in the UK handle personal
          information.
        </p>

        <h2>Who this applies to</h2>
        <p>
          This policy covers visitors to devicewatch.uk-style pages served
          from this domain. Device Watch UK is an independent information
          website; we do not operate a customer account system, checkout,
          or login area, so there is no stored account data to speak of.
        </p>

        <h2>What data we collect</h2>
        <p>
          We keep this deliberately minimal. This website does not
          currently run any analytics, tracking pixels or advertising
          scripts. If that changes in future, this page will be updated
          to name the specific service used before it is switched on.
        </p>
        <p>
          The only personal data we handle directly is what you choose to
          send us. Our <Link href="/contact">contact page</Link> uses a
          form that opens your own email client with your message
          pre-filled; the data you enter (name, email address, message)
          is composed and sent by you, from your own device, using your
          own email account. We do not receive or store anything from
          that form unless and until you personally choose to send the
          resulting email, at which point it exists as an ordinary email
          in whatever inbox you send it to.
        </p>

        <h2>Cookies</h2>
        <p>
          See our <Link href="/cookie-policy">cookie policy</Link> for a
          full explanation of cookie use on this site. In short: we do not
          currently set tracking or advertising cookies.
        </p>

        <h2>Hosting and technical logs</h2>
        <p>
          Like virtually any website, the server or hosting platform that
          serves these pages may keep standard technical logs (such as IP
          address, browser type and page requested) for security and
          operational purposes, as most web hosts do by default. We do
          not separately access or process these logs for marketing
          purposes.
        </p>

        <h2>Data sharing</h2>
        <p>
          We do not sell, rent or share personal data with third parties
          for marketing purposes. Because we do not operate accounts,
          analytics or advertising integrations, there is currently no
          third-party data processor beyond the underlying hosting
          provider needed to serve the site itself.
        </p>

        <h2>Your rights</h2>
        <p>
          Under UK GDPR you have rights including access to, correction
          of, and deletion of personal data we hold about you. Since the
          only personal data we handle is what you send via email through
          the contact form, exercising these rights is generally as
          simple as asking us to delete a specific email exchange. Contact
          us via the <Link href="/contact">contact page</Link> for any
          data query.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If our data practices change, for example if we add analytics
          in future, we will update this page and the &ldquo;last
          updated&rdquo; date at the top.
        </p>
      </div>
    </div>
  );
}
