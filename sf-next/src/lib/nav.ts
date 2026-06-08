export type NavChild = {
  num: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn?: string;
  descJa?: string;
  cat: string;
  mark: string;
  href: string;
};
export type NavItem = {
  id: string;
  label: string;
  href: string;
  badge?: string;
  accent?: boolean;
  children?: NavChild[];
};

export const SS_NAV: NavItem[] = [
  { id: "about", label: "회사소개", href: "/about" },
  {
    id: "ssq-ai",
    label: "SSQ.ai",
    href: "#",
    children: [
      { num: "01", title: "Arcus AI ASM", titleEn: "Arcus AI ASM", mark: "A", cat: "ATTACK SURFACE", desc: "AI 기반 공격 표면 관리 · 자산 탐색 · 위협 분석", href: "/ssq-io/asm" },
      { num: "02", title: "Arcus AI SBOM", titleEn: "Arcus AI SBOM", mark: "S", cat: "SUPPLY CHAIN", desc: "소프트웨어 BOM 분석 · 공급망 보안 · CVE 매핑", href: "/ssq-io/sbom" },
      { num: "03", title: "Arcus AI Pentester", titleEn: "Arcus AI Pentester", mark: "P", cat: "SECURITY ASSESSMENT", desc: "AI를 활용한 보안 진단 자동화 서비스", descEn: "AI-Driven Automated Security Assessment", descJa: "AIを活用したセキュリティ診断自動化サービス", href: "/ssq-ai/pentester" },
    ],
  },
  {
    id: "ssq-co",
    label: "SSQ.co",
    href: "#",
    children: [
      { num: "01", title: "MFA", titleEn: "MFA", mark: "M", cat: "IDENTITY · MFA", desc: "다중요소인증 · FIDO2 · PKI", href: "/ssq-co/mfa" },
      { num: "02", title: "DBSAFER", titleEn: "DBSAFER", mark: "D", cat: "ACCESS CONTROL", desc: "DB · 시스템 · OS 접근제어", href: "/ssq-co/dbsafer" },
      { num: "03", title: "DRM", titleEn: "DRM", mark: "D", cat: "DATA SECURITY", desc: "파일 단위 DRM · 문서보안 · 암호화", href: "/ssq-co/drm" },
      { num: "04", title: "EDR", titleEn: "EDR", mark: "E", cat: "ENDPOINT", desc: "안티랜섬웨어 · 행위 기반 탐지 · 롤백", href: "/ssq-co/edr" },
    ],
  },
  {
    id: "ssq-soc",
    label: "SSQ.soc",
    href: "#",
    children: [
      { num: "01", title: "Arcus Zero-Trust", titleEn: "Arcus Zero-Trust", mark: "Z", cat: "ZERO TRUST", desc: "Zero Trust 기반 보안 플랫폼", descEn: "Zero Trust Security Platform", descJa: "ゼロトラストベースのセキュリティプラットフォーム", href: "/ssq-trust/arcus" },
      { num: "02", title: "Arcus IAM", titleEn: "Arcus IAM", mark: "I", cat: "IDENTITY · ACCESS", desc: "통합 계정 관리 · 접근 통제 · IAM", descEn: "Unified Identity & Access Management · IAM", descJa: "統合ID・アクセス管理 · IAM", href: "/ssq-soc/iam" },
    ],
  },
  { id: "news", label: "뉴스", href: "/news" },
];
