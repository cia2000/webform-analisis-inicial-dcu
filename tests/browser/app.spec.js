import { test, expect } from '@playwright/test';
test.beforeEach(async ({page}) => {
  await page.goto('/');
  await expect(page.locator('#download')).toBeEnabled();
});
test('guarda y recupera el borrador entre sesiones', async ({page}) => {
  const input = page.locator('textarea').first();
  await input.fill('Análisis individual de prueba');
  await expect(page.locator('#status')).toContainText('Guardado');
  await page.reload();
  await expect(page.locator('textarea').first()).toHaveValue('Análisis individual de prueba');
});
test('exporta e importa respuestas, controles y entradas adicionales', async ({page}) => {
  await page.locator('textarea').first().fill('Nombre de prueba | áéí\nOtra línea');
  await page.locator('#section-1 summary').click();
  await page.locator('[data-field="field-0"]').fill('Un problema <script>alert(1)</script>');
  await page.locator('#section-2 summary').click();
  await page.locator('[data-add="table-3"]').click();
  await page.locator('[data-table="table-3"][data-row="1"][data-col="0"]').fill('Otra persona');
  const download = page.waitForEvent('download');
  await page.locator('#download').click();
  const file = await download;
  const filePath = await file.path();
  await page.locator('#reset').click();
  await page.locator('#confirmation button[value="confirm"]').click();
  await expect(page.locator('textarea').first()).toHaveValue('');
  await page.locator('#import').setInputFiles(filePath);
  await expect(page.locator('textarea').first()).toHaveValue('Nombre de prueba | áéí\nOtra línea');
  await expect(page.locator('[data-field="field-0"]')).toHaveValue('Un problema <script>alert(1)</script>');
  await expect(page.locator('[data-table="table-3"][data-row="1"][data-col="0"]')).toHaveValue('Otra persona');
});
test('rechaza archivos ajenos sin cambiar las respuestas y permite cancelar borrado', async ({page}) => {
  await page.locator('textarea').first().fill('Conservar esta respuesta');
  await page.locator('#import').setInputFiles({name:'otro.md',mimeType:'text/markdown',buffer:Buffer.from('# Otro documento')});
  await expect(page.locator('#status')).toContainText('No se ha importado');
  await expect(page.locator('textarea').first()).toHaveValue('Conservar esta respuesta');
  await page.locator('#reset').click();
  await page.locator('#confirmation button[value="cancel"]').click();
  await expect(page.locator('textarea').first()).toHaveValue('Conservar esta respuesta');
});
test('móvil: todas las secciones sin desbordamiento horizontal', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await page.locator('.report-section').evaluateAll(nodes => nodes.forEach(node => { node.open = true; }));
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.locator('.report-section')).toHaveCount(9);
});
test('contenido importado seguro: se trata como texto, no HTML', async ({page}) => {
  await page.locator('textarea').first().fill('<img src=x onerror="window.injected=true">');
  await page.reload();
  await expect(page.locator('textarea').first()).toHaveValue('<img src=x onerror="window.injected=true">');
  expect(await page.evaluate(() => window.injected)).toBeUndefined();
});
test('avisa del fallo de almacenamiento y permite descargar', async ({page}) => {
  await page.evaluate(() => { Storage.prototype.setItem = () => { throw new Error('Sin almacenamiento'); }; });
  await page.locator('textarea').first().fill('Trabajo que debo descargar');
  await expect(page.locator('#status')).toContainText('No se ha podido guardar');
  const download = page.waitForEvent('download');
  await page.locator('#download').click();
  expect((await download).suggestedFilename()).toMatch(/\.md$/);
});
test('una importación válida pide confirmación antes de sustituir respuestas', async ({page}) => {
  await page.locator('textarea').first().fill('Mi análisis actual');
  const download = page.waitForEvent('download');
  await page.locator('#download').click();
  const path = await (await download).path();
  await page.locator('textarea').first().fill('Cambios posteriores');
  await page.locator('#import').setInputFiles(path);
  await expect(page.locator('#confirmation')).toBeVisible();
  await page.locator('#confirmation button[value="cancel"]').click();
  await expect(page.locator('textarea').first()).toHaveValue('Cambios posteriores');
});
test('un borrador corrupto se conserva y no se sobrescribe silenciosamente', async ({page}) => {
  await page.evaluate(() => localStorage.setItem('analisis-inicial-dcu-v1', '{dato incompleto'));
  await page.reload();
  await expect(page.locator('#status')).toContainText('No se ha podido recuperar');
  await page.locator('textarea').first().fill('Nuevo texto descargable');
  expect(await page.evaluate(() => localStorage.getItem('analisis-inicial-dcu-v1'))).toBe('{dato incompleto');
  await expect(page.locator('#download')).toBeEnabled();
});
test('otra pestaña no sobrescribe el borrador sin avisar', async ({page, context}) => {
  await page.locator('textarea').first().fill('Primera pestaña');
  const second = await context.newPage();
  await second.goto('/');
  await expect(second.locator('#download')).toBeEnabled();
  await second.locator('textarea').first().fill('Cambio desde segunda pestaña');
  await expect(page.locator('#status')).toContainText('otra pestaña');
  await page.locator('textarea').first().fill('Cambio local que no debe sobrescribir');
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('analisis-inicial-dcu-v1')));
  expect(saved.tables['table-0'][0][1]).toBe('Cambio desde segunda pestaña');
});
