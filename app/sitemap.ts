import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leadorasystems.com";

const routes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "",           changeFrequency: "weekly",  priority: 1.0 },
  { path: "/services",  changeFrequency: "weekly",  priority: 0.9 },
  { path: "/portfolio", changeFrequency: "weekly",  priority: 0.9 },
  { path: "/about",     changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact",   changeFrequency: "monthly", priority: 0.8 },
  { path: "/careers",   changeFrequency: "weekly",  priority: 0.7 },
  { path: "/privacy",   changeFrequency: "yearly",  priority: 0.3 },
  { path: "/terms",     changeFrequency: "yearly",  priority: 0.3 },
  { path: "/cookies",   changeFrequency: "yearly",  priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
