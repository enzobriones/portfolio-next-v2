import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/portfolio/header";
import { CertificateViewer } from "@/components/portfolio/certificate-viewer";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Sobre mí — Enzo Briones",
  description:
    "Ingeniero de software enfocado en backend e infraestructura. Sistemas multi-tenant en Google Cloud.",
};

const options = [
  [
    "--proyecto",
    "Desarrollo de un sistema de principio a fin: diseño, código, despliegue y operación.",
  ],
  [
    "--consultoria",
    "Revisión de arquitectura, costos y seguridad en Google Cloud.",
  ],
  ["--equipo", "Me sumo a tu equipo por horas o por mes."],
];

export default function About() {
  return (
    <div id="top">
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Header active="sobre-mi" />
      <div className="man-bar shell">
        <span>ENZO(1)</span>
        <span>Manual del ingeniero</span>
        <span>ENZO(1)</span>
      </div>
      <main id="contenido" className="about shell grid">
        <aside>
          <a className="btn btn-accent" href={`mailto:${profile.email}`}>
            Escríbeme <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn-outline" href={profile.github}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </aside>
        <div className="man">
          <div className="man-row">
            <h2>NOMBRE</h2>
            <div>
              <h1>{profile.name}</h1>
              <p className="lead">
                ingeniero de software — backend e infraestructura
              </p>
            </div>
          </div>
          <div className="man-row">
            <h2>SINOPSIS</h2>
            <code>
              <b>enzo</b> [<em>--backend</em>] [<em>--infra</em>] [
              <em>--cloud</em> gcp] &lt;proyecto&gt;
            </code>
          </div>
          <div className="man-row">
            <h2>DESCRIPCIÓN</h2>
            <div className="prose">
              <p>
                Diseño y opero sistemas backend y la infraestructura donde
                corren. Hoy construyo {projects.map((p) => p.name).join(" y ")}
                , dos plataformas multi-tenant donde cada empresa opera sobre
                sus propios datos.
              </p>
              <p>
                Me interesa que un sistema se pueda operar sin sorpresas:
                aislamiento de datos en la base, validación en la frontera y
                reglas de negocio en un solo lugar.
              </p>
            </div>
          </div>
          <div className="man-row">
            <h2>CERTIFICACIONES</h2>
            <div>
              <span className="cert-name">
                Google Cloud Professional Cloud Architect
              </span>
              <small>
                Google Cloud · junio de 2026 · credencial{" "}
                {profile.credential.id}
              </small>
              <CertificateViewer />
            </div>
          </div>
          <div className="man-row">
            <h2>OPCIONES</h2>
            <dl className="opts">
              {options.map(([flag, text]) => (
                <div key={flag}>
                  <dt>{flag}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="man-row">
            <h2>VÉASE TAMBIÉN</h2>
            <span className="see-also">
              <Link href="/#proyectos">proyectos({projects.length})</Link>
              <a href={profile.github}>github(1)</a>
            </span>
          </div>
        </div>
      </main>
      <div className="man-bar foot shell">
        <span>Chile · remoto</span>
        <span>2026</span>
        <span>ENZO(1)</span>
      </div>
    </div>
  );
}
