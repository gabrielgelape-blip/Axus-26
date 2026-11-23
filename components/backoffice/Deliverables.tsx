"use client";

import { useEffect, useRef, useState } from "react";
import { deliverables } from "@/lib/backoffice";
import { track } from "@/lib/analytics";
import SectionHeading from "./SectionHeading";
import { deliverableVisuals } from "./DeliverableVisuals";

export default function Deliverables() {
  const [active, setActive] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);
  const [desktop, setDesktop] = useState<boolean | null>(null);
  const item = deliverables.items[active];
  const Visual = deliverableVisuals[item.id as keyof typeof deliverableVisuals];

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const apply = () => setDesktop(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (desktop === null) return;
    track("delivery_view", {
      item: deliverables.items[active].id,
      layout: desktop ? "tabs" : "carousel",
    });
  }, [active, desktop]);

  function select(index: number) {
    setActive(index);
    const node = scroller.current;
    if (!node || desktop) return;
    const slide = node.querySelector<HTMLElement>(`[data-slide="${index}"]`);
    if (!slide) return;
    const left = slide.getBoundingClientRect().left - node.getBoundingClientRect().left + node.scrollLeft;
    node.scrollTo({ left, behavior: "smooth" });
  }

  function onScroll() {
    const node = scroller.current;
    if (!node || desktop) return;
    const slides = [...node.querySelectorAll<HTMLElement>("[data-slide]")];
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    slides.forEach((slide, index) => {
      const dist = Math.abs(slide.offsetLeft - node.scrollLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });
    setActive((current) => (current === best ? current : best));
  }

  return (
    <section id="entregas" className="scroll-mt-28 overflow-hidden bg-stone py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <SectionHeading eyebrow={deliverables.eyebrow} title={deliverables.title} />

        <div className="mt-8 md:hidden">
          <div
            ref={scroller}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {deliverables.items.map((entry, index) => {
              const SlideVisual = deliverableVisuals[entry.id as keyof typeof deliverableVisuals];
              return (
                <article
                  key={entry.id}
                  data-slide={index}
                  className="w-[86%] shrink-0 snap-center"
                >
                  <div className="glass-strong organic-lg p-5">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">0{index + 1}</p>
                    <h3 className="mt-2 text-[22px] font-extrabold text-navy">{entry.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{entry.text}</p>
                    <div className="mt-5">
                      <SlideVisual />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Entregas">
            {deliverables.items.map((entry, index) => (
              <button
                key={entry.id}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={entry.title}
                onClick={() => select(index)}
                className={`h-2.5 rounded-full transition-all ${active === index ? "w-7 bg-navy" : "w-2.5 bg-navy/25"}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 hidden gap-8 md:grid md:grid-cols-[280px_1fr]">
          <div role="tablist" aria-label="Entregas" className="flex flex-col gap-2">
            {deliverables.items.map((entry, index) => {
              const on = active === index;
              return (
                <button
                  key={entry.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(index)}
                  className={`rounded-organic px-5 py-4 text-left transition-colors ${
                    on ? "bg-navy text-white shadow-glass" : "bg-white text-navy hover:bg-white/80"
                  }`}
                >
                  <span className={`block text-[11px] font-semibold uppercase tracking-[0.16em] ${on ? "text-cyan" : "text-navy/40"}`}>
                    0{index + 1}
                  </span>
                  <span className="mt-1 block text-[16px] font-bold">{entry.title}</span>
                </button>
              );
            })}
          </div>

          <div role="tabpanel" className="glass-strong organic-lg p-8">
            <h3 className="text-[28px] font-extrabold text-navy">{item.title}</h3>
            <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-ink/70">{item.text}</p>
            <div className="mt-6">
              <Visual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
