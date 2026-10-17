import assert from "node:assert/strict";
import { test } from "node:test";

const origin = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";

test("public page exposes the approved profile and local assets", async () => {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const content of [
    "Enzo Briones",
    "mailto:enzobfriz@gmail.com",
    "tel:+56981958638",
    "https://github.com/enzobriones",
    "Ver certificado",
    "AC Maintainer",
    "SII Pymes",
    'id="proyectos"',
  ]) {
    assert(html.includes(content), `Missing public content: ${content}`);
  }
  assert(!/UML/.test(html), "The page must not mention UML");
  assert(
    !/Tu nombre|pendientes de personalizar|por definir|\.pdf["?]/i.test(html),
  );
  const image = await fetch(`${origin}/images/certificado-gcp.webp`);
  assert.equal(image.status, 200);
  assert.match(image.headers.get("content-type"), /image\/webp/);
  assert.equal((await fetch(`${origin}/certificado.pdf`)).status, 404);
});

test("case studies and about page exist, unknown projects 404", async () => {
  for (const path of ["/proyectos/ac-maintainer", "/proyectos/sii-pymes", "/sobre-mi"]) {
    assert.equal((await fetch(origin + path)).status, 200, path);
  }
  assert.equal((await fetch(`${origin}/proyectos/no-existe`)).status, 404);
});
