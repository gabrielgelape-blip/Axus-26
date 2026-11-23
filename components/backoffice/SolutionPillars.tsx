"use client";

import { useEffect, useRef, useState } from "react";
import { solution } from "@/lib/backoffice";
import SectionHeading from "./SectionHeading";

export default function SolutionPillars() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const nodes = refs.current.filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) setActive(index);
      },
      { rootMargin: "-35% 0px -40% 0px", threshold: [0.35, 0.6, 0.9] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const current = solution.pillars[active];

  return (
    <section id="solucao" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <SectionHeading eyebrow={solution.eyebrow} title={solution.title}>
          {solution.description}
        </SectionHeading>

        <div className="mt-12 grid items-start gap-8 md:mt-16 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <div className="space-y-4">
            {solution.pillars.map((pillar, index) => {
              const on = active === index;
              return (
                <article
                  key={pillar.id}
                  data-index={index}
                  ref={(node) => {
                    refs.current[index] = node;
                  }}
                  className={`organic border px-5 py-6 transition-colors md:px-7 md:py-8 ${
                    on ? "border-cyan bg-stone shadow-glass" : "border-line bg-stone/50"
                  }`}
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-[22px] font-extrabold leading-tight text-navy md:text-[26px]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{pillar.text}</p>
                </article>
              );
            })}
          </div>

          <div className="md:sticky md:top-28">
            <div className="organic-lg bg-navy px-6 py-7 text-white shadow-glass-lg md:px-8 md:py-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan">Quem faz o quê</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl border border-white/15 bg-white/5 px-4 py-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">Você</p>
                  <p className="mt-1 text-[16px] font-semibold">Canteiro, cliente e decisão</p>
                </div>
                <div className="flex justify-center" aria-hidden>
                  <span className="h-8 w-px bg-cyan/70" />
                </div>
                <div className="rounded-3xl border border-cyan/50 bg-cyan/10 px-4 py-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">Axus no backoffice</p>
                  <p className="mt-1 text-[18px] font-extrabold leading-snug">{current.title}</p>
                  <ul className="mt-4 space-y-2">
                    {solution.pillars.map((pillar, index) => (
                      <li key={pillar.id} className="flex items-center gap-2 text-[13px]">
                        <span className={`h-2 w-2 rounded-full ${active === index ? "bg-cyan" : "bg-white/25"}`} />
                        <span className={active === index ? "text-white" : "text-white/45"}>{pillar.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
