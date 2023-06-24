import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import pxToRem from 'postcss-pxtorem'

let base = process.env.REPO_NAME
if (base && !base.startsWith('/')) {
  base = `/${base}`
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[name]__[local]',
    },
    postcss: {
      plugins: [autoprefixer(), pxToRem({ propList: ['*'] })],
    },
  },
  base,
})
