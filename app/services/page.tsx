import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesCarousel } from "@/components/services/ServicesCarousel";
import { ServicesWhyCards } from "@/components/services/ServicesWhyCards";
import { Services3DHub } from "@/components/services/Services3DHub";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { ServicesCta } from "@/components/services/ServicesCta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "IT Services & Solutions — Web, Cloud, AI & Mobile Development",
  "Leadora Systems offers end-to-end IT services including web development, mobile apps, Azure cloud solutions, Spring Boot microservices, AI integration, ecommerce, and digital marketing.",
  {
    canonical: "/services",
    keywords: [
      "web development services India",
      "mobile app development India",
      "Azure cloud solutions",
      "Spring Boot microservices",
      "AI integration services India",
      "ecommerce development",
      "digital marketing India",
      "IT services Hyderabad",
      "enterprise software solutions",
      "React development services",
    ],
  }
);

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <div className="divider" />

      {/* ── Solutions Carousel ── */}
      <section className="section pb-0">
        <Reveal>
          <div className="container">
            <SectionHeader
              label="What We Deliver"
              title={
                <>
                  Solutions We <span className="grad-text">Deliver</span>
                </>
              }
              subtitle="End-to-end technology services engineered for growth, performance, and long-term business impact."
            />
          </div>
        </Reveal>
        <ServicesCarousel />
      </section>

      <div className="divider" />

      {/* ── Why Choose Us ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Why Leadora"
              title={
                <>
                  Built for <span className="grad-text">Results</span>
                </>
              }
              subtitle="Six reasons why fast-growing companies trust Leadora Systems to deliver technology that drives real business outcomes."
              centered
            />
          </Reveal>
          <ServicesWhyCards />
        </div>
      </section>

      <Services3DHub />

      <div className="divider" />

      {/* ── FAQ ── */}
      <section className="section overflow-hidden relative">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="FAQ Blueprint"
              title={
                <>
                  Common <span className="grad-text">Questions</span>
                </>
              }
              subtitle="Everything you need to know before starting your project with us."
              centered
            />
          </Reveal>
          <ServicesFaq />
        </div>
      </section>

      <div className="divider" />

      {/* ── Immersive Solutions CTA ── */}
      <ServicesCta />
    </>
  );
}
