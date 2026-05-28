export function PageHeader({
  label,
  title,
  description,
}: {
  label: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div className="page-header">
      <div className="container">
        <div className="label">{label}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
