import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/main'),
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            component: () => import('@/views/login')
        },
        {
            path: '/about',
            component: () => import('@/views/about'),
            meta: { requiresAuth: true }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.user.id) {
            next({
                path: '/login'
                // query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
