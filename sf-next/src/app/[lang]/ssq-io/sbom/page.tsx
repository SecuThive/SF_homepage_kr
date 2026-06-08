"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, RelatedBlock, SolutionCrumbs, SolTabsNav, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "generation" | "vuln" | "license" | "gating" | "report";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview",    label: t("개요",             "Overview", "概要") },
    { id: "generation",  label: t("SBOM 자동 생성",   "Auto SBOM", "SBOM自動生成") },
    { id: "vuln",        label: t("AI 취약점 분석",   "AI Vuln Analysis", "AI脆弱性分析") },
    { id: "license",     label: t("라이선스 관리",    "License Mgmt", "ライセンス管理") },
    { id: "gating",      label: t("정책 게이팅",      "Policy Gating", "ポリシーゲーティング") },
    { id: "report",      label: t("컴플라이언스 리포트", "Compliance", "コンプライアンスレポート") },
  ];

  return (
    <>
      <SiteHeader activeId="ssq-io" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="ARCUS AI SBOM" />
          <div className="layout">
            <div>
              <div className="partner-meta">
                <span className="chip solid">NSHC · 02</span>
                <span className="chip">AI PLATFORM</span>
                <span className="chip accent">SOFTWARE SUPPLY CHAIN SECURITY</span>
              </div>
              <h1>ARCUS AI SBOM</h1>
              <p className="sol-hero-sub">{t("AI 소프트웨어 공급망 보안(SBOM) 플랫폼", "AI Software Supply Chain Security", "AIソフトウェアサプライチェーンセキュリティ(SBOM)プラットフォーム")}</p>
              <p className="lede">
                {t(
                  <>NSHC <b>Arcus AI SBOM</b>은 SPDX·CycloneDX 표준 SBOM을 CI/CD에서 자동 생성하고, AI가 신규 CVE와 라이선스 리스크를 실시간으로 분석해 공급망 보안을 지속적으로 유지합니다.</>,
                  <>NSHC <b>Arcus AI SBOM</b> auto-generates SPDX/CycloneDX-standard SBOMs from CI/CD, while AI continuously analyzes new CVEs and license risks to maintain software supply chain security.</>,
                  <>NSHC <b>Arcus AI SBOM</b>は、SPDX·CycloneDX標準のSBOMをCI/CDで自動生成し、AIが新規CVEとライセンスリスクをリアルタイムで分析してサプライチェーンセキュリティを継続的に維持します。</>
                )}
              </p>
            </div>
            <div className="sol-hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/arcus-ai/sbom/hero.png" alt={t("Arcus AI SBOM 제품 소개", "Arcus AI SBOM product", "Arcus AI SBOM 製品紹介")} />
            </div>
          </div>
          <div className="sol-stats">
            <div><div className="n">SPDX<sup>+CycloneDX</sup></div><div className="l">{t("표준 포맷 지원", "Standard Formats", "標準フォーマット対応")}</div></div>
            <div><div className="n">AI<sup>CVE</sup></div><div className="l">{t("실시간 취약점 분석", "Real-Time Analysis", "リアルタイム脆弱性分析")}</div></div>
            <div><div className="n">500<sup>+</sup></div><div className="l">{t("라이선스 분석", "Licenses Analyzed", "ライセンス分析")}</div></div>
            <div><div className="n">CI/CD<sup>{t("통합", "", "統合")}</sup></div><div className="l">{t("자동 SBOM 생성", "Auto SBOM Gen", "SBOM自動生成")}</div></div>
          </div>
        </div>
      </section>

      <SolTabsNav tabs={tabs} active={activeTab} onChange={(id) => setActiveTab(id as TabId)} />

      {activeTab === "overview" && (
        <section className="features">
          <div className="container">
            <div className="sec-heading"><div className="inner">
              <div data-reveal>
                <div className="eyebrow">CORE CAPABILITIES</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>
                  {t(<>보이지 않던 의존성 리스크를<br />AI가 <em>투명</em>하게 드러냅니다.</>, <>AI makes hidden dependency risk<br /><em>transparent</em>.</>, <>見えなかった依存関係リスクを<br />AIが<em>透明</em>に明らかにします。</>)}
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                {t("빌드부터 배포까지 SBOM을 자동 생성하고, AI가 신규 CVE·라이선스 리스크를 실시간 분석해 소프트웨어 공급망 전체를 지속적으로 보호합니다.", "Auto-generate SBOMs from build to deploy, while AI continuously analyzes new CVEs and license risks to protect the entire software supply chain.", "ビルドからデプロイまでSBOMを自動生成し、AIが新規CVE・ライセンスリスクをリアルタイム分析してソフトウェアサプライチェーン全体を継続的に保護します。")}
              </p>
            </div></div>
            <FeaturesGrid items={[
              { num: "FEATURE / 01", icon: <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h16M3 18h13"/></svg>, title: t("SBOM 자동 생성", "Auto SBOM Generation", "SBOM自動生成"), body: t("CI/CD 파이프라인에 통합해 빌드마다 SPDX·CycloneDX 표준 SBOM을 자동 생성합니다.", "Auto-generate SPDX/CycloneDX-standard SBOMs with every CI/CD build.", "CI/CDパイプラインに統合し、ビルドごとにSPDX・CycloneDX標準のSBOMを自動生成します。"), tags: ["SPDX", "CycloneDX", "CI/CD"] },
              { num: "FEATURE / 02", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg>, title: t("AI CVE 실시간 분석", "AI Real-Time CVE Analysis", "AI CVEリアルタイム分析"), body: t("NVD·OSV·GitHub Advisory와 연동하고 AI가 SBOM 컴포넌트에 대한 신규 CVE를 실시간 분석해 우선순위를 제시합니다.", "AI analyzes new CVEs against SBOM components in real time via NVD, OSV, and GitHub Advisory, presenting prioritized results.", "NVD・OSV・GitHub Advisoryと連携し、AIがSBOMコンポーネントに対する新規CVEをリアルタイム分析して優先順位を提示します。"), tags: ["AI Analysis", "NVD", "OSV"] },
              { num: "FEATURE / 03", icon: <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"/></svg>, title: t("라이선스 리스크 관리", "License Risk Management", "ライセンスリスク管理"), body: t("GPL·LGPL·MIT 등 500+ 라이선스를 자동 분석해 컴플라이언스 위반을 사전에 차단합니다.", "Auto-analyze 500+ licenses including GPL, LGPL, and MIT to block compliance violations.", "GPL・LGPL・MITなど500以上のライセンスを自動分析し、コンプライアンス違反を事前に遮断します。"), tags: ["GPL", "MIT", "500+ Licenses"] },
              { num: "FEATURE / 04", icon: <svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>, title: t("공급망 가시성", "Supply Chain Visibility", "サプライチェーンの可視性"), body: t("직접·간접 의존성 전체 트리를 시각화하고 계층별 리스크를 파악합니다. Shadow Dependency까지 탐지합니다.", "Visualize the full direct and transitive dependency tree and understand risk at every layer, including Shadow Dependencies.", "直接・間接の依存関係の全体ツリーを可視化し、階層別のリスクを把握します。Shadow Dependencyまで検知します。"), tags: ["Dep Tree", "Shadow Dep", "SCA"] },
              { num: "FEATURE / 05", icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z"/></svg>, title: t("정책 기반 게이팅", "Policy-Based Gating", "ポリシーベースのゲーティング"), body: t("CVSS 임계값·금지 라이선스·블랙리스트 패키지 정책을 코드로 정의하고 위반 빌드를 자동 차단합니다.", "Define CVSS threshold, prohibited license, and blacklist package policies as code, auto-blocking violating builds.", "CVSSしきい値・禁止ライセンス・ブラックリストパッケージのポリシーをコードとして定義し、違反ビルドを自動遮断します。"), tags: ["Policy as Code", "Gate", "YAML"] },
              { num: "FEATURE / 06", icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 10h8M8 14h5"/></svg>, title: t("컴플라이언스 리포트", "Compliance Reports", "コンプライアンスレポート"), body: t("EO 14028·NTIA·FDA 가이드라인에 부합하는 컴플라이언스 보고서를 원클릭 생성합니다.", "One-click compliance reports aligned with EO 14028, NTIA, and FDA guidelines.", "EO 14028・NTIA・FDAガイドラインに準拠したコンプライアンスレポートをワンクリックで生成します。"), tags: ["EO 14028", "NTIA", "FDA"] },
            ]} />
          </div>
        </section>
      )}

      {activeTab === "generation" && (
        <SvcPanel
          eyebrow="FEATURE / 01 · AUTO SBOM GENERATION"
          title={t(<>빌드마다<br /><em>자동</em>으로 SBOM이 만들어집니다.</>, <>Every build generates<br />an SBOM <em>automatically</em>.</>, <>ビルドごとに<br /><em>自動</em>でSBOMが生成されます。</>)}
          lede={t("CI/CD 파이프라인에 플러그인 형태로 통합되어, 소프트웨어가 빌드될 때마다 SPDX 2.3·CycloneDX 1.5 표준의 SBOM을 자동으로 생성합니다. 별도 공수 없이 소프트웨어 구성 요소의 완전한 목록을 항상 최신 상태로 유지합니다.", "Integrated as a plugin into CI/CD pipelines, automatically generating SPDX 2.3 and CycloneDX 1.5 standard SBOMs with every software build. A complete, always-current inventory of software components is maintained with zero extra effort.", "CI/CDパイプラインにプラグインとして統合され、ソフトウェアがビルドされるたびにSPDX 2.3・CycloneDX 1.5標準のSBOMを自動的に生成します。別途工数なしにソフトウェア構成要素の完全な目録を常に最新の状態で維持します。")}
          points={[
            { title: t("CI/CD 네이티브 통합", "CI/CD Native Integration", "CI/CDネイティブ統合"), body: t("GitHub Actions · GitLab CI · Jenkins · Azure DevOps에 플러그인으로 통합. 빌드 스크립트 변경 최소화.", "Plugin integration with GitHub Actions, GitLab CI, Jenkins, and Azure DevOps. Minimal build script changes required.", "GitHub Actions · GitLab CI · Jenkins · Azure DevOpsにプラグインとして統合。ビルドスクリプトの変更を最小化。") },
            { title: t("SPDX · CycloneDX 표준", "SPDX & CycloneDX Standards", "SPDX · CycloneDX標準"), body: t("SPDX 2.3·CycloneDX 1.5 두 표준 동시 지원. 다운스트림 요건에 맞게 선택.", "Simultaneous support for SPDX 2.3 and CycloneDX 1.5. Select based on downstream requirements.", "SPDX 2.3・CycloneDX 1.5の2つの標準を同時にサポート。ダウンストリームの要件に合わせて選択。") },
            { title: t("다중 언어 지원", "Multi-Language Support", "多言語対応"), body: t("JavaScript(npm·yarn), Python(pip), Java(Maven·Gradle), Go, Rust, Ruby 등 주요 패키지 매니저 지원.", "Support for JavaScript (npm, yarn), Python (pip), Java (Maven, Gradle), Go, Rust, and Ruby package managers.", "JavaScript(npm・yarn)、Python(pip)、Java(Maven・Gradle)、Go、Rust、Rubyなど主要なパッケージマネージャに対応。") },
            { title: t("SBOM 이력 관리", "SBOM Version History", "SBOM履歴管理"), body: t("빌드별 SBOM 이력을 저장하고 비교. 특정 배포 버전의 컴포넌트 구성 즉시 조회.", "Stores and compares SBOM history per build. Instantly query component composition for any deployment version.", "ビルド別のSBOM履歴を保存し比較。特定のデプロイバージョンのコンポーネント構成を即時照会。") },
          ]}
        />
      )}

      {activeTab === "vuln" && (
        <SvcPanel
          eyebrow="FEATURE / 02 · AI VULNERABILITY ANALYSIS"
          title={t(<>새로운 CVE가 공개되는 순간<br />AI가 <em>즉시</em> 영향도를 분석합니다.</>, <>The moment a new CVE is disclosed<br />AI <em>immediately</em> analyzes impact.</>, <>新しいCVEが公開された瞬間<br />AIが<em>即時</em>に影響度を分析します。</>)}
          lede={t("단순 CVE 알림에서 그치지 않습니다. Arcus AI SBOM은 신규 CVE가 공개되면 AI가 SBOM에 등록된 컴포넌트와 즉시 대조하고, CVSS·EPSS·실제 공격 여부를 결합한 종합 리스크 점수로 우선순위를 제시합니다.", "More than simple CVE alerts. When a new CVE is disclosed, Arcus AI SBOM's AI immediately cross-references against SBOM components and presents priorities with a composite risk score combining CVSS, EPSS, and active exploitation status.", "単なるCVE通知にとどまりません。Arcus AI SBOMは新規CVEが公開されると、AIがSBOMに登録されたコンポーネントと即座に照合し、CVSS・EPSS・実際の攻撃有無を組み合わせた総合リスクスコアで優先順位を提示します。")}
          points={[
            { title: t("다중 CVE 피드 통합", "Multiple CVE Feed Integration", "複数CVEフィードの統合"), body: t("NVD · OSV · GitHub Advisory · VulnDB를 통합 구독. AI가 피드별 최신 취약점을 SBOM과 자동 대조합니다.", "Integrated subscriptions to NVD, OSV, GitHub Advisory, and VulnDB. AI automatically cross-references latest vulnerabilities with your SBOM.", "NVD · OSV · GitHub Advisory · VulnDBを統合購読。AIがフィードごとの最新脆弱性をSBOMと自動照合します。") },
            { title: t("AI 우선순위 분석", "AI Priority Analysis", "AI優先順位分析"), body: t("CVSS·EPSS·실제 공격 여부를 결합한 AI 종합 리스크 점수. 수백 개의 CVE 중 오늘 처리해야 할 것을 명확히 제시합니다.", "AI composite risk score combining CVSS, EPSS, and active exploitation. Clearly identifies which of hundreds of CVEs require action today.", "CVSS・EPSS・実際の攻撃有無を組み合わせたAI総合リスクスコア。数百のCVEのうち今日対応すべきものを明確に提示します。") },
            { title: t("패치 경로 자동 제안", "Auto Patch Path Suggestion", "パッチ経路の自動提案"), body: t("취약한 버전에서 안전한 최신 버전으로의 업그레이드 경로를 자동 제안합니다. 호환성 영향 분석 포함.", "Automatically suggests upgrade paths from vulnerable to safe versions. Includes compatibility impact analysis.", "脆弱なバージョンから安全な最新バージョンへのアップグレード経路を自動提案します。互換性への影響分析を含む。") },
            { title: t("실시간 알림", "Real-Time Alerts", "リアルタイムアラート"), body: t("사용 중인 컴포넌트에 신규 CVE 공개 시 즉시 알림. CVSS 점수·영향 범위·조치 가이드를 Slack·Email로 전송합니다.", "Immediate alerts when new CVEs are disclosed for components in use. Sends CVSS scores, impact scope, and remediation guidance via Slack and email.", "使用中のコンポーネントに新規CVEが公開された際に即時アラート。CVSSスコア・影響範囲・対応ガイドをSlack・Emailで送信します。") },
          ]}
        />
      )}

      {activeTab === "license" && (
        <SvcPanel
          eyebrow="FEATURE / 03 · LICENSE RISK MANAGEMENT"
          title={t(<>오픈소스 라이선스 위반을<br /><em>사전</em>에 차단합니다.</>, <>Block open-source license violations<br /><em>before</em> they happen.</>, <>オープンソースのライセンス違反を<br /><em>事前</em>に遮断します。</>)}
          lede={t("GPL처럼 소스코드 공개 의무가 있는 라이선스를 상용 제품에 포함하면 법적 분쟁이 발생합니다. Arcus AI SBOM은 500개 이상의 라이선스를 자동 식별하고, 조직 정책과의 충돌을 빌드 단계에서 사전에 차단합니다.", "Including licenses like GPL with source disclosure obligations in commercial products leads to legal disputes. Arcus AI SBOM auto-identifies 500+ licenses and blocks conflicts with organizational policies at the build stage.", "GPLのようにソースコード公開義務のあるライセンスを商用製品に含めると法的紛争が発生します。Arcus AI SBOMは500以上のライセンスを自動識別し、組織ポリシーとの衝突をビルド段階で事前に遮断します。")}
          points={[
            { title: t("500+ 라이선스 자동 식별", "500+ License Auto-Identification", "500以上のライセンス自動識別"), body: t("GPL · LGPL · MIT · Apache · BSD · MPL · CDDL 등 500개 이상 라이선스 자동 식별.", "Auto-identification of 500+ licenses: GPL, LGPL, MIT, Apache, BSD, MPL, CDDL, and more.", "GPL · LGPL · MIT · Apache · BSD · MPL · CDDLなど500以上のライセンスを自動識別。") },
            { title: t("라이선스 정책 설정", "License Policy Configuration", "ライセンスポリシー設定"), body: t("허용·주의·거부 라이선스 목록을 조직 정책으로 관리. Copyleft 포함 빌드 자동 경고.", "Manage allowed, caution, and denied license lists as organizational policies. Auto-warn on builds including copyleft licenses.", "許可・注意・拒否のライセンス一覧を組織ポリシーとして管理。Copyleftを含むビルドを自動警告。") },
            { title: t("충돌 감지", "Conflict Detection", "衝突検知"), body: t("라이선스 간 양립성 충돌 자동 감지. GPL+Apache 2.0 충돌 등 복잡한 케이스까지 커버합니다.", "Automatic detection of license compatibility conflicts, covering complex cases like GPL + Apache 2.0.", "ライセンス間の両立性の衝突を自動検知。GPL+Apache 2.0の衝突など複雑なケースまでカバーします。") },
            { title: t("법무 검토 지원", "Legal Review Support", "法務レビュー支援"), body: t("사용 중인 오픈소스 컴포넌트와 라이선스 전체 목록 리포트 생성. 법무팀 검토를 위한 포맷 제공.", "Generates full reports of open-source components and licenses in use. Provides formats for legal team review.", "使用中のオープンソースコンポーネントとライセンスの全一覧レポートを生成。法務チームのレビュー向けフォーマットを提供。") },
          ]}
        />
      )}

      {activeTab === "gating" && (
        <SvcPanel
          eyebrow="FEATURE / 04 · POLICY-BASED GATING"
          title={t(<>고위험 컴포넌트가 포함된 빌드는<br /><em>자동으로</em> 차단합니다.</>, <>Builds with high-risk components<br />are <em>automatically</em> blocked.</>, <>高リスクのコンポーネントを含むビルドは<br /><em>自動的</em>に遮断します。</>)}
          lede={t("보안 정책을 코드로 정의하고 CI/CD 게이트를 설치합니다. CVSS 점수 임계값, 금지 라이선스, 특정 패키지 버전 등을 위반하는 빌드는 배포 전에 자동으로 차단되고 담당자에게 알림이 전송됩니다.", "Define security policies as code and install CI/CD gates. Builds violating CVSS score thresholds, prohibited licenses, or specific package versions are automatically blocked before deployment and stakeholders are notified.", "セキュリティポリシーをコードとして定義し、CI/CDゲートを設置します。CVSSスコアのしきい値、禁止ライセンス、特定パッケージバージョンなどに違反するビルドはデプロイ前に自動的に遮断され、担当者に通知が送信されます。")}
          points={[
            { title: t("정책 코드화 (Policy as Code)", "Policy as Code", "ポリシーのコード化 (Policy as Code)"), body: t("YAML·JSON으로 허용·거부 정책 정의. Git 버전 관리로 정책 변경 이력을 추적합니다.", "Define allow/deny policies in YAML or JSON. Track policy change history with Git version control.", "YAML・JSONで許可・拒否ポリシーを定義。Gitバージョン管理でポリシー変更履歴を追跡します。") },
            { title: t("자동 빌드 차단", "Automated Build Blocking", "自動ビルド遮断"), body: t("CVSS 임계값 초과, 금지 라이선스 포함, 블랙리스트 패키지 감지 시 빌드 자동 실패 처리.", "Automatic build failure on CVSS threshold exceeded, prohibited license detected, or blacklisted package found.", "CVSSしきい値の超過、禁止ライセンスの混入、ブラックリストパッケージの検知時にビルドを自動的に失敗処理。") },
            { title: t("예외 승인 워크플로우", "Exception Approval Workflow", "例外承認ワークフロー"), body: t("정책 위반 컴포넌트에 대한 예외 승인 워크플로우. 보안팀 검토 후 임시 예외 등록.", "Exception approval workflow for policy-violating components. Temporary exceptions registered after security team review.", "ポリシー違反コンポーネントに対する例外承認ワークフロー。セキュリティチームのレビュー後に一時的な例外を登録。") },
            { title: t("Break Glass 절차", "Break Glass Procedure", "Break Glass手順"), body: t("긴급 배포 시 정책 우회를 위한 Break Glass 절차. 전 과정이 감사 기록으로 남습니다.", "Break Glass procedure for emergency deployments that bypass policy. The entire process is recorded in audit logs.", "緊急デプロイ時にポリシーを迂回するためのBreak Glass手順。全工程が監査記録として残ります。") },
          ]}
        />
      )}

      {activeTab === "report" && (
        <SvcPanel
          eyebrow="FEATURE / 05 · COMPLIANCE REPORTS"
          title={t(<>규제 기관이 요구하는 리포트를<br /><em>원클릭</em>으로 생성합니다.</>, <>Generate regulator-required reports<br />with a <em>single click</em>.</>, <>規制機関が要求するレポートを<br /><em>ワンクリック</em>で生成します。</>)}
          lede={t("미국 대통령령 EO 14028, NTIA SBOM 가이드라인, FDA 의료기기 지침 등 주요 규정이 요구하는 SBOM 및 소프트웨어 구성 리포트를 즉시 생성합니다. 반복적인 수작업 없이 컴플라이언스를 유지합니다.", "Instantly generate SBOM and software composition reports required by key regulations including US Executive Order 14028, NTIA SBOM guidelines, and FDA medical device guidance — maintaining compliance without repetitive manual work.", "米国大統領令EO 14028、NTIA SBOMガイドライン、FDA医療機器指針など主要な規制が要求するSBOMおよびソフトウェア構成レポートを即時に生成します。繰り返しの手作業なしにコンプライアンスを維持します。")}
          points={[
            { title: t("EO 14028 대응", "EO 14028 Compliance", "EO 14028対応"), body: t("미국 대통령령 14028의 소프트웨어 공급망 보안 요건에 맞는 SBOM 리포트 자동 생성.", "Automatic SBOM report generation meeting US Executive Order 14028 software supply chain security requirements.", "米国大統領令14028のソフトウェアサプライチェーンセキュリティ要件に適合したSBOMレポートを自動生成。") },
            { title: t("NTIA 최소 요소 검증", "NTIA Minimum Element Validation", "NTIA最小要素の検証"), body: t("NTIA가 정의한 SBOM 최소 필수 요소(공급자·컴포넌트·버전·관계 등)를 모두 포함하는지 자동 검증합니다.", "Validates all NTIA-defined SBOM minimum required elements: supplier, component, version, relationships, and more.", "NTIAが定義したSBOM最小必須要素(供給者・コンポーネント・バージョン・関係など)をすべて含むか自動検証します。") },
            { title: t("고객사 제출용 리포트", "Customer Submission Reports", "顧客提出用レポート"), body: t("발주사가 요구하는 SBOM 제출 형식에 맞게 즉시 출력합니다.", "Instant export in formats meeting SBOM submission requirements from customers and clients.", "発注元が要求するSBOM提出形式に合わせて即時出力します。") },
            { title: t("감사 이력 완전 보관", "Complete Audit Trail", "監査証跡の完全保管"), body: t("리포트 생성 이력, 배포 버전별 SBOM 스냅샷, 취약점 조치 이력을 전량 보관합니다.", "Complete retention of report generation history, SBOM snapshots per deployment version, and vulnerability remediation history.", "レポート生成履歴、デプロイバージョン別のSBOMスナップショット、脆弱性対応履歴を全量保管します。") },
          ]}
        />
      )}

      <CtaBand
        heading={t(
          <>공급망 리스크를 <em>보이게</em><br />만드는 첫 단계.</>,
          <>The first step to making<br />supply chain risk <em>visible</em>.</>,
          <>サプライチェーンリスクを<em>見える化</em>する<br />最初の一歩。</>,
        )}
        btnLabel={t("SBOM 도입 상담 · 데모 요청", "Request SBOM Demo", "SBOM導入の相談 · デモ依頼")}
      />
      <RelatedBlock items={[
        { href: "/ssq-io/asm", k: "NSHC · 01", h5: "Alpha ASM",      p: t("외부 공격면과 공급망 리스크를 함께 통합 관리합니다.", "Manage external attack surface alongside supply chain risk.", "外部攻撃面とサプライチェーンリスクを併せて統合管理します。") },
        { href: "/ssq-io/hel", k: "NSHC · 03", h5: "PhishGuard HEA", p: t("실전형 피싱 모의훈련으로 임직원 보안 인식을 강화합니다.", "Strengthen employee security awareness with realistic phishing simulations.", "実戦型フィッシング模擬訓練で従業員のセキュリティ意識を強化します。") },
      ]} />
    </>
  );
}
