import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH is set only in the GitHub Pages workflow; on Vercel it defaults
// to '/', which is what a root-served deployment needs.
const basePath = process.env.BASE_PATH || '/'

export default defineConfig({
  base: basePath,
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
})
