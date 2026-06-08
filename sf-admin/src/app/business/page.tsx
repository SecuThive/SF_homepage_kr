import type { Metadata } from "next";
import BusinessAdmin from "./BusinessAdmin";

export const metadata: Metadata = { title: "사업영역 관리 — SafeSquare Admin" };

export default function BusinessPage() {
  return <BusinessAdmin />;
}
