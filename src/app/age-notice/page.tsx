import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Age Notice",
  description: "Device Watch UK is intended for adult smokers and vapers aged 18 and over.",
  alternates: { canonical: "/age-notice" },
  openGraph: {
    title: "Age Notice | Device Watch UK",
    description: "Device Watch UK is intended for adult smokers and vapers aged 18 and over.",
    url: `${SITE_URL}/age-notice`,
  },
};

export default function AgeNoticePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Age Notice", href: "/age-notice" }]} />
      <h1 className="font-heading text-3xl font-extrabold text-dw-fg">Age Notice</h1>

      <div className="dw-prose mt-8">
        <p>
          <strong>Device Watch UK is intended for adults aged 18 and
          over</strong> who already smoke or vape, or who are seeking
          factual information about vaping hardware for other legitimate
          reasons such as research, retail work, or supporting someone
          else&rsquo;s decision-making.
        </p>
        <p>
          Nothing on this site is intended to encourage anyone under 18,
          or anyone who does not already smoke or vape, to start using
          vaping or nicotine products. If you are under 18, please leave
          this site.
        </p>

        <h2>The legal position in the UK</h2>
        <p>
          UK law sets the minimum age to purchase vaping and tobacco
          products at 18, under the Children and Young Persons Act, and
          this is enforced by retailers through ID checks at the point of
          sale. Many retailers apply a &ldquo;Challenge 25&rdquo; policy,
          asking for ID from anyone who appears under 25, as their own
          business practice, though the legal age itself remains 18.
        </p>

        <h2>Why we do not use a pop-up age gate</h2>
        <p>
          Some sites use a full-screen age verification pop-up that
          visitors must click through before seeing any content. We have
          chosen not to build one, because a self-declared click-through
          box does not meaningfully verify anyone&rsquo;s age and can
          make a site harder to use for search engines, assistive
          technology and ordinary readers alike. Instead, we display this
          notice clearly on every page via the footer, and as its own
          page here, which we believe is a more honest and accessible
          approach for an informational site that does not sell products
          directly.
        </p>

        <h2>If you smoke or currently vape</h2>
        <p>
          According to the NHS, vaping is regulated but not risk-free; it
          is not described as harmless. Public health bodies such as the
          NHS and Cancer Research UK/OHID generally position vaping as
          substantially less harmful than smoking and as something that
          can support quitting smoking, while continuing to note that it
          is not risk-free and is not intended for people who do not
          already smoke. If you are trying to quit smoking, NHS Smokefree
          services offer free, evidence-based support.
        </p>

        <p>
          See also our <Link href="/terms">terms & disclaimer</Link> and{" "}
          <Link href="/editorial-policy">editorial policy</Link> for how
          this content is researched and sourced.
        </p>
      </div>
    </div>
  );
}
