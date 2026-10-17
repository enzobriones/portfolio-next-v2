import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/portfolio/header";
import { Contact } from "@/components/portfolio/contact";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export const generateStaticParams = () => projects.map((p) => ({ id: p.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).id);
  return project
    ? { title: `${project.name} — Enzo Briones`, description: project.intro }
    : {};
}

export default async function CaseStudy({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <div id="top">
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Header active="proyectos" />
      <div className="crumb shell">
        <span>~/proyectos/{project.id} $ cat README.md</span>
        <Link href="/#proyectos">← todos los proyectos</Link>
      </div>
      <main id="contenido">
        <section className="case-hero shell grid">
          <div>
            <span className="prompt">
              caso de estudio · {String(index + 1).padStart(2, "0")}
            </span>
            <h1>{project.name}</h1>
          </div>
          <p>{project.intro}</p>
        </section>
        <dl className="facts">
          <div>
            <dt>rol</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>stack</dt>
            <dd>{project.stack.join(" · ")}</dd>
          </div>
          <div>
            <dt>estado</dt>
            <dd>
              <i aria-hidden="true" />
              {project.status}
            </dd>
          </div>
        </dl>
        <div className="case-body shell grid">
          <nav className="toc" aria-label="En esta página">
            <a href="#contexto">01 contexto</a>
            <a href="#arquitectura">02 arquitectura</a>
            <a href="#decisiones">03 decisiones</a>
          </nav>
          <div className="case-main">
            <section className="case-context" id="contexto">
              <h2>Contexto</h2>
              <div>
                {project.context.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </section>
            <section id="arquitectura">
              <h2>Arquitectura</h2>
              <figure className="figure">
                <ol className="flow">
                  {project.architecture.flatMap((node, i) => [
                    i > 0 && <i key={`a${i}`} aria-hidden="true" />,
                    <li key={node.name} className={node.external ? "ext" : ""}>
                      <small>{node.label}</small>
                      {node.name}
                    </li>,
                  ])}
                </ol>
                <figcaption>{project.figure}</figcaption>
              </figure>
            </section>
            <section id="decisiones">
              <h2 style={{ marginBottom: 24 }}>Decisiones</h2>
              {project.decisions.map((d, i) => (
                <div className="decision" key={d.title}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
        <a className="next shell grid" href={`/proyectos/${next.id}`}>
          <span>siguiente → proyectos/{next.id}</span>
          <span>{next.name}</span>
          <span aria-hidden="true">→</span>
        </a>
      </main>
      <Contact />
    </div>
  );
}
