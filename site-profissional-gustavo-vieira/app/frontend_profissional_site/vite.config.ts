import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'
// import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 8080,
    // https: {
    //   key: fs.readFileSync('./gusvioli.key'),
    //   cert: fs.readFileSync('./gusvioli.crt')
    // }
  }
})
