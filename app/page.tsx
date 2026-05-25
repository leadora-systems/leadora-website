import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  industries,
  services,
  technologies,
  testimonials,
  whyChoose,
} from "@/content/site";

export default function HomePage() {
  const homeServices = services.slice(0, 6);

  return (
    <>
      <Hero />
      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Why Choose Us"
              title={
                <>
                  Built for <span className="grad-text">Enterprise Scale</span>
                </>
              }
              subtitle="We combine deep technical expertise with strategic thinking to deliver solutions that drive measurable business outcomes."
            />
          </Reveal>
          <RevealGroup className="why-grid">
            {whyChoose.map((item) => (
              <div key={item.title} className="card">
                <h3 className="mb-2.5 text-[17px] font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="What We Do"
              title={
                <>
                  Our Core <span className="grad-text">Services</span>
                </>
              }
              subtitle="Comprehensive IT services designed to accelerate your digital transformation journey."
            />
          </Reveal>
          <RevealGroup className="services-grid">
            {homeServices.map((s) => (
              <div key={s.slug} className="service-card">
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <div className="my-4 flex flex-wrap gap-1.5">
                  {s.tags.slice(0, 3).map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="btn-outline mt-auto text-xs"
                  style={{ padding: "8px 16px" }}
                >
                  Learn More
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
            <SectionHeader
              label="Tech Stack"
              title={
                <>
                  Technologies We <span className="grad-text">Master</span>
                </>
              }
              subtitle="Industry-standard tools and frameworks that power modern digital solutions."
            />
          </Reveal>
          <RevealGroup className="tech-grid">
            {technologies.map((t) => (
              <div key={t.name} className="tech-card">
                <div className="mb-2.5 text-[28px]">{t.icon}</div>
                <div className="text-xs font-semibold text-muted">{t.name}</div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Industries"
              title={
                <>
                  Industry <span className="grad-text">Focus</span>
                </>
              }
              subtitle="We serve clients across diverse sectors with tailored digital solutions."
            />
          </Reveal>
          <RevealGroup className="industry-grid">
            {industries.map((i) => (
              <div key={i.name} className="industry-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-blue/10 text-2xl">
                  {i.icon}
                </div>
                <div className="text-sm font-semibold">{i.name}</div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Testimonials"
              title={
                <>
                  What Clients <span className="grad-text">Say</span>
                </>
              }
            />
          </Reveal>
          <RevealGroup className="testi-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testi-card">
                <div className="mb-3.5 text-sm text-[#FFB800]">★★★★★</div>
                <p className="mb-5 text-[15px] italic leading-relaxed text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-grad font-syne text-[15px] font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal className="scale-in">
            <CtaBanner
              title={
                <>
                  Let&apos;s Build Something{" "}
                  <span className="grad-text">Extraordinary</span>
                </>
              }
              description="Schedule a free consultation with our technology experts and explore how we can accelerate your digital transformation."
              secondaryHref="/services"
              secondaryLabel="View All Services"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
