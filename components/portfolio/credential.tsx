import { profile } from "@/lib/profile";
import { CertificateViewer } from "./certificate-viewer";

export function Credential() {
  return (
    <section
      className="credential shell"
      id="credencial"
      aria-labelledby="credential-title"
    >
      <div className="credential-emblem" aria-hidden="true">
        <span>PCA</span>
        <small>GOOGLE CLOUD</small>
      </div>
      <div className="credential-copy">
        <p>Certificación · junio de 2026</p>
        <h2 id="credential-title">
          Professional
          <br />
          Cloud Architect
        </h2>
        <span>
          Google Cloud · Vigente hasta{" "}
          <time dateTime={profile.credential.expires}>junio de 2028</time>
        </span>
        <p className="credential-id">
          ID: <span>{profile.credential.id}</span>
        </p>
      </div>
      <div className="credential-note">
        <p>
          Me ayuda a ver
          <br />
          el panorama completo,
          <br />
          más allá de una sola aplicación.
        </p>
        <CertificateViewer />
      </div>
    </section>
  );
}
