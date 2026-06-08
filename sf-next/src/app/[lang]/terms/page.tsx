import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import DocPage, { type DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "이용약관",
  description: "SAFESQUARE 웹사이트 및 서비스 이용약관.",
};

const SECTIONS: DocSection[] = [
  {
    id: "purpose",
    num: "01",
    title: "목적",
    content: (
      <p>
        본 약관은 SAFESQUARE Inc.(이하 &ldquo;회사&rdquo;)가 운영하는 웹사이트 및 관련 서비스(이하
        &ldquo;서비스&rdquo;)의 이용 조건, 회사와 이용자의 권리·의무·책임을 규정함을 목적으로 합니다.
      </p>
    ),
  },
  {
    id: "definition",
    num: "02",
    title: "용어의 정의",
    content: (
      <ul>
        <li>
          <b>서비스</b> — SAFESQUARE가 제공하는 웹사이트, 문의·견적 접수, 기술 자료 제공, 파트너 솔루션 정보 안내 등
          일체의 온라인 활동을 의미합니다.
        </li>
        <li>
          <b>이용자</b> — 본 약관에 따라 서비스를 이용하는 자연인 또는 법인을 말합니다.
        </li>
        <li>
          <b>콘텐츠</b> — 회사가 서비스 내에 게시·배포하는 텍스트·이미지·영상·문서·코드·브랜드 자산 등을 포함합니다.
        </li>
      </ul>
    ),
  },
  {
    id: "effect",
    num: "03",
    title: "약관의 효력 및 변경",
    content: (
      <>
        <p>본 약관은 서비스 화면에 게시함으로써 효력을 발생합니다.</p>
        <p>
          회사는 관계 법령을 위반하지 않는 범위에서 본 약관을 개정할 수 있으며, 변경 시 시행일 최소 7일 전(이용자에게
          불리한 경우 30일 전) 공지합니다. 변경 후 서비스 이용을 계속하는 경우 변경된 약관에 동의한 것으로 봅니다.
        </p>
      </>
    ),
  },
  {
    id: "use",
    num: "04",
    title: "서비스 이용",
    content: (
      <>
        <p>이용자는 본 약관 및 관계 법령에 따라 서비스를 이용해야 합니다.</p>
        <h3>4.1 금지 행위</h3>
        <ol>
          <li>타인의 개인정보·계정·권한을 도용하거나 위·변조하는 행위</li>
          <li>서비스의 운영을 방해하거나 안정성을 해칠 수 있는 행위</li>
          <li>자동화된 수단으로 콘텐츠를 대량 수집·복제하는 행위</li>
          <li>회사의 지식재산권 또는 제3자의 권리를 침해하는 행위</li>
          <li>기타 관계 법령에 위반되거나 공서양속에 반하는 행위</li>
        </ol>
      </>
    ),
  },
  {
    id: "ip",
    num: "05",
    title: "지식재산권",
    content: (
      <>
        <p>
          서비스에 게시된 콘텐츠에 대한 저작권 및 기타 지식재산권은 회사 또는 원저작자에게 귀속되며, 이용자는
          사전 서면 동의 없이 이를 복제·전송·배포·2차 저작물 작성 등에 이용할 수 없습니다.
        </p>
        <p>
          SAFESQUARE 및 파트너사의 상표·로고·디자인은 각 권리자의 자산이며, 무단 사용 시 관련 법령에 따라 책임을
          질 수 있습니다.
        </p>
      </>
    ),
  },
  {
    id: "warranty",
    num: "06",
    title: "책임의 제한",
    content: (
      <>
        <p>
          회사는 서비스의 안정적 제공을 위해 합리적 수준의 주의를 다하나, 다음 각 호의 사유로 인한 손해에 대하여는
          책임을 지지 않습니다.
        </p>
        <ul>
          <li>천재지변, 전쟁, 테러, 기타 불가항력적 사유</li>
          <li>이용자의 귀책 사유로 인한 이용 장애</li>
          <li>제3자의 행위로 인한 통신 장애 또는 서비스 중단</li>
          <li>서비스에 게재된 외부 링크·참고 자료의 정확성</li>
        </ul>
        <p>
          문의·제안서 등에 기재된 수치·사양은 참고용이며, 실제 프로젝트의 구체 사양은 별도 계약 문서에 따릅니다.
        </p>
      </>
    ),
  },
  {
    id: "suspension",
    num: "07",
    title: "이용 제한",
    content: (
      <p>
        회사는 이용자가 본 약관을 위반하거나 서비스의 안정적 운영을 저해한다고 판단되는 경우, 사전 통지 없이 해당
        이용자의 서비스 이용을 제한하거나 차단할 수 있습니다. 중대한 위반 시 법적 조치를 취할 수 있습니다.
      </p>
    ),
  },
  {
    id: "governing-law",
    num: "08",
    title: "준거법 및 관할",
    content: (
      <>
        <p>본 약관은 대한민국 법령에 따라 해석되고 적용됩니다.</p>
        <p>
          서비스 이용과 관련하여 회사와 이용자 간에 발생한 분쟁은 민사소송법상의 관할 법원을 원칙으로 하며,
          합의가 이루어지지 않을 경우 <b>서울중앙지방법원</b>을 제1심 관할 법원으로 합니다.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    num: "09",
    title: "문의처",
    content: (
      <table className="doc-table">
        <thead>
          <tr>
            <th>구분</th>
            <th>담당</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>법무·계약</td>
            <td>법무팀</td>
            <td>legal@safesquare.co.kr</td>
          </tr>
          <tr>
            <td>일반 문의</td>
            <td>고객지원</td>
            <td>contact@safesquare.co.kr</td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

export default function Page() {
  return (
    <DocPage
      crumb="TERMS"
      title={
        <>
          공정한 이용을 위한
          <br />
          <em>기본 규칙.</em>
        </>
      }
      lede="본 약관은 SAFESQUARE 웹사이트와 서비스의 이용 조건, 회사와 이용자의 권리·의무를 규정합니다. 서비스를 이용하기 전 본 내용을 확인해 주세요."
      meta={{ version: "v1.4", effective: "2026.04.01", updated: "2026.04.01" }}
      sections={SECTIONS}
      endNote={
        <>
          <div className="v">
            <b>시행일:</b> 2026.04.01 · <b>문의:</b> <a href="mailto:legal@safesquare.co.kr">legal@safesquare.co.kr</a>
          </div>
          <Link href="/privacy" className="link-arr">
            개인정보처리방침 보기 <span className="arr">→</span>
          </Link>
        </>
      }
    />
  );
}
