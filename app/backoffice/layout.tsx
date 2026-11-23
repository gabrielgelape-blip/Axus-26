import type { Metadata } from "next";
import BackofficeAnalytics from "@/components/backoffice/BackofficeAnalytics";
import BackofficeChrome from "@/components/backoffice/BackofficeChrome";
import BackofficeFooter from "@/components/backoffice/BackofficeFooter";
import BackofficeHeader from "@/components/backoffice/BackofficeHeader";
import { backofficeMeta } from "@/lib/backoffice";

export const metadata: Metadata = {
  title: { absolute: backofficeMeta.title },
  description: backofficeMeta.description,
  openGraph: {
    title: backofficeMeta.title,
    description: backofficeMeta.description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function BackofficeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BackofficeAnalytics />
      <BackofficeChrome>
        <BackofficeHeader />
        <main>{children}</main>
        <BackofficeFooter />
      </BackofficeChrome>
    </>
  );
}
