import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/llm-proxy/',
  build: {
    outDir: '../../dist',
    emptyOutDir: true
  }
})