import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description: "Website terms of use and editorial disclaimer for Device Watch UK.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Disclaimer | Device Watch UK",
    description: "Website terms of use and editorial disclaimer for Device Watch UK.",
    url: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Disclaimer", href: "/terms" }]} />
      <h1 className="font-heading text-3xl font-extrabold text-dw-fg">Terms & Website Disclaimer</h1>
      <p className="mt-2 text-sm text-dw-fg-muted">Last updated 16 September 2026</p>

      <div className="dw-prose mt-8">
        <p>
          These terms cover use of Device Watch UK (this website). By
          browsing the site, you accept the terms set out below. If you
          do not agree with them, please do not continue to use the site.
        </p>

        <h2>18+ age notice</h2>
        <p>
          Device Watch UK is intended for adults aged 18 and over who
          already smoke or vape, or who are seeking factual information
          about vaping hardware. Nothing on this site is intended to
          encourage anyone under 18, or anyone who does not already smoke
          or vape, to start using vaping products. Under UK law, the
          minimum age to purchase vaping and tobacco products is 18,
          enforced through retailer ID checks (many retailers apply a
          &ldquo;Challenge 25&rdquo; policy on top of this as their own
          practice, not a separate legal requirement). See our dedicated{" "}
          <Link href="/age-notice">age notice</Link> for the full
          statement.
        </p>

        <h2>Informational purpose only</h2>
        <p>
          Content on Device Watch UK is provided for general information
          purposes only. It explains device categories, hardware
          specifications and general safety practice; it is not
          personalised advice, and it is not medical advice. If you have
          a health question related to smoking, vaping or nicotine, speak
          to a healthcare professional or a service such as the NHS
          Smokefree programme.
        </p>

        <h2>No liability for third-party product claims</h2>
        <p>
          Where we describe a device category or reference typical
          specifications, these are drawn from published manufacturer
          material and general category knowledge, not from our own
          product testing. We are not responsible for the accuracy of
          any individual manufacturer&rsquo;s marketing claims, and we
          recommend checking a specific product&rsquo;s own datasheet
          before purchase, since specifications can change between
          revisions.
        </p>

        <h2>External links</h2>
        <p>
          This site links to external sources, including official UK
          government and health bodies (such as GOV.UK, the MHRA and the
          NHS) and, occasionally, manufacturer websites when naming a
          specific device model is genuinely useful. We do not control
          the content of external sites and are not responsible for their
          content, availability or accuracy. Links are provided for
          convenience and do not imply endorsement of everything on the
          linked site.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The text, design and original imagery selection on this site
          are the property of Device Watch UK unless otherwise credited.
          Photographs used are sourced under the Unsplash License. You
          may share links to our pages; please do not republish our
          articles wholesale without permission.
        </p>

        <h2>No warranty</h2>
        <p>
          This site is provided &ldquo;as is&rdquo; without warranty of
          any kind. We make reasonable efforts to keep information
          accurate and up to date, but we do not guarantee that content
          is complete, error-free, or suitable for any particular
          purpose.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. Continued use of
          the site after changes are posted constitutes acceptance of the
          revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent via our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
