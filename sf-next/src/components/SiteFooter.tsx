"use client";

import Link from "@/components/LocaleLink";
import BackToTop from "./BackToTop";
import FooterLang from "./FooterLang";
import { useLang } from "@/lib/i18n";

const NAV_COMPANY = [
  { href: "/about", ko: "회사소개", en: "About Us", ja: "会社紹介" },
  { href: "/news", ko: "뉴스", en: "News", ja: "ニュース" },
];

const NAV_SOLUTIONS = [
  { href: "/solutions/nshc", ko: "NSHC · 컨설팅", en: "NSHC · Consulting", ja: "NSHC · コンサルティング" },
  { href: "/solutions/kica", ko: "한국정보인증 · MFA", en: "KICA · MFA", ja: "KICA · MFA" },
  { href: "/solutions/pnpsecure", ko: "피앤피시큐어 · 접근제어", en: "PnP Secure · Access Control", ja: "PnP Secure · アクセス制御" },
  { href: "/solutions/everyzone", ko: "에브리존 · 엔드포인트", en: "Everyzone · Endpoint", ja: "Everyzone · エンドポイント" },
  { href: "/solutions/bluemoon", ko: "블루문 · DRM", en: "Bluemoon Soft · DRM", ja: "Bluemoon Soft · DRM" },
];

const NAV_RESOURCES: { href: string; ko: string; en: string; ja: string; badge?: string }[] = [
  { href: "/technology", ko: "도입 프로세스", en: "Process", ja: "導入プロセス" },
  { href: "/future", ko: "The Future · AX", en: "The Future · AX", ja: "The Future · AX" },
  { href: "/contact", ko: "문의 · PoC", en: "Contact · PoC", ja: "お問い合わせ · PoC" },
];

const NAV_LEGAL = [
  { href: "/privacy", ko: "개인정보처리방침", en: "Privacy Policy", ja: "プライバシーポリシー" },
  { href: "/terms", ko: "이용약관", en: "Terms of Use", ja: "利用規約" },
  { href: "/security", ko: "보안 정책", en: "Security Policy", ja: "セキュリティポリシー" },
  { href: "/isms-p", ko: "ISMS-P 인증", en: "ISMS-P Cert.", ja: "ISMS-P 認証" },
];

const CERTS = ["ISMS-P", "ISO 27001", "CSAP", "SOC 2 Type II", "FIPS 140-2"];

const PARTNERS = [
  { href: "/solutions/nshc", label: "NSHC" },
  { href: "/solutions/kica", label: "KICA" },
  { href: "/solutions/pnpsecure", label: "PNP SECURE" },
  { href: "/solutions/everyzone", label: "EVERYZONE" },
  { href: "/solutions/bluemoon", label: "BLUEMOON SOFT" },
];

type NavItem = { href: string; ko: string; en: string; ja: string; badge?: string };

function Col({ title, items, lang }: { title: string; items: NavItem[]; lang: string }) {
  return (
    <div className="foot-col">
      <h5>{title}</h5>
      <ul>
        {items.map((i) => (
          <li key={i.href + i.ko}>
            <Link href={i.href}>
              {lang === "ja" ? i.ja : lang === "en" ? i.en : i.ko}
              {i.badge ? <span className="b">{i.badge}</span> : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  const { lang } = useLang();
  const year = new Date().getFullYear();
  const isEn = lang === "en";
  const t = <T,>(ko: T, en: T, ja: T): T => (lang === "ja" ? ja : lang === "en" ? en : ko);

  return (
    <footer className="site-footer" aria-labelledby="footer-brand">
      <div className="foot-inner">
        <div className="foot-top">
          <div>
            <Link href="/" className="foot-brand-mark" id="footer-brand">
              <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path
                  d="M2 2 L18 3 L20 18 L3 20 Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              SAFESQUARE
            </Link>
            <div className="foot-tagline">
              {lang === "ja" ? (
                <>検証されたセキュリティ技術を、<br /><em>ひとつの場所で。</em></>
              ) : isEn ? (
                <>Verified security technology,<br /><em>in one place.</em></>
              ) : (
                <>검증된 보안 기술,<br /><em>한 곳에서.</em></>
              )}
            </div>
            <p className="foot-desc">
              {t(
                "국내·외 선도 보안 기업의 공식 기술·솔루션 파트너. 도입 진단부터 구축·운영까지 한 계약으로 책임집니다.",
                "Official technology & solution partner for leading domestic and global security firms. From assessment to deployment and operations — all under one contract.",
                "国内外の先進セキュリティ企業の公式技術・ソリューションパートナー。導入診断から構築・運用まで、ひとつの契約で責任を持って対応します。"
              )}
            </p>
            <Link href="/contact" className="foot-cta">
              {isEn ? "PROJECT INQUIRY" : "PROJECT INQUIRY"}
              <svg viewBox="0 0 14 14">
                <path d="M1 13L13 1M13 1H4M13 1V10" />
              </svg>
            </Link>
          </div>

          <div className="foot-nav">
            <Col title="Company" items={NAV_COMPANY} lang={lang} />
            <Col title="Solutions" items={NAV_SOLUTIONS} lang={lang} />
            <Col title={t("리소스", "Resources", "リソース")} items={NAV_RESOURCES} lang={lang} />
            <Col title="Legal" items={NAV_LEGAL} lang={lang} />
          </div>
        </div>

        <div className="foot-mid">
          <div className="foot-contact">
            <div className="cblk">
              <div className="k">Headquarters</div>
              <div className="v">
                {lang === "ja" ? (
                  <>京畿道 軍浦市 高山路148番ギル17<br />軍浦ITバレー B棟414号</>
                ) : isEn ? (
                  <>17 Gosan-ro 148beon-gil, Gunpo, Gyeonggi<br />Gunpo IT Valley B-dong #414</>
                ) : (
                  <>경기도 군포시 고산로 148번길 17<br />군포IT밸리 B동 414호</>
                )}
                <span className="s">{t("평일 09:00 – 18:00 (KST)", "Mon–Fri 09:00–18:00 (KST)", "平日 09:00–18:00 (KST)")}</span>
              </div>
            </div>
            <div className="cblk">
              <div className="k">Sales / General</div>
              <div className="v">
                <a href="mailto:sales@safesquare.co.kr">sales@safesquare.co.kr</a>
                <span className="s">{t("도입·견적 문의", "Sales & Quotation", "導入・お見積りのお問い合わせ")}</span>
              </div>
            </div>
            <div className="cblk">
              <div className="k">Support · 24/7</div>
              <div className="v">
                <a href="mailto:support@safesquare.co.kr">support@safesquare.co.kr</a>
                <br />
                <a href="mailto:security@safesquare.co.kr">security@safesquare.co.kr</a>
                <span className="s">{t("취약점 제보 · 기술 지원", "Vulnerability Reports · Technical Support", "脆弱性報告 · 技術サポート")}</span>
              </div>
            </div>
          </div>

          <div className="foot-certs" aria-label="certifications">
            {CERTS.map((c) => (
              <span key={c} className="cert-chip">{c}</span>
            ))}
          </div>
        </div>

        <div className="foot-partners" aria-label="technology partners">
          <span className="lbl">Technology Partners</span>
          <div className="plist">
            {PARTNERS.map((p) => (
              <Link key={p.href} href={p.href}>{p.label}</Link>
            ))}
          </div>
        </div>

        <div className="foot-bot">
          <div className="left">
            <div className="brand-line">SAFESQUARE Inc.</div>
            <div>© {year} SAFESQUARE Inc. All rights reserved.</div>
            {lang === "ko" && (
              <div className="biz">
                <b>상호</b> (주)세이프스퀘어 &nbsp;·&nbsp; <b>대표이사</b> 최병규 &nbsp;·&nbsp; <b>사업자등록번호</b> 710-86-00310
                <br />
                <b>개인정보보호책임자</b> 이동하 (<a href="mailto:privacy@safesquare.co.kr">privacy@safesquare.co.kr</a>)
              </div>
            )}
          </div>
          <div className="right">
            <div className="foot-legal">
              <Link href="/privacy">{t("개인정보", "Privacy", "プライバシー")}</Link>
              <Link href="/terms">{t("이용약관", "Terms", "利用規約")}</Link>
              <Link href="/security">{t("보안정책", "Security", "セキュリティ")}</Link>
              <Link href="/isms-p">ISMS-P</Link>
            </div>

            <FooterLang />

            <div className="foot-social" aria-label="social">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 10v7M7 7v.01M11 17v-5a2 2 0 014 0v5M11 12v5" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="5" width="20" height="14" rx="3" />
                  <path d="M10 9l5 3-5 3V9z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg viewBox="0 0 24 24">
                  <path d="M9 19c-4 1.5-4-2-6-2.5M15 22v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0019 4.77 5.07 5.07 0 0018.91 1S17.73.65 15 2.48a13.38 13.38 0 00-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 004 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 008 18.13V22" />
                </svg>
              </a>
            </div>

            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
