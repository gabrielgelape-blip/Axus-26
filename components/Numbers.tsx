"use client";

import { numbers } from "@/lib/content";

export default function Numbers() {
  const items = [...numbers, ...numbers, ...numbers];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy py-5 text-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy to-transparent md:w-24" />

      <div className="marquee-track flex gap-4 px-4">
        {items.map((n, i) => (
          <div
            key={`${n.label}-${i}`}
            className="glass-dark flex shrink-0 items-baseline gap-3 rounded-full px-6 py-3"
          >
            <span className="font-display text-[22px] font-extrabold tracking-tight text-cyan md:text-[26px]">
              {n.value}
            </span>
            <span className="whitespace-nowrap text-[13px] text-white/65">{n.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
