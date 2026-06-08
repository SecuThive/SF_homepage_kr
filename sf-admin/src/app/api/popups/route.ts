import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

// Reads/writes sf-next's popup data directly (shared filesystem)
const FILE = path.join(process.cwd(), "../sf-next/src/data/popups.json");

function readData() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf-8"));
  } catch {
    return { popups: [] };
  }
}

export async function GET() {
  return NextResponse.json(readData());
}

export async function PUT(req: Request) {
  const body = await req.json();
  fs.writeFileSync(FILE, JSON.stringify(body, null, 2));
  return NextResponse.json({ ok: true });
}
