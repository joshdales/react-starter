import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - this package doesn't have any types :(
import pxToRem from 'postcss-pxtorem'

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
})
