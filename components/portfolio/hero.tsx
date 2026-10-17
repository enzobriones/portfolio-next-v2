import { profile } from "@/lib/profile";

const rows = [
  ["nombre:", profile.name],
  ["rol:", "Ingeniero de Software"],
  ["foco:", "[backend, infraestructura]"],
  ["cert:", "GCP Professional Cloud Architect"],
  ["modalidad:", "freelance · remoto"],
] as const;

export function Hero() {
  return (
    <section className="hero shell grid" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="prompt">enzo@prod:~$ whoami</p>
        <h1 id="hero-title">
          Backend e infraestructura que aguanta <span>producción.</span>
        </h1>
        <p>
          Ingeniero de software. Diseño, construyo y opero sistemas
          multi-tenant, APIs e integraciones, y la nube donde corren.
        </p>
        <div className="cta-row">
          <a className="btn btn-accent" href={`mailto:${profile.email}`}>
            Escríbeme <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn-outline" href="#proyectos">
            Ver proyectos <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="profile">
        <header>
          <span>$ cat perfil.yaml</span>
          <span>6 líneas</span>
        </header>
        <dl>
          {rows.map(([k, v]) => (
            <div key={k} style={{ display: "contents" }}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
          <dt>estado:</dt>
          <dd>
            <b>aceptando proyectos</b>
            <i aria-hidden="true" />
          </dd>
        </dl>
      </div>
    </section>
  );
}
