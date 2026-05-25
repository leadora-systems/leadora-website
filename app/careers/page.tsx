import Link from "next/link";
import { CareersForm } from "@/components/forms/CareersForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { benefits, culture, jobs } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Careers",
  "Join Leadora Systems — open roles in engineering, cloud, marketing, and business development."
);

export default function CareersPage() {
  return (
    <>
      <PageHeader
        label="Join Our Team"
        title={
          <>
            Build the <span className="grad-text">Future</span> With Us
          </>
        }
        description="We're hiring exceptional engineers, marketers, and leaders ready to make an impact."
      />
      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Culture"
              title={
                <>
                  Why You&apos;ll <span className="grad-text">Love</span> Working
                  Here
                </>
              }
            />
          </Reveal>
          <RevealGroup className="why-grid">
            {culture.map((c) => (
              <div key={c.title} className="card">
                <div className="mb-3.5 text-[28px]">{c.icon}</div>
                <h3 className="mb-2.5 text-base font-bold">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {c.description}
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
              label="Benefits"
              title={
                <>
                  What You <span className="grad-text">Get</span>
                </>
              }
            />
          </Reveal>
          <RevealGroup className="benefits-grid">
            {benefits.map((b) => (
              <div key={b.name} className="benefit-card">
                <div className="mb-2.5 text-[28px]">{b.icon}</div>
                <div className="text-[13px] font-semibold">{b.name}</div>
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
              label="Open Roles"
              title={
                <>
                  Current <span className="grad-text">Openings</span>
                </>
              }
            />
          </Reveal>
          <RevealGroup className="jobs-list">
            {jobs.map((job) => (
              <div key={job.title} className="job-card">
                <div>
                  <h4 className="font-syne text-base font-bold">{job.title}</h4>
                  <div className="mt-1.5 flex flex-wrap gap-2.5">
                    {job.badges.map((badge) => (
                      <span key={badge} className="job-badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="#apply"
                  className="btn-primary text-xs"
                  style={{ padding: "9px 18px" }}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container max-w-[800px]">
          <Reveal>
            <SectionHeader
              label="Apply Now"
              title={
                <>
                  Send Your <span className="grad-text">Application</span>
                </>
              }
            />
          </Reveal>
          <CareersForm />
        </div>
      </section>
    </>
  );
}
