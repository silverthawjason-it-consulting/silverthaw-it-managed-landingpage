import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const runtime = "edge";

/**
 * Disallows the open-ended /[location]/[service] dynamic route (any
 * two-segment path) from being crawled. Its canonical tag already
 * collapses to one of the two clean pages, but keeping it out of the
 * crawl budget entirely is cheap defense in depth.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/*/*",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
