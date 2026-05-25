import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader
        label="Legal"
        title={title}
        description={`Last updated: ${new Date().getFullYear()}`}
      />
      <div className="divider" />
      <section className="section">
        <div className="container max-w-[800px]">
          <Reveal>
            <div className="prose-legal space-y-6 text-[15px] leading-relaxed text-muted">
              {children}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
