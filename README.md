# Guía de moderadores de DemonCraft

La guía para el equipo de moderación de **DemonCraft**: qué puede hacer un moderador, todos sus comandos, sus límites
y cómo actuar en cada caso.

**Léela aquí: https://slava1222.github.io/demoncraft-moderadores/**

- Guía de jugadores: https://slava1222.github.io/demoncraft-guia/
- Discord: https://discord.gg/mdwAvAMBvr

---

## Para quien la mantiene

La web se genera con [MkDocs](https://www.mkdocs.org/) y el tema
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), con el mismo aspecto que la guía de jugadores. El
código está en `main` y la web publicada, en la rama `gh-pages`.

Es **pública**: no pongas aquí nada de la administración (permisos, seguridad, la configuración ni el hosting).

### Verla en tu ordenador antes de subirla

```bash
pip install "mkdocs==1.6.1" "mkdocs-material==9.7.7" "mkdocs-glightbox==0.5.2"
mkdocs serve
```

Y abre http://127.0.0.1:8000/demoncraft-moderadores/. Los cambios se ven al guardar.

### Publicarla

```bash
mkdocs build --strict
git push
mkdocs gh-deploy
```
