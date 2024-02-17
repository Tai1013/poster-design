import { createApp } from 'vue'
import 'tailwindcss/tailwind.css'
import App from './App.vue'
import Router from './router'
import Pinia from './plugins/pinia'
import ElementIcon from './plugins/element-icon'
import ElementPlus from './plugins/element-plus'

import "./assets/scss/main.scss"

const app = createApp(App)
app.use(Pinia)
app.use(Router)
app.use(ElementIcon)
app.use(ElementPlus)
app.mount('#app')
