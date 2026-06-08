"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, FlowSteps, RelatedBlock, SolutionCrumbs, SolTabsNav, SpecTable, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "architecture" | "analysis" | "security" | "usecases" | "pricing";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview",     label: t("개요",         "Overview", "概要") },
    { id: "architecture", label: t("아키텍처",     "Architecture", "アーキテクチャ") },
    { id: "analysis",     label: t("분석 경험",    "Analysis", "ログ解析体験") },
    { id: "security",     label: t("보안",         "Security", "セキュリティ") },
    { id: "usecases",     label: t("유스케이스",   "Use Cases", "ユースケース") },
    { id: "pricing",      label: t("도입·요금",    "Pricing", "導入·料金") },
  ];

  return (
    <>
      <SiteHeader activeId="ssq-ai" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="AI LOGEATER" />
          <div className="layout" style={{ minHeight: "44vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="partner-meta">
              <span className="chip solid">SAFESQUARE · 02</span>
              <span className="chip">MINI SIEM</span>
              <span className="chip accent">AI LOG ANALYTICS</span>
            </div>
            <h1>AI LogEater</h1>
            <p className="sol-hero-sub">
              {t("AI를 활용한 미니 SIEM 구현 서비스", "AI-Driven Mini-SIEM Service", "AIを活用したミニSIEM実装サービス")}
            </p>
            <p className="lede">
              {t(
                <>SAFESQUARE 일본 법인이 운영하는 <b>AI LogEater</b>는 &lsquo;누구나 저렴하고 간단하게 로그를 활용하는 세상&rsquo;을 목표로 만든 미니 SIEM 서비스입니다. 기존 SIEM·로그 기반에 로그를 모으지 않고 MCP로 직접 질의하며, 생성형 AI(Claude)가 일본어 대화만으로 로그를 분석하고 리포트를 만듭니다.</>,
                <>Operated by SAFESQUARE Japan, <b>AI LogEater</b> is a mini-SIEM service built toward &ldquo;a world where anyone can use logs affordably and easily.&rdquo; Rather than consolidating logs into a SIEM, it queries existing log platforms directly via MCP, and generative AI (Claude) analyzes logs and produces reports through plain Japanese conversation.</>,
                <>SAFESQUARE 日本法人が運営する <b>AI LogEater</b> は、「誰でも安価で簡単にログ活用ができる世界」を目指して開発したミニSIEMサービスです。既存のSIEM·ログ基盤にログを集約せず MCP で直接クエリし、生成AI(Claude)が日本語の対話だけでログを分析しレポートを作成します。</>,
              )}
            </p>
          </div>
          <div className="sol-stats">
            <div><div className="n">18<sup>+</sup></div><div className="l">{t("대응 로그 종류", "Log Types Supported", "対応ログ種類")}</div></div>
            <div><div className="n">7<sup>MCP</sup></div><div className="l">{t("연동 MCP 서버", "MCP Servers", "連携MCPサーバー")}</div></div>
            <div><div className="n">Claude<sup>Sonnet</sup></div><div className="l">{t("AI 분석 엔진", "AI Analysis Engine", "AI解析エンジン")}</div></div>
            <div><div className="n">Tokyo<sup>AWS</sup></div><div className="l">{t("도쿄 리전 폐쇄망", "Tokyo Region", "東京リージョン閉域")}</div></div>
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
                  {t(<>SIEM의 두 가지 벽을,<br />AI로 <em>한 번에</em> 넘습니다.</>, <>The two walls of SIEM,<br />cleared <em>at once</em> with AI.</>, <>SIEMの2つの壁を、<br />AIで<em>一気に</em>越えます。</>)}
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                {t("SIEM 도입·운영 비용과 쿼리 언어의 장벽 — LogEater는 분산형 아키텍처와 생성형 AI로 두 과제를 동시에 해결합니다. 로그를 한곳에 모으지 않고 MCP로 직접 질의하고, 전문 지식이 없어도 일본어 대화만으로 깊이 있는 로그 분석을 수행합니다.", "The cost of running a SIEM and the barrier of query languages — LogEater solves both with a distributed architecture and generative AI. It queries logs directly via MCP without consolidating them, and performs deep log analysis through plain Japanese conversation without specialist knowledge.", "SIEMの導入·運用コストとクエリ言語の壁 — LogEaterは分散型アーキテクチャと生成AIで2つの課題を同時に解決します。ログを1箇所に集約せずMCPで直接クエリし、専門知識がなくても日本語の対話だけで深いログ分析を行います。")}
              </p>
            </div></div>
            <FeaturesGrid items={[
              { num: "FEATURE / 01", icon: <svg viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 3z"/><path d="M8 9h8M8 12h5"/></svg>, title: t("채팅 형식 로그 분석", "Chat-Based Log Analysis", "チャット形式のログ分析"), body: t("ChatGPT 같은 대화형 UI에서 일본어로 묻기만 하면 로그를 심층 분석합니다. 쿼리 언어 학습이 필요 없습니다.", "Ask in plain Japanese on a ChatGPT-like interface and get deep log analysis — no query language to learn.", "ChatGPTのような対話型UIで日本語で問いかけるだけでログを深掘り分析。クエリ言語の習得は不要です。"), tags: ["Chat", "日本語", "No Query"] },
              { num: "FEATURE / 02", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>, title: t("생성형 AI 분석 (Claude)", "Generative AI Analysis (Claude)", "生成AI分析 (Claude)"), body: t("Claude Sonnet 기반 AI가 로그를 해석하고 그래프를 곁들인 리포트로 이상 이벤트와 권고사항을 제시합니다.", "AI built on Claude Sonnet interprets logs and presents anomalies and recommendations in reports with charts.", "Claude SonnetベースのAIがログを解釈し、グラフを交えたレポートで不審なイベントと推奨事項を提示します。"), tags: ["Claude", "LLM", "Report"] },
              { num: "FEATURE / 03", icon: <svg viewBox="0 0 24 24"><path d="M4 7l8 5 8-5M4 7v10l8 5 8-5V7M4 7l8-4 8 4"/></svg>, title: t("분산형 저비용 아키텍처", "Distributed Low-Cost Architecture", "分散型の低コストアーキテクチャ"), body: t("MCP로 기존 SIEM·로그 기반에 직접 질의해 로그를 한곳에 모을 필요가 없습니다. 보관 비용 부담을 줄입니다.", "Queries existing SIEM/log platforms directly via MCP, removing the need to consolidate logs and cutting storage cost.", "MCPで既存のSIEM·ログ基盤に直接クエリするため、ログを1箇所に集める必要がありません。保存コストの負担を軽減します。"), tags: ["MCP", "DWH", "Low Cost"] },
              { num: "FEATURE / 04", icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h6"/></svg>, title: t("자사 환경 이해", "Understands Your Environment", "自社環境を理解"), body: t("Notion 도메인 지식, draw.io 구성도, GitHub IaC를 읽어 자사 시스템 환경을 이해하고 분석 품질을 높입니다.", "Reads Notion domain knowledge, draw.io diagrams, and GitHub IaC to understand your environment and raise analysis quality.", "Notionのドメイン知識、draw.ioの構成図、GitHubのIaCを読み取り、自社のシステム環境を理解して分析品質を高めます。"), tags: ["Notion", "draw.io", "IaC"] },
              { num: "FEATURE / 05", icon: <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>, title: t("다종 로그·MCP 확장", "Many Logs & MCP Extension", "多種ログ·MCP拡張"), body: t("클라우드·SaaS·엔드포인트 등 다양한 로그(CSV·JSON)에 대응하고, Anthropic MCP로 수집하지 않은 로그까지 분석합니다.", "Supports diverse cloud, SaaS, and endpoint logs (CSV/JSON), and analyzes even non-ingested logs via Anthropic MCP.", "クラウド·SaaS·エンドポイントなど多様なログ(CSV·JSON)に対応し、Anthropic MCPで取り込んでいないログまで分析します。"), tags: ["AWS", "GCP", "Azure"] },
              { num: "FEATURE / 06", icon: <svg viewBox="0 0 24 24"><path d="M12 3v4M12 3a9 9 0 1 0 9 9"/><path d="M9 12l2 2 4-4"/></svg>, title: t("정기 워크플로우", "Scheduled Workflows", "定期ワークフロー"), body: t("월간 감사 리포트처럼 반복하는 분석을 워크플로우 잡으로 등록해 정기 실행하고 Slack·Drive로 전달합니다.", "Register recurring analysis such as monthly audit reports as workflow jobs that run on schedule and deliver via Slack/Drive.", "月次監査レポートのような繰り返しの分析をワークフロージョブとして登録し、定期実行してSlack·Driveへ配信します。"), tags: ["Workflow", "Schedule", "Slack"] },
            ]} />
          </div>
        </section>
      )}

      {activeTab === "architecture" && (
        <>
          <SvcPanel
            eyebrow="ARCHITECTURE · DISTRIBUTED & LOW-COST"
            title={t(<>로그를 한곳에 모으지 않아도<br /><em>바로</em> 분석합니다.</>, <>Analyze logs <em>instantly</em><br />without consolidating them in one place.</>, <>ログを1箇所に集めなくても<br /><em>すぐに</em>分析します。</>)}
            lede={t("기존 SIEM과 달리 LogEater는 로그를 한곳에 집약하지 않고 분석 가능한 아키텍처를 채택했습니다. MCP 프로토콜로 이미 로그가 쌓여 있는 SIEM·로그 기반에 직접 검색하고, 로그 기반이 없는 경우에는 고속·저비용 DataStore를 제공합니다. SaaS형이므로 운영·보수나 로그 취입 파이프라인 개발이 필요 없습니다.", "Unlike a traditional SIEM, LogEater adopts an architecture that analyzes logs without consolidating them. It searches existing SIEM/log platforms directly via the MCP protocol, and provides a fast, low-cost DataStore for environments without a log platform. As a SaaS, it requires no operations, maintenance, or log-ingestion pipeline development.", "従来のSIEMと異なり、LogEaterはログを1箇所に集約しなくても分析可能なアーキテクチャを採用しています。MCPプロトコルで既にログが蓄積されているSIEM·ログ基盤に直接検索し、ログ基盤がない場合は高速·低コストのDataStoreを提供します。SaaSで提供しているため運用·保守やログ取り込みパイプラインの開発は不要です。")}
            points={[
              { title: t("분산형 쿼리 (MCP Connector)", "Distributed Query (MCP Connector)", "分散型クエリ (MCP Connector)"), body: t("이미 로그가 축적된 SIEM·로그 기반에 MCP로 직접 검색하므로 LogEater로 로그를 가져올 필요가 없습니다.", "Searches existing SIEM/log platforms directly via MCP, so logs never need to be pulled into LogEater.", "既にログが蓄積されているSIEM·ログ基盤にMCPで直接検索するため、LogEaterにログを取り込む必要がありません。") },
              { title: t("고속·저비용 DataStore", "Fast, Low-Cost DataStore", "高速·低コストDataStore"), body: t("로그 기반이 없는 경우 고속 데이터웨어하우스를 제공해 저렴하게 로그 분석·포렌식 기반을 구축할 수 있습니다.", "For environments without a log platform, a high-speed data warehouse lets you build log analysis and forensic foundations affordably.", "ログ基盤がない場合は高速なデータウェアハウスを用意しているため、安価にログ分析やフォレンジック基盤を構築できます。") },
              { title: t("SaaS 제공 — 운영 불필요", "SaaS — Zero Operations", "SaaS提供 — 運用不要"), body: t("SaaS형으로 제공되므로 로그 기반의 운영·보수나 로그 취입 파이프라인 개발이 필요 없습니다.", "Delivered as SaaS, with no log-platform operations, maintenance, or ingestion pipeline development required.", "SaaSで提供しているためログ基盤の運用·保守やログ取り込みパイプラインの開発は不要です。") },
              { title: t("AI 에이전트 (Claude)", "AI Agent (Claude)", "AIエージェント (Claude)"), body: t("Chat UI ↔ LLM(Claude) 구조로 동작하며, MCP Connector로 컨텍스트를 취득해 로그를 검색·분석합니다.", "Operates as Chat UI ↔ LLM (Claude), acquiring context via the MCP Connector to search and analyze logs.", "Chat UI ↔ LLM(Claude)の構造で動作し、MCP Connectorでコンテキストを取得してログを検索·分析します。") },
            ]}
          />
          <section className="svc-panel" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="svc-intro">
                <div className="svc-eyebrow">COVERAGE · LOGS & MCP</div>
                <h2 className="svc-title">{t(<>폭넓은 로그와<br />MCP <em>연동</em>.</>, <>Broad log and<br />MCP <em>coverage</em>.</>, <>幅広いログと<br />MCP<em>連携</em>。</>)}</h2>
                <p className="svc-lede">{t("2026년 4월 시점 대응 현황입니다. 아래 외에도 순차 대응 예정입니다.", "Coverage as of April 2026. Additional sources are being added on a rolling basis.", "2026年4月時点での対応状況です。下記以外も順次対応予定です。")}</p>
              </div>
              <SpecTable rows={[
                [t("AWS", "AWS", "AWS"), <>CloudTrail · VPC Flow Logs · {t("세션 액티비티", "Session Activity", "セッションアクティビティ")} · ALB · CloudFront · WAF</>],
                [t("Google Cloud", "Google Cloud", "Google Cloud"), <>Cloud Audit Logs · {t("로드밸런싱·CDN(예정)", "Load Balancing & CDN (planned)", "ロードバランシング·CDN(予定)")}</>],
                [t("SaaS", "SaaS", "SaaS"), <>Google Workspace · Microsoft 365 · Okta</>],
                [t("네트워크", "Network", "ネットワーク"), <>Zscaler · Netscope (SWG/CASB)</>],
                [t("엔드포인트", "Endpoint", "エンドポイント"), <>Microsoft Defender for Endpoint · CrowdStrike Falcon · SKYSEA · LANSCOPE · Open Canary</>],
                [t("MCP 서버", "MCP Servers", "MCPサーバー"), <>CloudWatch Logs · OpenSearch · BigQuery · Log Analytics · Sentinel · Elasticsearch · Snowflake</>],
                [t("입력 형식", "Formats", "入力形式"), <>CSV · JSON</>],
              ]} />
            </div>
          </section>
        </>
      )}

      {activeTab === "analysis" && (
        <SvcPanel
          eyebrow="EXPERIENCE · JAPANESE LOG ANALYSIS"
          title={t(<>쿼리 언어 없이,<br /><em>일본어</em> 대화로.</>, <>No query language —<br />just <em>plain</em> conversation.</>, <>クエリ言語なしで、<br /><em>日本語</em>の対話で。</>)}
          lede={t("SPL·SQL·KQL을 익힐 필요가 없습니다. LogEater는 일본어로 묻고 분석하는 직관적인 경험을 제공하며, 스키마 확인부터 할루시네이션 검증, 경영층용 리포트 생성까지 한 화면에서 처리합니다.", "There is no need to learn SPL, SQL, or KQL. LogEater offers an intuitive experience of asking and analyzing in plain language — from checking schemas to verifying against hallucination and generating executive reports, all in one place.", "SPL·SQL·KQLを習得する必要はありません。LogEaterは日本語で問いかけて分析する直感的な体験を提供し、スキーマ確認からハルシネーション検証、経営層向けレポート生成まで1つの画面で行えます。")}
          points={[
            { title: t("일본어 챗 분석", "Japanese Chat Analysis", "日本語チャット分析"), body: t("ChatGPT 같은 대화형 UI에서 로그·IT 지식이 없어도 일본어로 묻기만 하면 로그 분석을 심층까지 진행합니다.", "On a ChatGPT-like interface, anyone without log or IT expertise can drive deep analysis just by asking in plain Japanese.", "ChatGPTのような対話型UIで、ログやITの知識がなくても日本語で問いかけるだけでログ分析を深掘りまで進められます。") },
            { title: t("스키마 정의 확인", "Schema Definitions", "スキーマ定義の確認"), body: t("테이블의 컬럼명·데이터 타입·설명을 표 형식으로 일본어로 안내해, 로그 구조를 모르더라도 조사를 시작할 수 있습니다.", "Presents table columns, data types, and descriptions in a table in plain language, so you can start investigating without knowing the log structure.", "テーブルのカラム名·データ型·説明を表形式で日本語で案内し、ログ構造を知らなくても調査を始められます。") },
            { title: t("할루시네이션 검증", "Hallucination Verification", "ハルシネーション検証"), body: t("실제로 실행된 SQL·쿼리문을 화면에서 그대로 확인할 수 있어, AI 결과의 사실관계를 손쉽게 검증합니다.", "The actual SQL/queries that were run are shown on screen, making it easy to fact-check the AI's results.", "実際に実行されたSQL·クエリ文を画面でそのまま確認できるため、AIの結果の事実確認が容易です。") },
            { title: t("리포트 자동 생성", "Automated Reporting", "レポート自動生成"), body: t("일본어 지시만으로 그래프를 포함한 경영층용 분석 리포트를 생성하고 권고사항까지 정리합니다.", "Generates executive analysis reports with charts — including recommendations — from plain-language instructions alone.", "日本語の指示だけでグラフを含む経営層向けの分析レポートを生成し、推奨事項まで整理します。") },
            { title: t("나레지베이스 활용", "Knowledge Base", "ナレッジベース活用"), body: t("Notion에 정리한 자사 고유 나레지를 LogEater가 참조해 분석 정밀도를 높이고, 컨설턴트가 지식을 갱신합니다.", "LogEater references your own knowledge organized in Notion to raise analysis accuracy, while consultants keep it updated.", "Notionに整理した自社独自のナレッジをLogEaterが参照して分析精度を高め、コンサルタントが知識を更新します。") },
          ]}
        />
      )}

      {activeTab === "security" && (
        <SvcPanel
          eyebrow="SECURITY · SAFE BY DESIGN"
          title={t(<>일본 국내에 폐쇄된<br /><em>안심·안전</em> 환경.</>, <>A <em>secure</em> environment,<br />closed within Japan.</>, <>日本国内に閉じた<br /><em>安心·安全</em>な環境。</>)}
          lede={t("LogEater는 AWS 도쿄 리전의 VPC 네트워크에 폐쇄된 아키텍처로 운영됩니다. 다중요소인증·SAML/SSO·IP 제한·HTTPS 통신 암호화·감사 로그까지, 엄격한 감사가 요구되는 공공·금융 환경에도 대응합니다.", "LogEater runs on an architecture closed within a VPC network in the AWS Tokyo region. With MFA, SAML/SSO, IP restriction, HTTPS encryption, and audit logging, it meets the needs of public-sector and financial environments that demand strict auditing.", "LogEaterはAWS東京リージョンのVPCネットワークに閉じたアーキテクチャで運用されます。多要素認証·SAML/SSO·IP制限·HTTPS通信暗号化·監査ログまで、厳格な監査が求められる公共·金融環境にも対応します。")}
          points={[
            { title: t("AWS 도쿄 리전 폐쇄망", "AWS Tokyo Region (Closed)", "AWS東京リージョン閉域"), body: t("일본 국내에 폐쇄된 서비스 환경. VPC 네트워크로 프라이빗하게 통신을 제어합니다.", "A service environment closed within Japan, with communication controlled privately over a VPC network.", "日本国内に閉じたサービス環境。VPCネットワークでプライベートに通信を制御します。") },
            { title: t("다중요소인증 (MFA)", "Multi-Factor Authentication (MFA)", "多要素認証 (MFA)"), body: t("MFA로 부정 접근을 방지합니다.", "Prevents unauthorized access with MFA.", "MFAで不正アクセスを防止します。") },
            { title: t("SAML/SSO 인증·인가", "SAML/SSO Authn & Authz", "SAML/SSO認証·認可"), body: t("기업 IdP와 연동한 SAML/SSO로 인증·인가를 제어합니다.", "Controls authentication and authorization via SAML/SSO integrated with your corporate IdP.", "企業IdPと連携したSAML/SSOで認証·認可を制御します。") },
            { title: t("IP 제한 + HTTPS", "IP Restriction + HTTPS", "IP制限 + HTTPS"), body: t("IP 주소 기반 접근 제어와 HTTPS 통신 암호화를 적용합니다.", "Applies IP-based access control and HTTPS communication encryption.", "IPアドレスによるアクセス制御とHTTPS通信暗号化を適用します。") },
            { title: t("감사 로그 대응", "Audit Logging", "監査ログ対応"), body: t("접근·조작 이력을 감사 로그로 남겨 추적성을 확보합니다.", "Retains access and operation history as audit logs for traceability.", "アクセス·操作の履歴を監査ログとして残し、追跡性を確保します。") },
          ]}
        />
      )}

      {activeTab === "usecases" && (
        <SvcPanel
          eyebrow="USE CASES"
          title={t(<>현장의 과제를<br /><em>일본어</em> 한 마디로.</>, <>Field problems solved<br />with a single <em>question</em>.</>, <>現場の課題を<br /><em>日本語</em>のひと言で。</>)}
          lede={t("금융기관의 포렌식 조사, 내부 부정 대응, 클라우드 감사까지 — 전문 인력 없이도 비즈니스·감사 부서가 직접 로그를 활용하는 다섯 가지 대표 사례입니다.", "From forensic investigation at financial institutions to insider-threat response and cloud auditing — five representative cases where business and audit teams use logs directly, without specialists.", "金融機関のフォレンジック調査から内部不正対応、クラウド監査まで — 専門人材がいなくてもビジネス·監査部門が直接ログを活用する5つの代表事例です。")}
          points={[
            { title: t("01 · 금융기관 포렌직 조사", "01 · Forensic Investigation (Finance)", "01 · 金融機関のフォレンジック調査"), body: t("SIEM에 담기 어려운 방대한 Flow Log를 LogEater로 조사. 비즈니스 부서 담당자가 직접 일본어로 조사해 쿼리 비용을 1/10 이하로 절감했습니다.", "Investigate massive flow logs that are hard to keep in a SIEM. Business staff query directly in plain language, cutting query cost to under one-tenth.", "SIEMに取り込みにくい膨大なフローログをLogEaterで調査。ビジネス部門の担当者が直接日本語で調査し、クエリコストを10分の1以下に削減しました。") },
            { title: t("02 · 퇴직자 모니터링 (내부 부정)", "02 · Leaver Monitoring (Insider Risk)", "02 · 退職者モニタリング (内部不正)"), body: t("PC 조작·SASE·M365 감사 로그를 감사 부서가 직접 확인해, 최종 출근일 당일에도 부정 반출을 탐지·예방합니다.", "Audit teams check PC operation, SASE, and M365 logs directly, detecting and preventing data exfiltration even on a leaver's last day.", "PC操作·SASE·M365の監査ログを監査部門が直接確認し、最終出社日の当日でも不正な持ち出しを検出·防止します。") },
            { title: t("03 · CloudTrail AWS 부정 접근 감사", "03 · AWS Access Audit via CloudTrail", "03 · CloudTrailでのAWS不正アクセス監査"), body: t("CloudTrail 증적을 취입할 때 송신원 IP에 국가 코드를 부여해, SQL·SIEM 지식이 없는 감사 담당자도 부정 징후를 조사합니다.", "Tags source IPs with country codes when ingesting CloudTrail, so auditors without SQL/SIEM knowledge can spot signs of misuse.", "CloudTrail証跡を取り込む際に送信元IPへ国コードを付与し、SQL·SIEMの知識がない監査担当者でも不正の兆候を調査できます。") },
            { title: t("04 · 릴리스 작업 후 감사 효율화", "04 · Post-Release Audit Efficiency", "04 · リリース作業後の監査効率化"), body: t("Session Manager의 EC2 조작 로그(CloudWatch Logs)에서 작업 보고서를 자동 생성해, 감사 담당이 직접 확인하도록 업무를 효율화합니다.", "Auto-generate work reports from Session Manager EC2 operation logs (CloudWatch Logs) so auditors can verify directly.", "Session ManagerのEC2操作ログ(CloudWatch Logs)から作業報告書を自動生成し、監査担当が直接確認できるよう効率化します。") },
            { title: t("05 · Google Workspace 드라이브 감사", "05 · Google Workspace Drive Audit", "05 · Google Workspaceのドライブ監査"), body: t("Reports API로 감사 로그를 S3에 출력한 뒤 LogEater로 취입해, 드라이브에서의 부정 다운로드 감사를 손쉽게 수행합니다.", "Export audit logs to S3 via the Reports API and ingest into LogEater to easily audit unauthorized drive downloads.", "Reports APIで監査ログをS3に出力後、LogEaterに取り込んでドライブからの不正ダウンロード監査を容易に行います。") },
          ]}
        />
      )}

      {activeTab === "pricing" && (
        <section className="svc-panel">
          <div className="container">
            <div className="svc-intro">
              <div className="svc-eyebrow">ADOPTION · 4 STEPS</div>
              <h2 className="svc-title">{t(<>히어링에서 도입까지,<br /><em>한 흐름</em>으로.</>, <>From hearing to rollout,<br />a single <em>flow</em>.</>, <>ヒアリングから導入まで、<br /><em>一つの流れ</em>で。</>)}</h2>
              <p className="svc-lede">{t("PoC로 효과를 검증한 뒤 월액 견적을 산정합니다. 도입 후에는 Slack으로 이용 방법을 지원합니다.", "We verify value with a PoC, then provide a monthly quote. After rollout, we support usage via Slack.", "PoCで効果を検証した上で月額のお見積もりを算定します。導入後はSlackで利用方法をサポートします。")}</p>
            </div>
            <FlowSteps items={[
              { step: "01", title: t("히어링", "Hearing", "ヒアリング"), body: t("실현 목표·대상 로그 종류와 용량·인증/접근 방식·이용 인원을 확인합니다.", "Confirm goals, target log types and volume, auth/access methods, and user scope.", "実現したいこと·対象ログの種類と容量·認証/アクセス方式·利用人数を確認します。"), when: t("약 1주", "~1 week", "約1週間") },
              { step: "02", title: "PoC", body: t("로그 취입·조작감·보안 레벨을 기술 평가합니다. 개발 환경 로그로도 가능합니다.", "Technical evaluation of ingestion, usability, and security level — dev-environment logs are fine.", "ログの取り込み·操作感·セキュリティレベルを技術評価します。開発環境のログでも可能です。"), when: t("2~4주", "2–4 weeks", "2〜4週間") },
              { step: "03", title: t("견적", "Quote", "お見積もり"), body: t("PoC 결과를 토대로 기본 요금·스토리지 요금을 포함한 월액 견적을 제시합니다.", "Based on PoC results, provide a monthly quote including base and storage fees.", "PoCの結果を踏まえて基本料金·ストレージ料金を含む月額のお見積もりを提示します。"), when: t("1~2주", "1–2 weeks", "1〜2週間") },
              { step: "04", title: t("도입", "Rollout", "導入"), body: t("본번 환경을 제공하고 로그 취입 잡을 개시합니다. 이후 Slack으로 이용 지원을 제공합니다.", "Provide the production environment and start ingestion jobs, with ongoing Slack-based support.", "本番環境を提供しログ取り込みジョブを開始します。以降はSlackで利用サポートを提供します。"), when: t("1~2주", "1–2 weeks", "1〜2週間") },
            ]} />
            <SpecTable rows={[
              [t("초기 비용", "Initial Cost", "初期費用"), <>{t("로그 종류당", "Per log type", "ログ種類あたり")} <b>¥50,000</b> · {t("MCP 서버당", "Per MCP server", "MCPサーバーあたり")} <b>¥50,000</b></>],
              ["Starter", <><b>¥50,000 / {t("월", "mo", "月")}</b> — {t("인시던트 발생 시 로그 포렌식 조사를 목적으로 하는 에디션", "For log-based forensic investigation on incidents", "インシデント発生時のフォレンジック調査を目的としたエディション")}</>],
              ["Professional", <><b>¥300,000 / {t("월", "mo", "月")}</b> — {t("컨설턴트 지원으로 로그 활용을 폭넓게 지원하는 에디션", "Broad log utilization with consultant support", "コンサルタント支援で幅広くログ活用を支援するエディション")}</>],
              ["Enterprise", <><b>{t("응상담", "Contact us", "応相談")}</b> — {t("최대한으로 로그를 활용하려는 이용자 대상 에디션", "For users who want to maximize log utilization", "最大限にログ活用したいユーザー向けエディション")}</>],
              [t("스토리지", "Storage", "ストレージ"), <>{t("압축 후 1GB당", "Per GB (compressed)", "圧縮後1GBあたり")} <b>¥4.5</b></>],
            ]} />
          </div>
        </section>
      )}

      <CtaBand
        heading={t(
          <>로그 활용을<br /><em>누구나</em> 손쉽게.</>,
          <>Make log analysis<br />easy for <em>everyone</em>.</>,
          <>ログ活用を<br /><em>誰でも</em>手軽に。</>,
        )}
        btnLabel={t("AI LogEater 도입 상담 · PoC 신청", "Request AI LogEater PoC", "AI LogEater導入の相談 · PoC申し込み")}
      />
      <RelatedBlock items={[
        { href: "/ssq-ai/pentester", k: "SAFESQUARE · 01", h5: "AI Pentester",     p: t("펜테스팅을 스스로 계획·수행하는 AI 펜테스터입니다.", "An AI pentester that plans and performs assessments on its own.", "ペンテストを自ら計画·実行するAIペンテスターです。") },
        { href: "/ssq-trust/arcus", k: "SAFESQUARE · 03", h5: "Arcus Zero-Trust", p: t("Zero Trust 기반으로 접근을 통제하는 통합 보안 플랫폼입니다.", "An integrated platform that controls access on Zero Trust principles.", "ゼロトラストに基づきアクセスを制御する統合セキュリティプラットフォームです。") },
      ]} />
    </>
  );
}
