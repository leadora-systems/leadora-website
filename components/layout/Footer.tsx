import Link from "next/link";
import { site } from "@/content/site";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-glass-border bg-lightgray py-16">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="mb-3.5 inline-flex items-center gap-2.5 no-underline">
              <div className="logo-mark">L</div>
              <span className="font-montserrat text-xl font-extrabold text-navy">
                LEADORA <span className="text-blue">SYSTEMS</span>
              </span>
            </Link>
            <p className="mt-3.5 text-sm leading-relaxed text-muted mb-6">
              {site.tagline}. We build scalable software, cloud infrastructure,
              and modern enterprise applications for businesses worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-white text-muted hover:border-blue hover:text-blue hover:shadow-sm transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={site.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-white text-muted hover:border-blue hover:text-blue hover:shadow-sm transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-white text-muted hover:border-pink-500 hover:text-pink-500 hover:shadow-sm transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-white text-muted hover:border-blue hover:text-blue hover:shadow-sm transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-montserrat text-[15px] font-bold">Quick Links</h4>
            <ul className="list-none">
              {[
                ["/", "Home"],
                ["/about", "Expertise"],
                ["/services", "Solutions"],
                ["/portfolio", "Case Studies"],
                ["/careers", "Careers"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href} className="mb-2.5">
                  <Link
                    href={href}
                    className="text-sm text-muted no-underline hover:text-blue transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-montserrat text-[15px] font-bold">Services</h4>
            <ul className="list-none">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud & Azure",
                "Spring Boot",
                "AI Integration",
                "Digital Marketing",
              ].map((label) => (
                <li key={label} className="mb-2.5">
                  <Link
                    href="/services"
                    className="text-sm text-muted no-underline hover:text-blue transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-montserrat text-[15px] font-bold">Contact</h4>
            <ul className="list-none">
              <li className="mb-2.5">
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-muted no-underline hover:text-blue transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="mb-2.5">
                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className="text-sm text-muted no-underline hover:text-blue transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="mb-2.5">
                <span className="text-sm text-muted">{site.location}</span>
              </li>
            </ul>
            <div className="label mb-2 mt-5 text-[10px] font-extrabold uppercase tracking-wider text-blue/80">Business Hours</div>
            <p className="text-xs font-bold text-navy font-montserrat tracking-wide">{site.hours}</p>
          </div>
        </div>

        <div className="divider" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[13px] text-muted">
          <span>© 2026 {site.legalName}. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="no-underline hover:text-blue">
              Privacy Policy
            </Link>
            <Link href="/terms" className="no-underline hover:text-blue">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="no-underline hover:text-blue">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
