"use client";

import Link from "@/components/LocaleLink";
import SiteHeader from "@/components/SiteHeader";
import LiveClock from "@/components/LiveClock";
import HomePopup from "@/components/HomePopup";
import { useLang } from "@/lib/i18n";
import { SS_NAV, type NavChild } from "@/lib/nav";
import type { NewsItem } from "@/components/NewsList";

// 홈 포트폴리오 섹션의 도메인별 헤더 (SiteHeader MEGA_META와 일관)
const PF_META: Record<string, { eyebrow: string; ko: string; en: string; ja: string }> = {
  "ssq-io": { eyebrow: "SSQ.io", ko: "NSHC 제품군", en: "NSHC Product Suite", ja: "NSHC製品群" },
  "ssq-co": { eyebrow: "SSQ.co", ko: "파트너 솔루션", en: "Partner Solutions", ja: "パートナーソリューション" },
  "ssq-ai": { eyebrow: "SSQ.ai", ko: "자사 솔루션", en: "In-House Solutions", ja: "自社ソリューション" },
  "ssq-soc": { eyebrow: "SSQ.soc", ko: "보안 관제 서비스", en: "Security Operations", ja: "セキュリティオペレーション" },
};

export default function HomeContent({ newsItems }: { newsItems: NewsItem[] }) {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);

  const totalSolutions = SS_PARTNERS.reduce((n, p) => n + p.solutions.length, 0);

  const portfolioGroups = SS_NAV.filter((n) => n.children && PF_META[n.id]);
  const childDesc = (c: NavChild) =>
    lang === "ja" ? c.descJa ?? c.descEn ?? c.desc : lang === "en" ? c.descEn ?? c.desc : c.desc;

  return (
    <>
      <HomePopup />
      <SiteHeader />

      <section className="hero" id="top" data-screen-label="01 Hero">
        <div className="hero-grid"></div>
        <div className="hero-squares" aria-hidden="true">
          <span className="frame"></span>
          <span className="frame inner"></span>
        </div>
        <div className="hero-side-meta" aria-hidden="true">
          <span className="tick"></span>
          <span>SEOUL — EST. 2015</span>
        </div>
        <div className="hero-meta">
          <span>
            <span className="dot"></span>SAFESQUARE &nbsp;⁄&nbsp; 2015
          </span>
          <LiveClock />
        </div>

        <div className="hero-inner">
          <div className="hero-kicker">
            <span className="num">N<sup>o</sup> 01</span>
            <span className="rule"></span>
            <span className="cat">{t("보안 기술 공식 파트너", "Official Technology Partner", "セキュリティ技術 公式パートナー")}</span>
          </div>
          <h1 className="hero-title">
            {t(
              <>
                <span className="line"><span>검증된 보안 기술,</span></span>
                <span className="line"><span>하나의 <em>계약</em>으로.</span></span>
              </>,
              <>
                <span className="line"><span>Verified Security Technologies,</span></span>
                <span className="line"><span>In One <em>Contract</em>.</span></span>
              </>,
              <>
                <span className="line"><span>検証されたセキュリティ技術を、</span></span>
                <span className="line"><span>ひとつの<em>契約</em>で。</span></span>
              </>,
            )}
          </h1>
          <p className="hero-sub">
            {t(
              <>
                SAFESQUARE는 국내·외 선도 보안 기업의 <b>공식 총판·기술 파트너</b>로서
                보안컨설팅, 공급망 보안, 엔드포인트, 데이터 보안, Cloud SIEM, 인증, 접근제어까지
                {" "}<b>5개 파트너의 검증된 솔루션</b>을 단일 계약으로 제공하고,
                자체 <b>Zero Trust 플랫폼 (SSQ 6 · Like Ocean)</b>으로 연결합니다.
              </>,
              <>
                SAFESQUARE is the <b>official distributor and technology partner</b> of leading Korean and
                global security vendors — delivering consulting, supply-chain security, endpoint, data
                security, authentication, and access control through{" "}
                <b>5 verified partner solutions</b> under a single contract, connected by our own{" "}
                <b>Zero Trust platform (SSQ 6 · Like Ocean)</b>.
              </>,
              <>
                SAFESQUAREは、国内外の先進セキュリティ企業の<b>公式総代理店・技術パートナー</b>として、
                セキュリティコンサルティング、サプライチェーンセキュリティ、エンドポイント、データセキュリティ、Cloud SIEM、認証、アクセス制御まで
                {" "}<b>5社のパートナーの検証済みソリューション</b>を単一契約で提供し、
                自社の<b>ゼロトラストプラットフォーム（SSQ 6 · Like Ocean）</b>で連携します。
              </>,
            )}
          </p>
        </div>

        <div className="hero-foot-wrap">
          <div className="trusted-label" data-reveal>
            <span>TRUSTED TECHNOLOGY PARTNERS</span>
            <span className="count">{SS_PARTNERS.length} PARTNERS · {totalSolutions} SOLUTIONS</span>
          </div>
          <div className="partner-strip">
            {SS_PARTNERS.map((p, i) => (
              <div key={p.id} className="partner-cell" data-reveal data-reveal-delay={Math.min(i, 5)}>
                <div className="pname">{p.name}</div>
                <div className="prole">{p.role}</div>
              </div>
            ))}
          </div>
          <div className="hero-stats">
            <div className="stat" data-reveal>
              <div className="num">
                <span data-count={SS_PARTNERS.length}>0</span>
              </div>
              <div className="lbl">TECHNOLOGY PARTNERS</div>
            </div>
            <div className="stat" data-reveal data-reveal-delay="1">
              <div className="num">
                <span data-count={totalSolutions}>0</span>
              </div>
              <div className="lbl">VERIFIED SOLUTIONS</div>
            </div>
            <div className="stat" data-reveal data-reveal-delay="2">
              <div className="num">
                <span data-count="240">0</span>
                <sup>+</sup>
              </div>
              <div className="lbl">DEPLOYMENT PROJECTS</div>
            </div>
            <div className="stat" data-reveal data-reveal-delay="3">
              <div className="num">
                24<sup>/7</sup>
              </div>
              <div className="lbl">TECHNICAL SUPPORT</div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-portfolio" id="portfolio">
        <div className="container">
          <div className="home-pf-head">
            <div className="eyebrow">TECHNOLOGY PORTFOLIO</div>
            <h2 className="home-pf-title">
              {t("3개 도메인, 8개 보안 제품군.", "Three domains, eight security product lines.", "3つのドメイン、8つの製品群。")}
            </h2>
            <p className="home-pf-lede">
              {t(
                "SAFESQUARE가 직접 개발한 자사 솔루션(SSQ.ai), 검증된 파트너 솔루션(SSQ.co), 그리고 보안 관제 서비스(SSQ.soc)를 하나의 체계로 제공합니다.",
                "SAFESQUARE's own in-house solutions (SSQ.ai), verified partner solutions (SSQ.co), and security operations (SSQ.soc) — delivered as one framework.",
                "SAFESQUAREが自社開発したソリューション（SSQ.ai）、検証済みパートナーソリューション（SSQ.co）、そしてセキュリティオペレーション（SSQ.soc）を一つの体系で提供します。",
              )}
            </p>
          </div>

          {portfolioGroups.map((group) => (
            <div key={group.id} className="home-pf-domain">
              <div className="home-pf-domain-head">
                <span className="home-pf-domain-eyebrow">{PF_META[group.id].eyebrow}</span>
                <h3 className="home-pf-domain-title">{PF_META[group.id][lang]}</h3>
              </div>
              <div className="home-pf-grid">
                {group.children!.map((c) => (
                  <Link key={c.href} href={c.href} className="home-pf-card" data-reveal>
                    <div className="home-pf-card-top">
                      <span className="home-pf-mark">{c.mark}</span>
                      <span className="home-pf-num">{c.num}</span>
                    </div>
                    <span className="home-pf-cat">{c.cat}</span>
                    <h4 className="home-pf-name">{c.title}</h4>
                    <p className="home-pf-desc">{childDesc(c)}</p>
                    <span className="home-pf-arr">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-news-section">
        <div className="container">
          <div className="home-news-head">
            <div>
              <div className="eyebrow">NEWS &amp; INSIGHTS</div>
              <h2 className="home-news-title">
                {t("최신 보안 뉴스", "Latest Security News", "最新セキュリティニュース")}
              </h2>
            </div>
            <Link href="/news" className="link-arr">
              {t("전체 보기", "View all", "すべて見る")} <span className="arr">→</span>
            </Link>
          </div>

          <div className="home-news-list">
            {newsItems.length > 0 ? newsItems.map((item, i) => (
              item.link ? (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-news-row"
                  data-reveal
                  data-reveal-delay={i}
                >
                  <span className="home-news-cat">{item.cat}</span>
                  <span className="home-news-ttl">{item.title}</span>
                  <span className="home-news-meta">
                    <span>{item.source}</span>
                    <span>{item.date}</span>
                  </span>
                  <span className="home-news-arr">→</span>
                </a>
              ) : (
                <div
                  key={i}
                  className="home-news-row"
                  data-reveal
                  data-reveal-delay={i}
                >
                  <span className="home-news-cat">{item.cat}</span>
                  <span className="home-news-ttl">{item.title}</span>
                  <span className="home-news-meta">
                    <span>{item.source}</span>
                    <span>{item.date}</span>
                  </span>
                </div>
              )
            )) : (
              <p className="home-news-empty">
                {t("뉴스를 불러오는 중입니다.", "Loading news...", "ニュースを読み込んでいます。")}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

type Solution = {
  code: string;
  name: string;
  sub: string;
  tagline: string;
  desc: string;
  tags: string[];
};
type Partner = {
  id: string;
  no: string;
  name: string;
  nameKo: string;
  category: string;
  categoryKo: string;
  role: string;
  mark: string;
  href: string;
  solutions: Solution[];
};

const SS_PARTNERS: Partner[] = [
  {
    id: "nshc", no: "01", name: "NSHC", nameKo: "NSHC",
    category: "SECURITY SERVICES", categoryKo: "보안 서비스",
    role: "Offensive Security · CTI", mark: "N", href: "/solutions/nshc",
    solutions: [
      { code: "BAT-ASM", name: "BAT Insight", sub: "Alpha ASM",
        tagline: "외부공격면(ASM) · 다크웹 · CTI 통합 플랫폼",
        desc: "외부 노출 자산을 7일 내 가시화하고, 다크웹·위협 인텔리전스와 연동해 선제 대응합니다.",
        tags: ["ASM", "Darkweb", "CTI", "Recon"] },
    ],
  },
  {
    id: "pnpsecure", no: "02", name: "PnP Secure", nameKo: "피앤피시큐어",
    category: "ACCESS CONTROL", categoryKo: "접근제어 · 권한관리",
    role: "Access & Identity Governance", mark: "P", href: "/ssq-co/dbsafer",
    solutions: [
      { code: "PNP-IM", name: "IM", sub: "Identity Management",
        tagline: "계정 생명주기 · 권한 자동 프로비저닝",
        desc: "입·퇴사·조직 변경 이벤트에 맞춰 권한을 자동으로 발급·회수하고 감사 리포트를 생성합니다.",
        tags: ["JML", "SCIM", "Provisioning", "Audit"] },
      { code: "PNP-AM", name: "AM", sub: "Access Management",
        tagline: "DB·서버 접근제어 · 명령 로깅",
        desc: "DB/서버/클라우드 접근을 정책 기반으로 통제하고 모든 명령을 불변 로그로 기록합니다.",
        tags: ["DB 접근제어", "Server", "개인정보 로그", "Continuous Auth"] },
    ],
  },
  {
    id: "kica", no: "03", name: "KICA", nameKo: "한국정보인증",
    category: "IDENTITY · MFA", categoryKo: "인증 · MFA",
    role: "Trusted Identity · PKI", mark: "K", href: "/ssq-co/mfa",
    solutions: [
      { code: "KICA-ANY", name: "AnySign", sub: "Multi-Factor Authentication",
        tagline: "OTP · FIDO2 · PKI · 생체인증 통합",
        desc: "단일 인증 허브로 OTP·FIDO·PKI·생체·메신저 인증까지 통합 적용합니다.",
        tags: ["MFA", "FIDO2", "OTP", "PKI"] },
      { code: "KICA-OTPT", name: "OTP Gripping Tower", sub: "OTP Key Management",
        tagline: "OTP 시드 · 키 수명주기 관리",
        desc: "OTP 시드의 생성·배포·회수 전 단계를 HSM 기반으로 안전하게 관리합니다.",
        tags: ["OTP", "HSM", "Key Mgmt"] },
    ],
  },
  {
    id: "everyzone", no: "04", name: "Everyzone", nameKo: "에브리존",
    category: "ENDPOINT", categoryKo: "엔드포인트",
    role: "EDR · Anti-Ransomware", mark: "E", href: "/ssq-co/edr",
    solutions: [
      { code: "EZ-WD", name: "화이트디펜더", sub: "Endpoint Detection & Response",
        tagline: "행위 기반 EDR · 안티랜섬웨어",
        desc: "파일리스 공격·랜섬웨어 행위를 실시간 탐지·격리하고 원클릭 롤백을 제공합니다.",
        tags: ["EDR", "Anti-Ransom", "Rollback", "Behavior"] },
    ],
  },
  {
    id: "bluemoon", no: "05", name: "Bluemoon Soft", nameKo: "블루문소프트",
    category: "DATA SECURITY", categoryKo: "데이터 보안 · DRM",
    role: "Document DRM", mark: "B", href: "/ssq-co/drm",
    solutions: [
      { code: "BM-DRM", name: "DRM", sub: "Document Rights Management",
        tagline: "문서 단위 암호화 · 권한 제어",
        desc: "Office · CAD · PDF · 협업툴 전반의 문서를 생성 시점부터 암호화하고 사용 이력을 추적합니다.",
        tags: ["DRM", "DLP", "Encryption"] },
    ],
  },
];
