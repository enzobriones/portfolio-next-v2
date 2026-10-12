import { profile } from "@/lib/profile";

export function Contact() {
  return (
    <footer className="footer shell" id="contacto">
      <div>
        <h2>Sigamos la conversación.</h2>
        <address className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone}`}>{profile.phoneLabel}</a>
          <a href={profile.github}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </address>
      </div>
      <a href="#contenido">
        Volver arriba <span aria-hidden="true">↑</span>
      </a>
      <div className="footer-signature">
        {profile.name} · Ingeniero de Software
      </div>
    </footer>
  );
}
