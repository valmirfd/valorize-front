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
    <div class="container mt-2 mb-2">
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow-lg">
                    <div class="card-header d-flex flex-row justify-content-between align-items-center">

                        <div>
                            <h5 class="text-muted">Detalhes da Igreja</h5>
                        </div>
                        <div class="ms-4">
                            <RouterLink class="btn btn-sm btn-outline-info me-2" to="/churches">
                                <i class="bi bi-arrow-left-circle me-2"></i>Voltar
                            </RouterLink>

                            <RouterLink class="btn btn-sm btn-outline-primary me-2"
                                :to="{ name: 'EditChurchView', params: { id: church.id } }">
                                <i class="bi bi-pencil-square me-2"></i>Editar
                            </RouterLink>

                            <RouterLink class="btn btn-sm btn-outline-danger"
                                :to="{ name: 'EditChurchView', params: { id: church.id } }">
                                <i class="bi bi-trash3-fill me-2"></i>Excluir
                            </RouterLink>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-center">
                            <LoadingSpinner :isLoading="isLoading" />
                        </div>

                        <ul class="list-group mb-4">
                            <li class="list-group-item"><strong>Igreja :</strong>&nbsp;{{ church.nome }}</li>
                            <li class="list-group-item"><strong>Telefone :</strong>&nbsp;{{ church.telefone }}</li>
                            <li class="list-group-item"><strong>CNPJ:</strong>&nbsp;{{ church.cnpj }}</li>
                            <li class="list-group-item"><strong>Código :</strong>&nbsp;{{ church.code }}</li>
                            <li class="list-group-item"><strong>Sede :</strong>&nbsp;{{ church.is_sede }}</li>
                            <li class="list-group-item"><strong>ID end. :</strong>&nbsp;{{ church.address_id }}</li>
                            <li class="list-group-item"><strong>Ativo :</strong>&nbsp;{{ church.ativo }}</li>
                            <li class="list-group-item"><strong>Situação :</strong>&nbsp;{{ church.situacao }}</li>
                            <li class="list-group-item"><strong>ID Super :</strong>&nbsp;{{ church.superintendente_id }}
                            </li>
                            <li class="list-group-item"><strong>ID Titu :</strong>&nbsp;{{ church.titular_id }}</li>
                            <li class="list-group-item"><strong>Endereço :</strong>&nbsp;{{ church.address }}</li>

                        </ul>


                    </div>
                    <div class="card-footer">
                        Sistema de Gestão de Membros - {{ new Date().getFullYear() }}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped></style>