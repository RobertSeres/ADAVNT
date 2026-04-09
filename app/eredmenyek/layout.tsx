import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eredmények - Advant Case Studies",
  description: "Valós üzleti eredmények, növekedési számok és sikeres esettanulmányok az Advant Growth Partner közreműködésével.",
  alternates: {
    canonical: "https://advant.hu/eredmenyek",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
