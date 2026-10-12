import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

const root = new URL('./', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'IDs únicos');
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(id), `Ancla existente: ${id}`);
for (const [, path] of html.matchAll(/(?:src|href)="((?:assets\/|styles|diagrams)[^"]+)"/g)) {
  assert(existsSync(fileURLToPath(new URL(path, root))), `Recurso local: ${path}`);
}
for (const font of ['body', 'display', 'mono']) assert(existsSync(new URL(`assets/${font}.woff2`, root)));
const panels = {};
const tabs = ['clases', 'secuencia', 'despliegue'].map(name => {
  panels[`panel-${name}`] = { hidden: name !== 'clases' };
  return {
    attributes: { 'aria-controls': `panel-${name}`, 'aria-selected': String(name === 'clases') },
    tabIndex: name === 'clases' ? 0 : -1,
    events: {},
    getAttribute(key) { return this.attributes[key]; },
    setAttribute(key, value) { this.attributes[key] = value; },
    addEventListener(key, handler) { this.events[key] = handler; },
    focus() { focused = this; },
  };
});
let focused;
runInNewContext(readFileSync(new URL('diagrams.js', root), 'utf8'), {
  document: { querySelectorAll: () => tabs, getElementById: id => panels[id] },
});
function checkSelection(index) {
  assert.equal(tabs.filter(tab => tab.attributes['aria-selected'] === 'true').length, 1);
  assert.equal(tabs[index].attributes['aria-selected'], 'true');
  assert.equal(tabs.filter(tab => tab.tabIndex === 0).length, 1);
  assert.equal(Object.values(panels).filter(panel => !panel.hidden).length, 1);
  assert.equal(panels[tabs[index].attributes['aria-controls']].hidden, false);
}
tabs[1].events.click(); checkSelection(1);
for (const [from, key, expected] of [[1,'End',2],[2,'ArrowRight',0],[0,'ArrowLeft',2],[2,'Home',0]]) {
  let prevented = false;
  tabs[from].events.keydown({ key, preventDefault() { prevented = true; } });
  assert(prevented); checkSelection(expected); assert.equal(focused, tabs[expected]);
}
console.log('OK: recursos, IDs, anclas, selección, paneles y navegación de teclado.');
