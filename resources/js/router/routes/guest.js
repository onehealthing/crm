export default [
    {
        path: '/',
        name: 'login',
        meta: {
            auth: false
        },
        component: () => import(/* webpackChunkName: "js/page-login" */ '@/pages/guest/PageLogin'),
    },
];