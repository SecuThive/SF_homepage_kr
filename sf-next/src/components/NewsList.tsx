"use client";

import { useEffect, useMemo, useState } from "react";

export type NewsItem = {
  cat: string;
  label: string;
  title: string;
  source: string;
  sourceUrl?: string;
  date: string;
  body: string;
  link?: string;
  faviconUrl?: string;
};

const FILTERS = ["ALL", "VULNERABILITY", "BREACH", "APT", "PRESS"];

const CAT_IMAGES: Record<string, string[]> = {
  VULNERABILITY: ["/news/vulnerability.jpg", "/news/vuln-2.jpg", "/news/vuln-3.jpg"],
  BREACH:        ["/news/breach.jpg",        "/news/breach-2.jpg", "/news/breach-3.jpg"],
  APT:           ["/news/apt.jpg",           "/news/apt-2.jpg",   "/news/apt-3.jpg"],
  PRESS:         ["/news/press.jpg",         "/news/press-2.jpg", "/news/press-3.jpg"],
};

// 타이틀 기반으로 일관된 이미지 선택 (같은 기사는 항상 같은 이미지)
function pickImage(cat: string, title: string): string {
  const key = cat.toUpperCase();
  const pool = CAT_IMAGES[key] ?? CAT_IMAGES.PRESS;
  let hash = 0;
  for (let i = 0; i < title.length; i++) hash = (hash * 31 + title.charCodeAt(i)) >>> 0;
  return pool[hash % pool.length];
}

export default function NewsList({ items }: { items: NewsItem[] }) {
  const [activeFilter, setActiveFilter] = useState(0);
  const [selected, setSelected] = useState<NewsItem | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === 0) return items;
    const target = FILTERS[activeFilter];
    return items.filter((it) => it.cat.toUpperCase() === target);
  }, [activeFilter, items]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  return (
    <>
      <div className="filter">
        {FILTERS.map((label, i) => (
          <button
            key={label}
            type="button"
            className={i === activeFilter ? "on" : undefined}
            onClick={() => setActiveFilter(i)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="news-list">
        {filtered.map((it, i) => {
          const cardImg = pickImage(it.cat, it.title);
          return (
            <button
              key={`${it.title}-${i}`}
              type="button"
              className="news-card"
              onClick={() => setSelected(it)}
            >
              <div className="thumb">
                <img
                  src={cardImg}
                  alt={it.cat}
                  className="news-card-img"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
                {it.faviconUrl ? (
                  <img
                    src={it.faviconUrl}
                    alt={it.source}
                    className="news-favicon"
                    width={32}
                    height={32}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                ) : null}
                <span className="mini">{it.cat}</span>
              </div>
              <div className="cat">{it.label}</div>
              <h5>{it.title}</h5>
              <div className="meta">
                <span className="news-source-chip">{it.source}</span>
                <span>{it.date}</span>
              </div>
            </button>
          );
        })}
        {filtered.length === 0 && (
          <div className="news-empty">해당 카테고리의 소식이 아직 없습니다.</div>
        )}
      </div>

      {selected && (
        <div
          className="news-modal-overlay"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="news-modal"
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <button
              type="button"
              className="news-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="news-modal-thumb cat-thumb">
              <img
                src={pickImage(selected.cat, selected.title)}
                alt={selected.cat}
                className="news-modal-img"
              />
              <span className="mini">{selected.cat}</span>
            </div>

            <div className="news-modal-body">
              <div className="news-modal-source">
                {selected.faviconUrl && (
                  <img
                    src={selected.faviconUrl}
                    alt={selected.source}
                    width={18}
                    height={18}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                )}
                {selected.sourceUrl ? (
                  <a
                    href={selected.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {selected.source}
                  </a>
                ) : (
                  <span>{selected.source}</span>
                )}
                <span className="news-modal-date">{selected.date}</span>
              </div>

              <div className="cat">{selected.label}</div>
              <h3>{selected.title}</h3>

              {selected.body ? (
                <div className="body">
                  {selected.body.split("\n").filter(Boolean).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p className="body-more">※ 전체 내용은 원문에서 확인하세요.</p>
                </div>
              ) : (
                <div className="body body-empty">
                  <p>기사 본문은 원문 링크에서 확인할 수 있습니다.</p>
                </div>
              )}

              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-modal-orig"
                  onClick={(e) => e.stopPropagation()}
                >
                  원문 보기 <span className="arr">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
