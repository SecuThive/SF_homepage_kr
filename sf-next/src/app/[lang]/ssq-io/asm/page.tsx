"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, FlowSteps, RelatedBlock, SolutionCrumbs, SolTabsNav, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "discovery" | "monitoring" | "intelligence" | "dashboard";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview",     label: t("개요",             "Overview", "概要") },
    { id: "discovery",    label: t("AI 자산 탐색",     "AI Discovery", "AI資産探索") },
    { id: "monitoring",   label: t("지속 모니터링",    "Monitoring", "継続的モニタリング") },
    { id: "intelligence", label: t("위협 인텔리전스",  "Intelligence", "脅威インテリジェンス") },
    { id: "dashboard",    label: t("리스크 대시보드",  "Dashboard", "リスクダッシュボード") },
  ];

  return (
    <>
      <SiteHeader activeId="ssq-io" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="ARCUS AI ASM" />
          <div className="layout">
            <div>
              <div className="partner-meta">
                <span className="chip solid">NSHC · 01</span>
                <span className="chip">AI PLATFORM</span>
                <span className="chip accent">ATTACK SURFACE MANAGEMENT</span>
              </div>
              <h1>ARCUS AI ASM</h1>
              <p className="sol-hero-sub">{t("AI 기반 외부 공격면 관리(ASM) 플랫폼", "AI-Powered Attack Surface Management", "AIベースの外部攻撃面管理(ASM)プラットフォーム")}</p>
              <p className="lede">
                {t(
                  <>NSHC BAT Insight 기술 기반의 <b>Arcus AI ASM</b>은 외부에서 바라본 조직의 노출 자산을 AI가 자동으로 탐색·분류·분석합니다. 알려진 자산은 물론 Shadow IT, 잊혀진 서브도메인, 유출 코드까지 7일 주기로 전체 재스캔하고 위협을 정량화합니다.</>,
                  <>Built on NSHC BAT Insight technology, <b>Arcus AI ASM</b> uses AI to automatically discover, classify, and analyze your organization&apos;s externally exposed assets — including known infrastructure, Shadow IT, forgotten subdomains, and code leaks — with full rescan every 7 days.</>,
                  <>NSHC BAT Insight技術を基盤とする<b>Arcus AI ASM</b>は、外部から見た組織の露出資産をAIが自動的に探索・分類・分析します。既知の資産はもちろん、Shadow IT、忘れられたサブドメイン、流出コードまで7日周期で全体を再スキャンし、脅威を定量化します。</>,
                )}
              </p>
            </div>
            <div className="sol-hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/arcus-ai/asm/ASM_hero.png" alt={t("Arcus AI ASM 제품 소개", "Arcus AI ASM product", "Arcus AI ASM 製品紹介")} />
            </div>
          </div>
          <div className="sol-stats">
            <div><div className="n">7<sup>days</sup></div><div className="l">{t("전체 재스캔 주기", "Full Rescan Cycle", "全体再スキャン周期")}</div></div>
            <div><div className="n">AI<sup>{t("자동", "Auto", "自動")}</sup></div><div className="l">{t("자산 분류·분석", "Asset Classification", "資産分類・分析")}</div></div>
            <div><div className="n">24<sup>/7</sup></div><div className="l">{t("실시간 알림", "Real-Time Alerts", "リアルタイムアラート")}</div></div>
            <div><div className="n">CTI<sup>{t("연동", "Linked", "連携")}</sup></div><div className="l">{t("위협 인텔리전스", "Threat Intelligence", "脅威インテリジェンス")}</div></div>
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
                  {t(<>공격자의 눈으로 바라본<br />조직의 <em>전체 노출면</em>.</>, <>Your organization&apos;s <em>full exposure</em><br />through an attacker&apos;s eyes.</>, <>攻撃者の目で見た<br />組織の<em>全露出面</em>。</>)}
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                {t("IT 자산 인벤토리에 없는 Shadow IT, 잊혀진 서브도메인, 유출된 코드까지 AI가 지속적으로 발굴하고 리스크를 정량화합니다.", "AI continuously uncovers Shadow IT, forgotten subdomains, and leaked code missing from your IT inventory, and quantifies each risk.", "IT資産インベントリにないShadow IT、忘れられたサブドメイン、流出したコードまでAIが継続的に発掘し、リスクを定量化します。")}
              </p>
            </div></div>
            <FeaturesGrid items={[
              { num: "FEATURE / 01", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>, title: t("AI 외부 자산 탐색", "AI External Asset Discovery", "AI外部資産探索"), body: t("도메인·서브도메인·IP·클라우드 자산을 AI가 자동 탐색. 공식 인벤토리에 없는 Shadow IT까지 전체 가시화.", "AI auto-discovers domains, subdomains, IPs, and cloud assets — full visibility including Shadow IT not in your official inventory.", "ドメイン・サブドメイン・IP・クラウド資産をAIが自動探索。公式インベントリにないShadow ITまで全体を可視化。"), tags: ["AI Discovery", "Shadow IT", "Cloud"] },
              { num: "FEATURE / 02", icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 4v16"/></svg>, title: t("지속 모니터링 & 알림", "Continuous Monitoring & Alerts", "継続的モニタリング & アラート"), body: t("7일 주기 전체 재스캔 + 신규 자산·변경 사항 실시간 알림. 만료 인증서, 새롭게 열린 포트 자동 탐지.", "Full rescan every 7 days plus real-time alerts for new assets and changes. Auto-detection of expiring certs and newly opened ports.", "7日周期の全体再スキャン + 新規資産・変更事項のリアルタイムアラート。期限切れ証明書、新たに開いたポートを自動検知。"), tags: ["7-Day Rescan", "Cert Watch", "Port Scan"] },
              { num: "FEATURE / 03", icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z"/><path d="M9 12l2 2 4-4"/></svg>, title: t("코드 · 시크릿 유출 탐지", "Code & Secret Leak Detection", "コード · シークレット流出検知"), body: t("GitHub·GitLab에서 소스코드·API 키·시크릿 노출을 AI가 자동 탐지. 공개 클라우드 스토리지 버킷 점검 포함.", "AI auto-detects source code, API key, and secret exposure on GitHub and GitLab — including public cloud storage bucket checks.", "GitHub・GitLabでソースコード・APIキー・シークレットの露出をAIが自動検知。公開クラウドストレージバケットの点検を含む。"), tags: ["GitHub", "API Keys", "Secrets"] },
              { num: "FEATURE / 04", icon: <svg viewBox="0 0 24 24"><path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/></svg>, title: t("CTI 연동 위협 분석", "CTI-Linked Threat Analysis", "CTI連携の脅威分析"), body: t("NSHC BAT Intelligence CTI와 연동해 탐지된 자산에 대한 실제 위협 그룹의 TTP와 공격 가능성을 분석합니다.", "Integrates with NSHC BAT Intelligence CTI to analyze TTPs and attack likelihood from real threat groups for discovered assets.", "NSHC BAT Intelligence CTIと連携し、検知された資産に対する実際の脅威グループのTTPと攻撃の可能性を分析します。"), tags: ["CTI", "TTP", "APT"] },
              { num: "FEATURE / 05", icon: <svg viewBox="0 0 24 24"><path d="M4 7l8 5 8-5M4 7v10l8 5 8-5V7"/></svg>, title: t("리스크 정량화 · 대시보드", "Risk Quantification & Dashboard", "リスク定量化 · ダッシュボード"), body: t("자산별 리스크 점수를 AI가 산출하고 트렌드·우선순위·경영진 요약을 대시보드로 제공합니다.", "AI calculates per-asset risk scores and delivers trend, priority, and executive summary dashboards.", "資産別のリスクスコアをAIが算出し、トレンド・優先順位・経営層サマリーをダッシュボードで提供します。"), tags: ["Risk Score", "Dashboard", "Reporting"] },
              { num: "FEATURE / 06", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20"/></svg>, title: t("멀티테넌시 · 엔터프라이즈", "Multi-Tenancy & Enterprise", "マルチテナンシー · エンタープライズ"), body: t("멀티테넌시 기반 데이터 격리로 대규모 기업 환경과 MSSP 운영을 지원합니다. SIEM 연동 가능.", "Multi-tenant data isolation supports large enterprise environments and MSSP operations. SIEM integration available.", "マルチテナンシーベースのデータ隔離で大規模な企業環境とMSSP運用をサポートします。SIEM連携が可能。"), tags: ["Multi-Tenant", "MSSP", "SIEM"] },
            ]} />
          </div>
        </section>
      )}

      {activeTab === "discovery" && (
        <SvcPanel
          eyebrow="FEATURE / 01 · AI EXTERNAL ASSET DISCOVERY"
          title={t(<>등록되지 않은 자산까지<br />AI가 <em>자동</em>으로 발굴합니다.</>, <>AI <em>automatically</em> discovers<br />even unregistered assets.</>, <>登録されていない資産まで<br />AIが<em>自動</em>で発掘します。</>)}
          lede={t("조직이 인지하지 못하는 외부 노출 자산이 실제 침해의 진입점이 됩니다. Arcus AI ASM은 공격자의 관점에서 도메인·서브도메인·클라우드 자산·Shadow IT를 AI가 지속적으로 탐색하고 전체 가시성을 확보합니다.", "Unrecognized external assets are real entry points for breaches. Arcus AI ASM uses AI to continuously discover domains, subdomains, cloud assets, and Shadow IT from an attacker's perspective, establishing complete visibility.", "組織が認識していない外部露出資産が、実際の侵害の入口になります。Arcus AI ASMは攻撃者の視点でドメイン・サブドメイン・クラウド資産・Shadow ITをAIが継続的に探索し、全体の可視性を確保します。")}
          points={[
            { title: t("도메인 · 서브도메인 탐색", "Domain & Subdomain Discovery", "ドメイン · サブドメイン探索"), body: t("루트 도메인 하위의 모든 서브도메인을 AI 기반 DNS 열거·Certificate Transparency·Passive DNS로 탐색합니다.", "AI-based DNS enumeration, Certificate Transparency, and Passive DNS discover all subdomains under root domains.", "ルートドメイン配下のすべてのサブドメインを、AIベースのDNS列挙・Certificate Transparency・Passive DNSで探索します。") },
            { title: t("클라우드 자산 스캔", "Cloud Asset Scanning", "クラウド資産スキャン"), body: t("AWS·Azure·GCP에 노출된 S3 버킷, 공개 VM 인스턴스, 노출된 API Gateway를 자동 탐지합니다.", "Auto-detects exposed S3 buckets, public VM instances, and exposed API Gateways across AWS, Azure, and GCP.", "AWS・Azure・GCPに露出したS3バケット、公開VMインスタンス、露出したAPI Gatewayを自動検知します。") },
            { title: t("Shadow IT 식별", "Shadow IT Identification", "Shadow IT識別"), body: t("IT 팀에 등록되지 않은 SaaS·클라우드·IoT 자산을 AI가 식별하고 관리 대상으로 분류합니다.", "AI identifies and classifies unregistered SaaS, cloud, and IoT assets as manageable targets.", "ITチームに登録されていないSaaS・クラウド・IoT資産をAIが識別し、管理対象として分類します。") },
            { title: t("포트 · 서비스 핑거프린팅", "Port & Service Fingerprinting", "ポート · サービスのフィンガープリンティング"), body: t("공개 포트와 실행 중인 서비스 버전을 핑거프린팅해 알려진 취약점과 자동 매핑합니다.", "Fingerprints open ports and running service versions, automatically mapping to known vulnerabilities.", "公開ポートと実行中のサービスバージョンをフィンガープリンティングし、既知の脆弱性と自動マッピングします。") },
          ]}
        />
      )}

      {activeTab === "monitoring" && (
        <SvcPanel
          eyebrow="FEATURE / 02 · CONTINUOUS MONITORING"
          title={t(<>변화를 놓치지 않는<br /><em>지속적</em> 노출면 감시.</>, <>Continuous exposure monitoring<br />that misses <em>nothing</em>.</>, <>変化を見逃さない<br /><em>継続的</em>な露出面の監視。</>)}
          lede={t("공격 표면은 매일 변합니다. 새로운 서브도메인, 만료 인증서, 열린 포트 하나가 침해의 시작이 됩니다. Arcus AI ASM은 7일 주기 전체 재스캔과 실시간 이벤트 감지로 변화를 즉시 포착합니다.", "Attack surfaces change daily. A new subdomain, an expired certificate, or a single open port can start a breach. Arcus AI ASM captures changes immediately with 7-day full rescans and real-time event detection.", "攻撃表面は毎日変化します。新しいサブドメイン、期限切れの証明書、開いたポート一つが侵害の始まりになります。Arcus AI ASMは7日周期の全体再スキャンとリアルタイムのイベント検知で変化を即座に捉えます。")}
          points={[
            { title: t("7일 주기 전체 재스캔", "7-Day Full Rescan", "7日周期の全体再スキャン"), body: t("전체 자산 인벤토리를 7일 주기로 완전 재스캔해 누락 없이 변경 사항을 반영합니다.", "Complete re-scan of the full asset inventory every 7 days ensures no changes are missed.", "全体の資産インベントリを7日周期で完全に再スキャンし、漏れなく変更事項を反映します。") },
            { title: t("실시간 변경 알림", "Real-Time Change Alerts", "リアルタイム変更アラート"), body: t("신규 자산 등록, 포트 변경, 인증서 만료 예정 등 이벤트 발생 즉시 Slack·Email·SIEM으로 알림을 전송합니다.", "Immediate notifications via Slack, email, and SIEM for new asset registration, port changes, and certificate expiry.", "新規資産の登録、ポート変更、証明書の期限切れ予定などイベント発生後すぐにSlack・Email・SIEMへ通知を送信します。") },
            { title: t("인증서 수명주기 관리", "Certificate Lifecycle Management", "証明書ライフサイクル管理"), body: t("만료 30·14·7일 전 경고 알림과 함께 연결된 호스트명·서비스 정보를 함께 제공합니다.", "Warning alerts at 30, 14, and 7 days before expiry along with linked hostname and service information.", "期限切れの30・14・7日前の警告アラートとともに、紐づくホスト名・サービス情報を提供します。") },
            { title: t("히스토리 & 비교 분석", "History & Differential Analysis", "履歴 & 差分分析"), body: t("스캔 이력을 보관하고 특정 시점 대비 변경된 자산·리스크를 비교 분석합니다.", "Retains scan history and compares changed assets and risks against any specific point in time.", "スキャン履歴を保管し、特定時点と比較して変更された資産・リスクを比較分析します。") },
          ]}
        />
      )}

      {activeTab === "intelligence" && (
        <SvcPanel
          eyebrow="FEATURE / 03 · CTI-LINKED THREAT INTELLIGENCE"
          title={t(<>탐지된 자산에 대한<br />실제 <em>위협 그룹 분석</em>.</>, <>Real <em>threat group analysis</em><br />for discovered assets.</>, <>検知された資産に対する<br />実際の<em>脅威グループ分析</em>。</>)}
          lede={t("단순 자산 목록에 그치지 않습니다. Arcus AI ASM은 NSHC BAT Intelligence CTI와 연동해, 탐지된 각 자산에 대해 실제 위협 그룹이 어떤 TTP로 공격을 시도하는지 분석하고 선제 대응 우선순위를 산출합니다.", "More than an asset list. Arcus AI ASM integrates with NSHC BAT Intelligence CTI to analyze which TTPs real threat groups use against each discovered asset and calculate proactive response priorities.", "単なる資産リストにとどまりません。Arcus AI ASMはNSHC BAT Intelligence CTIと連携し、検知された各資産に対して実際の脅威グループがどのTTPで攻撃を試みるかを分析し、先制対応の優先順位を算出します。")}
          points={[
            { title: t("위협 그룹 TTP 매핑", "Threat Group TTP Mapping", "脅威グループTTPマッピング"), body: t("탐지된 자산의 기술 스택·서비스에 대해 알려진 APT 그룹의 공격 기법(MITRE ATT&CK)을 자동 매핑합니다.", "Automatically maps known APT group attack techniques (MITRE ATT&CK) against the tech stack and services of discovered assets.", "検知された資産の技術スタック・サービスに対して、既知のAPTグループの攻撃手法(MITRE ATT&CK)を自動マッピングします。") },
            { title: t("다크웹 유출 연계", "Dark Web Leak Correlation", "ダークウェブ流出の相関"), body: t("탐지된 도메인·조직명 관련 다크웹 언급·유출 데이터를 자동으로 수집하고 ASM 리스크에 반영합니다.", "Automatically collects dark web mentions and leaked data related to discovered domains and organization names, reflected in ASM risk scores.", "検知されたドメイン・組織名に関連するダークウェブの言及・流出データを自動的に収集し、ASMリスクに反映します。") },
            { title: t("IoC 자동 차단 연동", "IoC Auto-Block Integration", "IoC自動遮断連携"), body: t("위협 인텔리전스에서 수집된 악성 IP·도메인 IoC를 방화벽·SIEM에 자동 피드해 선제 차단합니다.", "Automatically feeds malicious IP and domain IoCs collected from threat intelligence to firewalls and SIEM for proactive blocking.", "脅威インテリジェンスから収集した悪意のあるIP・ドメインIoCをファイアウォール・SIEMに自動フィードし、先制遮断します。") },
            { title: t("공격 가능성 점수", "Attack Likelihood Score", "攻撃可能性スコア"), body: t("자산의 노출 수준, 탐지된 취약점, 위협 그룹 활동을 결합한 AI 공격 가능성 점수를 산출합니다.", "AI calculates an attack likelihood score combining asset exposure level, detected vulnerabilities, and threat group activity.", "資産の露出レベル、検知された脆弱性、脅威グループの活動を組み合わせたAI攻撃可能性スコアを算出します。") },
          ]}
        />
      )}

      {activeTab === "dashboard" && (
        <SvcPanel
          eyebrow="FEATURE / 04 · RISK DASHBOARD & REPORTING"
          title={t(<>경영진부터 실무팀까지<br /><em>한눈에</em> 보이는 리스크.</>, <>Risk visibility for everyone —<br />executives to <em>operations</em>.</>, <>経営層から実務チームまで<br /><em>一目で</em>見えるリスク。</>)}
          lede={t("수천 개의 자산과 이벤트를 그대로 보여주는 것은 정보 과부하입니다. Arcus AI ASM의 대시보드는 AI가 우선순위를 정렬해 오늘 당장 처리해야 할 항목을 명확히 보여주고, 경영진·규제 기관용 리포트를 자동으로 생성합니다.", "Dumping thousands of assets and events is information overload. Arcus AI ASM's dashboard uses AI to rank priorities and clearly shows what needs attention today, while automatically generating reports for executives and regulators.", "数千の資産とイベントをそのまま見せることは情報過多です。Arcus AI ASMのダッシュボードはAIが優先順位を整列し、今すぐ処理すべき項目を明確に示すとともに、経営層・規制機関向けのレポートを自動的に生成します。")}
          points={[
            { title: t("AI 우선순위 대시보드", "AI Priority Dashboard", "AI優先順位ダッシュボード"), body: t("리스크 점수·심각도·변경 이력을 결합한 AI 우선순위 정렬로 오늘 처리해야 할 항목을 명확히 제시합니다.", "AI priority ranking combining risk score, severity, and change history clearly presents what requires action today.", "リスクスコア・深刻度・変更履歴を組み合わせたAI優先順位の整列で、今日対応すべき項目を明確に提示します。") },
            { title: t("트렌드 & 개선 추적", "Trend & Improvement Tracking", "トレンド & 改善追跡"), body: t("시간 경과에 따른 공격 표면 변화와 리스크 감소 추이를 시각화합니다. 보안 투자 효과를 정량화합니다.", "Visualizes changes in attack surface and risk reduction trends over time. Quantifies the effect of security investments.", "時間の経過に伴う攻撃表面の変化とリスク低減の推移を可視化します。セキュリティ投資の効果を定量化します。") },
            { title: t("경영진 요약 보고서", "Executive Summary Reports", "経営層サマリーレポート"), body: t("월간·분기별 공격 표면 현황, 리스크 감소율, 주요 발견 사항을 경영진이 이해할 수 있는 형태로 자동 생성합니다.", "Auto-generates monthly and quarterly attack surface status, risk reduction rates, and key findings in executive-readable format.", "月次・四半期別の攻撃表面の状況、リスク低減率、主要な発見事項を経営層が理解できる形で自動生成します。") },
            { title: t("SIEM · SOAR 연동", "SIEM & SOAR Integration", "SIEM · SOAR連携"), body: t("발견된 자산·이벤트·리스크 데이터를 SIEM·SOAR에 자동 연동해 기존 보안 운영 워크플로우에 통합합니다.", "Automatically feeds discovered assets, events, and risk data to SIEM and SOAR, integrating into existing security operations workflows.", "発見された資産・イベント・リスクデータをSIEM・SOARに自動連携し、既存のセキュリティ運用ワークフローに統合します。") },
          ]}
        />
      )}

      <CtaBand
        heading={t(<>공격자보다 먼저<br />노출면을 <em>파악</em>하세요.</>, <>Know your exposure<br />before the <em>attacker</em> does.</>, <>攻撃者よりも先に<br />露出面を<em>把握</em>してください。</>)}
        btnLabel={t("ASM 도입 문의 · 데모 요청", "Request ASM Demo", "ASM導入のお問い合わせ · デモ依頼")}
      />
      <RelatedBlock items={[
        { href: "/ssq-io/sbom", k: "NSHC · 02", h5: "Omega SBOM",     p: t("소프트웨어 공급망 리스크와 CVE를 통합 관리합니다.", "Manage software supply chain risk and CVEs in one place.", "ソフトウェアサプライチェーンのリスクとCVEを統合管理します。") },
        { href: "/ssq-io/hel",  k: "NSHC · 03", h5: "PhishGuard HEA", p: t("실전형 피싱 모의훈련으로 임직원 보안 인식을 강화합니다.", "Strengthen employee security awareness with realistic phishing simulations.", "実戦型フィッシング模擬訓練で従業員のセキュリティ意識を強化します。") },
      ]} />
    </>
  );
}
