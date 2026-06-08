import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://safesquare.io";
const LOCALES = ["ko", "en", "ja"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/business",
    "/careers",
    "/clients",
    "/contact",
    "/news",
    "/technology",
    "/future",
    "/ssq-io/asm",
    "/ssq-io/sbom",
    "/ssq-io/hel",
    "/ssq-ai/pentester",
    "/ssq-ai/logeater",
    "/ssq-co/mfa",
    "/ssq-co/dbsafer",
    "/ssq-co/edr",
    "/ssq-co/drm",
    "/ssq-trust/arcus",
    "/ssq-soc",
    "/solutions/nshc",
    "/privacy",
    "/terms",
    "/security",
    "/isms-p",
  ];
  const now = new Date();

  // 경로 × 로케일 전개 + hreflang 대체 링크
  return routes.flatMap((path) => {
    const languages = Object.fromEntries(
      LOCALES.map((l) => [l, `${BASE}/${l}${path}`]),
    );
    return LOCALES.map((l) => ({
      url: `${BASE}/${l}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: { languages },
    }));
  });
}
