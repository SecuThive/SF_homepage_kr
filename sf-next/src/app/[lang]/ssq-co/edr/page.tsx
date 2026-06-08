"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { CtaBand, FeaturesGrid, FlowSteps, RelatedBlock, SolutionCrumbs, SpecTable, SolTabsNav, SvcPanel } from "@/components/SolutionBlocks";
import { useLang } from "@/lib/i18n";

type TabId = "overview" | "white-defender";

export default function Page() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs = [
    { id: "overview",       label: t("개요",           "Overview", "概要") },
    { id: "white-defender", label: "White Defender" },
  ];

  return (
    <>
      <SiteHeader activeId="ssq-co" />

      <section className="sol-hero">
        <div className="sol-hero-grid"></div>
        <div className="container">
          <SolutionCrumbs name="EVERYZONE" />
          <div className="layout">
            <div>
              <div className="partner-meta">
                <span className="chip solid">PORTFOLIO · 02</span>
                <span className="chip">TECHNOLOGY PARTNER</span>
                <span className="chip accent">EVERYZONE · ENDPOINT</span>
              </div>
              <h1>{t("안티랜섬웨어", "Anti-Ransomware", "アンチランサムウェア")}</h1>
              <p className="lede">
                {t(
                  <>25년 이상 터보백신 개발·연구 경험 기반의 <b>행위 탐지 TD 엔진</b>과 즉시 복원 <b>WR 엔진</b>으로 랜섬웨어를 원천 차단. 프로세스→서비스→커널 3단계 방어 체계를 적용합니다.</>,
                  <>Built on 25+ years of TurboVaccine R&D, <b>TD Engine (behavior detection)</b> and <b>WR Engine (rollback)</b> block ransomware at the source with a 3-layer defense: Process → Service → Kernel.</>,
                  <>25年以上のターボワクチン開発・研究の経験を基盤とした<b>行動検知TDエンジン</b>と即時復元の<b>WRエンジン</b>でランサムウェアを根本から遮断。プロセス→サービス→カーネルの3段階防御体系を適用します。</>,
                )}
              </p>
            </div>
            <div className="sol-hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/everyzone/whitedefender_hero.png" alt={t("에브리존 화이트디펜더 제품 소개", "Everyzone White Defender product", "Everyzone ホワイトディフェンダー製品紹介")} />
            </div>
          </div>
          <div className="sol-stats">
            <div><div className="n">GS<sup>1</sup></div><div className="l">{t("인증 1등급", "Certified Grade 1", "GS認証1等級")}</div></div>
            <div><div className="n">NIS<sup>✓</sup></div><div className="l">{t("국정원 보안인증", "Security Certified", "国情院セキュリティ認証")}</div></div>
            <div><div className="n">TD<sup>+WR</sup></div><div className="l">{t("2개 전용 엔진", "Dual Engines", "2つの専用エンジン")}</div></div>
            <div><div className="n">29<sup>YRS</sup></div><div className="l">{t("보안 SW 개발", "Security SW Dev.", "セキュリティSW開発")}</div></div>
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
                    {t(<>랜섬웨어{" "}<em>전 단계</em>를<br />차단합니다.</>, <>Block every <em>stage</em><br />of a ransomware attack.</>, <>ランサムウェアの{" "}<em>全段階</em>を<br />遮断します。</>)}
                  </h2>
                </div>
                <p className="section-lede" data-reveal data-reveal-delay="1">
                  {t("암호화 시도 이전, 중간, 이후 어느 단계에서도 피해가 확산되지 않도록 다층 방어를 구성합니다.", "Multi-layer defense ensures damage cannot spread at any stage — before, during, or after the encryption attempt.", "暗号化の試行前・最中・後のいずれの段階でも被害が拡大しないよう、多層防御を構成します。")}
                </p>
              </div></div>
              <FeaturesGrid items={[
                { num: "FEATURE / 01", icon: <svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z" /><path d="M8 10l3 3 5-5" /></svg>, title: t("행위 기반 탐지", "Behavior-Based Detection", "行動ベースの検知"), body: t("알려지지 않은 변종도 암호화·파일 조작 패턴으로 실시간 탐지. 머신러닝 기반 엔진.", "Detects unknown variants in real time via encryption and file manipulation patterns. ML-based engine.", "未知の亜種も暗号化・ファイル操作のパターンからリアルタイムに検知。機械学習ベースのエンジン。"), tags: ["ML Engine", "Zero-day"] },
                { num: "FEATURE / 02", icon: <svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" /><path d="M12 7v5l3 3" /></svg>, title: t("실시간 백업 & 롤백", "Real-Time Backup & Rollback", "リアルタイムバックアップ & ロールバック"), body: t("암호화된 파일을 원본으로 즉시 복원. 시간대별 스냅샷으로 업무 중단 없음.", "Instantly restores encrypted files to originals. Time-based snapshots keep operations uninterrupted.", "暗号化されたファイルを即座に元の状態へ復元。時間帯ごとのスナップショットで業務を中断させません。"), tags: ["Snapshot", "Instant Restore"] },
                { num: "FEATURE / 03", icon: <svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z" /><path d="M7 7h4v4H7zM13 7h4v4h-4zM7 13h4v4H7zM13 13h4v4h-4z" /></svg>, title: t("통합 관리 콘솔", "Unified Management Console", "統合管理コンソール"), body: t("수천 대 단말을 단일 대시보드로. 정책 배포·격리·리포팅을 원격으로 처리.", "Manage thousands of endpoints from one dashboard. Policy deployment, isolation, and reporting — all remote.", "数千台の端末を単一のダッシュボードで管理。ポリシー配布・隔離・レポートを遠隔で処理。"), tags: ["Central MGMT", "Remote Isolate"] },
                { num: "FEATURE / 04", icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>, title: t("취약점 자동 패치", "Auto Vulnerability Patching", "脆弱性の自動パッチ"), body: t("엔드포인트 OS·애플리케이션 취약점을 자동 점검·배포. 공격 표면 축소.", "Automatically scans and deploys patches for OS and application vulnerabilities. Reduces attack surface.", "エンドポイントのOS・アプリケーションの脆弱性を自動点検・配布。攻撃表面を縮小。"), tags: ["Auto Patch", "OS+App"] },
                { num: "FEATURE / 05", icon: <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10" /></svg>, title: t("로그 · 감사 대응", "Log & Audit Compliance", "ログ · 監査対応"), body: t("모든 파일 이벤트를 불변 로그로 저장. 내부 감사·ISMS-P 증빙으로 활용.", "All file events stored as immutable logs. Used as evidence for internal audits and ISMS-P.", "すべてのファイルイベントを改ざん不可のログとして保存。内部監査・ISMS-Pの証跡に活用。"), tags: ["Immutable Log", "ISMS-P"] },
                { num: "FEATURE / 06", icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" /></svg>, title: t("Offline 보호", "Offline Protection", "オフライン保護"), body: t("네트워크 단절 상태에서도 엔진이 독립 동작. 재연결 시 자동 동기화.", "Engine operates independently when disconnected. Auto-syncs on reconnect.", "ネットワーク切断状態でもエンジンが独立動作。再接続時に自動同期。"), tags: ["Standalone", "Auto Sync"] },
              ]} />
            </div>
          </section>
          {/* <section className="engagement">
            <div className="container">
              <div className="sec-heading"><div className="inner">
                <div data-reveal>
                  <div className="eyebrow">DEPLOYMENT FLOW</div>
                  <h2 className="section-title" style={{ marginTop: 28 }}>{t(<><em>2주</em>{" "}안에 운영 전환.</>, <>Live in<br /><em>2 weeks</em>.</>, <><em>2週間</em>で運用開始。</>)}</h2>
                </div>
                <p className="section-lede" data-reveal data-reveal-delay="1">
                  {t("기존 엔드포인트 보안 제품과 공존 검증 후 단계적 교체 또는 병행 운영을 지원합니다.", "After co-existence validation with existing endpoint security products, phased replacement or parallel operation is supported.", "既存のエンドポイントセキュリティ製品との共存検証後、段階的な置き換えまたは並行運用に対応します。")}
                </p>
              </div></div>
              <FlowSteps items={[
                { step: "01", title: t("환경 분석",    "Environment Analysis", "環境分析"),  body: t("OS·기존 백신·네트워크 세그먼트 조사.", "Survey OS, existing AV, and network segments.", "OS・既存ワクチン・ネットワークセグメントを調査。"),                               when: "Day 1–2" },
                { step: "02", title: t("파일럿 배포",  "Pilot Deployment", "パイロット配布"),       body: t("50–100대 단말 파일럿으로 호환성 검증.", "Validate compatibility with a 50–100 endpoint pilot.", "50〜100台の端末でパイロット配布し互換性を検証。"),                       when: "Day 3–5" },
                { step: "03", title: t("정책 설계",    "Policy Design", "ポリシー設計"),          body: t("부서별 차단 정책·예외 화이트리스트 설계.", "Design per-department block policies and exception whitelists.", "部署別の遮断ポリシー・例外ホワイトリストを設計。"),           when: "Day 5–8" },
                { step: "04", title: t("전사 배포",    "Full Deployment", "全社配布"),        body: t("MDM·SCCM 연계로 무인 배포, 진행률 모니터링.", "Silent deployment via MDM/SCCM with progress monitoring.", "MDM・SCCM連携で無人配布し、進捗をモニタリング。"),              when: "Day 8–12" },
                { step: "05", title: t("운영 이관",    "Operations Handover", "運用移管"),    body: t("관리자 교육, 모의 침투 훈련, 정기 리뷰 시작.", "Admin training, simulated attack drills, and regular review cycle launched.", "管理者教育、模擬侵入訓練、定期レビューを開始。"), when: "Day 12+" },
              ]} />
            </div>
          </section> */}
          {/* <section className="specs">
            <div className="container">
              <div className="sec-heading"><div className="inner"><div data-reveal>
                <div className="eyebrow">PRODUCT SPEC</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>{t("주요 제품 스펙.", "Product Specifications.", "主な製品スペック。")}</h2>
              </div></div></div>
              <SpecTable rows={[
                [t("인증", "Certifications", "認証"), <><b>GS인증 1등급</b> (2018.07) · <b>{t("국정원 보안인증확인서", "NIS Security Cert.", "国情院セキュリティ認証確認書")}</b> (2025.03)</>],
                [t("지원 OS", "Supported OS", "対応OS"), "Windows 10/11 · Windows Server 2016+ · Linux Server (RHEL/Ubuntu)"],
                [t("탐지 엔진", "Detection Engines", "検知エンジン"), t("TD 엔진 (Triple Defender) — 행위 탐지 · WR 엔진 (White Rollback) — 복원", "TD Engine (Triple Defender) — behavior detection · WR Engine (White Rollback) — file restore", "TDエンジン（Triple Defender）— 行動検知 · WRエンジン（White Rollback）— 復元")],
                [t("방어 계층", "Defense Layers", "防御レイヤー"), t("프로세스 레벨 → 서비스 레벨 → 커널 레벨 (3단계)", "Process level → Service level → Kernel level (3-stage)", "プロセスレベル → サービスレベル → カーネルレベル（3段階）")],
                [t("콘솔", "Console", "コンソール"), t("화이트시큐리티 클라우드 플랫폼 (중앙 관리) · 온프레미스 / 클라우드", "White Security Cloud Platform (central mgmt) · On-Premises / Cloud", "ホワイトセキュリティクラウドプラットフォーム（中央管理）· オンプレミス / クラウド")],
                [t("연동", "Integrations", "連携"), "SIEM (Syslog/CEF) · EDR · SOAR · AD/LDAP · MDM"],
              ]} />
            </div>
          </section> */}
        </>
      )}

      {activeTab === "white-defender" && (
        <SvcPanel
          eyebrow="PRODUCT · WHITE DEFENDER · TD Engine"
          title={t(<>시그니처 없이도,<br /><em>행위</em>로 탐지합니다.</>, <>No signature needed —<br />detected by <em>behavior</em>.</>, <>シグネチャがなくても、<br /><em>行動</em>で検知します。</>)}
          lede={t("화이트디펜더의 TD 엔진(Triple Defender Engine)은 프로세스→서비스→커널 3단계 방어 체계로 랜섬웨어의 의심 행위를 실시간 모니터링하고 차단합니다. 알려지지 않은 변종도 행동 패턴으로 즉시 탐지해 제로데이 공격에 효과적입니다.", "WhiteDefender's TD Engine (Triple Defender Engine) monitors and blocks ransomware at 3 defense layers — Process → Service → Kernel — in real time. Detects unknown variants instantly by behavioral pattern, making it effective against zero-day attacks.", "ホワイトディフェンダーのTDエンジン（Triple Defender Engine）は、プロセス→サービス→カーネルの3段階防御体系でランサムウェアの不審な挙動をリアルタイムにモニタリングし遮断します。未知の亜種も行動パターンから即座に検知し、ゼロデイ攻撃に効果的です。")}
          points={[
            { title: t("TD 엔진 — 3단계 방어", "TD Engine — 3-Layer Defense", "TDエンジン — 3段階防御"), body: t("프로세스 레벨 → 서비스 레벨 → 커널 레벨로 이어지는 독자적인 3단 방어 체계. 각 레이어에서 독립적으로 위협을 차단합니다.", "Proprietary 3-layer defense chain: Process level → Service level → Kernel level. Each layer independently blocks threats.", "プロセスレベル→サービスレベル→カーネルレベルへと続く独自の3段防御体系。各レイヤーで独立して脅威を遮断します。") },
            { title: t("행위 패턴 분석", "Behavioral Pattern Analysis", "行動パターン分析"), body: t("파일 대량 암호화, 확장자 변경, 백업 삭제 시도 등 랜섬웨어 특유의 행동 패턴을 실시간 분석.", "Real-time analysis of ransomware-specific patterns: mass file encryption, extension changes, and backup deletion attempts.", "ファイルの大量暗号化、拡張子変更、バックアップ削除の試行などランサムウェア特有の行動パターンをリアルタイム分析。") },
            { title: t("제로데이 대응", "Zero-Day Coverage", "ゼロデイ対応"), body: t("바이러스 DB 업데이트 없이도 새로운 변종 즉시 차단. 패턴 기반 탐지의 맹점을 완전히 극복.", "Blocks new variants immediately without DB updates. Completely overcomes the blind spots of signature-based detection.", "ウイルスDBの更新なしに新しい亜種を即座に遮断。シグネチャベース検知の盲点を完全に克服。") },
            { title: t("엔드포인트 내 직접 동작", "On-Endpoint Operation", "エンドポイント内で直接動作"), body: t("가상화 기반 샌드박스와 달리 엔드포인트 내부에서 직접 동작. 랜섬웨어의 탐지 우회 시도를 원천 차단합니다.", "Unlike virtualization-based sandboxes, operates directly inside the endpoint, eliminating detection evasion by ransomware.", "仮想化ベースのサンドボックスとは異なり、エンドポイント内部で直接動作。ランサムウェアの検知回避の試みを根本から遮断します。") },
          ]}
          imgSrc="/assets/everyzone/whitedefender.png" imgAlt="WhiteDefender 솔루션 구성도"
        />
      )}

      <CtaBand
        heading={t(<>암호화되기 <em>전에</em><br />막으세요.</>, <>Stop it<br /><em>before</em> it encrypts.</>, <>暗号化される<em>前に</em><br />止めましょう。</>)}
        btnLabel={t("PoC 요청 · 샘플 데모", "Request PoC · Sample Demo", "PoCのご依頼 · サンプルデモ")}
      />
      <RelatedBlock items={[
        { href: "/ssq-co/drm",  k: "PORTFOLIO · 03", h5: t("블루문소프트 · DRM",       "Bluemoon Soft · DRM", "Bluemoon Soft · DRM"),        p: t("문서 유출까지 함께 차단.", "Block document leaks alongside ransomware.", "文書漏洩まで併せて遮断。") },
        { href: "/ssq-co/dbsafer", k: "PORTFOLIO · 05", h5: t("피앤피시큐어 · 접근제어", "PnP Secure · Access Control", "PnP Secure · アクセス制御"), p: t("엔드포인트 탐지 후 계정 즉시 격리.", "Instantly isolate accounts after endpoint detection.", "エンドポイント検知後にアカウントを即座に隔離。") },
      ]} />
    </>
  );
}
