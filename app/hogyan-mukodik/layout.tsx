import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hogyan működik - Advant Growth Partner folyamat",
  description: "Ismerd meg az Advant munkafolyamatát. Audit, rendszerépítés és folyamatos optimalizálás a skálázható növekedésért.",
  alternates: {
    canonical: "https://advant.hu/hogyan-mukodik",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
