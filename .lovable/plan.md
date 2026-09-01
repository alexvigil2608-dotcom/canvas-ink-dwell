# Plan: Banner de consentimiento de cookies + Google Analytics 4

## Objetivo
Cumplir la normativa RGPD/LSSI-CE: ninguna cookie de analítica se instala hasta que el usuario acepte. Recomendación: Google Analytics 4 (estándar, gratuito).

## Qué se construye

### 1. Banner de consentimiento (componente `CookieConsent.tsx`)
- Barra inferior discreta, coherente con la estética minimalista de XTRATOS (fondo semitransparente, tipografía minimal).
- Botones: "Aceptar", "Rechazar" y enlace a `/politica-de-cookies`.
- La elección se guarda en `localStorage` (`cookie-consent: accepted | rejected`) y no vuelve a mostrarse.
- Enlace "Configurar" opcional para reabrir el banner desde el footer (cambiar la decisión).
- Solo se muestra en la primera visita o si no hay decisión guardada.

### 2. Google Analytics 4 con carga condicionada
- El script de GA4 **no se carga** hasta que el usuario pulse "Aceptar".
- Si rechaza, no se carga nada ni se envía dato alguno.
- Componente `Analytics.tsx` que escucha la decisión del consentimiento e inyecta el script dinámicamente.
- Se necesitará tu ID de medición de GA4 (formato `G-XXXXXXXXXX`). Se obtiene gratis en analytics.google.com creando una propiedad. Se dejará preparado con una variable para insertarlo.

### 3. Actualización de la política de cookies (`/politica-de-cookies`)
- Nueva sección describiendo las cookies de Google Analytics (`_ga`, `_ga_*`, duración, finalidad).
- Texto actualizado: ya no será "este sitio no usa cookies de analítica", sino que se explicará que solo se instalan tras el consentimiento.
- Instrucciones para retirar el consentimiento (enlace que reabre el banner).

### 4. Footer
- Se añade un enlace/botón "Configurar cookies" junto a los enlaces legales, que reabre el banner para cambiar la decisión.

## Detalles técnicos
- React + TypeScript, sin librerías externas (banner propio, ligero).
- Estado de consentimiento: `localStorage` + evento personalizado para sincronizar componentes.
- GA4 se inserta vía script dinámico (`gtag.js`) solo tras aceptar; compatible con la SPA de Vite.
- Todo el texto en español.

## Lo que necesito de ti
- Tu ID de medición de Google Analytics 4 (`G-XXXXXXXXXX`). Si aún no tienes cuenta, te explico cómo crearla en 5 minutos. También puedo dejar el código listo y añadir el ID después.
