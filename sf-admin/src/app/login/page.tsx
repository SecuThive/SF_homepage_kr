"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace("/");
      } else {
        const d = await res.json();
        setError(d.error ?? "로그인 실패");
      }
    } catch {
      setError("서버 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg)",
    }}>
      <div style={{
        width: "100%",
        maxWidth: 380,
        padding: "0 24px",
      }}>
        <div style={{ marginBottom: 36, textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-display, sans-serif)",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: ".06em",
            color: "var(--ink)",
          }}>
            SafeSquare
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-60)", marginTop: 6, letterSpacing: ".08em" }}>
            ADMIN CONSOLE
          </div>
        </div>

        <div className="card">
          <div className="card-body" style={{ padding: "28px 24px" }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 20 }}>로그인</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">비밀번호</label>
                <input
                  className="form-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="관리자 비밀번호"
                  autoFocus
                  required
                />
              </div>
              {error && (
                <div style={{ fontSize: 13, color: "var(--danger)", padding: "8px 12px", background: "#FEF2F2", borderRadius: 6 }}>
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ marginTop: 4 }}
              >
                {loading ? "로그인 중..." : "로그인"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
