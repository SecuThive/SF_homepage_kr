import { notFound } from "next/navigation";
import ScrollEffects from "@/components/ScrollEffects";
import SiteFooter from "@/components/SiteFooter";
import { LangProvider, type Lang } from "@/lib/i18n";

// 서버 컴포넌트이므로 로케일 목록을 로컬 상수로 둔다(클라이언트 모듈의 값을 server에서 .map 하면 에러)
const LOCALES = ["ko", "en", "ja"];

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

// ko/en/ja 만 prerender하고 그 외 로케일은 404.
export const dynamicParams = false;

// Cloudflare(next-on-pages)는 모든 라우트 함수가 edge 런타임이어야 함.
// 레이아웃에 선언하면 하위 [lang] 페이지 전체에 상속된다.
export const runtime = "edge";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!LOCALES.includes(params.lang)) notFound();
  return (
    <LangProvider initialLang={params.lang as Lang}>
      {children}
      <SiteFooter />
      <ScrollEffects />
    </LangProvider>
  );
}
