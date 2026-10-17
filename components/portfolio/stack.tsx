import { CertificateViewer } from "./certificate-viewer";

const groups = [
  ["lenguajes:", ["TypeScript", "Node.js", "SQL"]],
  ["backend:", ["NestJS", "Fastify", "Next.js", "Zod"]],
  ["datos:", ["PostgreSQL", "Drizzle", "Row Level Security"]],
  ["cloud_infra:", ["Google Cloud", "Docker", "GitHub Actions"]],
] as const;

export function Stack() {
  return (
    <section
      className="section shell"
      id="stack"
      aria-labelledby="stack-title"
    >
      <div className="section-head grid">
        <p className="cmd">
          <b>02</b> — $ cat stack.yaml
        </p>
        <h2 id="stack-title" style={{ gridColumn: "4 / 13" }}>
          Stack
        </h2>
      </div>
      <div className="stack-grid">
        {groups.map(([name, items]) => (
          <div key={name}>
            <h3>{name}</h3>
            <ul>
              {items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="cert-row grid">
        <span className="cmd">certificacion:</span>
        <strong>Google Cloud Professional Cloud Architect</strong>
        <CertificateViewer />
      </div>
    </section>
  );
}
