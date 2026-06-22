import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const runtime = "edge";

/**
 * Lists only the two clean, indexable URLs. The open-ended
 * /[location]/[service] route is intentionally excluded — its canonical
 * always points back to one of these two pages, so it should never be
 * treated as a distinct sitemap entry.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/managed-it-services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/it-support-small-business`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
