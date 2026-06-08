"use client";

import { useEffect, useRef, useState } from "react";

interface Popup {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  link: string;
  linkText: string;
  active: boolean;
  dismissMode: "always" | "today" | "session";
  startDate: string;
  endDate: string;
  width: number;
}

interface Pos { x: number; y: number; }

/** YYYY-MM-DD (로컬 시간대 기준) */
function localDateStr(): string {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

function isDismissed(popup: Popup): boolean {
  if (popup.dismissMode === "always") return false;
  try {
    const key = `popup_dismissed_${popup.id}`;
    if (popup.dismissMode === "session") {
      return !!sessionStorage.getItem(key);
    }
    if (popup.dismissMode === "today") {
      return localStorage.getItem(key) === localDateStr();
    }
  } catch { /* storage 접근 불가 환경 */ }
  return false;
}

function saveDismiss(popup: Popup) {
  try {
    const key = `popup_dismissed_${popup.id}`;
    if (popup.dismissMode === "session") {
      sessionStorage.setItem(key, "1");
    } else if (popup.dismissMode === "today") {
      localStorage.setItem(key, localDateStr());
    }
  } catch { /* storage 접근 불가 환경 */ }
}

function isInRange(popup: Popup): boolean {
  const today = new Date().toISOString().slice(0, 10);
  if (popup.startDate && today < popup.startDate) return false;
  if (popup.endDate && today > popup.endDate) return false;
  return true;
}

/** 팝업 초기 위치 계산: 화면 5분의 2 지점(top 40%) 기준, 여러 개면 가로로 펼침 */
function calcInitPositions(pops: Popup[]): Record<string, Pos> {
  const gap = 20;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const targetTop = vh * 0.4 - 120; // 40% 지점에서 팝업 높이 절반만큼 올림

  const widths = pops.map((p) => Math.min(p.width || 380, 480));
  const totalW = widths.reduce((a, b) => a + b, 0) + gap * (pops.length - 1);

  const result: Record<string, Pos> = {};
  let curX = Math.max(16, (vw - totalW) / 2); // 최소 16px 여백
  pops.forEach((p, i) => {
    result[p.id] = { x: curX, y: targetTop };
    curX += widths[i] + gap;
  });
  return result;
}

export default function HomePopup() {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [positions, setPositions] = useState<Record<string, Pos>>({});
  const [closed, setClosed] = useState<Set<string>>(new Set());
  const [dragging, setDragging] = useState<string | null>(null);

  const dragOrigin = useRef<{ mouseX: number; mouseY: number; posX: number; posY: number } | null>(null);

  useEffect(() => {
    fetch("/api/popups", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: { popups: Popup[] }) => {
        const active = (data.popups || []).filter(
          (p) => p.active && isInRange(p) && !isDismissed(p)
        );
        if (active.length === 0) return;
        setPopups(active);
        setPositions(calcInitPositions(active));
      })
      .catch(() => {});
  }, []);

  // 드래그 mousemove / mouseup 전역 리스너
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging || !dragOrigin.current) return;
      const { mouseX, mouseY, posX, posY } = dragOrigin.current;
      setPositions((prev) => ({
        ...prev,
        [dragging]: {
          x: posX + e.clientX - mouseX,
          y: posY + e.clientY - mouseY,
        },
      }));
    };
    const onUp = () => {
      setDragging(null);
      dragOrigin.current = null;
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

  const startDrag = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const pos = positions[id] ?? { x: 0, y: 0 };
    dragOrigin.current = { mouseX: e.clientX, mouseY: e.clientY, posX: pos.x, posY: pos.y };
    setDragging(id);
  };

  const close = (popup: Popup, withDismiss = false) => {
    if (withDismiss) saveDismiss(popup);
    // 위치는 그대로 유지, 닫힘 목록에만 추가
    setClosed((prev) => new Set([...prev, popup.id]));
  };

  const visible = popups.filter((p) => !closed.has(p.id));
  if (visible.length === 0) return null;

  return (
    <>
      {visible.map((popup) => {
        const pos = positions[popup.id] ?? { x: 0, y: 0 };
        const w = Math.min(popup.width || 380, 480);
        const isDragging = dragging === popup.id;

        return (
          <div
            key={popup.id}
            className="hp-card"
            style={{
              left: pos.x,
              top: pos.y,
              width: w,
              zIndex: isDragging ? 1001 : 900,
              boxShadow: isDragging
                ? "0 20px 60px -8px rgba(10,10,10,.28), 0 0 0 1px #E6E6E6"
                : "0 4px 6px -1px rgba(10,10,10,.06), 0 12px 40px -6px rgba(10,10,10,.14), 0 0 0 1px #E6E6E6",
            }}
            role="dialog"
            aria-label={popup.title}
          >
            {/* 상단 바 — 드래그 핸들 */}
            <div
              className="hp-bar"
              onMouseDown={(e) => startDrag(e, popup.id)}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              <span className="hp-bar-dots" aria-hidden="true">
                <i /><i /><i />
              </span>
              <span className="hp-bar-label">NOTICE</span>
              <button
                className="hp-close"
                onMouseDown={(e) => e.stopPropagation()} // 드래그 방지
                onClick={() => close(popup, false)}
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            {/* 이미지 */}
            {popup.imageUrl && (
              <div className="hp-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={popup.imageUrl} alt={popup.title} className="hp-img" />
              </div>
            )}

            {/* 본문 */}
            <div className="hp-body">
              {popup.title && <p className="hp-eyebrow">ANNOUNCEMENT</p>}
              {popup.title && <h3 className="hp-title">{popup.title}</h3>}
              {popup.content && (
                <div className="hp-content" dangerouslySetInnerHTML={{ __html: popup.content }} />
              )}
              {popup.link && (
                <a className="hp-cta" href={popup.link} target="_blank" rel="noopener noreferrer">
                  {popup.linkText || "자세히 보기"}
                  <svg viewBox="0 0 14 14" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 13L13 1M13 1H4M13 1V10" />
                  </svg>
                </a>
              )}
            </div>

            {/* 하단 */}
            <div className="hp-foot">
              <div>
                {popup.dismissMode === "today" && (
                  <button className="hp-dismiss" onClick={() => close(popup, true)}>
                    오늘 하루 보지 않기
                  </button>
                )}
              </div>
              <button className="hp-close-text" onClick={() => close(popup, false)}>
                닫기
              </button>
            </div>
          </div>
        );
      })}

      <style>{`
        .hp-card {
          position: fixed;
          background: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          max-height: calc(100vh - 40px);
          transition: box-shadow .15s;
          animation: hp-up .28s cubic-bezier(.22,.61,.36,1) both;
          user-select: none;
        }
        @keyframes hp-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hp-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-bottom: 1px solid #F0F0F0;
          background: #FAFAFA;
          flex-shrink: 0;
        }
        .hp-bar-dots {
          display: flex;
          gap: 5px;
          align-items: center;
        }
        .hp-bar-dots i {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #E6E6E6;
          font-style: normal;
        }
        .hp-bar-label {
          flex: 1;
          font-size: 9.5px;
          letter-spacing: .16em;
          color: #8A8A8A;
          font-family: var(--font-display, sans-serif);
          font-weight: 500;
        }
        .hp-close {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: #8A8A8A;
          background: none;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background .15s, color .15s;
          flex-shrink: 0;
        }
        .hp-close:hover { background: #F0F0F0; color: #0A0A0A; }
        .hp-img-wrap { overflow: hidden; flex-shrink: 0; }
        .hp-img { display: block; width: 100%; max-height: 240px; object-fit: cover; }
        .hp-body { padding: 20px 22px 16px; overflow-y: auto; }
        .hp-eyebrow {
          font-size: 9.5px;
          letter-spacing: .16em;
          color: var(--accent, #4F6EF7);
          font-family: var(--font-display, sans-serif);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .hp-title {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -.02em;
          color: #0A0A0A;
          line-height: 1.45;
          margin-bottom: 10px;
          font-family: var(--font-display, sans-serif);
        }
        .hp-content {
          font-size: 13.5px;
          color: #4A4A4A;
          line-height: 1.75;
          margin-bottom: 16px;
          user-select: text;
        }
        .hp-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          border: 1px solid #0A0A0A;
          color: #0A0A0A;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .04em;
          text-decoration: none;
          transition: background .2s, color .2s;
          font-family: var(--font-display, sans-serif);
        }
        .hp-cta:hover { background: #0A0A0A; color: #fff; }
        .hp-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 22px 12px;
          border-top: 1px solid #F0F0F0;
          flex-shrink: 0;
        }
        .hp-dismiss {
          font-size: 11.5px;
          color: #8A8A8A;
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: color .15s;
          padding: 0;
        }
        .hp-dismiss:hover { color: #4A4A4A; }
        .hp-close-text {
          font-size: 11.5px;
          color: #8A8A8A;
          background: none;
          border: none;
          cursor: pointer;
          letter-spacing: .04em;
          transition: color .15s;
          padding: 0;
        }
        .hp-close-text:hover { color: #0A0A0A; }

        @media (max-width: 640px) {
          .hp-card {
            position: fixed !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            top: auto !important;
            width: 100% !important;
            max-height: 70vh;
            border-top: 1px solid #E6E6E6;
            animation: hp-slide-up .28s cubic-bezier(.22,.61,.36,1) both;
          }
          @keyframes hp-slide-up {
            from { opacity: 0; transform: translateY(100%); }
            to   { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </>
  );
}
