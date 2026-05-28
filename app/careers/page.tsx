import { pageMetadata } from "@/lib/metadata";
import { CareersContent } from "@/components/careers/CareersContent";

export const metadata = pageMetadata(
  "Careers",
  "Join Leadora Systems — open roles in engineering, cloud, marketing, and business development."
);

export default function CareersPage() {
  return <CareersContent />;
}
