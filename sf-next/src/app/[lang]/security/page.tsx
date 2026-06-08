import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import DocPage, { type DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "보안",
  description: "SAFESQUARE 보안 정책 — 암호화, 접근 통제, 취약점 신고, 인증 현황.",
};

const SECTIONS: DocSection[] = [
  {
    id: "overview",
    num: "01",
    title: "보안 원칙",
    content: (
      <>
        <p>
          SAFESQUARE는 고객의 데이터와 시스템을 다루는 회사의 본질상, 내부 운영에도 동일한 기준의 보안 원칙을
          적용합니다. 우리의 방어 체계는 다음 4가지 원칙 위에 세워져 있습니다.
        </p>
        <ul>
          <li>
            <b>Zero Trust</b> — 네트워크 경계가 아닌 신원·맥락·디바이스 위생을 기준으로 접근을 허용합니다.
          </li>
          <li>
            <b>Least Privilege</b> — 최소 권한 원칙으로 모든 내부 시스템 접근을 운영합니다.
          </li>
          <li>
            <b>Defense in Depth</b> — 네트워크·호스트·애플리케이션·데이터 계층에 독립 통제장치를 구성합니다.
          </li>
          <li>
            <b>Verifiable Audit</b> — 모든 주요 이벤트는 불변 로그로 기록되고 외부 감사 대상이 됩니다.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "infra",
    num: "02",
    title: "인프라 보안",
    content: (
      <>
        <p>
          자사 서비스는 AWS 서울/도쿄 리전의 프라이빗 VPC 상에서 운영되며, 모든 관리 트래픽은 전용 VPN과 MFA 인증을
          통해서만 접근 가능합니다.
        </p>
        <table className="doc-table">
          <thead>
            <tr>
              <th>영역</th>
              <th>통제 방식</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>전송 암호화</td>
              <td>모든 외부 통신 TLS 1.2+ · 내부 서비스 간 mTLS</td>
            </tr>
            <tr>
              <td>저장 암호화</td>
              <td>AES-256 (KMS 관리 키) · 키 자동 로테이션</td>
            </tr>
            <tr>
              <td>네트워크</td>
              <td>기본 거부(default-deny) 정책 · WAF 및 속도 제한 · DDoS 완화</td>
            </tr>
            <tr>
              <td>시크릿</td>
              <td>전용 시크릿 관리 시스템 · 코드 내 하드코딩 금지(CI 차단)</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: "access",
    num: "03",
    title: "접근 통제 및 인증",
    content: (
      <ul>
        <li>모든 임직원 계정에 SSO + MFA 강제 적용 (하드웨어 키 지원)</li>
        <li>프로덕션 접근은 Just-In-Time 승인 후 시간 제한 세션으로만 허용</li>
        <li>
          특권 명령은 4-Eye(2인 승인) 워크플로우를 거치며, 전 세션이 녹화되어 최소 1년간 WORM 저장
        </li>
        <li>입·퇴사 시 IdP 연동으로 권한이 자동 프로비저닝·회수됩니다</li>
      </ul>
    ),
  },
  {
    id: "sdlc",
    num: "04",
    title: "개발·배포 보안",
    content: (
      <>
        <p>
          모든 코드 변경은 Pull Request 단위 리뷰를 통과해야 하며, CI 단계에서 아래 점검을 자동 수행합니다.
        </p>
        <ol>
          <li>정적 보안 분석(SAST) 및 비밀값 스캔</li>
          <li>오픈소스 의존성 취약점 스캔(SCA) 및 라이선스 위반 차단</li>
          <li>컨테이너 이미지 취약점 스캔 및 서명된 이미지만 배포 허용</li>
          <li>스테이징 환경에서의 통합 테스트와 보안 회귀 테스트</li>
        </ol>
        <p>분기별 외부 모의해킹(NSHC)과 연 1회 이상 레드팀 훈련을 수행합니다.</p>
      </>
    ),
  },
  {
    id: "monitoring",
    num: "05",
    title: "탐지 및 대응",
    content: (
      <>
        <p>
          자체 SOC가 24/7 운영되며, 통합 보안 플랫폼 기반으로 모든 인프라·엔드포인트·애플리케이션 로그를
          실시간 상관분석합니다.
        </p>
        <ul>
          <li>Critical 이벤트 평균 1차 응답 15분 이내</li>
          <li>사고 대응 플레이북 40+ 운영, 분기별 표 탁상훈련(Table-top Exercise)</li>
          <li>중대 사고 발생 시 고객 통지는 확인 후 72시간 이내 완료</li>
        </ul>
      </>
    ),
  },
  {
    id: "disclosure",
    num: "06",
    title: "취약점 신고 (Responsible Disclosure)",
    content: (
      <>
        <p>
          SAFESQUARE는 책임감 있는 보안 연구를 환영합니다. 제품 또는 서비스의 보안 취약점을 발견하신 경우 아래
          경로로 제보해 주세요.
        </p>
        <div className="doc-callout">
          <span className="tag">Report</span>
          <p>
            <b>security@safesquare.co.kr</b> — 가능하면 재현 절차, 영향 범위, 환경 정보를 함께 전달해 주세요. PGP
            키는 동일 주소로 요청 시 회신합니다.
          </p>
        </div>
        <h3>6.1 Safe Harbor</h3>
        <p>
          본인의 계정·데이터 범위 내에서 이루어진 선의의 연구로 인한 정당한 활동에 대해서는 법적 조치를 취하지
          않습니다. 단, 서비스 중단 유발·타인 데이터 접근·랜섬 시도 등은 면책 대상에서 제외됩니다.
        </p>
        <h3>6.2 포상 범위</h3>
        <ul>
          <li>Critical / High: 공개 감사 + 사례 포상 협의</li>
          <li>Medium: 감사 레터 + 기념품</li>
          <li>Low / Informational: 감사 레터</li>
        </ul>
      </>
    ),
  },
  {
    id: "certs",
    num: "07",
    title: "인증 및 감사 현황",
    content: (
      <>
        <table className="doc-table">
          <thead>
            <tr>
              <th>인증</th>
              <th>범위</th>
              <th>갱신 주기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>ISO/IEC 27001</b>
              </td>
              <td>본사 및 클라우드 운영 전반</td>
              <td>3년 (연 서베일런스)</td>
            </tr>
            <tr>
              <td>
                <b>ISMS-P</b>
              </td>
              <td>고객 정보 처리 시스템</td>
              <td>3년 (연 사후심사)</td>
            </tr>
            <tr>
              <td>CSAP</td>
              <td>공공 클라우드 연동 모듈</td>
              <td>3년</td>
            </tr>
            <tr>
              <td>SOC 2 Type II</td>
              <td>SaaS 프로덕션 환경 (연속)</td>
              <td>1년</td>
            </tr>
          </tbody>
        </table>
        <p>
          <Link href="/isms-p">ISMS-P 인증 상세 →</Link>
        </p>
      </>
    ),
  },
];

export default function Page() {
  return (
    <DocPage
      crumb="SECURITY"
      title={
        <>
          우리가 <em>보안</em>을
          <br />
          취급하는 방식.
        </>
      }
      lede="SAFESQUARE는 고객 시스템의 보안을 책임지는 회사입니다. 우리의 내부 보안 운영 역시 동일한 원칙으로 세워져 있으며, 그 기준을 이 페이지에서 투명하게 공개합니다."
      meta={{ version: "v3.1", effective: "2026.03.01", updated: "2026.04.01" }}
      sections={SECTIONS}
      endNote={
        <>
          <div className="v">
            <b>Security contact:</b> <a href="mailto:security@safesquare.co.kr">security@safesquare.co.kr</a>
          </div>
          <Link href="/contact" className="link-arr">
            일반 문의 <span className="arr">→</span>
          </Link>
        </>
      }
    />
  );
}
