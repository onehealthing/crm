export default [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        meta: {
            auth: undefined
        },
        component: () => import(/* webpackChunkName: "js/page-base-not-found" */ '@/pages/base/PageNotFound'),
    },
];