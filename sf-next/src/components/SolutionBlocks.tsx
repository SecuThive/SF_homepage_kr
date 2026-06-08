"use client";

import { useState } from "react";
import Link from "@/components/LocaleLink";
import { useLang } from "@/lib/i18n";

/* ── Shared tab nav ─────────────────────────────── */
type SolTab = { id: string; label: string };

export function SolTabsNav({
  tabs,
  active,
  onChange,
}: {
  tabs: SolTab[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="sol-tabs-wrap">
      <nav className="sol-tabs-nav" aria-label="solution tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`sol-tab-btn${active === tab.id ? " active" : ""}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

/* ── Service diagram image ───────────────────────── */
export function SvcDiagram({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="sol-diagram-wrap">
      <div className="sol-diagram-label">SOLUTION DIAGRAM</div>
      <div className="sol-diagram">
        {failed ? (
          <span className="sol-diagram-placeholder">{src}</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} onError={() => setFailed(true)} />
        )}
      </div>
    </div>
  );
}

/* ── Service detail panel ────────────────────────── */
type SvcPoint = { title: string; body: string };

export function SvcPanel({
  eyebrow,
  title,
  lede,
  points,
  imgSrc,
  imgAlt,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  points: SvcPoint[];
  imgSrc?: string;
  imgAlt?: string;
}) {
  return (
    <section className="svc-panel">
      <div className="container">
        <div className="svc-intro">
          <div className="svc-eyebrow">{eyebrow}</div>
          <h2 className="svc-title">{title}</h2>
          <p className="svc-lede">{lede}</p>
        </div>
        <div className="svc-points">
          {points.map((pt, i) => (
            <div key={i} className="svc-point">
              <span className="svc-point-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="svc-point-body">
                <strong>{pt.title}</strong>
                <p>{pt.body}</p>
              </div>
            </div>
          ))}
        </div>
        {imgSrc && <SvcDiagram src={imgSrc} alt={imgAlt ?? ""} />}
      </div>
    </section>
  );
}

export function CtaBand({ heading, btnLabel }: { heading: React.ReactNode; btnLabel: string }) {
  return (
    <section className="cta-band">
      <div className="cta-inner">
        <h2 data-reveal>{heading}</h2>
        <Link className="cta-btn" href="/contact" data-reveal data-reveal-delay="1">
          {btnLabel}
          <svg viewBox="0 0 14 14">
            <path d="M1 13L13 1M13 1H4M13 1V10" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

type Related = { href: string; k: string; h5: string; p: string };

export function RelatedBlock({ items }: { items: Related[] }) {
  const { lang } = useLang();
  return (
    <section className="related">
      <div className="container">
        <div className="sec-heading" style={{ padding: 0 }}>
          <div className="inner">
            <div data-reveal>
              <div className="eyebrow">EXPLORE</div>
              <h2 className="section-title" style={{ marginTop: 28 }}>
                {lang === "ja"
                  ? "他のポートフォリオを見る。"
                  : lang === "en"
                    ? "Explore more solutions."
                    : "다른 포트폴리오 보기."}
              </h2>
            </div>
          </div>
        </div>
        <div className="related-grid">
          {items.map((r) => (
            <Link key={r.href} href={r.href} className="related-card">
              <div>
                <div className="k">{r.k}</div>
                <h5>{r.h5}</h5>
                <p>{r.p}</p>
              </div>
              <div className="arr">→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

type Feat = { num: string; icon: React.ReactNode; title: React.ReactNode; body: string; tags: string[] };

export function FeaturesGrid({ items }: { items: Feat[] }) {
  return (
    <div className="feat-grid">
      {items.map((f, i) => (
        <div key={f.num} className="feat" data-reveal data-reveal-delay={i % 3}>
          <div className="num">{f.num}</div>
          <div className="ic">{f.icon}</div>
          <h4>{f.title}</h4>
          <p>{f.body}</p>
          <div className="ftags">
            {f.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

type Step = { step: string; title: string; body: string; when: string };

export function FlowSteps({ items }: { items: Step[] }) {
  return (
    <div className="flow">
      {items.map((s) => (
        <div key={s.step} className="step" data-step={s.step}>
          <h5>{s.title}</h5>
          <p>{s.body}</p>
          <span className="w">{s.when}</span>
        </div>
      ))}
    </div>
  );
}

export function SpecTable({ rows }: { rows: [string, React.ReactNode][] }) {
  return (
    <div className="spec-table">
      {rows.map(([k, v], i) => (
        <div key={i} className="spec-row">
          <div className="k">{k}</div>
          <div className="v">{v}</div>
        </div>
      ))}
    </div>
  );
}

export function SolutionCrumbs({ name }: { name: string }) {
  return (
    <div className="crumbs">
      <Link href="/">HOME</Link>
      <span className="sep">/</span>
      <Link href="/#portfolio">PORTFOLIO</Link>
      <span className="sep">/</span>
      <span>{name}</span>
    </div>
  );
}
