import type { Metadata } from "next";
import { site } from "@/content/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leadorasystems.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.legalName} | IT Consulting & Software Engineering`,
    template: `%s | ${site.name}`,
  },
  description:
    "Scalable software solutions, cloud infrastructure, and modern enterprise applications. IT consulting, Spring Boot, React, and Azure services in India.",
  keywords: [
    "IT company Chennai",
    "Spring Boot development India",
    "React development startup",
    "Azure deployment services",
    "software development company India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: site.legalName,
    description:
      "Leading digital innovation — enterprise software, cloud, and AI solutions.",
  },
};

export function pageMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    openGraph: { title, description },
  };
}
