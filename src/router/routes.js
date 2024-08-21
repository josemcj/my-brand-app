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
]
