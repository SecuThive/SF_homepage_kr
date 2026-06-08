import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import fs from "fs";
import path from "path";
import SiteHeader from "@/components/SiteHeader";
import BusinessClient, { type SectorData } from "./BusinessClient";

export const metadata: Metadata = { title: "사업영역" };

function loadSectors(): SectorData[] {
  try {
    const file = path.join(process.cwd(), "src/data/business.json");
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return [];
  }
}

export default function BusinessPage() {
  const sectors = loadSectors();

  return (
    <>
      <SiteHeader activeId="business" />

      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="container">
          <div className="crumbs">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <span>BUSINESS</span>
          </div>
          <h1>
            도시와 산업,
            <br />
            <em>공공과 민간</em>
            <br />
            전반에서.
          </h1>
          <p className="lede">
            {sectors.length}개 핵심 영역에서 240여 개 기업·기관과 함께합니다. 각 산업의 규제·운영 특성에 맞춘
            레퍼런스 구성으로 빠른 도입을 지원합니다.
          </p>
        </div>
      </section>

      <BusinessClient sectors={sectors} />
    </>
  );
}
