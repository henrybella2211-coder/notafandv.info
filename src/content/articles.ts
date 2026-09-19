export type ArticleCategory = "Device Categories" | "Buying Guide" | "Battery & Charging";

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  deviceType: string;
  readTime: string;
  lastUpdated: string; // human readable
  lastUpdatedISO: string; // ISO date for schema/sitemap
  datePublishedISO: string;
  image: {
    src: string;
    alt: string;
  };
}

export const articles: ArticleMeta[] = [
  {
    slug: "pod-mod-vs-sub-ohm-kit",
    title: "Pod mod vs sub-ohm kit: how these device categories actually differ",
    excerpt:
      "Chipset and wattage range, battery format, airflow control and who each category of device tends to suit, compared spec by spec.",
    category: "Device Categories",
    deviceType: "Pod kit / Sub-ohm mod",
    readTime: "8 min read",
    lastUpdated: "Last updated 10 September 2026",
    lastUpdatedISO: "2026-09-10",
    datePublishedISO: "2026-06-02",
    image: {
      src: "/images/pod-mod-vs-subohm-devices.jpg",
      alt: "Red and black box-style vape mod with adjustable airflow resting on a rock outdoors",
    },
  },
  {
    slug: "how-to-compare-vape-device-specs",
    title: "How to compare vape device specs without getting confused",
    excerpt:
      "A practical framework for reading manufacturer spec sheets: wattage range, resistance support, battery capacity, chipset features and pod capacity limits.",
    category: "Buying Guide",
    deviceType: "All device types",
    readTime: "9 min read",
    lastUpdated: "Last updated 13 September 2026",
    lastUpdatedISO: "2026-09-13",
    datePublishedISO: "2026-06-16",
    image: {
      src: "/images/dark-circuitry-macro.jpg",
      alt: "Macro close-up of a green and gold printed circuit board showing chipset pathways",
    },
  },
  {
    slug: "battery-and-charging-safety",
    title: "Battery and charging safety for vape devices",
    excerpt:
      "USB-C versus micro-USB charging, safe habits for built-in batteries, and the basics of handling removable 18650/21700 cells correctly.",
    category: "Battery & Charging",
    deviceType: "Internal & removable cells",
    readTime: "8 min read",
    lastUpdated: "Last updated 16 September 2026",
    lastUpdatedISO: "2026-09-16",
    datePublishedISO: "2026-07-01",
    image: {
      src: "/images/lithium-cells-battery.jpg",
      alt: "Four cylindrical rechargeable battery cells with black wrap standing upright on a plain surface",
    },
  },
  {
    slug: "adjustable-airflow-explained",
    title: "Adjustable airflow explained: what it actually changes",
    excerpt:
      "How AFC rings and switches on pods and mods work, how opening or restricting them changes draw resistance, flavour and vapour temperature, and how to find your own setting.",
    category: "Device Categories",
    deviceType: "Pod kit / Sub-ohm mod",
    readTime: "7 min read",
    lastUpdated: "Last updated 17 September 2026",
    lastUpdatedISO: "2026-09-17",
    datePublishedISO: "2026-07-14",
    image: {
      src: "/images/vape-mod-tank-airflow-control.jpg",
      alt: "Red and black vape mod with sub-ohm tank and adjustable airflow slots resting on dark volcanic rock",
    },
  },
  {
    slug: "puff-counters-and-coil-life-indicators",
    title: "Puff counters and coil-life indicators: how accurate are they?",
    excerpt:
      "How chipset-tracked puff counts and resistance-drift wear indicators actually work, what throws the count off, and why taste and vapour remain the more reliable signal.",
    category: "Buying Guide",
    deviceType: "All device types",
    readTime: "7 min read",
    lastUpdated: "Last updated 18 September 2026",
    lastUpdatedISO: "2026-09-18",
    datePublishedISO: "2026-07-22",
    image: {
      src: "/images/vape-device-digital-display-screen.jpg",
      alt: "Vape mod digital display screen glowing with wattage and resistance readout in a smoke-filled purple-lit room",
    },
  },
  {
    slug: "al-fakher-hypermax-prime-50k-battery-charging-specs",
    title: "Al Fakher HyperMax Prime 50K: battery, charging and device specs reviewed",
    excerpt:
      "A spec-by-spec read of the 1000mAh battery, USB-C charging, Snap Dual pod module and LED display on the Al Fakher HyperMax Prime 50K, checked against manufacturer claims rather than in-house testing.",
    category: "Battery & Charging",
    deviceType: "Rechargeable pod kit",
    readTime: "8 min read",
    lastUpdated: "Last updated 19 September 2026",
    lastUpdatedISO: "2026-09-19",
    datePublishedISO: "2026-07-29",
    image: {
      src: "/images/rechargeable-pod-vape-kit-table.jpg",
      alt: "A rechargeable pod vape kit with coloured accent lighting sitting on a table surface",
    },
  },
];

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}
