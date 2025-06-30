// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import path from 'path';

export default defineConfig({
  // Все ссылки на ассеты в index.html будут начинаться с этого префикса:
  base: '/static/assets/',
  plugins: [react()],
  build: {
    // Путь, куда складывать JS/CSS-файлы сборки:
    // из директории kraftveb-frontend переходим в ../kraftveb/static/assets
    outDir: path.resolve(process.cwd(), '../kraftveb/static/assets'),
    // Перед сборкой очищаем папку назначения
    emptyOutDir: true,
    // Отключаем вложенную папку (по умолчанию "assets"), т.к. уже в нужном каталоге
    assetsDir: ''
  }
});