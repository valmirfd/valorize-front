<script>
import { RouterLink } from 'vue-router';
import LoginApi from '@/services/api/LoginApi';
import { toast } from 'vue3-toastify';
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ValidationErrors from '@/components/ValidationErrors.vue';
import { useAuthStore } from '@/stores/Auth';


export default defineComponent({
    name: 'LoginView',

    components: {
        ValidationErrors,
    },

    setup() {

        const router = useRouter();
        const route = useRoute();


        const credentials = ref({
            email: '',
            password: '',
        });

        const validationErrors = ref([]);

        const authStore = useAuthStore();

        const createLogin = async () => {

            try {

                validationErrors.value = [];

                const api = new LoginApi();

                const data = await api.create(credentials.value);

                authStore.setToken(data.access_token);

                toast.success(`Sucesso`, {
                    'theme': 'colored',
                    hideProgressBar: true,
                });               

                setTimeout(() => {
                    router.push(`/`);
                }, 1000);


            } catch (error) {

                console.log(`Erro ao fazer login: ${error}`);

                if (error.response.status === 400 && error.response.data.messages) {
                    validationErrors.value = Object.values(error.response.data.messages);
                    return;
                }

                toast.error(`Erro ao fazer login: ${error}`, {
                    'theme': 'colored',
                    hideProgressBar: true,
                });
            }
        }

        
        return {
            credentials,
            createLogin,
            validationErrors,
        }
    }

});

</script>

<template>

    <div class="container-fluid mb-2 mt-4">

        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-lg">
                    <div class="card-header">
                        <h4 class="my-2">Fazer login</h4>
                    </div>
                    <div class="card-body">

                        <ValidationErrors :errors="validationErrors" />

                        <form @submit.prevent="createLogin">

                            <div class="d-grid gap-2 col-6 mx-auto">

                                <div class="mb-2">
                                    <label for="email" class="form-label">Seu Email</label>
                                    <input type="email" class="form-control" id="email" v-model="credentials.email">
                                </div>

                                <div class="mb-2">
                                    <label for="password" class="form-label">Sua Senha</label>
                                    <input type="password" class="form-control" id="password"
                                        v-model="credentials.password">
                                </div>



                                <button class="btn btn-success btn-sm mt-3" type="submit">
                                    <i class="bi bi-box-arrow-in-right me-2"></i>Entrar
                                </button>

                                <RouterLink class="btn btn-link btn-sm float-start" to="/register">
                                    Ainda não tem conta?
                                </RouterLink>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped></style>