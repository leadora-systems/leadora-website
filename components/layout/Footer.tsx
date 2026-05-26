import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-glass-border bg-lightgray py-16">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="mb-3.5 inline-flex items-center gap-2.5 no-underline">
              <div className="logo-mark">L</div>
              <span className="font-syne text-xl font-extrabold text-navy">
                LEADORA <span className="text-blue">SYSTEMS</span>
              </span>
            </Link>
            <p className="mt-3.5 text-sm leading-relaxed text-muted">
              {site.tagline}. We build scalable software, cloud infrastructure,
              and modern enterprise applications for businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-syne text-[15px] font-bold">Quick Links</h4>
            <ul className="list-none">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/portfolio", "Portfolio"],
                ["/careers", "Careers"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href} className="mb-2.5">
                  <Link
                    href={href}
                    className="text-sm text-muted no-underline hover:text-blue"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-syne text-[15px] font-bold">Services</h4>
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
                    className="text-sm text-muted no-underline hover:text-blue"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-syne text-[15px] font-bold">Contact</h4>
            <ul className="list-none">
              <li className="mb-2.5">
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-muted no-underline hover:text-blue"
                >
                  {site.email}
                </a>
              </li>
              <li className="mb-2.5">
                <span className="text-sm text-muted">{site.phone}</span>
              </li>
              <li className="mb-2.5">
                <span className="text-sm text-muted">{site.location}</span>
              </li>
            </ul>
            <div className="label mb-2 mt-5">Business Hours</div>
            <p className="text-[13px] text-muted">{site.hours}</p>
          </div>
        </div>

        <div className="divider" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[13px] text-muted">
          <span>© 2025 {site.legalName}. All rights reserved.</span>
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
