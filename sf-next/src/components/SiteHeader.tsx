"use client";

import Link from "@/components/LocaleLink";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SS_NAV, type NavChild } from "@/lib/nav";
import { useLang, type Lang, LOCALES } from "@/lib/i18n";

type Props = { activeId?: string };

const NAV_LABEL_EN: Record<string, string> = {
  about: "About",
  "ssq-io": "SSQ.io",
  "ssq-co": "SSQ.co",
  "ssq-ai": "SSQ.ai",
  "ssq-soc": "SSQ.soc",
  news: "News",
};

const NAV_CHILD_DESC_EN: Record<string, string> = {
  "/ssq-io/asm": "AI-Powered Attack Surface Management · Asset Discovery · Threat Analysis",
  "/ssq-io/sbom": "Software BOM Analysis · Supply Chain Security · CVE Mapping",
  "/ssq-ai/pentester": "Automated AI Pentesting · Vulnerability Detection · Report Generation",
  "/ssq-co/mfa": "Multi-Factor Auth · FIDO2 · PKI",
  "/ssq-co/dbsafer": "DB · System · OS Access Control",
  "/ssq-co/edr": "Anti-Ransomware · Behavior-Based Detection · Rollback",
  "/ssq-co/drm": "File-Level DRM · Document Security · Encryption",
  "/ssq-trust/arcus": "Zero Trust Integrated Security Platform (Coming Soon)",
};

// 자식 메뉴 타이틀(ASM, SBOM, MFA 등)은 모든 언어 공통 브랜드명이므로 별도 매핑 없음 → ko 타이틀로 폴백
const NAV_CHILD_TITLE_EN: Record<string, string> = {};

const NAV_LABEL_JA: Record<string, string> = {
  about: "会社紹介",
  "ssq-io": "SSQ.io",
  "ssq-co": "SSQ.co",
  "ssq-ai": "SSQ.ai",
  "ssq-soc": "SSQ.soc",
  news: "ニュース",
};

const NAV_CHILD_DESC_JA: Record<string, string> = {
  "/ssq-io/asm": "AIによる攻撃表面管理 · 資産検出 · 脅威分析",
  "/ssq-io/sbom": "ソフトウェアBOM分析 · サプライチェーンセキュリティ · CVEマッピング",
  "/ssq-ai/pentester": "AI自動ペンテスト · 脆弱性検出 · レポート生成",
  "/ssq-co/mfa": "多要素認証 · FIDO2 · PKI",
  "/ssq-co/dbsafer": "DB · システム · OSアクセス制御",
  "/ssq-co/edr": "アンチランサムウェア · 行動ベース検知 · ロールバック",
  "/ssq-co/drm": "ファイル単位DRM · 文書セキュリティ · 暗号化",
  "/ssq-trust/arcus": "ゼロトラスト統合セキュリティプラットフォーム（準備中）",
};

// 메가 드롭다운 그룹별 메타 (eyebrow · 전체보기 링크 · 자사제품 여부)
// tagline·footerLabel은 자사/파트너 기본 문구 대신 그룹 전용 문구를 쓰고 싶을 때 사용
type LangText = Record<Lang, string>;
const MEGA_META: Record<
  string,
  { eyebrow: string; viewAll: string; ownProduct: boolean; tagline?: LangText; footerLabel?: LangText }
> = {
  "ssq-io": {
    eyebrow: "NSHC SECURITY SUITE",
    viewAll: "/ssq-io/asm",
    ownProduct: true,
    tagline: {
      ko: "NSHC 제품군",
      en: "NSHC Product Suite",
      ja: "NSHC製品群",
    },
    footerLabel: {
      ko: "NSHC 기술 기반 · 글로벌 보안 전문기업",
      en: "Powered by NSHC · Global Security Specialist",
      ja: "NSHCテクノロジー基盤 · グローバルセキュリティ専門企業",
    },
  },
  "ssq-co": { eyebrow: "TECHNOLOGY PORTFOLIO", viewAll: "/#portfolio", ownProduct: false },
  "ssq-ai": {
    eyebrow: "SAFESQUARE IN-HOUSE SOLUTIONS",
    viewAll: "/ssq-ai/pentester",
    ownProduct: true,
    tagline: {
      ko: "자사 솔루션",
      en: "In-House Solutions",
      ja: "自社ソリューション",
    },
    footerLabel: {
      ko: "SAFESQUARE 자사 솔루션",
      en: "SAFESQUARE In-House Solutions",
      ja: "SAFESQUARE 自社ソリューション",
    },
  },
  "ssq-soc": {
    eyebrow: "SECURITY OPERATIONS",
    viewAll: "/ssq-soc/iam",
    ownProduct: true,
    tagline: {
      ko: "보안 관제 서비스",
      en: "Security Operations",
      ja: "セキュリティオペレーション",
    },
    footerLabel: {
      ko: "SAFESQUARE 보안 관제 서비스",
      en: "SAFESQUARE Security Operations",
      ja: "SAFESQUAREセキュリティオペレーション",
    },
  },
};

export default function SiteHeader({ activeId }: Props) {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  // 언어 전환: 같은 경로에서 로케일 세그먼트만 교체해 이동
  const switchLang = (l: Lang) => {
    setLang(l);
    const parts = (pathname || "/").split("/");
    if ((LOCALES as string[]).includes(parts[1])) parts[1] = l;
    else parts.splice(1, 0, l);
    router.push(parts.join("/") || `/${l}`);
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const openDropdown = (id: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setOpenDrop(id);
  };
  const closeDropdown = () => {
    leaveTimer.current = setTimeout(() => setOpenDrop(null), 180);
  };
  const keepOpen = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  };

  const navLabel = (id: string, koLabel: string) =>
    lang === "ja"
      ? NAV_LABEL_JA[id] ?? NAV_LABEL_EN[id] ?? koLabel
      : lang === "en"
        ? NAV_LABEL_EN[id] ?? koLabel
        : koLabel;
  const childTitle = (href: string, koTitle: string) =>
    lang === "en" || lang === "ja" ? NAV_CHILD_TITLE_EN[href] ?? koTitle : koTitle;
  const childDesc = (c: NavChild) =>
    lang === "ja"
      ? c.descJa ?? NAV_CHILD_DESC_JA[c.href] ?? c.descEn ?? NAV_CHILD_DESC_EN[c.href] ?? c.desc
      : lang === "en"
        ? c.descEn ?? NAV_CHILD_DESC_EN[c.href] ?? c.desc
        : c.desc;

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY;
      setScrolled(s > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width = Math.min(100, (s / Math.max(h, 1)) * 100) + "%";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`topbar${scrolled ? " scrolled" : ""}`} id="topbar">
        <Link href="/" className="brand">
          <span className="brand-mark">
            <svg viewBox="0 0 22 22" fill="none">
              <path
                d="M2 2 L18 3 L20 18 L3 20 Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          SAFESQUARE
        </Link>

        <nav className="primary" aria-label="주요 메뉴">
          {SS_NAV.map((item) => {
            const active = item.id === activeId ? " active" : "";
            if (item.children) {
              const isOpen = openDrop === item.id;
              return (
                <div
                  key={item.id}
                  className={`nav-item${active}`}
                  onMouseEnter={() => openDropdown(item.id)}
                  onMouseLeave={closeDropdown}
                >
                  <button aria-haspopup="true" aria-expanded={isOpen} type="button">
                    {navLabel(item.id, item.label)}
                    <svg className="caret" viewBox="0 0 8 8" fill="none">
                      <path d="M1 2l3 4 3-4" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </button>
                  {/* 메가 드롭다운 */}
                  <div
                    className={`mega-dropdown${isOpen ? " is-open" : ""}`}
                    role="menu"
                    onMouseEnter={keepOpen}
                    onMouseLeave={closeDropdown}
                  >
                    {/* 헤더 */}
                    <div className="mega-header">
                      <div className="mega-header-left">
                        <span className="mega-eyebrow">
                          {MEGA_META[item.id]?.eyebrow ?? "TECHNOLOGY PORTFOLIO"}
                        </span>
                        <p className="mega-tagline">
                          {MEGA_META[item.id]?.tagline
                            ? MEGA_META[item.id]!.tagline![lang]
                            : MEGA_META[item.id]?.ownProduct
                              ? (lang === "ja"
                                  ? "SAFESQUARE 自社製品"
                                  : lang === "en"
                                    ? "SAFESQUARE Own Products"
                                    : "세이프스퀘어 자사 제품")
                              : (lang === "ja"
                                  ? `${item.children.length}社の認証済みパートナー`
                                  : lang === "en"
                                    ? `${item.children.length} Verified Partners`
                                    : `${item.children.length}개 검증된 파트너`)}
                        </p>
                      </div>
                      <Link href={MEGA_META[item.id]?.viewAll ?? "/#portfolio"} className="mega-view-all">
                        {lang === "ja" ? "全て" : lang === "en" ? "All" : "전체"}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      </Link>
                    </div>
                    {/* 세로 리스트 */}
                    <div className="mega-list">
                      {item.children.map((c, idx) => (
                        <Link key={c.href} href={c.href} className="mega-row">
                          <div className="mega-icon">{c.mark}</div>
                          <div className="mega-row-body">
                            <span className="mega-cat">{c.cat}</span>
                            <strong className="mega-name">{childTitle(c.href, c.title)}</strong>
                            <span className="mega-desc">{childDesc(c)}</span>
                          </div>
                          <span className="mega-num">{c.num}</span>
                        </Link>
                      ))}
                    </div>
                    {/* 푸터 */}
                    <div className="mega-footer">
                      <span className="mega-footer-label">
                        {MEGA_META[item.id]?.footerLabel
                          ? MEGA_META[item.id]!.footerLabel![lang]
                          : MEGA_META[item.id]?.ownProduct
                            ? (lang === "ja"
                                ? "AI駆動 · SAFESQUARE 自社開発"
                                : lang === "en"
                                  ? "AI-Powered · Made by SAFESQUARE"
                                  : "AI 기반 · SAFESQUARE 자체 개발")
                            : (lang === "ja"
                                ? "単一契約 · 24/7 サポート"
                                : lang === "en"
                                  ? "Single contract · 24/7 support"
                                  : "단일 계약 · 24/7 지원")}
                      </span>
                      <Link href="/contact" className="mega-footer-cta">
                        {lang === "ja" ? "お問い合わせ →" : lang === "en" ? "Contact →" : "도입 문의 →"}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div key={item.id} className={`nav-item${active}${item.accent ? " is-accent" : ""}`}>
                <Link href={item.href}>
                  {navLabel(item.id, item.label)}
                  {item.badge ? (
                    <span className={item.accent ? "nav-badge nav-badge-accent" : "nav-badge"}>
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="top-cta">
          <span className="lang" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "ko" ? "is-active" : ""}
              aria-pressed={lang === "ko"}
              onClick={() => switchLang("ko")}
            >
              KR
            </button>
            <button
              type="button"
              className={lang === "en" ? "is-active" : ""}
              aria-pressed={lang === "en"}
              onClick={() => switchLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === "ja" ? "is-active" : ""}
              aria-pressed={lang === "ja"}
              onClick={() => switchLang("ja")}
            >
              JP
            </button>
          </span>
          <Link href="/contact" className="contact-btn">
            CONTACT
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </Link>
          <button
            className={`mobile-toggle${mobileOpen ? " open" : ""}`}
            id="mobileToggle"
            aria-label="메뉴"
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav${mobileOpen ? " open" : ""}`} id="mobileNav">
        {SS_NAV.map((item) => {
          if (item.children) {
            const open = openSub === item.id;
            return (
              <div key={item.id}>
                <button
                  className="m-group"
                  type="button"
                  onClick={() => setOpenSub(open ? null : item.id)}
                >
                  {navLabel(item.id, item.label)}
                  <span>+</span>
                </button>
                <div className={`sublist${open ? " open" : ""}`}>
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)}>
                      {childTitle(c.href, c.title)}
                      <span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <Link key={item.id} href={item.href} onClick={() => setMobileOpen(false)}>
              {navLabel(item.id, item.label)}
              <span>→</span>
            </Link>
          );
        })}
        <Link
          href="/contact"
          style={{ color: "var(--accent)", marginTop: 24 }}
          onClick={() => setMobileOpen(false)}
        >
          CONTACT<span>→</span>
        </Link>
      </div>

      <div className="scroll-progress" id="scrollProgress" ref={progressRef} />
    </>
  );
}
