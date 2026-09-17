import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticleBySlug } from "@/content/articles";
import { SITE_URL } from "@/lib/site";

const article = getArticleBySlug("adjustable-airflow-explained")!;

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
        Adjustable airflow control, usually labelled AFC on a tank or pod,
        is one of the few purely mechanical features left on an otherwise
        chipset-driven device. It does not change wattage, resistance or
        battery output. What it changes is how much air mixes with vapour
        on the way to your mouth, and that single mechanical adjustment
        affects draw resistance, flavour intensity and how warm or cool
        the vapour feels. This guide sets out what actually happens when
        you open or restrict an airflow ring, without claiming one
        setting is objectively correct.
      </p>

      <h2>How an airflow control ring or switch works</h2>
      <p>
        Most tanks and pods control airflow with a rotating ring, sliding
        switch or small dial positioned around the base of the tank or
        the side of the pod, aligned with one or more intake holes cut
        into the housing. Turning or sliding the control lines up an
        open section of the ring with those intake holes, widening or
        narrowing the gap that incoming air has to pass through before
        it reaches the coil. On tanks that allow it, fully closed blocks
        the holes almost entirely; fully open exposes them completely.
        Some pod kits use a simpler two- or three-position switch rather
        than a stepless ring, giving fixed presets instead of continuous
        adjustment. Sealed, cartridge-style pods often have no adjustable
        airflow at all, since the intake is fixed at the factory.
      </p>

      <h2>Single-hole versus multi-hole intake designs</h2>
      <p>
        The number and shape of the intake holes themselves also affects
        the draw, separately from how far the ring is opened. A single
        large intake hole tends to produce a more directional, sometimes
        slightly whistly pull, while several smaller holes spaced around
        the base tend to spread the incoming air more evenly, producing a
        smoother, less turbulent draw at the same effective opening size.
        Some sub-ohm tanks combine both approaches with dual or triple
        intake slots that can be adjusted independently on more
        advanced designs. None of this is standardised across brands, so
        two tanks set to a similarly &ldquo;half open&rdquo; position can
        still feel different from one another; the airflow ring&rsquo;s
        graduated markings, where a tank has them, are only comparable
        within that specific model.
      </p>

      <h2>What opening or restricting airflow changes</h2>
      <p>
        The direct, measurable effect of airflow is draw resistance: how
        much effort it takes to pull air through the device. Restricting
        airflow narrows the path air has to travel, so you have to draw
        harder to pull the same volume of air through, producing a
        tighter, more cigarette-like pull. Opening airflow widens that
        path, so air moves through more easily, producing a looser,
        freer-flowing pull. This is a purely mechanical effect of the
        size of the air gap, not something the chipset calculates,
        measures or adjusts on its own.
      </p>

      <h2>Draw style: MTL versus DTL</h2>
      <p>
        Restricted airflow is generally paired with a mouth-to-lung (MTL)
        draw, where vapour is pulled into the mouth first and then
        inhaled, similar in feel to drawing on a cigarette. Open airflow
        is generally paired with a direct-to-lung (DTL) draw, where
        vapour is pulled straight into the lungs in one motion, closer to
        a deep breath, and typically produces a larger volume of vapour
        per puff. Coil resistance is usually matched to draw style too,
        as covered in our{" "}
        <Link href="/guides/pod-mod-vs-sub-ohm-kit">
          comparison of pod kits and sub-ohm kits
        </Link>
        : higher-resistance coils tend to suit restricted, MTL-style
        airflow, while lower-resistance, sub-ohm coils tend to suit wide
        open, DTL-style airflow.
      </p>

      <h2>Effect on flavour intensity and vapour temperature</h2>
      <p>
        Restricting airflow concentrates the vapour: less incoming air is
        available to dilute or cool it as it passes the coil, which
        typically reads as a stronger-tasting, warmer draw. Opening
        airflow does the reverse: more air dilutes the same vapour
        output, which typically reads as a milder, cooler draw with more
        visible vapour volume but a less concentrated flavour hit.
        Neither effect comes from a chipset setting, a wattage change or
        a different e-liquid; it is airflow changing how much ambient air
        mixes with the same vapour before it reaches you. Because of
        this, adjusting airflow is often a faster way to settle a draw
        that feels harsh or uncomfortably warm than reaching for the
        wattage dial first.
      </p>

      <h2>Finding your preferred setting</h2>
      <ul>
        <li>
          <strong>Start near the middle of the range</strong> rather than
          fully open or fully closed, then move one small step at a time
          so you can judge the effect of each change.
        </li>
        <li>
          <strong>Match airflow broadly to your coil.</strong>{" "}
          Higher-resistance MTL coils are generally designed around
          restricted airflow; lower-resistance DTL coils are generally
          designed around open airflow. Running a low-resistance DTL coil
          on a nearly closed setting can feel unpleasantly hot and harsh.
        </li>
        <li>
          <strong>Re-check your setting after switching e-liquid.</strong>{" "}
          A higher-VG liquid behaves differently at the same airflow
          setting than a higher-PG liquid, so a setting that felt right
          before can feel wrong after a bottle change.
        </li>
        <li>
          <strong>Treat a harsh or overly warm draw as an airflow
          problem first.</strong> Opening the airflow slightly is often a
          quicker fix than lowering wattage, and does not change how the
          coil itself is being driven.
        </li>
        <li>
          <strong>Expect a narrower range on pod kits.</strong> Most pod
          kits are built to stay within an MTL-style envelope, so their
          adjustment range is usually smaller than a fully open sub-ohm
          tank&rsquo;s.
        </li>
      </ul>

      <h2>Quick reference</h2>
      <table>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Draw feel</th>
            <th>Typical pairing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Restricted / closed</td>
            <td>Tight, cigarette-like pull; warmer; concentrated flavour</td>
            <td>MTL, higher-resistance coils</td>
          </tr>
          <tr>
            <td>Mid-range</td>
            <td>Moderate resistance; balanced flavour and vapour</td>
            <td>Either style, hybrid coils</td>
          </tr>
          <tr>
            <td>Open / wide</td>
            <td>Loose, airy pull; cooler; higher vapour volume</td>
            <td>DTL, lower-resistance coils</td>
          </tr>
        </tbody>
      </table>
      <p>
        Airflow is also worth bearing in mind if your device includes a
        puff counter or coil-life indicator: a longer, looser
        direct-to-lung puff and a short, tight mouth-to-lung puff are
        often logged identically by the chipset, even though they draw
        very differently on the coil. Our guide to{" "}
        <Link href="/guides/puff-counters-and-coil-life-indicators">
          puff counters and coil-life indicators
        </Link>{" "}
        explains why that on-screen figure is a rough guide rather than
        an exact measurement.
      </p>
    </ArticleShell>
  );
}
