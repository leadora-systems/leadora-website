"use client";

import Link from "next/link";
import Image from "next/image";
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
            <Image
              src="/leadora-logo.png"
              alt="Leadora Systems Logo"
              width={80}
              height={80}
              className="shrink-0"
              priority
            />
            <span className="font-montserrat text-lg lg:text-xl font-extrabold text-white hidden sm:block whitespace-nowrap">
              LEADORA <span className="text-orange">SYSTEMS</span>
            </span>
          </Link>

          {/* Centered Navigation */}
          <ul className="hidden items-center gap-3 lg:gap-4 list-none md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative flex items-center gap-1 px-3.5 py-1.5 text-[12px] font-extrabold uppercase tracking-wider no-underline transition-all rounded-xl border ${
                    pathname === link.href
                      ? "bg-white/15 border-white/20 text-white shadow-[0_4px_12px_rgba(255,255,255,0.05)] backdrop-blur-md"
                      : "border-transparent text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  <span className={`transition-colors text-[8px] ${
                    pathname === link.href ? "text-blue" : "text-gray-500 group-hover:text-white"
                  }`}>▼</span>
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
