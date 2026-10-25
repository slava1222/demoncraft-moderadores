---
title: Comandos
description: Todos los comandos de un moderador de DemonCraft (/mod, /espectador y /gamemode), con lo que hace cada uno y lo que hay que tener en cuenta.
---

# Comandos

Todo lo de esta página también se puede hacer con botones desde la [ventana](ventana.md). **`/mod`** y **`/moderacion`**
son lo mismo: `/mod banear …` es igual que `/moderacion banear …`. Al pulsar ++tab++ te sugiere los nombres de los
conectados.

## Sanciones

| Comando | Qué hace | Ten en cuenta |
|---|---|---|
| `/mod avisar <jugador> <motivo>` | Un aviso formal: le llega en el chat y en pantalla, con sonido | El motivo es obligatorio. **Tres avisos en 7 días** le silencian 1 hora automáticamente |
| `/mod borraravisos <jugador>` | Borra sus avisos | Solo si **todos** son tuyos |
| `/mod silenciar <jugador> [duración] [motivo]` | No puede escribir en el chat, el chat de clan, los privados, `/me` ni `/say`. Se anuncia a todos | Como mucho **30 días**, nunca para siempre. **No silencia el chat de voz** |
| `/mod quitarsilencio <jugador>` | Puede volver a escribir | Los silencios que pusiste tú y los automáticos |
| `/mod expulsar <jugador> [motivo]` | Le echa del servidor con un mensaje (puede volver a entrar). Se anuncia a todos | Solo si está conectado |
| `/mod banear <jugador> [duración] [motivo]` | No puede entrar hasta que se cumpla. Se anuncia a todos y, si está dentro, le echa | Como mucho **30 días**, nunca para siempre. Si ya lo baneó otro, no puedes cambiar ese baneo |
| `/mod desbanear <jugador>` | Levanta un baneo | Solo los que pusiste tú |

**Duraciones**: `30m` (minutos), `2h` (horas), `7d` (días) o `45s` (segundos); un número solo son minutos. **Sin
duración, 1 hora.**

**Motivo**: escríbelo siempre. Lo ve el jugador, sale en el anuncio y queda en el historial. Si no pones ninguno, saldrá
«Incumplir las normas del servidor». Al silenciar o banear, **el motivo va detrás de la duración**: sin duración delante,
no se entiende.

```text title="Ejemplos"
/mod avisar Kaito22 Insultar en el chat
/mod silenciar Kaito22 2h Insultos después de un aviso
/mod banear Kaito22 7d Usar un programa de trampas (vuelo)
```

## Revisar y moverte

| Comando | Qué hace | Ten en cuenta |
|---|---|---|
| `/mod congelar <jugador>` | No se mueve, no pega, no recibe daño ni usa nada; solo puede hablar | Solo si está conectado. **Si se desconecta, deja de estar congelado** (te llega un aviso), y también al reiniciar el servidor |
| `/mod descongelar <jugador>` | Le suelta | |
| `/mod ir <jugador>` | Te lleva a su lado | Solo si está conectado |
| `/mod traer <jugador>` | Le trae a tu lado (si estaba congelado, sigue congelado ahí) | Solo si está conectado. **Tú, pisando suelo**: ni volando ni en espectador, para que no aparezca en el aire ni dentro de una pared |

## Tu modo de juego

| Comando | Qué hace | Ten en cuenta |
|---|---|---|
| `/espectador` | Te pone en espectador para mirar sin que te vean. Otra vez, vuelves al mismo sitio y modo | Queda en el historial |
| `/gamemode spectator` | Te pone en espectador, como `/espectador` | Para volver: `/espectador` otra vez o `/gamemode survival` |
| `/gamemode creative` | El **creativo vigilado**: vuelas y nadie te hace daño, pero no sacas nada del creativo ni coges, colocas o abres cofres. Tu inventario se guarda | Te ven: para que no te vean, el espectador. [Sus límites](limites.md#en-creativo) |
| `/gamemode survival` | Vuelves a supervivencia: del creativo, con tu inventario entero; del espectador, al sitio donde estabas | Siempre se puede |

- **Solo a ti mismo** y solo esos tres modos (también en castellano: `creativo`, `espectador`, `supervivencia`). Con el
  nombre de otro sale *«Solo puedes cambiar tu propio modo de juego»*.
- **Con botones**: abre `/mod` y, antes de elegir a nadie, abajo a la derecha está **Tu modo de juego**
  ([ver](ventana.md#tu-modo-de-juego)).
- **Cuándo no**: para pasar a creativo o a espectador no puedes estar en un duelo, en una escena ni en plena pelea, ni
  tener las herramientas [suspendidas](limites.md#el-freno). Volver a supervivencia se puede siempre.
- Si el chat no te lo sugiere al escribirlo, escríbelo entero y pulsa ++enter++: funciona igual.
- Cada cambio de modo queda en el historial y lo ve el resto del staff.

**¿Para qué el creativo?** Para **seguir de cerca** a alguien (si vuela con trampas, si se cuela donde no debe) y para
**moverte deprisa** por el mapa sin que nadie te pueda pegar. Para lo demás (hablar por privado, comprar, viajar, tu
casa…), vuelve a supervivencia.

## Inventario y depósito

| Comando | Qué hace | Ten en cuenta |
|---|---|---|
| `/mod inventario <jugador>` | Ves su inventario. Un clic en un objeto se lo retira a su **depósito** | Desconectado, sin iniciar sesión o en un duelo: solo mirar. Su katana y los objetos de misión no se retiran |
| `/mod ender <jugador>` | Lo mismo con su cofre de ender | |
| `/mod deposito <jugador>` | Lo que se le ha retirado, con su número | |
| `/mod devolver <jugador> [número o todo]` | Se lo devuelve: a su inventario o, si no cabe o no está, a su buzón del Mercado | Sin número, todo |

Más sobre el inventario y el depósito en [La ventana](ventana.md#su-inventario-y-su-deposito).

## Chat

| Comando | Qué hace | Ten en cuenta |
|---|---|---|
| `/mod limpiarchat` | Limpia el chat de todos | |
| `/mod modolento <segundos>` | Cada jugador puede escribir un mensaje cada tantos segundos (`0` lo quita; como mucho 600) | Al staff no le afecta, ni a los privados |
| `/mod cerrarchat` | Cierra el chat público | El staff sigue hablando y los privados siguen funcionando |
| `/mod abrirchat` | Lo abre otra vez | |
| `/mod anuncio <texto>` | Una línea roja «⚠ MODERACIÓN» para todos, con sonido | Admite colores con `&` (`&c` rojo, `&e` amarillo…) |

## Reportes

| Comando | Qué hace | Ten en cuenta |
|---|---|---|
| `/mod reportes` | Los 15 reportes abiertos más recientes | También en la pestaña Reportes |
| `/mod reporte <número> cerrar [nota]` | Cierra un reporte | A quien lo hizo le llega un aviso. Pon una nota con lo que hiciste |

## Lo tuyo

| Comando | Qué hace |
|---|---|
| `/mod topes` | Tus [topes](limites.md#tus-topes) y lo que llevas gastado (también sale arriba en la ventana) |

## Lo que es de los administradores

Para que sepas que existe y a quién pedírselo:

- Los baneos y silencios **para siempre** o de más de 30 días.
- Cambiar o levantar lo que ha puesto **otro** miembro del staff.
- Sancionar a un moderador y levantar la [suspensión](limites.md#el-freno) de uno.
- Sacar del depósito algo que no se pueda devolver (eso, el dueño).

Si un administrador te da algún permiso más, te explicará cómo se usa.
