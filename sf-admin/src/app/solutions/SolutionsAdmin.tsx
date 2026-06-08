"use client";

import { useEffect, useState, useCallback } from "react";
import Toast from "@/components/Toast";

interface Solution {
  id: string;
  num: string;
  partner: string;
  category: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
}

export default function SolutionsAdmin() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Solution | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/solutions")
      .then(r => r.json())
      .then(setSolutions)
      .catch(() => setToast({ msg: "데이터를 불러오지 못했습니다.", type: "error" }))
      .finally(() => setLoading(false));
  }, []);

  const closeToast = useCallback(() => setToast(null), []);

  const openEdit = (s: Solution) => {
    setEditing({ ...s, tags: [...s.tags] });
    setTagInput("");
  };
  const closeModal = () => setEditing(null);

  const save = async () => {
    if (!editing) return;
    setSaving(true);
    const next = solutions.map(s => s.id === editing.id ? editing : s);
    const res = await fetch("/api/solutions", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(next) });
    setSaving(false);
    if (res.ok) {
      setSolutions(next);
      setEditing(null);
      setToast({ msg: "저장되었습니다.", type: "success" });
    } else {
      setToast({ msg: "저장에 실패했습니다.", type: "error" });
    }
  };

  const addTag = () => {
    if (!tagInput.trim() || !editing) return;
    setEditing({ ...editing, tags: [...editing.tags, tagInput.trim()] });
    setTagInput("");
  };
  const removeTag = (i: number) => {
    if (!editing) return;
    setEditing({ ...editing, tags: editing.tags.filter((_, idx) => idx !== i) });
  };

  return (
    <>
      <div className="admin-header">
        <h1>솔루션 관리</h1>
        <div className="hd-actions">
          <span style={{ fontSize: 13, color: "var(--ink-60)" }}>총 {solutions.length}개 솔루션</span>
        </div>
      </div>

      <div className="admin-content">
        <div className="card">
          <div className="card-header">
            <h2>솔루션 목록</h2>
          </div>
          {loading ? (
            <div style={{ padding: "40px 24px", textAlign: "center", color: "var(--ink-60)", fontSize: 14 }}>
              불러오는 중...
            </div>
          ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>번호</th>
                <th>파트너</th>
                <th>카테고리</th>
                <th>제목</th>
                <th>태그</th>
                <th style={{ width: 80 }}></th>
              </tr>
            </thead>
            <tbody>
              {solutions.map(s => (
                <tr key={s.id}>
                  <td><span className="badge badge-gray">{s.num}</span></td>
                  <td style={{ fontWeight: 700, fontSize: 13 }}>{s.partner}</td>
                  <td><span className="badge badge-blue">{s.category}</span></td>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: "var(--ink-60)", marginTop: 2 }}>{s.subtitle}</div>
                  </td>
                  <td>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {s.tags.map(t => (
                        <span key={t} className="badge badge-gray">{t}</span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-sm" onClick={() => openEdit(s)}>편집</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="modal">
            <div className="modal-header">
              <h3>{editing.partner} — {editing.title} 편집</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">파트너명</label>
                  <input className="form-input" value={editing.partner} onChange={e => setEditing({ ...editing, partner: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">카테고리</label>
                  <input className="form-input" value={editing.category} onChange={e => setEditing({ ...editing, category: e.target.value })} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">솔루션 제목</label>
                <input className="form-input" value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} />
              </div>

              <div className="form-group">
                <label className="form-label">부제목</label>
                <input className="form-input" value={editing.subtitle} onChange={e => setEditing({ ...editing, subtitle: e.target.value })} />
              </div>

              <div className="form-group">
                <label className="form-label">설명</label>
                <textarea className="form-textarea" value={editing.desc} onChange={e => setEditing({ ...editing, desc: e.target.value })} style={{ minHeight: 90 }} />
              </div>

              <div className="form-group">
                <label className="form-label">태그</label>
                <div className="tag-list">
                  {editing.tags.map((t, i) => (
                    <div key={i} className="tag-item">
                      {t}
                      <button onClick={() => removeTag(i)}>×</button>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    className="form-input"
                    placeholder="태그 입력 후 Enter"
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <button className="btn btn-ghost" onClick={addTag} style={{ flexShrink: 0 }}>추가</button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={closeModal}>취소</button>
              <button className="btn btn-primary" onClick={save} disabled={saving}>
                {saving ? "저장 중..." : "저장하기"}
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <Toast message={toast.msg} type={toast.type} onClose={closeToast} />}
    </>
  );
}
