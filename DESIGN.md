# Diseño del portafolio

Dirección visual "modernist": fondo claro `#f3f2f2`, tinta `#201e1d`, un único acento rojo `#ec3013`, grilla de 12 columnas, reglas de 2 px, sin radios ni sombras, y estética de terminal (`$ ls ./proyectos`). Fuentes Archivo e IBM Plex Mono vía `next/font/google`.

Páginas: Home (`/`), un caso de estudio por proyecto (`/proyectos/[id]`) y Sobre mí en formato man page (`/sobre-mi`). Los proyectos viven en `lib/projects.ts` y el perfil en `lib/profile.ts`.

No incluir contenido inventado (métricas, repos, experiencia, retrato ni CV) hasta tener datos reales. Los diagramas son HTML/CSS; no añadir biblioteca de diagramas ni animación continua.

El certificado se presenta en un diálogo con imagen legible, desplazamiento horizontal en móvil, cierre con Escape y retorno de foco. No publicar el PDF original.

Mantener navegación por teclado, foco visible y movimiento reducido. Todo cambio visual debe comprobarse entre 320 y 1440 px y con zoom al 200 %.

`docs/diseno-v2` es el diseño anterior, solo histórico.
