"use client";

import { useEffect, useState, useCallback } from "react";
import Toast from "@/components/Toast";

interface Sector {
  id: string;
  num: string;
  tag: string;
  title: string;
  desc: string;
  capabilities: string[];
  statVal: string;
  statUnit: string;
  refs: string[];
}

const EMPTY: Sector = {
  id: "", num: "", tag: "", title: "", desc: "",
  capabilities: [], statVal: "", statUnit: "", refs: [],
};

export default function BusinessAdmin() {
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Sector | null>(null);
  const [capInput, setCapInput] = useState("");
  const [refInput, setRefInput] = useState("");
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/business")
      .then(r => r.json())
      .then(setSectors)
      .catch(() => setToast({ msg: "데이터를 불러오지 못했습니다.", type: "error" }))
      .finally(() => setLoading(false));
  }, []);

  const closeToast = useCallback(() => setToast(null), []);

  const openEdit = (s: Sector) => {
    setEditing({ ...s, capabilities: [...s.capabilities], refs: [...s.refs] });
    setCapInput(""); setRefInput("");
  };

  const closeModal = () => setEditing(null);

  const save = async () => {
    if (!editing) return;
    setSaving(true);
    const next = sectors.map(s => s.id === editing.id ? editing : s);
    const res = await fetch("/api/business", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(next) });
    setSaving(false);
    if (res.ok) {
      setSectors(next);
      setEditing(null);
      setToast({ msg: "저장되었습니다.", type: "success" });
    } else {
      setToast({ msg: "저장에 실패했습니다.", type: "error" });
    }
  };

  const addCap = () => {
    if (!capInput.trim() || !editing) return;
    setEditing({ ...editing, capabilities: [...editing.capabilities, capInput.trim()] });
    setCapInput("");
  };
  const removeCap = (i: number) => {
    if (!editing) return;
    setEditing({ ...editing, capabilities: editing.capabilities.filter((_, idx) => idx !== i) });
  };

  const addRef = () => {
    if (!refInput.trim() || !editing) return;
    setEditing({ ...editing, refs: [...editing.refs, refInput.trim()] });
    setRefInput("");
  };
  const removeRef = (i: number) => {
    if (!editing) return;
    setEditing({ ...editing, refs: editing.refs.filter((_, idx) => idx !== i) });
  };

  return (
    <>
      <div className="admin-header">
        <h1>사업영역 관리</h1>
        <div className="hd-actions">
          <span style={{ fontSize: 13, color: "var(--ink-60)" }}>총 {sectors.length}개 섹터</span>
        </div>
      </div>

      <div className="admin-content">
        <div className="card">
          <div className="card-header">
            <h2>섹터 목록</h2>
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
                <th>섹터명</th>
                <th>태그</th>
                <th>핵심기능</th>
                <th>통계</th>
                <th>레퍼런스</th>
                <th style={{ width: 80 }}></th>
              </tr>
            </thead>
            <tbody>
              {sectors.map(s => (
                <tr key={s.id}>
                  <td>
                    <span className="badge badge-gray">{s.num}</span>
                  </td>
                  <td style={{ fontWeight: 600, fontSize: 14 }}>{s.title}</td>
                  <td><span className="badge badge-blue">{s.tag}</span></td>
                  <td style={{ color: "var(--ink-60)", fontSize: 13 }}>{s.capabilities.length}개</td>
                  <td style={{ fontWeight: 600, color: "var(--accent)" }}>{s.statVal} <span style={{ fontWeight: 400, color: "var(--ink-60)", fontSize: 12 }}>{s.statUnit}</span></td>
                  <td style={{ color: "var(--ink-60)", fontSize: 12 }}>{s.refs.join(", ")}</td>
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
              <h3>{editing.num} — {editing.title} 편집</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">섹터명</label>
                  <input className="form-input" value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">태그 (CATEGORY)</label>
                  <input className="form-input" value={editing.tag} onChange={e => setEditing({ ...editing, tag: e.target.value })} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">설명</label>
                <textarea className="form-textarea" value={editing.desc} onChange={e => setEditing({ ...editing, desc: e.target.value })} style={{ minHeight: 90 }} />
              </div>

              <div className="form-group">
                <label className="form-label">핵심 기능</label>
                <div className="tag-list">
                  {editing.capabilities.map((c, i) => (
                    <div key={i} className="tag-item">
                      {c}
                      <button onClick={() => removeCap(i)}>×</button>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    className="form-input"
                    placeholder="기능 입력 후 Enter"
                    value={capInput}
                    onChange={e => setCapInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addCap())}
                  />
                  <button className="btn btn-ghost" onClick={addCap} style={{ flexShrink: 0 }}>추가</button>
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">통계 수치</label>
                  <input className="form-input" value={editing.statVal} onChange={e => setEditing({ ...editing, statVal: e.target.value })} placeholder="예: 50K+" />
                </div>
                <div className="form-group">
                  <label className="form-label">통계 단위</label>
                  <input className="form-input" value={editing.statUnit} onChange={e => setEditing({ ...editing, statUnit: e.target.value })} placeholder="예: 채널" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">레퍼런스</label>
                <div className="tag-list">
                  {editing.refs.map((r, i) => (
                    <div key={i} className="tag-item">
                      {r}
                      <button onClick={() => removeRef(i)}>×</button>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    className="form-input"
                    placeholder="레퍼런스명 입력 후 Enter"
                    value={refInput}
                    onChange={e => setRefInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addRef())}
                  />
                  <button className="btn btn-ghost" onClick={addRef} style={{ flexShrink: 0 }}>추가</button>
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
