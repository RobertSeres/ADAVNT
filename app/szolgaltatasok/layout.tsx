import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eszköztár & Szolgáltatások - Advant",
  description: "Részletes betekintés az Advant növekedési eszköztárába. Stratégia, Webfejlesztés, Tartalomgyártás és Performance Marketing.",
  alternates: {
    canonical: "https://advant.hu/szolgaltatasok",
  },
  openGraph: {
    title: "Advant Eszköztár - Hogyan építjük a növekedést?",
    description: "Minden technológiai és stratégiai eszköz, amivel skálázhatóvá tesszük az üzletedet.",
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
