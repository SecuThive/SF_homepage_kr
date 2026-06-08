"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    const observeReveal = (root: Document | Element = document) => {
      (root === document ? document : root)
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)")
        .forEach((el) => io.observe(el));
    };
    observeReveal();

    const countIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          if (el.dataset.counted === "1") continue;
          el.dataset.counted = "1";
          const target = parseFloat(el.dataset.count || "0");
          const decimals = parseInt(el.dataset.decimals || "0", 10);
          const dur = 1600;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const v = target * eased;
            el.textContent = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString();
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          countIO.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    const observeCount = () => {
      document
        .querySelectorAll<HTMLElement>("[data-count]")
        .forEach((el) => {
          if (el.dataset.counted !== "1") countIO.observe(el);
        });
    };
    observeCount();

    // Re-observe elements added by tab switches (same pathname, conditional rendering)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (!m.addedNodes.length) continue;
        for (const node of m.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches("[data-reveal]:not(.is-in)")) io.observe(node as HTMLElement);
          node.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
          node.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
            if (el.dataset.counted !== "1") countIO.observe(el);
          });
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    requestAnimationFrame(() => document.body.classList.add("loaded"));

    return () => {
      io.disconnect();
      countIO.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
