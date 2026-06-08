"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [label, setLabel] = useState("SEOUL · KR");
  useEffect(() => {
    const update = () => {
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const t = new Intl.DateTimeFormat("en-GB", opts).format(new Date());
      setLabel("SEOUL · " + t + " KST");
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return <span id="liveClock">{label}</span>;
}
