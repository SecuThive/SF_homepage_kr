"use client";

import { useEffect, useState, useCallback } from "react";
import Toast from "@/components/Toast";

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

const EMPTY: Omit<Popup, "id"> = {
  title: "",
  content: "",
  imageUrl: "",
  link: "",
  linkText: "자세히 보기",
  active: true,
  dismissMode: "today",
  startDate: new Date().toISOString().slice(0, 10),
  endDate: "",
  width: 480,
};

function genId() {
  return "popup_" + Date.now().toString(36);
}

export default function PopupsAdmin() {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [modal, setModal] = useState<{ mode: "add" | "edit"; data: Popup } | null>(null);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetch("/api/popups");
      const d = await r.json();
      setPopups(d.popups || []);
    } catch {
      showToast("데이터를 불러오지 못했습니다.", "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const save = async (next: Popup[]) => {
    setSaving(true);
    try {
      const r = await fetch("/api/popups", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ popups: next }),
      });
      if (!r.ok) throw new Error();
      setPopups(next);
      showToast("저장되었습니다.");
    } catch {
      showToast("저장에 실패했습니다.", "error");
    } finally {
      setSaving(false);
    }
  };

  const toggleActive = (id: string) => {
    const next = popups.map((p) => p.id === id ? { ...p, active: !p.active } : p);
    save(next);
  };

  const deletePopup = (id: string) => {
    if (!confirm("이 팝업을 삭제하시겠습니까?")) return;
    save(popups.filter((p) => p.id !== id));
  };

  const openAdd = () => setModal({ mode: "add", data: { id: genId(), ...EMPTY } });
  const openEdit = (p: Popup) => setModal({ mode: "edit", data: { ...p } });
  const closeModal = () => setModal(null);

  const handleSubmit = () => {
    if (!modal) return;
    const { mode, data } = modal;
    const next = mode === "add"
      ? [...popups, data]
      : popups.map((p) => p.id === data.id ? data : p);
    save(next);
    closeModal();
  };

  const setField = <K extends keyof Popup>(key: K, val: Popup[K]) => {
    setModal((m) => m ? { ...m, data: { ...m.data, [key]: val } } : m);
  };

  const dismissLabels: Record<Popup["dismissMode"], string> = {
    always: "항상 표시",
    today: "오늘 하루 보지 않기",
    session: "세션 동안 보지 않기",
  };

  return (
    <div className="admin-content">
      {toast && <Toast message={toast.msg} type={toast.type} onClose={() => setToast(null)} />}

      <div className="admin-header" style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <h1>팝업 관리</h1>
        <div className="hd-actions">
          <button className="btn btn-primary" onClick={openAdd}>
            + 팝업 추가
          </button>
        </div>
      </div>

      <div style={{ padding: "28px" }}>
        {loading ? (
          <div style={{ color: "var(--ink-60)", fontSize: 14, padding: "40px 0", textAlign: "center" }}>
            불러오는 중...
          </div>
        ) : popups.length === 0 ? (
          <div className="card">
            <div className="card-body" style={{ textAlign: "center", padding: "48px 24px", color: "var(--ink-60)" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>📋</div>
              <p style={{ fontSize: 14 }}>등록된 팝업이 없습니다.</p>
              <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={openAdd}>
                첫 팝업 만들기
              </button>
            </div>
          </div>
        ) : (
          <div className="card">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>표시 기간</th>
                  <th>닫기 옵션</th>
                  <th>너비</th>
                  <th>상태</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                {popups.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <div style={{ fontWeight: 600, fontSize: 13.5 }}>{p.title || <em style={{ color: "var(--ink-40)" }}>제목 없음</em>}</div>
                      {p.link && (
                        <div style={{ fontSize: 12, color: "var(--ink-40)", marginTop: 2 }}>{p.link}</div>
                      )}
                    </td>
                    <td style={{ fontSize: 12.5, color: "var(--ink-60)" }}>
                      {p.startDate || "—"} ~ {p.endDate || "무기한"}
                    </td>
                    <td>
                      <span className={`badge ${p.dismissMode === "always" ? "badge-blue" : "badge-gray"}`}>
                        {dismissLabels[p.dismissMode]}
                      </span>
                    </td>
                    <td style={{ fontSize: 12.5, color: "var(--ink-60)" }}>{p.width}px</td>
                    <td>
                      <button
                        onClick={() => toggleActive(p.id)}
                        disabled={saving}
                        style={{
                          background: p.active ? "var(--success)" : "var(--line)",
                          color: p.active ? "#fff" : "var(--ink-60)",
                          border: "none",
                          borderRadius: 20,
                          padding: "4px 12px",
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "background .2s",
                        }}
                      >
                        {p.active ? "활성" : "비활성"}
                      </button>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button className="btn btn-ghost btn-sm" onClick={() => openEdit(p)}>
                          수정
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => deletePopup(p.id)}>
                          삭제
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {modal && (
        <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="modal">
            <div className="modal-header">
              <h3>{modal.mode === "add" ? "팝업 추가" : "팝업 수정"}</h3>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">제목</label>
                <input
                  className="form-input"
                  value={modal.data.title}
                  onChange={(e) => setField("title", e.target.value)}
                  placeholder="팝업 제목"
                />
              </div>

              <div className="form-group">
                <label className="form-label">내용</label>
                <textarea
                  className="form-textarea"
                  value={modal.data.content}
                  onChange={(e) => setField("content", e.target.value)}
                  placeholder="팝업 내용 (HTML 태그 사용 가능)"
                  style={{ minHeight: 120 }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">이미지 URL</label>
                <input
                  className="form-input"
                  value={modal.data.imageUrl}
                  onChange={(e) => setField("imageUrl", e.target.value)}
                  placeholder="https://..."
                />
                <span className="form-hint">비워두면 이미지 없이 표시됩니다.</span>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">링크 URL</label>
                  <input
                    className="form-input"
                    value={modal.data.link}
                    onChange={(e) => setField("link", e.target.value)}
                    placeholder="https://..."
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">링크 버튼 텍스트</label>
                  <input
                    className="form-input"
                    value={modal.data.linkText}
                    onChange={(e) => setField("linkText", e.target.value)}
                    placeholder="자세히 보기"
                  />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">시작일</label>
                  <input
                    className="form-input"
                    type="date"
                    value={modal.data.startDate}
                    onChange={(e) => setField("startDate", e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">종료일</label>
                  <input
                    className="form-input"
                    type="date"
                    value={modal.data.endDate}
                    onChange={(e) => setField("endDate", e.target.value)}
                  />
                  <span className="form-hint">비워두면 무기한 표시됩니다.</span>
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">닫기 옵션</label>
                  <select
                    className="form-select"
                    value={modal.data.dismissMode}
                    onChange={(e) => setField("dismissMode", e.target.value as Popup["dismissMode"])}
                  >
                    <option value="always">항상 표시</option>
                    <option value="today">오늘 하루 보지 않기</option>
                    <option value="session">세션 동안 보지 않기</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">팝업 너비 (px)</label>
                  <input
                    className="form-input"
                    type="number"
                    min={320}
                    max={720}
                    step={40}
                    value={modal.data.width}
                    onChange={(e) => setField("width", parseInt(e.target.value) || 480)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={modal.data.active}
                    onChange={(e) => setField("active", e.target.checked)}
                    style={{ width: 16, height: 16 }}
                  />
                  <span style={{ fontSize: 13.5, fontWeight: 500 }}>팝업 활성화</span>
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={closeModal}>취소</button>
              <button className="btn btn-primary" onClick={handleSubmit} disabled={saving}>
                {saving ? "저장 중..." : "저장"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
