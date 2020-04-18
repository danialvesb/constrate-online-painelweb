import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login";

// Views
const Dashboard = () => import('../views/Dashboard')
const Works = () => import('../views/Works')
const NewWork = () => import('../views/StoreWork')
const StoreCategory = () => import('../views/StoreCategory')

const App = () => import('../App')

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'App',
      component: App,
      children: [
        {
          path: '/dashboard',
          name: 'Home',
          component: Dashboard
        },
        {
          path: '/servicos',
          name: 'Works',
          component: Works
        },
        {
          path: '/servicos/cadastrar',
          name: 'CreateWork',
          component: NewWork
        },
        {
          path: '/servicos/categorias',
          name: 'CreateWork',
          component: StoreCategory
        },
        {
          path: '/entrar',
          name: 'Login',
          component: Login
        },

      ]
    },


  ]
}

// { path: '/servicos/listar', component: Works},
// { path: '/servicos/cadastrar', component: WorkCreate},
// { path: '/servicos/editar/:id', component: WorkCreate},
// { path: '/servicos/visualizar/:id', component: ViewWorks},
//
// { path: '/servicos/categorias', component: Category }
