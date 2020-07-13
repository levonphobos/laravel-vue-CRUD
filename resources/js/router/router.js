import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Register from "../views/Register";
import Employees from "../views/Employees";
import CreateEmployee from "../views/CreateEmployee";
import CurrentEmployee from "../views/CurrentEmployee";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Dashboard,
        name: 'dashboard',
        meta: {requiresAuth: false}
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {requiresAuth: false}
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {requiresAuth: false}
    },
    {
        path: '/employees',
        component: Employees,
        name: 'employees',
        meta: {requiresAuth: false}
    },
    {
        path: '/employees/create',
        component: CreateEmployee,
        name: 'employees/create',
        meta: {requiresAuth: true}
    },
    {
        path: '/employees/:id',
        component: CurrentEmployee,
        name: 'employees/:id',
        meta: {requiresAuth: true}
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('token');
        if (token) {
            next();
        } else {
            next({path: '/login',
                query: {
                    nextUrl: to.fullPath,
                }});
        }
        next()
    }
    next()
})
