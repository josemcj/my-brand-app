export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/pages/Home.vue'),
    },
    {
        path: '/casos-de-exito',
        name: 'successStories',
        component: () => import('@/views/pages/SuccessStories.vue'),
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/pages/admin/index.vue'),
    },
]
