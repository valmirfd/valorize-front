<script>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { computed, defineComponent } from 'vue';
import { useAuthStore } from '@/stores/Auth';

export default defineComponent({

    name: 'Navbar',

    setup() {

        const route = useRoute();
        const router = useRouter();
        const authStore = useAuthStore();

        const currentUser = computed(() => authStore.getUser);
        const isSuperadmin = computed(() => authStore.isSuperadmin);

        const showNavbar = computed(() => {
            return !['/login', '/register'].includes(route.path);
        });

        const logout = () => {
            authStore.logout();
            router.replace('/login');
        };

        return {
            logout,
            showNavbar,
            currentUser,
            isSuperadmin,
        };

    }
});

</script>

<template>
    <nav v-if="showNavbar" class="navbar navbar-expand-lg bg-body-tertiary">

        <div class="container-fluid">

            <RouterLink class="navbar-brand" to="/">
                Gestão Membros
            </RouterLink>


            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/">
                            Home
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/churches">
                            Igrejas
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/members">
                            Membros
                        </RouterLink>
                    </li>

                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Ações
                        </router-link>


                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="#">Perfil</router-link></li>
                            <li><router-link class="dropdown-item" to="#">Another action</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><router-link class="dropdown-item" to="#">Sair</router-link></li>
                        </ul>
                    </li>

                </ul>
                <div class="d-flex">
                    <span v-if="currentUser" class="navbar-text p-0 pt-1 me-4">
                        <span class="badge bg-dark">
                            {{ currentUser.username }} - {{ currentUser.roles.join(', ') }}
                        </span>
                    </span>

                    <button class="btn btn-outline-danger" @click="logout">Sair</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>