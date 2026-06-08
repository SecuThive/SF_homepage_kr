# SAFESQUARE — Next.js

원본 정적 HTML(`/Users/mainthive/project/SF_page`)을 Next.js 14 App Router 기반의 프로덕션 웹서버로 포팅한 프로젝트입니다.

## 스택

- Next.js 14 (App Router) + React 18
- TypeScript (strict)
- 순수 CSS (원본 `shared.css` / `solution.css` 100% 유지)
- SSG/ISR 기본, 모든 페이지 정적 렌더
- `next/link` 기반 클라이언트 네비게이션
- `sitemap.ts`, `robots.ts`, OpenGraph 메타데이터

## 로컬 실행

```bash
npm install
npm run dev           # http://localhost:3000
```

## 프로덕션 빌드 / 구동

```bash
npm run build
npm run start         # PORT=3000 (기본)
```

## Docker

```bash
docker build -t safesquare-next .
docker run --rm -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://safesquare.io safesquare-next
```

## 라우팅

| 경로 | 페이지 |
| --- | --- |
| `/` | 홈 (index) |
| `/about` | 회사소개 |
| `/business` | 사업영역 |
| `/careers` | 채용 |
| `/clients` | 고객사 |
| `/contact` | 문의 |
| `/news` | 뉴스 |
| `/technology` | 기술·R&D |
| `/solutions/{nshc,everyzone,bluemoon,sumologic,kica,pnpsecure}` | 파트너 솔루션 |

## 환경 변수

| 키 | 기본값 | 설명 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://safesquare.io` | `metadataBase`, `sitemap.xml`, `robots.txt` 기준 URL |
| `PORT` | `3000` | 런타임 포트 |

## 디렉토리 구조

```
src/
  app/                 # App Router 페이지
    layout.tsx         # 폰트·글로벌 스타일·푸터·ScrollEffects
    page.tsx           # 홈
    {route}/page.tsx   # 각 페이지
    sitemap.ts, robots.ts
  components/
    SiteHeader.tsx     # 반응형 헤더 (client)
    SiteFooter.tsx
    ScrollEffects.tsx  # IntersectionObserver reveal + 카운터
    LiveClock.tsx      # 히어로 실시간 시계
    ChipGroup.tsx      # 칩 필터/체크
    ContactForm.tsx
    SolutionBlocks.tsx # cta-band / related / features / specs
  lib/nav.ts           # 네비게이션 데이터
  styles/
    shared.css         # 원본 공용 CSS
    solution.css       # 원본 솔루션 CSS
    pages.css          # 각 HTML의 inline <style>을 통합
    globals.css        # 위 3개 import
public/
  assets/safesquare-logo.avif
```

## 원본 HTML 대비 변경 사항

- `ssInit`, `ssHeader`, `ssFooter` 등 `shared.js` 런타임 주입 로직은 React 컴포넌트(`SiteHeader`, `SiteFooter`, `ScrollEffects`, `LiveClock`)로 전환.
- 모든 `*.html` 링크는 Next.js 라우트(`/about`, `/solutions/nshc` …)로 재작성.
- 홈 페이지의 `.flow`/`.flow-step` 은 솔루션 페이지 `.flow`/`.step` 과 충돌을 피하기 위해 `.flow-home`/`.flow-home-step` 으로 리네이밍 (CSS·JSX 동기).
- 디자인 토큰·레이아웃·애니메이션·미디어쿼리는 1:1 보존.
- 프로덕션 대비 보안 헤더(`X-Frame-Options`, `Referrer-Policy` 등)와 `/assets/*` 장기 캐시 헤더를 `next.config.mjs` 에 추가.
