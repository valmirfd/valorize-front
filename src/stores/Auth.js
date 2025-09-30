import { defineStore } from 'pinia';
import { BASE_URL } from '@/services/api/config';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {

    state: () => ({
        token: localStorage.getItem('token'),
        user: null,
        loadingUser: false,
    }),

    getters: {
        getUser: (state) => state.user,
        getToken: (state) => state.token,
        isSuperadmin: (state) => state.user && state.user.roles.includes('superadmin')
    },

    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
            this.fetchUser();
        },

        async fetchUser(router) {

            if (!this.token) {
                return;
            }

            this.loadingUser = true;

            try {
                const response = await axios.get(`${BASE_URL}/users/user`, {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                    }
                });
                this.user = response.data;
            } catch (error) {
                console.error('Erro ao obter os dados do usuário: ', error);
                this.clearToken();
                if (error.response && error.response.status === 401) {
                    router.push('/login');
                }
            } finally {
                this.loadingUser = false;
            }
        },

        clearToken() {
            localStorage.removeItem('token');
            this.token = null;
        },

        logout() {
            this.clearToken();
            this.user = null;
        },


    }
});