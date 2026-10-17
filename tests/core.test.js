import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { compile, blank, validate, markdown, importMarkdown, progress } from '../core.js';
const template = readFileSync(new URL('../plantilla.md', import.meta.url), 'utf8');
const schema = compile(template);
const value = 'Información: áéíóú ñ | dos\\rutas\\|combinadas\nOtra línea <script>alert(1)</script> &amp; <br> [nota]';
test('conserva los nueve apartados y todas las tablas de respuestas', () => {
  assert.equal(schema.sections.length, 9);
  assert.equal(schema.tables.length, 15);
  assert.equal(schema.checks.length, 12);
  assert.equal(progress(blank(schema), schema).filled, 0);
  assert.ok(schema.fields.length > 10);
});
test('la plantilla original puede importarse como una ficha vacía', () => {
  assert.deepEqual(importMarkdown(template, schema), blank(schema));
});
test('ida y vuelta sin pérdidas: todos los campos, filas extra, checks, Unicode, barras y saltos', () => {
  const data = blank(schema);
  for (const f of schema.fields) data.fields[f.id] = value;
  for (const c of schema.checks) data.checks[c.id] = true;
  for (const t of schema.tables) {
    data.tables[t.id].forEach((r, ri) => r.forEach((_, ci) => { if (t.editable[ri][ci]) r[ci] = value; }));
    if (t.dynamic) data.tables[t.id].push(t.headers.map((_, ci) => t.numbered && ci === 0 ? String(data.tables[t.id].length + 1) : value));
  }
  assert.deepEqual(importMarkdown(markdown(data, schema), schema), data);
});
test('rechaza otro reporte sin afectar al borrador', () => {
  const data = blank(schema), snapshot = structuredClone(data);
  assert.throws(() => importMarkdown('# Reporte FlyAway\nSin plantilla', schema));
  assert.deepEqual(data, snapshot);
});
test('rechaza pérdida de tablas y modificación de etiquetas fijas', () => {
  assert.throws(() => importMarkdown(template.replace('| Campo | Respuesta |', '| Otra | Tabla |'), schema));
  const data = blank(schema);
  data.tables['table-0'][0][0] = 'Etiqueta manipulada';
  assert.throws(() => validate(data, schema));
});
test('permite filas variables vacías y progreso sin calificar', () => {
  const data = blank(schema);
  const t = schema.tables.find(t => t.dynamic);
  data.tables[t.id].push(t.headers.map(() => ''));
  assert.deepEqual(importMarkdown(markdown(data, schema), schema), data);
  data.fields[schema.fields[0].id] = 'Una respuesta';
  assert.equal(progress(data, schema).filled, 1);
});
