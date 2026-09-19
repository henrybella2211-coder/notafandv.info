import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticleBySlug } from "@/content/articles";
import { SITE_URL } from "@/lib/site";

const article = getArticleBySlug("pod-mod-vs-sub-ohm-kit")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    url: `${SITE_URL}/guides/${article.slug}`,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell article={article}>
      <p>
        &ldquo;Pod kit&rdquo; and &ldquo;sub-ohm kit&rdquo; get used loosely
        in vape shop conversation, but on a spec sheet they describe two
        genuinely different pieces of hardware. The split is not just
        marketing: it comes down to wattage range, battery format and
        airflow design, and each of those choices pulls the device toward
        a different type of vaper. This guide sets out the factual
        differences without pretending one category is objectively
        better than the other.
      </p>

      <h2>What actually defines the difference</h2>
      <p>
        A pod kit is built around a small, usually sealed or semi-sealed
        pod that clicks or screws into a compact body. A sub-ohm kit
        pairs a separate tank, capable of holding coils with resistances
        below 1 ohm, with a larger mod body designed to drive more power
        through that coil. The word &ldquo;sub-ohm&rdquo; refers
        specifically to coil resistance under 1.0 ohm, which is why these
        kits need higher wattage and current-handling capability than a
        typical pod system.
      </p>

      <h2>Chipset and wattage range</h2>
      <p>
        Pod kits are usually built around simpler chipsets, often fixed
        or with a narrow adjustable wattage band, commonly somewhere in
        the 5&ndash;25W range depending on the model. This suits the
        lower-resistance-tolerant, higher-resistance coils typically used
        for a mouth-to-lung (MTL) draw, where less power is needed to
        produce a satisfying amount of vapour.
      </p>
      <p>
        Sub-ohm kits generally carry more capable chipsets with a wider
        wattage window, often somewhere between 40W and 220W depending on
        the model and cell configuration, plus features like adjustable
        temperature control or preheat curves on higher-end devices.
        Manufacturers publish these ranges on the box and in the
        datasheet, but the exact figures vary between models, so always
        check the specific product rather than assuming a whole category
        behaves identically.
      </p>

      <h2>Battery format: internal vs removable cells</h2>
      <p>
        Most pod kits use a built-in, non-removable battery, charged
        directly through a USB-C port on the device itself. Capacity is
        usually modest, often in the few-hundred to low-thousand mAh
        range, which is generally enough for a device drawing single-digit
        to low double-digit wattage.
      </p>
      <p>
        Sub-ohm mods more frequently use removable 18650 or 21700 cells
        (the numbers refer to the cell&rsquo;s physical dimensions), which
        can be swapped out and charged externally in a dedicated charger.
        Some sub-ohm-capable mods do use an internal battery instead, so
        this is a spec to check rather than assume. Removable-cell devices
        give you a spare battery for longer days out, but they also mean
        you are responsible for buying cells with an appropriate
        continuous discharge rating and looking after them properly (see
        our{" "}
        <Link href="/guides/battery-and-charging-safety">
          battery and charging safety guide
        </Link>{" "}
        for the basics).
      </p>

      <h2>Airflow control and draw style</h2>
      <p>
        Pod kits are usually tuned for a mouth-to-lung (MTL) draw: airflow
        is restricted, mimicking the resistance of drawing on a
        cigarette, and pods are limited to 2ml of e-liquid capacity under
        UK regulation (the Tobacco and Related Products Regulations cap
        refillable pod and cartridge capacity at 2ml, and bottled
        nicotine-containing e-liquid at 10ml, details set out on{" "}
        <a
          href="https://www.gov.uk/guidance/tobacco-products-and-e-cigarettes-regulations-for-retailers"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOV.UK
        </a>
        ).
      </p>
      <p>
        Sub-ohm tanks typically have a wide-open, adjustable airflow ring
        or slider, built for a direct-to-lung (DTL) draw, more like
        breathing directly into the lungs. This produces denser vapour
        and is generally paired with higher-VG e-liquid, though tank
        capacity itself is not restricted by the same 2ml pod rule that
        applies to sealed pod cartridges. See our{" "}
        <Link href="/guides/adjustable-airflow-explained">
          guide to what adjustable airflow actually changes
        </Link>{" "}
        for how opening or restricting that ring affects draw resistance,
        flavour and vapour temperature.
      </p>

      <h2>Who each category tends to suit</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Pod kit</th>
            <th>Sub-ohm kit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typical draw style</td>
            <td>MTL</td>
            <td>DTL</td>
          </tr>
          <tr>
            <td>Typical wattage</td>
            <td>5&ndash;25W</td>
            <td>40&ndash;220W</td>
          </tr>
          <tr>
            <td>Battery</td>
            <td>Internal, fixed</td>
            <td>Often 18650/21700</td>
          </tr>
          <tr>
            <td>Juice capacity</td>
            <td>2ml (UK regulated)</td>
            <td>Varies by tank</td>
          </tr>
          <tr>
            <td>Typical size/weight</td>
            <td>Pocketable</td>
            <td>Larger, heavier</td>
          </tr>
        </tbody>
      </table>
      <p>
        In our view, pod kits generally suit vapers who want something
        discreet and simple, particularly those who came from smoking and
        want a similar restricted draw. Sub-ohm kits tend to suit vapers
        who already have some experience and specifically want higher
        vapour volume or the flexibility of swapping coils and batteries.
        Neither is inherently the &ldquo;better&rdquo; device; they are
        built for different priorities.
      </p>
      <p>
        Newer rechargeable pod kits with replaceable pod modules, such as
        the{" "}
        <Link href="/guides/al-fakher-hypermax-prime-50k-battery-charging-specs">
          Al Fakher HyperMax Prime 50K
        </Link>
        , still sit on the pod kit side of this split: fixed internal
        battery, sealed pod, no adjustable airflow. What differs from an
        older-style pod kit is that the coil is swapped with every pod
        change rather than wearing down across one fixed coil, which is
        worth checking on the spec sheet alongside the wattage and
        battery figures covered above.
      </p>

      <h2>Reading the spec sheet before you buy</h2>
      <p>
        Category labels are a starting point, not the full picture. Two
        pod kits can have meaningfully different wattage ranges, and some
        newer &ldquo;pod mod&rdquo; hybrids blur the line by offering
        sub-ohm-style power in a pod-shaped body. Our{" "}
        <Link href="/guides/how-to-compare-vape-device-specs">
          guide to comparing vape device specs
        </Link>{" "}
        walks through exactly which numbers on a manufacturer datasheet
        are worth checking before deciding between categories, including
        resistance range, battery capacity and chipset features.
      </p>
    </ArticleShell>
  );
}
