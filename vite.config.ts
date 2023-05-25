
///<reference types="vitest"  />

import { defineConfig } from 'vite'
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import UnoCss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '~/': `${path.resolve(__dirname, 'src')}/}`
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [

    UnoCss(),


    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),

    Pages(),


    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),



    Components({
      dts: true,
    }),

  ],

  "test":{
    environment: 'jsdom'
  }
})
