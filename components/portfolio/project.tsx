import type { ReactNode } from "react";
import { projects } from "@/lib/projects";
import { ArchitectureTabs } from "./architecture-tabs";
import { ClassesDiagram } from "./diagrams/clases";
import { SequenceDiagram } from "./diagrams/secuencia";
import { DeploymentDiagram } from "./diagrams/despliegue";

// Proyectos sin entrada aquí se muestran sin diagramas.
const diagrams: Record<string, ReactNode> = {
  "ac-maintainer": (
    <ArchitectureTabs
      label="Tres miradas a AC Maintainer"
      footer="AC Maintainer · vista simplificada"
      tabs={[
        { value: "datos", label: "Los datos", content: <ClassesDiagram /> },
        {
          value: "recorrido",
          label: "El recorrido",
          content: <SequenceDiagram />,
        },
        { value: "casa", label: "Dónde vive", content: <DeploymentDiagram /> },
      ]}
    />
  ),
};

export function Projects() {
  return (
    <section
      className="project-section"
      id="proyectos"
      aria-labelledby="projects-title"
    >
      <div className="shell">
        <p className="section-label">Proyectos</p>
        <h2 id="projects-title" className="projects-title">
          Lo que estoy armando<span className="period">.</span>
        </h2>
        <p className="projects-lead">
          Cosas que armo para resolver problemas del día a día, de principio a
          fin.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <header>
                <h3>{project.name}</h3>
                <span>{project.status}</span>
              </header>
              <div className="project-card-body">
                <p>{project.summary}</p>
                <ul
                  className="stack"
                  aria-label={`Tecnologías de ${project.name}`}
                >
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <details className="decision">
                  <summary>
                    Ver por dentro <span aria-hidden="true">+</span>
                  </summary>
                  <div>
                    {project.details?.map((detail) => (
                      <section key={detail.title}>
                        <h4>{detail.title}</h4>
                        <p>{detail.text}</p>
                      </section>
                    ))}
                    {diagrams[project.id]}
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
