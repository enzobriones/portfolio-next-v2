import { profile } from "@/lib/profile";

export function Header() {
  return (
    <header className="header shell">
      <a className="identity" href="#contenido" aria-label="Volver al inicio">
        <span className="identity-mark" aria-hidden="true">
          {"{ }"}
        </span>
        <span>
          {profile.name}
          <small>Ingeniero de Software</small>
        </span>
      </a>
      <nav aria-label="Principal">
        <a href="#proyecto">Proyecto</a>
        <a href="#enfoque">Enfoque</a>
        <a href="#credencial">Credencial</a>
      </nav>
      <a className="header-contact" href="#contacto">
        Contacto <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
