import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'


const routes = [
  { path: '/', component: HomeView, name: "home" }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router