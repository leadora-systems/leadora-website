import { AnimatedTimeline } from "@/components/about/AnimatedTimeline";
import { CompanyLogos } from "@/components/about/CompanyLogos";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VisionMission } from "@/components/about/VisionMission";
import { aboutDna, values } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About Us — IT Company in Hyderabad, India",
  "Leadora Systems is a Hyderabad-based IT company specialising in enterprise software, cloud infrastructure, and digital transformation. Meet our team, vision, mission, and values.",
  {
    canonical: "/about",
    keywords: [
      "about Leadora Systems",
      "IT company Hyderabad",
      "software company India",
      "enterprise software team",
      "cloud technology company India",
      "digital transformation company Hyderabad",
    ],
  }
);

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Our Story"
        title={
          <>
            About <span className="grad-text">Leadora Systems</span>
          </>
        }
        description="A passionate team of engineers and innovators building the digital future."
      />
      <div className="divider" />

      <section className="section">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal variant="from-left">
              <SectionHeader
                label="Who We Are"
                title={
                  <>
                    Engineering <span className="grad-text">Excellence</span> Since Day One
                  </>
                }
              />
              <p className="mb-5 text-[15px] leading-relaxed text-muted">
                Leadora Systems Private Limited is a forward-thinking IT services
                company specializing in enterprise software development, cloud
                infrastructure, and digital transformation. Founded with a belief
                that technology should be accessible, scalable, and meaningful —
                we partner with businesses to build systems that truly matter.
              </p>
              <p className="text-[15px] leading-relaxed text-muted">
                Our multidisciplinary team brings together expertise in full-stack
                engineering, cloud architecture, AI/ML, and digital strategy —
                delivering end-to-end solutions that align with your business
                objectives.
              </p>
            </Reveal>
            <Reveal variant="from-right">
              <div className="dna-card group">
                <div className="mb-5 text-[13px] font-bold uppercase tracking-widest text-muted group-hover:text-blue transition-colors">
                  Our DNA
                </div>
                <div className="flex flex-col gap-1.5 relative z-10">
                  {aboutDna.map((item) => (
                    <div key={item} className="dna-item">
                      <span className="dna-icon">→</span>
                      <span className="font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <VisionMission />
        </div>
      </section>

      <div className="divider" />

      <section className="section bg-[#F7F9FC]">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Trusted By"
              title={
                <>
                  Our <span className="grad-text">Esteemed</span> Clients
                </>
              }
            />
          </Reveal>
          <CompanyLogos />
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="What Drives Us"
              title={
                <>
                  Company <span className="grad-text">Values</span>
                </>
              }
            />
          </Reveal>
          <RevealGroup className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card group">
                <div className="value-icon-wrapper">{v.icon}</div>
                <h3 className="relative z-10 mb-2.5 text-[17px] font-bold text-navy transition-colors duration-300 group-hover:text-blue">
                  {v.title}
                </h3>
                <p className="relative z-10 text-[15px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-navy/80">
                  {v.description}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container max-w-[720px]">
          <Reveal>
            <SectionHeader
              label="Our Journey"
              title={
                <>
                  The <span className="grad-text">Leadora</span> Story
                </>
              }
            />
          </Reveal>
          <Reveal>
            <AnimatedTimeline />
          </Reveal>
        </div>
      </section>
    </>
  );
}
