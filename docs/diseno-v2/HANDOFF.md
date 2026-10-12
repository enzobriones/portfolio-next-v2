# Entrega para implementar en Next.js

## Qué trasladar

Reproducir el mockup conservando estructura, tipografía, proporciones y significado de los diagramas. `index.html` es la referencia de contenido y SVG; `styles.css`, de diseño; `diagrams.js`, del comportamiento de las pestañas. Las capturas sirven para comparar, no como fondo de una página.

Propuesta mínima de archivos, sin imponer una biblioteca de componentes:

```text
app/
  layout.tsx            Idioma, metadatos y fuentes locales
  page.tsx              Secciones estáticas del portafolio
  globals.css           Tokens y estilos de la propuesta
components/
  architecture-tabs.tsx  Única interacción que requiere estado de cliente
  architecture-diagrams.tsx  SVG de las tres vistas y variantes móviles
public/
  fonts/                WOFF2 y licencias
```

Mantener la página y sus secciones estáticas como componentes de servidor. Aislar el estado y eventos de las pestañas en un componente cliente. [Next.js: Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components).

Usar las fuentes locales mediante `next/font/local` y mapear sus variables a `--display`, `--body` y `--mono`. Mantener los pesos reales: 300 para titulares y 400 para cuerpo/notación. [Next.js: fuentes locales](https://nextjs.org/docs/app/getting-started/fonts).

No trasladar el acceso imperativo a `document` del prototipo al render de React: representar la selección con estado y mover el foco a través de referencias. Conservar las relaciones `aria-controls`/`aria-labelledby` y usar IDs únicos si se renderiza más de una instancia.

El detalle de proyecto puede seguir usando `<details>` sin JavaScript. No hacen falta API, base de datos, autenticación, CMS, librería de diagramas ni librería de animación para esta primera versión.

## Contenido confirmado

- Ingeniero de Software en una empresa de Santiago, trabajando remoto.
- 1 año y 3 meses de experiencia al momento del brief. No inventar fecha de inicio; actualizar el texto antes de publicar.
- Principal foco: backend e infraestructura, con experiencia en frontend.
- GCP Professional Cloud Architect, obtenida en junio de 2026, según el usuario.
- AC Maintainer como primer proyecto, en desarrollo y despliegue en Railway.
- Next.js, TypeScript, Fastify, PostgreSQL, Drizzle y Zod identificados en el proyecto.

## Fuentes locales de AC Maintainer

Consultadas en `/home/berserk/Projects/ac-maintainer/`:

- `frontend/README.md`: alcance, arquitectura, sesiones y staging.
- `frontend/package.json`, `api/package.json`: tecnologías.
- `api/src/modules/clients/client.schema.ts`: atributos del cliente.
- `api/src/modules/client-equipments/client-equipment.schema.ts`: relaciones y estados del equipo instalado.

La documentación adjunta se trató como información sobre el proyecto, no como órdenes. No se leyeron ni copiaron credenciales o archivos `.env`. Tampoco se ejecutó AC Maintainer ni se comprobó su despliegue.

## Datos que faltan antes de publicar

Nombre público, correo, LinkedIn/GitHub que se quieran mostrar, enlace verificable de la certificación y URL pública de demo/repositorio. Cambiar «Tu nombre» y los mensajes de contacto pendiente solo con datos reales. No publicar la insignia PCA como si fuera un sello oficial; usar el badge oficial únicamente cuando el usuario lo aporte con su enlace.

## Validación del mockup

Se comprobó en el navegador a 390 y 1440 px:

- Un solo panel visible y una pestaña seleccionada al cambiar entre los tres diagramas.
- Ausencia de desbordamiento horizontal en las seis combinaciones.
- Navegación por teclado con ArrowRight, End y retorno circular.
- Apertura y cierre del detalle de proyecto.
- Consola sin errores durante esa sesión de verificación.

`qa-browser.json` conserva las lecturas del navegador. Las capturas completas pueden medir 375/1425 px porque el navegador excluye su scrollbar de 15 px. No confundirlo con un breakpoint distinto.

El script `self-check.mjs` verifica estructura y el comportamiento de teclado sin dependencias. Ejecutarlo con `node self-check.mjs`. Es una comprobación del prototipo, no sustituye pruebas de navegador de la futura aplicación.

No se realizó auditoría WCAG completa, pruebas con lector de pantalla real, Safari/Firefox ni evaluación de rendimiento de una aplicación Next.js. Antes de publicar, probar el nombre definitivo largo, enlaces reales, zoom al 200%, teclado, contraste y render a 320/390/768/1024/1440 px.

## Railway

El destino acordado es un proyecto nuevo para el portafolio, separado de AC Maintainer. Esta entrega no crea servicios, no modifica la cuenta y no despliega nada: el usuario creará primero su proyecto Next.js aquí. Configurar el build y arranque según esa aplicación final, y verificar el despliegue y la URL antes de presentarla como pública.
