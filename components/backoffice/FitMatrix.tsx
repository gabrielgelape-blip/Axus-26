"use client";

import { useState } from "react";
import { fit } from "@/lib/backoffice";
import SectionHeading from "./SectionHeading";

function Column({
  tone,
  label,
  items,
}: {
  tone: "yes" | "no";
  label: string;
  items: string[];
}) {
  const yes = tone === "yes";
  return (
    <div className={`organic-lg border px-5 py-6 md:px-7 md:py-8 ${yes ? "border-cyan/40 bg-white" : "border-red-200 bg-white"}`}>
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            yes ? "bg-cyan text-navy" : "bg-red-50 text-red-600"
          }`}
          aria-hidden
        >
          {yes ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9.2l3.2 3.2L14 5.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 4l8 8M12 4L4 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </span>
        <h3 className="text-[20px] font-extrabold text-navy">{label}</h3>
      </div>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink/75">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${yes ? "bg-cyan" : "bg-red-500"}`} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FitMatrix() {
  const [side, setSide] = useState<"yes" | "no">("yes");

  return (
    <section id="para-quem" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <SectionHeading eyebrow={fit.eyebrow} title={fit.title} center />

        <div className="mx-auto mt-8 grid max-w-md grid-cols-2 rounded-full bg-stone p-1 md:hidden">
          {(["yes", "no"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setSide(key)}
              className={`rounded-full px-3 py-3 text-[14px] font-semibold ${
                side === key ? "bg-navy text-white" : "text-navy/60"
              }`}
              aria-pressed={side === key}
            >
              {key === "yes" ? fit.yesLabel : fit.noLabel}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
          <div className={side === "yes" ? "block" : "hidden md:block"}>
            <Column tone="yes" label={fit.yesLabel} items={fit.yes} />
          </div>
          <div className={side === "no" ? "block" : "hidden md:block"}>
            <Column tone="no" label={fit.noLabel} items={fit.no} />
          </div>
        </div>
      </div>
    </section>
  );
}
