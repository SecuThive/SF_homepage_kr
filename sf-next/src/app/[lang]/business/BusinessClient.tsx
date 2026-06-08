"use client";

import { useState } from "react";
import Link from "@/components/LocaleLink";

export interface SectorData {
  id: string;
  num: string;
  tag: string;
  title: string;
  desc: string;
  capabilities: string[];
  statVal: string;
  statUnit: string;
  refs: string[];
}

const STATS = [
  { val: "240+", label: "도입 기관·기업" },
  { val: "6", label: "핵심 사업 영역" },
  { val: "99.97%", label: "연평균 가동률" },
  { val: "18M+", label: "일일 분석 프레임" },
];

const VISUAL_KEY: Record<string, string> = {
  smartcity: "v1",
  finance: "v2",
  industrial: "v3",
  mobility: "v4",
  medical: "v5",
  retail: "v6",
};

function BizVisual({ v }: { v: string }) {
  const accent = "oklch(0.55 0.15 245)";
  const ink = "#0A0A0A";
  const line = "#E6E6E6";
  const ink40 = "#8A8A8A";

  if (v === "v1") {
    return (
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="biz-svg">
        {[50,100,150,200,250,300,350].map(x => (
          <line key={`gx${x}`} x1={x} y1="0" x2={x} y2="400" stroke={line} strokeWidth="0.8"/>
        ))}
        {[50,100,150,200,250,300,350].map(y => (
          <line key={`gy${y}`} x1="0" y1={y} x2="400" y2={y} stroke={line} strokeWidth="0.8"/>
        ))}
        {[[80,80],[320,80],[80,320],[320,320],[200,60],[60,200],[340,200],[200,340]].map(([cx,cy],i) => (
          <line key={i} x1={cx} y1={cy} x2="200" y2="200" stroke={accent} strokeWidth="0.6" opacity="0.4" strokeDasharray="4 4"/>
        ))}
        {[[80,80],[320,80],[80,320],[320,320],[200,60],[60,200],[340,200],[200,340],[150,150],[250,150],[150,250],[250,250]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill="white" stroke={ink} strokeWidth="0.8"/>
            <rect x={cx-5} y={cy-3} width="7" height="6" rx="1" fill={ink} opacity="0.7"/>
            <polygon points={`${cx+2},${cy-2} ${cx+7},${cy-4} ${cx+7},${cy+4} ${cx+2},${cy+2}`} fill={ink} opacity="0.5"/>
          </g>
        ))}
        <circle cx="200" cy="200" r="28" fill="white" stroke={ink} strokeWidth="1.2"/>
        <circle cx="200" cy="200" r="20" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.5"/>
        <circle cx="200" cy="200" r="4" fill={accent}/>
        <text x="200" y="215" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="6" letterSpacing="1.5" fill={ink40}>CONTROL</text>
        <circle cx="200" cy="200" r="36" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.3" className="biz-svg-pulse"/>
        <circle cx="200" cy="200" r="48" fill="none" stroke={accent} strokeWidth="0.4" opacity="0.15" className="biz-svg-pulse" style={{animationDelay:".6s"}}/>
        <text x="18" y="386" fontFamily="Manrope,sans-serif" fontSize="8" letterSpacing="3" fill={ink40}>CITY / PUBLIC SAFETY</text>
      </svg>
    );
  }
  if (v === "v2") {
    return (
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="biz-svg">
        {[60,90,120,150].map((r,i) => (
          <circle key={i} cx="200" cy="200" r={r} stroke={line} strokeWidth="0.8" strokeDasharray="3 5"/>
        ))}
        {[30,90,150,210,270,330].map((deg,i) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 200 + Math.cos(rad) * 155;
          const y1 = 200 + Math.sin(rad) * 155;
          const x2 = 200 + Math.cos(rad) * 62;
          const y2 = 200 + Math.sin(rad) * 62;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeWidth="0.7" opacity="0.5"/>;
        })}
        {[0,60,120,180,240,300].map((deg,i) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 200 + Math.cos(rad) * 160;
          const cy = 200 + Math.sin(rad) * 160;
          return (
            <g key={i}>
              <rect x={cx-12} y={cy-8} width="24" height="16" rx="2" fill="white" stroke={ink} strokeWidth="0.8"/>
              <circle cx={cx-5} cy={cy} r="2.5" fill={i % 2 === 0 ? accent : ink40} opacity="0.8"/>
              <line x1={cx+1} y1={cy-3} x2={cx+8} y2={cy-3} stroke={ink40} strokeWidth="0.6"/>
              <line x1={cx+1} y1={cy} x2={cx+6} y2={cy} stroke={ink40} strokeWidth="0.6"/>
              <line x1={cx+1} y1={cy+3} x2={cx+8} y2={cy+3} stroke={ink40} strokeWidth="0.6"/>
            </g>
          );
        })}
        <path d="M200,172 L220,180 L220,198 C220,210 212,220 200,226 C188,220 180,210 180,198 L180,180 Z" fill="white" stroke={ink} strokeWidth="1.2"/>
        <path d="M200,180 L212,186 L212,200 C212,208 207,214 200,218 C193,214 188,208 188,200 L188,186 Z" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.6"/>
        <circle cx="200" cy="199" r="4" fill={accent}/>
        <text x="200" y="244" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="6" letterSpacing="1.5" fill={ink40}>ZERO-TRUST</text>
        <text x="18" y="386" fontFamily="Manrope,sans-serif" fontSize="8" letterSpacing="3" fill={ink40}>FINANCE / DATA CENTER</text>
      </svg>
    );
  }
  if (v === "v3") {
    return (
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="biz-svg">
        <rect x="40" y="40" width="320" height="320" stroke={ink} strokeWidth="1" opacity="0.15"/>
        <line x1="40" y1="160" x2="200" y2="160" stroke={ink} strokeWidth="0.8" opacity="0.3"/>
        <line x1="200" y1="40" x2="200" y2="280" stroke={ink} strokeWidth="0.8" opacity="0.3"/>
        <line x1="200" y1="280" x2="360" y2="280" stroke={ink} strokeWidth="0.8" opacity="0.3"/>
        <line x1="300" y1="160" x2="300" y2="280" stroke={ink} strokeWidth="0.8" opacity="0.3"/>
        <rect x="220" y="60" width="120" height="80" fill={accent} opacity="0.05" stroke={accent} strokeWidth="0.8" strokeDasharray="4 3"/>
        <text x="280" y="105" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="7" letterSpacing="1.5" fill={accent} opacity="0.7">RESTRICTED</text>
        {[[100,100],[130,220],[160,80],[80,280],[250,320],[330,200],[310,320],[170,310]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="7" fill="white" stroke={i===2 ? "#e04" : ink} strokeWidth={i===2 ? "1.2" : "0.7"}/>
            <circle cx={cx} cy={cy-4} r="2.5" fill={i===2 ? "#e04" : ink} opacity="0.7"/>
            <path d={`M${cx-3},${cy-1} L${cx-4},${cy+5} M${cx+3},${cy-1} L${cx+4},${cy+5} M${cx-3},${cy-1} L${cx+3},${cy-1}`} stroke={i===2 ? "#e04" : ink} strokeWidth="0.8" opacity="0.7"/>
          </g>
        ))}
        <circle cx="160" cy="80" r="14" fill="none" stroke="#e04040" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" className="biz-svg-pulse"/>
        <text x="160" y="84" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="8" fontWeight="600" fill="#e04040" opacity="0.8">!</text>
        <polyline points="100,100 130,100 130,220" stroke={accent} strokeWidth="0.6" opacity="0.4" strokeDasharray="3 3"/>
        <polyline points="250,320 280,280 310,280 310,200" stroke={accent} strokeWidth="0.6" opacity="0.3" strokeDasharray="3 3"/>
        <text x="18" y="386" fontFamily="Manrope,sans-serif" fontSize="8" letterSpacing="3" fill={ink40}>INDUSTRIAL / LOGISTICS</text>
      </svg>
    );
  }
  if (v === "v4") {
    return (
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="biz-svg">
        <path d="M40,200 C100,200 120,120 200,120 C280,120 300,200 360,200" stroke={line} strokeWidth="1.5"/>
        <path d="M40,200 C100,200 120,280 200,280 C280,280 300,200 360,200" stroke={line} strokeWidth="1.5"/>
        <line x1="200" y1="40" x2="200" y2="360" stroke={line} strokeWidth="1.5"/>
        <path d="M60,200 L140,200 L200,120 L260,200 L340,200" stroke={accent} strokeWidth="1.5" opacity="0.6"/>
        {[[60,200],[140,200],[200,120],[260,200],[340,200],[200,280]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill="white" stroke={i===2 ? accent : ink} strokeWidth={i===2 ? "1.5" : "0.8"}/>
            <circle cx={cx} cy={cy} r="3" fill={i===2 ? accent : ink} opacity="0.6"/>
          </g>
        ))}
        <circle cx="200" cy="120" r="20" fill={accent} opacity="0.07" className="biz-svg-pulse"/>
        <circle cx="200" cy="120" r="32" fill={accent} opacity="0.04" className="biz-svg-pulse" style={{animationDelay:".5s"}}/>
        {[[-14,-8],[-6,-8],[2,-8],[10,-8],[-10,2],[-2,2],[6,2]].map(([dx,dy],i) => (
          <g key={i} transform={`translate(${200+dx},${200+dy})`}>
            <circle cx="0" cy="-3" r="2" fill={ink} opacity="0.4"/>
            <line x1="0" y1="-1" x2="0" y2="3" stroke={ink} strokeWidth="0.7" opacity="0.4"/>
          </g>
        ))}
        <text x="200" y="148" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="7" letterSpacing="1" fill={accent} opacity="0.8">HIGH DENSITY</text>
        <circle cx="110" cy="200" r="4" fill={accent} opacity="0.8"/>
        <line x1="90" y1="200" x2="106" y2="200" stroke={accent} strokeWidth="1.5" opacity="0.4"/>
        <line x1="76" y1="200" x2="84" y2="200" stroke={accent} strokeWidth="1" opacity="0.2"/>
        <text x="18" y="386" fontFamily="Manrope,sans-serif" fontSize="8" letterSpacing="3" fill={ink40}>TRANSIT / MOBILITY</text>
      </svg>
    );
  }
  if (v === "v5") {
    return (
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="biz-svg">
        {[80,120,160,200,240,280,320].map(x => (
          <line key={`x${x}`} x1={x} y1="40" x2={x} y2="360" stroke={line} strokeWidth="0.5"/>
        ))}
        {[80,120,160,200,240,280,320].map(y => (
          <line key={`y${y}`} x1="40" y1={y} x2="360" y2={y} stroke={line} strokeWidth="0.5"/>
        ))}
        <polyline points="40,200 80,200 100,200 120,140 140,260 160,200 220,200 240,160 260,240 280,200 360,200" stroke={accent} strokeWidth="1.5" opacity="0.7"/>
        <circle cx="200" cy="200" r="60" fill="none" stroke={ink} strokeWidth="1" opacity="0.15"/>
        <circle cx="200" cy="200" r="44" fill="none" stroke={accent} strokeWidth="0.6" opacity="0.25"/>
        <rect x="193" y="174" width="14" height="52" rx="2" fill="white" stroke={ink} strokeWidth="1"/>
        <rect x="174" y="193" width="52" height="14" rx="2" fill="white" stroke={ink} strokeWidth="1"/>
        <rect x="195" y="176" width="10" height="48" rx="1" fill={accent} opacity="0.15"/>
        <rect x="176" y="195" width="48" height="10" rx="1" fill={accent} opacity="0.15"/>
        <circle cx="320" cy="120" r="8" fill="white" stroke={ink} strokeWidth="0.8"/>
        <line x1="316" y1="116" x2="324" y2="116" stroke={ink} strokeWidth="0.8" opacity="0.5"/>
        <line x1="320" y1="112" x2="320" y2="120" stroke={ink} strokeWidth="0.8" opacity="0.5"/>
        <line x1="320" y1="120" x2="320" y2="128" stroke={ink} strokeWidth="0.6" opacity="0.3"/>
        <circle cx="320" cy="120" r="16" fill="none" stroke={accent} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" className="biz-svg-pulse"/>
        <text x="18" y="386" fontFamily="Manrope,sans-serif" fontSize="8" letterSpacing="3" fill={ink40}>HEALTHCARE / RESEARCH</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="biz-svg">
      <rect x="40" y="80" width="320" height="280" stroke={ink} strokeWidth="0.8" opacity="0.2"/>
      <line x1="40" y1="130" x2="360" y2="130" stroke={ink} strokeWidth="0.6" opacity="0.15"/>
      {[170,220,270,310].map(y => (
        <line key={y} x1="60" y1={y} x2="340" y2={y} stroke={ink} strokeWidth="0.5" opacity="0.2"/>
      ))}
      {[130,190,250].map(x => (
        <line key={x} x1={x} y1="130" x2={x} y2="360" stroke={ink} strokeWidth="0.5" opacity="0.15"/>
      ))}
      {[
        [80,155,18],[155,155,10],[210,155,24],[280,155,8],[320,155,5],
        [80,200,22],[155,200,16],[210,200,30],[280,200,12],[320,200,7],
        [80,245,14],[155,245,10],[210,245,20],[280,245,8],[320,245,5],
        [80,290,8],[155,290,6],[210,290,14],[280,290,6],[320,290,4],
        [80,335,4],[155,335,4],[210,335,8],[280,335,4],[320,335,2],
      ].map(([cx,cy,r],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={accent} opacity={Math.min(r / 30 * 0.7 + 0.05, 0.55)}/>
      ))}
      <text x="188" y="100" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="7" letterSpacing="1.5" fill={ink40}>ENTRANCE</text>
      <line x1="188" y1="104" x2="188" y2="126" stroke={ink40} strokeWidth="0.8"/>
      <polygon points="184,124 188,130 192,124" fill={ink40}/>
      {[18,28,22,36,30,24].map((h,i) => (
        <rect key={i} x={300+i*9} y={80-h} width="6" height={h} fill={i===3 ? accent : ink} opacity={i===3 ? 0.6 : 0.15} rx="1"/>
      ))}
      <text x="18" y="386" fontFamily="Manrope,sans-serif" fontSize="8" letterSpacing="3" fill={ink40}>RETAIL / COMMERCIAL</text>
    </svg>
  );
}

export default function BusinessClient({ sectors }: { sectors: SectorData[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const s = sectors[activeIdx];

  if (!s) return null;

  const lines = s.title.split(" · ");
  const v = VISUAL_KEY[s.id] ?? "v6";

  return (
    <>
      <div className="biz-stats-bar">
        <div className="container">
          <div className="biz-stats-inner">
            {STATS.map((st) => (
              <div key={st.label} className="biz-stat">
                <span className="biz-stat-val">{st.val}</span>
                <span className="biz-stat-label">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="biz-sector-nav">
        <div className="biz-sector-pills">
          {sectors.map((sec, idx) => {
            const label = sec.title;
            return (
              <button
                key={sec.id}
                className={`biz-sector-pill${activeIdx === idx ? " is-active" : ""}`}
                onClick={() => setActiveIdx(idx)}
              >
                <span className="pill-num">{sec.num}</span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="biz-main">
        <div className="container">
          <div className="biz-panel" key={s.id}>
            <div className="biz-inner">
              <div className="biz-content">
                <div className="biz-meta">
                  <span className="biz-num-big">{s.num}<sup>—</sup></span>
                  <span className="biz-sector-tag">{s.tag}</span>
                </div>
                <h3>
                  {lines.map((l, i) => (
                    <span key={i}>{l}{i < lines.length - 1 ? <br /> : null}</span>
                  ))}
                </h3>
                <p>{s.desc}</p>

                <div className="biz-capabilities">
                  <div className="biz-cap-label">핵심 기능</div>
                  <ul>
                    {s.capabilities.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="biz-footer">
                  <div className="biz-stat-badge">
                    <span className="badge-val">{s.statVal}</span>
                    <span className="badge-unit">{s.statUnit}</span>
                  </div>
                  <div className="refs">
                    {s.refs.map((r) => (
                      <span key={r}>{r}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`biz-visual-wrap ${v}`}>
                <BizVisual v={v} />
              </div>
            </div>

            <div className="biz-panel-nav">
              <button
                className="biz-pnav-btn"
                onClick={() => setActiveIdx((activeIdx - 1 + sectors.length) % sectors.length)}
              >
                ← 이전
              </button>
              <div className="biz-pnav-dots">
                {sectors.map((_, i) => (
                  <button
                    key={i}
                    className={`biz-dot${i === activeIdx ? " is-active" : ""}`}
                    onClick={() => setActiveIdx(i)}
                    aria-label={sectors[i].num}
                  />
                ))}
              </div>
              <button
                className="biz-pnav-btn"
                onClick={() => setActiveIdx((activeIdx + 1) % sectors.length)}
              >
                다음 →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="biz-cta">
        <div className="container">
          <div className="biz-cta-inner">
            <div>
              <div className="eyebrow">GET STARTED</div>
              <h2>귀사의 산업에 맞는<br /><em>도입 방안을 논의합니다.</em></h2>
            </div>
            <div className="biz-cta-actions">
              <Link href="/contact" className="btn-fill">도입 문의하기 →</Link>
              <Link href="/solutions" className="btn-line">솔루션 둘러보기</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
