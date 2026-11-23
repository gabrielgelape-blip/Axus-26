"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { backofficeFaq } from "@/lib/backoffice";
import { track } from "@/lib/analytics";
import SectionHeading from "./SectionHeading";

export default function BackofficeFaq() {
  const [open, setOpen] = useState<string | null>(backofficeFaq.items[0].id);

  function toggle(id: string) {
    setOpen((current) => {
      const next = current === id ? null : id;
      if (next) track("faq_open", { question: id });
      return next;
    });
  }

  return (
    <section id="faq" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <SectionHeading eyebrow={backofficeFaq.eyebrow} title={backofficeFaq.title} />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {backofficeFaq.items.map((item) => {
            const on = open === item.id;
            return (
              <div key={item.id} className="glass organic overflow-hidden">
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-[16px] font-bold leading-snug text-navy md:text-[18px]">{item.question}</span>
                  <span className={`text-[22px] leading-none text-cyan transition-transform ${on ? "rotate-45" : ""}`} aria-hidden>
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {on ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink/70">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
