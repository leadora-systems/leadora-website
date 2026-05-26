import { PageHeader } from "@/components/ui/PageHeader";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ProjectStats } from "@/components/portfolio/ProjectStats";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Portfolio",
  "Explore our portfolio of enterprise software, cloud solutions, and innovative digital products built by Leadora Systems."
);

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        label="Our Work"
        title={
          <>
            Client <span className="grad-text">Projects</span> & Success Stories
          </>
        }
        description="Discover how we've helped businesses across industries scale their digital presence and solve complex technical challenges."
      />
      
      <ProjectStats />
      
      <PortfolioGrid />

      <section className="section bg-white">
        <div className="container">
          <Reveal className="scale-in">
            <CtaBanner
              title={
                <>
                  Ready to Build Your <span className="grad-text">Success Story</span>?
                </>
              }
              description="Join our list of successful clients. Let's discuss your next project and how we can bring your vision to life with enterprise-grade technology."
              primaryHref="/contact"
              primaryLabel="Start Your Project"
              secondaryHref="/services"
              secondaryLabel="View Our Services"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
