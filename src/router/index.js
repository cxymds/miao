import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './home.js'

Vue.use(VueRouter)

const routes = [...homeRouter]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
