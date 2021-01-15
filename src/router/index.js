import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import Disclaimer from '../views/Disclaimer.vue'
import projects from '../assets/database/projects'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects/:id',
    name: 'Project',
    component: Project,
    props: route => {
      return {
        project: projects[route.params.id]
      }
    }
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
