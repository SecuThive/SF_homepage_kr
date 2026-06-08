import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import DocPage, { type DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "SAFESQUARE 개인정보처리방침 — 수집 항목, 이용 목적, 보관 기간, 제3자 제공, 이용자 권리 안내.",
};

const SECTIONS: DocSection[] = [
  {
    id: "collect",
    num: "01",
    title: "수집하는 개인정보의 항목",
    content: (
      <>
        <p>
          SAFESQUARE Inc.(이하 &ldquo;회사&rdquo;)는 도입 문의 응대, 고객 지원, 계약 이행을 위해 최소한의
          개인정보를 수집합니다. 수집 항목과 경로는 다음과 같습니다.
        </p>
        <table className="doc-table">
          <thead>
            <tr>
              <th>구분</th>
              <th>수집 항목</th>
              <th>수집 경로</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>필수</b>
              </td>
              <td>성함, 회사/소속, 이메일, 프로젝트 내용</td>
              <td>문의 양식 (/contact)</td>
            </tr>
            <tr>
              <td>선택</td>
              <td>연락처(휴대전화), 관심 솔루션</td>
              <td>문의 양식 (/contact)</td>
            </tr>
            <tr>
              <td>자동 수집</td>
              <td>접속 IP, 접속 시각, User-Agent, 쿠키</td>
              <td>서비스 이용 과정 (로그·보안)</td>
            </tr>
          </tbody>
        </table>
        <p>
          회사는 민감정보(사상·신념, 정치적 견해, 건강, 성생활 등)를 수집하지 않으며, 만 14세 미만 아동의
          개인정보는 수집하지 않습니다.
        </p>
      </>
    ),
  },
  {
    id: "purpose",
    num: "02",
    title: "개인정보의 이용 목적",
    content: (
      <ul>
        <li>도입·견적 문의 응대 및 제안서·계약서 발송</li>
        <li>기술 지원·PoC 일정 조율 및 후속 커뮤니케이션</li>
        <li>서비스 부정 이용 방지, 접속 기록 보관(정보통신망법)</li>
        <li>통계 기반 웹사이트 개선 및 마케팅 동의자 대상 정보 제공</li>
      </ul>
    ),
  },
  {
    id: "retention",
    num: "03",
    title: "개인정보의 보유 및 이용 기간",
    content: (
      <>
        <p>
          회사는 법령에 별도로 규정된 경우를 제외하고, 개인정보 수집·이용 목적이 달성되면 지체 없이 파기합니다.
        </p>
        <table className="doc-table">
          <thead>
            <tr>
              <th>보유 항목</th>
              <th>보유 기간</th>
              <th>근거</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>문의 접수 정보</td>
              <td>수신 후 3년</td>
              <td>이용자 동의</td>
            </tr>
            <tr>
              <td>계약·거래 기록</td>
              <td>5년</td>
              <td>전자상거래법</td>
            </tr>
            <tr>
              <td>접속 로그</td>
              <td>3개월</td>
              <td>통신비밀보호법</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: "third-party",
    num: "04",
    title: "제3자 제공 및 처리 위탁",
    content: (
      <>
        <p>
          회사는 이용자의 사전 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만, 서비스 제공을 위해 아래와 같이
          일부 처리를 위탁하며, 수탁자에 대한 개인정보 보호 관리·감독 의무를 이행합니다.
        </p>
        <ul>
          <li>
            <b>클라우드 인프라</b> — Amazon Web Services (리전: 서울 · 도쿄)
          </li>
          <li>
            <b>이메일 발송</b> — 회사 내부 SMTP 및 발송 전용 서비스 제공자
          </li>
          <li>
            <b>접속 로그 분석</b> — 자체 운영 분석 시스템 (외부 전송 없음)
          </li>
        </ul>
        <p>국외 이전이 수반되는 경우 개인정보 보호법 제28조의8에 따라 이용자에게 고지 및 동의를 받습니다.</p>
      </>
    ),
  },
  {
    id: "rights",
    num: "05",
    title: "이용자의 권리와 행사 방법",
    content: (
      <>
        <p>이용자는 언제든지 아래 권리를 행사할 수 있으며, 회사는 지체 없이 조치합니다.</p>
        <ol>
          <li>개인정보 열람·정정·삭제 요구</li>
          <li>개인정보 처리 정지 요구</li>
          <li>동의 철회 및 회원 탈퇴 요구 (해당 시)</li>
        </ol>
        <p>
          권리 행사는 <a href="mailto:privacy@safesquare.co.kr">privacy@safesquare.co.kr</a> 또는 고객지원
          창구를 통해 요청하실 수 있으며, 본인 확인 절차 후 처리됩니다.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    num: "06",
    title: "쿠키 및 자동 수집 장치",
    content: (
      <>
        <p>
          회사는 맞춤형 서비스 제공과 부정 접근 탐지를 위해 쿠키(Cookie)를 사용합니다. 이용자는 브라우저 설정에서
          쿠키 저장을 거부할 수 있으며, 거부 시 일부 기능이 제한될 수 있습니다.
        </p>
        <div className="doc-callout">
          <span className="tag">NOTE</span>
          <p>
            본 사이트는 광고용 서드파티 추적 쿠키를 사용하지 않으며, 세션 유지 및 보안 목적의 1st-party 쿠키만
            운영합니다.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "security",
    num: "07",
    title: "안전성 확보 조치",
    content: (
      <ul>
        <li>접근권한 분리 및 최소권한 원칙 적용</li>
        <li>접속 기록의 위·변조 방지(무결성 검증) 및 3개월 이상 보관</li>
        <li>전송 구간 TLS 1.2 이상 암호화, 민감 구간 저장 시 AES-256 암호화</li>
        <li>개인정보 취급자 대상 연 1회 이상 정기 교육</li>
      </ul>
    ),
  },
  {
    id: "dpo",
    num: "08",
    title: "개인정보 보호책임자",
    content: (
      <>
        <table className="doc-table">
          <thead>
            <tr>
              <th>구분</th>
              <th>성명 / 부서</th>
              <th>연락처</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>개인정보 보호책임자</b>
              </td>
              <td>이동하 / COO</td>
              <td>privacy@safesquare.co.kr</td>
            </tr>
            <tr>
              <td>개인정보 열람청구</td>
              <td>컴플라이언스팀</td>
              <td>privacy@safesquare.co.kr</td>
            </tr>
          </tbody>
        </table>
        <p>
          기타 개인정보 침해 신고·상담이 필요하신 경우 한국인터넷진흥원 개인정보침해신고센터(privacy.kisa.or.kr,
          국번 없이 118) 등을 통해 문의하실 수 있습니다.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    num: "09",
    title: "방침의 변경",
    content: (
      <p>
        본 개인정보처리방침은 법령·정책 변경에 따라 갱신될 수 있으며, 변경 시 최소 7일 전(이용자 권리의 중요한
        변경은 30일 전) 본 페이지를 통해 공지합니다.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <DocPage
      crumb="PRIVACY"
      title={
        <>
          개인정보를
          <br />
          <em>최소한으로.</em>
        </>
      }
      lede="SAFESQUARE는 고객 문의 응대와 서비스 제공에 꼭 필요한 정보만 수집합니다. 본 방침은 수집 항목·이용 목적·보관 기간과 이용자의 권리를 투명하게 안내하기 위해 작성되었습니다."
      meta={{ version: "v2.3", effective: "2026.04.01", updated: "2026.04.01" }}
      sections={SECTIONS}
      endNote={
        <>
          <div className="v">
            <b>문의·권리 행사:</b> <a href="mailto:privacy@safesquare.co.kr">privacy@safesquare.co.kr</a>
          </div>
          <Link href="/contact" className="link-arr">
            일반 문의 바로가기 <span className="arr">→</span>
          </Link>
        </>
      }
    />
  );
}
