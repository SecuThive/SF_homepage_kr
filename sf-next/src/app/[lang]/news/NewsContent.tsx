"use client";

import Link from "@/components/LocaleLink";
import SiteHeader from "@/components/SiteHeader";
import NewsList from "@/components/NewsList";
import { useLang } from "@/lib/i18n";
import type { NewsItem } from "@/components/NewsList";

export default function NewsContent({ items }: { items: NewsItem[] }) {
  const { lang } = useLang();
  const isEn = lang === "en";

  const featured = items[0] ?? null;
  const listItems = items.slice(1);

  return (
    <>
      <SiteHeader activeId="news" />

      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="container">
          <div className="crumbs">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <span>NEWS</span>
          </div>
          <h1>
            {isEn ? (
              <>Cybersecurity<br /><em>Real-Time News</em></>
            ) : (
              <>사이버 보안<br /><em>실시간 뉴스</em></>
            )}
          </h1>
          <p className="lede">
            {isEn
              ? "Real-time security updates from The Hacker News · Krebs on Security · Bleeping Computer."
              : "The Hacker News · Krebs on Security · Bleeping Computer 주요 보안 소식을 실시간으로 전달합니다."}
          </p>
        </div>
      </section>

      <section className="news-main">
        <div className="container">
          {featured ? (
            <div className="news-hero">
              <div className="feat">
                <span className="tag">{featured.cat}</span>
              </div>
              <div>
                <div className="cat">{featured.cat} · {featured.date}</div>
                <h2>{featured.title}</h2>
                <p>{featured.body.slice(0, 240)}{featured.body.length > 240 ? "…" : ""}</p>
                <div className="meta">
                  <span>{featured.source}</span>
                  <span>{featured.date}</span>
                </div>
                {featured.link && (
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arr"
                    style={{ display: "inline-flex", marginTop: 20 }}
                  >
                    {isEn ? "Read Article" : "원문 보기"} <span className="arr">→</span>
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="news-hero" style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ color: "var(--ink-40, #8A8A8A)", fontSize: 15 }}>
                {isEn
                  ? "Loading news. Please try again in a moment."
                  : "뉴스를 불러오는 중입니다. 잠시 후 다시 시도해주세요."}
              </p>
            </div>
          )}

          <NewsList items={listItems} />
        </div>
      </section>
    </>
  );
}
