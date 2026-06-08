"use client";

import Link from "@/components/LocaleLink";
import SiteHeader from "@/components/SiteHeader";
import ContactForm from "@/components/ContactForm";
import { useLang } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useLang();
  const t = <T,>(ko: T, en: T, ja: T) => (lang === "ja" ? ja : lang === "en" ? en : ko);

  return (
    <>
      <SiteHeader />

      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="container">
          <div className="crumbs">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <span>CONTACT</span>
          </div>
          <h1>
            {t(
              <>공간의 <em>신뢰</em>를<br />함께 설계하세요.</>,
              <>Design <em>trust</em><br />in your organization.</>,
              <>組織の<em>信頼</em>を<br />ともに設計しましょう。</>
            )}
          </h1>
          <p className="lede">
            {t(
              "도입 문의, 기술 협업, 언론 취재까지 — SAFESQUARE 팀이 24시간 이내 답변드립니다.",
              "Sales inquiries, technical collaboration, press — our team responds within 24 hours.",
              "導入のご相談、技術協業、報道取材まで — SAFESQUAREチームが24時間以内にご返答します。",
            )}
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <div className="block" data-reveal>
                <div className="k">HEADQUARTERS</div>
                <div className="v">
                  {t(
                    <><b>경기도 군포시</b><br />고산로 148번길 17, 군포IT밸리 B동 414호<br /><small>평일 09:00 – 18:00</small></>,
                    <><b>Gunpo, Gyeonggi</b><br />17 Gosan-ro 148beon-gil, Gunpo IT Valley B-dong #414<br /><small>Mon–Fri 09:00 – 18:00 KST</small></>,
                    <><b>京畿道 軍浦市</b><br />高山路148番ギル17, 軍浦ITバレー B棟414号<br /><small>平日 09:00 – 18:00 KST</small></>,
                  )}
                </div>
              </div>
              <div className="block" data-reveal>
                <div className="k">SALES</div>
                <div className="v">
                  <a href="mailto:sales@safesquare.co.kr"><b>sales@safesquare.co.kr</b></a><br />
                  <small>{t("도입·견적 문의", "Sales & Quotation", "導入・お見積りのお問い合わせ")}</small>
                </div>
              </div>
              <div className="block" data-reveal>
                <div className="k">SUPPORT</div>
                <div className="v">
                  <a href="mailto:support@safesquare.co.kr"><b>support@safesquare.co.kr</b></a><br />
                  <small>{t("기술 지원 문의", "Technical Support", "技術サポートのお問い合わせ")}</small>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>

          <div className="map" data-reveal>
            <iframe
              className="map-frame"
              title={t("SAFESQUARE 위치 — 경기도 군포시 고산로 148번길 17 군포IT밸리 B동", "SAFESQUARE Location — 17 Gosan-ro 148beon-gil, Gunpo IT Valley B-dong", "SAFESQUAREの所在地 — 京畿道 軍浦市 高山路148番ギル17 軍浦ITバレー B棟")}
              src={`https://www.google.com/maps?q=${encodeURIComponent("경기도 군포시 고산로 148번길 17 군포IT밸리 B동")}&z=17&hl=${lang}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="tag">GYEONGGI · GUNPO</div>
          </div>
        </div>
      </section>
    </>
  );
}
