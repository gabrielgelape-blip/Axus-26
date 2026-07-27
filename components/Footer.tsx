import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-dark py-10 text-white/55">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left md:px-8">
        <Image
          src="/axus-logo-white.png"
          alt={company.tradeName}
          width={132}
          height={50}
          className="h-8 w-auto opacity-90"
        />

        <div className="text-[13px] leading-relaxed">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <p className="mt-1 text-white/40">
            CNPJ {company.cnpj} · {company.city}, {company.stateAbbr}
          </p>
        </div>

        <div className="flex gap-5 text-[13px]">
          <a
            href="https://www.instagram.com/axusengenharia"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan"
          >
            LinkedIn
          </a>
          <Link href="/#contato" className="transition-colors hover:text-cyan">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
