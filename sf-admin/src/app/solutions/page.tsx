import type { Metadata } from "next";
import SolutionsAdmin from "./SolutionsAdmin";

export const metadata: Metadata = { title: "솔루션 관리 — SafeSquare Admin" };

export default function SolutionsPage() {
  return <SolutionsAdmin />;
}
