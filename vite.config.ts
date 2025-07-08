import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/StolenThought.github.io/', // exactly like this
  plugins: [react()],
})
