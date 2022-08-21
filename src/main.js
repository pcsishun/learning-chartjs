import { createApp } from 'vue'
import App from './App.vue'
import VueWindowSize from 'vue-window-size';
import './index.css'

const app = createApp(App)
app.use(VueWindowSize)
createApp(App).mount('#app')
