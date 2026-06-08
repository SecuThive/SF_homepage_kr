"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, RelatedBlock, SolutionCrumbs, SpecTable, SolTabsNav, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "otp" | "fido";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview", label: t("개요",  "Overview", "概要") },
    { id: "otp",      label: "OTP" },
    { id: "fido",     label: "FIDO" },
  ];

  return (
    <>
      <SiteHeader activeId="ssq-co" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="KICA" />
          <div className="layout">
            <div>
              <div className="partner-meta">
                <span className="chip solid">PORTFOLIO · 05</span>
                <span className="chip">TECHNOLOGY PARTNER</span>
                <span className="chip accent">KICA · {t("한국정보인증", "KICA", "韓国情報認証")}</span>
              </div>
              <h1>any auth</h1>
              <p className="sol-hero-sub">{t("MFA 통합 인증 플랫폼", "Multi-Factor Authentication Platform", "MFA統合認証プラットフォーム")}</p>
              <p className="lede">
                {t(
                  <><b>국내 1호 공인인증기관(1999)</b>이 만든 멀티기반 통합 인증 플랫폼. OTP · FIDO2 · PKI · 생체인증을 하나로 통합하며, 국내 MFA·2차인증 시장 1위(조달기준)를 유지합니다.</>,
                  <>Multi-factor authentication platform from Korea's first accredited CA (est. 1999). Unifies OTP, FIDO2, PKI, and biometrics. No.1 share in Korea's MFA market (procurement basis).</>,
                  <><b>韓国初の公認認証機関(1999)</b>が手がけたマルチベースの統合認証プラットフォーム。OTP · FIDO2 · PKI · 生体認証を一つに統合し、韓国のMFA・二要素認証市場で1位(調達基準)を維持しています。</>,
                )}
              </p>
            </div>
            <div className="sol-hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/kica/hero.png" alt="GrippinTower 제품 소개" />
            </div>
          </div>
          <div className="sol-stats">
            <div><div className="n">FIDO2<sup>®</sup></div><div className="l">UAF · FIDO2 Certified</div></div>
            <div><div className="n">1999<sup>~</sup></div><div className="l">{t("국내 1호 공인인증기관", "Korea's 1st Accredited CA", "韓国初の公認認証機関")}</div></div>
            <div><div className="n">3,000<sup>+</sup></div><div className="l">{t("사용처", "Customer Sites", "導入先")}</div></div>
            <div><div className="n">No.1<sup></sup></div><div className="l">{t("MFA 시장 점유율 (조달)", "MFA Market Share", "MFA市場シェア(調達)")}</div></div>
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
                    {t(<>{`비밀번호 너머의`}<br /><em>정체성</em>.</>, <>Identity<br />beyond <em>passwords</em>.</>, <>{`パスワードの先にある`}<br /><em>アイデンティティ</em>。</>)}
                  </h2>
                </div>
                <p className="section-lede" data-reveal data-reveal-delay="1">
                  {t("국내 최초 FIDO 인증 상용화·OTP 개발·공급사로서 쌓은 노하우를 GrippinTower에 집약해 공공·금융·기업 환경으로 확장합니다.", "Know-how from Korea's first commercial FIDO deployment and OTP development distilled into GrippinTower — extended to public, financial, and enterprise environments.", "韓国初のFIDO認証商用化・OTP開発・供給企業として培ったノウハウをGrippinTowerに集約し、公共・金融・企業環境へ拡張します。")}
                </p>
              </div></div>
              <FeaturesGrid items={[
                { num: "FEATURE / 01", icon: <svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="1" /><path d="M8 11V7a4 4 0 118 0v4" /></svg>, title: t("다중 인증 요소", "Multi-Factor Auth", "多要素認証"), body: t("지식(PW)·소유(OTP/스마트카드)·생체(지문·얼굴)를 조합 구성.", "Combine knowledge (PW), possession (OTP/smart card), and biometric (fingerprint/face) factors.", "知識(PW)・所持(OTP/スマートカード)・生体(指紋・顔)を組み合わせて構成。"), tags: ["Knowledge", "Possession", "Biometric"] },
                { num: "FEATURE / 02", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /></svg>, title: t("FIDO2 · 패스키", "FIDO2 · Passkey", "FIDO2 · パスキー"), body: t("생체+기기 기반 Passwordless. 피싱 내성·사용자 경험 동시 확보.", "Biometric + device-based Passwordless. Phishing resistance and great UX in one.", "生体+デバイスベースのPasswordless。フィッシング耐性とユーザー体験を同時に確保。"), tags: ["FIDO2", "WebAuthn", "Passkey"] },
                { num: "FEATURE / 03", icon: <svg viewBox="0 0 24 24"><path d="M6 3h12v18H6z" /><circle cx="12" cy="18" r="1" /></svg>, title: t("PKI · 공인인증", "PKI · Digital Signature", "PKI · 公認認証"), body: t("국정원 기준 공인 인증서 기반 전자서명 · 내부 승인 자동화.", "NIS-grade PKI-based digital signatures and automated internal approval workflows.", "国情院基準の公認証明書に基づく電子署名・内部承認の自動化。"), tags: ["PKI", t("전자서명", "e-Signature", "電子署名")] },
                { num: "FEATURE / 04", icon: <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>, title: "Adaptive Auth", body: t("위치·디바이스·접속 시간 등 컨텍스트에 따라 인증 수준 동적 조정.", "Dynamically adjusts authentication strength based on location, device, time, and other context.", "位置・デバイス・接続時間などコンテキストに応じて認証レベルを動的に調整。"), tags: ["Risk-based", "Context"] },
                { num: "FEATURE / 05", icon: <svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="3" /><circle cx="18" cy="12" r="3" /><path d="M9 12h6" /></svg>, title: t("표준 프로토콜", "Standard Protocols", "標準プロトコル"), body: t("SAML 2.0 · OIDC · OAuth 2.1 · SCIM — 기존 시스템 간편 연동.", "SAML 2.0 · OIDC · OAuth 2.1 · SCIM — seamless integration with existing systems.", "SAML 2.0 · OIDC · OAuth 2.1 · SCIM — 既存システムと簡単に連携。"), tags: ["SAML", "OIDC", "SCIM"] },
                { num: "FEATURE / 06", icon: <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10" /></svg>, title: t("감사 · 분석", "Audit & Analytics", "監査 · 分析"), body: t("인증 이벤트 전량 수집 · 이상 로그인 감지 리포트 · SIEM 연동.", "Full auth event collection, anomalous login detection reports, and SIEM integration.", "認証イベントの全量収集・異常ログイン検知レポート・SIEM連携。"), tags: ["Audit", "SIEM"] },
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
                [t("제품명", "Product", "製品名"), <><b>GrippinTower</b> · {t("모바일 인증 앱", "Mobile Auth App", "モバイル認証アプリ")} <b>AnyAUTH</b></>],
                [t("인증 요소", "Auth Factors", "認証要素"), <>PW · <b>OTP(소프트·하드)</b> · <b>FIDO2/Passkey</b> · <b>PKI</b> · {t("생체", "Biometric", "生体")} · {t("스마트카드", "Smart Card", "スマートカード")} · {t("푸시", "Push", "プッシュ")}</>],
                [t("프로토콜", "Protocols", "プロトコル"), "SAML 2.0 · OIDC · OAuth 2.1 · SCIM 2.0 · LDAP · Kerberos"],
                [t("인증", "Certifications", "認証"), <><b>FIDO UAF · FIDO2 Certified</b> · {t("국정원 보안성검증필", "NIS Security Validated", "国情院セキュリティ検証済")} · GS인증 · {t("전자금융 OTP", "e-Finance OTP", "電子金融OTP")}</>],
                [t("배포", "Deployment", "デプロイ"), t("온프레미스 · 프라이빗 클라우드 · 하이브리드 · 이중화 구성", "On-Premises · Private Cloud · Hybrid · HA Configuration", "オンプレミス · プライベートクラウド · ハイブリッド · 二重化構成")],
                [t("지원 플랫폼", "Platforms", "対応プラットフォーム"), t("Windows · macOS · iOS · Android · Web — 전 플랫폼 SDK 제공", "Windows · macOS · iOS · Android · Web — SDK for all platforms", "Windows · macOS · iOS · Android · Web — 全プラットフォームのSDKを提供")],
              ]} />
            </div>
          </section> */}
        </>
      )}

      {activeTab === "otp" && (
        <SvcPanel
          eyebrow="PRODUCT · OTP"
          title={t(<>소프트·하드 OTP,<br /><em>모바일 인증</em>을 통합합니다.</>, <>Soft & Hard OTP —<br />unified <em>mobile authentication</em>.</>, <>ソフト・ハードOTP、<br /><em>モバイル認証</em>を統合します。</>)}
          lede={t("단일 비밀번호의 취약점을 다중 인증 요소의 조합으로 극복합니다. any auth는 OTP·스마트카드·생체인증·푸시 알림을 하나의 플랫폼에서 통합 관리하며, 모바일 인증 앱 AnyAUTH를 통해 소프트 OTP와 푸시 인증을 지원합니다.", "Overcome the weaknesses of single passwords through multi-factor combinations. any auth manages OTP, smart card, biometrics, and push notifications on one platform. The AnyAUTH mobile app supports soft OTP and push authentication.", "単一パスワードの脆弱性を多要素認証の組み合わせで克服します。any authはOTP・スマートカード・生体認証・プッシュ通知を一つのプラットフォームで統合管理し、モバイル認証アプリAnyAUTHを通じてソフトOTPとプッシュ認証をサポートします。")}
          points={[
            { title: t("인증 요소 조합", "Factor Combination", "認証要素の組み合わせ"), body: t("지식(비밀번호·PIN)·소유(OTP·스마트카드)·생체(지문·얼굴·홍채)·푸시 중 2개 이상 조합.", "Combine two or more of: knowledge (password, PIN), possession (OTP, smart card), biometric (fingerprint, face, iris), and push.", "知識(パスワード・PIN)・所持(OTP・スマートカード)・生体(指紋・顔・虹彩)・プッシュのうち2つ以上を組み合わせ。") },
            { title: t("소프트·하드 OTP", "Soft & Hard OTP", "ソフト・ハードOTP"), body: t("모바일 앱 기반 소프트 OTP와 하드웨어 토큰 모두 지원. TOTP/HOTP 표준 준수.", "Both mobile app-based soft OTP and hardware tokens supported. TOTP/HOTP standard compliant.", "モバイルアプリベースのソフトOTPとハードウェアトークンの両方に対応。TOTP/HOTP標準に準拠。") },
            { title: t("생체인증", "Biometric Authentication", "生体認証"), body: t("지문·얼굴·홍채를 기기 내 처리(on-device). 생체 정보가 서버로 전송되지 않음.", "Fingerprint, face, and iris processed on-device. Biometric data never transmitted to the server.", "指紋・顔・虹彩を端末内で処理(on-device)。生体情報はサーバーへ送信されません。") },
            { title: t("푸시 인증", "Push Authentication", "プッシュ認証"), body: t("모바일 앱에 푸시 알림으로 인증 요청. 한 번의 탭으로 승인. 피싱 저항성 확보.", "Authentication requests sent as push notifications to the mobile app. Approved with a single tap. Phishing resistant.", "モバイルアプリにプッシュ通知で認証を要求。ワンタップで承認。フィッシング耐性を確保。") },
          ]}
          imgSrc="/assets/kica/OTP_map.png" imgAlt={t("GrippinTower OTP 인증 플로우 구조도", "GrippinTower OTP authentication flow diagram", "GrippinTower OTP認証フロー構成図")}
        />
      )}
      {activeTab === "fido" && (
        <SvcPanel
          eyebrow="FEATURE / 02 · FIDO2 · PASSKEY"
          title={t(<>비밀번호 없이,<br /><em>피싱 내성</em>을 확보합니다.</>, <>No password —<br /><em>phishing-resistant</em> by design.</>, <>パスワードなしで、<br /><em>フィッシング耐性</em>を確保します。</>)}
          lede={t("FIDO2·WebAuthn 표준으로 비밀번호 없이 기기와 생체인증만으로 로그인하는 Passwordless 환경을 구현합니다. 피싱·크리덴셜 스터핑 공격을 구조적으로 차단하면서도 사용자 경험은 개선됩니다.", "FIDO2/WebAuthn standard enables Passwordless login using only device and biometrics. Structurally blocks phishing and credential stuffing attacks while improving the user experience.", "FIDO2・WebAuthn標準により、パスワードなしでデバイスと生体認証だけでログインするPasswordless環境を実現します。フィッシング・クレデンシャルスタッフィング攻撃を構造的に遮断しつつ、ユーザー体験を改善します。")}
          points={[
            { title: t("FIDO2 Certified", "FIDO2 Certified", "FIDO2 Certified"), body: t("FIDO Alliance 공식 인증 취득. FIDO2·WebAuthn·CTAP2 완전 지원.", "Officially FIDO Alliance certified. Full support for FIDO2, WebAuthn, and CTAP2.", "FIDO Alliance公式認証を取得。FIDO2・WebAuthn・CTAP2を完全サポート。") },
            { title: t("패스키 (Passkey)", "Passkey", "パスキー (Passkey)"), body: t("애플·구글·마이크로소프트 패스키 생태계와 호환. 기기 간 동기화 지원.", "Compatible with Apple, Google, and Microsoft Passkey ecosystems. Cross-device synchronization supported.", "Apple・Google・Microsoftのパスキーエコシステムと互換。デバイス間の同期に対応。") },
            { title: t("피싱 내성", "Phishing Resistance", "フィッシング耐性"), body: t("인증 자격증명이 기기에 묶여 외부로 유출 불가. 피싱·중간자 공격 원천 차단.", "Authentication credentials bound to the device and cannot be extracted. Phishing and man-in-the-middle attacks structurally blocked.", "認証クレデンシャルがデバイスに紐づき外部への流出が不可能。フィッシング・中間者攻撃を根本から遮断。") },
            { title: t("기존 시스템 연동", "Legacy System Integration", "既存システム連携"), body: t("FIDO2를 지원하지 않는 레거시 시스템에 어댑터 제공. 점진적 전환 지원.", "Adapters provided for legacy systems without FIDO2 support. Gradual migration supported.", "FIDO2に対応していないレガシーシステムにアダプターを提供。段階的な移行をサポート。") },
          ]}
          imgSrc="/assets/kica/FIDO_map.png" imgAlt={t("GrippinTower FIDO 인증 플로우 구조도", "GrippinTower FIDO authentication flow diagram", "GrippinTower FIDO認証フロー構成図")}
        />
      )}

      <CtaBand
        heading={t(<>비밀번호 너머의<br /><em>신뢰</em>로.</>, <>Trust<br />beyond <em>passwords</em>.</>, <>パスワードの先にある<br /><em>信頼</em>へ。</>)}
        btnLabel={t("MFA 도입 상담", "Request MFA Consultation", "MFA導入の相談")}
      />
      <RelatedBlock items={[
        { href: "/ssq-co/dbsafer", k: "PORTFOLIO · 06", h5: t("피앤피시큐어 · 접근제어", "PnP Secure · Access Control", "ピーアンドピーセキュア · アクセス制御"), p: t("인증 이후 권한까지 통제.", "Control privileges beyond authentication.", "認証後の権限まで統制。") },
        { href: "/ssq-co/drm",  k: "PORTFOLIO · 03", h5: t("블루문소프트 · DRM",       "Bluemoon Soft · DRM",         "ブルームーンソフト · DRM"),         p: t("인증과 파일 권한 결합.", "Combine authentication with file-level permissions.", "認証とファイル権限を結合。") },
      ]} />
    </>
  );
}
