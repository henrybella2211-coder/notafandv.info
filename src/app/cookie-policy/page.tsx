import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies, if any, Device Watch UK actually uses.",
  alternates: { canonical: "/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | Device Watch UK",
    description: "What cookies, if any, Device Watch UK actually uses.",
    url: `${SITE_URL}/cookie-policy`,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Cookie Policy", href: "/cookie-policy" }]}
      />
      <h1 className="font-heading text-3xl font-extrabold text-dw-fg">Cookie Policy</h1>
      <p className="mt-2 text-sm text-dw-fg-muted">Last updated 16 September 2026</p>

      <div className="dw-prose mt-8">
        <p>
          This page explains, honestly and specifically, what cookies
          Device Watch UK uses. We would rather under-claim than
          over-claim here.
        </p>

        <h2>Current cookie use</h2>
        <p>
          This website does not currently use tracking cookies, analytics
          cookies or advertising cookies of any kind. We have not
          installed a Google Analytics tag, an advertising pixel, or any
          third-party tracking script. Because of this, we have not built
          a cookie consent banner: under UK Privacy and Electronic
          Communications Regulations (PECR), consent banners are required
          for non-essential cookies, and since we are not setting any,
          there is currently nothing to gain consent for.
        </p>
        <p>
          If the site is technically setting any strictly necessary
          cookie required purely for basic functionality (for example, one
          set automatically by the hosting platform to keep a page
          request working correctly), it does not track you across
          visits or sites and is not used for advertising or profiling.
        </p>

        <h2>If this changes</h2>
        <p>
          Should we ever add analytics, advertising, or any other
          non-essential cookie or tracking script in future, we will
          update this page to name the specific service, explain what it
          does, and add a proper consent mechanism before it is switched
          on, not after.
        </p>

        <h2>Browser controls</h2>
        <p>
          Regardless of what this specific site does, most browsers let
          you view, block or delete cookies generally through their
          settings menu. This gives you control over cookie behaviour
          across every site you visit, not just this one.
        </p>

        <h2>Questions</h2>
        <p>
          If you have a question about cookies or tracking on this site,
          get in touch via our <Link href="/contact">contact page</Link>.
          See also our <Link href="/privacy-policy">privacy policy</Link>{" "}
          for how we handle any personal data you do send us.
        </p>
      </div>
    </div>
  );
}
