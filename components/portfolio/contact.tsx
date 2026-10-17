import { profile } from "@/lib/profile";

export function Contact() {
  return (
    <>
      <section className="contact shell" id="contacto">
        <div className="grid">
          <div>
            <p className="cmd">03 — $ contacto --nuevo-proyecto</p>
            <h2>
              ¿Construimos algo que no se caiga?
            </h2>
          </div>
          <div className="contact-side">
            <address>
              <span>email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>tel</span>
              <a href={`tel:${profile.phone}`}>{profile.phoneLabel}</a>
              <span>github</span>
              <a href={profile.github}>/enzobriones</a>
            </address>
            <a className="btn" href={`mailto:${profile.email}`}>
              Escríbeme <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="footer shell">
        <span>© 2026 {profile.name}</span>
        <a href="#top">
          ↑ volver arriba
        </a>
      </footer>
    </>
  );
}
