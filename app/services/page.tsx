import Link from "next/link";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { services } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Services",
  "Web development, mobile apps, cloud & Azure, Spring Boot, AI integration, and digital marketing services."
);

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What We Build"
        title={
          <>
            Our <span className="grad-text">Services</span>
          </>
        }
        description="Comprehensive technology services tailored to your business objectives."
      />
      <div className="divider" />

      <section className="section">
        <div className="container">
          <RevealGroup className="services-grid-lg">
            {services.map((s) => (
              <div key={s.slug} className="service-card">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <div className="my-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="btn-primary mt-auto text-xs"
                  style={{ padding: "9px 18px" }}
                >
                  Start a Project →
                </Link>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <CtaBanner
              label=""
              title="Have a Project in Mind?"
              description="Let's discuss how we can help you build something remarkable. Schedule a free 30-minute discovery call."
              primaryLabel="Book a Free Consultation"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
