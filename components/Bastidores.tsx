"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { bastidores } from "@/lib/content";

export default function Bastidores() {
  const scroller = useRef<HTMLDivElement>(null);

  function scrollBy(dir: number) {
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan/15 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-md">
            <p className="section-label">Bastidores</p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight md:text-[42px]">
              A obra por dentro
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Instantâneos do dia a dia — planejamento, execução e acabamento.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="rounded-full glass-dark px-4 py-2 text-[14px] font-semibold text-white"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="rounded-full glass-dark px-4 py-2 text-[14px] font-semibold text-white"
              aria-label="Próximo"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-12 flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {bastidores.map((shot, i) => (
            <motion.figure
              key={shot.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-dark organic-lg relative h-[280px] w-[260px] shrink-0 snap-start overflow-hidden md:h-[340px] md:w-[300px]"
            >
              <Image
                src={shot.image}
                alt={shot.title}
                fill
                sizes="300px"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-5 text-[14px] font-semibold">
                {shot.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
