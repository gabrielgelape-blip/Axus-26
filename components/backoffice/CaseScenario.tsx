"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { scenario } from "@/lib/backoffice";
import SectionHeading from "./SectionHeading";

function useCount(target: number, active: boolean) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const duration = 900;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduce, target]);

  return value;
}

function Stat({
  value,
  prefix,
  suffix,
  label,
  active,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const current = useCount(value, active);
  const formatted = new Intl.NumberFormat("pt-BR").format(current);
  return (
    <div className="rounded-3xl bg-white/10 px-4 py-4 ring-1 ring-white/15">
      <p className="font-display text-[28px] font-extrabold text-white md:text-[32px]">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="mt-1 text-[13px] leading-snug text-white/65">{label}</p>
    </div>
  );
}

export default function CaseScenario() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <Image
        src={scenario.image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative mx-auto max-w-container px-6 md:px-8">
        <SectionHeading eyebrow={scenario.eyebrow} title={scenario.title} light>
          {scenario.disclaimer}
        </SectionHeading>

        <div ref={ref} className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
          {scenario.steps.map((step, index) => (
            <article key={step.label} className="glass-dark organic-lg p-5 md:p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">
                0{index + 1} · {step.label}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/80">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {scenario.stats.map((stat) => (
            <Stat key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
