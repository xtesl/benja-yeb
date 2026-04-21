import { createApp } from 'vue'
import router from './router'
import './style.css'
import 'primeicons/primeicons.css'
import { scrollReveal } from './directives/scrollReveal'
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.directive('scroll-reveal', scrollReveal)
app.mount('#app')
