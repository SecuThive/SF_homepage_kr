/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // 로케일 포함 경로 기준(미들웨어가 비접두 요청에 로케일을 먼저 부여)
      // SSQ.io (NSHC) 제품: 구 ssq-ai 경로 → ssq-io 로 이동
      { source: "/:lang(ko|en|ja)/ssq-ai/asm", destination: "/:lang/ssq-io/asm", permanent: true },
      { source: "/:lang(ko|en|ja)/ssq-ai/sbom", destination: "/:lang/ssq-io/sbom", permanent: true },
      { source: "/:lang(ko|en|ja)/ssq-ai/hel", destination: "/:lang/ssq-io/hel", permanent: true },
      { source: "/:lang(ko|en|ja)/arcus-ai/asm", destination: "/:lang/ssq-io/asm", permanent: true },
      { source: "/:lang(ko|en|ja)/arcus-ai/sbom", destination: "/:lang/ssq-io/sbom", permanent: true },
      { source: "/:lang(ko|en|ja)/arcus-ai/pentester", destination: "/:lang/ssq-ai/pentester", permanent: true },
      { source: "/:lang(ko|en|ja)/solutions/kica", destination: "/:lang/ssq-co/mfa", permanent: true },
      { source: "/:lang(ko|en|ja)/solutions/pnpsecure", destination: "/:lang/ssq-co/dbsafer", permanent: true },
      { source: "/:lang(ko|en|ja)/solutions/everyzone", destination: "/:lang/ssq-co/edr", permanent: true },
      { source: "/:lang(ko|en|ja)/solutions/bluemoon", destination: "/:lang/ssq-co/drm", permanent: true },
      // Codewise(Omega SBOM)는 NSHC 제품으로 통합 → NSHC SBOM 페이지로
      { source: "/:lang(ko|en|ja)/solutions/codewise", destination: "/:lang/ssq-io/sbom", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
