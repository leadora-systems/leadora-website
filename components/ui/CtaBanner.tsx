import Link from "next/link";

export function CtaBanner({
  label = "Ready to Start?",
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Contact Us Today",
  secondaryHref,
  secondaryLabel,
}: {
  label?: string;
  title: React.ReactNode;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="cta-banner">
      <div className="label">{label}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <Link href={primaryHref} className="btn-primary">
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel && (
          <Link href={secondaryHref} className="btn-outline">
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
