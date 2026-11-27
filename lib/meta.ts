import type { Metadata } from "next";

/** Title, description, canonical URL and Open Graph text for one page. */
export function pageMeta(
  path: string,
  title: string,
  description: string,
  type: "website" | "article" = "website",
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: "STAND",
      locale: "en_IN",
      title: `${title} | STAND`,
      description,
      url: path,
    },
  };
}
