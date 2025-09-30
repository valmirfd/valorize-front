<script>
import { RouterLink } from 'vue-router';
import RegisterApi from '@/services/api/RegisterApi';
import { toast } from 'vue3-toastify';
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ValidationErrors from '@/components/ValidationErrors.vue';



export default defineComponent({
    name: 'RegisterView',

    components: {
        ValidationErrors,
    },

    setup() {

        const router = useRouter();
        const route = useRoute();


        const user = ref({
            email: '',
            username: '',
            password: '',
            password_confirm: '',
        });


        const validationErrors = ref([]);


        const createUser = async () => {

            try {

                validationErrors.value = [];

                const api = new RegisterApi();

                const data = await api.create(user.value);

                toast.success(`Sucesso`, {
                    'theme': 'colored',
                    hideProgressBar: true,
                });

                setTimeout(() => {
                    router.push(`/`);
                }, 1000);


            } catch (error) {

                console.log(`Erro ao criar conta: ${error}`);

                if (error.response.status === 400 && error.response.data.messages) {
                    validationErrors.value = Object.values(error.response.data.messages);
                    return;
                }

                toast.error(`Erro ao criar conta: ${error}`, {
                    'theme': 'colored',
                    hideProgressBar: true,
                });
            }
        }


        return {
            user,
            createUser,
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
                        <h4 class="my-2">Criar conta</h4>
                    </div>
                    <div class="card-body">

                        <ValidationErrors :errors="validationErrors" />

                        <form @submit.prevent="createUser">

                            <div class="d-grid gap-2 col-6 mx-auto">

                                <div class="mb-2">
                                    <label for="email" class="form-label">Seu Email</label>
                                    <input type="email" class="form-control" id="email" v-model="user.email">
                                </div>

                                <div class="mb-2">
                                    <label for="username" class="form-label">Nome de usuário</label>
                                    <input type="text" class="form-control" id="username" v-model="user.username">
                                </div>

                                <div class="mb-2">
                                    <label for="password" class="form-label">Sua Senha</label>
                                    <input type="password" class="form-control" id="password" v-model="user.password">
                                </div>

                                <div class="mb-2">
                                    <label for="password_confirm" class="form-label">Confirme a Senha</label>
                                    <input type="password" class="form-control" id="password_confirm"
                                        v-model="user.password_confirm">
                                </div>



                                <button class="btn btn-primary btn-sm mt-3" type="submit">
                                    <i class="bi bi-box-arrow-in-right me-2"></i>Cadastrar
                                </button>

                                <RouterLink class="btn btn-link float-start" to="/login">
                                    Já tem uma conta?
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