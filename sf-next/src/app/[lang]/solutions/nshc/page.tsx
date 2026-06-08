"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, FlowSteps, RelatedBlock, SolutionCrumbs, SpecTable, SolTabsNav, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "consulting" | "pentest" | "vuln" | "cti" | "asm" | "darkweb";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview",   label: t("개요",           "Overview", "概要") },
    { id: "consulting", label: t("보안컨설팅",      "Security Consulting", "セキュリティコンサルティング") },
    { id: "pentest",    label: "Pentest" },
    { id: "vuln",       label: t("취약점 진단",     "Vulnerability Assessment", "脆弱性診断") },
    { id: "cti",        label: t("위협 인텔리전스", "CTI", "脅威インテリジェンス") },
    { id: "asm",        label: t("외부공격표면관리", "ASM", "外部攻撃表面管理") },
    { id: "darkweb",    label: t("다크웹 모니터링", "Dark Web Monitoring", "ダークウェブ監視") },
  ];

  return (
    <>
      <SiteHeader activeId="solutions" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="NSHC" />
          <div className="layout">
            <div>
              <div className="partner-meta">
                <span className="chip solid">PORTFOLIO · 01</span>
                <span className="chip">TECHNOLOGY PARTNER</span>
                <span className="chip accent">NSHC · SECURITY SERVICES</span>
              </div>
              <h1>
                {t(<>공격자의 <em>시각</em>으로<br />조직을 진단합니다.</>, <>Diagnose your organization<br />from the <em>attacker&apos;s view</em>.</>, <>攻撃者の<em>視点</em>で<br />組織を診断します。</>)}
              </h1>
              <p className="lede">
                {t(
                  <>보안컨설팅, 모의해킹, 취약점 진단, 위협 인텔리전스(CTI), 외부공격표면관리(ASM), 다크웹 모니터링을 하나의 서비스로. <b>실제 공격 시나리오</b>로 기업 보안의 빈틈을 찾고, 지속적으로 개선합니다.</>,
                  <>Security consulting, pentesting, vulnerability assessment, CTI, ASM, and dark web monitoring — as one service. Find and continuously improve security gaps using <b>real attack scenarios</b>.</>,
                  <>セキュリティコンサルティング、ペネトレーションテスト、脆弱性診断、脅威インテリジェンス(CTI)、外部攻撃表面管理(ASM)、ダークウェブ監視を一つのサービスで。<b>実際の攻撃シナリオ</b>で企業セキュリティの隙を見つけ、継続的に改善します。</>,
                )}
              </p>
            </div>
            <div className="sol-visual nshc-visual">
              <span className="corner tl">LIVE PENTEST · ENGAGEMENT #2026-048</span>
              <span className="status"><span className="sd"></span>SCANNING</span>
              <div className="nshc-grid"></div>
              <div className="reticle"><div className="inner"></div><div className="core"></div></div>
              <div className="nshc-term">
                <div className="ln"><span className="p">$</span><span className="c">nmap -sV -T4 target.corp</span></div>
                <div className="ln"><span className="o">[+]</span><span className="m">443/tcp open  https  nginx 1.21.3</span></div>
                <div className="ln"><span className="o">[+]</span><span className="m">22/tcp  open  ssh    OpenSSH 7.4</span></div>
                <div className="ln"><span className="p">$</span><span className="c">nuclei -t cves/ -u https://target</span></div>
                <div className="ln"><span className="k">[!]</span><span className="m">CVE-2024-21412 — SmartScreen Bypass</span></div>
                <div className="ln"><span className="k">[!]</span><span className="m">Exposed .git/config in /assets/_</span></div>
                <div className="ln"><span className="p">$</span><span className="c">exploit/multi/http/cve-2024-_</span><span className="cursor"></span></div>
              </div>
              <span className="tag">RECON · EXPLOIT · REPORT · RE-TEST</span>
            </div>
          </div>
          <div className="sol-stats">
            <div><div className="n">100<sup>+</sup></div><div className="l">CVE in 2 Years</div></div>
            <div><div className="n">288<sup>+</sup></div><div className="l">0-Day in 1 Year</div></div>
            <div><div className="n">12<sup>+</sup></div><div className="l">Global CTF Wins (5Y)</div></div>
            <div><div className="n">7<sup>days</sup></div><div className="l">ASM Rescan Cycle</div></div>
          </div>
        </div>
      </section>

      <SolTabsNav tabs={tabs} active={activeTab} onChange={(id) => setActiveTab(id as TabId)} />

      {activeTab === "overview" && (
        <>
          <section className="features">
            <div className="container">
              <div className="sec-heading"><div className="inner">
                <div data-reveal>
                  <div className="eyebrow">SERVICE PORTFOLIO</div>
                  <h2 className="section-title" style={{ marginTop: 28 }}>
                    {t(<>6개의 축으로<br />조직의 보안을 <em>검증</em>합니다.</>, <>6 pillars to <em>validate</em><br />your organization&apos;s security.</>, <>6つの軸で<br />組織のセキュリティを<em>検証</em>します。</>)}
                  </h2>
                </div>
                <p className="section-lede" data-reveal data-reveal-delay="1">
                  {t(<>공격 시뮬레이션부터 외부 노출 관리까지. 한 번의 스냅샷이 아닌 <b>지속적인 보안 프로그램</b>으로 운영합니다.</>, <>From attack simulation to external exposure management — operated as a <b>continuous security program</b>, not a one-time snapshot.</>, <>攻撃シミュレーションから外部露出管理まで。一度きりのスナップショットではなく<b>継続的なセキュリティプログラム</b>として運用します。</>)}
                </p>
              </div></div>
              <FeaturesGrid items={[
                { num: "SERVICE / 01", icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 4v16"/></svg>, title: t("보안컨설팅", "Security Consulting", "セキュリティコンサルティング"), body: t("ISMS-P · ISO 27001 · NIST CSF 기준의 갭 분석과 로드맵 수립.", "Gap analysis and roadmap based on ISMS-P · ISO 27001 · NIST CSF.", "ISMS-P · ISO 27001 · NIST CSF基準のギャップ分析とロードマップ策定。"), tags: ["ISMS-P", "ISO 27001", "NIST CSF"] },
                { num: "SERVICE / 02", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20"/></svg>, title: t("모의해킹 (Pentest)", "Penetration Testing", "ペネトレーションテスト (Pentest)"), body: t("블랙/그레이/화이트 박스 시나리오, 레드팀 훈련.", "Black/grey/white-box scenarios and red team exercises.", "ブラック/グレー/ホワイトボックスシナリオ、レッドチーム演習。"), tags: ["Red Team", "APT Simul.", "Phishing"] },
                { num: "SERVICE / 03", icon: <svg viewBox="0 0 24 24"><path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/></svg>, title: t("취약점 진단", "Vulnerability Assessment", "脆弱性診断"), body: t("인프라·웹·모바일·클라우드·소스코드까지 전 계층.", "Full-stack: infra, web, mobile, cloud, and source code.", "インフラ・Web・モバイル・クラウド・ソースコードまで全レイヤー。"), tags: ["Infra", "Web/API", "Mobile", "Cloud"] },
                { num: "SERVICE / 04", icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z"/><path d="M9 12l2 2 4-4"/></svg>, title: t("위협 인텔리전스 (CTI)", "Cyber Threat Intelligence", "脅威インテリジェンス (CTI)"), body: t("산업·지역 맞춤 위협 피드, IoC 구독, 악성코드 분석 리포트.", "Industry- and region-tailored threat feeds, IoC subscriptions, malware analysis reports.", "業界・地域に合わせた脅威フィード、IoC購読、マルウェア分析レポート。"), tags: ["IoC Feed", "Malware", "SIEM"] },
                { num: "SERVICE / 05", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>, title: t("외부공격표면관리 (ASM)", "Attack Surface Management", "外部攻撃表面管理 (ASM)"), body: t("자산·도메인·인증서·코드 유출을 외부 관점에서 지속 스캔.", "Continuous external scan of assets, domains, certs, and code leaks.", "資産・ドメイン・証明書・コード流出を外部視点で継続スキャン。"), tags: ["Asset Disc.", "Cert Watch", "Shadow IT"] },
                { num: "SERVICE / 06", icon: <svg viewBox="0 0 24 24"><path d="M4 7l8 5 8-5M4 7v10l8 5 8-5V7"/></svg>, title: t("다크웹 모니터링", "Dark Web Monitoring", "ダークウェブ監視"), body: t("임직원 계정·기밀·내부문서 유출을 다크웹·텔레그램·포럼에서 실시간 탐지.", "Real-time detection across dark web, Telegram, and forums.", "役職員アカウント・機密・社内文書の流出をダークウェブ・テレグラム・フォーラムでリアルタイム検知。"), tags: ["Darkweb", "Telegram", "Credential"] },
              ]} />
            </div>
          </section>
          {/* <section className="engagement">
            <div className="container">
              <div className="sec-heading"><div className="inner">
                <div data-reveal>
                  <div className="eyebrow">ENGAGEMENT FLOW</div>
                  <h2 className="section-title" style={{ marginTop: 28 }}>{t(<>일회성이 아닌,<br /><em>지속적인</em> 보안 프로그램.</>, <>Not once-off —<br />a <em>continuous</em> security program.</>, <>一度きりではなく、<br /><em>継続的な</em>セキュリティプログラム。</>)}</h2>
                </div>
                <p className="section-lede" data-reveal data-reveal-delay="1">{t("킥오프부터 재진단까지 5단계 사이클로 운영합니다.", "Operated in a 5-stage cycle from kickoff to re-assessment.", "キックオフから再診断まで5段階サイクルで運用します。")}</p>
              </div></div>
              <FlowSteps items={[
                { step: "01", title: "Scoping",     body: t("자산·범위·시나리오 정의, RoE 수립.", "Define assets, scope, and scenarios. Establish RoE.", "資産・範囲・シナリオ定義、RoE策定。"),                              when: "Week 1" },
                { step: "02", title: "Recon / ASM", body: t("외부 노출면을 먼저 스캔해 공격 표면을 확정합니다.", "Scan external exposure first to confirm the real attack surface.", "外部露出面を先にスキャンし攻撃表面を確定します。"),  when: "Week 1–2" },
                { step: "03", title: "Exploit",     body: t("APT·내부자 시나리오로 실제 침투 시도.", "Real penetration attempts using APT and insider scenarios.", "APT・内部者シナリオで実際の侵入を試行。"),               when: "Week 2–4" },
                { step: "04", title: "Report",      body: t("CVSS · MITRE 매핑, 경영진/실무 두 버전 리포트.", "CVSS · MITRE mapping. Executive and technical report versions.", "CVSS · MITREマッピング、経営層/実務の2バージョンレポート。"),   when: "Week 4–5" },
                { step: "05", title: "Re-test",     body: t("조치 후 재진단으로 개선 효과를 정량화합니다.", "Re-assess after remediation to quantify improvement.", "対応後の再診断で改善効果を定量化します。"),               when: "Week 6+" },
              ]} />
            </div>
          </section> */}
          {/* <section className="specs">
            <div className="container">
              <div className="sec-heading"><div className="inner"><div data-reveal>
                <div className="eyebrow">SERVICE SPEC</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>{t("계약 전에 알아야 할 것.", "What to know before signing.", "契約前に知っておくべきこと。")}</h2>
              </div></div></div>
              <SpecTable rows={[
                [t("계약 형태", "Contract Type", "契約形態"), t(<><b>프로젝트 단위</b> / <b>연간 구독</b> (CTI·ASM·Darkweb) / <b>레드팀 리테이너</b></>, <><b>Per-project</b> / <b>Annual subscription</b> (CTI·ASM·Darkweb) / <b>Red team retainer</b></>, <><b>プロジェクト単位</b> / <b>年間購読</b> (CTI·ASM·Darkweb) / <b>レッドチームリテイナー</b></>)],
                [t("표준 방법론", "Methodology", "標準方法論"), "OWASP WSTG · PTES · MITRE ATT&CK · NIST SP 800-115"],
                [t("진단 대상", "Scope", "診断対象"), t("인프라 · 웹/API · 모바일(iOS·Android) · 클라우드(AWS·Azure·GCP) · 소스코드 · IoT/OT", "Infra · Web/API · Mobile (iOS·Android) · Cloud (AWS·Azure·GCP) · Source code · IoT/OT", "インフラ · Web/API · モバイル(iOS·Android) · クラウド(AWS·Azure·GCP) · ソースコード · IoT/OT")],
                [t("리포팅", "Reporting", "レポーティング"), t("경영진 요약 + 기술 상세 (한/영) · CVSS 3.1 · 재현 PoC · 조치 가이드", "Executive summary + technical detail (KO/EN) · CVSS 3.1 · Reproducible PoC · Remediation guide", "経営層サマリー + 技術詳細 (韓/英) · CVSS 3.1 · 再現PoC · 対応ガイド")],
                [t("컴플라이언스", "Compliance", "コンプライアンス"), "ISMS-P · " + t("전자금융감독규정", "e-Finance Supervision", "電子金融監督規定") + " · " + t("개인정보보호법", "Privacy Act", "個人情報保護法") + " · PCI-DSS · HIPAA"],
                [t("SAFESQUARE 지원", "SAFESQUARE Support", "SAFESQUARE サポート"), t("견적·계약 원창구 · 국내 PM 상주 · 분기 정기 미팅", "Single point for quote & contract · On-site Korean PM · Quarterly reviews", "見積・契約の窓口一本化 · 国内PM常駐 · 四半期定例ミーティング")],
              ]} />
            </div>
          </section> */}
        </>
      )}

      {activeTab === "consulting" && (
        <SvcPanel
          eyebrow="SERVICE / 01 · SECURITY CONSULTING"
          title={t(<>현황 진단부터 이행 지원까지,<br /><em>규제 기반</em> 보안 체계 수립.</>, <>From gap analysis to implementation —<br /><em>compliance-driven</em> security governance.</>, <>現状診断から導入支援まで、<br /><em>規制ベース</em>のセキュリティ体系を構築。</>)}
          lede={t("기업의 현행 보안 수준을 ISMS-P, ISO 27001, NIST CSF 프레임워크로 정밀 측정하고, 실현 가능한 개선 로드맵을 수립합니다. 규제 대응에 그치지 않고 비즈니스 리스크를 이사회가 이해할 수 있는 언어로 정리하는 거버넌스 체계까지 구축합니다.", "We precisely measure your security posture against ISMS-P, ISO 27001, and NIST CSF, then build an achievable roadmap — going beyond compliance to governance that translates risk into board-level language.", "企業の現行セキュリティ水準をISMS-P、ISO 27001、NIST CSFフレームワークで精密に測定し、実現可能な改善ロードマップを策定します。規制対応にとどまらず、ビジネスリスクを取締役会が理解できる言語で整理するガバナンス体系まで構築します。")}
          points={[
            { title: t("보안 현황 진단", "Security Posture Assessment", "セキュリティ現状診断"), body: t("인터뷰·문서 검토·기술 점검을 통한 현행 수준 측정. ISMS-P·ISO 27001·NIST CSF 기준 갭 분석 보고서 제공.", "Measure current posture via interviews, document review, and technical checks. Gap analysis report against ISMS-P, ISO 27001, and NIST CSF.", "インタビュー・文書レビュー・技術点検による現行水準の測定。ISMS-P · ISO 27001 · NIST CSF基準のギャップ分析報告書を提供。") },
            { title: t("로드맵 수립", "Roadmap & Prioritization", "ロードマップ策定"), body: t("단기(6개월)·중기(1년)·장기(3년) 우선순위 기반 이행 계획. 예산·인력·기술 제약을 반영한 실행 가능한 플랜.", "Phased roadmap — short (6 months), mid (1 year), long (3 years) — with priority ranking. Realistic plans accounting for budget and headcount constraints.", "短期(6ヶ月)・中期(1年)・長期(3年)の優先順位に基づく実行計画。予算・人員・技術的制約を反映した実行可能なプラン。") },
            { title: t("거버넌스 체계 구축", "Governance Framework", "ガバナンス体系の構築"), body: t("RACI 매트릭스, 보안 정책·지침 문서화, 이사회 보고용 대시보드 구성. 보안 위원회 운영 지원.", "RACI matrix, security policy documentation, board-level reporting dashboards. Support for security committee operations.", "RACIマトリクス、セキュリティポリシー・指針の文書化、取締役会報告用ダッシュボードの構成。セキュリティ委員会の運営支援。") },
            { title: t("컴플라이언스 대응", "Compliance Support", "コンプライアンス対応"), body: t("ISMS-P 인증, 전자금융감독규정, 개인정보보호법, PCI-DSS 요건 충족을 위한 전 과정 지원. 인증 심사 대응 포함.", "End-to-end support for ISMS-P certification, e-Finance Supervision Regulation, Privacy Act, and PCI-DSS. Includes audit preparation.", "ISMS-P認証、電子金融監督規定、個人情報保護法、PCI-DSS要件の充足に向けた全工程支援。認証審査対応を含む。") },
          ]}
          imgSrc="/assets/nshc/consulting.png" imgAlt="보안컨설팅 서비스 구조도"
        />
      )}
      {activeTab === "pentest" && (
        <SvcPanel
          eyebrow="SERVICE / 02 · PENETRATION TESTING"
          title={t(<>실제 APT 기법으로<br />방어 체계를 <em>검증</em>합니다.</>, <>Validate your defenses<br />with <em>real APT techniques</em>.</>, <>実際のAPT手法で<br />防御体系を<em>検証</em>します。</>)}
          lede={t("블랙·그레이·화이트박스 3가지 접근 방식과 레드팀 훈련을 통해 조직의 방어 체계가 실제 공격에 얼마나 견디는지 검증합니다. 발견된 취약점에 대한 재현 가능한 PoC와 구체적인 조치 가이드를 제공합니다.", "We validate how well your defenses hold through black, grey, and white-box approaches plus red team exercises, delivering reproducible PoCs and concrete remediation guidance for every finding.", "ブラック・グレー・ホワイトボックスの3つのアプローチとレッドチーム演習を通じて、組織の防御体系が実際の攻撃にどれだけ耐えられるかを検証します。発見された脆弱性に対する再現可能なPoCと具体的な対応ガイドを提供します。")}
          points={[
            { title: t("시나리오 설계", "Scenario Design", "シナリオ設計"), body: t("블랙·그레이·화이트박스 3가지 접근 방식. 내부자·외부 공격자·파트너 계정 탈취 등 실제 위협 시나리오 반영.", "Three engagement modes: black, grey, and white-box. Scenarios cover insider threats, external attackers, and partner account takeover.", "ブラック・グレー・ホワイトボックスの3つのアプローチ。内部者・外部攻撃者・パートナーアカウント乗っ取りなど実際の脅威シナリオを反映。") },
            { title: t("레드팀 운영", "Red Team Exercise", "レッドチーム運用"), body: t("TIBER-EU 기반 Red Team Exercise. 피싱·소셜 엔지니어링·물리 침투까지 포함한 복합 시나리오. 방어팀(Blue Team) 탐지 역량 동시 측정.", "TIBER-EU-based Red Team Exercise covering phishing, social engineering, and physical intrusion. Simultaneously measures Blue Team detection capability.", "TIBER-EUベースのRed Team Exercise。フィッシング・ソーシャルエンジニアリング・物理侵入まで含む複合シナリオ。防御チーム(Blue Team)の検知能力を同時に測定。") },
            { title: t("공격 대상 범위", "Target Scope", "攻撃対象範囲"), body: t("Web/API, 모바일(iOS·Android), 클라우드(AWS·Azure·GCP), 내부 네트워크, Active Directory, OT/IoT까지 전 계층 커버.", "Full coverage: Web/API, mobile (iOS·Android), cloud (AWS·Azure·GCP), internal network, Active Directory, and OT/IoT.", "Web/API、モバイル(iOS·Android)、クラウド(AWS·Azure·GCP)、内部ネットワーク、Active Directory、OT/IoTまで全レイヤーをカバー。") },
            { title: t("결과 리포팅", "Results & Reporting", "結果レポーティング"), body: t("CVSS 3.1 점수·MITRE ATT&CK 매핑·재현 가능한 PoC 포함. 경영진 요약본과 기술 상세 2버전 보고서 한/영 제공.", "CVSS 3.1 scores, MITRE ATT&CK mapping, and reproducible PoCs. Executive summary and technical detail in KO/EN.", "CVSS 3.1スコア・MITRE ATT&CKマッピング・再現可能なPoCを含む。経営層サマリーと技術詳細の2バージョンレポートを韓/英で提供。") },
          ]}
          imgSrc="/assets/nshc/pentest.png" imgAlt="모의해킹 프로세스 구조도"
        />
      )}
      {activeTab === "vuln" && (
        <SvcPanel
          eyebrow="SERVICE / 03 · VULNERABILITY ASSESSMENT"
          title={t(<>전 계층 자산에 대한<br /><em>체계적</em> 취약점 식별.</>, <>Systematic vulnerability identification<br />across <em>every layer</em>.</>, <>全レイヤーの資産に対する<br /><em>体系的</em>な脆弱性の特定。</>)}
          lede={t("인프라부터 소스코드까지 전 계층 자산을 OWASP·MITRE 기준으로 진단하고, 발견된 취약점을 CVSS로 정량화해 조치 우선순위를 명확히 합니다. 스캐너 자동화와 수동 검토를 병행해 오탐 없는 정확한 결과를 제공합니다.", "We assess every asset layer from infrastructure to source code against OWASP and MITRE standards, quantifying findings with CVSS scores. Automated scanning paired with manual review ensures precise, low-noise results.", "インフラからソースコードまで全レイヤーの資産をOWASP・MITRE基準で診断し、発見された脆弱性をCVSSで定量化して対応の優先順位を明確にします。スキャナーの自動化と手動レビューを併用し、誤検知のない正確な結果を提供します。")}
          points={[
            { title: t("인프라·네트워크 진단", "Infrastructure & Network", "インフラ・ネットワーク診断"), body: t("서버, 네트워크 장비, 방화벽, VPN 등 인프라 전반. CVSS 기반 우선순위 분류 및 버전별 패치 가이드 제공.", "Servers, network devices, firewalls, and VPNs. CVSS-based priority classification with version-specific patch guidance.", "サーバー、ネットワーク機器、ファイアウォール、VPNなどインフラ全般。CVSSベースの優先順位分類およびバージョン別パッチガイドを提供。") },
            { title: t("웹 / API 진단", "Web & API Testing", "Web / API診断"), body: t("OWASP Top 10 · API Security Top 10 기준. REST·GraphQL·WebSocket 포함 전체 엔드포인트 점검.", "OWASP Top 10 and API Security Top 10. Full endpoint coverage including REST, GraphQL, and WebSocket.", "OWASP Top 10 · API Security Top 10基準。REST・GraphQL・WebSocketを含む全エンドポイントを点検。") },
            { title: t("모바일 앱 진단", "Mobile App Assessment", "モバイルアプリ診断"), body: t("iOS·Android 바이너리 분석, 런타임 조작, 인증·암호화 취약점. OWASP MASVS 기준 체크리스트 제공.", "iOS and Android binary analysis, runtime manipulation, auth and crypto flaws. OWASP MASVS checklist provided.", "iOS・Androidバイナリ分析、ランタイム操作、認証・暗号化の脆弱性。OWASP MASVS基準のチェックリストを提供。") },
            { title: t("클라우드 설정 진단", "Cloud Configuration Review", "クラウド設定診断"), body: t("AWS·Azure·GCP IAM 권한 과잉, 스토리지 노출, 네트워크 정책 오설정 수동 검토. CSPM 결과 보완.", "Manual review of IAM over-privilege, storage exposure, and network misconfigurations. Supplements CSPM output.", "AWS・Azure・GCPのIAM権限過剰、ストレージ露出、ネットワークポリシーの誤設定を手動レビュー。CSPM結果を補完。") },
            { title: t("소스코드 진단", "Source Code Review", "ソースコード診断"), body: t("SAST 도구와 수동 리뷰 병행. 시크릿 노출, 인젝션, 인증 우회 취약점 탐지. CI/CD 파이프라인 연동 가능.", "SAST tooling with manual review. Detects secret exposure, injection flaws, and authentication bypasses. CI/CD pipeline integration available.", "SASTツールと手動レビューを併用。シークレット露出、インジェクション、認証バイパスの脆弱性を検知。CI/CDパイプライン連携が可能。") },
          ]}
          imgSrc="/assets/nshc/vuln.png" imgAlt="취약점 진단 범위 구조도"
        />
      )}
      {activeTab === "cti" && (
        <SvcPanel
          eyebrow="SERVICE / 04 · CYBER THREAT INTELLIGENCE · BAT Intelligence"
          title={t(<>산업·지역 맞춤 위협 피드로<br /><em>선제적</em> 방어 체계 구축.</>, <>Industry-tailored threat feeds for<br /><em>proactive</em> defense.</>, <>業界・地域に合わせた脅威フィードで<br /><em>先制的</em>な防御体系を構築。</>)}
          lede={t("NSHC BAT Intelligence는 사이버 범죄, 다크웹, 딥웹에 노출된 복합 위협 요소를 'Human Driven, Powered by AI' 방식으로 분석합니다. 한국·동아시아 지역 특화 위협 그룹의 TTP를 실시간으로 추적하고, 기업이 실제로 활용할 수 있는 형태의 인텔리전스를 단계별로 제공합니다.", "NSHC BAT Intelligence analyzes complex threats from dark web, deep web, and cybercriminal channels via a 'Human Driven, Powered by AI' approach. Tracks TTPs of Korea- and East Asia-focused threat groups in real time, delivering actionable intelligence at every tier.", "NSHC BAT Intelligenceは、サイバー犯罪、ダークウェブ、ディープウェブに露出した複合的な脅威要素を「Human Driven, Powered by AI」方式で分析します。韓国・東アジア地域に特化した脅威グループのTTPをリアルタイムで追跡し、企業が実際に活用できる形のインテリジェンスを段階別に提供します。")}
          points={[
            { title: t("맞춤형 위협 피드", "Tailored Threat Feeds", "カスタム脅威フィード"), body: t("금융·제조·의료 등 산업별 APT 그룹 TTP 피드. 한국·동아시아 지역 특화 위협 정보 포함. 일일 업데이트.", "APT group TTP feeds segmented by industry (finance, manufacturing, healthcare). Korea and East Asia regional focus. Daily updates.", "金融・製造・医療など業界別のAPTグループTTPフィード。韓国・東アジア地域に特化した脅威情報を含む。日次更新。") },
            { title: t("IoC 구독 서비스", "IoC Subscription", "IoC購読サービス"), body: t("IP·도메인·파일 해시·URL·이메일 IoC를 STIX/TAXII 포맷으로 제공. SIEM·SOAR·방화벽 자동 연동.", "IP, domain, file hash, URL, and email IoCs in STIX/TAXII format. Auto-integration with SIEM, SOAR, and firewalls.", "IP・ドメイン・ファイルハッシュ・URL・メールのIoCをSTIX/TAXIIフォーマットで提供。SIEM・SOAR・ファイアウォールと自動連携。") },
            { title: t("악성코드 분석", "Malware Analysis", "マルウェア分析"), body: t("정적·동적·인터랙티브 분석을 통한 상세 분석 리포트. 공격 인프라 역추적 및 캠페인 연결 분석 포함.", "Detailed reports from static, dynamic, and interactive analysis. Includes attacker infrastructure attribution and campaign linkage.", "静的・動的・インタラクティブ分析による詳細な分析レポート。攻撃インフラの逆追跡およびキャンペーン関連分析を含む。") },
            { title: t("전략적 인텔리전스", "Strategic Intelligence", "戦略的インテリジェンス"), body: t("경영진 대상 분기별 위협 동향 보고서. 산업 내 주요 침해 사례 및 사전 예방 권고 포함.", "Quarterly threat landscape reports for executives. Key incident case studies and proactive recommendations for the industry.", "経営層向けの四半期別脅威動向レポート。業界内の主要な侵害事例および事前予防の推奨を含む。") },
          ]}
          imgSrc="/assets/nshc/cti.png" imgAlt="위협 인텔리전스 운영 구조도"
        />
      )}
      {activeTab === "asm" && (
        <SvcPanel
          eyebrow="SERVICE / 05 · ATTACK SURFACE MANAGEMENT · BAT Insight"
          title={t(<>외부에서 바라본 조직의 노출면을<br /><em>지속적</em>으로 발견하고 관리합니다.</>, <>Continuously discover and manage<br />your organization&apos;s <em>external exposure</em>.</>, <>外部から見た組織の露出面を<br /><em>継続的</em>に発見し管理します。</>)}
          lede={t("NSHC BAT Insight(THE BOIM ASM)는 공격자의 시각에서 조직이 외부에 어떻게 노출되어 있는지를 지속적으로 스캔합니다. 허가된 자산뿐 아니라 Shadow IT, 잊혀진 서브도메인, 유출된 코드까지 자동으로 발굴하고 리스크를 정량화합니다. 7일 주기 전체 재스캔과 멀티테넌시 기반 데이터 격리로 엔터프라이즈 환경을 지원합니다.", "NSHC BAT Insight (THE BOIM ASM) continuously scans your organization from an attacker's perspective, automatically discovering known assets, Shadow IT, forgotten subdomains, and leaked code — with risk quantified. Full rescan every 7 days with multi-tenant data isolation for enterprise environments.", "NSHC BAT Insight(THE BOIM ASM)は、攻撃者の視点で組織が外部にどのように露出しているかを継続的にスキャンします。許可された資産だけでなく、Shadow IT、忘れられたサブドメイン、流出したコードまで自動的に発掘しリスクを定量化します。7日周期の全体再スキャンとマルチテナンシーベースのデータ隔離でエンタープライズ環境をサポートします。")}
          points={[
            { title: t("외부 자산 발굴", "External Asset Discovery", "外部資産の発掘"), body: t("도메인·서브도메인·IP·클라우드 자산을 자동 탐색. 공식 등록되지 않은 Shadow IT까지 전체 가시화.", "Automated discovery of domains, subdomains, IPs, and cloud assets. Full visibility including Shadow IT not in official inventory.", "ドメイン・サブドメイン・IP・クラウド資産を自動探索。公式に登録されていないShadow ITまで全体を可視化。") },
            { title: t("지속 모니터링 & 알림", "Continuous Monitoring & Alerts", "継続的モニタリング & アラート"), body: t("7일 주기 전체 재스캔 + 신규 자산·변경 사항 실시간 알림. 만료 예정 인증서, 새롭게 열린 포트 자동 탐지.", "Full rescan every 7 days plus real-time alerts for new assets and changes. Auto-detection of expiring certs and newly opened ports.", "7日周期の全体再スキャン + 新規資産・変更事項のリアルタイムアラート。有効期限切れ間近の証明書、新たに開いたポートを自動検知。") },
            { title: t("코드 유출 탐지", "Code & Secret Leak Detection", "コード流出検知"), body: t("GitHub·GitLab·Bitbucket에서 소스코드·API 키·시크릿 노출 자동 탐지. 공개 클라우드 스토리지 버킷 점검 포함.", "Auto-detection of source code, API keys, and secrets exposed on GitHub, GitLab, and Bitbucket. Public cloud storage bucket checks included.", "GitHub・GitLab・Bitbucketでソースコード・APIキー・シークレットの露出を自動検知。公開クラウドストレージバケットの点検を含む。") },
            { title: t("리스크 대시보드", "Risk Dashboard & Reporting", "リスクダッシュボード"), body: t("자산별 리스크 점수화, 트렌드 분석, 경영진용 요약 보고. 월간 리포트 및 SIEM 연동 가능.", "Per-asset risk scoring, trend analysis, and executive summaries. Monthly reports with SIEM integration available.", "資産別リスクのスコア化、トレンド分析、経営層向けサマリー報告。月次レポートおよびSIEM連携が可能。") },
          ]}
          imgSrc="/assets/nshc/asm.png" imgAlt="외부공격면 관리 운영 구조도"
        />
      )}
      {activeTab === "darkweb" && (
        <SvcPanel
          eyebrow="SERVICE / 06 · DARK WEB MONITORING · BAT Intelligence"
          title={t(<>임직원 계정부터 기밀 문서까지,<br /><em>유출 징후</em>를 사전에 탐지합니다.</>, <>From employee accounts to confidential docs —<br />detect <em>leak signals</em> before damage occurs.</>, <>役職員アカウントから機密文書まで、<br /><em>流出の兆候</em>を事前に検知します。</>)}
          lede={t("BAT Intelligence의 Cyber Intelligence 서비스가 다크웹, 해킹 포럼, 텔레그램, 페이스트 사이트를 24/7 모니터링해 유출 데이터를 실시간 감시합니다. 정기적인 리포팅과 분석을 통해 위협 흐름과 침해 위험도를 정량화합니다.", "BAT Intelligence's Cyber Intelligence service monitors dark web forums, Telegram channels, hacker communities, and paste sites 24/7, tracking leaked data in real time. Regular reporting and analysis quantify threat flow and breach risk.", "BAT IntelligenceのCyber Intelligenceサービスが、ダークウェブ、ハッキングフォーラム、テレグラム、ペーストサイトを24/7モニタリングし、流出データをリアルタイムで監視します。定期的なレポーティングと分析を通じて脅威の流れと侵害リスク度を定量化します。")}
          points={[
            { title: t("계정 정보 유출 감지", "Credential Leak Detection", "アカウント情報の流出検知"), body: t("다크웹·해커 포럼·텔레그램·Paste 사이트에서 임직원 이메일·비밀번호·세션 토큰 탐지. 발견 즉시 실시간 알림.", "Detection of employee emails, passwords, and session tokens across dark web forums, Telegram, and paste sites. Immediate real-time alerts on discovery.", "ダークウェブ・ハッカーフォーラム・テレグラム・Pasteサイトで役職員のメール・パスワード・セッショントークンを検知。発見次第リアルタイムでアラート。") },
            { title: t("기밀 문서 유출 감지", "Confidential Document Detection", "機密文書の流出検知"), body: t("내부 문서, 계약서, 고객 데이터, 소스코드 유출 여부를 키워드·핑거프린트 매칭으로 탐지.", "Keyword and fingerprint matching to detect leakage of internal documents, contracts, customer data, and source code.", "社内文書、契約書、顧客データ、ソースコードの流出有無をキーワード・フィンガープリントマッチングで検知。") },
            { title: t("브랜드·도메인 모니터링", "Brand & Domain Monitoring", "ブランド・ドメイン監視"), body: t("피싱 도메인, 위조 모바일 앱, 브랜드 사칭 계정을 다크웹 및 공개 소스에서 추적. 테이크다운 지원.", "Track phishing domains, counterfeit mobile apps, and brand impersonation across dark web and open sources. Takedown support included.", "フィッシングドメイン、偽造モバイルアプリ、ブランドなりすましアカウントをダークウェブおよび公開ソースで追跡。テイクダウン支援。") },
            { title: t("정기 리포팅", "Periodic Reporting", "定期レポーティング"), body: t("월간 유출 현황 보고서. 발견 건별 출처·심각도·권고 조치 포함. 침해 징후 타임라인 분석 제공.", "Monthly leak status report. Each finding includes source, severity, and recommended action. Compromise indicator timeline analysis.", "月次の流出状況レポート。発見件ごとの出所・深刻度・推奨対応を含む。侵害兆候のタイムライン分析を提供。") },
          ]}
          imgSrc="/assets/nshc/darkweb.png" imgAlt="다크웹 모니터링 운영 구조도"
        />
      )}

      <CtaBand
        heading={t(<>공격자보다 먼저,<br />약점을 <em>발견</em>하세요.</>, <>Find vulnerabilities<br />before the <em>attacker</em> does.</>, <>攻撃者よりも先に、<br />弱点を<em>発見</em>してください。</>)}
        btnLabel={t("컨설팅 문의 · 샘플 리포트", "Request Consulting · Sample Report", "コンサルティングのお問い合わせ · サンプルレポート")}
      />
      <RelatedBlock items={[
        { href: "/ssq-io/sbom",  k: "NSHC · 02", h5: "Omega SBOM",             p: t("공급망 리스크와 CVE를 함께 관리.", "Manage supply chain risk alongside CVEs.", "サプライチェーンリスクとCVEを一括管理。") },
        { href: "/ssq-co/dbsafer", k: "PORTFOLIO · 03", h5: t("피앤피시큐어 · 접근제어", "PnP Secure · Access Control", "ピーアンドピーセキュア · アクセス制御"), p: t("내부 통제로 권한 경로 차단.",       "Block privilege escalation with internal controls.", "内部統制で権限昇格の経路を遮断。") },
      ]} />
    </>
  );
}
