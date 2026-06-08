import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "SAFESQUARE — 검증된 보안 기술, 한 곳에서.",
    template: "%s — SAFESQUARE",
  },
  description:
    "SAFESQUARE는 국내·외 선도 보안 기업의 공식 기술·솔루션 파트너로서 6개 카테고리의 검증된 보안 솔루션을 도입 진단부터 구축·운영까지 책임집니다.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://safesquare.io"),
  openGraph: {
    type: "website",
    siteName: "SAFESQUARE",
    locale: "ko_KR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAFA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Noto+Serif+KR:wght@200;300;400;500&family=Noto+Sans+KR:wght@300;400;500;700&family=DM+Mono:wght@300;400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
