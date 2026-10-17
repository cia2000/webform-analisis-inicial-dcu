# Ficha de análisis inicial DCU con enfoque mobile-first

## Antes de empezar: cómo indicar qué sabemos y qué suponemos

Al completar la ficha, indica de dónde procede cada afirmación relevante. Utiliza estas etiquetas en la misma respuesta o en la columna de fundamento:

| Etiqueta | Qué significa | Cuándo utilizarla |
| --- | --- | --- |
| **Indicado en el enunciado** | El enunciado proporciona expresamente esa información. | Para describir personas, acciones, condiciones o dificultades que aparecen en el texto, sin añadir interpretaciones. Cita el fragmento o apartado cuando sea necesario. |
| **Suposición pendiente de comprobar** | Es una interpretación o posibilidad razonable, pero todavía no se ha contrastado. | Para proponer necesidades, causas, consecuencias o condiciones de uso que el enunciado no confirma. Explica qué te lleva a suponerlo y cómo podrías comprobarlo. |
| **Desconocido** | No disponemos de información suficiente para responder. | Cuando falta un dato relevante. Escribe qué falta y cómo podría averiguarse, en lugar de inventar una respuesta. |
| **Evidencia obtenida** | La información procede de una investigación o comprobación realmente realizada. | Solo si existe: indica fuente, método, fecha y límites. No presentes un escenario inventado o un dato del enunciado como una observación con personas reales. |

**Ejemplo:** si el enunciado dice que un profesor firma al devolver una llave, esa acción está **indicada en el enunciado**. Afirmar que quiere terminar el trámite antes de su siguiente clase es una **suposición pendiente de comprobar**, salvo que el texto o una investigación lo confirmen. Si no sabemos cuánto tarda la devolución, el tiempo es **desconocido**.

En esta ficha y sus ejemplos, **«Caso»** puede aparecer como abreviatura de **«Indicado en el enunciado»**, y **«Hipótesis»** significa **«Suposición pendiente de comprobar»**. Para tus respuestas, utiliza preferentemente las etiquetas completas. Una decisión propuesta no es un hecho: indica qué información o suposición la justifica.

No hace falta repetir la etiqueta en cada frase si el fundamento de toda una fila o párrafo ya está claro. Si mezclas información del enunciado con una interpretación, distingue ambas partes. En una actividad basada solo en un enunciado es normal tener suposiciones y desconocidos: reconocerlos forma parte del análisis DCU.

## Propósito y alcance

Esta ficha te ayudará a comprender un problema antes de proponer una solución y a justificar las primeras decisiones de Diseño Centrado en el Usuario (DCU). Se basa en los apartados **1. Propósito del Diseño Centrado en el Usuario** y **2. Comprender a las personas, sus necesidades y su contexto móvil** del [tema 2.1.1](principios-del-diseno-centrado-en-el-usuario.md).

Puedes utilizarla para analizar una aplicación existente o una propuesta de producto: web, aplicación nativa, solución multiplataforma o servicio digital que combine varios canales. **Mobile-first significa comenzar por las necesidades, tareas y condiciones de uso en móvil; no significa diseñar solo para móvil ni elegir de antemano una tecnología.**

El resultado será una definición inicial del problema, una tarea prioritaria analizada en detalle y un conjunto de decisiones provisionales. No se pide todavía un diseño de pantallas, un backlog completo ni una investigación exhaustiva.

## Instrucciones para completar la ficha

1. **Copia este archivo** al repositorio de tu equipo. Utiliza un nombre como `ciclo-01-analisis-inicial-dcu.md`.
2. Lee el enunciado de la actividad y los apartados 1 y 2 del tema. Completa los bloques en orden y revisa los anteriores cuando aparezcan contradicciones.
3. Sustituye los campos entre corchetes por tus respuestas. Añade filas cuando sea necesario. Si algo no se conoce, escribe **«Desconocido»** y explica cómo se podría averiguar. Si no se aplica, justifícalo.
4. Distingue siempre el fundamento de tus afirmaciones:
   - **Evidencia:** información disponible y verificable. Indica su fuente, localización, fecha y límites. Si procede de un enunciado ficticio, anótalo: no equivale a una observación con personas reales.
   - **Hipótesis:** suposición razonable todavía no contrastada. Explica por qué la planteas y qué falta comprobar.
   - **Desconocido:** no hay información suficiente para sostener una afirmación.
5. No inventes entrevistas, participantes, citas, métricas ni resultados. Un escenario hipotético sirve para razonar, pero no demuestra cómo se comportan las personas.
6. Justifica las respuestas: evita expresiones como «todos los usuarios», «fácil», «intuitivo» o «rápido» sin concretar personas, tarea, contexto y resultado observable.
7. No incluyas datos personales reales ni información confidencial. Identifica las fuentes mediante referencias anonimizadas y enlaces seguros cuando corresponda.
8. Conserva las decisiones como provisionales hasta contrastarlas. Si revisas una decisión, registra el cambio y su motivo.

**Nivel de detalle:** desarrolla una fila por cada grupo, necesidad o condición relevante; analiza de principio a fin al menos una tarea prioritaria. La calidad depende de la coherencia y la justificación, no del número de filas. El enunciado de cada actividad puede ampliar estos mínimos.

> **Ejemplo orientativo — no es una respuesta para copiar:** «El enunciado describe consultas desde el transporte público. Planteamos como hipótesis que algunas se interrumpen antes de finalizar. Proponemos permitir retomar la tarea; falta comprobar qué información necesita conservarse y si hacerlo introduce riesgos de privacidad».

## 0. Identificación

| Campo | Respuesta |
| --- | --- |
| Actividad y título del análisis | [Completar] |
| Aplicación o servicio y situación inicial | [Existente o propuesto; descripción breve] |
| Equipo y responsable de mantenimiento | [Completar] |
| Fecha de elaboración | [AAAA-MM-DD] |
| Ciclo y versión | [Completar] |
| Estado | [Borrador / En revisión / Aprobado; aprobar la ficha no valida sus hipótesis] |
| Artefactos de origen | [Enunciado, documentación, análisis anteriores; enlaces e identificadores si existen] |
| Artefactos derivados | [Pendientes o enlaces a los documentos que se elaboren a partir de la ficha] |
| Próxima revisión | [Fecha o condición que obliga a revisar el análisis] |

### Fuentes disponibles y sus límites

Registra aquí las fuentes para poder citarlas después. Si el proyecto ya utiliza identificadores de evidencia, conserva los existentes; no asignes un identificador de evidencia a una suposición.

| Fuente o enlace localizable | Información que aporta | Procedencia y fecha | Límites: qué no permite concluir |
| --- | --- | --- | --- |
| [Completar] | [Completar] | [Enunciado, documentación, observación autorizada, etc.] | [Completar] |

## 1. Propósito: qué problema merece resolverse

**Instrucción:** describe primero la situación actual y su consecuencia para las personas. No empieces por una función o una tecnología. Si analizas un producto existente, no presupongas que todas sus funciones son necesarias.

| Pregunta | Respuesta y fundamento |
| --- | --- |
| ¿Qué situación o dificultad se quiere mejorar? | [Qué ocurre, a quién y cuándo; fuente o hipótesis] |
| ¿Cómo se resuelve actualmente, incluso fuera de una aplicación? | [Medios, personas o soluciones alternativas; desconocidos] |
| ¿Qué consecuencias tiene no resolverla o resolverla mal? | [Pérdida de tiempo, errores, exclusión, exposición de datos, etc.] |
| ¿Qué resultado valioso esperan las personas? | [Resultado, no lista de funciones] |
| ¿Qué persigue la organización o el producto? | [Objetivo y posible tensión con el objetivo de las personas] |
| ¿Qué restricciones conocidas deben respetarse? | [Reglas del servicio, condiciones técnicas o normativas confirmadas; fuente. No inventes obligaciones] |

**Formulación inicial del problema:**

> [Personas o grupo] necesita [resultado o necesidad] cuando [situación], porque actualmente [dificultad y consecuencia]. Esta formulación se apoya en [fuente] y mantiene por comprobar [supuesto].

## 2. Personas usuarias y partes interesadas

**Instrucción:** identifica grupos por su relación con la tarea, no por estereotipos demográficos. Una persona puede ser usuaria y parte interesada a la vez. La opinión de quien encarga el producto no sustituye el conocimiento de quienes lo usan o reciben sus efectos.

| Grupo y relación con el servicio | Qué intenta lograr o qué interés tiene | Qué utiliza o cómo recibe sus efectos | Conocimiento que puede aportar | Evidencia, hipótesis o desconocido |
| --- | --- | --- | --- | --- |
| [Completar] | [Completar] | [Completar] | [Completar] | [Fundamento y fuente] |

### Diversidad relevante y riesgo de exclusión

No construyas todavía una persona ficticia detallada. Identifica diferencias que puedan cambiar la tarea: experiencia previa, idioma, capacidades, tecnologías de apoyo, dispositivos, conectividad o disponibilidad de tiempo.

| Diferencia o situación relevante | Barrera o necesidad que podría aparecer | A quién falta escuchar o qué falta conocer | Fundamento |
| --- | --- | --- | --- |
| [Completar] | [Completar] | [Completar] | [Fuente o hipótesis] |

**Grupo prioritario para este análisis y motivo:** [Completar].

**Otros grupos afectados que no deben quedar invisibles y cómo se considerarán:** [Completar].

## 3. Separar necesidades, objetivos, tareas y funciones

**Instrucción:** formula la necesidad sin imponer un mecanismo. El objetivo expresa el resultado; la tarea, las acciones para alcanzarlo; la función, una posible ayuda del producto. Describe la tarea actual cuando se conozca y marca como hipótesis cualquier recorrido propuesto.

| Persona o grupo | Necesidad: dificultad o incertidumbre | Objetivo: resultado esperado | Tarea: qué hace para lograrlo | Posible función, todavía no decidida | Criterio de éxito de la persona | Fundamento |
| --- | --- | --- | --- | --- | --- | --- |
| [Completar] | [Completar] | [Completar] | [Completar] | [Opcional; no condiciona la necesidad] | [Resultado observable] | [Fuente o hipótesis] |

> **Ejemplo de distinción:** necesidad: conocer si una solicitud se ha recibido; objetivo: tener certeza de su registro; tarea: consultar su estado; posible función: consulta de seguimiento; éxito: distinguir una solicitud registrada de un envío todavía pendiente. «Necesitar una notificación» ya presupone una solución.

### Priorización inicial

Compara las tareas por valor para las personas, frecuencia conocida o supuesta, gravedad del fallo y barreras de uso. No inventes cifras ni conviertas la prioridad del negocio en la única justificación.

| Tarea candidata | Valor para las personas | Frecuencia y fundamento | Consecuencia de fallar o no poder realizarla | Prioridad provisional y motivo |
| --- | --- | --- | --- | --- |
| [Completar] | [Completar] | [Conocida, hipótesis o desconocida] | [Completar] | [Completar] |

**Tarea elegida para el análisis detallado:** [Completar].

**Por qué se analiza antes que las alternativas:** [Completar].

## 4. Contextos de uso y prioridades mobile-first

**Instrucción:** analiza condiciones plausibles de la tarea elegida. No supongas que todos los usos móviles ocurren en movimiento ni que usar un ordenador garantiza atención, conectividad o accesibilidad. Marca las condiciones no confirmadas como hipótesis.

| Dimensión | Condición concreta de uso | Efecto sobre la tarea o riesgo | Implicación inicial que debe comprobarse | Fundamento |
| --- | --- | --- | --- | --- |
| Física | [Postura, manos disponibles, movimiento, luz, ruido] | [Completar] | [Completar] | [Completar] |
| Social | [Uso compartido, ayuda disponible, privacidad visual] | [Completar] | [Completar] | [Completar] |
| Técnica | [Pantalla, dispositivo, red, rendimiento, entrada o tecnologías de apoyo] | [Completar] | [Completar] | [Completar] |
| Temporal | [Tiempo disponible, urgencia, interrupciones, posibilidad de retomar] | [Completar] | [Completar] | [Completar] |

### De las condiciones a las prioridades

| Pregunta | Respuesta justificada para la tarea elegida |
| --- | --- |
| ¿Qué información necesita primero la persona para actuar o decidir desde el móvil? | [Contenido esencial y motivo; no elimines información crítica para reducir espacio] |
| ¿Qué acciones deben poder completarse de principio a fin desde el móvil? | [Resultado completo, no solo iniciar un trámite] |
| ¿Qué información o acciones pueden quedar en segundo plano sin bloquear la tarea? | [Completar y justificar] |
| ¿Qué sucede si se interrumpe la atención o se pierde la conexión? | [Qué debe conservarse, cómo se entiende el estado y cómo se recupera] |
| ¿Qué barreras de accesibilidad deben considerarse desde el inicio? | [Condición concreta y alternativa necesaria; no basta con decir «ser accesible»] |
| ¿Qué datos o permisos parecen imprescindibles? ¿Hay alternativas menos intrusivas? | [Finalidad y necesidad; «ninguno» si está justificado. No uses sensores solo por estar disponibles] |
| ¿Qué debe mantenerse al pasar a una pantalla mayor u otro canal? | [Contenido, estado y coherencia de la tarea; si no procede, explica por qué] |
| ¿Qué podría ampliarse en otros dispositivos sin perjudicar el uso móvil? | [Posibilidad razonada o cuestión pendiente; no impongas una plataforma] |

## 5. Escenario y recorrido de la tarea prioritaria

### 5.1. Escenario

**Instrucción:** redacta una situación concreta, breve y plausible. Debe ayudar a poner a prueba tus decisiones, no servir como evidencia inventada. Evita datos personales y detalles biográficos irrelevantes.

| Elemento | Descripción |
| --- | --- |
| Persona o grupo y conocimientos relevantes | [Completar] |
| Desencadenante: por qué inicia la tarea ahora | [Completar] |
| Objetivo y resultado esperado | [Completar] |
| Lugar, dispositivo y condiciones de uso | [Completar] |
| Estado inicial e información disponible | [Completar] |
| Interrupción, dificultad o riesgo que se analizará | [Completar] |
| Fundamento y límites | [Qué procede de fuentes y qué es hipotético] |

**Escenario redactado:** [Une los elementos anteriores en un párrafo].

### 5.2. Recorrido de principio a fin

**Instrucción:** descompón la tarea en acciones y decisiones. Incluye el inicio, las comprobaciones necesarias y el reconocimiento del resultado. No es obligatorio nombrar pantallas o botones. Si la tarea implica un envío, distingue intención, envío pendiente y resultado confirmado cuando corresponda.

**Tipo de recorrido:** [Actual documentado / Actual supuesto / Propuesto como hipótesis].

| Paso | Acción u objetivo de la persona | Información necesaria y decisión que toma | Estado o respuesta que necesita comprender | Barrera, error o interrupción posible | Recuperación o alternativa que debe contemplarse |
| --- | --- | --- | --- | --- | --- |
| 1 | [Inicio de la tarea] | [Completar] | [Completar] | [Completar] | [Completar] |
| 2 | [Añade tantos pasos como requiera la tarea] | [Completar] | [Completar] | [Completar] | [Completar] |
| 3 | [Reconocimiento del resultado] | [Completar] | [Completar] | [Completar] | [Completar] |

**Punto más crítico del recorrido y consecuencia del fallo:** [Completar].

**Qué sucede si la persona abandona, vuelve más tarde o cambia de dispositivo:** [Completar; distingue lo necesario de lo todavía desconocido].

## 6. Utilidad y calidad de uso esperada

**Instrucción:** expresa qué resultado permitiría valorar cada dimensión. No presentes estos criterios como resultados ya obtenidos. Si propones un umbral numérico, explica su fundamento o márcalo como provisional.

| Dimensión | Pregunta aplicada a la tarea | Resultado observable esperado | Qué falta comprobar y cómo podría observarse |
| --- | --- | --- | --- |
| Utilidad | ¿La tarea responde a una necesidad relevante? | [Completar] | [Completar] |
| Eficacia | ¿La persona logra el resultado correcto? | [Completar] | [Completar] |
| Eficiencia | ¿Qué esfuerzo, repetición o tiempo innecesario se evita? | [Completar] | [Completar] |
| Satisfacción | ¿La experiencia resulta aceptable para la persona? | [Completar] | [Observación y valoración de la persona; no deducir solo de la velocidad] |
| Confianza | ¿Comprende el resultado, el uso de datos y sus opciones de control? | [Completar] | [Completar] |

**Posible tensión entre dimensiones y cómo abordarla:** [Por ejemplo, reducir pasos sin eliminar una revisión necesaria. Completar para este caso].

## 7. Primeras decisiones DCU

**Instrucción:** utiliza los bloques anteriores para decidir, no para confirmar automáticamente la idea inicial. Documenta decisiones sobre el problema, las personas prioritarias, la tarea completa, el alcance, la información esencial y las protecciones necesarias. Puedes decidir posponer una elección si falta evidencia crítica.

No se pide elegir un framework, diseñar pantallas definitivas ni cerrar toda la funcionalidad. Cuando haya alternativas, compara al menos la elegida con otra opción razonable, que puede ser conservar el proceso actual.

| Decisión provisional | Fundamento: fuente y bloque de esta ficha | Alternativa considerada y motivo para no elegirla ahora | Riesgo o supuesto pendiente | Qué resultado se espera y qué haría revisar la decisión |
| --- | --- | --- | --- | --- |
| [Completar] | [Completar] | [Completar] | [Completar] | [Completar] |

### Síntesis del alcance inicial

- **Problema y grupo prioritarios:** [Completar].
- **Tarea que debe poder completarse de principio a fin:** [Completar].
- **Contenido y acciones esenciales en móvil:** [Completar].
- **Protecciones o alternativas que no pueden posponerse:** [Accesibilidad, privacidad, recuperación y seguridad pertinentes para la tarea].
- **Qué queda fuera por ahora y por qué:** [Completar; no excluyas barreras críticas solo para reducir alcance].
- **Decisión que todavía no es responsable tomar:** [Completar o justificar que no se ha identificado ninguna].

## 8. Incertidumbres, revisión y entrega

### 8.1. Qué necesitamos conocer a continuación

**Instrucción:** prioriza las incertidumbres que podrían invalidar una decisión importante o causar daño. Formula preguntas neutrales: «¿Cómo sabe que el trámite ha terminado?» es preferible a «¿Le gustaría nuestro aviso de confirmación?».

Este bloque prepara el trabajo posterior; no exige ejecutar una investigación completa en esta actividad. Cualquier participación real requerirá condiciones adecuadas de consentimiento, accesibilidad y protección de datos.

| Incertidumbre o hipótesis | Decisión afectada y riesgo de equivocarse | Pregunta que necesitamos responder | Fuente, personas o situación que permitirían contrastarla | Prioridad y motivo |
| --- | --- | --- | --- | --- |
| [Completar] | [Completar] | [Completar] | [Completar] | [Completar] |

### 8.2. Lista de comprobación

- [ ] El problema expresa una dificultad y una consecuencia para personas concretas, no una función deseada.
- [ ] Se distinguen objetivos de las personas, objetivos del producto y restricciones.
- [ ] Se identifican personas usuarias, otras partes interesadas y diversidad relevante sin recurrir a estereotipos.
- [ ] Necesidades, objetivos, tareas, funciones y criterios de éxito no se confunden.
- [ ] La tarea prioritaria tiene una justificación y un recorrido completo con decisiones, errores y recuperación.
- [ ] Mobile-first se traduce en prioridades de contenido e interacción, no solo en una pantalla pequeña o una aplicación nativa.
- [ ] Se consideran atención, conectividad, interrupciones, accesibilidad y privacidad en situaciones concretas.
- [ ] Las afirmaciones relevantes indican fuente, hipótesis o desconocimiento y reconocen sus límites.
- [ ] Los criterios de calidad describen resultados observables y no resultados inventados.
- [ ] Cada decisión tiene fundamento, riesgo pendiente y condición de revisión.
- [ ] La ficha no contiene datos personales reales ni información confidencial.
- [ ] Los campos pendientes están identificados y justificados; los enlaces funcionan.

**Conclusión del equipo:** [Resume qué habéis decidido, qué no podéis afirmar todavía y qué necesitáis conocer antes de avanzar].

### 8.3. Historial de revisión

Conserva el motivo de los cambios; no sustituyas silenciosamente una hipótesis por una supuesta certeza.

| Fecha y versión | Cambio o decisión revisada | Motivo y fuente | Consecuencia para el análisis |
| --- | --- | --- | --- |
| [Completar] | [Primera elaboración o revisión] | [Completar] | [Completar] |

## Continuidad con los artefactos del proyecto

Esta es una ficha docente introductoria, no un sustituto del catálogo oficial del MVP. Si la actividad continúa como proyecto, reutiliza las conclusiones mediante enlaces, sin duplicar fuentes ni crear identificadores incompatibles con los existentes:

- [Brief del problema y del ciclo](../../../../contenidos/anexos/artefactos/modulo-2/unidad-2.1/01-brief-problema-y-ciclo.md): propósito, alcance y supuestos.
- [Registro de evidencias](../../../../contenidos/anexos/artefactos/modulo-2/unidad-2.1/04-registro-de-evidencias.md): información contrastada, procedencia y límites.
- [Análisis de tareas y contexto](../../../../contenidos/anexos/artefactos/modulo-2/unidad-2.1/05-analisis-de-tareas-y-contexto.md) y [recorrido de usuario](../../../../contenidos/anexos/artefactos/modulo-2/unidad-2.1/07-recorrido-de-usuario.md): desarrollo del análisis de la tarea.
- [Necesidades y oportunidades](../../../../contenidos/anexos/artefactos/modulo-2/unidad-2.1/08-necesidades-y-oportunidades.md): síntesis de necesidades fundamentadas.
- [Plan de investigación y consentimiento](../../../../contenidos/anexos/artefactos/modulo-2/unidad-2.1/02-plan-investigacion-y-consentimiento.md): preparación responsable del contraste con personas.
- [Gobernanza de trazabilidad](../../../../contenidos/anexos/artefactos/gobernanza-trazabilidad.md): identificadores, metadatos y relaciones del proyecto. Al trasladar elementos al catálogo, aplica sus convenciones y conserva los identificadores ya asignados.

Si distribuyes la ficha fuera del repositorio docente, acompáñala del tema y los recursos enlazados o adapta los enlaces a su ubicación de distribución.
