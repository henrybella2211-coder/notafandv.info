import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/content/articles";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "All Device Watch UK guides: vape device categories, spec-sheet comparisons and battery/charging safety, with category tags, read times and last-updated dates.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Guides | Device Watch UK",
    description:
      "Vape device category breakdowns, spec-sheet comparisons and battery safety guides, all in one dense archive.",
    url: `${SITE_URL}/guides`,
  },
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }]} />

      <h1 className="font-heading text-3xl font-extrabold text-dw-fg">Guides</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-dw-fg-muted">
        Every Device Watch UK guide, in one dense list. Sorted by category:
        device-category comparisons first, then battery and chipset guides.
        Each row links to the full write-up with specs, context and
        internal links to related guides.
      </p>

      {/* Desktop table-like view */}
      <div className="mt-10 hidden overflow-hidden rounded-lg border border-dw-border md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dw-border bg-dw-bg-raised text-left text-xs uppercase tracking-wide text-dw-fg-muted">
              <th className="px-4 py-3 font-mono-nums font-normal">Guide</th>
              <th className="px-4 py-3 font-mono-nums font-normal">Category</th>
              <th className="px-4 py-3 font-mono-nums font-normal">Device type</th>
              <th className="px-4 py-3 font-mono-nums font-normal">Updated</th>
              <th className="px-4 py-3 font-mono-nums font-normal">Read</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, i) => (
              <tr
                key={article.slug}
                id={
                  i === 0
                    ? "pod-and-sub-ohm"
                    : i === 1
                      ? "battery-and-chipset"
                      : undefined
                }
                className="border-b border-dw-border bg-dw-bg last:border-b-0 hover:bg-dw-bg-raised"
              >
                <td className="px-4 py-4">
                  <Link
                    href={`/guides/${article.slug}`}
                    className="font-heading font-semibold text-dw-fg hover:text-dw-blue-light"
                  >
                    {article.title}
                  </Link>
                  <p className="mt-1 text-xs text-dw-fg-muted">{article.excerpt}</p>
                </td>
                <td className="px-4 py-4 align-top">
                  <span className="rounded border border-dw-border px-1.5 py-0.5 font-mono-nums text-[11px] uppercase tracking-wide text-dw-fg-muted">
                    {article.category}
                  </span>
                </td>
                <td className="px-4 py-4 align-top font-mono-nums text-xs text-dw-fg-muted">
                  {article.deviceType}
                </td>
                <td className="px-4 py-4 align-top font-mono-nums text-xs text-dw-fg-muted whitespace-nowrap">
                  {article.lastUpdatedISO}
                </td>
                <td className="px-4 py-4 align-top font-mono-nums text-xs text-dw-fg-muted whitespace-nowrap">
                  {article.readTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card fallback */}
      <div className="mt-10 space-y-4 md:hidden">
        {articles.map((article, i) => (
          <Link
            key={article.slug}
            href={`/guides/${article.slug}`}
            id={
              i === 0
                ? "pod-and-sub-ohm-mobile"
                : i === 1
                  ? "battery-and-chipset-mobile"
                  : undefined
            }
            className="block rounded-lg border border-dw-border bg-dw-bg-raised p-4"
          >
            <div className="relative mb-3 h-36 w-full overflow-hidden rounded-md">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono-nums uppercase tracking-wide text-dw-fg-muted">
              <span className="rounded border border-dw-border px-1.5 py-0.5">
                {article.category}
              </span>
              <span>{article.readTime}</span>
              <span>{article.lastUpdatedISO}</span>
            </div>
            <h2 className="mt-2 font-heading text-base font-bold text-dw-fg">
              {article.title}
            </h2>
            <p className="mt-1 text-sm text-dw-fg-muted">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
