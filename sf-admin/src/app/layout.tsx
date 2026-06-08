import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";

export const metadata: Metadata = { title: "SafeSquare Admin" };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("admin_session")?.value === process.env.ADMIN_SESSION_SECRET;

  return (
    <html lang="ko">
      <body>
        {isLoggedIn ? (
          <div className="admin-shell">
            <Sidebar />
            <main className="admin-main">{children}</main>
          </div>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
