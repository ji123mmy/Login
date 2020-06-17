import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@views/Login.vue'
import Dashboard from '@components/dashboard.vue'
import Products from '@components/Products.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/admin',
        name: 'dashboard',
        component: Dashboard,
        children: [{
            path: 'products',
            name: 'products',
            component: Products,
            meta: { requiresAuth: true },
        }]
    }
]

const router = new VueRouter({
    // mode:'history',
    routes
})

export default router