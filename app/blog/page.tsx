import type { Metadata } from "next";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Axus Engenharia",
  description: "Conteúdo sobre reforma e construção da Axus Engenharia.",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-stone px-6 pb-24 pt-36 text-center md:pt-44">
      <div className="glass-strong organic-lg max-w-lg px-8 py-12">
        <p className="section-label">Blog</p>
        <h1 className="mt-4 text-[28px] font-extrabold leading-tight text-navy md:text-[36px]">
          Conteúdo em breve
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
          Artigos sobre reforma, síndicos e bastidores das obras Axus.
        </p>
        <a
          href={`https://wa.me/${contact.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
