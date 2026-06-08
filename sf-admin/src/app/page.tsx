import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "대시보드 — SafeSquare Admin" };

function readCount(file: string): number {
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf-8"));
    return Array.isArray(data) ? data.length : (data.popups?.length ?? 0);
  } catch {
    return 0;
  }
}

export default function Dashboard() {
  const businessFile = path.join(process.cwd(), "../sf-next/src/data/business.json");
  const solutionsFile = path.join(process.cwd(), "src/data/solutions.json");
  const popupsFile = path.join(process.cwd(), "../sf-next/src/data/popups.json");

  const sectorCount = readCount(businessFile);
  const solutionCount = readCount(solutionsFile);
  const popupCount = readCount(popupsFile);

  return (
    <>
      <div className="admin-header">
        <h1>대시보드</h1>
      </div>
      <div className="admin-content">
        <div className="stat-cards">
          <div className="stat-card">
            <div className="s-label">사업영역</div>
            <div className="s-val">{sectorCount}</div>
            <div className="s-sub">등록된 섹터</div>
          </div>
          <div className="stat-card">
            <div className="s-label">솔루션</div>
            <div className="s-val">{solutionCount}</div>
            <div className="s-sub">파트너 솔루션</div>
          </div>
          <div className="stat-card">
            <div className="s-label">도입 기관</div>
            <div className="s-val">240+</div>
            <div className="s-sub">누적 레퍼런스</div>
          </div>
          <div className="stat-card">
            <div className="s-label">가동률</div>
            <div className="s-val">99.97%</div>
            <div className="s-sub">연평균</div>
          </div>
          <div className="stat-card">
            <div className="s-label">팝업</div>
            <div className="s-val">{popupCount > 0 ? popupCount : "—"}</div>
            <div className="s-sub">활성 팝업</div>
          </div>
        </div>

        <div className="grid-2">
          <div className="card">
            <div className="card-header">
              <h2>빠른 이동</h2>
            </div>
            <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="/business" className="btn btn-ghost" style={{ justifyContent: "flex-start" }}>🏙 사업영역 관리</a>
              <a href="/solutions" className="btn btn-ghost" style={{ justifyContent: "flex-start" }}>🔧 솔루션 관리</a>
              <a href="/popups" className="btn btn-ghost" style={{ justifyContent: "flex-start" }}>📢 팝업 관리</a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h2>안내</h2>
            </div>
            <div className="card-body" style={{ fontSize: "13.5px", color: "var(--ink-60)", lineHeight: "1.7" }}>
              <p>사이드바에서 각 콘텐츠 섹션으로 이동하여 내용을 편집하고 저장할 수 있습니다.</p>
              <p style={{ marginTop: "10px" }}>
                <b>사업영역</b>과 <b>팝업</b>은 저장 즉시 홈페이지에 반영됩니다.
              </p>
              <p style={{ marginTop: "10px" }}>
                솔루션 상세 내용은 솔루션 페이지에서 직접 관리됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
