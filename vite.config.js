import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'javascript-obfuscator'

function viteObfuscatorPlugin() {
  return {
    name: 'obfuscator',
    apply: 'build',
    enforce: 'post',
    renderChunk(code, chunk) {
      if (!chunk.fileName.endsWith('.js')) return null
      if (chunk.fileName.includes('node_modules')) return null

      const obfuscated = obfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        stringArray: true,
        stringArrayThreshold: 0.8,
        stringArrayEncoding: ['base64'],
        stringArrayIndexShift: true,
        stringArrayRotate: true,
        stringArrayShuffle: true,
        transformObjectKeys: true,
        selfDefending: true,
        disableConsoleOutput: true,
        renameGlobals: false,
        reservedNames: ['^React', '^react'],
      })

      return {
        code: obfuscated.getObfuscatedCode(),
        map: null,
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    viteObfuscatorPlugin(),
  ],

  base: '/tef/', // important for GitHub Pages

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // works only locally
        changeOrigin: true,
      },
    },
  },

  build: {
    minify: 'esbuild',
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
  },
})
