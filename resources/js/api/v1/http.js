import router from '@/router';
import store from '@/store';
import token from './token';
import axios from 'axios';

const http = axios.create({
    baseURL: '/api/v1/'
});

const initAuth = () => {
    http.defaults.headers.common = { 'Authorization': token.exists() ? `Bearer ${token.get()}` : '' };
};

const initInterceptors = () => {
    http.interceptors.response.use(
        res => res,
        async err => {
            const { status, config } = err.response;

            if (status === 401 && config && !config.__isRetryRequest) {
                await store.dispatch('auth/remove');
                await router.push({ name: 'login' });
            }

            return Promise.reject(err);
        }
    );
};

const isAuthExists = () => {
    return !!http.defaults.headers.common['Authorization'] && token.exists();
};

const setAuth = str => {
    return new Promise(resolve => {
        token.set(str);
        http.defaults.headers.common = { 'Authorization': `Bearer ${str}` };
        resolve();
    })
};

const removeAuth = () => {
    return new Promise(resolve => {
        token.remove();
        http.defaults.headers.common = { 'Authorization': '' };
        resolve();
    })
};

initAuth();
initInterceptors();

export {
    setAuth,
    removeAuth,
    isAuthExists
};

export default http;