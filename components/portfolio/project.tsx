import { projects } from "@/lib/projects";
import { profile } from "@/lib/profile";

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function Projects() {
  return (
    <section
      className="section shell"
      id="proyectos"
      aria-labelledby="projects-title"
    >
      <div className="section-head grid">
        <p className="cmd">
          <b>01</b> — $ ls ./proyectos
        </p>
        <h2 id="projects-title">Proyectos</h2>
        <p>
          Sistemas multi-tenant que diseño y construyo de principio a fin, del
          modelo de datos al despliegue.
        </p>
      </div>
      <div className="cards">
        {projects.map((p, i) => (
          <a className="card" key={p.id} href={`/proyectos/${p.id}`}>
            <div className="card-top">
              <span>proyectos/{p.id}</span>
              <span>{pad(i)}</span>
            </div>
            <h3>{p.name}</h3>
            <span className="tagline">
              {p.tagline} · {p.status}
            </span>
            <p className="summary">{p.summary}</p>
            <div className="card-foot">
              <ul className="tags" aria-label={`Tecnologías de ${p.name}`}>
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <span className="card-link">
                caso de estudio <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        ))}
        <div className="card card-cta">
          <div className="card-top">$ ./nuevo-proyecto.sh</div>
          <h3>¿Tienes un sistema que construir o escalar?</h3>
          <a className="btn btn-light" href={`mailto:${profile.email}`}>
            Conversemos <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
