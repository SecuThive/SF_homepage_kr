import { fetchRSSNews } from "@/lib/rss";
import HomeContent from "./HomeContent";

export const revalidate = 1800;

export default async function HomePage() {
  const allNews = await fetchRSSNews();
  return <HomeContent newsItems={allNews.slice(0, 5)} />;
}
