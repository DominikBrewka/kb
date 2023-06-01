// vite.config.js
/** @type {import('vite').UserConfig} */

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default {
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            rodzaje: resolve(__dirname, 'rodzaje.html'),
            personalizacja: resolve(__dirname, 'personalizacja.html'),
            extra: resolve(__dirname, 'extra.html'),
          },
        },
      },
    // config options
    server: {
        port: 3000
    }
}