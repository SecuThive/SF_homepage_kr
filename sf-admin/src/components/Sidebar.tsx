"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV = [
  {
    section: "콘텐츠 관리",
    items: [
      { href: "/business", label: "사업영역", icon: "🏙" },
      { href: "/solutions", label: "솔루션", icon: "🔧" },
      { href: "/popups", label: "팝업 관리", icon: "📢" },
    ],
  },
];

export default function Sidebar() {
  const path = usePathname();
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/login");
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="logo">SafeSquare</span>
        <span className="sub">Admin Console</span>
      </div>

      <Link href="/" className={`sidebar-link${path === "/" ? " active" : ""}`} style={{ margin: "12px 12px 0" }}>
        <span className="icon">⊞</span>
        대시보드
      </Link>

      {NAV.map((g) => (
        <div key={g.section} className="sidebar-section">
          <div className="sidebar-section-label">{g.section}</div>
          {g.items.map((item) => {
            const active = path.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`sidebar-link${active ? " active" : ""}`}>
                <span className="icon">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </div>
      ))}

      <div className="sidebar-footer">
        <span>SafeSquare Admin v0.1</span>
        <button
          onClick={logout}
          style={{
            background: "none",
            border: "none",
            fontSize: 12,
            color: "var(--ink-40)",
            cursor: "pointer",
            padding: 0,
            marginTop: 8,
            display: "block",
            width: "100%",
            textAlign: "left",
          }}
        >
          로그아웃 →
        </button>
      </div>
    </aside>
  );
}
