import { createApp } from 'vue'
import installElementPlus from './plugins/element'
import './style/index.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
