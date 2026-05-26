import { Counters } from "@/components/about/Counters";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutDna, timeline, values } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About Us",
  "Learn about Leadora Systems — engineering excellence, vision, mission, and company values."
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
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
            <Reveal variant="from-left">
              <SectionHeader
                label="Who We Are"
                title={
                  <>
                    Engineering <span className="grad-text">Excellence</span> Since
                    Day One
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
              <div className="rounded-[20px] border border-glass-border bg-glass p-9">
                <div className="mb-5 text-[13px] font-semibold uppercase tracking-widest text-muted">
                  Our DNA
                </div>
                <div className="flex flex-col gap-4">
                  {aboutDna.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[15px]">
                      <span className="text-lg text-blue">→</span>
                      {item}
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
          <RevealGroup className="vm-grid">
            <div className="vm-card border-blue/25">
              <div className="mb-3.5 text-[28px]">🔭</div>
              <h3 className="mb-3 text-xl font-bold">
                Our <span className="grad-text">Vision</span>
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">
                To be a globally recognized IT company that drives digital
                transformation across industries — empowering businesses with
                innovative, scalable, and intelligent technology solutions that
                make a lasting impact.
              </p>
            </div>
            <div className="vm-card border-cyan/20">
              <div className="mb-3.5 text-[28px]">🎯</div>
              <h3 className="mb-3 text-xl font-bold">
                Our <span className="grad-text">Mission</span>
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">
                To deliver enterprise-grade software, cloud, and AI solutions with
                precision and transparency — acting as a trusted technology partner
                that helps our clients grow, innovate, and compete effectively in
                the digital age.
              </p>
            </div>
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="By the Numbers"
              title={
                <>
                  Our <span className="grad-text">Impact</span> in Numbers
                </>
              }
            />
          </Reveal>
          <Counters />
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
              <div key={v.title} className="card">
                <div className="mb-3.5 text-[28px]">{v.icon}</div>
                <h3 className="mb-2.5 text-base font-bold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
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
            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.year} className="tl-item">
                  <div className="tl-year text-[11px] font-bold tracking-widest text-blue">
                    {item.year}
                  </div>
                  <div className="tl-title font-syne text-base font-bold">
                    {item.title}
                  </div>
                  <div className="tl-desc text-sm leading-relaxed text-muted">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
