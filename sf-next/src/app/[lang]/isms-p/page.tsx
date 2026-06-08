import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import DocPage, { type DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "ISMS-P 인증",
  description: "SAFESQUARE ISMS-P(정보보호 및 개인정보보호 관리체계) 인증 범위 및 운영 체계.",
};

const SECTIONS: DocSection[] = [
  {
    id: "intro",
    num: "01",
    title: "ISMS-P란?",
    content: (
      <>
        <p>
          ISMS-P는 과학기술정보통신부·방송통신위원회·개인정보보호위원회가 공동으로 운영하는
          <b> 정보보호 및 개인정보보호 관리체계 인증</b> 제도입니다. 국내 최고 수준의 통합 인증으로,
          101개 통제 항목에 대한 객관적 실사를 통해 조직의 정보보호·개인정보 관리 역량을 검증합니다.
        </p>
        <div className="doc-callout">
          <span className="tag">Scope</span>
          <p>
            SAFESQUARE는 <b>고객 정보 처리 시스템 및 부속 운영 프로세스 전반</b>을 대상으로 ISMS-P 인증을 유지하고
            있습니다.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "status",
    num: "02",
    title: "인증 현황",
    content: (
      <table className="doc-table">
        <thead>
          <tr>
            <th>항목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>인증 구분</b>
            </td>
            <td>ISMS-P (정보보호 및 개인정보보호 관리체계)</td>
          </tr>
          <tr>
            <td>인증 번호</td>
            <td>ISMS-P-XXXX-XXX</td>
          </tr>
          <tr>
            <td>인증 기관</td>
            <td>한국인터넷진흥원(KISA)</td>
          </tr>
          <tr>
            <td>최초 획득</td>
            <td>2024.11</td>
          </tr>
          <tr>
            <td>
              <b>유효 기간</b>
            </td>
            <td>2024.11 – 2027.11 (연 1회 사후심사)</td>
          </tr>
          <tr>
            <td>다음 갱신</td>
            <td>2027년 하반기 예정</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "scope",
    num: "03",
    title: "인증 범위",
    content: (
      <>
        <p>인증 범위는 SAFESQUARE가 고객 정보를 수집·저장·처리하는 시스템 및 관련 운영 프로세스 전체입니다.</p>
        <ul>
          <li>고객 문의 접수·응대 시스템 (공식 웹사이트 포함)</li>
          <li>프로젝트 관리·기술 지원 플랫폼 (내부 SaaS)</li>
          <li>고객 관련 데이터 저장소 및 백업 시스템</li>
          <li>통합 인증·권한 관리(IdP), 감사 로그 시스템</li>
          <li>개발·배포 파이프라인의 프로덕션 경로</li>
          <li>본사 사무 환경 및 엔드포인트 보안 체계</li>
        </ul>
      </>
    ),
  },
  {
    id: "framework",
    num: "04",
    title: "관리체계 구성",
    content: (
      <>
        <p>
          회사는 CEO를 위원장으로 하는 <b>정보보호 및 개인정보보호위원회</b>를 운영하며, 분기별 정기 회의를 통해
          위험 평가·대응 현황·교육 이수율을 점검합니다.
        </p>
        <table className="doc-table">
          <thead>
            <tr>
              <th>역할</th>
              <th>책임 영역</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>정보보호최고책임자(CISO)</b>
              </td>
              <td>전사 보안 전략 수립 및 집행, 사고 대응 총괄</td>
            </tr>
            <tr>
              <td>
                <b>개인정보보호책임자(CPO)</b>
              </td>
              <td>개인정보 수집·이용·파기 전 과정 관리 감독</td>
            </tr>
            <tr>
              <td>보안 운영팀</td>
              <td>24/7 SOC, 탐지·대응, 모의훈련 수행</td>
            </tr>
            <tr>
              <td>컴플라이언스팀</td>
              <td>인증 유지, 외부 감사 대응, 내부 통제 설계</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: "controls",
    num: "05",
    title: "통제 항목 운영",
    content: (
      <>
        <p>
          ISMS-P 101개 통제 항목은 아래 4개 대범주로 구성되며, 회사는 각 항목에 대한 <b>증적(evidence)</b>을 분기
          단위로 갱신·보관합니다.
        </p>
        <ol>
          <li>관리체계 수립 및 운영 (16개)</li>
          <li>보호대책 요구사항 (64개)</li>
          <li>개인정보 처리 단계별 요구사항 (21개)</li>
          <li>개인정보의 권리 보호 등 (특수 요구사항)</li>
        </ol>
        <p>
          주요 통제 예시: 접근권한 부여·회수, 암호 정책, 접속 기록 보관, 침해사고 대응 절차, 업무 위탁 관리,
          개인정보 파기, 이용자 권리 보장.
        </p>
      </>
    ),
  },
  {
    id: "audit",
    num: "06",
    title: "심사 및 지속 관리",
    content: (
      <ul>
        <li>매년 1회 이상 전 임직원 대상 정보보호·개인정보 교육 의무화</li>
        <li>월 1회 내부 점검, 분기 1회 모의 침해사고 훈련</li>
        <li>연 1회 KISA 사후심사, 3년 주기 갱신심사 수검</li>
        <li>중대 변경 발생 시 60일 이내 변경심사 신청</li>
      </ul>
    ),
  },
  {
    id: "verify",
    num: "07",
    title: "인증 확인 방법",
    content: (
      <>
        <p>
          본 인증 현황은 한국인터넷진흥원에서 운영하는 <b>ISMS-P 인증 조회 페이지</b>를 통해 누구나 확인하실 수
          있습니다. 인증 번호를 입력하여 유효성 여부를 즉시 검증할 수 있습니다.
        </p>
        <div className="doc-callout">
          <span className="tag">Request</span>
          <p>
            인증서 사본, 범위 명세서, 또는 심사 결과 요약이 필요하신 경우{" "}
            <a href="mailto:compliance@safesquare.co.kr">compliance@safesquare.co.kr</a>로 요청해 주세요. 보안 검토 후
            영업일 기준 3일 이내 회신드립니다.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "related",
    num: "08",
    title: "관련 문서",
    content: (
      <ul>
        <li>
          <Link href="/privacy">개인정보처리방침 →</Link>
        </li>
        <li>
          <Link href="/security">보안 정책 →</Link>
        </li>
        <li>
          <Link href="/terms">이용약관 →</Link>
        </li>
      </ul>
    ),
  },
];

export default function Page() {
  return (
    <DocPage
      crumb="ISMS-P"
      title={
        <>
          검증된 표준,
          <br />
          <em>ISMS-P 인증.</em>
        </>
      }
      lede="SAFESQUARE는 국내 최상위 통합 인증인 ISMS-P를 획득하여 유지하고 있습니다. 고객 정보의 수집·저장·처리 전 과정이 독립 심사 기관의 검증을 통과한 체계 위에서 운영됩니다."
      meta={{ version: "v1.2", effective: "2024.11.15", updated: "2026.04.01" }}
      sections={SECTIONS}
      endNote={
        <>
          <div className="v">
            <b>인증 사본 요청:</b>{" "}
            <a href="mailto:compliance@safesquare.co.kr">compliance@safesquare.co.kr</a>
          </div>
          <Link href="/security" className="link-arr">
            보안 정책 전체 보기 <span className="arr">→</span>
          </Link>
        </>
      }
    />
  );
}
