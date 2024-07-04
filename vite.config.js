import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.zip'],
  build: {
    rollupOptions: {
      input: './public/index.html', // Certifique-se de que o caminho está correto
    },
  },
  base: "/macklib"
})
