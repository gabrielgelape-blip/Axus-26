"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { process } from "@/lib/content";

function Step({
  step,
  index,
  total,
}: {
  step: (typeof process)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.55, 1, 1, 0.55]);
  const y = useTransform(scrollYProgress, [0.1, 0.35], [28, 0]);
  const scale = useTransform(scrollYProgress, [0.15, 0.4], [0.97, 1]);

  return (
    <div ref={ref} className="relative flex items-center py-6 md:py-8">
      <motion.div
        style={reduce ? undefined : { opacity, y, scale }}
        className="glass-strong organic-lg mx-auto w-full max-w-3xl p-8 md:p-14"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-display text-[64px] font-extrabold leading-none text-cyan/90 md:text-[96px]">
            0{index + 1}
          </span>
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-cyan" : "bg-navy/15"
                }`}
              />
            ))}
          </div>
        </div>
        <h3 className="mt-6 text-[28px] font-extrabold text-navy md:text-[36px]">
          {step.title}
        </h3>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink/65 md:text-[18px]">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="processo" className="relative bg-gradient-to-b from-stone via-white to-stone">
      <div className="mx-auto max-w-container px-6 pt-24 md:px-8 md:pt-28">
        <p className="section-label">Como trabalhamos</p>
        <h2 className="mt-4 max-w-lg text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">
          Do diagnóstico às chaves
        </h2>
      </div>

      <div className="mx-auto max-w-container px-6 md:px-8">
        {process.map((step, i) => (
          <Step key={step.title} step={step} index={i} total={process.length} />
        ))}
      </div>
    </section>
  );
}
