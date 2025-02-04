import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // host: '127.0.0.1',
    // port: 3000,
    // open: true,
    // // 允许跨域
    // cors: true,
    proxy: {
      '/walker': {
        target: 'http://127.0.0.1:8000',
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/walker/, '')
      },
    },
  }
})
