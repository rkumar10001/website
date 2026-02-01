import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Divisions } from "@/components/divisions";
import { Team } from "@/components/team";
import { GlobalPresence } from "@/components/global-presence";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Divisions />
      <Team />
      <GlobalPresence />
      <Footer />
    </main>
  );
}
