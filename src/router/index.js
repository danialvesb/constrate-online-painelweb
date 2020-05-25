import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Signup from "../views/Signup";
import Profile from "../views/Profile";
import { isAuth } from '../helpers/isAuth'

const Dashboard = () => import('../views/Dashboard')
const Works = () => import('../views/Works')
const NewWork = () => import('../views/StoreWork')
const StoreCategory = () => import('../views/StoreCategory')

const App = () => import('../App')

Vue.use(VueRouter)

const router =  new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: configRoutes()
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && to.name !== 'Signup' &&  !isAuth()) next({ name: 'Login' })
    next()
})

export default router

function configRoutes() {
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
                    name: 'CategoriesWorks',
                    component: StoreCategory
                },
                {
                    path: '/entrar',
                    name: 'Login',
                    component: Login
                },
                {
                    path: '/signup',
                    name: 'Signup',
                    component: Signup
                },
                {
                    path: '/usuario/perfil',
                    name: 'Profile',
                    component: Profile
                },
            ]
        },
    ]
}
