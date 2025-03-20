import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    svgr(),
    //   {
    //   svgrOptions: {
    //     exportType: 'default',
    //     ref: true,
    //     svgo: false,
    //     titleProp: true,
    //   },
    //   include: '**/*.svg',
    // }
  ],
  base: '/',
  server: {
    port: 3000,
  },
})
