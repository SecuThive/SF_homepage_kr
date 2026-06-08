"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, RelatedBlock, SolutionCrumbs, SpecTable, SolTabsNav, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "ingest" | "detect" | "cti" | "soar" | "storage" | "saas";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview", label: t("개요",         "Overview", "概要") },
    { id: "ingest",   label: t("로그 수집",    "Log Ingestion", "ログ収集") },
    { id: "detect",   label: t("위협 탐지",    "Threat Detection", "脅威検知") },
    { id: "cti",      label: t("위협 인텔리전스", "Threat Intel", "脅威インテリジェンス") },
    { id: "soar",     label: t("Cloud SOAR",  "Cloud SOAR", "Cloud SOAR") },
    { id: "storage",  label: t("장기 보관",    "Long-Term Storage", "長期保管") },
    { id: "saas",     label: t("SaaS 네이티브", "SaaS Native", "SaaSネイティブ") },
  ];

  return (
    <>
      <SiteHeader activeId="solutions" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="SUMO LOGIC" />
          <div className="layout">
            <div>
              <div className="partner-meta">
                <span className="chip solid">PORTFOLIO · 04</span>
                <span className="chip">TECHNOLOGY PARTNER</span>
                <span className="chip accent">SUMO LOGIC · CLOUD SIEM</span>
              </div>
              <h1>
                {t(<>클라우드의 모든 <em>신호</em>를<br />하나의 화면으로.</>, <>Every cloud <em>signal</em><br />on a single screen.</>, <>クラウドのすべての<em>シグナル</em>を<br />一つの画面に。</>)}
              </h1>
              <p className="lede">
                {t(
                  <>멀티클라우드·SaaS 로그를 단일 SIEM으로 통합하는 <b>Cloud Native SaaS SIEM</b>. 위협 인텔리전스 기반 자동 탐지·대응을 지원합니다.</>,
                  <>A <b>Cloud Native SaaS SIEM</b> that unifies multi-cloud and SaaS logs into a single platform. Supports automated threat detection and response based on threat intelligence.</>,
                  <>マルチクラウド・SaaSのログを単一のSIEMに統合する<b>Cloud Native SaaS SIEM</b>。脅威インテリジェンスに基づく自動検知・対応をサポートします。</>,
                )}
              </p>
            </div>
            <div className="sol-visual sl-visual">
              <span className="corner tl" style={{ color: "rgba(255,255,255,.4)" }}>SUMO · LIVE DETECTION</span>
              <span className="status"><span className="sd"></span>12 ALERTS</span>
              <div className="sl-kpis">
                <div className="sl-kpi"><div className="n">4.2B</div><div className="l">Events/day</div></div>
                <div className="sl-kpi ok"><div className="n">862</div><div className="l">Rules active</div></div>
                <div className="sl-kpi crit"><div className="n">12</div><div className="l">Critical</div></div>
                <div className="sl-kpi"><div className="n">99.9%</div><div className="l">Uptime</div></div>
              </div>
              <div className="sl-stream">
                <div className="sl-row"><span className="t">14:02:11</span><span className="m">AWS IAM <b>anomalous role assumption</b> · us-east-1</span><span className="lvl err">HIGH</span></div>
                <div className="sl-row"><span className="t">14:02:04</span><span className="m">Okta <b>impossible travel</b> · tokyo → paris</span><span className="lvl warn">MED</span></div>
                <div className="sl-row"><span className="t">14:01:58</span><span className="m">CloudTrail · s3:DeleteBucket blocked</span><span className="lvl ok">OK</span></div>
                <div className="sl-row"><span className="t">14:01:42</span><span className="m">GCP · new admin key created</span><span className="lvl warn">MED</span></div>
              </div>
              <span className="tag" style={{ color: "rgba(255,255,255,.4)" }}>INGEST · DETECT · INVESTIGATE · RESPOND</span>
            </div>
          </div>
          <div className="sol-stats">
            <div><div className="n">4.2B<sup>/day</sup></div><div className="l">Events Ingest</div></div>
            <div><div className="n">700<sup>+</sup></div><div className="l">Native Integrations</div></div>
            <div><div className="n">MITRE<sup>®</sup></div><div className="l">ATT&amp;CK Mapped</div></div>
            <div><div className="n">SaaS<sup>native</sup></div><div className="l">No Infra to Manage</div></div>
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
                    {t(<>분산된 로그를<br /><em>지능</em>으로.</>, <>Scattered logs<br />turned into <em>intelligence</em>.</>, <>分散したログを<br /><em>インテリジェンス</em>へ。</>)}
                  </h2>
                </div>
                <p className="section-lede" data-reveal data-reveal-delay="1">
                  {t("수집부터 탐지, 조사, 대응까지 단일 플랫폼에서. 인프라 관리 부담 없이 SOC 역량만 집중할 수 있습니다.", "From ingestion to detection, investigation, and response — all on a single platform. Focus SOC capabilities without infrastructure overhead.", "収集から検知、調査、対応まで単一のプラットフォームで。インフラ管理の負担なしにSOCの能力だけに集中できます。")}
                </p>
              </div></div>
              <FeaturesGrid items={[
                { num: "FEATURE / 01", icon: <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10" /></svg>, title: t("통합 로그 수집", "Unified Log Ingestion", "統合ログ収集"), body: t("AWS·Azure·GCP·SaaS·온프레미스까지 700+ 네이티브 커넥터.", "AWS · Azure · GCP · SaaS · On-Premises — 700+ native connectors.", "AWS・Azure・GCP・SaaS・オンプレミスまで700以上のネイティブコネクタ。"), tags: ["Multi-Cloud", "SaaS"] },
                { num: "FEATURE / 02", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>, title: t("자동 위협 탐지", "Automated Threat Detection", "自動脅威検知"), body: t("MITRE ATT&CK 매핑 룰 + Behavioral Analytics 기반 이상 탐지.", "MITRE ATT&CK-mapped rules + Behavioral Analytics for anomaly detection.", "MITRE ATT&CKマッピングルール + Behavioral Analyticsベースの異常検知。"), tags: ["UEBA", "ATT&CK"] },
                { num: "FEATURE / 03", icon: <svg viewBox="0 0 24 24"><path d="M5 4v16l7-4 7 4V4z" /></svg>, title: t("위협 인텔리전스", "Threat Intelligence", "脅威インテリジェンス"), body: t("글로벌 CTI 피드 실시간 반영. IoC 자동 매칭·알람.", "Global CTI feeds applied in real time. Automatic IoC matching and alerting.", "グローバルCTIフィードをリアルタイム反映。IoCの自動マッチング・アラート。"), tags: ["CTI Feed"] },
                { num: "FEATURE / 04", icon: <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>, title: t("Cloud SOAR", "Cloud SOAR", "Cloud SOAR"), body: t("탐지-조사-대응 플레이북 자동화. Slack·Jira·ServiceNow 연동.", "Automated playbooks for detection-investigation-response. Slack · Jira · ServiceNow integration.", "検知-調査-対応のプレイブックを自動化。Slack・Jira・ServiceNowと連携。"), tags: ["Playbook", "Auto-Response"] },
                { num: "FEATURE / 05", icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M8 10h8M8 14h5" /></svg>, title: t("장기 보관 · 감사", "Long-Term Storage & Audit", "長期保管 · 監査"), body: t("원시 로그를 무제한·저렴한 비용으로 장기 보관. 감사 대응.", "Unlimited, cost-effective long-term raw log storage. Audit-ready.", "生ログを無制限・低コストで長期保管。監査対応。"), tags: ["Long-term", "Compliance"] },
                { num: "FEATURE / 06", icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" /></svg>, title: t("SaaS 네이티브", "SaaS Native", "SaaSネイティブ"), body: t("관리할 인프라 없음. 엘라스틱 스케일링·자동 패치.", "No infrastructure to manage. Elastic scaling and automatic patching.", "管理すべきインフラなし。エラスティックスケーリング・自動パッチ。"), tags: ["No-Ops", "Elastic"] },
              ]} />
            </div>
          </section>
          <section className="specs">
            <div className="container">
              <div className="sec-heading"><div className="inner"><div data-reveal>
                <div className="eyebrow">PRODUCT SPEC</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>{t("주요 제품 스펙.", "Product Specifications.", "主要な製品スペック。")}</h2>
              </div></div></div>
              <SpecTable rows={[
                [t("배포", "Deployment", "デプロイ"), <><b>SaaS Only</b> — Cloud Flex · Cloud Flex Credits · Continuous {t("티어", "Tier", "ティア")}</>],
                [t("데이터 소스", "Data Sources", "データソース"), "AWS · Azure · GCP · Kubernetes · Okta · MS 365 · Salesforce — 700+"],
                [t("탐지", "Detection", "検知"), t("룰 기반 + UEBA + 글로벌 CTI 피드 + 사용자 정의 쿼리(SumoQL)", "Rule-based + UEBA + Global CTI feeds + Custom queries (SumoQL)", "ルールベース + UEBA + グローバルCTIフィード + ユーザー定義クエリ(SumoQL)")],
                [t("보관", "Retention", "保管"), t("Hot · Continuous · Frequent 계층 구조 — 수 개월~수 년 저장", "Hot · Continuous · Frequent tiers — months to years of retention", "Hot · Continuous · Frequentの階層構造 — 数ヶ月~数年の保存")],
                [t("규정", "Compliance", "規制"), "SOC 2 Type II · ISO 27001 · FedRAMP · HIPAA · PCI-DSS"],
                [t("SAFESQUARE 지원", "SAFESQUARE Support", "SAFESQUAREサポート"), t("국내 라이선스 계약 · 초기 설계 · 룰 커스터마이징 · 24/7 한국어 SOC 지원", "Local licensing · Initial design · Rule customization · 24/7 Korean SOC support", "国内ライセンス契約 · 初期設計 · ルールのカスタマイズ · 24/7韓国語SOCサポート")],
              ]} />
            </div>
          </section>
        </>
      )}

      {activeTab === "ingest" && (
        <SvcPanel
          eyebrow="FEATURE / 01 · UNIFIED LOG INGESTION"
          title={t(<>모든 클라우드와 SaaS의 로그를<br /><em>하나</em>로.</>, <>All cloud and SaaS logs<br />into <em>one</em>.</>, <>すべてのクラウドとSaaSのログを<br /><em>一つ</em>に。</>)}
          lede={t("AWS, Azure, GCP, Kubernetes, Okta, Microsoft 365, Salesforce 등 700개 이상의 네이티브 커넥터로 멀티클라우드·하이브리드 환경의 모든 로그를 단일 SIEM으로 통합합니다.", "700+ native connectors for AWS, Azure, GCP, Kubernetes, Okta, Microsoft 365, Salesforce, and more — unifying all logs from multi-cloud and hybrid environments into a single SIEM.", "AWS、Azure、GCP、Kubernetes、Okta、Microsoft 365、Salesforceなど700以上のネイティブコネクタで、マルチクラウド・ハイブリッド環境のすべてのログを単一のSIEMに統合します。")}
          points={[
            { title: t("700+ 네이티브 커넥터", "700+ Native Connectors", "700以上のネイティブコネクタ"), body: t("주요 클라우드·SaaS·온프레미스 플랫폼을 위한 사전 구성 커넥터. 코딩 없이 몇 분 내 연결.", "Pre-built connectors for major cloud, SaaS, and on-premises platforms. Connected in minutes with no coding.", "主要なクラウド・SaaS・オンプレミスプラットフォーム向けの事前構成コネクタ。コーディングなしで数分以内に接続。") },
            { title: t("스트리밍 수집", "Streaming Ingestion", "ストリーミング収集"), body: t("초당 수백만 이벤트를 실시간 수집. 지연 없는 탐지를 위한 스트리밍 파이프라인.", "Real-time ingestion of millions of events per second. Streaming pipeline for zero-delay detection.", "毎秒数百万イベントをリアルタイム収集。遅延のない検知のためのストリーミングパイプライン。") },
            { title: t("데이터 정규화", "Data Normalization", "データ正規化"), body: t("다양한 소스의 로그를 공통 스키마로 자동 정규화. 소스별 파서 자동 적용.", "Logs from diverse sources automatically normalized to a common schema. Source-specific parsers applied automatically.", "多様なソースのログを共通スキーマに自動正規化。ソース別のパーサーを自動適用。") },
            { title: t("온프레미스 수집기", "On-Premises Collector", "オンプレミスコレクター"), body: t("내부망 로그를 수집하는 경량 수집기 제공. 방화벽·서버·IDS 로그 포함.", "Lightweight collector for on-premises log ingestion. Covers firewall, server, and IDS logs.", "内部ネットワークのログを収集する軽量コレクターを提供。ファイアウォール・サーバー・IDSログを含む。") },
          ]}
          imgSrc="/assets/sumologic/ingest.png" imgAlt="통합 로그 수집 구조도"
        />
      )}
      {activeTab === "detect" && (
        <SvcPanel
          eyebrow="FEATURE / 02 · AUTOMATED THREAT DETECTION"
          title={t(<>MITRE ATT&CK 기반<br /><em>자동</em> 위협 탐지.</>, <>MITRE ATT&CK-based<br /><em>automated</em> threat detection.</>, <>MITRE ATT&CKベースの<br /><em>自動</em>脅威検知。</>)}
          lede={t("사전 구축된 800여 개의 MITRE ATT&CK 매핑 탐지 룰과 행위 분석(UEBA) 엔진이 복합 공격 패턴을 자동으로 탐지합니다. SOC 분석가가 룰을 직접 작성·튜닝할 수도 있습니다.", "800+ pre-built MITRE ATT&CK-mapped detection rules and a behavioral analysis (UEBA) engine automatically detect complex attack patterns. SOC analysts can also write and tune rules directly.", "事前構築された800以上のMITRE ATT&CKマッピング検知ルールと行動分析(UEBA)エンジンが、複合的な攻撃パターンを自動的に検知します。SOCアナリストがルールを直接作成・チューニングすることも可能です。")}
          points={[
            { title: t("800+ 사전 구성 룰", "800+ Pre-Built Rules", "800以上の事前構成ルール"), body: t("MITRE ATT&CK 전략·기법에 매핑된 탐지 룰. 구매 즉시 활성화. 산업별 패키지 제공.", "Detection rules mapped to MITRE ATT&CK tactics and techniques. Activated immediately on purchase. Industry-specific packages available.", "MITRE ATT&CKの戦術・技法にマッピングされた検知ルール。購入後すぐに有効化。業界別パッケージを提供。") },
            { title: t("UEBA (행위 분석)", "UEBA (Behavioral Analytics)", "UEBA (行動分析)"), body: t("사용자·엔티티의 정상 행위 베이스라인 구축 후 이상 행위 자동 탐지. Impossible Travel, 권한 급증 등.", "Builds normal behavior baselines for users and entities, then auto-detects anomalies — impossible travel, privilege spikes, and more.", "ユーザー・エンティティの正常行動のベースラインを構築した後、異常行動を自動検知。Impossible Travel、権限の急増など。") },
            { title: t("커스텀 쿼리 (SumoQL)", "Custom Queries (SumoQL)", "カスタムクエリ (SumoQL)"), body: t("SumoQL 언어로 맞춤 탐지 로직 작성. 조직 고유의 위협 시나리오에 대응.", "Write custom detection logic using SumoQL. Addresses organization-specific threat scenarios.", "SumoQL言語でカスタム検知ロジックを作成。組織固有の脅威シナリオに対応。") },
            { title: t("Cloud SIEM 상관 분석", "Cloud SIEM Correlation", "Cloud SIEM相関分析"), body: t("단일 경보를 넘어 복합 이벤트를 연결해 공격 체인을 자동 재구성. 경보 피로 최소화.", "Correlates complex events beyond individual alerts to automatically reconstruct attack chains. Minimizes alert fatigue.", "単一のアラートを超えて複合イベントを結びつけ、攻撃チェーンを自動再構成。アラート疲労を最小化。") },
          ]}
          imgSrc="/assets/sumologic/detect.png" imgAlt="자동 위협 탐지 구조도"
        />
      )}
      {activeTab === "cti" && (
        <SvcPanel
          eyebrow="FEATURE / 03 · THREAT INTELLIGENCE"
          title={t(<>글로벌 위협 피드를<br /><em>실시간</em>으로 반영합니다.</>, <>Global threat feeds applied<br />in <em>real time</em>.</>, <>グローバルな脅威フィードを<br /><em>リアルタイム</em>で反映します。</>)}
          lede={t("전 세계 수백만 개의 IoC를 실시간으로 SIEM 탐지 룰에 반영합니다. 악성 IP·도메인·파일 해시가 로그에 등장하는 순간 자동으로 알람을 발생시킵니다.", "Millions of global IoCs reflected in SIEM detection rules in real time. Alerts are automatically triggered the moment malicious IPs, domains, or file hashes appear in logs.", "世界中の数百万のIoCをリアルタイムでSIEM検知ルールに反映します。悪意のあるIP・ドメイン・ファイルハッシュがログに現れた瞬間に自動的にアラートを発生させます。")}
          points={[
            { title: t("글로벌 CTI 피드", "Global CTI Feeds", "グローバルCTIフィード"), body: t("업계 선도 위협 인텔리전스 공급자의 피드를 실시간 구독. 수백만 IoC 자동 업데이트.", "Real-time subscriptions to feeds from leading threat intelligence providers. Millions of IoCs updated automatically.", "業界をリードする脅威インテリジェンス提供企業のフィードをリアルタイム購読。数百万のIoCを自動更新。") },
            { title: t("IoC 자동 매칭", "Automatic IoC Matching", "IoC自動マッチング"), body: t("수집된 로그에서 악성 IP·도메인·파일 해시를 자동 대조. 탐지 즉시 고우선순위 알람.", "Automatically cross-references collected logs against malicious IPs, domains, and file hashes. Immediate high-priority alerts on match.", "収集したログから悪意のあるIP・ドメイン・ファイルハッシュを自動照合。検知後すぐに高優先度アラート。") },
            { title: t("NSHC CTI 연동", "NSHC CTI Integration", "NSHC CTI連携"), body: t("SAFESQUARE 파트너 NSHC의 한국·동아시아 특화 위협 피드와 연동해 지역 APT 탐지 강화.", "Enhanced regional APT detection via integration with SAFESQUARE partner NSHC's Korea and East Asia-specialized threat feeds.", "SAFESQUAREパートナーNSHCの韓国・東アジア特化の脅威フィードと連携し、地域APT検知を強化。") },
            { title: t("위협 컨텍스트 강화", "Threat Context Enrichment", "脅威コンテキストの強化"), body: t("탐지된 IoC에 공격자 그룹·캠페인·TTP 컨텍스트 자동 부가. 분석 시간 단축.", "Automatically enriches detected IoCs with attacker group, campaign, and TTP context, reducing analysis time.", "検知されたIoCに攻撃者グループ・キャンペーン・TTPのコンテキストを自動付加。分析時間を短縮。") },
          ]}
          imgSrc="/assets/sumologic/cti.png" imgAlt="위협 인텔리전스 연동 구조도"
        />
      )}
      {activeTab === "soar" && (
        <SvcPanel
          eyebrow="FEATURE / 04 · CLOUD SOAR"
          title={t(<>탐지부터 대응까지,<br /><em>플레이북</em>으로 자동화.</>, <>From detection to response —<br />automated with <em>playbooks</em>.</>, <>検知から対応まで、<br /><em>プレイブック</em>で自動化。</>)}
          lede={t("반복적인 대응 절차를 플레이북으로 자동화해 SOC 분석가의 평균 대응 시간(MTTR)을 단축합니다. Slack·Jira·ServiceNow 등 협업 도구와 연동해 조직 전체의 인시던트 대응을 하나의 워크플로우로 통합합니다.", "Automates repetitive response procedures with playbooks, reducing SOC Mean Time to Respond (MTTR). Integrates with Slack, Jira, ServiceNow, and other collaboration tools to unify incident response across the organization.", "繰り返しの対応手順をプレイブックで自動化し、SOCアナリストの平均対応時間(MTTR)を短縮します。Slack・Jira・ServiceNowなどのコラボレーションツールと連携し、組織全体のインシデント対応を一つのワークフローに統合します。")}
          points={[
            { title: t("자동화 플레이북", "Automated Playbooks", "自動化プレイブック"), body: t("탐지 유형별 대응 절차를 플레이북으로 코딩. 알람 발생 즉시 자동 실행.", "Response procedures for each detection type coded as playbooks. Automatically executed immediately on alert.", "検知タイプ別の対応手順をプレイブックとしてコード化。アラート発生後すぐに自動実行。") },
            { title: t("협업 도구 연동", "Collaboration Tool Integration", "コラボレーションツール連携"), body: t("Slack·Jira·ServiceNow·PagerDuty 연동. 인시던트 티켓 자동 생성·할당·추적.", "Slack, Jira, ServiceNow, and PagerDuty integration. Automatic incident ticket creation, assignment, and tracking.", "Slack・Jira・ServiceNow・PagerDutyと連携。インシデントチケットの自動生成・割り当て・追跡。") },
            { title: t("인시던트 타임라인", "Incident Timeline", "インシデントタイムライン"), body: t("탐지부터 대응 완료까지 모든 액션을 타임라인으로 자동 기록. 사후 분석·보고에 활용.", "All actions from detection to resolution automatically recorded on a timeline. Used for post-incident analysis and reporting.", "検知から対応完了までのすべてのアクションをタイムラインとして自動記録。事後分析・報告に活用。") },
            { title: t("케이스 관리", "Case Management", "ケース管理"), body: t("관련 경보를 케이스로 묶어 통합 관리. 분석가별 워크로드 분배 및 에스컬레이션.", "Groups related alerts into cases for integrated management. Analyst workload distribution and escalation paths.", "関連アラートをケースにまとめて統合管理。アナリスト別のワークロード分配およびエスカレーション。") },
          ]}
          imgSrc="/assets/sumologic/soar.png" imgAlt="Cloud SOAR 플레이북 구조도"
        />
      )}
      {activeTab === "storage" && (
        <SvcPanel
          eyebrow="FEATURE / 05 · LONG-TERM STORAGE & AUDIT"
          title={t(<>로그는 자산입니다.<br /><em>장기 보관</em>이 핵심입니다.</>, <>Logs are assets —<br /><em>long-term retention</em> is key.</>, <>ログは資産です。<br /><em>長期保管</em>が鍵です。</>)}
          lede={t("원시 로그를 무제한에 가깝게, 낮은 비용으로 장기 보관합니다. Hot·Continuous·Frequent 계층 구조로 자주 접근하는 최신 데이터는 빠르게, 오래된 데이터는 저렴하게 유지합니다.", "Retain raw logs at near-unlimited scale at low cost. Hot, Continuous, and Frequent storage tiers keep recent frequently-accessed data fast and older data economical.", "生ログをほぼ無制限に、低コストで長期保管します。Hot・Continuous・Frequentの階層構造で、頻繁にアクセスする最新データは高速に、古いデータは安価に維持します。")}
          points={[
            { title: t("계층형 스토리지", "Tiered Storage", "階層型ストレージ"), body: t("Hot(즉시 검색) · Continuous(수일 내) · Frequent(저비용 장기) 3단계 자동 계층화.", "Three automatic tiers: Hot (instant search) · Continuous (within days) · Frequent (low-cost long-term).", "Hot(即時検索) · Continuous(数日以内) · Frequent(低コスト長期)の3段階を自動階層化。") },
            { title: t("무제한 보관", "Unlimited Retention", "無制限保管"), body: t("저장 용량 상한 없음. 규정에서 요구하는 기간만큼 보관. PCI-DSS 1년, HIPAA 6년 등.", "No storage cap. Retain for as long as regulations require — 1 year for PCI-DSS, 6 years for HIPAA, and more.", "保存容量の上限なし。規制が要求する期間だけ保管。PCI-DSS 1年、HIPAA 6年など。") },
            { title: t("고속 검색", "High-Speed Search", "高速検索"), body: t("수 년치 로그도 SumoQL로 몇 초 내 검색. 인시던트 조사·포렌식 분석 시간 단축.", "Search years of logs in seconds with SumoQL. Dramatically reduces incident investigation and forensic analysis time.", "数年分のログもSumoQLで数秒以内に検索。インシデント調査・フォレンジック分析の時間を短縮。") },
            { title: t("감사 대응", "Audit Compliance", "監査対応"), body: t("SOC 2 · ISO 27001 · FedRAMP · HIPAA · PCI-DSS 요건의 로그 보관·접근 제어 자동 충족.", "Automatically satisfies log retention and access control requirements for SOC 2, ISO 27001, FedRAMP, HIPAA, and PCI-DSS.", "SOC 2 · ISO 27001 · FedRAMP · HIPAA · PCI-DSS要件のログ保管・アクセス制御を自動的に充足。") },
          ]}
          imgSrc="/assets/sumologic/storage.png" imgAlt="장기 보관 및 계층 스토리지 구조도"
        />
      )}
      {activeTab === "saas" && (
        <SvcPanel
          eyebrow="FEATURE / 06 · SAAS NATIVE"
          title={t(<>인프라 없이,<br /><em>SOC</em>에만 집중합니다.</>, <>No infrastructure —<br />focus purely on <em>SOC</em>.</>, <>インフラなしで、<br /><em>SOC</em>だけに集中します。</>)}
          lede={t("서버·스토리지·네트워크를 직접 관리할 필요가 없습니다. Sumo Logic은 완전한 SaaS 플랫폼으로, 보안 팀이 탐지·조사·대응에만 집중할 수 있는 환경을 제공합니다.", "No need to manage servers, storage, or networking. Sumo Logic is a fully managed SaaS platform that lets security teams focus exclusively on detection, investigation, and response.", "サーバー・ストレージ・ネットワークを自前で管理する必要はありません。Sumo Logicは完全なSaaSプラットフォームとして、セキュリティチームが検知・調査・対応だけに集中できる環境を提供します。")}
          points={[
            { title: t("완전 관리형 서비스", "Fully Managed Service", "フルマネージドサービス"), body: t("인프라 프로비저닝·패치·업그레이드를 Sumo Logic이 처리. 보안 팀은 위협 탐지에만 집중.", "Sumo Logic handles infrastructure provisioning, patching, and upgrades. Security teams focus only on threat detection.", "インフラのプロビジョニング・パッチ・アップグレードをSumo Logicが処理。セキュリティチームは脅威検知だけに集中。") },
            { title: t("엘라스틱 스케일링", "Elastic Scaling", "エラスティックスケーリング"), body: t("이벤트 볼륨 급증 시 자동 확장. 스케일 업·다운에 따른 성능 저하 없음.", "Automatically scales on event volume spikes. No performance degradation with scale-up or scale-down.", "イベントボリュームの急増時に自動拡張。スケールアップ・ダウンによる性能低下なし。") },
            { title: t("99.9% 가용성 SLA", "99.9% Availability SLA", "99.9%可用性SLA"), body: t("엔터프라이즈급 SLA. 재해복구·이중화 구성 기본 포함. 다운타임 없는 업그레이드.", "Enterprise-grade SLA with built-in disaster recovery and redundancy. Zero-downtime upgrades.", "エンタープライズ級のSLA。災害復旧・二重化構成を標準で含む。ダウンタイムのないアップグレード。") },
            { title: t("빠른 도입", "Rapid Deployment", "迅速な導入"), body: t("에이전트 배포 후 수 시간 내 운영 시작. 온프레미스 SIEM 대비 90% 빠른 초기 구축.", "Operational within hours of agent deployment. 90% faster initial setup compared to on-premises SIEM.", "エージェント配備後、数時間以内に運用開始。オンプレミスSIEMと比べて90%速い初期構築。") },
          ]}
          imgSrc="/assets/sumologic/saas.png" imgAlt="SaaS 네이티브 아키텍처 구조도"
        />
      )}

      <CtaBand
        heading={t(<>로그는 많을수록<br /><em>강점</em>이 되어야 합니다.</>, <>More logs should mean<br />more <em>strength</em>.</>, <>ログは多いほど<br /><em>強み</em>になるべきです。</>)}
        btnLabel={t("Cloud SIEM 상담", "Request Cloud SIEM Consultation", "Cloud SIEMの相談")}
      />
      <RelatedBlock items={[
        { href: "/solutions/nshc",      k: "PORTFOLIO · 01", h5: t("NSHC · CTI",           "NSHC · CTI",              "NSHC · CTI"),              p: t("CTI 피드를 SIEM 탐지 룰로.", "Feed CTI into SIEM detection rules.", "CTIフィードをSIEM検知ルールへ。") },
        { href: "/ssq-co/dbsafer", k: "PORTFOLIO · 06", h5: t("피앤피시큐어 · 접근제어", "PnP Secure · Access Control", "ピーアンドピーセキュア · アクセス制御"), p: t("DB 접근 로그를 SIEM에.", "Send DB access logs to SIEM.", "DBアクセスログをSIEMへ。") },
      ]} />
    </>
  );
}
