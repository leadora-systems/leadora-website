import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { ArrowDown, Clock, Mail, Phone } from "lucide-react";

export const metadata = pageMetadata(
  "Contact Us — IT Consulting & Software Development Enquiries",
  "Get in touch with Leadora Systems for IT consulting, custom software development, cloud solutions, and digital transformation projects. Based in Hyderabad, serving clients globally.",
  {
    canonical: "/contact",
    keywords: [
      "contact Leadora Systems",
      "IT consulting enquiry India",
      "hire software development team India",
      "custom software development quote",
      "cloud solutions contact Hyderabad",
    ],
  }
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
      <div className="relative flex items-center justify-center w-full my-1">
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
            <div className="h-full">
              <div className="mb-0 overflow-hidden rounded-2xl border border-blue/10 bg-gradient-to-br from-blue/[0.07] via-cyan/[0.02] to-transparent p-5 shadow-sm relative backdrop-blur-sm">
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
                <div className="contact-card hover:border-blue/30 transition-colors">
                  <div className="text-blue shrink-0 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold font-montserrat">Email</h4>
                    <div className="flex flex-col text-sm leading-relaxed text-muted font-sans">
                      <a
                        href={`mailto:${site.email}`}
                        className="hover:text-blue hover:underline transition-colors w-fit"
                      >
                        {site.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-card hover:border-blue/30 transition-colors">
                  <div className="text-blue shrink-0 mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
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
                  <div className="text-emerald-500 shrink-0 mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.347-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.216 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold flex items-center gap-1.5 font-montserrat">
                      WhatsApp
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </h4>
                    <div className="text-sm leading-relaxed text-muted font-sans">
                      <a
                        href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
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
              </div>
            </div>
            <Reveal>
              <div className="flex flex-col gap-4 h-full">
                <ContactForm />
              </div>
            </Reveal>
          </RevealGroup>
        </div>
      </section>

      {/* Full-bleed divider before map section */}
      <div className="w-full my-1" aria-hidden="true">
        <div className="w-full border-t border-blue/15" />
      </div>

      {/* Separate, full-width map section (not inside container) */}
      <section className="section">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <div className="label font-montserrat font-bold uppercase tracking-wider text-xs">
                  Office Location
                </div>
                <div className="text-[13px] text-muted font-sans mt-1">
                  Tap the map to open Google Maps directions.
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-glass-border bg-white shadow-sm transition-all hover:border-blue/40">
              <iframe
                title="Leadora Systems location map"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Jayabheri%20Silicon%20Towers%2C%20Sreebagh%20Colony%2C%20Hyderabad%2C%20Kothaguda%2C%20Telangana%20500084&output=embed"
              />

              {/* Full-area click target to open Google Maps */}
              <a
                href="https://maps.app.goo.gl/WGUaD9bEAGd4RqfRA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open address in Google Maps"
                className="absolute inset-0 z-10"
              />

              {/* Small info chip like the reference */}
              <div className="pointer-events-none absolute left-3 top-3 z-20 max-w-[calc(100%-1.5rem)] rounded-lg border border-glass-border bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
                <div className="font-montserrat text-[12px] font-bold text-navy leading-snug">
                  Jayabheri Silicon Towers
                </div>
                <div className="mt-0.5 text-[11px] text-muted font-sans leading-snug">
                  Sreebagh Colony, Hyderabad, Kothaguda, Telangana 500084
                </div>
                <div className="mt-1 text-[10px] font-montserrat font-bold uppercase tracking-wider text-blue">
                  Click to open Google Maps
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
