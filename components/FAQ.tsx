"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq, faqChips } from "@/lib/content";

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [chip, setChip] = useState<string | null>(null);
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faq.filter((item) => {
      const matchesChip = !chip || item.tags.includes(chip);
      const matchesQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchesChip && matchesQuery;
    });
  }, [query, chip]);

  return (
    <section className="bg-stone py-24 md:py-32">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <div className="max-w-xl">
          <p className="section-label">Perguntas frequentes</p>
          <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">
            Encontre rápido
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="glass-strong organic flex items-center gap-3 px-5 py-3.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-navy/40" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(0);
              }}
              placeholder="Buscar por prazo, orçamento, documentação…"
              className="w-full bg-transparent text-[15px] text-navy outline-none placeholder:text-ink/40"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setChip(null)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all ${
                !chip ? "bg-navy text-white" : "glass text-navy/70 hover:text-navy"
              }`}
            >
              Todas
            </button>
            {faqChips.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setChip(chip === c ? null : c);
                  setOpen(0);
                }}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all ${
                  chip === c ? "bg-cyan text-navy" : "glass text-navy/70 hover:text-navy"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={item.question}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="glass organic overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[15px] font-semibold text-navy md:text-[16px]">
                        {item.question}
                      </span>
                      <span
                        className={`shrink-0 text-[22px] font-light text-cyan transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-[14px] leading-relaxed text-ink/65 md:text-[15px]">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            {filtered.length === 0 && (
              <p className="py-8 text-center text-[14px] text-ink/50">
                Nenhuma pergunta encontrada. Tente outro termo ou chip.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
