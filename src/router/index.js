import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
    components: {
        default : () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        aside : () => import(/* webpackChunkName: "aside" */ '../views/Rightcol.vue'),

    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    components: {
      default : () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      aside : () => import(/* webpackChunkName: "aside" */ '../views/Rightcol.vue'),

    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
