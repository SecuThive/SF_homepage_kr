"use client";

import Link from "@/components/LocaleLink";
import SiteHeader from "@/components/SiteHeader";
import { useLang } from "@/lib/i18n";

export default function TechnologyPage() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const isEn = lang === "en";
  const isJa = lang === "ja";

  const PROCESS_STEPS = [
    {
      num: "01",
      phase: "ASSESSMENT",
      title: t("현황 진단 · 요구사항 분석", "Security Assessment & Requirements Analysis", "現状診断 · 要件分析"),
      desc: t(
        "고객사의 보안 아키텍처, 규제 환경, 위협 노출 현황을 분석합니다. 단순 체크리스트가 아닌, 실제 공격 시나리오 기반의 갭 분석을 통해 우선순위를 도출합니다.",
        "We analyze the client's security architecture, regulatory environment, and threat exposure. Gap analysis based on real attack scenarios — not checklists — to surface priorities.",
        "お客様のセキュリティアーキテクチャ、規制環境、脅威への露出状況を分析します。単なるチェックリストではなく、実際の攻撃シナリオに基づくギャップ分析を通じて優先順位を導き出します。",
      ),
      duration: t("1–2주", "1–2 weeks", "1〜2週間"),
      output: t("보안 현황 보고서 · 솔루션 후보 매핑", "Security assessment report · Solution candidate mapping", "セキュリティ現状レポート · ソリューション候補マッピング"),
    },
    {
      num: "02",
      phase: "DESIGN",
      title: t("솔루션 설계 · 아키텍처 수립", "Solution Design & Architecture", "ソリューション設計 · アーキテクチャ策定"),
      desc: t(
        "5개 파트너 포트폴리오를 기반으로 고객 환경에 최적화된 보안 아키텍처를 설계합니다. 벤더 간 연동 구성, 정책 표준화, 라이선스 최적화까지 한 번에 설계합니다.",
        "Design a security architecture optimized for the client's environment using our 5-partner portfolio. Inter-vendor integration, policy standardization, and license optimization — all in one design.",
        "5社のパートナーポートフォリオを基盤に、お客様の環境に最適化されたセキュリティアーキテクチャを設計します。ベンダー間連携構成、ポリシー標準化、ライセンス最適化まで一度に設計します。",
      ),
      duration: t("1–3주", "1–3 weeks", "1〜3週間"),
      output: t("아키텍처 문서 · 도입 로드맵 · 견적", "Architecture document · Deployment roadmap · Quote", "アーキテクチャ文書 · 導入ロードマップ · お見積り"),
    },
    {
      num: "03",
      phase: "PoC",
      title: t("실환경 PoC 검증", "Real-Environment PoC Validation", "実環境PoC検証"),
      desc: t(
        "고객 인프라와 동일한 환경에서 선정 솔루션을 테스트합니다. 성능·안정성·호환성을 실측 데이터로 검증하며, 이 단계를 통과한 솔루션만 구축에 진입합니다.",
        "Test selected solutions in an environment mirroring the client's infrastructure. Performance, stability, and compatibility validated with real data. Only solutions that pass this stage proceed to deployment.",
        "お客様のインフラと同一の環境で選定したソリューションをテストします。性能・安定性・互換性を実測データで検証し、この段階を通過したソリューションのみが構築に進みます。",
      ),
      duration: t("2–4주", "2–4 weeks", "2〜4週間"),
      output: t("PoC 결과 보고서 · 최종 솔루션 확정", "PoC results report · Final solution confirmation", "PoC結果レポート · 最終ソリューション確定"),
    },
    {
      num: "04",
      phase: "DEPLOYMENT",
      title: t("구축 · 통합 · 이관", "Deployment, Integration & Migration", "構築 · 統合 · 移行"),
      desc: t(
        "확정된 솔루션을 단일 계약으로 구축합니다. 복수 벤더 제품이 서로 간섭 없이 동작하도록 연계 구성과 정책을 표준화하며, 기존 시스템 이관도 책임집니다.",
        "Deploy the confirmed solution under a single contract. We standardize integration configurations and policies so multi-vendor products operate without interference, and take responsibility for migrating existing systems.",
        "確定したソリューションを単一契約で構築します。複数ベンダーの製品が互いに干渉せず動作するよう連携構成とポリシーを標準化し、既存システムの移行も責任を持って対応します。",
      ),
      duration: t("4–12주", "4–12 weeks", "4〜12週間"),
      output: t("운영 시스템 · 관리자 교육 · 운영 매뉴얼", "Live system · Admin training · Operations manual", "稼働システム · 管理者教育 · 運用マニュアル"),
    },
    {
      num: "05",
      phase: "OPERATION",
      title: t("운영 지원 · 유지보수", "Operations Support & Maintenance", "運用支援 · 保守"),
      desc: t(
        "구축 후에도 SAFESQUARE가 단일 창구로 기술 지원합니다. 24/7 모니터링, 보안 업데이트, 연 2회 정기 점검, 사고 대응까지 포함한 통합 유지보수를 제공합니다.",
        "SAFESQUARE remains your single point of contact for technical support post-deployment. Integrated maintenance including 24/7 monitoring, security updates, semi-annual reviews, and incident response.",
        "構築後もSAFESQUAREが単一窓口で技術支援します。24/7モニタリング、セキュリティアップデート、年2回の定期点検、インシデント対応まで含む統合保守を提供します。",
      ),
      duration: t("상시", "Ongoing", "常時"),
      output: t("24/7 기술지원 · 정기 보안점검 · 업데이트", "24/7 technical support · Regular security reviews · Updates", "24/7 技術支援 · 定期セキュリティ点検 · アップデート"),
    },
  ];

  const SOLUTIONS = [
    {
      num: "01", mark: "N", name: t("NSHC", "NSHC", "NSHC"),
      cat: "SECURITY SERVICES",
      role: t("진단 · 위협 인텔리전스", "Assessment · Threat Intelligence", "診断 · 脅威インテリジェンス"),
      desc: t(
        "보안컨설팅, 모의해킹(Pentest), CTI, 다크웹 모니터링을 통해 공격자 시각으로 조직의 보안 취약점을 사전에 발견합니다. 도입 프로세스 1단계(진단)의 핵심 파트너입니다.",
        "Security consulting, pentesting, CTI, and dark web monitoring to proactively identify vulnerabilities from an attacker's perspective. The key partner for Stage 1 (Assessment) of the deployment process.",
        "セキュリティコンサルティング、ペネトレーションテスト（Pentest）、CTI、ダークウェブモニタリングを通じて、攻撃者の視点から組織のセキュリティ脆弱性を事前に発見します。導入プロセス第1段階（診断）の中核パートナーです。",
      ),
      href: "/solutions/nshc",
    },
    {
      num: "02", mark: "K", name: t("한국정보인증 (KICA)", "KICA", "韓国情報認証 (KICA)"),
      cat: "IDENTITY · MFA",
      role: t("신원 검증 · 접근 인증", "Identity Verification · Access Auth", "本人確認 · アクセス認証"),
      desc: t(
        "다중요소인증(MFA), FIDO2, PKI 기반 인증 인프라를 구성합니다. 사용자 신원 검증을 강화하여 계정 탈취 기반 침해를 원천 차단합니다.",
        "Builds MFA, FIDO2, and PKI-based authentication infrastructure. Strengthens user identity verification to block credential-based breaches at the source.",
        "多要素認証（MFA）、FIDO2、PKIベースの認証インフラを構成します。ユーザーの本人確認を強化し、アカウント乗っ取りによる侵害を根本から遮断します。",
      ),
      href: "/ssq-co/mfa",
    },
    {
      num: "03", mark: "P", name: t("피앤피시큐어", "PnP Secure", "PnP Secure"),
      cat: "ACCESS CONTROL",
      role: t("DB · 서버 접근제어", "DB & Server Access Control", "DB · サーバーアクセス制御"),
      desc: t(
        "DB 접근제어, 서버 접근제어, 지속 인증(Continuous Auth)으로 내부자 위협과 권한 남용을 통제합니다. 금융·공공 컴플라이언스 요건을 충족하는 검증된 솔루션입니다.",
        "DB access control, server access control, and Continuous Auth to manage insider threats and privilege abuse. A proven solution meeting financial and public-sector compliance requirements.",
        "DBアクセス制御、サーバーアクセス制御、継続認証（Continuous Auth）で内部脅威と権限の濫用を統制します。金融・公共のコンプライアンス要件を満たす実績あるソリューションです。",
      ),
      href: "/ssq-co/dbsafer",
    },
    {
      num: "04", mark: "E", name: t("에브리존", "Everyzone", "Everyzone"),
      cat: "ENDPOINT",
      role: t("엔드포인트 보호 · EDR", "Endpoint Protection · EDR", "エンドポイント保護 · EDR"),
      desc: t(
        "안티랜섬웨어, EDR, 행위 기반 탐지로 엔드포인트를 보호합니다. TrustEyes 엔진은 알려지지 않은 신·변종 랜섬웨어에도 대응하는 행위 기반 차단 기술을 탑재합니다.",
        "Anti-ransomware, EDR, and behavior-based detection for endpoint protection. The TrustEyes engine uses behavior-based blocking to defend against new and unknown ransomware variants.",
        "アンチランサムウェア、EDR、行動ベースの検知でエンドポイントを保護します。TrustEyesエンジンは、未知の新種・亜種ランサムウェアにも対応する行動ベースの遮断技術を搭載しています。",
      ),
      href: "/ssq-co/edr",
    },
    {
      num: "05", mark: "B", name: t("블루문소프트", "Bluemoon Soft", "Bluemoon Soft"),
      cat: "DATA SECURITY",
      role: t("문서 보안 · DRM", "Document Security · DRM", "文書セキュリティ · DRM"),
      desc: t(
        "문서 보안, DRM, 암호화로 데이터 유출을 방지합니다. 내부 문서의 생성부터 유통·폐기까지 전 과정을 통제하며, 외부 공유 환경에서도 권한 관리가 유지됩니다.",
        "Prevent data leakage with document security, DRM, and encryption. Control the full lifecycle of internal documents — from creation to distribution and disposal — with permissions maintained even in external sharing environments.",
        "文書セキュリティ、DRM、暗号化でデータ漏洩を防止します。社内文書の作成から流通・廃棄まで全工程を統制し、外部共有環境でも権限管理が維持されます。",
      ),
      href: "/ssq-co/drm",
    },
  ];

  const STATS: [string, string][] = [
    [t("단일 계약", "Single Contract", "単一契約"), t("5개 파트너 전체를 하나의 계약으로", "All 5 partners under one contract", "5社のパートナーすべてをひとつの契約で")],
    ["24/7", t("구축 후 상시 기술 지원", "Technical support after deployment", "構築後の常時技術支援")],
    [t("PoC 필수", "PoC Required", "PoC必須"), t("검증 없이 구축에 진입하지 않습니다", "We never proceed without validation", "検証なしに構築へは進みません")],
    [t("11년+", "11 yrs+", "11年+"), t("보안 전문 운영 경험", "Security operations experience", "セキュリティ専門の運用経験")],
  ];

  return (
    <>
      <SiteHeader activeId="services" />

      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="container">
          <div className="crumbs">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <span>PROCESS</span>
          </div>
          <h1>
            {t(
              <>{`진단부터 운영까지,`}<br /><em>단일 계약</em>으로.</>,
              <>From assessment to operations,<br />under <em>one contract</em>.</>,
              <>診断から運用まで、<br /><em>単一契約</em>で。</>
            )}
          </h1>
          <p className="lede">
            {t(
              "SAFESQUARE는 5개 보안 파트너의 공식 총판으로, 복수 솔루션 도입의 전 과정을 단일 계약으로 책임집니다. 공급사가 아닌 구축·운영 파트너로서 함께합니다.",
              "SAFESQUARE is the official distributor for 5 security partners, taking full responsibility for the entire multi-solution deployment process under a single contract — not as a vendor, but as a deployment and operations partner.",
              "SAFESQUAREは5社のセキュリティパートナーの公式総代理店として、複数ソリューション導入の全工程を単一契約で責任を持って対応します。供給元ではなく、構築・運用パートナーとして伴走します。",
            )}
          </p>
        </div>
      </section>

      <div className="proc-stats-strip">
        {STATS.map(([v, l]) => (
          <div key={v} className="proc-stat">
            <div className="proc-stat-val">{v}</div>
            <div className="proc-stat-lbl">{l}</div>
          </div>
        ))}
      </div>

      <section className="tech-main">
        <div className="container">
          <div className="sec-heading" style={{ paddingTop: 96 }}>
            <div className="inner">
              <div data-reveal>
                <div className="eyebrow">IMPLEMENTATION PROCESS</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>
                  {t(
                    <>{`5단계`}<br /><em>도입 프로세스.</em></>,
                    <>5-Stage<br /><em>Deployment Process.</em></>,
                    <>5ステップの<br /><em>導入プロセス。</em></>
                  )}
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                {t(
                  "요구사항 분석부터 구축, 운영 지원까지 — SAFESQUARE가 각 단계를 직접 책임지며 복수 벤더 환경에서 발생하는 사각지대를 제거합니다.",
                  "From requirements analysis to deployment and operations support — SAFESQUARE takes direct responsibility at every stage, eliminating blind spots in multi-vendor environments.",
                  "要件分析から構築、運用支援まで — SAFESQUAREが各段階を直接責任を持って担い、複数ベンダー環境で生じる死角を取り除きます。",
                )}
              </p>
            </div>
          </div>

          <div className="proc-steps">
            {PROCESS_STEPS.map((s) => (
              <div key={s.num} className="proc-step" data-reveal>
                <div className="proc-step-num">{s.num}</div>
                <div className="proc-step-body">
                  <div className="proc-step-phase">{s.phase}</div>
                  <h4 className="proc-step-title">{s.title}</h4>
                  <p className="proc-step-desc">{s.desc}</p>
                  <div className="proc-step-meta">
                    <span><span className="proc-meta-k">{isJa ? "期間" : isEn ? "Duration" : "기간"}</span>{s.duration}</span>
                    <span><span className="proc-meta-k">{isJa ? "成果物" : isEn ? "Output" : "산출물"}</span>{s.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certs" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="sec-heading">
            <div className="inner">
              <div data-reveal>
                <div className="eyebrow">TECHNOLOGY PORTFOLIO</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>
                  {t(
                    <>{`5개 파트너,`}<br /><em>통합 보안 체계.</em></>,
                    <>5 Partners,<br /><em>Unified Security.</em></>,
                    <>5社のパートナー、<br /><em>統合セキュリティ体系。</em></>
                  )}
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                {t(
                  "각 파트너는 보안 레이어의 서로 다른 영역을 담당합니다. SAFESQUARE는 이 5개를 단일 아키텍처로 연결합니다.",
                  "Each partner covers a different layer of security. SAFESQUARE connects all 5 into a single unified architecture.",
                  "各パートナーはセキュリティレイヤーの異なる領域を担います。SAFESQUAREはこの5社を単一のアーキテクチャに連結します。",
                )}
              </p>
            </div>
          </div>

          <div className="tech-list">
            {SOLUTIONS.map((s) => (
              <Link key={s.num} href={s.href} className="proc-sol-row" data-reveal>
                <div className="proc-sol-mark">{s.mark}</div>
                <div className="proc-sol-num">{s.num}</div>
                <div className="proc-sol-main">
                  <div className="proc-sol-cat">{s.cat}</div>
                  <div className="proc-sol-name">{s.name}</div>
                  <div className="proc-sol-role">{s.role}</div>
                </div>
                <p className="proc-sol-desc">{s.desc}</p>
                <div className="proc-sol-arr">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div data-reveal>
              <div className="eyebrow" style={{ color: "rgba(255,255,255,.45)" }}>NEXT STEP</div>
              <h2 className="section-title" style={{ marginTop: 24, color: "#fff" }}>
                {t("도입 문의 · PoC 신청", "Inquiry & PoC Request", "導入のお問い合わせ · PoC申込")}
              </h2>
              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.6)", maxWidth: "44ch" }}>
                {t(
                  "현황 진단은 무료로 진행됩니다. 담당자가 48시간 이내 연락드립니다.",
                  "The initial assessment is complimentary. Our team will respond within 48 hours.",
                  "現状診断は無料で実施します。担当者が48時間以内にご連絡します。",
                )}
              </p>
            </div>
            <div data-reveal data-reveal-delay="1">
              <Link href="/contact" className="cta-btn">
                {t("문의하기", "Contact Us", "お問い合わせ")}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
