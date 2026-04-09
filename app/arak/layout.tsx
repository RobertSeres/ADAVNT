import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Árak - Advant Growth Partner Befektetés",
  description: "Átlátható havi előfizetéses árazás a növekedéspartneri szintlépéshez. Nincsenek rejtett költségek, csak fókuszált végrehajtás.",
  alternates: {
    canonical: "https://advant.hu/arak",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
