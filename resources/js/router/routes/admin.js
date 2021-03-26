export default [
    {
        path: '/admin/',
        name: 'admin',
        redirect: {
            name: 'admin.clients'
        },
        meta: {
            auth: {
                role: 'admin'
            }
        },
        component: () => import(/* webpackChunkName: "js/page-admin-view" */ '@/pages/admin/PageView'),
        children: [
            {
                path: 'clients',
                name: 'admin.clients',
                redirect: {
                    name: 'admin.clients.list'
                },
                component: () => import(/* webpackChunkName: "js/page-admin-clients-view" */ '@/pages/admin/clients/PageView'),
                children: [
                    {
                        path: '',
                        name: 'admin.clients.list',
                        component: () => import(/* webpackChunkName: "js/page-admin-clients-list" */ '@/pages/admin/clients/PageList'),
                    },
                    {
                        path: 'create',
                        name: 'admin.clients.create',
                        component: () => import(/* webpackChunkName: "js/page-admin-clients-create" */ '@/pages/admin/clients/PageCreate'),
                    },
                    {
                        path: ':id/edit',
                        name: 'admin.clients.edit',
                        component: () => import(/* webpackChunkName: "js/page-admin-clients-edit" */ '@/pages/admin/clients/PageEdit'),
                    }
                ]
            },
            {
                path: 'companies',
                name: 'admin.companies',
                redirect: {
                    name: 'admin.companies.list'
                },
                component: () => import(/* webpackChunkName: "js/page-admin-companies-view" */ '@/pages/admin/companies/PageView'),
                children: [
                    {
                        path: '',
                        name: 'admin.companies.list',
                        component: () => import(/* webpackChunkName: "js/page-admin-companies-list" */ '@/pages/admin/companies/PageList'),
                    },
                    {
                        path: 'create',
                        name: 'admin.companies.create',
                        component: () => import(/* webpackChunkName: "js/page-admin-companies-create" */ '@/pages/admin/companies/PageCreate'),
                    },
                    {
                        path: ':id/edit',
                        name: 'admin.companies.edit',
                        component: () => import(/* webpackChunkName: "js/page-admin-companies-edit" */ '@/pages/admin/companies/PageEdit'),
                    }
                ]
            },
        ]
    },
];