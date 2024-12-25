import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import NoteComponent from '../components/NoteComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent,
      props: true,
    },
    {
      path: '/:id',
      name: 'note',
      component: NoteComponent,
      props: true,
    },
  ],
})

export default router
