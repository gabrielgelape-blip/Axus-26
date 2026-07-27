"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { contact } from "@/lib/content";

const links = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Administração", href: "/#administracao" },
  { label: "Processo", href: "/#processo" },
  { label: "Obras", href: "/portfolio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLight = !isHome || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        onLight ? "glass-strong border-b border-white/40" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-3.5 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Axus Engenharia">
          <Image
            src={onLight ? "/axus-logo-color.png" : "/axus-logo-white.png"}
            alt="Axus Engenharia"
            width={148}
            height={56}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[14px] font-medium tracking-wide transition-colors ${
                onLight ? "text-navy/80 hover:text-cyan" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition-transform hover:scale-[1.03] ${
              onLight ? "bg-navy text-white" : "bg-cyan text-navy"
            }`}
          >
            Fale conosco
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
            onLight ? "border-navy/15" : "border-white/30"
          }`}
          aria-label="Abrir menu"
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

      {open && (
        <nav className="glass-strong border-t border-white/40 px-5 py-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-[15px] font-medium text-navy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block rounded-full bg-navy px-5 py-2.5 text-center text-[14px] font-semibold text-white"
              >
                Fale conosco
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
