import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { Linkedin, Twitter, Instagram, Facebook, Clock, ArrowDown } from "lucide-react";
import { LiveStatusTracker } from "@/components/ui/LiveStatusTracker";

export const metadata = pageMetadata(
  "Contact",
  "Contact Leadora Systems for IT consulting, software development, and cloud solutions."
);

export default function ContactPage() {
  return (
    <div className="font-sans">
      <PageHeader
        label="Get in Touch"
        title={
          <span className="font-montserrat font-bold">
            Let&apos;s <span className="grad-text">Connect</span>
          </span>
        }
        description="Ready to start your project? Reach out and let's explore what we can build together."
      />
      
      {/* Elite Divider with Interactive Pulsing Scroll Arrow */}
      <div className="relative flex items-center justify-center w-full my-6">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-blue/15"></div>
        </div>
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue/20 bg-white text-blue shadow-md hover:border-blue hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer z-10">
          <div className="absolute inset-0 rounded-full bg-blue/5 animate-ping opacity-60"></div>
          <ArrowDown className="h-4 w-4 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <RevealGroup className="contact-layout">
            <div>
              <div className="mb-8 overflow-hidden rounded-2xl border border-blue/10 bg-gradient-to-br from-blue/[0.07] via-cyan/[0.02] to-transparent p-5 shadow-sm relative backdrop-blur-sm">
                <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-blue/10 blur-xl"></div>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue/15 text-blue border border-blue/10">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted/80 font-montserrat">Support Availability</span>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue"></span>
                      </span>
                    </div>
                    <h4 className="font-montserrat text-[14px] font-bold text-navy mt-0.5 leading-tight">Official Working Hours</h4>
                    <p className="font-montserrat text-[12px] font-extrabold text-blue mt-1.5 bg-white/70 border border-glass-border px-3 py-1.5 rounded-lg w-fit shadow-xs tracking-wider">
                      {site.hours}
                    </p>
                  </div>
                </div>
              </div>
              <div className="label font-montserrat font-bold uppercase tracking-wider text-xs">Contact Info</div>
              <h2 className="section-title text-[clamp(22px,3vw,34px)] font-montserrat font-bold leading-tight">
                We&apos;d Love to <span className="grad-text">Hear</span> From You
              </h2>
              <p className="mb-7 text-[15px] leading-relaxed text-muted font-sans">
                Whether you have a project in mind, need a technology consultation,
                or just want to explore how we can help — our team is ready to talk.
              </p>
              <div className="flex flex-col gap-4">
                <div className="contact-card">
                  <div className="text-lg">✉️</div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold font-montserrat">Email</h4>
                    <div className="flex flex-col text-sm leading-relaxed text-muted font-sans">
                      <a
                        href={`mailto:${site.email}`}
                        className="hover:text-blue hover:underline transition-colors w-fit"
                      >
                        {site.email}
                      </a>
                      <a
                        href={`mailto:${site.salesEmail}`}
                        className="hover:text-blue hover:underline transition-colors w-fit"
                      >
                        {site.salesEmail}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="text-lg">📞</div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold font-montserrat">Phone</h4>
                    <div className="text-sm leading-relaxed text-muted font-sans">
                      <a
                        href={`tel:${site.phone.replace(/\s+/g, "")}`}
                        className="hover:text-blue hover:underline transition-colors block w-fit"
                      >
                        {site.phone}
                      </a>
                      <span className="text-[13px] opacity-75 font-sans">{site.hours}</span>
                    </div>
                  </div>
                </div>
                <div className="contact-card hover:border-emerald-500/30 transition-colors">
                  <div className="text-lg">💬</div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold flex items-center gap-1.5 font-montserrat">
                      WhatsApp
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </h4>
                    <div className="text-sm leading-relaxed text-muted font-sans">
                      <a
                        href={`https://wa.me/${site.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-emerald-600 hover:text-emerald-500 hover:underline transition-colors block w-fit"
                      >
                        Chat with our team →
                      </a>
                      <span className="text-[13px] opacity-75">Instant support & sales queries</span>
                    </div>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="text-lg">📍</div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold font-montserrat">Address</h4>
                    <p className="text-sm leading-relaxed text-muted font-sans">
                      {site.legalName}
                      <br />
                      {site.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex h-[200px] flex-col items-center justify-center gap-2.5 rounded-xl border border-glass-border bg-glass text-sm text-muted font-sans">
                🗺️ <span>Google Maps — Location</span>
              </div>
            </div>
            <Reveal>
              <div className="flex flex-col gap-4">
                <ContactForm />
                <LiveStatusTracker />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-glass-border bg-glass p-5 shadow-xs">
                  <div>
                    <h4 className="font-montserrat text-[14px] font-bold text-navy">Follow Our Journey</h4>
                    <p className="text-[11px] text-muted mt-0.5 leading-normal font-sans">
                      Get real-time tech insights & company updates.
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={site.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-white text-muted hover:border-blue hover:text-blue hover:shadow-sm transition-all"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={site.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-white text-muted hover:border-blue hover:text-blue hover:shadow-sm transition-all"
                      title="Twitter / X"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={site.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-white text-muted hover:border-pink-500 hover:text-pink-500 hover:shadow-sm transition-all"
                      title="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href={site.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass-border bg-white text-muted hover:border-blue hover:text-blue hover:shadow-sm transition-all"
                      title="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
