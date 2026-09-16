import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticleBySlug } from "@/content/articles";
import { SITE_URL } from "@/lib/site";

const article = getArticleBySlug("battery-and-charging-safety")!;

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
        Battery safety is one of the less exciting specs on a vape device,
        right up until it is the only one that matters. Most of the
        guidance here is straightforward and comes from what device and
        battery manufacturers themselves publish, rather than from
        incident statistics. Follow the manufacturer&rsquo;s instructions
        for your specific device first; this guide covers the general
        principles that sit underneath most of that guidance.
      </p>

      <h2>USB-C vs micro-USB charging</h2>
      <p>
        Most current pod kits and mods charge over USB-C, which has
        largely replaced the older micro-USB standard across newer
        devices. USB-C connectors are reversible, generally support
        faster charge rates, and tend to be more durable than
        micro-USB over repeated use. If your device still uses
        micro-USB, it is not unsafe by definition, but it is worth using
        the cable that came with the device, or a reputable
        equivalent, rather than an unbranded cable of unknown quality.
      </p>
      <p>
        Charging speed and behaviour are set by the device&rsquo;s
        chipset, so plugging into a higher-output charger than the
        device is rated for will not usually charge it faster; the
        device only draws what its charging circuit is designed to
        accept. For background on how charge specs relate to the rest of
        a device&rsquo;s spec sheet, see our{" "}
        <Link href="/guides/how-to-compare-vape-device-specs">
          guide to comparing vape device specs
        </Link>
        .
      </p>

      <h2>General safe charging practice</h2>
      <ul>
        <li>
          Use the cable and, where applicable, the charger supplied with
          the device, or a compatible replacement from a reputable
          source.
        </li>
        <li>
          Avoid leaving a device charging unattended overnight or while
          you are out of the house, particularly on soft furnishings.
        </li>
        <li>
          Charge on a hard, heat-resistant surface, away from bedding,
          curtains or anything flammable.
        </li>
        <li>
          Do not expose devices or batteries to extreme heat, direct
          sunlight for extended periods, or leave them in a hot car.
        </li>
        <li>
          Stop using and unplug a device if it becomes unusually hot
          while charging, rather than continuing to monitor it charging
          hot.
        </li>
      </ul>

      <h2>Removable 18650/21700 cell safety basics</h2>
      <p>
        Devices that take removable cells put more responsibility on the
        user, because the cell is a separate purchase rather than
        something built and tested as a sealed unit by the device
        manufacturer. A few basics apply generally:
      </p>
      <ul>
        <li>
          <strong>Use the correct rating.</strong> Cells are rated for a
          maximum continuous discharge current; using a cell rated below
          what your device can draw at its highest wattage setting is
          generally not recommended by battery and device manufacturers.
        </li>
        <li>
          <strong>Check the wrap.</strong> The plastic sleeve around a
          cell is there to prevent short circuits. A torn, nicked or
          peeling wrap is generally treated as a reason to stop using
          that cell and replace it, not something to tape over and keep
          using.
        </li>
        <li>
          <strong>Store cells properly.</strong> Loose cells carried in a
          pocket or bag alongside keys or coins can short circuit against
          metal objects. A hard plastic battery case is the usual
          recommendation for carrying spares.
        </li>
        <li>
          <strong>Buy from reputable sellers.</strong> Counterfeit or
          mislabelled cells with inflated capacity or discharge ratings
          are a known issue in the wider battery market; established
          vape retailers and recognised cell brands are the safer
          sourcing route.
        </li>
        <li>
          <strong>Use a dedicated external charger</strong> for
          removable cells where the device itself does not charge them
          in-body, following that charger&rsquo;s own instructions.
        </li>
      </ul>

      <h2>When to stop using a device</h2>
      <p>
        A few warning signs are generally treated as a reason to stop
        using a device or battery and seek a replacement, based on
        standard manufacturer guidance:
      </p>
      <ul>
        <li>Visible swelling or bulging of the device body or cell.</li>
        <li>Cracks, dents or other physical damage to the housing.</li>
        <li>A device that becomes hot during normal use, not just charging.</li>
        <li>A battery that no longer holds charge for anywhere near as long as it used to.</li>
        <li>Any leaking or unusual smell from the battery compartment.</li>
      </ul>
      <p>
        None of these signs mean panic is required, but they are
        consistently listed by device and battery manufacturers as
        reasons to stop use and replace the affected part, rather than
        continue and monitor. If in doubt, the manufacturer&rsquo;s own
        support documentation for your specific model is the most
        reliable source, since safety tolerances can differ between
        devices even within the same general category covered in our{" "}
        <Link href="/guides/how-to-compare-vape-device-specs">
          spec-comparison guide
        </Link>
        .
      </p>
    </ArticleShell>
  );
}
