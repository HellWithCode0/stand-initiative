import type { MetadataRoute } from "next";
import { posts } from "@/content/news";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/work", "/impact", "/get-involved", "/news", "/contact", "/donate"];
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : p === "/donate" ? 0.9 : 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/news/${p.slug}`,
      ...(p.date ? { lastModified: p.date } : {}),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
