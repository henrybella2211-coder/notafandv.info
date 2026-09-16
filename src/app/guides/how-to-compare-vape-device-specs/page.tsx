import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticleBySlug } from "@/content/articles";
import { SITE_URL } from "@/lib/site";

const article = getArticleBySlug("how-to-compare-vape-device-specs")!;

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
        Manufacturer spec sheets pack a lot of numbers into a small space,
        and it is easy to skim past the ones that actually matter for how
        a device feels to use day to day. This guide breaks down the
        handful of specs worth checking properly before buying, whether
        you are looking at a{" "}
        <Link href="/guides/pod-mod-vs-sub-ohm-kit">
          pod kit or a sub-ohm kit
        </Link>
        , and what each figure practically means.
      </p>

      <h2>Wattage range</h2>
      <p>
        Wattage range tells you the minimum and maximum power the chipset
        can push through a coil. A device listed at &ldquo;5&ndash;80W&rdquo;
        can run a low-power MTL coil near the bottom of that range and a
        higher-drain DTL coil nearer the top. What matters is whether the
        range comfortably covers the resistance of the coils you actually
        intend to use; a mismatch (very low resistance on a low-wattage
        device, or vice versa) generally gives a poor or inconsistent
        vape.
      </p>

      <h2>Resistance range supported</h2>
      <p>
        Listed separately from wattage, this is the coil resistance
        (measured in ohms) the chipset is rated to fire safely, for
        example &ldquo;0.15&ndash;3.0 ohm&rdquo;. Fitting a coil outside
        that stated range is generally not recommended by manufacturers,
        even if it physically screws in, because the chipset&rsquo;s
        protection circuitry is calibrated for the listed window. This
        figure matters most if you plan to switch between coil types on
        the same device.
      </p>

      <h2>Battery capacity and what mAh means for you</h2>
      <p>
        Capacity is given in milliamp-hours (mAh): a bigger number
        generally means more charge stored, though real-world time
        between charges also depends heavily on wattage used, how often
        you vape, and screen/chipset overhead. A 2000mAh internal battery
        run at low pod-kit wattage can comfortably outlast a 3000mAh cell
        pushed hard in a high-wattage sub-ohm setup. Treat mAh as a
        rough guide rather than a precise runtime promise, since
        manufacturers rarely test under identical conditions to each
        other.
      </p>
      <p>
        For devices using removable cells, the mAh rating sits on the
        battery itself rather than the device, and you can generally swap
        in a higher-capacity cell of the correct size and discharge
        rating if the device supports it. Our{" "}
        <Link href="/guides/battery-and-charging-safety">
          battery and charging safety guide
        </Link>{" "}
        covers what to check before doing that.
      </p>

      <h2>Chipset and screen features</h2>
      <p>
        Beyond raw wattage, chipsets vary in the features they expose:
      </p>
      <ul>
        <li>
          <strong>Temperature control (TC)</strong> &ndash; limits coil
          temperature when used with compatible wire types (commonly
          nickel, titanium or stainless steel), intended to reduce dry
          hits rather than change flavour on standard kanthal coils.
        </li>
        <li>
          <strong>Puff counter</strong> &ndash; a running tally of puffs
          taken, useful for tracking usage patterns but not a substitute
          for checking e-liquid level.
        </li>
        <li>
          <strong>Preheat/curve settings</strong> &ndash; briefly spikes
          power at the start of a draw before settling to the set
          wattage, found mainly on higher-end sub-ohm chipsets.
        </li>
        <li>
          <strong>Screen type</strong> &ndash; ranges from a simple LED
          indicator to a full colour display showing wattage, resistance,
          battery percentage and puff count simultaneously.
        </li>
      </ul>

      <h2>Pod and tank capacity</h2>
      <p>
        In the UK, refillable pod cartridges and pre-filled cartridges
        are limited to 2ml of e-liquid capacity, and bottled
        nicotine-containing e-liquid is sold in bottles no larger than
        10ml, under the Tobacco and Related Products Regulations (TRPR).
        Nicotine strength is capped at 20mg/ml. These limits apply
        regardless of what a device&rsquo;s tank physically could hold,
        so a spec sheet listing a larger capacity for a non-UK market
        version is not what you will find on a UK-compliant retail
        model. You can check current rules on{" "}
        <a
          href="https://www.gov.uk/guidance/tobacco-products-and-e-cigarettes-regulations-for-retailers"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOV.UK
        </a>
        .
      </p>

      <h2>Coil compatibility</h2>
      <p>
        Coil compatibility is brand and sometimes model specific. Two
        tanks that look similar can use entirely different coil fitting
        threads or connector shapes. Before buying spare coils, check
        that the coil series is explicitly listed as compatible with your
        tank or pod model, rather than assuming a &ldquo;universal
        fit&rdquo; claim applies to your exact device.
      </p>

      <h2>Quick reference: what to check before buying</h2>
      <table>
        <thead>
          <tr>
            <th>Spec</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wattage range</td>
            <td>Must suit your coil&rsquo;s resistance and draw style</td>
          </tr>
          <tr>
            <td>Resistance range</td>
            <td>Chipset&rsquo;s safe operating window for coils</td>
          </tr>
          <tr>
            <td>Battery capacity (mAh)</td>
            <td>Rough guide to time between charges</td>
          </tr>
          <tr>
            <td>Pod/tank capacity</td>
            <td>Capped at 2ml for UK-regulated pods/cartridges</td>
          </tr>
          <tr>
            <td>Coil compatibility</td>
            <td>Confirm the exact coil series fits your model</td>
          </tr>
        </tbody>
      </table>
      <p>
        None of these figures tell the whole story on their own. Reading
        them together, against how and what you actually vape, is what
        turns a spec sheet from marketing copy into a genuinely useful
        buying tool.
      </p>
    </ArticleShell>
  );
}
