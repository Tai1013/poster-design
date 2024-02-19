import { createApp } from 'vue'
import 'tailwindcss/tailwind.css'
import App from './App.vue'
import Router from './router'
import Pinia from './plugins/pinia'
import ElementPlus from './plugins/element-plus'
import DirectiveBlur from "./directives/blur"

import "./assets/scss/main.scss"

const app = createApp(App)
app.use(DirectiveBlur)
app.use(Pinia)
app.use(Router)
app.use(ElementPlus)
app.mount('#app')
