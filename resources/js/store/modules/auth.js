import http, { setAuth, removeAuth, isAuthExists } from '@/api/v1/http';
import token from '@/api/v1/token';

const state = {
    token: token.get(),
    user: {}
};

const getters = {
    exists: ({ token }) => !!token && isAuthExists(),
    user: ({ user }) => user
};

const actions = {
    login: ({ commit, dispatch }, credentials) => {
        return new Promise((resolve, reject) => {
            http.post('auth/login', credentials)
                .then(async ({ data }) => {
                    await setAuth(data.access_token);
                    await dispatch('user');
                    commit('setToken', data.access_token);
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    user: ({ commit }) => {
        return new Promise((resolve, reject) => {
            http.get('auth/user')
                .then(async ({ data }) => {
                    commit('setUser', data);
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    logout: ({ dispatch }) => {
        return new Promise((resolve, reject) => {
            http.post('auth/logout')
                .then(async () => {
                    await dispatch('remove');
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    remove: ({ commit }) => {
        return new Promise(async resolve => {
            await removeAuth();
            commit('removeToken');
            resolve();
        });
    },
};

const mutations = {
    setToken: (state, token) => state.token = token,
    setUser: (state, user) => state.user = user,
    removeToken: (state) => state.token = '',
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};