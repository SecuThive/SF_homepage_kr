"use client";

import Link from "@/components/LocaleLink";
import SiteHeader from "@/components/SiteHeader";
import { useLang } from "@/lib/i18n";

const TIMELINE_KO = [
  {
    year: "2026",
    head: "통합 보안서비스 체계 완성",
    items: [
      "Codewise SBOM 소프트웨어 공급망 보안 파트너십 체결",
      "NSHC 보안컨설팅·CTI 공급 레퍼런스 40+ 달성",
      "대한민국 정보보호대상 '보안 통합서비스' 수상",
    ],
  },
  {
    year: "2023",
    head: "접근제어·인증 사업 확장",
    items: [
      "피앤피시큐어 DB/서버 접근제어 기술 파트너십 체결",
      "한국정보인증 MFA 구축 레퍼런스 확보",
      "누적 고객사 200개 돌파",
    ],
  },
  {
    year: "2020",
    head: "엣지 AI 전환",
    items: ["자체 엣지 AI 엔진 개발 완료", "CSAP 인증 완료", "연구개발 투자 비율 18% 달성"],
  },
  {
    year: "2018",
    head: "데이터 보안 포트폴리오 확장",
    items: ["블루문소프트 DRM 공급 시작", "에브리존 안티랜섬웨어 레퍼런스 확보"],
  },
  {
    year: "2015",
    head: "창업",
    items: ["SAFESQUARE 설립 · 보안 컨설팅 서비스 개시", "NSHC 기술 파트너십 체결"],
  },
];

const TIMELINE_EN = [
  {
    year: "2026",
    head: "Integrated Security Services Complete",
    items: [
      "Codewise SBOM Software Supply Chain Security partnership signed",
      "NSHC security consulting & CTI supply references exceed 40",
      "Korea Information Security Award — 'Integrated Security Services'",
    ],
  },
  {
    year: "2023",
    head: "Access Control & Identity Expansion",
    items: [
      "PnP Secure DB/Server Access Control technology partnership signed",
      "KICA MFA deployment references secured",
      "Cumulative clients exceed 200",
    ],
  },
  {
    year: "2020",
    head: "Edge AI Transition",
    items: ["In-house edge AI engine development complete", "CSAP certification complete", "R&D investment reaches 18% of revenue"],
  },
  {
    year: "2018",
    head: "Data Security Portfolio Expansion",
    items: ["Bluemoon Soft DRM supply started", "Everyzone anti-ransomware references secured"],
  },
  {
    year: "2015",
    head: "Founded",
    items: ["SAFESQUARE established · Security consulting services launched", "NSHC technology partnership signed"],
  },
];

const TIMELINE_JA = [
  {
    year: "2026",
    head: "統合セキュリティサービス体系の完成",
    items: [
      "Codewise SBOM ソフトウェアサプライチェーンセキュリティのパートナーシップ締結",
      "NSHC セキュリティコンサルティング・CTI 供給リファレンス40件以上を達成",
      "韓国情報保護大賞「セキュリティ統合サービス」受賞",
    ],
  },
  {
    year: "2023",
    head: "アクセス制御・認証事業の拡大",
    items: [
      "PnP Secure DB/サーバーアクセス制御の技術パートナーシップ締結",
      "KICA MFA 構築リファレンスを確保",
      "累計顧客200社を突破",
    ],
  },
  {
    year: "2020",
    head: "エッジAIへの転換",
    items: ["自社エッジAIエンジンの開発完了", "CSAP 認証取得", "研究開発投資比率18%を達成"],
  },
  {
    year: "2018",
    head: "データセキュリティポートフォリオの拡大",
    items: ["Bluemoon Soft DRM の供給開始", "Everyzone アンチランサムウェアのリファレンス確保"],
  },
  {
    year: "2015",
    head: "創業",
    items: ["SAFESQUARE 設立 · セキュリティコンサルティングサービス開始", "NSHC との技術パートナーシップ締結"],
  },
];

const LEADERS = [
  {
    role: "CEO · FOUNDER",
    name: "김 도현",
    nameEn: "Kim Do-hyun",
    nameJa: "キム・ドヒョン",
    bio: "前 국내 대형 보안사 기술본부장. 물리·논리 보안 융합 분야에서 20년간 연구·개발을 이끌었습니다.",
    bioEn: "Former Head of Technology at a major Korean security firm. 20 years leading R&D in physical-logical security convergence.",
    bioJa: "元・国内大手セキュリティ企業の技術本部長。物理・論理セキュリティ融合分野で20年間、研究開発を牽引してきました。",
  },
  {
    role: "CTO",
    name: "이 서연",
    nameEn: "Lee Seo-yeon",
    nameJa: "イ・ソヨン",
    bio: "컴퓨터비전 박사. 글로벌 반도체사 AI 가속기 연구 경험. 엣지 AI 엔진 아키텍처를 설계합니다.",
    bioEn: "PhD in Computer Vision. AI accelerator research at a global semiconductor company. Designs the edge AI engine architecture.",
    bioJa: "コンピュータビジョン博士。グローバル半導体企業でAIアクセラレータの研究経験。エッジAIエンジンのアーキテクチャを設計します。",
  },
  {
    role: "COO",
    name: "박 민재",
    nameEn: "Park Min-jae",
    nameJa: "パク・ミンジェ",
    bio: "공공·금융 대형 사업 운영 전문가. 현장 설치·운영의 표준을 세워 왔습니다.",
    bioEn: "Expert in large-scale public and financial sector operations. Has established standards for field installation and operations.",
    bioJa: "公共・金融の大規模事業運用の専門家。現場設置・運用の標準を確立してきました。",
  },
];

export default function AboutPage() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const TIMELINE = t(TIMELINE_KO, TIMELINE_EN, TIMELINE_JA);

  return (
    <>
      <SiteHeader activeId="about" />

      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="container">
          <div className="crumbs">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <span>ABOUT</span>
          </div>
          <h1>
            {t(<>경계를 설계하는<br /><em>사람들.</em></>, <>The people who<br /><em>design the boundary.</em></>, <>境界を設計する<br /><em>人々。</em></>)}
          </h1>
          <p className="lede">
            {t(
              "SAFESQUARE는 2015년 설립 이후 보안 기술의 본질을 탐구해 왔습니다. 우리는 기술이 공간을 지키는 방식이 더 단정하고, 더 투명해야 한다고 믿습니다.",
              "Since its founding in 2015, SAFESQUARE has explored the essence of security technology. We believe the way technology protects organizations must be cleaner and more transparent.",
              "SAFESQUAREは2015年の設立以来、セキュリティ技術の本質を探求してきました。私たちは、技術が組織を守る方法はより端正で、より透明であるべきだと信じています。",
            )}
          </p>
        </div>
      </section>

      <section className="about-full">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual" data-reveal>
              <div className="bigmark">
                <svg viewBox="0 0 100 100" fill="none">
                  <path d="M8 8 L84 10 L92 86 L12 92 Z" stroke="#0A0A0A" strokeWidth="1.2" />
                  <path d="M20 20 L72 22 L78 74 L22 80 Z" stroke="#0A0A0A" strokeWidth="0.8" opacity=".5" />
                  <circle cx="50" cy="50" r="4" fill="oklch(0.55 0.15 245)" />
                </svg>
              </div>
              <div className="label">SAFESQUARE · 2015 – 2026</div>
            </div>
            <div className="about-copy">
              <div data-reveal><div className="eyebrow">GREETING · 인사말</div></div>
              <h3 data-reveal data-reveal-delay="1">
                {t(
                  <>AI SOC를 넘어 AX 시대를 선도하는<br /><em>제로트러스트 파트너,</em> 세이프스퀘어.</>,
                  <>The Zero-Trust partner leading the AX era,<br />beyond <em>AI SOC.</em></>,
                  <>AI SOCを超えてAX時代を牽引する<br /><em>ゼロトラストパートナー、</em>SAFESQUARE。</>,
                )}
              </h3>
              <p data-reveal data-reveal-delay="2">
                {t(
                  <><b>급변하는 AI 보안 위협 —</b> 최근 인공지능을 활용한 자동화된 취약점 탐지와 정교해진 해킹 공격은 기업의 전통적인 방어 체계를 완전히 무력화하고 있습니다. 클라우드와 AI 대전환 시대의 보안은 &ldquo;아무도 신뢰하지 않고, 지속적으로 검증한다&rdquo;는 <b>제로트러스트(Zero-Trust)</b> 철학을 기반으로, 고도화된 차세대 <b>AI SOC(보안운영센터)</b> 체계로 전환되어야 합니다.</>,
                  <><b>A fast-shifting AI threat landscape —</b> AI-driven automated vulnerability discovery and increasingly sophisticated attacks are rendering traditional defenses obsolete. In the era of cloud and AI transformation, security must move to an advanced, next-generation <b>AI SOC</b> built on the <b>Zero-Trust</b> principle of &ldquo;never trust, always verify.&rdquo;</>,
                  <><b>急変するAIセキュリティ脅威 —</b> 近年、人工知能を活用した自動化された脆弱性探索と高度化したハッキング攻撃は、企業の従来型防御体系を完全に無力化しています。クラウドとAI大転換時代のセキュリティは、「誰も信頼せず、継続的に検証する」という<b>ゼロトラスト（Zero-Trust）</b>哲学を基盤に、高度化した次世代<b>AI SOC（セキュリティ運用センター）</b>体系へ転換されなければなりません。</>,
                )}
              </p>
              <p data-reveal data-reveal-delay="3">
                {t(
                  <>세이프스퀘어(SafeSquare)는 모회사인 <b>NSHC</b>의 글로벌 위협 인텔리전스 역량과 AI 플랫폼 개발 역량을 기반으로, 고객사에 반드시 필요한 솔루션을 제안하는 보안 회사입니다. 단순한 방어를 넘어 기업의 안전한 AX(AI 전환·AI Transformation)를 책임지는 <b>국내 유일의 AI 전문 통합 보안 파트너</b>로 함께 하겠습니다.</>,
                  <>SafeSquare is a security company built on the global threat-intelligence and AI-platform expertise of its parent company <b>NSHC</b>, proposing exactly the solutions each client needs. Beyond simple defense, we stand as <b>Korea&rsquo;s only AI-specialized integrated security partner</b>, accountable for your safe AX (AI Transformation).</>,
                  <>SAFESQUAREは、親会社である<b>NSHC</b>のグローバル脅威インテリジェンス力とAIプラットフォーム開発力を基盤に、お客様に本当に必要なソリューションを提案するセキュリティ企業です。単純な防御を超えて、企業の安全なAX（AI Transformation）に責任を持つ<b>国内唯一のAI専門統合セキュリティパートナー</b>として歩んでまいります。</>,
                )}
              </p>
            </div>
          </div>

          <div className="vision-head" data-reveal style={{ marginTop: 96 }}>
            <div className="eyebrow">VISION · 비전</div>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              {t(<>AI for Security<br />&amp; <em>Security for AI.</em></>, <>AI for Security<br />&amp; <em>Security for AI.</em></>, <>AI for Security<br />&amp; <em>Security for AI.</em></>)}
            </h2>
            <p className="section-lede" style={{ marginTop: 20 }} data-reveal data-reveal-delay="1">
              {t(
                "세이프스퀘어는 AI 시대를 안전하게 관통하기 위한 두 가지 핵심 비전을 제시합니다.",
                "SafeSquare presents two core visions for navigating the AI era safely.",
                "SAFESQUAREは、AI時代を安全に駆け抜けるための2つの核心ビジョンを提示します。",
              )}
            </p>
          </div>

          <div className="values" style={{ marginTop: 40 }}>
            <div className="value" data-reveal>
              <div className="k">01 · AI FOR SECURITY</div>
              <div className="t">{t("보안을 위한 AI", "AI for Security", "セキュリティのためのAI")}</div>
              <div className="d">{t("자체 AI 플랫폼 역량을 기반으로 미지의 위협을 선제적으로 예측·차단하여 완벽한 AI SOC 환경을 구현해 드립니다.", "Leveraging our own AI platform to predict and block unknown threats in advance, realizing a complete AI SOC environment.", "自社AIプラットフォームの力を基盤に未知の脅威を先制的に予測・遮断し、完璧なAI SOC環境を実現します。")}</div>
            </div>
            <div className="value" data-reveal data-reveal-delay="1">
              <div className="k">02 · SECURITY FOR AI</div>
              <div className="t">{t("AI를 위한 보안", "Security for AI", "AIのためのセキュリティ")}</div>
              <div className="d">{t("기업이 생성형 AI를 도입하고 AX를 추진하는 과정에서 발생할 수 있는 내부 핵심 자산과 데이터의 유출을 원천 통제합니다.", "Fundamentally controlling the leakage of core internal assets and data that can arise as enterprises adopt generative AI and pursue AX.", "企業が生成AIを導入しAXを推進する過程で発生しうる、内部の重要資産とデータの漏洩を根本から統制します。")}</div>
            </div>
            <div className="value" data-reveal data-reveal-delay="2">
              <div className="k">03 · AX CONSULTING</div>
              <div className="t">{t("맞춤형 AX 컨설팅", "Tailored AX Consulting", "オーダーメイドAXコンサルティング")}</div>
              <div className="d">{t("보안 우려 없이 비즈니스 혁신(AX)에만 집중할 수 있도록 맞춤형 AX 컨설팅까지 원스톱으로 지원합니다.", "One-stop tailored AX consulting so you can focus entirely on business innovation, free of security concerns.", "セキュリティの懸念なくビジネス革新（AX）だけに集中できるよう、オーダーメイドのAXコンサルティングまでワンストップで支援します。")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 회사소개 HISTORY · LEADERSHIP 섹션 주석 처리 (요청)
      <section className="history">
        <div className="container">
          <div className="sec-heading">
            <div className="inner">
              <div data-reveal>
                <div className="eyebrow">HISTORY</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>
                  {t(<>11년의 여정,<br />240여 개의 현장.</>, <>11 years of journey,<br />240+ field deployments.</>, <>11年の歩み、<br />240以上の現場。</>)}
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                {t(
                  "한 대의 카메라에서 시작해 도시 규모의 통합관제까지. SAFESQUARE가 걸어온 길입니다.",
                  "From a single camera to city-scale unified monitoring — the path SAFESQUARE has walked.",
                  "1台のカメラから都市規模の統合管制まで。SAFESQUAREが歩んできた道のりです。",
                )}
              </p>
            </div>
          </div>

          <div className="timeline">
            {TIMELINE.map((item) => (
              <div key={item.year} className="tl-row" data-reveal>
                <div className="yr">{item.year}</div>
                <h4>{item.head}</h4>
                <ul>{item.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="leadership">
        <div className="container">
          <div className="sec-heading">
            <div className="inner">
              <div data-reveal>
                <div className="eyebrow">LEADERSHIP</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>
                  {t(<>사람이<br />기술을 만듭니다.</>, <>People<br />make the technology.</>, <>人が<br />技術をつくる。</>)}
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                {t(
                  "보안 산업에서 평균 17년을 경험한 리더들이 SAFESQUARE를 이끕니다.",
                  "SAFESQUARE is led by leaders with an average of 17 years in the security industry.",
                  "セキュリティ業界で平均17年の経験を持つリーダーたちがSAFESQUAREを牽引します。",
                )}
              </p>
            </div>
          </div>

          <div className="leaders">
            {LEADERS.map((l, i) => (
              <div key={l.name} className="leader" data-reveal data-reveal-delay={i}>
                <div className="portrait"><span className="tag">PORTRAIT</span></div>
                <div className="role">{l.role}</div>
                <h5>{t(l.name, l.nameEn, l.nameJa)}</h5>
                <p>{t(l.bio, l.bioEn, l.bioJa)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </>
  );
}
