"use client";

import { useState } from "react";

export function SingleChipGroup({ items, defaultIndex = 0 }: { items: string[]; defaultIndex?: number }) {
  const [on, setOn] = useState(defaultIndex);
  return (
    <div className="chips">
      {items.map((label, i) => (
        <span
          key={label}
          className={`chip${i === on ? " on" : ""}`}
          onClick={() => setOn(i)}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export function MultiChipGroup({ items, defaultOn = [] }: { items: string[]; defaultOn?: number[] }) {
  const [on, setOn] = useState<Set<number>>(new Set(defaultOn));
  return (
    <div className="chips">
      {items.map((label, i) => (
        <span
          key={label}
          className={`chip${on.has(i) ? " on" : ""}`}
          onClick={() =>
            setOn((prev) => {
              const n = new Set(prev);
              if (n.has(i)) n.delete(i);
              else n.add(i);
              return n;
            })
          }
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export function FilterBar({ items, defaultIndex = 0 }: { items: string[]; defaultIndex?: number }) {
  const [on, setOn] = useState(defaultIndex);
  return (
    <div className="filter">
      {items.map((label, i) => (
        <button key={label} type="button" className={i === on ? "on" : undefined} onClick={() => setOn(i)}>
          {label}
        </button>
      ))}
    </div>
  );
}
