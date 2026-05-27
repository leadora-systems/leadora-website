"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Solutions" },
  { href: "/about", label: "Expertise" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
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
      className={`fixed left-0 right-0 top-0 z-[1000] py-[18px] transition duration-300 ${
        scrolled
          ? "bg-black/80 shadow-[0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl"
          : pathname === "/" ? "bg-transparent" : "bg-black"
      }`}
    >
      <div className="container px-6 max-w-[1400px]">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5 no-underline">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-xl font-bold text-blue border border-blue/20">
              L
            </div>
            <span className="font-montserrat text-lg lg:text-xl font-extrabold text-white hidden sm:block whitespace-nowrap">
              LEADORA <span className="text-blue">SYSTEMS</span>
            </span>
          </Link>

          {/* Centered Navigation */}
          <ul className="hidden items-center gap-4 lg:gap-6 list-none md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative flex items-center gap-1.5 px-2 py-2 text-[14px] font-bold no-underline transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="text-gray-500 transition-colors group-hover:text-white text-[10px]">▼</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Placeholder to keep navigation centered */}
          <div className="hidden shrink-0 w-[100px] md:block"></div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="flex flex-col gap-1.5 border-0 bg-transparent p-1 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="block h-0.5 w-6 rounded-sm bg-white" />
            <span className="block h-0.5 w-6 rounded-sm bg-white" />
            <span className="block h-0.5 w-6 rounded-sm bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } fixed left-0 right-0 top-[70px] flex-col gap-1 border-b border-white/10 bg-black/95 px-6 py-5 backdrop-blur-xl md:hidden`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="border-b border-white/10 py-3 text-[15px] text-gray-300 font-bold no-underline hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
