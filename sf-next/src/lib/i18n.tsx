"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "ko" | "en" | "ja";
export const LOCALES: Lang[] = ["ko", "en", "ja"];
export const DEFAULT_LOCALE: Lang = "ko";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<Ctx>({ lang: "ko", setLang: () => {} });

export function LangProvider({ initialLang = "ko", children }: { initialLang?: Lang; children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // URL 로케일(initialLang)이 바뀌면 컨텍스트·html lang 동기화
  useEffect(() => {
    setLangState(initialLang);
    if (typeof document !== "undefined") document.documentElement.lang = initialLang;
  }, [initialLang]);

  // 사용자가 선택한 로케일을 쿠키/스토리지에 기록(루트 리다이렉트·재방문 시 활용)
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`;
      document.documentElement.lang = l;
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Pick a value by current locale. Japanese falls back to English when not provided. */
export function pick<T>(lang: Lang, ko: T, en: T, ja?: T): T {
  if (lang === "ja") return ja ?? en;
  if (lang === "en") return en;
  return ko;
}

/** 내부 절대경로/해시에 로케일 접두. 외부·mailto·tel·이미 접두된 경로는 그대로 둔다. */
export function localize(lang: Lang, href: string): string {
  if (!href || !href.startsWith("/")) return href; // 외부 URL, #앵커, mailto/tel 등
  const seg = href.split("/")[1]?.split(/[#?]/)[0] ?? "";
  if ((LOCALES as string[]).includes(seg)) return href; // 이미 로케일 접두됨
  if (href === "/") return `/${lang}`;
  if (href.startsWith("/#") || href.startsWith("/?")) return `/${lang}${href.slice(1)}`; // /#x -> /ko#x
  return `/${lang}${href}`;
}

/** 컴포넌트에서 현재 로케일로 href를 접두하는 헬퍼. */
export function useLocalizedHref() {
  const { lang } = useLang();
  return (href: string) => localize(lang, href);
}
