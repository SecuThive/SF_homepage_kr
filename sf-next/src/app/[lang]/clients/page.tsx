"use client";

import Link from "@/components/LocaleLink";
import SiteHeader from "@/components/SiteHeader";
import { FilterBar } from "@/components/ChipGroup";
import { useLang } from "@/lib/i18n";

const CLIENTS: [string, string][] = [
  ["METRO CITY", "Public Safety"],
  ["HANBIT BANK", "Finance"],
  ["NOVA LOGIS", "Logistics"],
  ["ATLAS DC", "Data Center"],
  ["POLARIS AIR", "Aviation"],
  ["SEJONG MED", "Healthcare"],
  ["K-RAIL", "Mobility"],
  ["PRIME RETAIL", "Retail"],
  ["HORIZON ENG", "Industrial"],
  ["DAEYANG PORT", "Maritime"],
  ["VERITAS RES", "R&D"],
  ["CITY OF SEOUL", "Municipal"],
  ["ORION GROUP", "Industrial"],
  ["NOVA BANK", "Finance"],
  ["SEOUL METRO", "Transit"],
  ["K-SCIENCE", "R&D"],
  ["LIGHT HOUSE", "Retail"],
  ["ARIRANG MED", "Healthcare"],
  ["SINHAN LOG", "Logistics"],
  ["GAIA ENERGY", "Energy"],
  ["HYO-SUNG", "Industrial"],
  ["INCHEON PORT", "Maritime"],
  ["SEONGNAM CITY", "Municipal"],
  ["+ 216 more", "see references"],
];

const CASES = [
  {
    tag: "ATLAS DC · 2025",
    cat: "CASE STUDY · DATA CENTER",
    titleKo: "ATLAS DC,\n통합관제로 운영비 24% 절감",
    titleEn: "ATLAS DC,\n24% OPEX Reduction via Unified Control",
    bodyKo:
      "3개 리전, 12개 사이트 데이터센터의 출입·영상·IoT를 단일 대시보드로 통합. 운영자 1인당 처리 가능 사이트 수가 3배 증가했습니다.",
    bodyEn:
      "Consolidated access, video, and IoT across 3 regions and 12 data center sites into a single dashboard. Sites managed per operator increased 3×.",
    metrics: [
      ["-24%", "OPEX"],
      ["×3", "OPERATOR EFFICIENCY"],
      ["99.99%", "UPTIME"],
    ],
  },
  {
    tag: "METRO CITY · 2024",
    cat: "CASE STUDY · SMART CITY",
    titleKo: "METRO CITY,\n광역 CCTV 48,000대 통합",
    titleEn: "METRO CITY,\n48,000 CCTV Cameras Unified",
    bodyKo:
      "NSHC BAT Insight CTI와 피앤피시큐어 접근제어를 단일 운영 체계로 통합. 이상 이벤트 평균 대응 시간이 11분 → 2분 30초로 단축되었습니다.",
    bodyEn:
      "Integrated NSHC BAT Insight CTI and PnP Secure access control into a unified operations framework. Average incident response time reduced from 11 min → 2 min 30 sec.",
    metrics: [
      ["48,000", "CAMERAS"],
      ["-77%", "RESPONSE TIME"],
      ["+35%", "DETECTION RATE"],
    ],
  },
  {
    tag: "HANBIT BANK · 2024",
    cat: "CASE STUDY · FINANCE",
    titleKo: "HANBIT BANK,\nZero-Trust 출입 체계 구축",
    titleEn: "HANBIT BANK,\nZero-Trust Access Framework",
    bodyKo:
      "전국 1,200개 지점에 통합 출입 체계를 구축. 감사 대응 리드타임이 3주 → 2일로 줄었고, 보안사고는 0건을 유지하고 있습니다.",
    bodyEn:
      "Deployed a unified access framework across 1,200 branches nationwide. Audit response lead time reduced from 3 weeks → 2 days, with zero security incidents.",
    metrics: [
      ["1,200", "BRANCHES"],
      ["-90%", "AUDIT LEADTIME"],
      ["0", "INCIDENTS"],
    ],
  },
];

export default function ClientsPage() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <>
      <SiteHeader activeId="clients" />

      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="container">
          <div className="crumbs">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <span>CLIENTS</span>
          </div>
          <h1>
            {isEn ? (
              <>The Most Demanding Sites<br /><em>Are Our References.</em></>
            ) : (
              <>가장 까다로운 현장이<br /><em>우리의 레퍼런스.</em></>
            )}
          </h1>
          <p className="lede">
            {isEn
              ? "We've grown alongside clients in public institutions, finance, global manufacturing, and R&D — all operating under the strictest compliance standards."
              : "공공기관, 금융권, 글로벌 제조사, 리서치 시설 등 엄격한 감사 기준을 요구하는 고객과 함께 성장했습니다."}
          </p>
        </div>
      </section>

      <section className="clients-main">
        <div className="container">
          <div className="sec-heading">
            <div className="inner">
              <div data-reveal>
                <div className="eyebrow">PARTNERS · 240+</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>
                  {isEn ? (
                    <>240+ organizations,<br />one platform.</>
                  ) : (
                    <>240여 개 기업·기관,<br />하나의 플랫폼.</>
                  )}
                </h2>
              </div>
              <div data-reveal data-reveal-delay="1">
                <FilterBar items={["ALL", "PUBLIC", "FINANCE", "INDUSTRIAL", "MOBILITY", "MEDICAL", "RETAIL"]} />
              </div>
            </div>
          </div>

          <div className="clients-grid" data-reveal>
            {CLIENTS.map(([name, sub]) => (
              <div key={name} className="client">
                {name}
                <span className="sub">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study">
        <div className="container">
          <div className="sec-heading">
            <div className="inner">
              <div data-reveal>
                <div className="eyebrow">CASE STUDIES</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>
                  {isEn ? (
                    <>Results<br />proven in the field.</>
                  ) : (
                    <>현장에서<br />증명된 결과.</>
                  )}
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                {isEn
                  ? "Real results delivered by SAFESQUARE."
                  : "SAFESQUARE가 만든 실제 변화를 보여드립니다."}
              </p>
            </div>
          </div>

          {CASES.map((c) => {
            const title = isEn ? c.titleEn : c.titleKo;
            const lines = title.split("\n");
            return (
              <div key={c.tag} className="case" data-reveal>
                <div className="visual">
                  <span className="tag">{c.tag}</span>
                </div>
                <div>
                  <div className="cat">{c.cat}</div>
                  <h4>
                    {lines.map((l, i) => (
                      <span key={i}>
                        {l}
                        {i < lines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </h4>
                  <p>{isEn ? c.bodyEn : c.bodyKo}</p>
                  <div className="metrics">
                    {c.metrics.map(([n, l]) => (
                      <div key={l} className="m">
                        <div className="n">{n}</div>
                        <div className="l">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
