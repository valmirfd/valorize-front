export const churchesRoutes = [
    {
        path: '/churches',
        name: 'ListChurches',
        component: () => import('@/views/churches/ListView.vue'),
        meta: {
            requireAuth: true,
            isSuperAdmin: true,
        }
    },
];
