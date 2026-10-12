# Diseño del portafolio

La fuente visual es [docs/diseno-v2/DESIGN.md](docs/diseno-v2/DESIGN.md). Mantener el enfoque en backend e infraestructura, el color tinta azul grisáceo, acento latón, fuentes Fira Sans/Fira Sans Condensed/JetBrains Mono locales y diagramas UML como contenido principal.

La implementación usa Next.js y Tailwind con primitivas shadcn/Base UI adaptadas, no un tema visual predeterminado. Las secciones estáticas y los SVG son componentes de servidor. No añadir biblioteca de diagramas, animación continua ni servicios de backend.

El perfil vive en `lib/profile.ts`. El certificado se presenta en un diálogo con una imagen legible y desplazamiento horizontal en móvil, título/descripción accesibles, cierre con Escape y retorno de foco. No publicar el PDF original. No prometer protección contra copias de la imagen.

Mantener navegación por teclado, foco visible, movimiento reducido y variantes móviles de los diagramas. Cualquier cambio visual debe comprobarse entre 320 y 1440 px y con zoom al 200 %.
