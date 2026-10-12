import { ArchitectureTabs } from "./architecture-tabs";
import { AboutDiagram } from "./diagrams/sobre-mi";
import { WorkflowDiagram } from "./diagrams/como-trabajo";
import { ToolsDiagram } from "./diagrams/herramientas";

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Hola,
          <br />
          soy <span>Enzo.</span>
        </h1>
        <p className="intro">
          Me gusta construir cosas que la gente de verdad usa, desde donde se
          guardan los datos hasta la pantalla que tienes enfrente.
        </p>
        <a className="project-link" href="#proyectos">
          Mira lo que estoy armando <span aria-hidden="true">↘</span>
        </a>
      </div>
      <ArchitectureTabs
        label="Tres formas de conocerme"
        footer="Enzo Briones"
        tabs={[
          { value: "yo", label: "Quién soy", content: <AboutDiagram /> },
          {
            value: "trabajo",
            label: "Cómo trabajo",
            content: <WorkflowDiagram />,
          },
          { value: "con-que", label: "Con qué", content: <ToolsDiagram /> },
        ]}
      />
      <div className="hero-foot">
        <p>
          Backend &amp; infraestructura
          <span>Y también las pantallas.</span>
        </p>
        <a href="#credencial">
          Google Cloud Certified
          <span>
            Professional Cloud Architect <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>
    </section>
  );
}
