import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jelentkezés - Advant Partner Program",
  description: "Vedd fel velünk a kapcsolatot és tudd meg, hogyan skálázható az üzleted. Growth Partner audit és kezdés.",
  alternates: {
    canonical: "https://advant.hu/apply",
  },
  openGraph: {
    title: "Jelentkezés - Legyél az Advant Growth Partnere",
    description: "Kezdjük el a közös munkát. Audit, stratégia, növekedés.",
  }
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
