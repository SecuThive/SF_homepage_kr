import Link from "@/components/LocaleLink";
import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";

export type DocSection = {
  id: string;
  num: string;
  title: string;
  content: ReactNode;
};

type Props = {
  crumb: string;
  title: ReactNode;
  lede: string;
  meta: { version: string; effective: string; updated: string };
  sections: DocSection[];
  endNote?: ReactNode;
};

export default function DocPage({ crumb, title, lede, meta, sections, endNote }: Props) {
  return (
    <>
      <SiteHeader />

      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="container">
          <div className="crumbs">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <span>{crumb}</span>
          </div>
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
        </div>
      </section>

      <section className="doc-main">
        <div className="container">
          <div className="doc-meta" data-reveal>
            <div>
              <div className="k">Version</div>
              <div className="v">{meta.version}</div>
            </div>
            <div>
              <div className="k">Effective</div>
              <div className="v">{meta.effective}</div>
            </div>
            <div>
              <div className="k">Last Updated</div>
              <div className="v">{meta.updated}</div>
            </div>
          </div>

          <div className="doc-layout">
            <aside className="doc-toc" data-reveal>
              <div className="k">Contents</div>
              <ol>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="doc-body">
              {sections.map((s) => (
                <section key={s.id} id={s.id} data-reveal>
                  <h2>
                    <span className="num">{s.num}</span>
                    {s.title}
                  </h2>
                  {s.content}
                </section>
              ))}

              {endNote ? <div className="doc-end">{endNote}</div> : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
