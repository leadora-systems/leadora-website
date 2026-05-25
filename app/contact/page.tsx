import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact",
  "Contact Leadora Systems for IT consulting, software development, and cloud solutions."
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get in Touch"
        title={
          <>
            Let&apos;s <span className="grad-text">Connect</span>
          </>
        }
        description="Ready to start your project? Reach out and let's explore what we can build together."
      />
      <div className="divider" />

      <section className="section">
        <div className="container">
          <RevealGroup className="contact-layout">
            <div>
              <div className="label">Contact Info</div>
              <h2 className="section-title text-[clamp(22px,3vw,34px)]">
                We&apos;d Love to <span className="grad-text">Hear</span> From You
              </h2>
              <p className="mb-7 text-[15px] leading-relaxed text-muted">
                Whether you have a project in mind, need a technology consultation,
                or just want to explore how we can help — our team is ready to talk.
              </p>
              <div className="flex flex-col gap-4">
                <div className="contact-card">
                  <div className="text-lg">✉️</div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold">Email</h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {site.email}
                      <br />
                      {site.salesEmail}
                    </p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="text-lg">📞</div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold">Phone</h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {site.phone}
                      <br />
                      {site.hours}
                    </p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="text-lg">📍</div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold">Address</h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {site.legalName}
                      <br />
                      {site.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex h-[200px] flex-col items-center justify-center gap-2.5 rounded-xl border border-glass-border bg-glass text-sm text-muted">
                🗺️ <span>Google Maps — Location</span>
              </div>
            </div>
            <Reveal>
              <ContactForm />
            </Reveal>
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
