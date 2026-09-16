import Image from "next/image";
import Link from "next/link";
import { articles } from "@/content/articles";
import SpecChip from "@/components/SpecChip";

export default function HomePage() {
  return (
    <>
      {/* Hero with comparison teaser table */}
      <section className="border-b border-dw-border bg-dw-bg">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 font-mono-nums text-xs uppercase tracking-widest text-dw-blue-light">
                UK vape hardware, explained
              </p>
              <h1 className="font-heading text-3xl font-extrabold leading-tight text-dw-fg sm:text-4xl lg:text-5xl">
                Vape hardware, compared properly.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-dw-fg-muted">
                Device Watch UK reads the spec sheets so you do not have to
                guess. We explain what wattage range, chipset features,
                battery capacity and pod limits actually mean, category by
                category, based on published manufacturer specifications.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/guides"
                  className="rounded-md bg-dw-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dw-blue-light"
                >
                  Browse all guides
                </Link>
                <Link
                  href="/guides/how-to-compare-vape-device-specs"
                  className="rounded-md border border-dw-blue px-5 py-2.5 text-sm font-semibold text-dw-blue-light transition-colors hover:bg-dw-blue/10"
                >
                  Learn to read a spec sheet
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-dw-border bg-dw-bg-raised p-1 shadow-[0_0_40px_-15px_rgba(59,130,246,0.35)]">
              <div className="border-b border-dw-border px-4 py-3">
                <span className="font-mono-nums text-xs uppercase tracking-wide text-dw-fg-muted">
                  Category snapshot
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wide text-dw-fg-muted">
                      <th className="px-4 py-2 font-mono-nums font-normal">Spec</th>
                      <th className="px-4 py-2 font-mono-nums font-normal">Pod kit</th>
                      <th className="px-4 py-2 font-mono-nums font-normal">Sub-ohm kit</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono-nums">
                    <tr className="border-t border-dw-border">
                      <td className="px-4 py-3 text-dw-fg-muted">Typical wattage</td>
                      <td className="px-4 py-3">5&ndash;25W</td>
                      <td className="px-4 py-3">40&ndash;220W</td>
                    </tr>
                    <tr className="border-t border-dw-border">
                      <td className="px-4 py-3 text-dw-fg-muted">Battery format</td>
                      <td className="px-4 py-3">Internal, fixed</td>
                      <td className="px-4 py-3">
                        <SpecChip label="often" value="18650/21700" tone="pro" />
                      </td>
                    </tr>
                    <tr className="border-t border-dw-border">
                      <td className="px-4 py-3 text-dw-fg-muted">Draw style</td>
                      <td className="px-4 py-3">MTL</td>
                      <td className="px-4 py-3">DTL</td>
                    </tr>
                    <tr className="border-t border-dw-border">
                      <td className="px-4 py-3 text-dw-fg-muted">Tank/pod limit</td>
                      <td className="px-4 py-3">2ml (UK reg.)</td>
                      <td className="px-4 py-3">Varies by tank</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-t border-dw-border px-4 py-2.5 text-[11px] text-dw-fg-muted">
                Typical ranges from published specs, not lab-tested figures.{" "}
                <Link href="/guides/pod-mod-vs-sub-ohm-kit" className="text-dw-blue-light hover:underline">
                  Read the full comparison
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare by category tiles */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-dw-fg">Compare by category</h2>
        <p className="mt-2 max-w-2xl text-sm text-dw-fg-muted">
          Four ways UK vapers usually think about hardware. Each category
          covers different priorities, from airflow control to charging
          format.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CategoryTile
            title="Pod Kits"
            description="Compact, MTL-focused devices with sealed or refillable pods capped at 2ml under UK regulation. Lower wattage range, simpler controls."
            href="/guides#pod-and-sub-ohm"
          />
          <CategoryTile
            title="Sub-ohm"
            description="Higher-wattage DTL devices, usually with removable 18650 or 21700 cells and adjustable airflow for bigger vapour production."
            href="/guides#pod-and-sub-ohm"
          />
          <CategoryTile
            title="Battery & Chipset"
            description="mAh capacity, charge time, temperature control and puff counters. What the numbers on a spec sheet mean for daily use."
            href="/guides#battery-and-chipset"
          />
          <CategoryTile
            title="Accessories"
            description="Spare coils, drip tips, replacement pods and charging leads. Compatibility is brand and model specific, so always check before buying."
            href="/guides"
          />
        </div>
      </section>

      {/* Latest articles */}
      <section className="border-t border-dw-border bg-dw-bg-strip">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-heading text-2xl font-bold text-dw-fg">Latest guides</h2>
            <Link href="/guides" className="text-sm text-dw-blue-light hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-8 space-y-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/guides/${article.slug}`}
                className="group flex flex-col gap-4 rounded-lg border border-dw-border bg-dw-bg-raised p-4 transition-all hover:border-dw-blue/50 hover:shadow-[0_0_30px_-12px_rgba(59,130,246,0.45)] sm:flex-row sm:items-center"
              >
                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-md sm:h-24 sm:w-36">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 144px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono-nums uppercase tracking-wide text-dw-fg-muted">
                    <span className="rounded border border-dw-border px-1.5 py-0.5">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                    <span>{article.lastUpdated}</span>
                  </div>
                  <h3 className="mt-1.5 font-heading text-lg font-bold text-dw-fg group-hover:text-dw-blue-light">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm text-dw-fg-muted">{article.excerpt}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <SpecChip label="type" value={article.deviceType} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we compare methodology strip */}
      <section className="border-t border-dw-border bg-dw-bg">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="rounded-lg border border-dw-border bg-dw-bg-raised px-6 py-6 sm:px-8">
            <h2 className="font-heading text-lg font-bold text-dw-fg">How we compare</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-dw-fg-muted">
              Every comparison on Device Watch UK is built from published
              manufacturer specification sheets and official UK regulatory
              sources, not in-house lab testing. We do not run coil
              longevity tests, battery drain benchmarks or vapour density
              measurements ourselves, and we say so plainly rather than
              implying otherwise. Where a spec varies between markets or
              hardware revisions, we note that it varies instead of
              picking a single figure.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryTile({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-dw-border bg-dw-bg-raised p-5 transition-all hover:border-dw-blue/50 hover:shadow-[0_0_30px_-12px_rgba(59,130,246,0.45)]"
    >
      <h3 className="font-heading text-base font-bold text-dw-fg group-hover:text-dw-blue-light">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-dw-fg-muted">{description}</p>
    </Link>
  );
}
