import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import FAQ from '../views/FAQView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ],
  scrollBehavior(to, from, savedPosition){
    return {
      top: 0
    }
    
  }
})

export default router
