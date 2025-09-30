export const churchesRoutes = [
    {
        path: '/churches',
        name: 'ListChurches',
        component: () => import('@/views/churches/ListView.vue'),
    },
];
