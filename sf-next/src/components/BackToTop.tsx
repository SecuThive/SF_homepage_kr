"use client";

export default function BackToTop() {
  return (
    <button
      type="button"
      className="foot-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로 이동"
    >
      TOP
      <svg viewBox="0 0 10 10">
        <path d="M5 9V1M1 5l4-4 4 4" />
      </svg>
    </button>
  );
}
