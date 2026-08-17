"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { adminWorks, contact } from "@/lib/content";

export default function AdminWorks() {
  const { traditionalLabel, adminLabel, pairs } = adminWorks.comparison;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section id="administracao" className="relative overflow-hidden bg-stone py-20 md:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-amber/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-amber">
            {adminWorks.label}
          </p>
          <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">
            {adminWorks.title}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink/60 md:text-[18px]">
            {adminWorks.subtitle}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-organic-lg md:mt-14"
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={adminWorks.image}
              alt={adminWorks.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          <p className="bg-navy/5 px-4 py-3 text-center text-[13px] text-ink/55">
            {adminWorks.imageCaption}
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl md:mt-14">
          <div className="mb-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-1 md:gap-5 md:px-4">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink/35 md:text-[12px]">
              {traditionalLabel}
            </p>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber font-display text-[11px] font-extrabold text-navy shadow-[0_8px_24px_rgba(240,180,41,0.45)]">
              VS
            </span>
            <p className="text-right font-display text-[11px] font-bold uppercase tracking-[0.2em] text-amber md:text-[12px]">
              {adminLabel}
            </p>
          </div>

          <ul className="space-y-2.5" role="list">
            {pairs.map((pair, i) => {
              const isActive = active === i;
              return (
                <motion.li
                  key={pair.admin}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: reduce ? 0 : i * 0.06,
                    type: "spring",
                    stiffness: 140,
                    damping: 20,
                  }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`relative w-full overflow-hidden rounded-2xl border text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                      isActive
                        ? "border-amber bg-amber shadow-[0_16px_40px_rgba(240,180,41,0.28)]"
                        : "border-transparent bg-navy/[0.04] hover:bg-navy/[0.07]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="admin-pair-glow"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(255,255,255,0.35),transparent_60%)]"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    )}

                    <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-4 md:gap-5 md:px-6 md:py-5">
                      <span
                        className={`font-display text-[15px] font-bold leading-tight transition-colors md:text-[18px] ${
                          isActive
                            ? "text-navy/40 line-through decoration-navy/25"
                            : "text-ink/30 line-through decoration-ink/15"
                        }`}
                      >
                        {pair.traditional}
                      </span>

                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] font-bold transition-colors ${
                          isActive ? "bg-navy text-amber" : "bg-navy/10 text-navy/40"
                        }`}
                        aria-hidden
                      >
                        →
                      </span>

                      <span
                        className={`text-right font-display text-[15px] font-extrabold leading-tight transition-colors md:text-[18px] ${
                          isActive ? "text-navy" : "text-navy/70"
                        }`}
                      >
                        {pair.admin}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="desc"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduce ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="relative overflow-hidden"
                        >
                          <p className="border-t border-navy/10 px-4 pb-4 pt-3 text-[13px] leading-relaxed text-navy/75 md:px-6 md:pb-5 md:text-[14px]">
                            {pair.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.li>
              );
            })}
          </ul>

          <p className="mt-4 text-center text-[12px] text-ink/40 md:hidden">
            Toque em um par para ver o detalhe
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-amber px-7 py-3.5 text-[15px] font-semibold text-navy shadow-[0_12px_32px_rgba(240,180,41,0.35)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            {adminWorks.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
