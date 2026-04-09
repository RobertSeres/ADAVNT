import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miért az Advant? - Különbség ügynökség és partner között",
  description: "Mi nem ügynökség vagyunk, hanem growth partnerek. Ismerd meg miért választanak minket a piacvezetővé válni akaró cégek.",
  alternates: {
    canonical: "https://advant.hu/miert-mi",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
