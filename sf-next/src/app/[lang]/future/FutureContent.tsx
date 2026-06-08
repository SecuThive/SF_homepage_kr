"use client";

import Link from "@/components/LocaleLink";
import SiteHeader from "@/components/SiteHeader";
import LiveClock from "@/components/LiveClock";
import { useLang } from "@/lib/i18n";

const PARTNERS = [
  { name: "NSHC", cat: "SECURITY SERVICES" },
  { name: "PnP Secure", cat: "ACCESS CONTROL" },
  { name: "KICA", cat: "IDENTITY · MFA" },
  { name: "Everyzone", cat: "ENDPOINT" },
  { name: "Bluemoon Soft", cat: "DATA SECURITY" },
];

export default function FutureContent() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <>
      <SiteHeader activeId="future" />

      <div className="axl-wrap">
        <div className="axl-vlabel" aria-hidden="true">AI&nbsp;TRANSFORMATION&nbsp;·&nbsp;2025</div>
        <div className="axl-clock-bar" aria-hidden="true">
          <span className="dot" />
          <LiveClock />
        </div>

        {/* ── 1. HERO ── */}
        <section className="axl-sec axl-hero">
          <div className="axl-frame-local" aria-hidden="true" />
          <div className="axl-container">
            <div className="axl-badge" data-reveal>
              <span className="d" />
              SAFESQUARE · AX · 2025
            </div>

            <div className="axl-secno" data-reveal data-reveal-delay="1">
              <span className="n">Nº&nbsp;01</span>
              <span className="l" />
              <span className="lbl">AI TRANSFORMATION</span>
            </div>

            <div className="axl-hero-grid">
              <div>
                <h1 className="axl-headline" data-reveal data-reveal-delay="1">
                  {isEn ? (
                    <>
                      <span className="br">How AI changes</span>
                      <span className="br">the way we work,</span>
                      <span className="br">with one <em>strategy</em>.</span>
                    </>
                  ) : (
                    <>
                      <span className="br">AI가 바꾸는</span>
                      <span className="br">일의 방식,</span>
                      <span className="br">하나의 <em>전략</em>으로.</span>
                    </>
                  )}
                </h1>
                <p className="axl-lede" data-reveal data-reveal-delay="2">
                  {isEn ? (
                    <>
                      AX goes beyond technology adoption — it is the process of redesigning an organization's{" "}
                      <b>decision-making, workflows, and operating model</b> around AI.
                      SAFESQUARE provides the most stable starting point for your AX journey,
                      built on 11 years of accumulated security infrastructure.
                    </>
                  ) : (
                    <>
                      AX는 단순한 기술 도입을 넘어 기업의{" "}
                      <b>의사결정·업무 방식·조직 운영 체계</b> 전체를 AI 중심으로
                      재설계하는 과정입니다. SAFESQUARE는 11년간 축적한 보안 인프라 위에
                      AX 여정의 가장 안정적인 출발점을 제공합니다.
                    </>
                  )}
                </p>
              </div>

              {/* wireframe diamond */}
              <div className="axl-diamond" data-reveal data-reveal-delay="2" aria-hidden="true">
                <svg viewBox="0 0 520 520" preserveAspectRatio="xMidYMid meet">
                  <rect className="ax-wf" x="40" y="40" width="440" height="440" />
                  <g className="ax-wf-label">
                    <text x="44" y="32">FIG · 001</text>
                    <text x="476" y="32" textAnchor="end">AX · 2025</text>
                    <text x="44" y="500">SAFESQUARE</text>
                    <text x="476" y="500" textAnchor="end">KR / SEL</text>
                  </g>
                  <polygon className="ax-wf" points="260,60 460,260 260,460 60,260" />
                  <g className="ax-wf-rotor">
                    <polygon className="ax-wf-strong" points="260,120 400,260 260,400 120,260" />
                    <polygon className="ax-wf-dashed" points="260,160 360,260 260,360 160,260" />
                  </g>
                  <line className="ax-wf" x1="60" y1="260" x2="460" y2="260" />
                  <line className="ax-wf" x1="260" y1="60" x2="260" y2="460" />
                  <polygon className="ax-wf" points="260,210 304,235 304,285 260,310 216,285 216,235" />
                  <circle className="ax-wf-pulse" cx="260" cy="260" r="6" />
                  <circle className="ax-wf-pulse" cx="260" cy="60" r="3" style={{ animationDelay: "-.3s" }} />
                  <circle className="ax-wf-pulse" cx="460" cy="260" r="3" style={{ animationDelay: "-.8s" }} />
                  <circle className="ax-wf-pulse" cx="260" cy="460" r="3" style={{ animationDelay: "-1.3s" }} />
                  <circle className="ax-wf-pulse" cx="60" cy="260" r="3" style={{ animationDelay: "-1.8s" }} />
                  <g className="ax-wf-label">
                    <text x="260" y="48" textAnchor="middle">PLAN</text>
                    <text x="472" y="264" textAnchor="end">ACT</text>
                    <text x="260" y="478" textAnchor="middle">EVALUATE</text>
                    <text x="48" y="264">REFLECT</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Trusted by */}
            <div className="axl-trusted" data-reveal data-reveal-delay="3">
              <div className="axl-trusted-label">
                <span>TRUSTED&nbsp;BY&nbsp;·&nbsp;TECHNOLOGY&nbsp;PARTNERS</span>
                <span className="count">{PARTNERS.length} PARTNERS</span>
              </div>
              <div className="axl-partners">
                {PARTNERS.map((p) => (
                  <div key={p.name}>
                    <div className="pname">{p.name}</div>
                    <div className="pcat">{p.cat}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. WHY AX NOW ── */}
        <section className="axl-sec" id="why-ax">
          <div className="axl-container">
            <div className="axl-secno" data-reveal>
              <span className="n">Nº&nbsp;02</span>
              <span className="l" />
              <span className="lbl">WHY AX NOW</span>
            </div>

            <div className="axl-stat-head">
              <h2 className="axl-h2" data-reveal>
                {isEn ? (
                  <>Why AX <em>matters</em> now.</>
                ) : (
                  <>지금 AX가 <em>필요한</em> 이유.</>
                )}
              </h2>
              <p data-reveal data-reveal-delay="1">
                {isEn ? (
                  <>
                    The market is already moving to the next phase.{" "}
                    <b>The gap between companies that adopt AI and those that don't</b> is
                    widening faster than the DX divide of the past five years.
                  </>
                ) : (
                  <>
                    시장은 이미 다음 단계로 이동하고 있습니다.{" "}
                    <b>AI를 도입한 기업과 그렇지 않은 기업의 격차</b>는 지난 5년의 DX
                    격차보다 빠르게 벌어지고 있습니다.
                  </>
                )}
              </p>
            </div>

            <div className="axl-stats">
              <div className="axl-stat" data-reveal>
                <div className="meta">STAT · 01</div>
                <div className="big">
                  <span data-count="69">0</span>
                  <sup>%</sup>
                </div>
                <div className="lbl">PERCENT OF ENTERPRISES<br />PLANNING AX</div>
              </div>
              <div className="axl-stat" data-reveal data-reveal-delay="1">
                <div className="meta">STAT · 02</div>
                <div className="big">
                  <span data-count="2.5" data-decimals="1">0</span>
                  <sup>×</sup>
                </div>
                <div className="lbl">REVENUE GROWTH OF<br />AI-LED COMPANIES</div>
              </div>
              <div className="axl-stat" data-reveal data-reveal-delay="2">
                <div className="meta">STAT · 03</div>
                <div className="big">
                  <span data-count="71">0</span>
                  <sup>%</sup>
                </div>
                <div className="lbl">PERCENT CITING<br />AI TALENT SHORTAGE</div>
              </div>
              <div className="axl-stat" data-reveal data-reveal-delay="3">
                <div className="meta">STAT · 04</div>
                <div className="big">
                  <span data-count="65">0</span>
                  <sup>%</sup>
                </div>
                <div className="lbl">PERCENT LACKING<br />AI EXPERTISE</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. AGENTIC AI ── */}
        <section className="axl-sec" id="agentic">
          <div className="axl-container">
            <div className="axl-secno" data-reveal>
              <span className="n">Nº&nbsp;03</span>
              <span className="l" />
              <span className="lbl">AGENTIC AI</span>
            </div>

            <div className="axl-agentic-grid">
              <div className="axl-agentic-copy">
                <h2 className="axl-h2" data-reveal>
                  {isEn ? (
                    <>AI that reasons autonomously<br />and <em>acts</em> on its own.</>
                  ) : (
                    <>자율적으로 판단하고,<br />스스로 <em>실행</em>하는 AI.</>
                  )}
                </h2>
                {isEn ? (
                  <>
                    <p data-reveal data-reveal-delay="1">
                      <b>Agentic AI</b> is not a model that stops at a single response. Given a goal,
                      it <b>forms a plan</b>, calls the tools it needs to <b>execute</b>, then{" "}
                      <b>evaluates the outcome and tries again</b> — an autonomous cycle.
                    </p>
                    <p data-reveal data-reveal-delay="2">
                      When this cycle enters decision flows like security, operations, or customer service,
                      people can shift their focus from handling every alert to{" "}
                      <b>governance and exceptions</b>.
                    </p>
                  </>
                ) : (
                  <>
                    <p data-reveal data-reveal-delay="1">
                      <b>Agentic AI</b>는 단일 응답에 그치는 모델이 아닙니다. 목표가 주어지면
                      스스로 <b>계획을 세우고</b>, 필요한 도구를 호출해 <b>실행하며</b>,
                      결과를 <b>평가하고 다시 시도</b>하는 자율 사이클을 가집니다.
                    </p>
                    <p data-reveal data-reveal-delay="2">
                      이 사이클이 보안·운영·고객 응대 같은 의사결정 흐름에 들어오면,
                      사람은 모든 알림을 직접 처리하는 대신{" "}
                      <b>거버넌스와 예외</b>에 집중할 수 있습니다.
                    </p>
                  </>
                )}
                <div className="axl-agentic-tags" data-reveal data-reveal-delay="3">
                  {["Plan", "Tool Use", "Memory", "Reflection", "Multi-Agent"].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              {/* PLAN → EXECUTE → EVALUATE cycle diagram */}
              <div className="axl-cycle" data-reveal data-reveal-delay="2" aria-hidden="true">
                <svg viewBox="0 0 540 540" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <path id="axlOrbit" d="M 270 90 A 180 180 0 1 1 269.9 90" />
                  </defs>
                  <circle className="cyc-ring" cx="270" cy="270" r="220" />
                  <circle className="cyc-ring dashed" cx="270" cy="270" r="180" />
                  <circle className="cyc-ring" cx="270" cy="270" r="120" />
                  <circle className="cyc-arc" cx="270" cy="270" r="180" transform="rotate(-90 270 270)" />
                  <circle className="cyc-center" cx="270" cy="270" r="78" />
                  <text className="cyc-center-text" x="270" y="265" textAnchor="middle">AGENT</text>
                  <text className="cyc-center-sub" x="270" y="288" textAnchor="middle">CORE&nbsp;LOOP</text>
                  <circle r="5" className="cyc-dot">
                    <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#axlOrbit" />
                    </animateMotion>
                  </circle>
                  <circle r="3" className="cyc-dot" opacity={0.55}>
                    <animateMotion dur="10s" begin="-3.3s" repeatCount="indefinite">
                      <mpath href="#axlOrbit" />
                    </animateMotion>
                  </circle>
                  {/* PLAN */}
                  <g>
                    <circle className="cyc-node-accent" cx="270" cy="90" r="46" />
                    <g transform="translate(258,76)">
                      <path className="cyc-icon" d="M2 4h20M2 11h20M2 18h12" />
                    </g>
                    <text className="cyc-step" x="270" y="108" textAnchor="middle">STEP&nbsp;01</text>
                    <text className="cyc-label" x="270" y="56" textAnchor="middle">PLAN</text>
                    <text className="cyc-sub" x="270" y="42" textAnchor="middle">
                      {isEn ? "Planning" : "계획 수립"}
                    </text>
                  </g>
                  {/* EXECUTE */}
                  <g>
                    <circle className="cyc-node" cx="426" cy="356" r="46" />
                    <g transform="translate(414,342)">
                      <path className="cyc-icon" d="M2 12l8 6L22 4" />
                    </g>
                    <text className="cyc-step" x="426" y="374" textAnchor="middle">STEP&nbsp;02</text>
                    <text className="cyc-label" x="426" y="424" textAnchor="middle">EXECUTE</text>
                    <text className="cyc-sub" x="426" y="442" textAnchor="middle">
                      {isEn ? "Execute · Tool Use" : "실행 · Tool Use"}
                    </text>
                  </g>
                  {/* EVALUATE */}
                  <g>
                    <circle className="cyc-node" cx="114" cy="356" r="46" />
                    <g transform="translate(102,342)">
                      <path className="cyc-icon" d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" />
                    </g>
                    <text className="cyc-step" x="114" y="374" textAnchor="middle">STEP&nbsp;03</text>
                    <text className="cyc-label" x="114" y="424" textAnchor="middle">EVALUATE</text>
                    <text className="cyc-sub" x="114" y="442" textAnchor="middle">
                      {isEn ? "Evaluate · Learn" : "평가 · 학습"}
                    </text>
                  </g>
                  <g fill="var(--ax-blue)">
                    <polygon points="450,260 460,266 450,272" />
                    <polygon points="262,460 268,470 274,460" />
                    <polygon points="80,260 90,266 80,272" transform="rotate(180 90 266)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. FRAMEWORK ── */}
        <section className="axl-sec" id="framework">
          <div className="axl-container">
            <div className="axl-secno" data-reveal>
              <span className="n">Nº&nbsp;04</span>
              <span className="l" />
              <span className="lbl">AX FRAMEWORK</span>
            </div>

            <div className="axl-fw-head">
              <h2 className="axl-h2" data-reveal>
                {isEn ? (
                  <>SAFESQUARE's<br />AX Strategy <em>Framework</em>.</>
                ) : (
                  <>SAFESQUARE의<br />AX 전략 <em>프레임워크</em>.</>
                )}
              </h2>
              <p data-reveal data-reveal-delay="1">
                {isEn ? (
                  <>
                    Not a single leap — a staged delegation.{" "}
                    <b>Assess → Design → Execute</b>, repeated annually to raise your organization's
                    autonomy one level at a time.
                  </>
                ) : (
                  <>
                    한 번의 도약이 아닌 단계적 위임입니다.{" "}
                    <b>진단 → 설계 → 실행</b>의 3단계 사이클을 매년 반복하며 조직의
                    자율도를 한 단계씩 끌어올립니다.
                  </>
                )}
              </p>
            </div>

            <div className="axl-steps">
              <article className="axl-step" data-reveal>
                <div className="axl-step-no">01</div>
                <h3 className="axl-step-title">
                  {isEn ? (
                    <>AI <em>Readiness Assessment</em></>
                  ) : (
                    <>AI <em>현황 진단</em></>
                  )}
                </h3>
                <div className="axl-step-body">
                  <p>
                    {isEn ? (
                      <>
                        We measure your organization's <b>AI maturity</b> across three axes: data,
                        process, and people. We define a realistic starting point and identify the{" "}
                        <b>priority value chains</b> where AX can deliver impact fastest.
                      </>
                    ) : (
                      <>
                        기업 내 <b>AI 성숙도</b>를 데이터·프로세스·인력의 세 축으로
                        측정합니다. 현실적인 출발점을 정의하고, AX로 가장 빠르게 효과를
                        낼 수 있는 <b>우선 가치사슬</b>을 식별합니다.
                      </>
                    )}
                  </p>
                  <div className="axl-step-tags">
                    {["Readiness Index", "Value Chain", "Data Audit", "Org Diagnosis"].map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="axl-step" data-reveal data-reveal-delay="1">
                <div className="axl-step-no">02</div>
                <h3 className="axl-step-title">
                  {isEn ? (
                    <>AX <em>Roadmap Design</em></>
                  ) : (
                    <>AX <em>로드맵 설계</em></>
                  )}
                </h3>
                <div className="axl-step-body">
                  <p>
                    {isEn ? (
                      <>
                        Based on assessment results, we design a <b>3–5 year roadmap</b> and autonomy
                        level (L0–L4) transition scenarios. Technology, operations, and governance
                        tracks are bundled in parallel and broken down into executable units.
                      </>
                    ) : (
                      <>
                        진단 결과를 기반으로 <b>3–5년 로드맵</b>과 자율도 등급(L0–L4)
                        전환 시나리오를 설계합니다. 기술·운영·거버넌스 트랙을 병렬로
                        묶어 실행 가능한 단위로 분해합니다.
                      </>
                    )}
                  </p>
                  <div className="axl-step-tags">
                    {["3–5Y Roadmap", "Autonomy Levels", "Governance", "KPI Tree"].map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="axl-step" data-reveal data-reveal-delay="2">
                <div className="axl-step-no">03</div>
                <h3 className="axl-step-title">
                  {isEn ? (
                    <>Execute &amp; <em>Scale</em></>
                  ) : (
                    <>실행 &amp; <em>고도화</em></>
                  )}
                </h3>
                <div className="axl-step-body">
                  <p>
                    {isEn ? (
                      <>
                        We start with pilot units and operate a <b>quarterly review → expand</b> cycle.
                        Every decision is traceable via audit logs, and learning outcomes are designed
                        to be reflected in policy automatically.
                      </>
                    ) : (
                      <>
                        파일럿 단위로 시작해 <b>분기별 평가 → 확장</b>의 반복 사이클을
                        운영합니다. 모든 의사결정은 감사 로그로 추적되고, 학습 결과는
                        정책에 자동 반영되도록 설계합니다.
                      </>
                    )}
                  </p>
                  <div className="axl-step-tags">
                    {["Pilot → Scale", "Quarterly Review", "Audit Trail", "Continuous Learning"].map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── 5. CTA ── */}
        <section className="axl-sec" id="get-started">
          <div className="axl-container">
            <div className="axl-secno" data-reveal>
              <span className="n">Nº&nbsp;05</span>
              <span className="l" />
              <span className="lbl">GET STARTED</span>
            </div>

            <div className="axl-cta-grid">
              <div className="axl-cta-copy">
                <h2 className="axl-h2" data-reveal>
                  {isEn ? (
                    <>Start your AX<br /><em>journey</em> with us.</>
                  ) : (
                    <>AX 여정을<br />함께 <em>시작</em>하세요.</>
                  )}
                </h2>
                <p data-reveal data-reveal-delay="1">
                  {isEn ? (
                    <>
                      SAFESQUARE supports your AI transformation with a proven strategy and
                      6 technology partnerships. From assessment to operations handover — through
                      a single point of contact.
                    </>
                  ) : (
                    <>
                      SAFESQUARE가 검증된 전략과 6개 기술 파트너십을 바탕으로 귀사의
                      AI 전환을 지원합니다. 진단부터 운영 이관까지, 단일 창구로.
                    </>
                  )}
                </p>
                <div className="axl-cta-btns" data-reveal data-reveal-delay="2">
                  <Link href="/contact" className="axl-btn fill">
                    <span>{isEn ? "Request AX Consultation" : "AX 전략 상담 신청"}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link href="/solutions/nshc" className="axl-btn outline">
                    <span>{isEn ? "View Case Studies" : "도입 사례 보기"}</span>
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* CTA wireframe */}
              <div className="axl-cta-vis" data-reveal data-reveal-delay="2" aria-hidden="true">
                <svg viewBox="0 0 520 416" preserveAspectRatio="xMidYMid meet">
                  <rect className="ax-wf" x="20" y="20" width="480" height="376" />
                  <g className="ax-wf-label">
                    <text x="24" y="12">FIG · 005</text>
                    <text x="496" y="12" textAnchor="end">CTA · GET STARTED</text>
                  </g>
                  <circle className="ax-wf" cx="260" cy="208" r="160" />
                  <circle className="ax-wf-dashed" cx="260" cy="208" r="100" />
                  <circle className="ax-wf-strong" cx="260" cy="208" r="40" />
                  <line className="ax-wf" x1="60" y1="208" x2="460" y2="208" />
                  <line className="ax-wf" x1="260" y1="48" x2="260" y2="368" />
                  <circle className="ax-wf-pulse" cx="260" cy="208" r="4" />
                  <circle className="ax-wf-pulse" cx="260" cy="48" r="3" style={{ animationDelay: "-.5s" }} />
                  <circle className="ax-wf-pulse" cx="420" cy="208" r="3" style={{ animationDelay: "-1s" }} />
                  <circle className="ax-wf-pulse" cx="260" cy="368" r="3" style={{ animationDelay: "-1.5s" }} />
                  <circle className="ax-wf-pulse" cx="100" cy="208" r="3" style={{ animationDelay: "-2s" }} />
                  <g className="ax-wf-label">
                    <text x="260" y="38" textAnchor="middle">START</text>
                    <text x="432" y="212">SCALE</text>
                    <text x="260" y="384" textAnchor="middle">OPERATE</text>
                    <text x="88" y="212" textAnchor="end">LEARN</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
