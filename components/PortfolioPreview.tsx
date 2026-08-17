"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { coverOf, portfolioPreview } from "@/lib/obras";

function cardClass(orientation: "portrait" | "landscape", index: number) {
  const featured = index === 0 || index === 3;
  if (orientation === "portrait" || featured) {
    return "row-span-2 min-h-[360px] md:min-h-[420px]";
  }
  return "min-h-[180px] md:min-h-[200px]";
}

export default function PortfolioPreview() {
  return (
    <section className="bg-stone py-24 md:py-32">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-md">
            <p className="section-label">Portfólio</p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">
              Obras que falam por nós
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="rounded-full border border-navy/15 bg-white/60 px-5 py-2.5 text-[14px] font-semibold text-navy backdrop-blur transition-colors hover:border-cyan hover:text-cyan"
          >
            Ver todas
          </Link>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {portfolioPreview.map((obra, i) => {
            const cover = coverOf(obra);
            return (
              <motion.div
                key={obra.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 140, damping: 18 }}
                whileHover={{ scale: 1.015 }}
                className={`group relative col-span-1 overflow-hidden rounded-organic-lg ${cardClass(cover.orientation, i)}`}
              >
                <Link href={`/portfolio/${obra.slug}`} className="absolute inset-0 block">
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 md:p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan">
                      {obra.category}
                    </span>
                    <p className="mt-1 text-[14px] font-semibold text-white md:text-[15px]">
                      {obra.title}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
