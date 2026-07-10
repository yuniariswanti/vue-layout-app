import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/portfolio', component: Portfolio },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
