"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { PhotoOrientation } from "@/lib/obras";

export type LightboxItem = {
  title: string;
  category?: string;
  image: string;
  orientation?: PhotoOrientation;
};

export default function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const open = index !== null;
  const item = open ? items[index] : null;
  const portrait = item?.orientation === "portrait";

  const prev = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onChange]);

  const next = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % items.length);
  }, [index, items.length, onChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, prev, next]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute inset-0 bg-navy-dark/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className={`glass-strong organic-lg relative z-10 overflow-hidden ${
              portrait ? "w-full max-w-lg" : "w-full max-w-4xl"
            }`}
          >
            <div
              className={`relative w-full bg-navy-dark ${
                portrait ? "aspect-[3/4] max-h-[78vh]" : "aspect-[16/10] max-h-[78vh]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes={portrait ? "(max-width: 512px) 100vw, 512px" : "(max-width: 896px) 100vw, 896px"}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-5 md:p-6">
              <div>
                {item.category && (
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan">
                    {item.category}
                  </p>
                )}
                <p className="mt-1 text-[16px] font-semibold text-navy">{item.title}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full bg-navy/5 px-4 py-2 text-[13px] font-semibold text-navy hover:bg-navy/10"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full bg-navy/5 px-4 py-2 text-[13px] font-semibold text-navy hover:bg-navy/10"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-navy px-4 py-2 text-[13px] font-semibold text-white"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
