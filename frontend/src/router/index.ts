import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter);

const ifNotAuthenticated = (to: any, from: any, next: any) => {
    if (!store.getters.isAuthenticated) {
        next();
        return
    }

    next('/');
};

const ifAuthenticated = (to: any, from: any, next: any) => {
    if (store.getters.isAuthenticated) {
        next();
        return
    }

    next('/login');
};

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
        beforeEnter: ifNotAuthenticated,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
