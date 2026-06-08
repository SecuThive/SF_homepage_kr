import { NextResponse } from "next/server";
import popupsData from "@/data/popups.json";

// Cloudflare Pages(next-on-pages)는 동적 라우트에 edge 런타임 필요.
// 파일시스템 대신 빌드 시 번들되는 정적 import 사용(에지엔 fs 없음).
export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(popupsData, {
    headers: { "Cache-Control": "no-store" },
  });
}
