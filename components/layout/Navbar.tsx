"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [
  { href: "/", label: "Insights" },
  { href: "/about", label: "Company" },
  { href: "/services", label: "Expertise" },
  { href: "/portfolio", label: "Success Stories" },
  { href: "/careers", label: "Talent Hub" },
  { href: "/contact", label: "Reach Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      id="navbar"
      className={`fixed left-0 right-0 top-0 z-[1000] py-[18px] transition ${
        scrolled
                  ? "bg-white/80 shadow-[0_1px_0_var(--glass-border)] backdrop-blur-xl"
          : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="logo-mark">L</div>
            <span className="font-syne text-xl font-extrabold text-navy">
              LEADORA <span className="text-blue">SYSTEMS</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 list-none md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md px-3.5 py-2 text-sm font-medium no-underline transition ${
                    pathname === link.href
                      ? "bg-blue/10 text-blue"
                      : "text-muted hover:bg-blue/5 hover:text-blue"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="btn-primary ml-4 hidden text-[13px] md:inline-flex"
            style={{ padding: "10px 20px" }}
          >
            Get Started
          </Link>

          <button
            type="button"
            className="flex flex-col gap-1.5 border-0 bg-transparent p-1 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="block h-0.5 w-6 rounded-sm bg-navy" />
            <span className="block h-0.5 w-6 rounded-sm bg-navy" />
            <span className="block h-0.5 w-6 rounded-sm bg-navy" />
          </button>
        </div>
      </div>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } fixed left-0 right-0 top-[70px] flex-col gap-1 border-b border-glass-border bg-white/95 px-6 py-5 backdrop-blur-xl md:hidden`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="border-b border-glass-border py-3 text-[15px] text-muted no-underline hover:text-blue"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
