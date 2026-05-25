import type { ReactNode } from "react";

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <div className="label">{label}</div>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-sub ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}
