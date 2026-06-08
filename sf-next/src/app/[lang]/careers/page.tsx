import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = { title: "채용" };

const BENEFITS = [
  { k: "01 · TIME", t: "완전 유연 근무", d: "팀 코어타임을 제외한 100% 유연 근무와 리모트 옵션" },
  { k: "02 · REST", t: "연 25일 연차 + 리프레시", d: "3년 근속 시 2주 리프레시 휴가, 해외 워케이션 지원" },
  { k: "03 · GROWTH", t: "학습 지원 연 500만원", d: "컨퍼런스, 도서, 강의 등 성장을 위한 자유 집행 예산" },
  { k: "04 · HEALTH", t: "종합 건강검진", d: "본인·배우자 연 1회, 심리상담 비대면 무제한" },
  { k: "05 · STOCK", t: "전 직원 스톡옵션", d: "입사 시점에 공통 스톡옵션 부여, 분기 리비전" },
  { k: "06 · FAMILY", t: "패밀리 케어", d: "출산·육아 3개월 유급휴가, 남성 동일 적용" },
  { k: "07 · SPACE", t: "강남 집무 공간", d: "1인 전용 데스크·모니터·개인 회의실" },
  { k: "08 · MEAL", t: "삼시세끼", d: "사내 식당 조·중·석식 무료, 미식 월 1회" },
];

const ROLES: [string, string, string, string][] = [
  ["001", "Computer Vision Engineer", "R&D · SEOUL", "FULL-TIME"],
  ["002", "Senior Edge AI Researcher", "R&D · SEOUL", "FULL-TIME"],
  ["003", "Platform Frontend Engineer", "PRODUCT · SEOUL / REMOTE", "FULL-TIME"],
  ["004", "Platform Backend Engineer", "PRODUCT · SEOUL / REMOTE", "FULL-TIME"],
  ["005", "Field Security Solutions Architect", "SOLUTION · 전국", "FULL-TIME"],
  ["006", "Product Designer (Security SaaS)", "DESIGN · SEOUL", "FULL-TIME"],
  ["007", "Brand & Communications Designer", "DESIGN · SEOUL", "FULL-TIME"],
  ["008", "Customer Success Manager", "CS · SEOUL", "FULL-TIME"],
  ["009", "Hardware QA Engineer", "QA · 수원", "FULL-TIME"],
  ["010", "Technical Writer", "PRODUCT · REMOTE", "CONTRACT"],
  ["011", "Sales Lead (Public Sector)", "SALES · SEOUL", "FULL-TIME"],
  ["012", "DevOps / SRE Engineer", "PLATFORM · SEOUL", "FULL-TIME"],
  ["013", "Summer Internship — AI Research", "R&D · SEOUL", "INTERN"],
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader activeId="careers" />

      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="container">
          <div className="crumbs">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <span>CAREERS</span>
          </div>
          <h1>
            경계를 설계하는
            <br />
            <em>동료를</em> 찾습니다.
          </h1>
          <p className="lede">
            SAFESQUARE는 현장에서 작동하는 기술을 만드는 사람들의 집단입니다. 완성된 제품이 아닌,
            만드는 과정의 단정함을 중요하게 여깁니다.
          </p>
        </div>
      </section>

      <section className="careers-main">
        <div className="container">
          <div className="ethos">
            <div className="ethos-big" data-reveal>
              함께
              <br />
              만드는
              <br />
              <em>기술.</em>
            </div>
            <div>
              <p data-reveal>우리는 다섯 가지 원칙 위에서 일합니다.</p>
              <p data-reveal>— 현장에서 작동하지 않으면 기술이 아닙니다.</p>
              <p data-reveal>— 단순함은 완성의 언어입니다.</p>
              <p data-reveal>— 데이터는 존중되어야 합니다.</p>
              <p data-reveal>— 동료의 시간은 가장 귀한 자원입니다.</p>
              <p data-reveal>— 우리는 계속 배웁니다.</p>
            </div>
          </div>

          <div className="sec-heading" style={{ padding: "0 0 40px" }}>
            <div className="inner">
              <div data-reveal>
                <div className="eyebrow">BENEFITS</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>
                  일하기 좋은 환경.
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                집중할 수 있는 시간과 공간, 그리고 충분한 휴식을 제공합니다.
              </p>
            </div>
          </div>

          <div className="benefits">
            {BENEFITS.map((b) => (
              <div key={b.k} className="benefit" data-reveal>
                <div className="k">{b.k}</div>
                <div className="t">{b.t}</div>
                <div className="d">{b.d}</div>
              </div>
            ))}
          </div>

          <div className="sec-heading" style={{ padding: "80px 0 40px" }}>
            <div className="inner">
              <div data-reveal>
                <div className="eyebrow">OPEN ROLES</div>
                <h2 className="section-title" style={{ marginTop: 28 }}>
                  현재 채용 중입니다.
                </h2>
              </div>
              <p className="section-lede" data-reveal data-reveal-delay="1">
                13개 포지션이 열려 있습니다. 어울리는 자리가 있는지 살펴보세요.
              </p>
            </div>
          </div>

          <div className="roles">
            {ROLES.map(([num, title, team, type]) => (
              <a key={num} href="#" className="role" data-reveal>
                <div className="num">{num}</div>
                <div className="title">{title}</div>
                <div className="team">{team}</div>
                <div className="type">{type}</div>
                <div className="arr">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
