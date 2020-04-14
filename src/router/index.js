import Vue from 'vue'
import Router from 'vue-router'

// Containers

// Views
const Dashboard = () => import('@/views/Dashboard')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Dashboard,
    },

  ]
}

