import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import store from '@/store';

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});

router.beforeEach(async to => {

    const isAuthUndefined = typeof to.meta.auth === 'undefined';
    const isAuthExists = store.getters['auth/exists'];
    const wantsAuth = to.matched.some(r => r.meta.auth);

    if (isAuthUndefined) {
        return true;
    }

    if (wantsAuth && !isAuthExists) {
        return {
            name: 'login'
        }
    }

    if (!wantsAuth && isAuthExists) {
        await store.dispatch('auth/user');
        const user = store.getters['auth/user'];

        if (user) {
            return {
                name: 'admin'
            }
        }

        return {
            name: '404'
        };
    }

});

export default router;