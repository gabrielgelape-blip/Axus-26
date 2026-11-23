import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";
import { backofficeBrand, backofficeSocial } from "@/lib/backoffice";

export default function BackofficeFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-dark pb-28 pt-10 text-white/60 md:pb-10">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 px-6 text-center md:flex-row md:items-start md:justify-between md:text-left md:px-8">
        <div>
          <Image
            src="/axus-logo-white.png"
            alt={backofficeBrand.name}
            width={148}
            height={56}
            className="mx-auto h-8 w-auto opacity-90 md:mx-0"
          />
          <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-white/70">{backofficeBrand.tagline}</p>
        </div>

        <div className="text-[13px] leading-relaxed">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <p className="mt-1 text-white/40">
            CNPJ {company.cnpj} · {company.city} — {company.stateAbbr}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-[13px] md:items-end">
          <div className="flex gap-5">
            <a href={backofficeSocial.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan">
              Instagram
            </a>
            <a href={backofficeSocial.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan">
              LinkedIn
            </a>
          </div>
          <Link href="/" className="text-white/45 transition-colors hover:text-cyan">
            Site da Axus Engenharia
          </Link>
        </div>
      </div>
    </footer>
  );
}
