# NR Academia — Sitio web real (en revisión)

Sitio para **NR Academia**, academia de pádel de **Ignacio "Nacho" Román** en Le Club Formosa (Fontana, Formosa, Argentina). A diferencia del resto del portfolio de demo de CEDETEC Digital, **este es un negocio real** — no es una pieza de prospección ficticia.

Reutiliza la identidad visual de [`padel-match-point`](https://github.com/CEDETEC-TI/padel-match-point) (estructura, tipografía Barlow Condensed/Barlow, botón con corte diagonal) con una paleta propia — bordó + crema — en lugar de negro + flúo. `padel-match-point` no se modificó.

**Estado: en revisión, pendiente de aprobación de Nacho.** Varios datos son provisorios — ver `config.js`, que tiene cada campo marcado como confirmado o pendiente. Mientras no se apruebe, la sección de Opiniones se deja con testimonios de ejemplo (no se inventan opiniones reales) y el footer aclara "Sitio en revisión — pendiente de aprobación final."

## Pendientes antes de publicar como sitio definitivo

- Foto real de Nacho (sesión del 5/11) — hoy hay un placeholder con sus iniciales, a propósito, para no mostrar la foto de otra persona con su nombre.
- Historia real de Nacho como jugador y profe (llega en audio) — hoy la bio es mínima, armada solo con datos confirmados.
- Usuario final de Instagram (se está creando).
- Confirmar la dirección exacta de Le Club Formosa — la actual (Freitas 768, Fontana) sale de geocodificar las coordenadas del mapa que pasó Guillermo, no es un dato escrito por Nacho.
- Testimonios reales de alumnos, con su permiso, para reemplazar los de ejemplo.
- Logo de la academia (lo va a pasar Nacho aparte).

## Contenido

Sitio estático de un solo archivo (`index.html`, sin build ni backend), con toda la data en `config.js`. Secciones: portada, clases, precios, sobre el profe, por qué NR Academia, novedades (lanzamiento del 7/11), opiniones, ubicación (mapa OpenStreetMap), horarios y footer.

## Deploy

HTML estático, publicado directo en GitHub Pages apuntando a la raíz del repo.
