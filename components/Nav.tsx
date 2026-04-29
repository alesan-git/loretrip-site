"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "./Marks";

const links = [
  { href: "/", label: "Product" },
  { href: "/demo", label: "Demo" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" aria-label="LoreTrip — home">
          <Wordmark size={26} markColor="var(--lt-ember)" />
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`nav__link ${active ? "nav__link--active" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn--primary nav__cta">
            Request Early Access
          </Link>
        </nav>
      </div>
    </header>
  );
}
