"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, RelatedBlock, SolutionCrumbs, SpecTable, SolTabsNav, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "dbsafer-db" | "dbsafer-am" | "dbsafer-os" | "dbsafer-im" | "infosafer" | "datacrypto" | "facelocker";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview",    label: t("개요",         "Overview", "概要") },
    { id: "dbsafer-db",  label: "DBSAFER DB" },
    { id: "dbsafer-am",  label: "DBSAFER AM" },
    { id: "dbsafer-os",  label: "DBSAFER OS" },
    { id: "dbsafer-im",  label: "DBSAFER IM" },
    { id: "infosafer",   label: "INFOSAFER" },
    { id: "datacrypto",  label: "DATACRYPTO" },
    { id: "facelocker",  label: "FaceLocker" },
  ];

  return (
    <>
      <SiteHeader activeId="ssq-co" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="PNP SECURE" />
          <div className="layout">
            <div>
              <div className="partner-meta">
                <span className="chip solid">PORTFOLIO · 06</span>
                <span className="chip">TECHNOLOGY PARTNER</span>
                <span className="chip accent">PNP SECURE · {t("피앤피시큐어", "PnP Secure", "ピーアンドピーセキュア")}</span>
              </div>
              <h1>DBSAFER</h1>
              <p className="sol-hero-sub">{t("DB · 시스템 · OS 접근제어 통합 솔루션", "Integrated DB · System · OS Access Control", "DB · システム · OSアクセス制御の統合ソリューション")}</p>
              <p className="lede">
                {t(
                  <>2003년 대한민국 최초 DB보안 솔루션을 개발한 피앤피시큐어. DB·서버·OS 접근제어, 통합 계정 관리, 개인정보 접속기록, 비정형 데이터 암호화, 안면인식 잠금까지 국내외 약 <b>6,000여 고객사</b>에 공급합니다.</>,
                  <>PnP Secure — Korea's first DB security solution developer since 2003. DB/server/OS access control, account management, PII access logging, unstructured data encryption, and facial recognition lock delivered to approximately <b>6,000 customers</b> worldwide.</>,
                  <>2003年に韓国初のDBセキュリティソリューションを開発したピーアンドピーセキュア。DB・サーバー・OSアクセス制御、統合アカウント管理、個人情報アクセスログ、非構造化データ暗号化、顔認証ロックまで、国内外の約<b>6,000社</b>に提供しています。</>,
                )}
              </p>
            </div>
            <div className="sol-hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/pnpsecure/hero.png" alt="DBSAFER 제품 소개" />
            </div>
          </div>
          <div className="sol-stats">
            <div><div className="n">2003<sup>~</sup></div><div className="l">{t("국내 최초 DB보안", "Korea's 1st DB Security", "国内初のDBセキュリティ")}</div></div>
            <div><div className="n">6,000<sup>+</sup></div><div className="l">{t("국내외 고객사", "Global Customers", "国内外の顧客")}</div></div>
            <div><div className="n">42<sup>{t("종", "", "種")}</sup></div><div className="l">{t("지원 DB 엔진", "DB Engines", "対応DBエンジン")}</div></div>
            <div><div className="n">7<sup>{t("개", "", "個")}</sup></div><div className="l">{t("통합 보안 솔루션", "Integrated Solutions", "統合セキュリティソリューション")}</div></div>
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
                  <div className="eyebrow">PRODUCT LINEUP · UNIFIED-IAM</div>
                  <h2 className="section-title" style={{ marginTop: 28 }}>
                    {t(<>{`DB부터 얼굴인식까지,`}<br /><em>통합 접근제어</em> 플랫폼.</>, <>From DB to face recognition —<br /><em>unified access control</em> platform.</>, <>{`DBから顔認証まで、`}<br /><em>統合アクセス制御</em>プラットフォーム。</>)}
                  </h2>
                </div>
                <p className="section-lede" data-reveal data-reveal-delay="1">
                  {t("Unified-IAM(통합 접근제어 및 계정관리) 솔루션 전문 기업. DB·서버·OS 접근제어부터 계정 관리, 개인정보 접속기록, 암호화, 안면인식까지 하나의 벤더사로 통합합니다.", "Unified-IAM specialist — consolidate DB, server, and OS access control, account management, PII logging, encryption, and facial recognition under a single vendor.", "Unified-IAM(統合アクセス制御およびアカウント管理)ソリューションの専門企業。DB・サーバー・OSアクセス制御からアカウント管理、個人情報アクセスログ、暗号化、顔認証まで一つのベンダーに統合します。")}
                </p>
              </div></div>
              <FeaturesGrid items={[
                { num: "PRODUCT / 01", icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M8 8h8v8H8z" /></svg>, title: "DBSAFER DB", body: t("Oracle·MS-SQL·MySQL·PostgreSQL 등 42종 DB 엔진 접근제어. SQL 전량 감사, 개인정보 실시간 마스킹, 위험 SQL 차단.", "Access control for 42 DB engines including Oracle, MS-SQL, MySQL, and PostgreSQL. Full SQL audit, real-time PII masking, risky SQL blocking.", "Oracle・MS-SQL・MySQL・PostgreSQLなど42種のDBエンジンのアクセス制御。SQL全量監査、個人情報のリアルタイムマスキング、危険SQLの遮断。"), tags: [t("DB 접근제어", "DB Control", "DBアクセス制御"), t("SQL 감사", "SQL Audit", "SQL監査"), t("마스킹", "Masking", "マスキング")] },
                { num: "PRODUCT / 02", icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" /><path d="M3 10h18" /></svg>, title: "DBSAFER AM", body: t("SSH·Telnet·FTP·RDP 서버 접근제어. 우회 접근 차단(Server Agent), 콘솔/시리얼 포트 로깅, WORKS 승인 워크플로우.", "Server access control for SSH, Telnet, FTP, and RDP. Bypass access blocking (Server Agent), console/serial port logging, WORKS approval workflow.", "SSH・Telnet・FTP・RDPのサーバーアクセス制御。迂回アクセス遮断(Server Agent)、コンソール/シリアルポートのロギング、WORKS承認ワークフロー。"), tags: [t("서버 접근제어", "Server Control", "サーバーアクセス制御"), t("우회 차단", "Bypass Block", "迂回遮断")] },
                { num: "PRODUCT / 03", icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M4 10h16M10 4v16" /></svg>, title: "DBSAFER OS", body: t("서버 내 파일 접근·변조 제어, 프로세스·디렉터리별 권한 통제, 무결성 검사. TCP 통제. 보안 대상 서버의 OS 레벨 방어.", "File access/modification control, per-process and per-directory permission control, integrity check, and TCP control within the server OS.", "サーバー内のファイルアクセス・改ざん制御、プロセス・ディレクトリ別の権限統制、整合性検査、TCP統制。セキュリティ対象サーバーのOSレベル防御。"), tags: [t("OS 접근제어", "OS Control", "OSアクセス制御"), t("무결성 검사", "Integrity", "整合性検査")] },
                { num: "PRODUCT / 04", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>, title: "DBSAFER IM", body: t("OS·DBMS 계정 전 생명주기 통합 관리. 자동 비밀번호 변경, 계정 생성·수정·삭제 통합 관리, 서버 접근 통합 관리.", "Full lifecycle management of OS and DBMS accounts. Automatic password change, unified create/modify/delete management, integrated server access management.", "OS・DBMSアカウントの全ライフサイクル統合管理。自動パスワード変更、アカウント作成・修正・削除の統合管理、サーバーアクセスの統合管理。"), tags: [t("계정 관리", "Account Mgmt", "アカウント管理"), t("생명주기", "Lifecycle", "ライフサイクル")] },
                { num: "PRODUCT / 05", icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" /></svg>, title: "INFOSAFER", body: t("AI 기반 이상행위 탐지 및 자동화된 개인정보 접속기록 관리. WORM 위변조 방지, 개인정보보호법 제29조 컴플라이언스.", "AI-based anomaly detection and automated PII access record management. WORM tamper-proof storage, PIPA Article 29 compliance.", "AIベースの異常行為検知および自動化された個人情報アクセスログ管理。WORM改ざん防止、個人情報保護法第29条のコンプライアンス。"), tags: [t("개인정보 접속기록", "PII Logs", "個人情報アクセスログ"), t("AI 탐지", "AI Detect", "AI検知")] },
                { num: "PRODUCT / 06", icon: <svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="1" /><path d="M8 11V7a4 4 0 118 0v4" /></svg>, title: "DATACRYPTO", body: t("개인정보가 포함된 비정형 데이터 실시간 암호화. 로그·녹취·이미지·데이터 파일 대상. 커널/API/Agent 방식 지원. 국정원 검증필.", "Real-time encryption of unstructured data containing PII. Covers log, recording, image, and data files. Kernel/API/Agent methods. NIS-validated.", "個人情報を含む非構造化データのリアルタイム暗号化。ログ・録音・画像・データファイルが対象。カーネル/API/Agent方式に対応。国情院検証済。"), tags: [t("비정형 암호화", "Unstructured Enc", "非構造化暗号化"), t("국정원 검증필", "NIS Validated", "国情院検証済")] },
                { num: "PRODUCT / 07", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="10" r="3" /><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M3 5h18" /></svg>, title: "FaceLocker", body: t("안면인식 기반 PC 자동 잠금·잠금 해제. 자리비움 감지 시 화면 자동 잠금. Liveness Detection으로 사진/동영상 위장 차단.", "Face recognition-based auto PC lock/unlock. Auto screen lock on absence detection. Liveness Detection blocks photo/video spoofing.", "顔認証ベースのPC自動ロック・ロック解除。離席検知時に画面を自動ロック。Liveness Detectionで写真/動画によるなりすましを遮断。"), tags: [t("안면인식", "Face Auth", "顔認証"), t("화면 잠금", "Screen Lock", "画面ロック")] },
              ]} />
            </div>
          </section>
          {/* <section className="specs">
            <div className="container">
              <div className="sec-heading"><div className="inner"><div data-reveal>
                <div className="eyebrow">COMPANY SPEC</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>{t("피앤피시큐어 주요 현황.", "PnP Secure at a Glance.", "ピーアンドピーセキュアの主要概況。")}</h2>
              </div></div></div>
              <SpecTable rows={[
                [t("설립", "Founded", "設立"), t("2003년 12월 (대한민국 최초 DB보안 솔루션 DBSAFER 개발)", "December 2003 — developer of Korea's first DB security solution DBSAFER", "2003年12月(韓国初のDBセキュリティソリューションDBSAFERを開発)")],
                [t("고객사", "Customers", "顧客"), t("국내외 약 6,000여 고객사 — 금융·공공·제조·의료·교육 등 전 산업군", "Approx. 6,000 domestic and international customers — finance, public sector, manufacturing, healthcare, education", "国内外の約6,000社 — 金融・公共・製造・医療・教育など全産業")],
                [t("수상·인증", "Awards & Certs", "受賞・認証"), t("대통령 표창 1회 · 국무총리 표창 2회 · 장관 표창 11회 · 특허 39건 · 인증 42종", "Presidential commendation ×1 · PM commendation ×2 · Ministerial commendation ×11 · 39 patents · 42 certifications", "大統領表彰1回 · 国務総理表彰2回 · 長官表彰11回 · 特許39件 · 認証42種")],
                [t("지원 DB 엔진", "DB Engines", "対応DBエンジン"), "Oracle · MS-SQL · MySQL · PostgreSQL · Tibero · Altibase · Sybase · DB2 · MongoDB · Redis 등 42종"],
                [t("컴플라이언스", "Compliance", "コンプライアンス"), <><b>{t("개인정보보호법 제29조", "PIPA Art. 29", "個人情報保護法第29条")}</b> · {t("전자금융감독규정", "e-Finance Regs", "電子金融監督規定")} · ISMS-P · EU GDPR · PCI-DSS · {t("국정원 검증필", "NIS Validated", "国情院検証済")}</>],
                [t("매출 현황", "Revenue", "売上概況"), t("2024년 623억 · 2023년 583억 · 2022년 527억 (3개년)", "FY2024 ₩62.3B · FY2023 ₩58.3B · FY2022 ₩52.7B", "2024年 623億ウォン · 2023年 583億ウォン · 2022年 527億ウォン(3ヶ年)")],
              ]} />
            </div>
          </section> */}
        </>
      )}

      {activeTab === "dbsafer-db" && (
        <SvcPanel
          eyebrow="PRODUCT / 01 · DBSAFER DB"
          title={t(<>42종 DB 엔진을<br /><em>하나의</em> 정책으로 통제합니다.</>, <>42 DB engines controlled<br />by <em>one policy</em>.</>, <>42種のDBエンジンを<br /><em>一つの</em>ポリシーで統制します。</>)}
          lede={t("Oracle, MS-SQL, MySQL, PostgreSQL 등 국내외 주요 상용 DB부터 Tibero, Altibase 등 국산 DB, MongoDB·Redis 같은 NoSQL까지 42종 DB를 단일 플랫폼으로 통합 관리합니다. 모든 SQL이 기록되며, 개인정보 쿼리는 실시간 마스킹되고, 위험 SQL은 자동 차단됩니다.", "Unified management of 42 DB types — from major commercial DBs like Oracle, MS-SQL, MySQL, and PostgreSQL, to domestic DBs like Tibero and Altibase, and NoSQL like MongoDB and Redis. Every SQL logged, PII queries masked in real time, risky SQL auto-blocked.", "Oracle、MS-SQL、MySQL、PostgreSQLなど国内外の主要な商用DBから、Tibero、Altibaseなどの韓国産DB、MongoDB・RedisのようなNoSQLまで42種のDBを単一プラットフォームで統合管理します。すべてのSQLが記録され、個人情報クエリはリアルタイムでマスキングされ、危険なSQLは自動的に遮断されます。")}
          points={[
            { title: t("42종 DB 엔진 지원", "42 DB Engine Support", "42種のDBエンジン対応"), body: t("Oracle(전 버전) · MS-SQL · MySQL · PostgreSQL · Tibero · Altibase · Sybase ASE/IQ · DB2 · MongoDB · Redis · Cassandra · MariaDB 등 42종.", "Oracle (all versions) · MS-SQL · MySQL · PostgreSQL · Tibero · Altibase · Sybase ASE/IQ · DB2 · MongoDB · Redis · Cassandra · MariaDB — 42 types total.", "Oracle(全バージョン) · MS-SQL · MySQL · PostgreSQL · Tibero · Altibase · Sybase ASE/IQ · DB2 · MongoDB · Redis · Cassandra · MariaDBなど42種。") },
            { title: t("SQL 전량 감사", "Full SQL Audit", "SQL全量監査"), body: t("SELECT·INSERT·UPDATE·DELETE·DDL 명령어 전량을 실행 시각·계정·결과와 함께 불변 로그로 기록.", "All SELECT, INSERT, UPDATE, DELETE, and DDL commands logged as immutable records with execution time, account, and result.", "SELECT・INSERT・UPDATE・DELETE・DDLコマンドの全量を、実行時刻・アカウント・結果とともに不変ログとして記録。") },
            { title: t("개인정보 실시간 마스킹", "Real-Time PII Masking", "個人情報のリアルタイムマスキング"), body: t("DB 레벨에서 주민번호·카드번호·연락처 등 개인정보 쿼리 결과를 실시간 마스킹. 역할별 마스킹 수준 차별 적용 가능.", "Real-time masking of PII query results at the DB level — SSN, card numbers, phone numbers. Different masking levels per role.", "DBレベルで住民番号・カード番号・連絡先など個人情報クエリ結果をリアルタイムでマスキング。役割別にマスキングレベルを差別化して適用可能。") },
            { title: t("위험 SQL 차단 & WORKS 결재", "Risky SQL Blocking & Approval", "危険SQL遮断 & WORKS決裁"), body: t("DROP·TRUNCATE·대량 조회 등 정책 위반 SQL 자동 차단. DBSAFER WORKS 웹 기반 결재 워크플로우로 승인 후 실행.", "Auto-block policy-violating SQL: DROP, TRUNCATE, mass queries. Executed only after approval via DBSAFER WORKS web-based workflow.", "DROP・TRUNCATE・大量照会などポリシー違反のSQLを自動遮断。DBSAFER WORKSのWebベース決裁ワークフローで承認後に実行。") },
          ]}
        />
      )}

      {activeTab === "dbsafer-am" && (
        <SvcPanel
          eyebrow="PRODUCT / 02 · DBSAFER AM · SYSTEM ACCESS CONTROL"
          title={t(<>SSH · RDP · Telnet · FTP,<br /><em>모든 서버 접근</em>을 통제합니다.</>, <>SSH · RDP · Telnet · FTP —<br />control <em>every server access</em>.</>, <>SSH · RDP · Telnet · FTP、<br /><em>すべてのサーバーアクセス</em>を統制します。</>)}
          lede={t("서버에 접근하는 모든 경로를 통제합니다. DBSAFER AM은 Putty·SecureCRT·xShell·RDP 등 도구 종류에 상관없이 서버 접근을 제어·감사하며, 게이트웨이를 우회하는 접근도 Server Agent를 통해 차단합니다.", "Controls every route to the server. DBSAFER AM controls and audits server access regardless of tool — Putty, SecureCRT, xShell, RDP — and blocks bypass access even around the gateway via Server Agent.", "サーバーへアクセスするすべての経路を統制します。DBSAFER AMはPutty・SecureCRT・xShell・RDPなどツールの種類を問わずサーバーアクセスを制御・監査し、ゲートウェイを迂回するアクセスもServer Agentを通じて遮断します。")}
          points={[
            { title: t("도구 종류 무관 통제", "Tool-Independent Control", "ツールの種類を問わない統制"), body: t("Putty · iterm2 · SecureCRT · xShell · mRemoteNG · WinSCP · mobaXterm · RDP 등 모든 접속 도구를 동일하게 통제·감사.", "Identical control and audit across all access tools: Putty, iterm2, SecureCRT, xShell, mRemoteNG, WinSCP, mobaXterm, RDP, and more.", "Putty · iterm2 · SecureCRT · xShell · mRemoteNG · WinSCP · mobaXterm · RDPなどすべての接続ツールを同一に統制・監査。") },
            { title: t("우회 접근 차단 (Server Agent)", "Bypass Access Blocking via Server Agent", "迂回アクセス遮断 (Server Agent)"), body: t("게이트웨이를 우회하는 접근을 Server Agent가 직접 차단·로깅. 콘솔·시리얼 포트 연결 이력도 기록.", "Server Agent directly blocks and logs bypass access around the gateway. Console and serial port connections also recorded.", "ゲートウェイを迂回するアクセスをServer Agentが直接遮断・ロギング。コンソール・シリアルポート接続の履歴も記録。") },
            { title: t("WORKS 웹 기반 승인", "WORKS Web-Based Approval", "WORKS Webベース承認"), body: t("서버 접근·계정·명령어 사용 권한을 웹 애플리케이션 DBSAFER WORKS에서 요청·승인. 원스텝 권한 신청.", "Server access, account, and command usage requests and approvals via DBSAFER WORKS web app. One-step permission request.", "サーバーアクセス・アカウント・コマンド使用権限をWebアプリDBSAFER WORKSで申請・承認。ワンステップの権限申請。") },
            { title: t("멀티존 통합 관리", "Multi-Zone Integrated Management", "マルチゾーン統合管理"), body: t("단일 DBSAFER로 Legacy IDC·Private Cloud·Public Cloud 멀티존을 통합 관리. HA/Fail-over 구성 지원.", "Manage Legacy IDC, Private Cloud, and Public Cloud multi-zone with a single DBSAFER instance. HA/fail-over configuration supported.", "単一のDBSAFERでLegacy IDC・Private Cloud・Public Cloudのマルチゾーンを統合管理。HA/フェイルオーバー構成に対応。") },
          ]}
        />
      )}

      {activeTab === "dbsafer-os" && (
        <SvcPanel
          eyebrow="PRODUCT / 03 · DBSAFER OS · OS ACCESS CONTROL"
          title={t(<>파일·프로세스·디렉터리,<br />서버 <em>OS 레벨</em>을 지킵니다.</>, <>File, process, directory —<br />protect the server at <em>OS level</em>.</>, <>ファイル・プロセス・ディレクトリ、<br />サーバーの<em>OSレベル</em>を守ります。</>)}
          lede={t("서버 내부에서 일어나는 파일 접근·변조, 프로세스 실행, 디렉터리 접근을 서버 OS 레벨에서 직접 통제합니다. 보안 대상 서버에 에이전트를 설치해 TCP 통제 및 중요 파일 무결성 보장을 수행합니다.", "Directly controls file access/modification, process execution, and directory access at the server OS level. An agent installed on the security target server performs TCP control and ensures integrity of critical files.", "サーバー内部で発生するファイルアクセス・改ざん、プロセス実行、ディレクトリアクセスをサーバーのOSレベルで直接統制します。セキュリティ対象サーバーにエージェントを設置し、TCP統制および重要ファイルの整合性保証を行います。")}
          points={[
            { title: t("파일 접근·변조 제어", "File Access & Modification Control", "ファイルアクセス・改ざん制御"), body: t("보안 대상 서버의 중요 파일에 대한 접근 감시 및 변경 제어. 무단 수정·삭제 실시간 차단.", "Monitor and control access to and modification of critical files on the security target server. Real-time blocking of unauthorized modification and deletion.", "セキュリティ対象サーバーの重要ファイルへのアクセス監視および変更制御。無断の修正・削除をリアルタイムで遮断。") },
            { title: t("프로세스별 권한 통제", "Process-Specific Permission Control", "プロセス別の権限統制"), body: t("특정 프로세스에 한해서만 파일 접근 허용. 허용되지 않은 프로세스의 접근 자동 차단.", "File access permitted only for specific designated processes. Unauthorized process access auto-blocked.", "特定のプロセスに限ってファイルアクセスを許可。許可されていないプロセスのアクセスを自動遮断。") },
            { title: t("디렉터리별 권한 통제", "Directory-Specific Authorization Control", "ディレクトリ別の権限統制"), body: t("디렉터리 단위로 접근 권한을 세밀하게 설정. 설정 범위 외 접근 원천 차단.", "Fine-grained access permissions set per directory. All access outside configured scope structurally blocked.", "ディレクトリ単位でアクセス権限を細かく設定。設定範囲外のアクセスを根本から遮断。") },
            { title: t("무결성 검사 & TCP 통제", "Integrity Check & TCP Control", "整合性検査 & TCP統制"), body: t("중요 파일의 무결성을 주기적으로 검사. 변조 탐지 시 즉시 알림. TCP 레벨 접근 통제 수행.", "Periodic integrity checks on critical files. Immediate alert on tampering detected. TCP-level access control enforced.", "重要ファイルの整合性を定期的に検査。改ざん検知時に即時アラート。TCPレベルのアクセス統制を実行。") },
          ]}
        />
      )}

      {activeTab === "dbsafer-im" && (
        <SvcPanel
          eyebrow="PRODUCT / 04 · DBSAFER IM · INTEGRATED ACCOUNT MANAGEMENT"
          title={t(<>OS · DBMS 계정을<br /><em>전 생명주기</em>로 관리합니다.</>, <>OS and DBMS accounts managed<br />across their <em>full lifecycle</em>.</>, <>OS · DBMSアカウントを<br /><em>全ライフサイクル</em>で管理します。</>)}
          lede={t("서버 OS 계정과 DBMS 계정을 중앙에서 통합 관리합니다. 계정 생성·수정·삭제 전 과정을 자동화하고, 비밀번호 주기적 자동 변경과 승인 워크플로우로 공유 계정 문제 및 특권 계정 남용을 방지합니다.", "Centralized management of server OS and DBMS accounts. Automates the full cycle of account creation, modification, and deletion. Periodic auto password change and approval workflow prevent shared account issues and privileged account abuse.", "サーバーOSアカウントとDBMSアカウントを中央で統合管理します。アカウントの作成・修正・削除の全工程を自動化し、パスワードの定期的な自動変更と承認ワークフローで共有アカウント問題および特権アカウントの濫用を防止します。")}
          points={[
            { title: t("OS · DBMS 계정 통합 관리", "Integrated OS & DBMS Account Management", "OS · DBMSアカウントの統合管理"), body: t("서버 OS 계정과 DBMS 계정을 단일 인터페이스에서 통합 관리. 계정 현황을 한눈에 파악.", "Manage server OS and DBMS accounts from a single interface. Complete account inventory at a glance.", "サーバーOSアカウントとDBMSアカウントを単一のインターフェースで統合管理。アカウント状況を一目で把握。") },
            { title: t("자동 비밀번호 변경", "Automatic Password Rotation", "自動パスワード変更"), body: t("정책에 따른 비밀번호 주기적 자동 변경. 공유 계정의 비밀번호 관리 리스크 해소.", "Periodic automatic password rotation per policy. Eliminates shared account password management risks.", "ポリシーに基づくパスワードの定期的な自動変更。共有アカウントのパスワード管理リスクを解消。") },
            { title: t("계정 생명주기 자동화", "Account Lifecycle Automation", "アカウントライフサイクルの自動化"), body: t("계정 생성 → 권한 부여 → 수정 → 비활성화 → 삭제 전 과정을 워크플로우 기반으로 자동 처리.", "Workflow-based automation of the full lifecycle: create → grant → modify → deactivate → delete.", "アカウント作成 → 権限付与 → 修正 → 無効化 → 削除の全工程をワークフローベースで自動処理。") },
            { title: t("서버 접근 통합 관리", "Integrated Server Access Management", "サーバーアクセスの統合管理"), body: t("DBSAFER AM과 연계해 계정 발급부터 서버 접근 승인까지 하나의 플랫폼에서 처리.", "Integrated with DBSAFER AM to handle account provisioning through server access approval on a single platform.", "DBSAFER AMと連携し、アカウント発行からサーバーアクセス承認まで一つのプラットフォームで処理。") },
          ]}
        />
      )}

      {activeTab === "infosafer" && (
        <SvcPanel
          eyebrow="PRODUCT / 05 · INFOSAFER · 개인정보 접속기록관리"
          title={t(<>개인정보보호법 제29조,<br />AI로 <em>자동</em> 충족합니다.</>, <>PIPA Article 29 —<br />fulfilled <em>automatically</em> with AI.</>, <>個人情報保護法第29条、<br />AIで<em>自動</em>充足します。</>)}
          lede={t("개인정보 접근 이력 수집의 한계, 감사 대응 시 과도한 리소스 발생, 컴플라이언스 리스크를 해소합니다. AI 기반 이상행위 탐지와 자동화된 접속기록 관리로 법규 준수와 보안 거버넌스를 동시에 확보합니다.", "Resolves limitations in PII access history collection, excessive audit response overhead, and compliance risks. AI-based anomaly detection and automated access record management simultaneously ensure regulatory compliance and security governance.", "個人情報アクセス履歴収集の限界、監査対応時の過度なリソース発生、コンプライアンスリスクを解消します。AIベースの異常行為検知と自動化されたアクセスログ管理で、法規遵守とセキュリティガバナンスを同時に確保します。")}
          points={[
            { title: t("자동화된 접속기록 수집·관리", "Automated Access Record Collection", "自動化されたアクセスログ収集・管理"), body: t("WAS Tracer·DB Tracer·Packet Tracer·SAP ERP 연동 모듈을 통해 개인정보 처리 시스템 접속기록을 자동 수집. WORM 위변조 방지 백업.", "Auto-collect PII access records via WAS/DB/Packet Tracer and SAP ERP modules. WORM tamper-proof backup.", "WAS Tracer・DB Tracer・Packet Tracer・SAP ERP連携モジュールを通じて個人情報処理システムのアクセスログを自動収集。WORM改ざん防止バックアップ。") },
            { title: t("AI 기반 이상행위 탐지", "AI-Based Anomaly Detection", "AIベースの異常行為検知"), body: t("비지도 학습 모델이 사용자별 일일 벡터를 학습. 동시 다발·반복 접근, 비개인정보 위협(Webshell·SQLi·Brute-Force) 자동 탐지.", "Unsupervised learning model learns per-user daily vectors. Auto-detects concurrent/repeated access and non-PII threats like Webshell, SQLi, and Brute-Force.", "教師なし学習モデルがユーザー別の日次ベクトルを学習。同時多発・反復アクセス、非個人情報の脅威(Webshell・SQLi・Brute-Force)を自動検知。") },
            { title: t("개인정보보호법 보고서", "PIPA Compliance Reports", "個人情報保護法レポート"), body: t("개인정보처리시스템 접속기록 보고서, 소명 처리 결재 시스템, 개인정보보호위원회·행안부 점검 항목에 맞는 감사 증적 자동 생성.", "Auto-generate access record reports, handle justification approval workflows, and produce audit evidence aligned with PIPC and MOIS inspection requirements.", "個人情報処理システムのアクセスログレポート、疎明処理の決裁システム、個人情報保護委員会・行政安全部の点検項目に合わせた監査証跡を自動生成。") },
            { title: t("DBSAFER 연동", "DBSAFER Integration", "DBSAFER連携"), body: t("DBSAFER 정책 변경 없이 실시간 연동. DATACRYPTO(국정원 검증필) 암호화 지원. DB 내 비암호화 개인정보 탐지.", "Real-time integration with DBSAFER without policy changes. DATACRYPTO (NIS-validated) encryption support. Detects unencrypted PII in DB.", "DBSAFERのポリシー変更なしにリアルタイム連携。DATACRYPTO(国情院検証済)暗号化に対応。DB内の非暗号化個人情報を検知。") },
          ]}
        />
      )}

      {activeTab === "datacrypto" && (
        <SvcPanel
          eyebrow="PRODUCT / 06 · DATACRYPTO · 비정형 데이터 암호화"
          title={t(<>로그·녹취·이미지까지,<br /><em>비정형 데이터</em>를 암호화합니다.</>, <>Logs, recordings, images —<br /><em>unstructured data</em> encrypted.</>, <>ログ・録音・画像まで、<br /><em>非構造化データ</em>を暗号化します。</>)}
          lede={t("기존 컬럼 기반 암호화로는 보호할 수 없는 비정형 데이터를 실시간으로 암호화합니다. 개인정보보호법 암호화 의무 대상인 로그 파일·녹취 파일·이미지 파일·데이터 파일을 커널·API·Agent 방식으로 암호화합니다. 국정원 검증필 제품입니다.", "Encrypts unstructured data that column-based encryption cannot protect. Log files, recording files, image files, and data files — all PIPA-mandated encryption targets — encrypted via Kernel, API, or Agent method. NIS-validated product.", "従来のカラムベース暗号化では保護できない非構造化データをリアルタイムで暗号化します。個人情報保護法の暗号化義務対象であるログファイル・録音ファイル・画像ファイル・データファイルをカーネル・API・Agent方式で暗号化します。国情院検証済の製品です。")}
          points={[
            { title: t("비정형 데이터 암호화 대상", "Unstructured Data Targets", "非構造化データの暗号化対象"), body: t("녹취·영상·이미지 파일(주민등록증·바이오 정보 등) · WEB/WAS/DB 로그 파일 · 금결원 등 표준 전문 데이터 파일 · 그룹웨어·전자결재 데이터 파일.", "Recording/video/image files (ID cards, biometrics) · WEB/WAS/DB log files · Standard messaging data files · Groupware and e-approval data files.", "録音・映像・画像ファイル(住民登録証・生体情報など) · WEB/WAS/DBログファイル · 金融決済院など標準電文データファイル · グループウェア・電子決裁データファイル。") },
            { title: t("3가지 암호화 방식", "Three Encryption Methods", "3つの暗号化方式"), body: t("Kernel 방식: OS 커널 레벨 실시간 암호화, 앱 수정 불필요. API 방식: 애플리케이션 레벨 실시간. Agent 방식: 앱 수정 없이 준 실시간.", "Kernel: OS kernel-level real-time encryption, no app changes. API: application-level real-time. Agent: near-real-time with no app changes.", "Kernel方式:OSカーネルレベルのリアルタイム暗号化、アプリ修正不要。API方式:アプリケーションレベルのリアルタイム。Agent方式:アプリ修正なしで準リアルタイム。") },
            { title: t("국정원 검증필 암호 모듈", "NIS-Validated Crypto Module", "国情院検証済の暗号モジュール"), body: t("국가정보원 검증필 암호 모듈 탑재. 개인정보보호법·전자금융감독규정·EU GDPR 암호화 의무 준수.", "NIS-validated cryptographic module. Complies with PIPA, e-Finance Supervision Regulation, and EU GDPR encryption obligations.", "国家情報院検証済の暗号モジュールを搭載。個人情報保護法・電子金融監督規定・EU GDPRの暗号化義務を遵守。") },
            { title: t("INFOSAFER 연동", "INFOSAFER Integration", "INFOSAFER連携"), body: t("INFOSAFER 내 DATACRYPTO 모듈로 연동 지원. 개인정보 접속기록 관리 시스템과 암호화를 하나의 플랫폼에서 운영.", "Supported as a DATACRYPTO module within INFOSAFER. Run PII access log management and encryption on a single platform.", "INFOSAFER内のDATACRYPTOモジュールとして連携をサポート。個人情報アクセスログ管理システムと暗号化を一つのプラットフォームで運用。") },
          ]}
        />
      )}

      {activeTab === "facelocker" && (
        <SvcPanel
          eyebrow="PRODUCT / 07 · FACELOCKER · 안면인식 보안"
          title={t(<>자리를 비우면,<br />화면은 <em>자동</em>으로 잠깁니다.</>, <>When you step away —<br />screen locks <em>automatically</em>.</>, <>離席すると、<br />画面は<em>自動</em>でロックされます。</>)}
          lede={t("안면인식 기반 PC 잠금·잠금 해제 솔루션입니다. 사용자가 자리를 비우면 카메라가 감지해 자동으로 화면을 잠그고, 돌아왔을 때 얼굴 인식으로 즉시 해제합니다. 개인정보 처리 단말의 기술적 보호조치(화면보호기·잠금) 요건을 충족합니다.", "Face recognition-based PC lock/unlock solution. When the user steps away, the camera detects it and automatically locks the screen. Unlocks instantly with face recognition on return. Satisfies PIPA technical protection requirements (screen saver and lock).", "顔認証ベースのPCロック・ロック解除ソリューションです。ユーザーが離席するとカメラが検知して自動的に画面をロックし、戻ってきたときに顔認証で即時に解除します。個人情報処理端末の技術的保護措置(スクリーンセーバー・ロック)の要件を満たします。")}
          points={[
            { title: t("자리비움 자동 감지·잠금", "Auto Absence Detection & Lock", "離席の自動検知・ロック"), body: t("카메라가 얼굴을 인식하지 못하면 설정 시간 후 자동 화면 잠금. 개인정보 화면 노출 원천 차단.", "Auto screen lock after set delay when camera no longer detects a face. Blocks PII screen exposure at the source.", "カメラが顔を認識しなくなると設定時間後に自動で画面をロック。個人情報の画面露出を根本から遮断。") },
            { title: t("안면인식 즉시 해제", "Instant Face Unlock", "顔認証で即時解除"), body: t("비밀번호 입력 없이 얼굴로 즉시 잠금 해제. 업무 흐름을 방해하지 않는 자연스러운 인증.", "Instant screen unlock by face — no password entry. Natural authentication that doesn't disrupt workflow.", "パスワード入力なしで顔により即時ロック解除。業務の流れを妨げない自然な認証。") },
            { title: t("Liveness Detection (위장 방지)", "Liveness Detection (Anti-Spoofing)", "Liveness Detection (なりすまし防止)"), body: t("사진·동영상을 이용한 얼굴 위장 시도를 Liveness Detection으로 차단. 실제 사람만 인증 가능.", "Liveness Detection blocks face spoofing via photos or video. Only a real, present person can authenticate.", "写真・動画を利用した顔のなりすまし試行をLiveness Detectionで遮断。実在する人物のみ認証可能。") },
            { title: t("컴플라이언스 증빙", "Compliance Evidence", "コンプライアンスの証憑"), body: t("개인정보보호법 기술적 보호조치(화면보호기·자리비움 잠금) 요건 충족. 관리자 통계 및 컴플라이언스 리포트 제공.", "Satisfies PIPA technical protection measures (screen saver and absence lock). Admin statistics and compliance reports provided.", "個人情報保護法の技術的保護措置(スクリーンセーバー・離席ロック)の要件を充足。管理者統計およびコンプライアンスレポートを提供。") },
          ]}
        />
      )}

      <CtaBand
        heading={t(<>내부의 <em>사각지대</em>부터<br />밝혀야 합니다.</>, <>Start by illuminating<br />the <em>blind spots</em> inside.</>, <>内部の<em>死角</em>から<br />明らかにすべきです。</>)}
        btnLabel={t("접근제어 상담", "Request Access Control Consultation", "アクセス制御の相談")}
      />
      <RelatedBlock items={[
        { href: "/ssq-co/mfa",  k: "PORTFOLIO · 04", h5: t("한국정보인증 · MFA",      "KICA · MFA",               "韓国情報認証 · MFA"),               p: t("접근 인증과 DB 통제 결합.", "Combine access authentication with DB control.", "アクセス認証とDB統制を結合。") },
        { href: "/solutions/nshc",  k: "PORTFOLIO · 01", h5: t("NSHC · 보안 서비스",      "NSHC · Security Services", "NSHC · セキュリティサービス"), p: t("접근 로그와 CTI 위협 인텔리전스 연계.", "Link access logs with CTI threat intelligence.", "アクセスログとCTI脅威インテリジェンスを連携。") },
      ]} />
    </>
  );
}
