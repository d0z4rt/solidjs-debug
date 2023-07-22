import * as path from 'path'

import suidPlugin from '@suid/vite-plugin'
import { defineConfig, loadEnv } from 'vite'
import solid from 'vite-plugin-solid'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // TODO do not use hard coded PORT
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // server: { port: +env.PORT },
    server: { port: +env.PORT || 3000 },
    define: {
      __APP_VERSION__: JSON.stringify(env.APP_VERSION || '0.0.0-dev')
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@contexts': path.resolve(__dirname, './src/contexts'),
        '@entities': path.resolve(__dirname, './src/entities'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@i18n': path.resolve(__dirname, './src/i18n'),
        '@modules': path.resolve(__dirname, './src/modules'),
        '@utils': path.resolve(__dirname, './src/utils')
        // '@app/common': path.resolve(__dirname, './src/common'),
        // '@app/modules': path.resolve(__dirname, './src/modules')
      }
    },
    build: {
      outDir: 'dist'
    },
    plugins: [suidPlugin(), solid()],
    test: {
      deps: {
        registerNodeLoader: true
      },
      root: './',
      globals: true,
      environment: 'jsdom',
      setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect'],
      transformMode: { web: [/\.[jt]sx?$/] },
      coverage: {
        provider: 'v8',
        all: true,
        reportsDirectory: './coverage',
        reporter: ['text', 'html']
      }
      // you might want to disable it, if you don't have tests that rely on CSS
      // since parsing CSS is slow
      // css: true,
    }
  }
})
