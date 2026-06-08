import Link from "@/components/LocaleLink";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <section className="page-hero">
        <div className="page-hero-grid"></div>
        <div className="container">
          <div className="crumbs">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <span>404</span>
          </div>
          <h1>
            페이지를
            <br />
            <em>찾을 수 없습니다.</em>
          </h1>
          <p className="lede">요청하신 경로가 존재하지 않거나 이동되었을 수 있습니다.</p>
          <p style={{ marginTop: 32 }}>
            <Link href="/" className="link-arr">
              홈으로 돌아가기 <span className="arr">→</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
