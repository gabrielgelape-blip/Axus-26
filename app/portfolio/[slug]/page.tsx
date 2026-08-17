import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ObraCase from "@/components/ObraCase";
import { getObra, obras } from "@/lib/obras";

type Params = { slug: string };

export function generateStaticParams() {
  return obras.map((obra) => ({ slug: obra.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const obra = getObra(params.slug);
  if (!obra) return { title: "Obra | Axus Engenharia" };
  return {
    title: `${obra.title} | Axus Engenharia`,
    description: obra.summary,
  };
}

export default function ObraPage({ params }: { params: Params }) {
  const obra = getObra(params.slug);
  if (!obra) notFound();
  return <ObraCase obra={obra} />;
}
