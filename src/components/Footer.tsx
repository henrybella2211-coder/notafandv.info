import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms", label: "Terms & Disclaimer" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/age-notice", label: "Age Notice" },
];

const SITE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const CATEGORY_LINKS = [
  { href: "/guides#pod-and-sub-ohm", label: "Pod Kits vs Sub-ohm" },
  { href: "/guides#battery-and-chipset", label: "Battery & Chipset" },
  { href: "/guides", label: "All guides" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-dw-border bg-dw-bg">
      <div className="bg-dw-bg-strip border-b border-dw-border">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs leading-relaxed text-dw-fg-muted sm:px-6">
          <strong className="text-dw-fg">18+ content notice:</strong> Device
          Watch UK is intended for adults aged 18 and over who already smoke
          or vape, or who are seeking factual information about vaping
          hardware. Nothing on this site is intended to encourage anyone
          under 18, or anyone who does not already smoke or vape, to start.
          Read our{" "}
          <Link href="/age-notice" className="text-dw-blue-light hover:underline">
            full age notice
          </Link>
          .
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 text-sm sm:grid-cols-3 sm:px-6">
        <div>
          <div className="flex items-center gap-2 font-heading text-base font-bold text-dw-fg">
            <span className="text-dw-blue" aria-hidden="true">
              {"<"}
              <span className="text-dw-lime">/</span>
              {">"}
            </span>
            Device Watch UK
          </div>
          <p className="mt-3 text-dw-fg-muted">
            Vape hardware, compared properly. Independent UK information on
            device categories, chipsets and battery tech, based on published
            specifications rather than in-house lab testing.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-heading text-xs font-bold uppercase tracking-wide text-dw-fg-muted">
            Site
          </h2>
          <ul className="space-y-2">
            {SITE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-dw-fg-muted hover:text-dw-blue-light hover:underline underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mb-3 mt-6 font-heading text-xs font-bold uppercase tracking-wide text-dw-fg-muted">
            Compare
          </h2>
          <ul className="space-y-2">
            {CATEGORY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-dw-fg-muted hover:text-dw-blue-light hover:underline underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-heading text-xs font-bold uppercase tracking-wide text-dw-fg-muted">
            Legal
          </h2>
          <ul className="space-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-dw-fg-muted hover:text-dw-blue-light hover:underline underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-dw-border">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-dw-fg-muted sm:px-6">
          © {new Date().getFullYear()} Device Watch UK. Independent
          information resource. Not affiliated with any device manufacturer.
        </div>
      </div>
    </footer>
  );
}
