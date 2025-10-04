import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve('C:/certificado/localhost+3-key.pem')),
      cert: fs.readFileSync(path.resolve('C:/certificado/localhost+3.pem')),
    },
    port: 3003,
    host: '0.0.0.0',
  },
})
