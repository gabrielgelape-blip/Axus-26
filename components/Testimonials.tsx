"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  function cycle() {
    setActive((v) => (v + 1) % testimonials.length);
  }

  return (
    <section className="bg-stone py-24 md:py-32">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <p className="section-label">Depoimentos</p>
        <h2 className="mt-4 max-w-md text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">
          Quem já construiu com a gente
        </h2>

        <div className="relative mx-auto mt-16 h-[320px] max-w-xl md:h-[300px]">
          <AnimatePresence mode="popLayout">
            {testimonials.map((t, i) => {
              const offset = (i - active + testimonials.length) % testimonials.length;
              if (offset > 2) return null;
              return (
                <motion.button
                  key={t.name + t.role}
                  type="button"
                  onClick={cycle}
                  className="glass-strong organic-lg absolute inset-x-0 top-0 w-full cursor-pointer p-8 text-left md:p-10"
                  style={{ zIndex: 10 - offset }}
                  initial={false}
                  animate={{
                    y: offset * 18,
                    scale: 1 - offset * 0.04,
                    opacity: 1 - offset * 0.18,
                    rotate: reduce ? 0 : offset * -1.5,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                >
                  <p className="text-[18px] font-medium leading-relaxed text-navy md:text-[20px]">
                    “{t.quote}”
                  </p>
                  <footer className="mt-6 text-[13px] text-ink/55">
                    <span className="font-semibold text-navy/80">{t.name}</span>
                    <span className="mx-2 text-line">·</span>
                    {t.role}
                  </footer>
                  {offset === 0 && (
                    <span className="mt-6 block text-[12px] font-semibold uppercase tracking-wider text-cyan">
                      Toque para o próximo
                    </span>
                  )}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
