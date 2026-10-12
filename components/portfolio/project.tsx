export function Project() {
  return (
    <section
      className="project-section"
      id="proyecto"
      aria-labelledby="project-title"
    >
      <div className="shell project-layout">
        <div className="project-intro">
          <p className="section-label">Proyecto en desarrollo</p>
          <h2 id="project-title">
            AC
            <br />
            Maintainer<span className="period">.</span>
          </h2>
          <p>
            Clientes, direcciones y equipos de climatización. Un problema
            concreto para conectar todas las capas.
          </p>
          <ul className="stack" aria-label="Tecnologías del proyecto">
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Fastify</li>
            <li>PostgreSQL</li>
            <li>Drizzle</li>
          </ul>
        </div>
        <div className="project-story">
          <h3>
            Una instalación no
            <br />
            es solo un equipo.
          </h3>
          <p>
            También es el cliente al que pertenece, la dirección donde está y la
            información que permite administrarla. AC Maintainer reúne esas
            relaciones en una aplicación.
          </p>
          <div
            className="domain-strip"
            aria-label="Cliente, dirección y equipo instalado"
          >
            <span>Cliente</span>
            <i aria-hidden="true"></i>
            <span>Dirección</span>
            <i aria-hidden="true"></i>
            <span>Equipo</span>
          </div>
          <details className="decision">
            <summary>
              Dentro del proyecto <span aria-hidden="true">+</span>
            </summary>
            <div>
              <h4>El servidor como punto de encuentro</h4>
              <p>
                Next.js consulta Fastify desde el servidor. El navegador recibe
                la interfaz y no necesita conocer la dirección privada de la
                API.
              </p>
              <h4>Sesiones fuera del JavaScript del navegador</h4>
              <p>
                La sesión utiliza una cookie HttpOnly. Los formularios se
                procesan con Server Actions y la API valida los datos con Zod.
              </p>
              <h4>Un dominio que conserva sus relaciones</h4>
              <p>
                Clientes, direcciones y equipos se persisten en PostgreSQL
                mediante Drizzle. El registro de un equipo requiere una
                dirección del cliente y un modelo de equipo.
              </p>
            </div>
          </details>
          <p className="project-status">
            En desarrollo y despliegue en Railway.
          </p>
        </div>
      </div>
    </section>
  );
}
