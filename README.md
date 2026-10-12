# Enzo Briones — Portafolio

Next.js App Router, TypeScript, Tailwind CSS y componentes shadcn/ui adaptados sobre Base UI. La referencia visual está en `docs/diseno-v2/`.

## Desarrollo

Node.js 22.18 o posterior y pnpm 10.13.1 (fijado en `packageManager`).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

No requiere variables secretas ni servicios externos. Visitar `http://localhost:3000`.

## Responsabilidades

```text
app/                         Rutas, layout, metadatos y estilos globales
components/portfolio/        Secciones del portafolio e interacciones propias
components/portfolio/diagrams/  SVG accesibles, por tipo de diagrama
components/ui/               Primitivas shadcn/Base UI adaptadas al diseño
lib/profile.ts               Identidad, contacto y datos de la credencial
styles/                     Composición visual y visor del certificado
public/fonts/               Fuentes locales y licencias
public/images/              Imagen pública del certificado
tests/                      Comprobación HTTP de la aplicación compilada
.github/workflows/          CI para develop
```

`app/page.tsx` solo compone las secciones. El contenido y los diagramas se renderizan en el servidor; las pestañas y el diálogo del certificado son las interacciones cliente. Base UI controla selección, teclado y foco. El detalle del proyecto usa `details` nativo.

Los colores y las proporciones conservan el mockup. El certificado se muestra como WebP dentro de un diálogo: no se sirve el PDF original ni se añade un botón de descarga. La imagen visible sí puede guardarse o capturarse.

## Verificación

```sh
pnpm lint
pnpm build
pnpm typecheck
pnpm start
```

En otra terminal, con el servidor funcionando:

```sh
pnpm test
# Para verificar un despliegue:
TEST_BASE_URL=https://dominio-del-portafolio pnpm test
```

El test comprueba contacto, credencial, semántica de pestañas, recursos locales y ausencia de placeholders/PDF público. También revisar en navegador las pestañas con flechas/Home/End, el cierre del certificado con Escape y retorno de foco, el detalle del proyecto, 320/390/768/1024/1440 px, zoom al 200 % y movimiento reducido.

## CI/CD — develop → Railway

El workflow `CI` corre en pull requests hacia `develop` y en cada push a esa rama, incluidos los merges. Instala con lockfile congelado, ejecuta lint/build/typecheck, arranca la compilación de producción y prueba las respuestas HTTP.

La entrega continua usa la integración GitHub de Railway, como AC Maintainer. Al conectar el repositorio del portafolio:

1. Crear un proyecto Railway separado y un servicio web, raíz del repositorio `/`.
2. Seleccionar `develop` como rama de autodeploy y activar **Wait for CI**. No conectar el servicio a `main`.
3. Configurar `RAILPACK_NODE_VERSION=22`, `NODE_ENV=production` y `PORT=8080`.
4. Railway lee `railway.json`: `pnpm build`, `pnpm start` y healthcheck `/`.
5. Generar un dominio público para el puerto 8080 y verificar el primer despliegue.

No se necesita un token Railway en GitHub Actions. Railway espera las comprobaciones de GitHub antes de desplegar. Para exigir merges en lugar de pushes directos, proteger `develop` con pull requests y el check `check` requerido.

Referencia: [GitHub autodeploys y Wait for CI](https://docs.railway.com/deployments/github-autodeploys).

**Estado de infraestructura:** el repositorio [enzobriones/portfolio-next-v2](https://github.com/enzobriones/portfolio-next-v2) está creado. La subida del código está pendiente de permisos de escritura del conector GitHub (respuesta 403). El código de CI y la configuración de build están preparados; la conexión con Railway y el primer despliegue siguen pendientes. Este directorio aún no tiene un repositorio Git local utilizable.
