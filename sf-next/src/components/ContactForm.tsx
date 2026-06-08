"use client";

import { SingleChipGroup, MultiChipGroup } from "./ChipGroup";

export default function ContactForm() {
  return (
    <form
      className="form"
      data-reveal
      onSubmit={(e) => {
        e.preventDefault();
        alert("문의가 접수되었습니다. 24시간 이내 회신드립니다.");
      }}
    >
      <h3>프로젝트 문의하기</h3>

      <div className="row2">
        <div className="field">
          <label>성함 *</label>
          <input type="text" placeholder="홍길동" required />
        </div>
        <div className="field">
          <label>회사/소속</label>
          <input type="text" placeholder="SAFESQUARE Inc." />
        </div>
      </div>

      <div className="row2">
        <div className="field">
          <label>이메일 *</label>
          <input type="email" placeholder="you@company.com" required />
        </div>
        <div className="field">
          <label>연락처</label>
          <input type="tel" placeholder="010-0000-0000" />
        </div>
      </div>

      <div className="field">
        <label>문의 유형 *</label>
        <SingleChipGroup
          items={["도입 문의", "견적 요청", "기술 협업", "파트너십", "언론 취재", "기타"]}
          defaultIndex={0}
        />
      </div>

      <div className="field">
        <label>관심 솔루션 *</label>
        <MultiChipGroup
          items={[
            "NSHC 컨설팅·모의해킹",
            "에브리존 안티랜섬웨어",
            "블루문소프트 DRM",
            "한국정보인증 MFA",
            "피앤피시큐어 접근제어",
            "NSHC Omega SBOM",
            "통합 설계",
          ]}
          defaultOn={[0]}
        />
      </div>

      <div className="field">
        <label>프로젝트 내용 *</label>
        <textarea placeholder="산업군, 규모, 일정, 목표 등을 자유롭게 알려주세요." required />
      </div>

      <label className="consent">
        <input type="checkbox" required /> 개인정보 수집·이용에 동의합니다. 수집된 정보는 문의 응대
        목적으로만 사용되며, 3년간 보관 후 파기됩니다.
      </label>

      <button type="submit" className="submit">
        문의 보내기
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </form>
  );
}
