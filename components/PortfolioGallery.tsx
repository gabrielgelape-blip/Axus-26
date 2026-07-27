"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioAll } from "@/lib/content";
import Lightbox from "./Lightbox";

const filters = ["Todos", "Residencial", "Condomínio"] as const;

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const [active, setActive] = useState<number | null>(null);

  const items =
    filter === "Todos"
      ? portfolioAll
      : portfolioAll.filter((item) => item.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setFilter(f);
              setActive(null);
            }}
            className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${
              filter === f
                ? "bg-navy text-white shadow-glass"
                : "glass text-navy/70 hover:text-navy"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-3 md:gap-4">
        {items.map((item, i) => (
          <motion.button
            key={item.title + i}
            type="button"
            onClick={() => setActive(i)}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`group relative overflow-hidden rounded-organic-lg text-left ${
              i % 5 === 0 ? "col-span-2 row-span-2 min-h-[320px]" : "min-h-[160px]"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan">
                {item.category}
              </span>
              <p className="mt-1 text-[14px] font-semibold text-white">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        items={items}
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />
    </div>
  );
}
