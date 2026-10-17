import Link from "next/link";
import { profile } from "@/lib/profile";

const links = [
  { href: "/#proyectos", label: "./proyectos", key: "proyectos" },
  { href: "/#stack", label: "./stack", key: "stack" },
  { href: "/sobre-mi", label: "./sobre-mi", key: "sobre-mi" },
];

export function Header({ active }: { active?: string }) {
  return (
    <header className="header shell">
      <Link className="brand" href="/" aria-label="Inicio">
        <span aria-hidden="true">~/</span>
        {profile.name}
      </Link>
      <nav aria-label="Principal">
        {links.map((l) => (
          <a
            key={l.key}
            href={l.href}
            aria-current={active === l.key ? "page" : undefined}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <span className="available">
          <i aria-hidden="true" />
          disponible
        </span>
        <a className="btn" href={`mailto:${profile.email}`}>
          Escríbeme <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
