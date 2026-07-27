"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { services } from "@/lib/content";

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 220,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 220,
    damping: 20,
  });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-stone py-24 md:py-32">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 md:px-8">
        <div className="max-w-xl">
          <p className="section-label">O que fazemos</p>
          <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">
            Engenharia aplicada a cada obra
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60 md:text-[16px]">
            Do modelo por administração às reformas e construções — sempre com
            transparência e engenheiro presente.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2" style={{ perspective: 1200 }}>
          {services.map((service, i) => (
            <TiltCard key={service.title}>
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 120, damping: 18 }}
                className="glass organic-lg group relative min-h-[220px] overflow-hidden p-7 md:p-8"
              >
                <span className="font-display text-[13px] font-bold tracking-[0.2em] text-cyan">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-[22px] font-bold text-navy md:text-[24px]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[15px] text-ink/60 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
                  {service.short}
                </p>
                <p className="pointer-events-none absolute inset-x-7 bottom-7 translate-y-3 text-[14px] leading-relaxed text-ink/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 md:inset-x-8 md:bottom-8">
                  {service.description}
                </p>
              </motion.article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
