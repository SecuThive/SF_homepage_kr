"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLang, type Lang, LOCALES } from "@/lib/i18n";

export default function FooterLang() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  const switchLang = (l: Lang) => {
    setLang(l);
    const parts = (pathname || "/").split("/");
    if ((LOCALES as string[]).includes(parts[1])) parts[1] = l;
    else parts.splice(1, 0, l);
    router.push(parts.join("/") || `/${l}`);
  };

  return (
    <div className="foot-lang" role="group" aria-label="language">
      <button type="button" className={lang === "ko" ? "on" : ""} aria-pressed={lang === "ko"} onClick={() => switchLang("ko")}>
        KR
      </button>
      <button type="button" className={lang === "en" ? "on" : ""} aria-pressed={lang === "en"} onClick={() => switchLang("en")}>
        EN
      </button>
      <button type="button" className={lang === "ja" ? "on" : ""} aria-pressed={lang === "ja"} onClick={() => switchLang("ja")}>
        JP
      </button>
    </div>
  );
}
