import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-dw-border bg-dw-bg/95 backdrop-blur supports-[backdrop-filter]:bg-dw-bg/80 relative">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-dw-fg"
        >
          <span className="text-dw-blue" aria-hidden="true">
            {"<"}
            <span className="text-dw-lime">/</span>
            {">"}
          </span>
          Device Watch <span className="text-dw-blue-light">UK</span>
        </Link>
        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-dw-fg-muted transition-colors hover:text-dw-blue-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Primary" className="sm:hidden">
          <ul className="flex items-center gap-4 text-xs font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-dw-fg-muted transition-colors hover:text-dw-blue-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-dw-blue/60 to-transparent"
      />
    </header>
  );
}
