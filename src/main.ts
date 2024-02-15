import { createApp } from 'vue'
import 'tailwindcss/tailwind.css'
import './style.css'
import App from './App.vue'
import Pinia from './plugins/pinia'
import ElementIcon from './plugins/element-icon'
import ElementPlus from './plugins/element-plus'

const app = createApp(App)
app.use(Pinia)
app.use(ElementIcon)
app.use(ElementPlus)
app.mount('#app')
