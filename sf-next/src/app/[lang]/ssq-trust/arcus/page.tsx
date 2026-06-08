"use client";

import Link from "@/components/LocaleLink";
import SiteHeader from "@/components/SiteHeader";
import { useLang } from "@/lib/i18n";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);

  return (
    <>
      <SiteHeader activeId="ssq-ai" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <div className="layout" style={{ minHeight: "52vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="partner-meta">
              <span className="chip solid">SAFESQUARE · 03</span>
              <span className="chip accent">ZERO TRUST</span>
              <span className="chip">{t("준비중", "Coming Soon", "準備中")}</span>
            </div>
            <h1>Arcus Zero-Trust</h1>
            <p className="sol-hero-sub">
              {t("Zero Trust 기반 보안 플랫폼", "Zero Trust Security Platform", "ゼロトラストベースのセキュリティプラットフォーム")}
            </p>
            <p className="lede">
              {t(
                "SAFESQUARE 한국 법인이 자체 개발하는 Zero Trust 기반 보안 플랫폼 Arcus Zero-Trust는 현재 준비 중입니다. 곧 자세한 내용을 공개할 예정입니다.",
                "Arcus Zero-Trust, a Zero Trust security platform developed in-house by SAFESQUARE Korea, is currently in preparation. Details will be available soon.",
                "SAFESQUARE 韓国法人が自社開発するゼロトラストベースのセキュリティプラットフォーム Arcus Zero-Trust は現在準備中です。詳細は近日公開予定です。",
              )}
            </p>
            <div style={{ marginTop: 28 }}>
              <Link href="/contact" className="cta-btn">
                {t("도입 문의", "Contact Us", "お問い合わせ")}
                <svg width="11" height="11" viewBox="0 0 10 10" fill="none" style={{ marginLeft: 8 }}>
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
