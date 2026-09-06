# Proposal: Instagram social + hero banner editorial

## Intent

La clínica necesita presencia en Instagram visible con elegancia editorial (silent luxury), sin ensuciar la conversión principal. Sustituir el hero genérico por retrato profesional de la Dra. y añadir un único enlace social (Instagram) en footer y banner home.

Perfil: [instagram.com/dra.jessicatellechea](https://www.instagram.com/dra.jessicatellechea/)

## Scope

### In Scope
- Footer: sección social discreta con **solo Instagram** (icono + enlace accesible, 4 locales).
- Home hero: nuevas imágenes **19:9 desktop** y **4:3 mobile** (assets adjuntos / Downloads).
- Home hero: enlace Instagram editorial (texto o pill sutil), coherente con CTAs existentes.
- URL desde `PUBLIC_CLINIC_INSTAGRAM` (fallback al perfil oficial en build).
- CSS con tokens existentes; `motion-safe` y contraste sobre foto.

### Out of Scope
- Más redes (Facebook, TikTok, LinkedIn).
- Widget embed de Instagram.
- Cambios de copy médico/legal.
- Instagram en nav primario o booking flow.

## Capabilities

### New Capabilities
- `web-social-presence`: enlaces sociales de la práctica (footer global + affordance en home hero); v1 solo Instagram.

### Modified Capabilities
- None (implementación UI/copy; sin cambio de routing ni conversión).

## Approach

1. **Assets:** Copiar `home-banner-doctor-desktop.png` (19:9) y `home-banner-doctor-mobile.png` (4:3) a `public/images/home/` (o `src/assets/` con `<picture>` / media queries). Sustituir `background.webp` en `HomeHero.astro`.
2. **Hero layout:** `<picture>` o CSS `background-image` responsive; sujetos a la derecha → overlay y copy a la izquierda en desktop; ajustar `background-position` y overlay para legibilidad.
3. **Instagram URL:** Helper `resolveClinicInstagram()` leyendo `PUBLIC_CLINIC_INSTAGRAM`; fallback `https://www.instagram.com/dra.jessicatellechea/`.
4. **Hero link:** Tercera acción editorial bajo CTAs (p. ej. “Instagram” + icono Phosphor `ph-instagram-logo`), `target="_blank"` + `rel="noopener noreferrer"`.
5. **Footer:** `<nav aria-label="Social">` con un botón/enlace icono Instagram; estilos en `shell.css` alineados con `site-footer__credit` (tipografía pequeña, opacidad ~50–60%).
6. **i18n:** Labels accesibles Instagram en `es/en/ca/fr` (nombre visible puede ser “Instagram” en todos).

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `public/images/home/` | New | Banner desktop + mobile |
| `src/components/home/HomeHero.astro` | Modified | Picture, Instagram link |
| `src/layouts/BaseLayout.astro` | Modified | Footer social nav |
| `src/styles/components/home-marketing.css` | Modified | Hero responsive + Instagram affordance |
| `src/styles/components/shell.css` | Modified | Footer social styles |
| `src/i18n/` (nuevo helper o `legal-nav.ts`) | Modified | Labels a11y social |
| `.env.example` | Modified | URL Instagram real como ejemplo |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Texto ilegible sobre foto clara | Med | Overlay ajustable; probar desktop/mobile |
| PNG pesado vs WebP actual | Med | Optimizar o exportar WebP en apply |
| Footer saturado visualmente | Low | Un solo icono; spacing generoso |

## Rollback Plan

1. Restaurar `HomeHero.astro` + `background.webp`.
2. Quitar nav social del footer y CSS asociado.
3. Redeploy. Sin migración.

## Dependencies

- Assets en `Downloads` o adjuntos en sesión.
- `PUBLIC_CLINIC_INSTAGRAM` en producción (Cloudflare).

## Success Criteria

- [ ] Footer muestra enlace Instagram elegante en los 4 locales.
- [ ] Hero usa banner 19:9 (≥900px) y 4:3 (<900px).
- [ ] Enlace Instagram en hero abre perfil correcto en pestaña nueva.
- [ ] Estilo silent luxury coherente con tokens y CTAs actuales.
- [ ] `npm run check` y `npm run build` pasan.
