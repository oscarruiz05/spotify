import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Release.vue')
    },
    {
      path: '/album/:id',
      name: 'almum',
      component: () => import('@/views/Album.vue')
    },
    {
      path: '/about-artist/:id',
      name: 'about',
      component: () => import('@/views/AboutArtist.vue')
    },
  ]
})

export default router
