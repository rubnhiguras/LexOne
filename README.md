# LexOne

Portal de consultas legales (Ionic + Angular standalone), con dos zonas:

- **Cliente** (`/cliente`): tabs Master · Query · FAQ
- **Interno** (`/interno`): tabs Dashboard · Queries (con detalle de cada query)

Configurado como **PWA instalable**: al abrirla en el navegador (Chrome/Edge)
en local, aparecerá la opción "Instalar app" / "Añadir a pantalla de inicio".

## Cómo abrir en Visual Studio Code

1. Descomprime el archivo `lexone.zip`.
2. Abre la carpeta `lexone` en VS Code (`File > Open Folder...`).
3. Abre una terminal integrada (`` Ctrl+ñ `` o `Terminal > New Terminal`).
4. Instala dependencias:
   ```bash
   npm install
   ```
   (Recomendado: tener instalado Ionic CLI globalmente)
   ```bash
   npm install -g @ionic/cli
   ```
5. Arranca el servidor de desarrollo:
   ```bash
   ionic serve
   ```
   o, sin Ionic CLI:
   ```bash
   npm start
   ```
6. Se abrirá en `http://localhost:8100` (o el puerto de `ng serve`).
   Desde el navegador, usa el icono de instalar en la barra de direcciones
   (o el menú del navegador) para añadirla como app en tu sistema.

## Build de producción (con Service Worker activo)

```bash
npm run build
```
Sirve la carpeta `www/` con cualquier servidor estático (el service worker
solo se activa fuera de `localhost` con `ng serve`, o al servir el build
de producción).

## Pendientes / próximos pasos

- Añadir `icon-192.png` e `icon-512.png` reales en `src/assets/icon/`.
- Conectar `chat-query` y `query-detail` a un backend real (hoy usan datos
  de ejemplo en memoria).
- Añadir autenticación real en `auth/login` (hoy es solo un selector
  Cliente / Interno).
- Opcional: ejecutar `npx cap add android` / `npx cap add ios` si más
  adelante quieres empaquetarla como app nativa con Capacitor.
