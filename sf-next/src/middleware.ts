import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["ko", "en", "ja"];
const DEFAULT_LOCALE = "ko";

/** 쿠키 → Accept-Language → 기본(ko) 순으로 로케일 결정 */
function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && LOCALES.includes(cookie)) return cookie;

  const accept = (req.headers.get("accept-language") || "").toLowerCase();
  const first = accept.split(",")[0]?.trim() ?? "";
  if (first.startsWith("ja")) return "ja";
  if (first.startsWith("en")) return "en";
  if (first.startsWith("ko")) return "ko";
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // api·_next·정적파일·sitemap·robots·assets 제외
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets|.*\\..*).*)"],
};
