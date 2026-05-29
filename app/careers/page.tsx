import { pageMetadata } from "@/lib/metadata";
import { CareersContent } from "@/components/careers/CareersContent";

export const metadata = pageMetadata(
  "Careers at Leadora Systems — Tech Jobs in Hyderabad",
  "Join Leadora Systems and build enterprise-grade software with the best engineers. Open roles in Java, React, Azure DevOps, digital marketing, and business development in Hyderabad, India.",
  {
    canonical: "/careers",
    keywords: [
      "tech jobs Hyderabad",
      "software engineer jobs India",
      "Java developer jobs Hyderabad",
      "React developer jobs India",
      "cloud DevOps jobs Hyderabad",
      "IT company careers India",
      "fresher software jobs",
      "digital marketing jobs Hyderabad",
    ],
  }
);

export default function CareersPage() {
  return <CareersContent />;
}
