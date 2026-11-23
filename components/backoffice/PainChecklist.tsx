"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { pains } from "@/lib/backoffice";
import { track } from "@/lib/analytics";
import SectionHeading from "./SectionHeading";

export default function PainChecklist() {
  const [selected, setSelected] = useState<string[]>([]);
  const active = selected.length > 0;

  function toggle(id: string) {
    setSelected((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      track("pain_select", { pain: id, selected: !current.includes(id) });
      return next;
    });
  }

  return (
    <section id="dores" className="scroll-mt-28 bg-stone py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <SectionHeading eyebrow={pains.eyebrow} title={pains.title} />

        <ul className="mt-10 grid gap-3 md:mt-12">
          {pains.items.map((item) => {
            const on = selected.includes(item.id);
            return (
              <li key={item.id}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(item.id)}
                  className={`flex w-full items-start gap-4 rounded-organic border px-4 py-4 text-left transition-colors md:px-6 md:py-5 ${
                    on ? "border-cyan bg-white shadow-glass" : "border-line bg-white/70 hover:border-navy/20"
                  }`}
                >
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600"
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 3l8 8M11 3L3 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-medium leading-relaxed text-navy md:text-[16px]">
                      {item.text}
                    </span>
                    <span className={`mt-2 inline-flex items-center gap-2 text-[13px] font-semibold ${on ? "text-cyan" : "text-navy/45"}`}>
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                          on ? "border-cyan bg-cyan text-navy" : "border-navy/20"
                        }`}
                        aria-hidden
                      >
                        {on ? (
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6.2L4.8 8.5 9.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : null}
                      </span>
                      {pains.mark}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <AnimatePresence>
          {active ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong organic-lg mt-6 px-6 py-6 md:px-8"
            >
              <p className="text-[16px] leading-relaxed text-navy md:text-[18px]">
                {pains.transitionLead}
                <strong>{pains.transitionStrong}</strong>
              </p>
              <a
                href="#auditoria"
                onClick={() => track("cta_click", { place: "dores" })}
                className="btn-primary mt-5"
              >
                Quero uma auditoria gratuita
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
