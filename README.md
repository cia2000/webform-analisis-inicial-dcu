# Análisis inicial DCU

Formulario estático, mobile-first y sin dependencias de ejecución para completar la ficha docente del tema 2.1.1. No es una aplicación de consulta de impresiones: sirve para analizar ese problema.

## Uso

- Completar los apartados 0–8. Las tablas se presentan como tarjetas; las tablas variables permiten añadir y eliminar entradas.
- Se guarda en `localStorage`, solo en el navegador/dispositivo actual. En modo privado o al borrar datos puede perderse. No hay servidor de respuestas, analítica ni cuentas.
- Descargar periódicamente el Markdown. Importar ese archivo permite continuar en otro dispositivo. La importación sustituye el borrador previa confirmación si hay trabajo; no mezcla versiones.
- Entregar el `.md` en Canvas manualmente. El progreso cuenta respuestas escritas: no comprueba calidad ni puntúa.
- Se puede seguir usando la plantilla sin la herramienta. No se exige contestar mediante esta web.
- El botón flotante «↑ Secciones» vuelve al índice de apartados desde cualquier punto del formulario. Respeta la preferencia de movimiento reducido y sitúa el foco en el primer enlace para facilitar la navegación con teclado.

## Plantilla e intercambio

`plantilla.md` es una copia de la ficha de `material/modulo-2/unidad-2.1/tema-2.1.1/ficha-analisis-inicial-dcu.md` del repositorio docente. Conserva sus instrucciones y apartados. Sus enlaces relativos de continuidad pertenecen a ese repositorio: no hacen falta para resolver esta actividad.

`core.js` construye el formulario desde la plantilla. El Markdown exportado conserva la estructura y las instrucciones. Las respuestas multilínea se codifican como `<br>` y las barras de tablas se escapan. Se admite importar la plantilla original y las descargas de esta versión, así como fichas externas que conserven los títulos, etiquetas y tablas. Cambios estructurales o respuestas de varios párrafos fuera de las celdas pueden requerir adaptar el archivo al formato exportado. Un archivo incompatible se rechaza sin sustituir el borrador.

Las respuestas se insertan como texto, nunca como HTML ejecutable. La importación valida estructura, filas fijas y un máximo de 200 entradas por tabla. Los fallos de guardado se avisan; el trabajo sigue siendo descargable. Una modificación desde otra pestaña bloquea el guardado para evitar sobrescrituras silenciosas.

## Desarrollo y pruebas

```sh
npm install
npm test
npx playwright install chromium
npm run test:browser
```

Para abrir localmente, servir el directorio por HTTP (por ejemplo `python3 -m http.server 8000`). No abrir `index.html` directamente como `file://`, porque se descarga la plantilla mediante `fetch`.

Si ya hay Chrome instalado y Playwright no ofrece Chromium para el sistema operativo, se puede ejecutar `CHROME_PATH=/ruta/a/google-chrome npm run test:browser`.

Publicación: GitHub Pages, rama `main`, raíz. La herramienta solo requiere archivos estáticos, sin compilación. Las pruebas de navegador comprueban guardado, importación/exportación, tratamiento seguro del texto y adaptación a 390 px.
