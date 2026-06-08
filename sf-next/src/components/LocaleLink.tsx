"use client";

import NextLink from "next/link";
import { forwardRef, type ComponentProps } from "react";
import { useLocalizedHref } from "@/lib/i18n";

type Props = Omit<ComponentProps<typeof NextLink>, "href"> & { href: string };

/**
 * next/link 드롭인 대체. 내부 절대경로 href를 현재 로케일로 자동 접두한다.
 * 외부 URL·#앵커·mailto/tel·이미 로케일 접두된 경로는 그대로 둔다(localize 처리).
 */
const LocaleLink = forwardRef<HTMLAnchorElement, Props>(function LocaleLink({ href, ...rest }, ref) {
  const lp = useLocalizedHref();
  return <NextLink ref={ref} href={lp(href)} {...rest} />;
});

export default LocaleLink;
