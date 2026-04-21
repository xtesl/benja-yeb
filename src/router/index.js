import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const routes = [
  { path: '/', component: HomeView, name: "home" },
    {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router


