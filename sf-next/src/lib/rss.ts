import type { NewsItem } from "@/components/NewsList";

export type RSSItem = NewsItem & {
  link: string;
  sourceUrl: string;
  faviconUrl: string;
};

// ──────────────────────────────────────────────
// 공통 유틸
// ──────────────────────────────────────────────
function stripHtml(s: string): string {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/\s{2,}/g, " ").trim();
}

function getText(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const m = re.exec(xml);
  if (!m) return "";
  return stripHtml(m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1"));
}

function getLink(raw: string): string {
  const m1 = raw.match(/<link>\s*([^\s<]+)\s*<\/link>/i);
  if (m1) return m1[1].trim();
  const m2 = raw.match(/<link[^>]+href="([^"]+)"/i);
  if (m2) return m2[1].trim();
  return "";
}

function categorize(title: string): string {
  if (/취약점|cve|exploit|제로데이|zero.?day|패치|보안\s*업데이트/i.test(title)) return "VULNERABILITY";
  if (/침해|유출|랜섬웨어|악성코드|피싱|해킹|공격|탈취|사고/i.test(title)) return "BREACH";
  if (/apt|공급망|백도어|국가\s*지원|스파이|사이버전/i.test(title)) return "APT";
  return "PRESS";
}

function parseDate(raw: string): string {
  if (!raw) return new Date().toISOString().slice(0, 10).replace(/-/g, ".");
  // ISO-like: "2026-05-18 09:11:19"
  const iso = raw.match(/(\d{4}-\d{2}-\d{2})/);
  if (iso) return iso[1].replace(/-/g, ".");
  const d = new Date(raw);
  return isNaN(d.getTime())
    ? new Date().toISOString().slice(0, 10).replace(/-/g, ".")
    : d.toISOString().slice(0, 10).replace(/-/g, ".");
}

// ──────────────────────────────────────────────
// Google News RSS (카테고리별 3개 쿼리)
// ──────────────────────────────────────────────
type GoogleFeed = { url: string; defaultCat: string };

const GOOGLE_FEEDS: GoogleFeed[] = [
  {
    url: "https://news.google.com/rss/search?q=%EC%82%AC%EC%9D%B4%EB%B2%84+%EB%B3%B4%EC%95%88&hl=ko&gl=KR&ceid=KR:ko",
    defaultCat: "PRESS",
  },
  {
    url: "https://news.google.com/rss/search?q=%EB%9E%9C%EC%84%AC%EC%9B%A8%EC%96%B4+%EC%95%85%EC%84%B1%EC%BD%94%EB%93%9C+%ED%95%B4%ED%82%B9&hl=ko&gl=KR&ceid=KR:ko",
    defaultCat: "BREACH",
  },
  {
    url: "https://news.google.com/rss/search?q=%EB%B3%B4%EC%95%88+%EC%B7%A8%EC%95%BD%EC%A0%90+CVE&hl=ko&gl=KR&ceid=KR:ko",
    defaultCat: "VULNERABILITY",
  },
];

function getGoogleSource(raw: string): { name: string; url: string } {
  const m = raw.match(/<source\s+url="([^"]+)">([^<]+)<\/source>/i);
  if (m) return { url: m[1].trim(), name: m[2].trim() };
  return { name: "", url: "" };
}

function cleanTitle(title: string, sourceName: string): string {
  if (sourceName && title.endsWith(` - ${sourceName}`)) {
    return title.slice(0, -(` - ${sourceName}`).length).trim();
  }
  const lastDash = title.lastIndexOf(" - ");
  if (lastDash > 10) return title.slice(0, lastDash).trim();
  return title;
}

function parseGoogleItems(xml: string, defaultCat: string): RSSItem[] {
  const items: RSSItem[] = [];
  const seen = new Set<string>();
  const re = /<item>([\s\S]*?)<\/item>/g;
  let m;

  while ((m = re.exec(xml)) !== null) {
    const raw = m[1];
    const rawTitle = getText(raw, "title");
    if (!rawTitle) continue;

    const { name: sourceName, url: sourceUrl } = getGoogleSource(raw);
    const title = cleanTitle(rawTitle, sourceName);

    const key = title.slice(0, 40);
    if (seen.has(key)) continue;
    seen.add(key);

    const link = getLink(raw);
    const pub = getText(raw, "pubDate");
    const date = parseDate(pub);
    const cat = categorize(title) !== "PRESS" ? categorize(title) : defaultCat;

    let faviconUrl = "";
    try {
      const domain = sourceUrl ? new URL(sourceUrl).hostname : "";
      if (domain) faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch { /* ignore */ }

    items.push({
      cat,
      label: cat,
      title,
      source: sourceName || "Google 뉴스",
      sourceUrl: sourceUrl || "",
      date,
      body: "",   // Google News RSS는 본문 없음
      link,
      faviconUrl,
    });
  }
  return items;
}

// ──────────────────────────────────────────────
// 데일리시큐 RSS (실제 기사 본문 포함)
// ──────────────────────────────────────────────
const DAILYSECU_RSS = "https://www.dailysecu.com/rss/allArticle.xml";
const DAILYSECU_FAVICON = "https://www.google.com/s2/favicons?domain=dailysecu.com&sz=64";

function parseDailySecuItems(xml: string): RSSItem[] {
  const items: RSSItem[] = [];
  const seen = new Set<string>();
  const re = /<item>([\s\S]*?)<\/item>/g;
  let m;

  while ((m = re.exec(xml)) !== null) {
    const raw = m[1];
    const title = getText(raw, "title");
    if (!title) continue;

    const key = title.slice(0, 40);
    if (seen.has(key)) continue;
    seen.add(key);

    const link = getLink(raw);
    const pub = getText(raw, "pubDate");
    const date = parseDate(pub);
    const cat = categorize(title);

    // description에 실제 기사 본문 포함 (약 300자)
    const desc = getText(raw, "description");
    const body = desc.replace(/^[^가-힣a-zA-Z0-9(]+/, "").trim();

    items.push({
      cat,
      label: cat,
      title,
      source: "데일리시큐",
      sourceUrl: "https://www.dailysecu.com",
      date,
      body,
      link,
      faviconUrl: DAILYSECU_FAVICON,
    });
  }
  return items;
}

// ──────────────────────────────────────────────
// 통합 fetch
// ──────────────────────────────────────────────
export async function fetchRSSNews(): Promise<RSSItem[]> {
  const [googleResults, dailySecuResult] = await Promise.all([
    // Google News 3개 피드
    Promise.allSettled(
      GOOGLE_FEEDS.map(async ({ url, defaultCat }) => {
        const res = await fetch(url, {
          cache: "no-store",
          headers: { "User-Agent": "Mozilla/5.0 (compatible; SAFESQUARE-News/1.0)" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return parseGoogleItems(await res.text(), defaultCat);
      })
    ),
    // 데일리시큐
    (async () => {
      try {
        const res = await fetch(DAILYSECU_RSS, {
          cache: "no-store",
          headers: { "User-Agent": "Mozilla/5.0 (compatible; SAFESQUARE-News/1.0)" },
        });
        if (!res.ok) return [];
        return parseDailySecuItems(await res.text());
      } catch {
        return [];
      }
    })(),
  ]);

  const all: RSSItem[] = [];
  const globalSeen = new Set<string>();

  // 데일리시큐 우선 (본문 있음)
  for (const item of dailySecuResult) {
    const key = item.title.slice(0, 40);
    if (globalSeen.has(key)) continue;
    globalSeen.add(key);
    all.push(item);
  }

  // Google News 보완 (중복 제거)
  for (const r of googleResults) {
    if (r.status !== "fulfilled") continue;
    for (const item of r.value) {
      const key = item.title.slice(0, 40);
      if (globalSeen.has(key)) continue;
      globalSeen.add(key);
      all.push(item);
    }
  }

  return all
    .sort((a, b) => {
      const da = new Date(a.date.replace(/\./g, "-")).getTime();
      const db = new Date(b.date.replace(/\./g, "-")).getTime();
      return isNaN(da) || isNaN(db) ? 0 : db - da;
    })
    .slice(0, 50);
}
