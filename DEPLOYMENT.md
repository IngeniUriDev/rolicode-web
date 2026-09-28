# Guía de Despliegue - RoliCode Web

Este documento detalla las opciones para desplegar la aplicación web de **RoliCode** en producción con dominio personalizado (ej. `rolicode.com.mx`).

---

## 1. Verificación Previa Local

Antes de desplegar, verifica que el proyecto compile sin advertencias ni errores:

```bash
npm run lint
npm run build
```

El resultado de la compilación se generará en la carpeta `dist/`.

---

## 2. Opciones de Despliegue

### Opción A: Vercel (Recomendada para Frontend Rápido y CDN Global)
1. Instala el CLI de Vercel (opcional) o conecta tu repositorio de GitHub directamente en [vercel.com](https://vercel.com).
2. El archivo [`vercel.json`](file:///home/urielrg/IdeaProjects/rolicode-web/vercel.json) ya está configurado para manejar el enrutamiento SPA sin errores 404.
3. Configuración en Vercel Dashboard:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Añade tu dominio `rolicode.com.mx` en la sección *Domains* y configura los registros DNS tipo CNAME o A que te indique Vercel.

---

### Opción B: Netlify
1. Conecta tu repositorio en [netlify.com](https://netlify.com).
2. El archivo [`public/_redirects`](file:///home/urielrg/IdeaProjects/rolicode-web/public/_redirects) asegura el enrutamiento correcto.
3. **Build Command:** `npm run build`
4. **Publish directory:** `dist`

---

### Opción C: VPS / Servidor Propio con Docker
Si dispones de un servidor VPS (Ubuntu, Debian, etc.):

1. Construir la imagen Docker:
   ```bash
   docker build -t rolicode-web:latest .
   ```
2. Ejecutar el contenedor en el puerto 80 (o mapearlo con Nginx Proxy Manager / Traefik / Certbot SSL):
   ```bash
   docker run -d --name rolicode-web -p 80:80 --restart unless-stopped rolicode-web:latest
   ```

---

### Opción D: Servidor Apache o Nginx existente
1. Ejecuta:
   ```bash
   npm run build
   ```
2. Copia todo el contenido de la carpeta `dist/` a tu directorio raíz web (por ejemplo `/var/www/rolicode-web` o `/var/www/html`).
3. Asegúrate de configurar Nginx con el bloque provisto en [`nginx.conf`](file:///home/urielrg/IdeaProjects/rolicode-web/nginx.conf) para que cualquier ruta redirija a `index.html`.

---

## 3. Cómo Agregar y Gestionar Nuevos Proyectos

Hay dos formas de agregar nuevos proyectos a tu página:

### Modo 1: En Vivo desde la Web (Para pruebas inmediatas)
- En la sección **Proyectos**, haz clic en el botón **"+ Generar / Agregar Proyecto"**.
- Completa el formulario y se agregará inmediatamente a tu portafolio en vivo (se almacena localmente). Además, genera el código fuente exacto para copiar y pegar.

### Modo 2: Permanente en Código Fuente
- Abre el archivo [`src/data/projectsData.js`](file:///home/urielrg/IdeaProjects/rolicode-web/src/data/projectsData.js).
- Agrega un nuevo objeto al arreglo `INITIAL_PROJECTS` con la información de tu proyecto (título, descripción, enlaces de demo, tecnologías y métricas).
- Ejecuta `npm run build` y despliega.
