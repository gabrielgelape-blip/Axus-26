"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { backofficeBrand, backofficeNav } from "@/lib/backoffice";
import { track } from "@/lib/analytics";

export default function BackofficeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onLight = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goAudit() {
    setOpen(false);
    track("cta_click", { place: "header" });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b duration-300 transition-[background-color,border-color,box-shadow,backdrop-filter] ${
        onLight
          ? "header-surface border-white/40"
          : "border-transparent bg-transparent shadow-none backdrop-blur-0"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/backoffice" className="flex min-w-0 items-center gap-3" aria-label={backofficeBrand.name}>
          <Image
            src={onLight ? "/axus-logo-color.png" : "/axus-logo-white.png"}
            alt={backofficeBrand.name}
            width={148}
            height={56}
            priority
            className="h-9 w-auto shrink-0 md:h-10"
          />
          <span
            className={`hidden max-w-[200px] text-[12px] font-medium leading-snug xl:block ${
              onLight ? "text-navy/60" : "text-white/75"
            }`}
          >
            {backofficeBrand.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {backofficeNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium tracking-wide transition-colors ${
                onLight ? "text-navy/80 hover:text-cyan" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#auditoria"
            onClick={goAudit}
            className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition-transform hover:scale-[1.03] ${
              onLight ? "bg-navy text-white" : "bg-cyan text-navy"
            }`}
          >
            Auditoria gratuita
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
            onLight ? "border-navy/15" : "border-white/30"
          }`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full rounded transition-transform ${
                onLight ? "bg-navy" : "bg-white"
              } ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[2px] w-full rounded transition-opacity ${
                onLight ? "bg-navy" : "bg-white"
              } ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[2px] w-full rounded transition-transform ${
                onLight ? "bg-navy" : "bg-white"
              } ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="glass-strong border-t border-white/40 px-5 py-5 lg:hidden">
          <ul className="flex flex-col gap-1">
            {backofficeNav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-2 py-3 text-[16px] font-medium text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#auditoria"
                onClick={goAudit}
                className="block rounded-full bg-navy px-5 py-3.5 text-center text-[15px] font-semibold text-white"
              >
                Auditoria gratuita
              </a>
            </li>
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="mt-2 block px-2 py-3 text-center text-[13px] font-medium text-navy/55"
              >
                Site da Axus Engenharia
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
