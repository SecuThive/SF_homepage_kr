"use client";

import SiteHeader from "@/components/SiteHeader";
import { SolutionCrumbs } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);

  return (
    <>
      <SiteHeader activeId="ssq-soc" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="ARCUS IAM" />
          <div className="layout" style={{ minHeight: "44vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="partner-meta">
              <span className="chip solid">SSQ.soc · 01</span>
              <span className="chip">IDENTITY · ACCESS</span>
              <span className="chip accent">COMING SOON</span>
            </div>
            <h1>ARCUS IAM</h1>
            <p className="sol-hero-sub">
              {t(
                "통합 계정·접근 관리(IAM) 플랫폼",
                "Unified Identity & Access Management Platform",
                "統合ID・アクセス管理(IAM)プラットフォーム",
              )}
            </p>
            <p className="lede">
              {t(
                <>
                  <b>Arcus IAM</b> 페이지는 현재 준비 중입니다. 상세 콘텐츠는 곧 공개될
                  예정입니다.
                </>,
                <>
                  The <b>Arcus IAM</b> page is currently in preparation. Detailed content
                  will be available soon.
                </>,
                <>
                  <b>Arcus IAM</b>ページは現在準備中です。詳細なコンテンツは近日公開予定です。
                </>,
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
