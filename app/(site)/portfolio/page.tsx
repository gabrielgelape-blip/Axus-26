import type { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfólio | Axus Engenharia",
  description: "Obras entregues pela Axus Engenharia em Belo Horizonte.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-stone pb-28 pt-36 md:pt-44">
      <div className="mx-auto max-w-container px-6 md:px-8">
        <p className="section-label">Portfólio</p>
        <h1 className="mt-4 max-w-xl text-[32px] font-extrabold leading-tight text-navy md:text-[44px]">
          Obras entregues em Belo Horizonte
        </h1>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/65">
          Projetos residenciais, de condomínios e institucionais — toque para ver o case.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-container px-6 md:px-8">
        <PortfolioGallery />
      </div>
    </div>
  );
}
