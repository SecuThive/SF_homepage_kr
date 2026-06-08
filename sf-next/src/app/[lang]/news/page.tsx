import type { Metadata } from "next";
import { fetchRSSNews } from "@/lib/rss";
import NewsContent from "./NewsContent";

export const metadata: Metadata = { title: "뉴스" };
export const revalidate = 1800;

export default async function NewsPage() {
  const items = await fetchRSSNews();
  return <NewsContent items={items} />;
}
