import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import ContainerVue from '@/views/demo/Container.vue'
import LayoutDemoVue from '@/views/demo/LayoutDemo.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'demo/usebreakpoint',
          name: 'UseBreadkPonts',
          component: () => import('@/views/demo/UseBreakpoints.vue')
        },
        {
          path: 'demo/container',
          name: 'container',
          component: ContainerVue
        },
        {
          path: 'demo/layout',
          name: 'layout',
          component: LayoutDemoVue
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
