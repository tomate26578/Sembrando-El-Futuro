# Sembrando el Futuro

Prototipo local para organizar cultivos en Mendoza y conversar sobre sus condiciones. El chat por planta realiza tres preguntas y utiliza los datos guardados de la zona, cultivo, notas y respuestas. La información de este prototipo requiere revisión local; no es asesoramiento agronómico validado.

## Requisitos e inicio

1. Instalar Node.js 20 o superior desde https://nodejs.org/.
2. Abrir esta carpeta en Visual Studio Code y seleccionar Terminal > Nuevo terminal.
3. Ejecutar `npm start` y abrir http://localhost:3000. Mantener la terminal abierta; Ctrl+C detiene el servidor.

La aplicación usa funciones incluidas en Node y no requiere `npm install`.

## Configurar la inteligencia artificial

1. Crear una clave en https://openrouter.ai/keys y comprobar condiciones y límites del modelo.
2. Copiar `.env.example` a `.env` en esta carpeta y pegar la clave después de `OPENROUTER_API_KEY=`. No usar comillas. No subir ni compartir `.env`.
3. El ejemplo utiliza `google/gemma-3-27b-it:free`; su disponibilidad, políticas de datos y modelos pueden variar. Reiniciar el servidor después de editar `.env`.

Cuando se consulta la IA se envían al proveedor la consulta, datos de la zona y el cultivo, respuestas, notas y parte de la conversación. Las coordenadas también se envían al servicio de datos climáticos cuando se solicitan datos para la zona.

## Datos y límites

- Para una zona con coordenadas, el servidor solicita a POWER temperatura media, mínima y máxima, precipitación, humedad relativa del aire y humedad modelada en la zona de raíces desde el inicio histórico disponible en 1981 hasta la fecha actual (los últimos días pueden no estar disponibles). Resume los últimos 24 meses para el asistente e informa los días faltantes de toda la serie. Son estimaciones regionales, no mediciones de una finca ni un pronóstico.
- La información del INTA consiste en una **selección breve de resúmenes preparados** de tres publicaciones citadas en `server.mjs`. No consulta en vivo una base de datos del INTA, no analiza la tierra de cada usuario y puede no cubrir el cultivo. El asistente debe informar los datos no disponibles.
- Las respuestas son generadas por IA y pueden contener errores; revisarlas con profesionales y fuentes originales. No se garantiza un diagnóstico de enfermedades, viabilidad de cultivos, mutualismo o un plan de riego.
- Las alertas automáticas no están conectadas a las fuentes seleccionadas. El historial conserva registros anteriores. El mapa de precipitaciones es satelital y no equivale a un radar meteorológico ni a una alerta oficial.
- Los datos, cuentas, chats, notas y recordatorios se guardan en este navegador. No hay copia de seguridad, sincronización, autenticación segura ni protección adecuada para uso público. Los recordatorios se muestran mientras la aplicación está abierta.
- Las respuestas antiguas del cuestionario se conservan separadas de las tres preguntas actuales. Para verlas, abrir “Ver respuestas del cuestionario anterior”.

## Comprobación

Ejecutar `node --check app.js`, `node --check server.mjs` y `node test_three.cjs`. Las pruebas usan ejemplos ficticios y no consultan proveedores externos.

`Documentacion Sembrando el Futuro.docx` es un documento de una versión anterior: esta guía describe las funciones y limitaciones actuales.
