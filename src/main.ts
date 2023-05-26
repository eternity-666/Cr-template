import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import routes from 'virtual:generated-pages'

import './styles/main.css'
import App from './App.vue'
import 'uno.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

app.use(router)
app.mount('#app')
