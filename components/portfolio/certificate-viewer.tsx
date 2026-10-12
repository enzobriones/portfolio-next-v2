"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { profile } from "@/lib/profile";

export function CertificateViewer() {
  return (
    <Dialog>
      <DialogTrigger className="certificate-trigger">
        Ver certificado <span aria-hidden="true">↗</span>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="certificate-title">
          Google Cloud · {profile.credential.title}
        </DialogTitle>
        <DialogDescription className="certificate-description">
          {profile.name} · Emitido el 8 de junio de 2026. Vigente hasta el 8 de
          junio de 2028.
        </DialogDescription>
        <div className="certificate-image">
          <Image
            src={profile.credential.image}
            alt={`Certificado Google Cloud Professional Cloud Architect de ${profile.name}. ID ${profile.credential.id}. Emisión: 8 de junio de 2026. Vencimiento: 8 de junio de 2028.`}
            width={2200}
            height={1700}
            sizes="(max-width: 1200px) 95vw, 1100px"
            unoptimized
          />
        </div>
        <p className="certificate-id">
          ID de credencial: {profile.credential.id}
        </p>
      </DialogContent>
    </Dialog>
  );
}
