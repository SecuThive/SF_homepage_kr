import type { Metadata } from "next";
import PopupsAdmin from "./PopupsAdmin";

export const metadata: Metadata = { title: "팝업 관리 — SafeSquare Admin" };

export default function PopupsPage() {
  return <PopupsAdmin />;
}
