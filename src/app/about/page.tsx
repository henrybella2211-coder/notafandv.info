import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Device Watch UK: an independent UK information site covering vape device categories, chipsets and battery specifications.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Device Watch UK",
    description:
      "An independent UK information site covering vape device categories, chipsets and battery specifications.",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <h1 className="font-heading text-3xl font-extrabold text-dw-fg">About Device Watch UK</h1>

      <div className="dw-prose mt-8">
        <p>
          Device Watch UK is an independent UK vaping information website.
          We are not a retailer, we do not sell devices or e-liquid, and
          we are not affiliated with any device manufacturer. The site
          exists because vape hardware spec sheets are often written in
          marketing language that is hard to compare between brands, and
          we think a plain, spec-driven explanation is more useful than
          another glowing product write-up.
        </p>

        <h2>What we cover</h2>
        <p>
          Our editorial focus is vape device technology: how pod kits and
          sub-ohm kits differ, how to read a manufacturer spec sheet
          properly, and how battery and charging systems work across
          different device types. We write for adult vapers who already
          use, or are considering switching to, vaping hardware and who
          want to understand the numbers on the box before they buy,
          rather than take a shop assistant&rsquo;s recommendation on
          trust alone.
        </p>

        <h2>How our content is written</h2>
        <p>
          Guides are written and edited by our UK-based editorial team,
          based on published manufacturer specifications and official UK
          regulatory sources such as GOV.UK and the MHRA. We do not run
          our own lab tests, coil longevity trials or battery benchmarks,
          and we say so clearly wherever it is relevant rather than
          implying we tested a product ourselves. For more detail on our
          sourcing and correction process, see our{" "}
          <Link href="/editorial-policy">editorial policy</Link>.
        </p>

        <h2>Who this site is for</h2>
        <p>
          This site is written for adults aged 18 and over who already
          smoke or vape, or who are seeking factual information about
          vaping hardware for other legitimate reasons. It is not
          intended to encourage anyone under 18, or anyone who does not
          already smoke or vape, to start. See our{" "}
          <Link href="/age-notice">age notice</Link> for the full
          statement.
        </p>

        <h2>Get in touch</h2>
        <p>
          If you have spotted an inaccuracy or have a question about a
          guide, our <Link href="/contact">contact page</Link> has the
          quickest way to reach the editorial team.
        </p>
      </div>
    </div>
  );
}
