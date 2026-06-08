"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, RelatedBlock, SolutionCrumbs, SpecTable, SolTabsNav, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "sbom" | "vuln" | "license" | "visibility" | "gating" | "report";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview",    label: t("개요",           "Overview", "概要") },
    { id: "sbom",        label: t("SBOM 자동 생성", "Auto SBOM", "SBOM自動生成") },
    { id: "vuln",        label: t("취약점 모니터링", "Vuln Monitoring", "脆弱性モニタリング") },
    { id: "license",     label: t("라이선스 관리",  "License Management", "ライセンス管理") },
    { id: "visibility",  label: t("공급망 가시성",  "Supply Chain Visibility", "サプライチェーンの可視性") },
    { id: "gating",      label: t("정책 기반 게이팅", "Policy Gating", "ポリシーベースのゲーティング") },
    { id: "report",      label: t("컴플라이언스 리포트", "Compliance Reports", "コンプライアンスレポート") },
  ];

  return (
    <>
      <SiteHeader activeId="solutions" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="CODEWISE" />
          <div className="layout">
            <div>
              <div className="partner-meta">
                <span className="chip solid">PORTFOLIO · 07</span>
                <span className="chip">TECHNOLOGY PARTNER</span>
                <span className="chip accent">CODEWISE · SUPPLY CHAIN</span>
              </div>
              <h1>
                {t(
                  <>{`소프트웨어 공급망의`}<br /><em>투명성</em>을 확보합니다.</>,
                  <>Establish <em>transparency</em><br />in your software supply chain.</>,
                  <>{`ソフトウェアサプライチェーンの`}<br /><em>透明性</em>を確保します。</>,
                )}
              </h1>
              <p className="lede">
                {t(
                  <>SPDX·CycloneDX 표준의 <b>SBOM을 자동 생성</b>하고 오픈소스 취약점·라이선스 리스크를 지속적으로 추적하는 <b>Omega SBOM</b> 플랫폼.</>,
                  <>The <b>Omega SBOM</b> platform — <b>auto-generates</b> SPDX/CycloneDX-standard SBOMs and continuously tracks open-source vulnerability and license risks.</>,
                  <>SPDX·CycloneDX標準の<b>SBOMを自動生成</b>し、オープンソースの脆弱性・ライセンスリスクを継続的に追跡する<b>Omega SBOM</b>プラットフォーム。</>,
                )}
              </p>
            </div>
            <div className="sol-visual cw-visual">
              <span className="corner tl">CODEWISE · OMEGA SBOM</span>
              <span className="status"><span className="sd"></span>SCANNING</span>
              <div className="cw-tree">
                <div className="cw-row"><span className="cw-dep">react@18.2.0</span><span className="lvl ok">CLEAN</span></div>
                <div className="cw-row"><span className="cw-dep">├─ lodash@4.17.20</span><span className="lvl warn">CVE-2021-23337</span></div>
                <div className="cw-row"><span className="cw-dep">├─ axios@1.3.0</span><span className="lvl ok">CLEAN</span></div>
                <div className="cw-row"><span className="cw-dep">│  └─ follow-redirects@1.14.8</span><span className="lvl err">HIGH</span></div>
                <div className="cw-row"><span className="cw-dep">└─ moment@2.29.4</span><span className="lvl ok">CLEAN</span></div>
              </div>
              <div className="cw-kpis">
                <div className="cw-kpi"><div className="n">12,847</div><div className="l">Components</div></div>
                <div className="cw-kpi ok"><div className="n">98.2%</div><div className="l">Coverage</div></div>
                <div className="cw-kpi crit"><div className="n">23</div><div className="l">CVEs</div></div>
                <div className="cw-kpi"><div className="n">SPDX</div><div className="l">Format</div></div>
              </div>
            </div>
          </div>
          <div className="sol-stats">
            <div><div className="n">SPDX<sup>+CycloneDX</sup></div><div className="l">{t("표준 포맷 지원", "Standard Formats", "標準フォーマット対応")}</div></div>
            <div><div className="n">500<sup>+</sup></div><div className="l">{t("라이선스 분석", "Licenses Analyzed", "ライセンス分析")}</div></div>
            <div><div className="n">CVE<sup>{t("실시간", " RT", " RT")}</sup></div><div className="l">{t("취약점 모니터링", "Vuln Monitoring", "脆弱性モニタリング")}</div></div>
            <div><div className="n">CI/CD<sup>{t("통합", "", "統合")}</sup></div><div className="l">{t("자동 SBOM 생성", "Auto SBOM Gen", "SBOM自動生成")}</div></div>
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
                  <div className="eyebrow">CORE CAPABILITIES</div>
                  <h2 className="section-title" style={{ marginTop: 28 }}>
                    {t(<>{`보이지 않던 의존성을`}<br /><em>투명</em>하게.</>, <>Invisible dependencies,<br />made <em>transparent</em>.</>, <>{`見えなかった依存関係を`}<br /><em>透明</em>に。</>)}
                  </h2>
                </div>
                <p className="section-lede" data-reveal data-reveal-delay="1">
                  {t("빌드부터 배포까지 전 단계에서 SBOM을 자동으로 생성·관리하고, 오픈소스 컴포넌트의 리스크를 상시 파악합니다.", "Auto-generate and manage SBOMs at every stage from build to deploy, with continuous visibility into open-source component risks.", "ビルドからデプロイまで全段階でSBOMを自動的に生成・管理し、オープンソースコンポーネントのリスクを常時把握します。")}
                </p>
              </div></div>
              <FeaturesGrid items={[
                { num: "FEATURE / 01", icon: <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h16M3 18h13" /></svg>, title: t("SBOM 자동 생성", "Auto SBOM Generation", "SBOM自動生成"), body: t("CI/CD 파이프라인에 통합해 빌드마다 SPDX·CycloneDX 표준 SBOM을 자동 생성합니다.", "Auto-generate SPDX/CycloneDX-standard SBOMs with every CI/CD build.", "CI/CDパイプラインに統合し、ビルドごとにSPDX・CycloneDX標準のSBOMを自動生成します。"), tags: ["SPDX", "CycloneDX"] },
                { num: "FEATURE / 02", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" /></svg>, title: t("취약점 상시 모니터링", "Continuous Vuln Monitoring", "脆弱性の常時モニタリング"), body: t("NVD·OSV·GitHub Advisory 연동으로 신규 CVE를 실시간 감지하고 알림을 발송합니다.", "Real-time CVE detection via NVD, OSV, and GitHub Advisory.", "NVD・OSV・GitHub Advisory連携で新規CVEをリアルタイムに検知し、アラートを送信します。"), tags: ["NVD", "OSV", "CVE"] },
                { num: "FEATURE / 03", icon: <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" /><path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" /></svg>, title: t("라이선스 리스크 관리", "License Risk Management", "ライセンスリスク管理"), body: t("GPL·LGPL·MIT 등 500+ 라이선스를 자동 분석해 컴플라이언스 위반을 사전에 차단합니다.", "Auto-analyze 500+ licenses including GPL, LGPL, and MIT.", "GPL・LGPL・MITなど500以上のライセンスを自動分析し、コンプライアンス違反を事前に遮断します。"), tags: ["GPL", "MIT", "License"] },
                { num: "FEATURE / 04", icon: <svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z" /><path d="M7 8h10M7 12h10M7 16h6" /></svg>, title: t("공급망 가시성", "Supply Chain Visibility", "サプライチェーンの可視性"), body: t("직접·간접 의존성 트리 전체를 시각화하고 계층별 리스크를 파악합니다.", "Visualize the full dependency tree and understand risk at every layer.", "直接・間接の依存関係ツリー全体を可視化し、階層別のリスクを把握します。"), tags: ["Dependency Tree", "SCA"] },
                { num: "FEATURE / 05", icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" /></svg>, title: t("정책 기반 게이팅", "Policy-Based Gating", "ポリシーベースのゲーティング"), body: t("허용·거부 정책으로 고위험 컴포넌트가 포함된 빌드를 자동 차단합니다.", "Allow/deny policies automatically block builds with high-risk components.", "許可・拒否ポリシーで高リスクコンポーネントを含むビルドを自動遮断します。"), tags: ["Policy", "Gate"] },
                { num: "FEATURE / 06", icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M8 10h8M8 14h5" /></svg>, title: t("규정 준수 리포트", "Compliance Reports", "規制遵守レポート"), body: t("EO 14028·NTIA·SBOM 가이드라인에 부합하는 컴플라이언스 보고서를 원클릭 생성합니다.", "One-click compliance reports aligned with EO 14028, NTIA, and SBOM guidelines.", "EO 14028・NTIA・SBOMガイドラインに準拠したコンプライアンスレポートをワンクリックで生成します。"), tags: ["EO 14028", "NTIA"] },
              ]} />
            </div>
          </section>
          {/* <section className="specs">
            <div className="container">
              <div className="sec-heading"><div className="inner"><div data-reveal>
                <div className="eyebrow">PRODUCT SPEC</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>{t("주요 제품 스펙.", "Product Specifications.", "主要な製品スペック。")}</h2>
              </div></div></div>
              <SpecTable rows={[
                [t("제품명", "Product", "製品名"), "Omega SBOM"],
                [t("파트너", "Partner", "パートナー"), "Codewise (코드와이즈)"],
                [t("카테고리", "Category", "カテゴリ"), "SBOM · Software Composition Analysis (SCA)"],
                [t("SBOM 표준", "SBOM Standard", "SBOM標準"), "SPDX 2.3 · CycloneDX 1.5"],
                [t("CVE 피드", "CVE Feeds", "CVEフィード"), "NVD · OSV · GitHub Advisory · VulnDB"],
                [t("CI/CD 연동", "CI/CD Integration", "CI/CD連携"), "GitHub Actions · GitLab CI · Jenkins · Azure DevOps"],
                [t("배포 방식", "Deployment", "デプロイ方式"), <><b>SaaS ({t("클라우드", "Cloud", "クラウド")})</b> · On-Premise</>],
                [t("라이선스 분석", "License Analysis", "ライセンス分析"), t("GPL · LGPL · MIT · Apache · BSD 등 500+ 라이선스", "GPL · LGPL · MIT · Apache · BSD — 500+ licenses", "GPL · LGPL · MIT · Apache · BSDなど500以上のライセンス")],
                [t("SAFESQUARE 지원", "SAFESQUARE Support", "SAFESQUAREサポート"), t("국내 라이선스 계약 · PoC 지원 · 정책 설계 · 24/7 기술 지원", "Local licensing · PoC support · Policy design · 24/7 technical support", "国内ライセンス契約 · PoC支援 · ポリシー設計 · 24/7技術サポート")],
              ]} />
            </div>
          </section> */}
        </>
      )}

      {activeTab === "sbom" && (
        <SvcPanel
          eyebrow="FEATURE / 01 · AUTO SBOM GENERATION"
          title={t(<>빌드마다<br /><em>자동</em>으로 SBOM이 만들어집니다.</>, <>Every build generates<br />an SBOM <em>automatically</em>.</>, <>ビルドごとに<br /><em>自動</em>でSBOMが生成されます。</>)}
          lede={t("CI/CD 파이프라인에 플러그인 형태로 통합되어, 소프트웨어가 빌드될 때마다 SPDX 2.3·CycloneDX 1.5 표준의 SBOM을 자동으로 생성합니다. 추가 공수 없이 소프트웨어 구성 요소의 완전한 목록을 유지합니다.", "Integrated as a plugin into CI/CD pipelines, automatically generating SPDX 2.3 and CycloneDX 1.5 standard SBOMs with every software build. A complete inventory of software components is maintained with zero additional effort.", "CI/CDパイプラインにプラグインとして統合され、ソフトウェアがビルドされるたびにSPDX 2.3・CycloneDX 1.5標準のSBOMを自動的に生成します。追加工数なしにソフトウェア構成要素の完全な目録を維持します。")}
          points={[
            { title: t("CI/CD 네이티브 통합", "CI/CD Native Integration", "CI/CDネイティブ統合"), body: t("GitHub Actions · GitLab CI · Jenkins · Azure DevOps에 플러그인으로 통합. 빌드 스크립트 변경 최소화.", "Plugin integration with GitHub Actions, GitLab CI, Jenkins, and Azure DevOps. Minimal build script changes required.", "GitHub Actions · GitLab CI · Jenkins · Azure DevOpsにプラグインとして統合。ビルドスクリプトの変更を最小化。") },
            { title: t("SPDX · CycloneDX 표준", "SPDX & CycloneDX Standards", "SPDX · CycloneDX標準"), body: t("SPDX 2.3·CycloneDX 1.5 두 표준 동시 지원. 다운스트림 소비자 요건에 맞게 선택.", "Simultaneous support for both SPDX 2.3 and CycloneDX 1.5 standards. Select based on downstream consumer requirements.", "SPDX 2.3・CycloneDX 1.5の2つの標準を同時にサポート。ダウンストリーム消費者の要件に合わせて選択。") },
            { title: t("다중 언어 지원", "Multi-Language Support", "多言語対応"), body: t("JavaScript(npm·yarn), Python(pip), Java(Maven·Gradle), Go, Rust, Ruby 등 주요 언어 패키지 매니저 지원.", "Support for major language package managers: JavaScript (npm, yarn), Python (pip), Java (Maven, Gradle), Go, Rust, and Ruby.", "JavaScript(npm・yarn)、Python(pip)、Java(Maven・Gradle)、Go、Rust、Rubyなど主要言語のパッケージマネージャに対応。") },
            { title: t("SBOM 이력 관리", "SBOM Version History", "SBOM履歴管理"), body: t("빌드별 SBOM 이력을 저장하고 비교. 특정 배포 버전의 컴포넌트 구성 즉시 조회.", "Stores and compares SBOM history per build. Instantly query component composition for any specific deployment version.", "ビルド別のSBOM履歴を保存し比較。特定のデプロイバージョンのコンポーネント構成を即時照会。") },
          ]}
          imgSrc="/assets/codewise/sbom.png" imgAlt="SBOM 자동 생성 구조도"
        />
      )}
      {activeTab === "vuln" && (
        <SvcPanel
          eyebrow="FEATURE / 02 · CONTINUOUS VULNERABILITY MONITORING"
          title={t(<>새로운 CVE가 공개되는 순간,<br /><em>즉시</em> 알립니다.</>, <>The moment a new CVE is disclosed —<br /><em>immediate</em> alert.</>, <>新しいCVEが公開された瞬間、<br /><em>即時</em>に通知します。</>)}
          lede={t("SBOM에 등록된 컴포넌트를 NVD, OSV, GitHub Advisory, VulnDB 등 복수의 취약점 데이터베이스와 지속적으로 대조합니다. 신규 CVE가 공개되거나 CVSS 점수가 변경되면 즉시 알림을 발송합니다.", "Components registered in the SBOM are continuously cross-referenced against multiple vulnerability databases including NVD, OSV, GitHub Advisory, and VulnDB. Immediate alerts on new CVE disclosure or CVSS score changes.", "SBOMに登録されたコンポーネントを、NVD、OSV、GitHub Advisory、VulnDBなど複数の脆弱性データベースと継続的に照合します。新規CVEが公開されたりCVSSスコアが変更されると即時にアラートを送信します。")}
          points={[
            { title: t("다중 CVE 피드", "Multiple CVE Feeds", "複数CVEフィード"), body: t("NVD · OSV · GitHub Advisory · VulnDB를 통합 구독. 피드별 최신 취약점 자동 반영.", "Integrated subscriptions to NVD, OSV, GitHub Advisory, and VulnDB. Latest vulnerabilities from each feed automatically reflected.", "NVD · OSV · GitHub Advisory · VulnDBを統合購読。フィードごとの最新脆弱性を自動反映。") },
            { title: t("실시간 알림", "Real-Time Alerts", "リアルタイムアラート"), body: t("사용 중인 컴포넌트에 신규 CVE 공개 시 즉시 알림. CVSS 점수·영향 범위·패치 가이드 포함.", "Immediate alerts when new CVEs are disclosed for components in use. Includes CVSS score, impact scope, and patch guidance.", "使用中のコンポーネントに新規CVEが公開された際に即時アラート。CVSSスコア・影響範囲・パッチガイドを含む。") },
            { title: t("리스크 우선순위", "Risk Prioritization", "リスクの優先順位付け"), body: t("CVSS·EPSS·실제 공격 여부를 결합한 종합 리스크 점수로 우선순위 선정. 중요한 것부터 처리.", "Priority ranking using composite risk scores combining CVSS, EPSS, and active exploitation status. Address the most critical first.", "CVSS・EPSS・実際の攻撃有無を組み合わせた総合リスクスコアで優先順位を選定。重要なものから対応。") },
            { title: t("패치 권고", "Patch Recommendations", "パッチの推奨"), body: t("취약한 버전에서 안전한 최신 버전으로의 업그레이드 경로 자동 제안. 호환성 영향 분석 포함.", "Automatic upgrade path suggestions from vulnerable to safe versions. Includes compatibility impact analysis.", "脆弱なバージョンから安全な最新バージョンへのアップグレード経路を自動提案。互換性への影響分析を含む。") },
          ]}
          imgSrc="/assets/codewise/vuln.png" imgAlt="취약점 상시 모니터링 구조도"
        />
      )}
      {activeTab === "license" && (
        <SvcPanel
          eyebrow="FEATURE / 03 · LICENSE RISK MANAGEMENT"
          title={t(<>오픈소스 라이선스 위반을<br /><em>사전</em>에 차단합니다.</>, <>Block open-source license violations<br /><em>before</em> they happen.</>, <>オープンソースのライセンス違反を<br /><em>事前</em>に遮断します。</>)}
          lede={t("GPL, LGPL처럼 소스코드 공개 의무가 있는 라이선스를 인지하지 못한 채 상용 제품에 포함하면 법적 분쟁이 발생할 수 있습니다. Omega SBOM은 500개 이상의 라이선스를 자동 식별하고 비즈니스 정책과의 충돌을 사전에 차단합니다.", "Including licenses like GPL and LGPL with source disclosure obligations in a commercial product without awareness can lead to legal disputes. Omega SBOM auto-identifies 500+ licenses and blocks conflicts with business policies before they occur.", "GPLやLGPLのようにソースコード公開義務のあるライセンスを認識しないまま商用製品に含めると、法的紛争が発生する可能性があります。Omega SBOMは500以上のライセンスを自動識別し、ビジネスポリシーとの衝突を事前に遮断します。")}
          points={[
            { title: t("500+ 라이선스 자동 식별", "500+ License Auto-Identification", "500以上のライセンス自動識別"), body: t("GPL · LGPL · MIT · Apache · BSD · MPL · CDDL 등 500개 이상 라이선스 자동 식별.", "Auto-identification of 500+ licenses: GPL, LGPL, MIT, Apache, BSD, MPL, CDDL, and more.", "GPL · LGPL · MIT · Apache · BSD · MPL · CDDLなど500以上のライセンスを自動識別。") },
            { title: t("라이선스 정책 설정", "License Policy Configuration", "ライセンスポリシー設定"), body: t("허용·주의·거부 라이선스 목록을 조직 정책으로 관리. Copyleft 포함 빌드 자동 경고.", "Manage allowed, caution, and denied license lists as organizational policies. Auto-warn on builds including copyleft licenses.", "許可・注意・拒否のライセンス一覧を組織ポリシーとして管理。Copyleftを含むビルドを自動警告。") },
            { title: t("충돌 감지", "Conflict Detection", "衝突検知"), body: t("라이선스 간 양립성 충돌 자동 감지. GPL+Apache 2.0 충돌 등 복잡한 케이스 커버.", "Automatic detection of license compatibility conflicts. Covers complex cases like GPL + Apache 2.0.", "ライセンス間の両立性の衝突を自動検知。GPL+Apache 2.0の衝突など複雑なケースをカバー。") },
            { title: t("법무 검토 지원", "Legal Review Support", "法務レビュー支援"), body: t("사용 중인 오픈소스 컴포넌트와 라이선스 전체 목록 리포트 생성. 법무팀 검토 지원.", "Generate full report of open-source components and licenses in use. Supports legal team review.", "使用中のオープンソースコンポーネントとライセンスの全一覧レポートを生成。法務チームのレビューを支援。") },
          ]}
          imgSrc="/assets/codewise/license.png" imgAlt="라이선스 리스크 관리 구조도"
        />
      )}
      {activeTab === "visibility" && (
        <SvcPanel
          eyebrow="FEATURE / 04 · SUPPLY CHAIN VISIBILITY"
          title={t(<>직접·간접 의존성의<br /><em>전체 트리</em>를 시각화합니다.</>, <>Visualize the <em>full tree</em><br />of direct and indirect dependencies.</>, <>直接・間接の依存関係の<br /><em>全体ツリー</em>を可視化します。</>)}
          lede={t("소프트웨어 공급망 공격(SolarWinds, Log4Shell 등)은 직접 의존성이 아닌 깊이 중첩된 간접 의존성을 통해 발생합니다. Omega SBOM은 모든 계층의 의존성 트리를 가시화해 어디에 리스크가 숨어있는지 한눈에 파악하게 합니다.", "Supply chain attacks like SolarWinds and Log4Shell originate from deeply nested transitive dependencies, not direct ones. Omega SBOM visualizes every layer of the dependency tree so hidden risks are immediately apparent.", "ソフトウェアサプライチェーン攻撃(SolarWinds、Log4Shellなど)は、直接依存ではなく深くネストされた間接依存を通じて発生します。Omega SBOMはすべての階層の依存関係ツリーを可視化し、どこにリスクが潜んでいるかを一目で把握できるようにします。")}
          points={[
            { title: t("의존성 트리 시각화", "Dependency Tree Visualization", "依存関係ツリーの可視化"), body: t("직접·간접(transitive) 의존성을 트리 구조로 시각화. 문제 컴포넌트까지의 경로 즉시 파악.", "Tree visualization of direct and transitive dependencies. Immediately trace the path to any problematic component.", "直接・間接(transitive)の依存関係をツリー構造で可視化。問題のあるコンポーネントまでの経路を即座に把握。") },
            { title: t("계층별 리스크 분석", "Layer-by-Layer Risk Analysis", "階層別リスク分析"), body: t("각 의존성 계층의 취약점·라이선스 리스크를 계층별로 집계. 가장 많이 영향받는 컴포넌트 식별.", "Aggregate vulnerability and license risks by dependency layer. Identify the most impactful components.", "各依存関係階層の脆弱性・ライセンスリスクを階層別に集計。最も影響を受けるコンポーネントを識別。") },
            { title: t("Shadow Dependency 탐지", "Shadow Dependency Detection", "Shadow Dependency検知"), body: t("패키지 매니저에 명시되지 않은 숨겨진 의존성까지 탐지. 빌드 결과물 기반 분석.", "Detects hidden dependencies not declared in package managers. Analysis based on actual build artifacts.", "パッケージマネージャに明示されていない隠れた依存関係まで検知。ビルド成果物に基づく分析。") },
            { title: t("컴포넌트 인벤토리", "Component Inventory", "コンポーネントインベントリ"), body: t("조직 내 사용 중인 모든 오픈소스 컴포넌트의 중앙 인벤토리 유지. 프로젝트 간 중복 관리.", "Maintains a central inventory of all open-source components in use across the organization. Cross-project duplication management.", "組織内で使用中のすべてのオープンソースコンポーネントの中央インベントリを維持。プロジェクト間の重複を管理。") },
          ]}
          imgSrc="/assets/codewise/visibility.png" imgAlt="공급망 가시성 구조도"
        />
      )}
      {activeTab === "gating" && (
        <SvcPanel
          eyebrow="FEATURE / 05 · POLICY-BASED GATING"
          title={t(<>고위험 컴포넌트가 포함된 빌드는<br /><em>자동으로</em> 차단합니다.</>, <>Builds with high-risk components<br />are <em>automatically</em> blocked.</>, <>高リスクのコンポーネントを含むビルドは<br /><em>自動的</em>に遮断します。</>)}
          lede={t("CVSS 점수 임계값, 금지 라이선스 포함, 특정 패키지 버전 등 조직의 보안 정책을 코드로 정의하고 CI/CD 파이프라인에 게이트를 설치합니다. 정책을 위반하는 빌드는 배포 전에 자동으로 차단됩니다.", "Define organizational security policies as code — CVSS score thresholds, prohibited licenses, specific package versions — and install gates in CI/CD pipelines. Builds violating policy are automatically blocked before deployment.", "CVSSスコアのしきい値、禁止ライセンスの混入、特定パッケージバージョンなど組織のセキュリティポリシーをコードとして定義し、CI/CDパイプラインにゲートを設置します。ポリシーに違反するビルドはデプロイ前に自動的に遮断されます。")}
          points={[
            { title: t("정책 코드화", "Policy as Code", "ポリシーのコード化"), body: t("YAML 또는 JSON으로 허용·거부 정책 정의. Git 버전 관리로 정책 변경 이력 추적.", "Define allow/deny policies in YAML or JSON. Track policy change history with Git version control.", "YAMLまたはJSONで許可・拒否ポリシーを定義。Gitバージョン管理でポリシー変更履歴を追跡。") },
            { title: t("자동 빌드 차단", "Automated Build Blocking", "自動ビルド遮断"), body: t("CVSS 임계값 초과, 금지 라이선스 포함, 블랙리스트 패키지 감지 시 빌드 자동 실패 처리.", "Automatic build failure on CVSS threshold exceeded, prohibited license detected, or blacklisted package found.", "CVSSしきい値の超過、禁止ライセンスの混入、ブラックリストパッケージの検知時にビルドを自動的に失敗処理。") },
            { title: t("예외 처리 워크플로우", "Exception Workflow", "例外処理ワークフロー"), body: t("정책 위반 컴포넌트에 대한 예외 승인 워크플로우. 보안팀 검토 후 임시 예외 등록.", "Exception approval workflow for policy-violating components. Temporary exceptions registered after security team review.", "ポリシー違反コンポーネントに対する例外承認ワークフロー。セキュリティチームのレビュー後に一時的な例外を登録。") },
            { title: t("Break Glass 절차", "Break Glass Procedure", "Break Glass手順"), body: t("긴급 배포 시 정책 우회를 위한 Break Glass 절차. 전 과정이 감사 기록으로 남음.", "Break Glass procedure for emergency deployments that bypass policy. The entire process is recorded in audit logs.", "緊急デプロイ時にポリシーを迂回するためのBreak Glass手順。全工程が監査記録として残る。") },
          ]}
          imgSrc="/assets/codewise/gating.png" imgAlt="정책 기반 게이팅 구조도"
        />
      )}
      {activeTab === "report" && (
        <SvcPanel
          eyebrow="FEATURE / 06 · COMPLIANCE REPORTS"
          title={t(<>규제 기관이 요구하는 리포트를<br /><em>원클릭</em>으로 생성합니다.</>, <>Generate regulator-required reports<br />with a <em>single click</em>.</>, <>規制機関が要求するレポートを<br /><em>ワンクリック</em>で生成します。</>)}
          lede={t("미국 대통령령 EO 14028, NTIA SBOM 가이드라인, FDA 의료기기 지침 등 주요 규정에서 요구하는 SBOM 및 소프트웨어 구성 리포트를 즉시 생성합니다. 반복적인 수작업 없이 컴플라이언스를 유지합니다.", "Instantly generate SBOM and software composition reports required by key regulations including US Executive Order 14028, NTIA SBOM guidelines, and FDA medical device guidance. Maintain compliance without repetitive manual work.", "米国大統領令EO 14028、NTIA SBOMガイドライン、FDA医療機器指針など主要な規制が要求するSBOMおよびソフトウェア構成レポートを即時に生成します。繰り返しの手作業なしにコンプライアンスを維持します。")}
          points={[
            { title: t("EO 14028 대응", "EO 14028 Compliance", "EO 14028対応"), body: t("미국 대통령령 14028의 소프트웨어 공급망 보안 요건에 맞는 SBOM 리포트 자동 생성.", "Automatic SBOM report generation meeting US Executive Order 14028 software supply chain security requirements.", "米国大統領令14028のソフトウェアサプライチェーンセキュリティ要件に適合したSBOMレポートを自動生成。") },
            { title: t("NTIA 최소 요소", "NTIA Minimum Elements", "NTIA最小要素"), body: t("NTIA가 정의한 SBOM 최소 필수 요소(공급자·컴포넌트·버전·관계 등) 모두 포함 검증.", "Validates all NTIA-defined SBOM minimum required elements: supplier, component, version, relationships, and more.", "NTIAが定義したSBOM最小必須要素(供給者・コンポーネント・バージョン・関係など)をすべて含むことを検証。") },
            { title: t("고객사 제출용 리포트", "Customer Submission Reports", "顧客提出用レポート"), body: t("발주사·갑사가 요구하는 SBOM 제출 요건에 맞는 포맷으로 즉시 출력.", "Instant export in formats meeting SBOM submission requirements from customers and clients.", "発注元・顧客が要求するSBOM提出要件に合わせたフォーマットで即時出力。") },
            { title: t("감사 이력", "Audit Trail", "監査証跡"), body: t("리포트 생성 이력, 배포 버전별 SBOM 스냅샷, 취약점 조치 이력 전량 보관.", "Complete retention of report generation history, SBOM snapshots per deployment version, and vulnerability remediation history.", "レポート生成履歴、デプロイバージョン別のSBOMスナップショット、脆弱性対応履歴を全量保管。") },
          ]}
          imgSrc="/assets/codewise/report.png" imgAlt="컴플라이언스 리포트 구조도"
        />
      )}

      <CtaBand
        heading={t(
          <>{`공급망 리스크를 `}<em>보이게</em><br />만드는 첫 단계.</>,
          <>The first step to making<br />supply chain risk <em>visible</em>.</>,
          <>{`サプライチェーンリスクを`}<em>見える化</em>する<br />最初の一歩。</>,
        )}
        btnLabel={t("SBOM 도입 상담", "Request SBOM Consultation", "SBOM導入の相談")}
      />
      <RelatedBlock items={[
        { href: "/solutions/nshc",      k: "PORTFOLIO · 01", h5: t("NSHC · 보안 서비스",      "NSHC · Security Services", "NSHC · セキュリティサービス"), p: t("외부 공격면과 공급망 리스크를 함께 관리.", "Manage external attack surface alongside supply chain risk.", "外部攻撃面とサプライチェーンリスクを一括管理。") },
        { href: "/ssq-co/dbsafer", k: "PORTFOLIO · 05", h5: t("피앤피시큐어 · 접근제어", "PnP Secure · Access Control", "ピーアンドピーセキュア · アクセス制御"), p: t("소프트웨어 자산 접근제어와 연계.", "Combine with software asset access control.", "ソフトウェア資産のアクセス制御と連携。") },
      ]} />
    </>
  );
}
