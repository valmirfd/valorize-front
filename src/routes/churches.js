export const churchesRoutes = [
    {
        path: '/churches',
        name: 'ListChurches',
        component: () => import('@/views/churches/ListView.vue'),
    },

    {
        path: '/churches/show/:id',
        name: 'ShowChurchView',
        component: () => import('@/views/churches/ShowView.vue'),
    },

    {
        path: '/churches/update/:id',
        name: 'EditChurchView',
        component: () => import('@/views/churches/ShowView.vue'),
    },
];
