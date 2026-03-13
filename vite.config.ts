import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

let base = process.env.REPO_NAME
if (base && !base.startsWith('/')) {
	base = `/${base}`
}

export default defineConfig({
	plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
	server: {
		port: 3000,
	},
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
			generateScopedName: '[name]__[local]',
		},
	},
	base,
})
