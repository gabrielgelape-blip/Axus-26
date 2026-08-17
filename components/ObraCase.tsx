"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  coverOf,
  galleryPhotos,
  processPhotos,
  type Obra,
} from "@/lib/obras";
import { contact } from "@/lib/content";
import Lightbox from "./Lightbox";
import VideoPlayer from "./VideoPlayer";

export default function ObraCase({ obra }: { obra: Obra }) {
  const [active, setActive] = useState<number | null>(null);
  const cover = coverOf(obra);
  const gallery = galleryPhotos(obra);
  const processShots = processPhotos(obra);
  const shots = [cover, ...gallery];
  const lightboxItems = shots.map((photo) => ({
    title: photo.alt,
    category: obra.category,
    image: photo.src,
    orientation: photo.orientation,
  }));

  return (
    <div className="bg-stone pb-28 pt-36 md:pt-44">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <Link
          href="/portfolio"
          className="text-[13px] font-semibold text-navy/55 transition-colors hover:text-cyan"
        >
          ← Todas as obras
        </Link>
        <p className="section-label mt-8">{obra.category}</p>
        <h1 className="mt-4 max-w-2xl text-[32px] font-extrabold leading-tight text-navy md:text-[44px]">
          {obra.title}
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/65">
          {obra.summary}
        </p>
        <p className="mt-3 text-[12px] font-semibold uppercase tracking-wider text-cyan">
          {obra.service}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-container px-6 md:px-8">
        <button
          type="button"
          onClick={() => setActive(0)}
          className={`relative overflow-hidden rounded-organic-lg ${
            cover.orientation === "portrait"
              ? "aspect-[3/4] max-h-[70vh] w-full md:max-w-lg"
              : "aspect-[16/10] w-full"
          }`}
        >
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority
            sizes="(max-width: 1180px) 100vw, 1180px"
            className="object-cover"
          />
        </button>

        <div className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-3 md:gap-4">
          {gallery.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setActive(i + 1)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-organic-lg text-left ${
                photo.orientation === "portrait" ? "row-span-2 min-h-[280px]" : "min-h-[140px]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>

        {processShots.length > 0 && (
          <div className="mt-16">
            <p className="section-label">Na obra</p>
            <h2 className="mt-4 text-[24px] font-extrabold text-navy md:text-[30px]">
              Registro da execução
            </h2>
            <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-ink/60">
              Etapas técnicas — não são o ambiente final.
            </p>
            <div className="mt-8 flex gap-4 overflow-x-auto pb-2 scrollbar-none">
              {processShots.map((photo) => (
                <figure
                  key={photo.src}
                  className="relative h-[280px] w-[200px] shrink-0 overflow-hidden rounded-organic-lg md:h-[340px] md:w-[240px]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        )}

        {obra.videos?.map((video) => (
          <div key={video.src} className="mx-auto mt-16 max-w-xl">
            <p className="section-label">Vídeo</p>
            <h2 className="mt-4 text-[24px] font-extrabold text-navy md:text-[30px]">
              {video.title}
            </h2>
            <div className="mt-8">
              <VideoPlayer
                src={video.src}
                poster={video.poster}
                title={video.title}
                aspectClass={
                  video.orientation === "portrait" ? "aspect-[3/4]" : "aspect-video"
                }
              />
            </div>
          </div>
        ))}

        <div className="mt-16 flex justify-center">
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <Lightbox
        items={lightboxItems}
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />
    </div>
  );
}
