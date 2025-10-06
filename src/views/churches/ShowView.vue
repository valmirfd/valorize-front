<script>

import { RouterLink } from "vue-router";
import { toast } from "vue3-toastify";
import { defineComponent, ref, onMounted } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { useRouter, useRoute } from 'vue-router';
import ChurchesApi from "@/services/api/ChurchesApi";

export default defineComponent({
    name: 'ShowView',

    components: {
        LoadingSpinner,
    },

    setup() {

        const router = useRouter();
        const route = useRoute();

        const isLoading = ref(true);
        const church = ref({
            user_id: '',
            address_id: '',
            nome: '',
            telefone: '',
            cnpj: '',
            code: '',
            situacao: '',
            superintendente_id: '',
            titular_id: '',
            is_sede: '',
            ativo: '',
            address: '',
            images: ref([]),
        });

        const fetchChurch = async () => {

            try {

                const api = new ChurchesApi();
                const data = await api.get(`/churches/show/${route.params.id}`);

                church.value = data[0];

                isLoading.value = false;

            } catch (error) {

                if (error.response && error.response.status !== 401) {
                    toast.error(`Erro ao recuperar os dados: ${error}`, {
                        'theme': 'colored',
                        hideProgressBar: true,
                    });
                }

                console.log(`Erro ao recuperar os dados: ${error}`);
            }

        }

        onMounted(fetchChurch);

        return {
            church,
            isLoading
        }

    }
});

</script>

<template>
    <div class="container-fluid mt-4 mb-4">
        <div class="card shadow-lg">
            <div class="card-header d-inline-flex justify-content-between">
                <h5 class="text-muted">Detalhes da Igreja</h5>
                <RouterLink class="btn btn-sm btn-outline-success" to="/churches">
                    <i class="bi bi-arrow-left-circle me-2"></i>Voltar
                </RouterLink>
            </div>
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-center">
                    <LoadingSpinner :isLoading="isLoading" />
                </div>

                <ul class="list-group mb-4">

                    <li class="list-group-item"><strong>Igreja :</strong>&nbsp;{{ church.nome }}</li>




                </ul>


            </div>
            <div class="card-footer">
                Sistema de Gestão de Membros - {{ new Date().getFullYear() }}
            </div>
        </div>
    </div>
</template>

<style scoped></style>