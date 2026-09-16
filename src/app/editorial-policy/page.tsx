import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Device Watch UK researches, writes and corrects its guides.",
  alternates: { canonical: "/editorial-policy" },
  openGraph: {
    title: "Editorial Policy | Device Watch UK",
    description: "How Device Watch UK researches, writes and corrects its guides.",
    url: `${SITE_URL}/editorial-policy`,
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Editorial Policy", href: "/editorial-policy" }]}
      />
      <h1 className="font-heading text-3xl font-extrabold text-dw-fg">Editorial Policy</h1>
      <p className="mt-2 text-sm text-dw-fg-muted">Last updated 16 September 2026</p>

      <div className="dw-prose mt-8">
        <p>
          This page explains how Device Watch UK researches and writes
          its guides, and what we do when something needs correcting.
        </p>

        <h2>How we research</h2>
        <p>
          Hardware guides are built from published manufacturer
          specification sheets and general category knowledge about how
          vape device chipsets, batteries and tanks work. For regulatory
          and legal content, such as age-of-sale rules, nicotine strength
          limits or the disposable vape ban, we reference official UK
          sources: GOV.UK, the Medicines and Healthcare products
          Regulatory Agency (MHRA), the NHS, and Trading Standards
          guidance. For health-adjacent framing around vaping and
          smoking, we defer to positions published by bodies such as the
          NHS and the Office for Health Improvement and Disparities
          (OHID), rather than asserting health claims ourselves.
        </p>

        <h2>What we do not do</h2>
        <p>
          We do not run our own product lab tests, coil longevity trials,
          vapour density measurements or battery drain benchmarks. Where
          a guide discusses typical wattage ranges, battery formats or
          other category-level figures, these come from published specs
          and general technical knowledge, not from testing a specific
          unit ourselves. We say this plainly in articles rather than
          implying hands-on testing that did not happen.
        </p>

        <h2>Independence</h2>
        <p>
          Device Watch UK does not accept payment for favourable coverage
          of any device, brand or retailer. We are not currently running
          affiliate or sponsored content; if that changes, any
          commercial relationship will be clearly disclosed on the
          relevant page.
        </p>

        <h2>Keeping content current</h2>
        <p>
          UK vaping regulation changes periodically, most notably the ban
          on disposable (single-use) vapes that took effect on 1 June
          2025. Each guide carries a visible &ldquo;last updated&rdquo;
          date, and we review regulatory references when we become aware
          of a change, rather than leaving outdated legal claims live.
        </p>

        <h2>Corrections</h2>
        <p>
          If you spot an inaccuracy, factual error or outdated regulatory
          reference in any guide, please tell us via our{" "}
          <Link href="/contact">contact page</Link>. We will review and
          correct genuine errors, and update the article&rsquo;s
          &ldquo;last updated&rdquo; date when a correction is made.
        </p>

        <h2>Authorship</h2>
        <p>
          Guides are written and edited by our UK-based editorial team
          collectively; we do not publish individual bylines with
          invented credentials, since doing so would misrepresent a
          single fictitious author where the reality is a small editorial
          process.
        </p>
      </div>
    </div>
  );
}
