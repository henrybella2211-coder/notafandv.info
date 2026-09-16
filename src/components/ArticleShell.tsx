import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import SpecChip from "@/components/SpecChip";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { ArticleMeta } from "@/content/articles";
import type { ReactNode } from "react";

export default function ArticleShell({
  article,
  children,
}: {
  article: ArticleMeta;
  children: ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.datePublishedISO,
    dateModified: article.lastUpdatedISO,
    author: {
      "@type": "Organization",
      name: `${SITE_NAME} editorial team`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    mainEntityOfPage: `${SITE_URL}/guides/${article.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: article.title, href: `/guides/${article.slug}` },
        ]}
      />

      <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono-nums uppercase tracking-wide text-dw-fg-muted">
        <span className="rounded border border-dw-border px-1.5 py-0.5">{article.category}</span>
        <span>{article.readTime}</span>
      </div>

      <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-dw-fg sm:text-4xl">
        {article.title}
      </h1>

      <p className="mt-4 text-sm font-medium text-dw-fg-muted">{article.lastUpdated}</p>

      <div className="mt-3">
        <SpecChip label="device type" value={article.deviceType} />
      </div>

      <div className="relative mt-8 h-64 w-full overflow-hidden rounded-lg border border-dw-border sm:h-80">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>

      <div className="dw-prose mt-10">{children}</div>
    </article>
  );
}
