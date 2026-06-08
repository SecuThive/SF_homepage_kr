import type { Metadata } from "next";
import { fetchRSSNews } from "@/lib/rss";
import NewsContent from "./NewsContent";

export const metadata: Metadata = { title: "뉴스" };
// no-store fetch(RSS)로 동적 렌더링 → Cloudflare(next-on-pages)에선 edge 런타임 필요
export const runtime = "edge";
export const revalidate = 1800;

export default async function NewsPage() {
  const items = await fetchRSSNews();
  return <NewsContent items={items} />;
}
