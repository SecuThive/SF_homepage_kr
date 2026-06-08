"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, RelatedBlock, SolutionCrumbs, SpecTable, SolTabsNav, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "docuray-drm" | "dlp";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview",     label: t("개요",        "Overview", "概要") },
    { id: "docuray-drm",  label: "DocuRAY DRM" },
    { id: "dlp",          label: "DLP" },
  ];

  return (
    <>
      <SiteHeader activeId="ssq-co" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="BLUEMOON" />
          <div className="layout">
            <div>
              <div className="partner-meta">
                <span className="chip solid">PORTFOLIO · 03</span>
                <span className="chip">TECHNOLOGY PARTNER</span>
                <span className="chip accent">BLUEMOON · {t("블루문소프트", "Bluemoon Soft", "ブルームーンソフト")}</span>
              </div>
              <h1>{t("문서보안", "Document Security", "文書セキュリティ")}</h1>
              <p className="sol-hero-sub">{t("파일 단위 문서 보안 솔루션 · 다큐레이", "File-Level Document Security · DocuRay", "ファイル単位の文書セキュリティソリューション · DocuRay")}</p>
              <p className="lede">
                {t(
                  <>생성 시점부터 커널 수준 자동 암호화. 조직 밖으로 나가도 권한 없이는 열 수 없고, 어디서 어떻게 사용됐는지 모든 이벤트가 기록됩니다.</>,
                  <>Kernel-level auto-encryption from the moment of creation. Unauthorized access is blocked even outside the organization. Every access and usage event is recorded.</>,
                  <>作成された瞬間からカーネルレベルで自動暗号化。組織の外に出ても権限がなければ開けず、いつ・どこで・どのように使われたか、すべてのイベントが記録されます。</>,
                )}
              </p>
            </div>
            <div className="sol-hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/bluemoon/hero.png" alt="DocuRay DRM 제품 소개" />
            </div>
          </div>
          <div className="sol-stats">
            <div><div className="n">40<sup>+</sup></div><div className="l">Supported Formats</div></div>
            <div><div className="n">AES<sup>-256</sup></div><div className="l">Encryption</div></div>
            <div><div className="n">Kernel<sup></sup></div><div className="l">{t("커널 암·복호화", "Kernel Encrypt/Decrypt", "カーネル暗号化・復号")}</div></div>
            <div><div className="n">8<sup>%</sup></div><div className="l">{t("메모리 점유율 (타사 대비)", "Memory vs. Competitors", "メモリ使用率（他社比）")}</div></div>
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
                    {t(<>파일{" "}<em>한 장</em>도<br />통제합니다.</>, <>Control down to<br />every <em>single file</em>.</>, <>ファイル{" "}<em>1枚</em>まで<br />統制します。</>)}
                  </h2>
                </div>
                <p className="section-lede" data-reveal data-reveal-delay="1">
                  {t("DocuRay DRM은 커널 수준 암·복호화로 타사 대비 메모리 점유율 8% 수준을 유지하며, 읽기·편집·인쇄·화면 캡처까지 모든 권한을 문서 단위로 설정하고 실시간 회수할 수 있습니다.", "DocuRay DRM maintains just 8% memory usage compared to competitors with kernel-level encrypt/decrypt, while allowing every permission — read, edit, print, and screen capture — to be set per document and revoked in real time.", "DocuRay DRMはカーネルレベルの暗号化・復号により他社比メモリ使用率8%程度を維持し、閲覧・編集・印刷・画面キャプチャまですべての権限を文書単位で設定し、リアルタイムに回収できます。")}
                </p>
              </div></div>
              <FeaturesGrid items={[
                { num: "FEATURE / 01", icon: <svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="1" /><path d="M8 11V7a4 4 0 118 0v4" /></svg>, title: t("파일 생성 시 자동 암호화", "Auto-Encrypt on Creation", "ファイル作成時に自動暗号化"), body: t("Office · CAD · PDF · 한글(HWP)까지 40+ 포맷 지원. 사용자 개입 불필요.", "40+ formats including Office, CAD, PDF, and HWP. No user intervention required.", "Office · CAD · PDF · HWPまで40以上のフォーマットに対応。ユーザーの操作は不要。"), tags: ["Office", "CAD", "HWP"] },
                { num: "FEATURE / 02", icon: <svg viewBox="0 0 24 24"><path d="M4 12l4 4 12-12" /></svg>, title: t("세밀한 권한 정책", "Fine-Grained Permissions", "きめ細かい権限ポリシー"), body: t("열람·편집·인쇄·캡처·복사·유효기간·IP·기기 등 다차원 권한 조합.", "Multi-dimensional permissions: view, edit, print, capture, copy, expiry, IP, device, and more.", "閲覧・編集・印刷・キャプチャ・コピー・有効期限・IP・端末など多次元の権限を組み合わせ。"), tags: ["ACL", "Time Limit", "Device Lock"] },
                { num: "FEATURE / 03", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 3v9l6 3" /></svg>, title: t("실시간 권한 회수", "Real-Time Permission Revocation", "リアルタイム権限回収"), body: t("퇴사·사고 시 외부에 있는 파일도 원격 폐기. 영구 회수.", "Remotely destroy files even outside the organization upon resignation or incident. Permanent revocation.", "退職・インシデント時に外部にあるファイルも遠隔で破棄。恒久的に回収。"), tags: ["Remote Revoke"] },
                { num: "FEATURE / 04", icon: <svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z" /><path d="M3 9h18M9 3v18" /></svg>, title: t("협업 · 외부 공유", "Collaboration & External Sharing", "コラボレーション · 外部共有"), body: t("파트너사에 전송해도 암호화 유지. 뷰어만으로 열람 가능.", "Encryption maintained when sent to partners. Readable with viewer only.", "パートナー企業へ送付しても暗号化を維持。ビューアーのみで閲覧可能。"), tags: ["External", "Viewer"] },
                { num: "FEATURE / 05", icon: <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10" /></svg>, title: t("감사 로그", "Audit Logs", "監査ログ"), body: t("모든 파일 접근·출력·외부반출 이벤트를 불변 로그로 저장. ISMS-P 증빙.", "All file access, print, and export events stored as immutable logs. ISMS-P compliance evidence.", "すべてのファイルアクセス・出力・外部持ち出しイベントを改ざん不可のログとして保存。ISMS-Pの証跡。"), tags: ["Audit", "ISMS-P"] },
                { num: "FEATURE / 06", icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" /></svg>, title: t("DLP · CASB 연동", "DLP & CASB Integration", "DLP · CASB 連携"), body: t("기존 DLP/CASB의 정책과 연동해 이중 방어. 중복 정책 관리 제거.", "Integrates with existing DLP/CASB policies for double-layered defense.", "既存のDLP/CASBのポリシーと連携して二重防御。重複したポリシー管理を排除。"), tags: ["DLP", "CASB"] },
              ]} />
            </div>
          </section>
          {/* <section className="specs">
            <div className="container">
              <div className="sec-heading"><div className="inner"><div data-reveal>
                <div className="eyebrow">PRODUCT SPEC</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>{t("주요 제품 스펙.", "Product Specifications.", "主な製品スペック。")}</h2>
              </div></div></div>
              <SpecTable rows={[
                [t("지원 포맷", "Supported Formats", "対応フォーマット"), t("Office · PDF · HWP · CAD(DWG/DXF) · PSD · AI · ZIP · 영상 · 이미지 — 40+종", "Office · PDF · HWP · CAD (DWG/DXF) · PSD · AI · ZIP · Video · Image — 40+ types", "Office · PDF · HWP · CAD(DWG/DXF) · PSD · AI · ZIP · 動画 · 画像 — 40種以上")],
                [t("암호화", "Encryption", "暗号化"), <><b>AES-256</b> · {t("국정원 검증 암호 모듈", "NIS-validated crypto module", "国情院検証済み暗号モジュール")} · {t("PKI 기반 키 관리", "PKI-based key management", "PKIベースの鍵管理")}</>],
                [t("클라이언트", "Client", "クライアント"), t("Windows · macOS · iOS · Android · 웹뷰어 · 외부용 포터블 뷰어", "Windows · macOS · iOS · Android · Web Viewer · Portable Viewer for external recipients", "Windows · macOS · iOS · Android · Webビューアー · 外部向けポータブルビューアー")],
                [t("서버", "Server", "サーバー"), t("온프레미스 / 프라이빗 클라우드 · HA 구성 · Active Directory 연동", "On-Premises / Private Cloud · HA configuration · Active Directory integration", "オンプレミス / プライベートクラウド · HA構成 · Active Directory連携")],
                [t("컴플라이언스", "Compliance", "コンプライアンス"), t("개인정보보호법 · ISMS-P · CC EAL4 인증", "PIPA · ISMS-P · CC EAL4 certified", "個人情報保護法 · ISMS-P · CC EAL4 認証")],
              ]} />
            </div>
          </section> */}
        </>
      )}

      {activeTab === "docuray-drm" && (
        <SvcPanel
          eyebrow="PRODUCT · DocuRAY DRM"
          title={t(<>만들어지는 순간부터,<br /><em>암호화</em>됩니다.</>, <>From the moment it&apos;s created —<br /><em>encrypted</em>.</>, <>作られた瞬間から、<br /><em>暗号化</em>されます。</>)}
          lede={t("파일이 저장되는 순간 AES-256으로 자동 암호화되며, 사용자는 별도 동작 없이 평소처럼 작업합니다. 40+ 포맷을 지원하며, 국정원 검증 암호 모듈을 사용해 공공기관 도입에도 적합합니다.", "Files are automatically AES-256 encrypted the moment they are saved. Users work as usual with no extra steps. 40+ formats supported, using NIS-validated crypto modules suitable for public-sector deployments.", "ファイルが保存される瞬間にAES-256で自動暗号化され、ユーザーは特別な操作なくいつも通り作業できます。40以上のフォーマットに対応し、国情院検証済み暗号モジュールを使用するため公共機関への導入にも適しています。")}
          points={[
            { title: t("투명 암호화", "Transparent Encryption", "透過的暗号化"), body: t("사용자가 파일을 저장하는 순간 AES-256 자동 암호화. 별도 버튼·동작 불필요. 체감 성능 저하 없음.", "AES-256 auto-encryption the moment the user saves a file. No extra buttons or actions needed. No perceptible performance impact.", "ユーザーがファイルを保存する瞬間にAES-256で自動暗号化。専用ボタンや操作は不要。体感できる性能低下なし。") },
            { title: t("40+ 포맷 지원", "40+ Format Support", "40以上のフォーマット対応"), body: t("Office(DOCX·XLSX·PPTX), HWP, PDF, CAD(DWG/DXF), PSD, AI, ZIP, 영상, 이미지 등 40종 이상.", "Office (DOCX, XLSX, PPTX), HWP, PDF, CAD (DWG/DXF), PSD, AI, ZIP, video, image — 40+ types.", "Office（DOCX·XLSX·PPTX）、HWP、PDF、CAD（DWG/DXF）、PSD、AI、ZIP、動画、画像など40種以上。") },
            { title: t("국정원 검증 암호 모듈", "NIS-Validated Crypto Module", "国情院検証済み暗号モジュール"), body: t("국가정보원 검증 암호 알고리즘 탑재. 공공기관·금융·의료 규제 요건 충족.", "Uses National Intelligence Service-validated cryptographic algorithms. Meets public sector, finance, and healthcare regulatory requirements.", "国家情報院の検証済み暗号アルゴリズムを搭載。公共機関・金融・医療の規制要件を満たします。") },
            { title: t("PKI 기반 키 관리", "PKI Key Management", "PKIベースの鍵管理"), body: t("사용자·그룹 단위 PKI 기반 키 발급·폐기. 퇴사 즉시 키 비활성화, 기존 파일 자동 잠금.", "PKI-based key issuance and revocation per user and group. Immediate key deactivation and auto-lock of existing files on resignation.", "ユーザー・グループ単位でPKIベースの鍵発行・失効。退職と同時に鍵を無効化し、既存ファイルを自動ロック。") },
          ]}
          imgSrc="/assets/bluemoon/encrypt.png" imgAlt="파일 자동 암호화 구조도"
        />
      )}
      {activeTab === "dlp" && (
        <SvcPanel
          eyebrow="PRODUCT · DLP & CASB INTEGRATION"
          title={t(<>기존 보안 체계와<br /><em>통합</em>됩니다.</>, <>Integrated with your<br /><em>existing security stack</em>.</>, <>既存のセキュリティ体系と<br /><em>統合</em>されます。</>)}
          lede={t("이미 도입된 DLP·CASB·SIEM 솔루션과 연동해 정책 중복 없이 이중 방어를 구성합니다. REST API를 통해 사내 포털·ERP·결재 시스템과도 자유롭게 통합할 수 있습니다.", "Integrates with existing DLP, CASB, and SIEM solutions for double-layered defense without policy duplication. REST API enables free integration with internal portals, ERPs, and approval systems.", "すでに導入済みのDLP・CASB・SIEMソリューションと連携し、ポリシーの重複なく二重防御を構成します。REST APIを通じて社内ポータル・ERP・決裁システムとも自由に統合できます。")}
          points={[
            { title: t("DLP 연동", "DLP Integration", "DLP連携"), body: t("기존 DLP 솔루션의 정책과 연동해 이중 방어. DRM 적용 파일에 DLP 태그 자동 부여.", "Integrates with existing DLP policies for double-layered defense. DLP tags automatically assigned to DRM-protected files.", "既存のDLPソリューションのポリシーと連携して二重防御。DRM適用ファイルにDLPタグを自動付与。") },
            { title: t("CASB 연동", "CASB Integration", "CASB連携"), body: t("SharePoint·OneDrive·Box 등 클라우드 스토리지에 업로드해도 암호화 유지. CASB 정책과 연동.", "Encryption maintained when uploaded to SharePoint, OneDrive, Box, and other cloud storage. Integrates with CASB policies.", "SharePoint・OneDrive・Boxなどのクラウドストレージにアップロードしても暗号化を維持。CASBポリシーと連携。") },
            { title: t("SIEM 연동", "SIEM Integration", "SIEM連携"), body: t("파일 보안 이벤트를 Syslog/CEF 포맷으로 SIEM에 실시간 전송. 통합 위협 탐지·상관 분석에 활용.", "Real-time file security events forwarded to SIEM in Syslog/CEF format for integrated threat detection and correlation analysis.", "ファイルのセキュリティイベントをSyslog/CEF形式でSIEMにリアルタイム送信。統合的な脅威検知・相関分析に活用。") },
            { title: t("REST API 연동", "REST API Integration", "REST API連携"), body: t("REST API 제공. 사내 포털·ERP·HR·결재 시스템과 자유로운 통합 가능. Webhook 지원.", "REST API provided for free integration with internal portals, ERPs, HR, and approval systems. Webhook support included.", "REST APIを提供。社内ポータル・ERP・HR・決裁システムと自由に統合可能。Webhookに対応。") },
          ]}
          imgSrc="/assets/bluemoon/dlp.png" imgAlt="DLP · CASB 연동 구조도"
        />
      )}

      <CtaBand
        heading={t(<>문서 한 장의<br /><em>안전</em>부터.</>, <>Start with the safety<br />of every <em>document</em>.</>, <>文書1枚の<br /><em>安全</em>から。</>)}
        btnLabel={t("도입 상담", "Request Consultation", "導入のご相談")}
      />
      <RelatedBlock items={[
        { href: "/ssq-co/edr", k: "PORTFOLIO · 02", h5: t("에브리존 · 안티랜섬웨어", "Everyzone · Endpoint", "Everyzone · エンドポイント"), p: t("파일 암호화 공격까지 함께 차단.", "Block file encryption attacks alongside DRM.", "ファイル暗号化攻撃まで併せて遮断。") },
        { href: "/ssq-co/mfa",      k: "PORTFOLIO · 05", h5: t("한국정보인증 · MFA",       "KICA · MFA", "KICA · MFA"),          p: t("열람 권한을 인증과 결합.", "Combine view permissions with authentication.", "閲覧権限を認証と組み合わせ。") },
      ]} />
    </>
  );
}
