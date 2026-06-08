import { fetchRSSNews } from "@/lib/rss";
import HomeContent from "./HomeContent";

// no-store fetch(RSS)로 동적 렌더링 → Cloudflare(next-on-pages)에선 edge 런타임 필요
export const runtime = "edge";
export const revalidate = 1800;

export default async function HomePage() {
  const allNews = await fetchRSSNews();
  return <HomeContent newsItems={allNews.slice(0, 5)} />;
}
