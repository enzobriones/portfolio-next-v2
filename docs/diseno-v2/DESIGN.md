# Dirección visual — El software, por dentro

Estado: versión 2 para revisión. Fecha de referencia: 11 de octubre de 2026, America/Santiago.

## Intención

Portafolio de un Ingeniero de Software para personas que evalúan su trabajo técnico. La primera impresión debe relacionar la persona con backend e infraestructura; el visitante puede explorar un proyecto y entender decisiones concretas.

El lenguaje toma elementos de una mesa de arquitectura: notación legible, relaciones entre objetos y espacio para pensar. La composición artística viene del tamaño, el ritmo y el recorrido de las conexiones. La semántica UML se mantiene comprensible.

La versión anterior usaba verde menta, contenedores repetidos y un diagrama secundario. Esta versión usa tinta azul grisácea, un solo acento latón, titulares ligeros y diagramas como contenido principal. No se agregan neón, terminal ficticia, estadísticas, numeración decorativa ni animación continua.

Guías aplicadas: Taste, Frontend Design y las reglas de accesibilidad y estabilidad de Frontend Design Premium. Se consultó Impeccable como referencia de crítica visual; no se afirma haber ejecutado su proceso completo de revisión automatizada.

## Tokens

La fuente de verdad ejecutable de esta propuesta es `styles.css`, bloque `:root`.

| Variable | Valor | Uso |
|---|---|---|
| `--ink` | `#171d27` | Fondo principal |
| `--surface` | `#1d2531` | Fondo del caso de estudio y nodos destacados |
| `--paper` | `#eeece6` | Texto principal |
| `--muted` | `#b0b8c5` | Descripciones y metadatos |
| `--accent` | `#d4b77e` | Énfasis, relaciones UML y selección |
| `--line` | `#4f5d70` | Bordes y separadores |
| `--quiet` | `#354253` | Líneas de construcción no informativas |

Las líneas de construcción son decorativas. La información del diagrama también está en sus títulos, descripciones accesibles y pies de figura; no depender únicamente de una conexión sutil o de su color.

## Tipografía

- Titulares: Fira Sans Condensed Light, alias `Studio`, peso 300. La forma estrecha y ligera diferencia el diseño del habitual titular grotesco pesado.
- Lectura: Fira Sans Regular, alias `Body`, peso 400.
- Notación: JetBrains Mono Nerd Font Mono Regular, alias `Notation`, peso 400. Solo para datos y nombres UML/tecnologías.
- Archivos WOFF2 locales, con subconjunto latino, puntuación y flechas. Los archivos TTF originales se conservan como referencia de origen; la página no los descarga.
- Título principal: `clamp(68px, 7.9vw, 114px)` en escritorio. En móvil: `clamp(66px, 12vw, 88px)`.
- Texto principal: 14–16 px según sección; etiquetas 11–13 px. Texto de nodos móviles 12 px y nombres 17 px antes del pequeño ajuste de escala del SVG.
- Interlineado del cuerpo 1.6–1.8; titular cercano a 1. Tracking mínimo −0.035em.

## Composición y responsive

Contenedor máximo de 1320 px. Margen fluido `clamp(24px, 5.5vw, 88px)`. Primera sección en columnas .95fr/1.05fr: presentación a la izquierda y dibujo a la derecha. Los diagramas no se presentan como tarjetas de producto.

El caso de estudio ocupa una banda de fondo distinto. La sección de capacidades usa filas editoriales, no tres tarjetas iguales. La credencial tiene una marca tipográfica pequeña y el nombre completo como protagonista.

- Más de 1100 px: dos columnas amplias.
- De 761 a 1100 px: tipografía y separaciones más compactas.
- Hasta 760 px: una columna y navegación visible en una segunda fila, sin menú oculto.
- UML móvil: composiciones SVG propias de 340 × 430, con menos contenido y conexiones verticales. No reducir el diagrama de escritorio hasta volverlo ilegible.

## Diagramas e intención

**Clases:** Cliente, Dirección y EquipoInstalado. Asociaciones uno a muchos y compartimentos con atributos. Es una traducción simplificada al español de conceptos del proyecto, no un esquema exhaustivo ni clases literales del código.

**Secuencia:** consulta de clientes. Navegador → Next.js → Fastify → PostgreSQL, con retornos discontinuos. La versión móvil omite PostgreSQL para mantener la lectura; su descripción accesible lo indica. No pretende documentar todo el flujo de autenticación.

**Despliegue:** Railway, servicios y persistencia. La conexión de Next.js a Fastify es privada según la documentación del proyecto. La vista móvil omite el navegador. No presenta el estado operacional actual ni sugiere despliegue en Google Cloud.

Referencia de nomenclatura: [OMG: tipos de diagramas UML](https://www.omg.org/uml/what-is-uml.htm) y [especificación UML 2.5.1](https://www.omg.org/spec/UML/2.5.1/). El resultado es una lectura editorial simplificada de la notación.

## Movimiento y accesibilidad

Un único gesto: al cambiar de diagrama, entrada de 450 ms con desplazamiento de 4 px y opacidad desde .65. Nada está oculto inicialmente por una animación de entrada. `prefers-reduced-motion` desactiva animaciones y scroll suave.

Pestañas con `role=tablist/tab/tabpanel`, selección anunciada, foco itinerante y controles de teclado. Paneles no seleccionados con `hidden`. SVG con títulos y descripciones; variante no usada con `display:none`. Enlaces visibles, foco delineado, navegación de salto y elemento `details` nativo.

No se incluye un cursor personalizado, parallax, autoplay ni un lienzo que capture el desplazamiento de página.
