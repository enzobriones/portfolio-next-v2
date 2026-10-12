import { ArchitectureTabs } from "./architecture-tabs";
import { ClassesDiagram } from "./diagrams/clases";
import { SequenceDiagram } from "./diagrams/secuencia";
import { DeploymentDiagram } from "./diagrams/despliegue";

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          El software,
          <br />
          <span>por dentro.</span>
        </h1>
        <p className="intro">
          Me enfoco en lo que sostiene una aplicación: su backend, sus datos y
          la infraestructura que la hace funcionar.
        </p>
        <a className="project-link" href="#proyecto">
          Conoce lo que estoy construyendo <span aria-hidden="true">↘</span>
        </a>
      </div>
      <ArchitectureTabs
        classes={<ClassesDiagram />}
        sequence={<SequenceDiagram />}
        deployment={<DeploymentDiagram />}
      />
      <div className="hero-foot">
        <p>
          Backend &amp; infraestructura
          <span>También construyo interfaces.</span>
        </p>
        <p>
          Trabajo remoto<span>En una empresa de Santiago.</span>
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
