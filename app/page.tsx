import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/project";
import { Stack } from "@/components/portfolio/stack";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <div id="top">
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Projects />
        <Stack />
      </main>
      <Contact />
    </div>
  );
}
