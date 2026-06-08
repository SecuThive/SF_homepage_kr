"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, RelatedBlock, SolutionCrumbs, SolTabsNav, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "campaign" | "simulation" | "report" | "compliance";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview",   label: t("개요",            "Overview", "概要") },
    { id: "campaign",   label: t("캠페인 운영",     "Campaign", "キャンペーン運用") },
    { id: "simulation", label: t("시뮬레이션 훈련", "Simulation", "シミュレーション訓練") },
    { id: "report",     label: t("리포트 & 분석",   "Reports", "レポート & 分析") },
    { id: "compliance", label: t("컴플라이언스",    "Compliance", "コンプライアンス") },
  ];

  return (
    <>
      <SiteHeader activeId="ssq-io" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="PHISHGUARD HEA" />
          <div className="layout" style={{ minHeight: "44vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="partner-meta">
              <span className="chip solid">NSHC · 03</span>
              <span className="chip">SECURITY AWARENESS</span>
              <span className="chip accent">PHISHING SIMULATION</span>
            </div>
            <h1>PHISHGUARD HEA</h1>
            <p className="sol-hero-sub">
              {t("차세대 보안 인식 강화 플랫폼", "Next-Gen Security Awareness Platform", "次世代セキュリティ意識向上プラットフォーム")}
            </p>
            <p className="lede">
              {t(
                <>NSHC가 개발한 차세대 보안 인식 강화 플랫폼 <b>PhishGuard HEA</b>는 실전 같은 피싱 모의훈련으로 임직원의 보안 인식을 강화하고, 사이버 위협에 대응하는 조직 문화를 구축합니다. 100+ 검증된 시나리오, 자동화된 캠페인 운영, 즉시 교육과 경영진 보고용 리포트까지 하나의 플랫폼으로 제공합니다.</>,
                <>Developed by NSHC, <b>PhishGuard HEA</b> is a next-gen security awareness platform that strengthens employee awareness with realistic phishing simulations and builds a cyber-resilient organizational culture. 100+ verified scenarios, automated campaign management, instant training, and executive-ready reports — all in one platform.</>,
                <>NSHCが開発した次世代セキュリティ意識向上プラットフォーム<b>PhishGuard HEA</b>は、実戦さながらのフィッシング模擬訓練で従業員のセキュリティ意識を強化し、サイバー脅威に対応する組織文化を構築します。100+の検証済みシナリオ、自動化されたキャンペーン運用、即時教育から経営層報告用レポートまで、一つのプラットフォームで提供します。</>,
              )}
            </p>
          </div>
          <div className="sol-stats">
            <div><div className="n">100<sup>+</sup></div><div className="l">{t("피싱 시나리오 템플릿", "Phishing Templates", "フィッシングテンプレート")}</div></div>
            <div><div className="n">3<sup>click</sup></div><div className="l">{t("캠페인 구성", "Campaign Setup", "キャンペーン構成")}</div></div>
            <div><div className="n">3<sup>{t("언어", "lang", "言語")}</sup></div><div className="l">{t("한 · 영 · 일 지원", "KR · EN · JP", "韓 · 英 · 日 対応")}</div></div>
            <div><div className="n">4<sup>std</sup></div><div className="l">{t("글로벌 규제 대응", "Compliance Frameworks", "グローバル規制対応")}</div></div>
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
                  {t(<>실제적 훈련으로 임직원 보안<br />교육의 효과를 <em>극대화</em>.</>, <>Maximize the impact of<br />security training with <em>real practice</em>.</>, <>実践的な訓練で従業員セキュリティ<br />教育の効果を<em>最大化</em>。</>)}
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                {t("복잡한 보안 교육을 간편하게 관리하고, 조직 전체의 보안 수준을 높이세요. 교육부터 캠페인 운영, 분석, 감사 대응까지 하나의 플랫폼에서 처리합니다.", "Manage complex security training with ease and raise the security level across your entire organization — from training and campaign operations to analytics and audit response, all in one platform.", "複雑なセキュリティ教育を簡単に管理し、組織全体のセキュリティレベルを高めましょう。教育からキャンペーン運用、分析、監査対応まで一つのプラットフォームで処理します。")}
              </p>
            </div></div>
            <FeaturesGrid items={[
              { num: "FEATURE / 01", icon: <svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M4 5l8 6 8-6"/></svg>, title: t("100+ 피싱 템플릿", "100+ Phishing Templates", "100+ フィッシングテンプレート"), body: t("실제 피싱 공격을 재현한 다양한 시나리오로 현실적인 훈련 환경을 제공합니다. 국내·외 최신 사례 기반.", "Realistic training environments with diverse scenarios that replicate actual phishing attacks, based on the latest domestic and global cases.", "実際のフィッシング攻撃を再現した多様なシナリオで現実的な訓練環境を提供します。国内外の最新事例ベース。"), tags: ["100+ Templates", "Real Cases", "Scenarios"] },
              { num: "FEATURE / 02", icon: <svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/><circle cx="12" cy="12" r="3"/></svg>, title: t("맞춤형 캠페인 관리", "Custom Campaign Management", "カスタムキャンペーン管理"), body: t("부서별·직급별 맞춤 캠페인을 설계하고 자동화된 일정으로 실행할 수 있습니다.", "Design tailored campaigns by department and job level, and run them on automated schedules.", "部署別・職級別のカスタムキャンペーンを設計し、自動化されたスケジュールで実行できます。"), tags: ["By Dept", "Automation", "Scheduling"] },
              { num: "FEATURE / 03", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 12l4-2M12 7v5"/></svg>, title: t("실시간 분석 대시보드", "Real-Time Analytics Dashboard", "リアルタイム分析ダッシュボード"), body: t("클릭률, 열람률 등을 실시간으로 추적하고 인사이트를 확인하세요.", "Track click and open rates in real time and surface actionable insights.", "クリック率、開封率などをリアルタイムで追跡し、インサイトを確認できます。"), tags: ["Real-Time", "Click Rate", "Insights"] },
              { num: "FEATURE / 04", icon: <svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>, title: t("컴플라이언스 보고서", "Compliance Reports", "コンプライアンスレポート"), body: t("ISO 27001, NIST-CSF, GDPR, ISMS-P 등 국제 규제 준수를 위한 자동화된 보고서를 생성합니다.", "Auto-generate reports for international compliance such as ISO 27001, NIST-CSF, GDPR, and ISMS-P.", "ISO 27001、NIST-CSF、GDPR、ISMS-Pなど国際規制の遵守に向けた自動化されたレポートを生成します。"), tags: ["ISO 27001", "GDPR", "ISMS-P"] },
              { num: "FEATURE / 05", icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4M8 14h3"/></svg>, title: t("훈련 스케줄 관리", "Training Schedule Management", "訓練スケジュール管理"), body: t("주기적인 훈련을 사전에 스케줄링하여 지속적인 보안 인식을 유지합니다.", "Schedule recurring training in advance to maintain continuous security awareness.", "周期的な訓練を事前にスケジュールし、継続的なセキュリティ意識を維持します。"), tags: ["Recurring", "Schedule", "Continuous"] },
              { num: "FEATURE / 06", icon: <svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h16M8 16l4-5 3 3 4-6"/></svg>, title: t("성과 추적 & 리포트", "Performance Tracking & Reports", "成果追跡 & レポート"), body: t("상세한 리포트로 보안 인식 수준의 변화를 추적하고 경영진에 보고합니다.", "Track changes in security awareness with detailed reports and report to executives.", "詳細なレポートでセキュリティ意識レベルの変化を追跡し、経営層に報告します。"), tags: ["Trend", "Reporting", "Executive"] },
            ]} />
          </div>
        </section>
      )}

      {activeTab === "campaign" && (
        <SvcPanel
          eyebrow="FEATURE / 01 · CAMPAIGN & TEMPLATES"
          title={t(<>단 3번의 클릭으로<br /><em>보안 캠페인</em> 완성.</>, <>A complete <em>security campaign</em><br />in just three clicks.</>, <>わずか3クリックで<br /><em>セキュリティキャンペーン</em>完成。</>)}
          lede={t("복잡한 설정 없이 바로 피싱 모의훈련을 시작하세요. 100+ 검증된 시나리오에서 템플릿을 고르고, 대상·일정을 설정한 뒤, 실시간 대시보드로 결과를 분석합니다. 최근 국내·외 실제 피싱 사례와 고객사의 업무 환경·툴·임직원 호칭까지 그대로 녹여낸 커스텀 발송이 가능합니다.", "Start phishing simulations instantly with no complex setup. Pick a template from 100+ verified scenarios, set targets and schedule, then analyze results on a real-time dashboard. Custom delivery reflects recent real-world phishing cases and even your tools, work environment, and employee titles.", "複雑な設定なしですぐにフィッシング模擬訓練を開始できます。100+の検証済みシナリオからテンプレートを選び、対象・スケジュールを設定した後、リアルタイムダッシュボードで結果を分析します。最近の国内外の実際のフィッシング事例や、顧客企業の業務環境・ツール・従業員の呼称までそのまま反映したカスタム送信が可能です。")}
          points={[
            { title: t("템플릿 선택 · 100+ 검증 시나리오", "Template Selection · 100+ Verified Scenarios", "テンプレート選択 · 100+検証シナリオ"), body: t("Google Drive 용량 부족, 급여명세서 도착, 계정 보안 알림 등 실제 사례 기반 100+ 템플릿 중 조직에 맞는 것을 선택합니다.", "Choose from 100+ templates based on real cases — storage warnings, payslip notices, account security alerts — that fit your organization.", "Google Driveの容量不足、給与明細書の到着、アカウントセキュリティ通知など、実際の事例に基づく100+のテンプレートから組織に合うものを選択します。") },
            { title: t("맞춤형 캠페인 설정", "Tailored Campaign Setup", "カスタムキャンペーン設定"), body: t("부서별·직급별 대상 그룹, 발송 일정, 교육 콘텐츠를 설정하고 자동화된 일정으로 실행합니다.", "Set target groups by department and level, delivery schedules, and training content, then run on an automated schedule.", "部署別・職級別の対象グループ、送信スケジュール、教育コンテンツを設定し、自動化されたスケジュールで実行します。") },
            { title: t("커스텀 발송", "Custom Delivery", "カスタム送信"), body: t("고객사의 업무 환경·사용 툴·임직원 호칭까지 그대로 반영한 맞춤 시나리오를 제작해 실전성을 높입니다.", "Build tailored scenarios that mirror your work environment, tools, and employee titles for maximum realism.", "顧客企業の業務環境・使用ツール・従業員の呼称までそのまま反映したカスタムシナリオを作成し、実戦性を高めます。") },
            { title: t("훈련 스케줄 관리", "Training Schedule Management", "訓練スケジュール管理"), body: t("주기적인 훈련을 사전에 스케줄링하고 주기적 후속 교육을 설정해 지속적인 보안 인식을 유지합니다.", "Schedule recurring training in advance and configure periodic follow-up education to sustain awareness.", "周期的な訓練を事前にスケジュールし、定期的なフォローアップ教育を設定して継続的なセキュリティ意識を維持します。") },
          ]}
        />
      )}

      {activeTab === "simulation" && (
        <SvcPanel
          eyebrow="FEATURE / 02 · SIMULATION & TRAINING"
          title={t(<>메일 발송부터 <em>즉시 교육</em>까지,<br />하나의 흐름.</>, <>From phishing email to<br /><em>instant training</em>, one flow.</>, <>メール送信から<em>即時教育</em>まで、<br />一つの流れ。</>)}
          lede={t("실전과 동일한 시뮬레이션 피싱 메일을 발송하고, 임직원의 행동(열람·클릭·정보 제출)에 따라 즉시 개인별 결과 리포트와 보안 교육을 제공합니다. 위험 행동을 한 직원에게는 실패 리포트와 후속 교육을, 안전하게 통과한 직원에게는 통과 확인과 모범 사례를 안내합니다.", "Send simulation phishing emails identical to real ones, then instantly deliver personalized result reports and training based on each employee's behavior — open, click, or data submission. Risky users get a failure report and follow-up training; safe users get a pass confirmation and best practices.", "実戦と同じシミュレーションフィッシングメールを送信し、従業員の行動（開封・クリック・情報提出）に応じて即座に個人別の結果レポートとセキュリティ教育を提供します。危険な行動をした従業員には失敗レポートとフォローアップ教育を、安全に通過した従業員には通過確認とベストプラクティスを案内します。")}
          points={[
            { title: t("실전형 시뮬레이션 피싱 메일", "Realistic Simulation Emails", "実戦型シミュレーションメール"), body: t("Microsoft Outlook 등 실제 메일 환경을 재현한 시뮬레이션 메일로 임직원의 대응을 검증합니다.", "Validate employee response with simulation emails that replicate real mail clients like Microsoft Outlook.", "Microsoft Outlookなど実際のメール環境を再現したシミュレーションメールで従業員の対応を検証します。") },
            { title: t("행동 기반 즉시 결과 리포트", "Behavior-Based Instant Reports", "行動ベースの即時結果レポート"), body: t("메일 열람·링크 클릭·정보 제출 등 단계별 행동을 추적해 개인별 위험도(0~100)를 산출합니다.", "Track step-by-step actions — open, click, data submission — to calculate a per-person risk score from 0 to 100.", "メール開封・リンククリック・情報提出など段階別の行動を追跡し、個人別のリスク度（0〜100）を算出します。") },
            { title: t("실패 시 후속 교육", "Follow-Up Training on Failure", "失敗時のフォローアップ教育"), body: t("개인정보를 입력하는 등 위험 행동을 한 직원에게 즉시 결과 리포트와 보안 권고사항·후속 교육을 제공합니다.", "Employees who take risky actions, such as entering credentials, immediately receive a result report, security guidance, and follow-up training.", "個人情報を入力するなど危険な行動をした従業員に、即座に結果レポートとセキュリティ勧告・フォローアップ教育を提供します。") },
            { title: t("안전 통과 안내", "Safe-Pass Guidance", "安全通過の案内"), body: t("피싱 메일을 식별·차단한 직원에게는 통과 결과와 함께 발신자 주소 확인 등 모범 사례를 안내합니다.", "Employees who identify and block the phishing email receive a pass result and best practices such as verifying sender addresses.", "フィッシングメールを識別・遮断した従業員には、通過結果とともに送信者アドレスの確認などのベストプラクティスを案内します。") },
          ]}
        />
      )}

      {activeTab === "report" && (
        <SvcPanel
          eyebrow="FEATURE / 03 · REPORTS & ANALYTICS"
          title={t(<>훈련 종료 즉시,<br /><em>경영진 보고용</em> 리포트.</>, <>The moment training ends,<br /><em>executive-ready</em> reports.</>, <>訓練終了直後、<br /><em>経営層報告用</em>レポート。</>)}
          lede={t("5대 핵심 지표 + 부서별 비교 + 시간대별 클릭 흐름을 한 페이지로 정리해, 피싱 훈련이 종료되는 즉시 보안 담당자에게 전달됩니다. PDF·PPT로 즉시 내보내 경영진 보고에 바로 활용할 수 있습니다.", "Five key metrics plus department comparison and time-based click flow are summarized on a single page and delivered to the security team the moment training ends. Export to PDF or PPT instantly for executive reporting.", "5大主要指標＋部署別比較＋時間帯別クリックの流れを1ページにまとめ、フィッシング訓練が終了した直後にセキュリティ担当者へ届けられます。PDF・PPTに即座にエクスポートし、経営層報告にそのまま活用できます。")}
          points={[
            { title: t("5대 핵심 지표", "Five Key Metrics", "5大主要指標"), body: t("열람률·클릭률·정보 제출률·총 발송 건수·대상 인원을 실시간 집계합니다.", "Real-time aggregation of open rate, click rate, data submission rate, total sends, and target headcount.", "開封率・クリック率・情報提出率・総送信件数・対象人数をリアルタイムで集計します。") },
            { title: t("부서별 비교 분석", "Department Comparison", "部署別比較分析"), body: t("부서·직급별 클릭률을 비교해 취약 그룹을 식별하고 맞춤 교육 우선순위를 도출합니다.", "Compare click rates by department and level to identify vulnerable groups and prioritize tailored training.", "部署・職級別のクリック率を比較して脆弱なグループを識別し、カスタム教育の優先順位を導き出します。") },
            { title: t("시간 경과 개선 추적", "Improvement Tracking Over Time", "経時的な改善追跡"), body: t("반복 캠페인에 따른 보안 인식 개선 추이를 시각화해 보안 투자 효과를 정량화합니다.", "Visualize awareness improvement trends across repeated campaigns to quantify the impact of security investment.", "繰り返しキャンペーンによるセキュリティ意識の改善推移を可視化し、セキュリティ投資の効果を定量化します。") },
            { title: t("PDF · PPT 즉시 내보내기", "Instant PDF & PPT Export", "PDF · PPT 即時エクスポート"), body: t("경영진 보고용 리포트를 한 번의 클릭으로 PDF·PPT로 내보냅니다.", "Export executive-ready reports to PDF or PPT with a single click.", "経営層報告用レポートをワンクリックでPDF・PPTにエクスポートします。") },
          ]}
        />
      )}

      {activeTab === "compliance" && (
        <SvcPanel
          eyebrow="FEATURE / 04 · COMPLIANCE & MULTILINGUAL"
          title={t(<>글로벌 규제 대응과<br /><em>다국어 지원</em>을 한 번에.</>, <>Global compliance and<br /><em>multilingual support</em> in one.</>, <>グローバル規制対応と<br /><em>多言語サポート</em>を一度に。</>)}
          lede={t("ISO 27001·GDPR·ISMS-P·NIST-CSF 등 주요 보안 규정 준수를 자동으로 추적하고 감사에 필요한 모든 문서를 제공합니다. 관리자 콘솔과 임직원이 받는 시뮬레이션 메일 모두 한국어·English·日本語 3개 언어로 제공되어, 글로벌 법인과 다국적 임직원이 함께 사용할 수 있습니다.", "Automatically track major compliance requirements such as ISO 27001, GDPR, ISMS-P, and NIST-CSF, and provide every document needed for audits. Both the admin console and the simulation emails employees receive are available in Korean, English, and Japanese — usable across global entities and multinational staff.", "ISO 27001・GDPR・ISMS-P・NIST-CSFなど主要なセキュリティ規定の遵守を自動的に追跡し、監査に必要なすべての文書を提供します。管理者コンソールと従業員が受け取るシミュレーションメールはいずれも韓国語・English・日本語の3言語で提供され、グローバル法人と多国籍の従業員が共に利用できます。")}
          points={[
            { title: t("글로벌 규제 자동 대응", "Automated Global Compliance", "グローバル規制の自動対応"), body: t("ISO 27001·GDPR·ISMS-P·NIST-CSF 요구사항을 자동 추적하고 감사 증빙 문서를 자동 생성합니다.", "Automatically track ISO 27001, GDPR, ISMS-P, and NIST-CSF requirements and auto-generate audit evidence.", "ISO 27001・GDPR・ISMS-P・NIST-CSFの要件を自動追跡し、監査証拠文書を自動生成します。") },
            { title: t("자동 컴플라이언스 보고서", "Automated Compliance Reports", "自動コンプライアンスレポート"), body: t("직원별 교육 이수 현황, 시뮬레이션 참여율, 취약점 발견·개선 이력, 분기별 트렌드를 자동 집계합니다.", "Auto-aggregate per-employee training completion, simulation participation, vulnerability findings and remediation history, and quarterly trends.", "従業員別の教育修了状況、シミュレーション参加率、脆弱性の発見・改善履歴、四半期別トレンドを自動集計します。") },
            { title: t("3개 언어 지원 · 한 · 영 · 일", "Trilingual · KR · EN · JP", "3言語対応 · 韓 · 英 · 日"), body: t("관리자 콘솔과 임직원 시뮬레이션 메일 모두 한국어·English·日本語로 제공됩니다.", "Both the admin console and employee simulation emails are provided in Korean, English, and Japanese.", "管理者コンソールと従業員のシミュレーションメールはいずれも韓国語・English・日本語で提供されます。") },
            { title: t("감사 대응 맞춤 리포트", "Audit-Ready Custom Reports", "監査対応カスタムレポート"), body: t("규정 준수 증빙 자료를 자동 수집하고 감사 대응을 위한 맞춤형 리포트를 생성합니다.", "Automatically collect compliance evidence and generate custom reports for audit response.", "規定遵守の証拠資料を自動収集し、監査対応のためのカスタムレポートを生成します。") },
          ]}
        />
      )}

      <CtaBand
        heading={t(<>피싱 공격으로부터<br />조직을 <em>보호</em>하세요.</>, <>Protect your organization<br />from <em>phishing</em> attacks.</>, <>フィッシング攻撃から<br />組織を<em>守りましょう</em>。</>)}
        btnLabel={t("HEA 도입 문의 · 데모 요청", "Request HEA Demo", "HEA導入のお問い合わせ · デモ依頼")}
      />
      <RelatedBlock items={[
        { href: "/ssq-io/asm",  k: "NSHC · 01", h5: "Alpha ASM",  p: t("AI가 외부에 노출된 조직의 공격 표면을 자동 탐색·분석합니다.", "AI automatically discovers and analyzes your externally exposed attack surface.", "AIが外部に露出した組織の攻撃表面を自動探索・分析します。") },
        { href: "/ssq-io/sbom", k: "NSHC · 02", h5: "Omega SBOM", p: t("소프트웨어 공급망 리스크와 CVE를 통합 관리합니다.", "Manage software supply chain risk and CVEs in one place.", "ソフトウェアサプライチェーンのリスクとCVEを統合管理します。") },
      ]} />
    </>
  );
}
