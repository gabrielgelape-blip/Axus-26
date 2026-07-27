"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-container px-6 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="section-label">{about.title}</p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-navy md:text-[42px]">
              Fundadores desde 2019
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink/65 md:text-[18px]">
              {about.narrative}
            </p>
          </div>

          <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
            {about.photos.map((photo, i) => (
              <motion.figure
                key={photo.caption}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 140, damping: 18 }}
                className={`glass organic-lg relative overflow-hidden ${
                  i === 0 ? "mt-8 aspect-[3/4]" : "-mt-2 aspect-[3/4]"
                }`}
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4">
                  <p className="text-[14px] font-semibold text-white">{photo.caption}</p>
                  <p className="text-[11px] text-cyan">{photo.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
