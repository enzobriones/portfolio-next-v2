import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/project";
import { Approach } from "@/components/portfolio/approach";
import { Credential } from "@/components/portfolio/credential";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Projects />
        <Approach />
        <Credential />
      </main>
      <Contact />
    </>
  );
}
