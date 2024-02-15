import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementIcon from './plugins/element-icon'
import ElementPlus from './plugins/element-plus'

const app = createApp(App)
app.use(ElementIcon)
app.use(ElementPlus)
app.mount('#app')