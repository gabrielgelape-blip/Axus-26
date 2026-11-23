import type { Metadata } from "next";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axus Engenharia | Construção e reforma em BH",
  description:
    "+100 obras entregues em Belo Horizonte. Construção e reforma para residências e condomínios, do projeto à entrega.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
