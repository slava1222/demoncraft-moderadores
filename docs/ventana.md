---
title: La ventana de moderación
description: La ventana de moderación de DemonCraft (/mod): sus cinco pestañas, la ficha de un jugador, su inventario y el depósito.
---

# La ventana de moderación

Escribe **`/mod`** (o `/moderacion`) sin nada más. Arriba ves tu papel (**Moderador**), cuántos jugadores hay conectados,
cuántas sanciones están en vigor y cómo está el chat. Con ++left++ y ++right++ cambias de pestaña y con ++esc++ la
cierras.

La ventana tiene cinco pestañas: **Jugadores**, **Sanciones**, **Reportes**, **Historial** y **Chat**.

## Jugadores

Un buscador y la **ficha** del jugador que elijas: rango, bando, clan, ping, horas jugadas, avisos, si está silenciado y
si está congelado. Debajo, todos los botones.

<figure markdown="span">
  ![Ventana de moderación con la ficha de un jugador](assets/img/capturas/moderacion-ficha.webp){ width="760" loading=lazy }
  <figcaption>La ficha de un jugador con sus botones (en esta captura la ventana la abre el dueño; en la tuya pone «Moderador»).</figcaption>
</figure>

- **Alguien que no está conectado**: escribe su nombre completo en la búsqueda y pulsa ++enter++. Así puedes banearle,
  levantar su baneo o mirar su inventario aunque no esté.
- **Silenciar** y **Banear**: eliges la duración (10 min, 1 h, 6 h, 1 d, 7 d o 30 d) y escribes el motivo, que se le
  muestra al jugador. Si ya está silenciado, en vez de Silenciar sale el botón para quitarle el silencio.
- **Expulsar** (solo si está conectado): escribes el motivo.
- **Avisar**: un aviso formal, siempre con motivo. Tres avisos en una semana le silencian una hora automáticamente.
- **Congelar**: no se mueve, no pega, no recibe daño ni usa nada; solo puede hablar.
- **Ir hasta él** y **Traerlo aquí**.
- **Borrar sus avisos** y **Su historial** (sus sanciones y avisos anteriores: míralo antes de sancionar).
- **Ver inventario** y **Cofre de ender** ([abajo](#su-inventario-y-su-deposito)).

## Sanciones

Los baneos y silencios en vigor, con el botón **Levantar**. Solo puedes levantar los que pusiste tú (y los silencios
automáticos por avisos, que no son de nadie).

## Reportes

Los reportes abiertos que han hecho los jugadores, con **Ir** (te lleva junto a quien han reportado) y **Cerrar**. Al
cerrarlo, a quien lo hizo le llega un aviso.

<figure markdown="span">
  ![Formulario de reporte de los jugadores](assets/img/capturas/reporte.webp){ width="560" loading=lazy }
  <figcaption>Así reportan los jugadores (con /report o /reportar): a quién, el motivo y, si quieren, los detalles.</figcaption>
</figure>

Los motivos que pueden elegir son: insultos o acoso, trampas o hacks, griefing o robo, spam o publicidad, abuso de un fallo
u otro motivo. Cada jugador puede mandar un reporte por minuto (seis por hora).

## Historial

Las últimas 80 acciones del staff: quién hizo qué, a quién y por qué. Todo lo que haces sale aquí.

## Chat

<figure markdown="span">
  ![Pestaña Chat de la ventana de moderación](assets/img/capturas/moderacion-chat.webp){ width="760" loading=lazy }
  <figcaption>Limpiar o cerrar el chat, el modo lento y los anuncios.</figcaption>
</figure>

- **Limpiar el chat** de todos.
- **Cerrar el chat** público (el staff sigue pudiendo hablar y los privados siguen funcionando) y volver a abrirlo.
- **Modo lento**: un mensaje cada 5, 10, 30 o 60 segundos (Off lo quita). Al staff no le afecta.
- **Anuncio**: una línea roja «⚠ MODERACIÓN» para todo el servidor, con sonido.

## Su inventario y su depósito

**Ver inventario** (o `/mod inventario <jugador>`) abre lo que lleva en un cofre; **Cofre de ender**, lo de su cofre de
ender.

- **Un clic en un objeto se lo retira** y lo guarda en su **depósito**, nunca en tu inventario. Nadie se queda con nada.
- **Solo mirar** si está desconectado (ves lo de su último guardado), si aún no ha iniciado sesión o si está en un duelo.
- **No se retira** lo que va con su historia: su katana y los objetos de misión (tampoco una mochila o caja que los
  lleve dentro). Eso solo lo puede tocar el dueño.
- **El depósito**: el botón de abajo a la derecha de esa vista (o `/mod deposito <jugador>`) enseña lo que se le ha
  retirado. **Un clic se lo devuelve**: a su inventario o, si no cabe o no está conectado, a su buzón del Mercado. Con
  `/mod devolver <jugador>` se le devuelve todo.

!!! warning "Retirar no es castigar"
    Retira algo solo si no debería tenerlo (por ejemplo, algo conseguido con un fallo del servidor) y avisa a un
    administrador de lo que has visto. Si te equivocas, devuélveselo.
