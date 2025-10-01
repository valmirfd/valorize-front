<script>
import { RouterLink } from "vue-router";
import ChurchesApi from "@/services/api/ChurchesApi";
import { toast } from "vue3-toastify";
import { defineComponent, ref, onMounted } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default defineComponent({
  name: "ChurchesView",
  components: {
    LoadingSpinner,
  },

  setup() {
    const churches = ref([]);
    const isLoading = ref(true);

    const fetchChurches = async () => {
      try {
        const api = new ChurchesApi();
        const data = await api.list();
        churches.value = data;
        isLoading.value = false;
      } catch (error) {
        if (error.response && error.response.status !== 401) {
          toast.error(`Erro ao recuperar os dados: ${error}`, {
            theme: "colored",
            hideProgressBar: true,
          });
        }
        console.log(`Erro ao recuperar os dados: ${error}`);
      }
    };

    onMounted(fetchChurches);

    return { churches, isLoading };
  },
});
</script>

<template>
  <div class="container-fluid mt-4 mb-4">
    <div class="card shadow-lg">
      <div class="card-header d-inline-flex justify-content-between">
        <h5 class="text-muted">Igrejas da Região</h5>
        <RouterLink class="btn btn-sm btn-outline-success" to="/churches/new"
          ><i class="bi bi-plus-circle me-2"></i>Cadastrar Igreja</RouterLink
        >
      </div>
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-center">
          <LoadingSpinner :isloading="isLoading" />
        </div>
        <div class="table-responsive">
          <table class="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Criada</th>
                <th scope="col">Atualizada</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="churches.length === 0">
                <td class="text-center" colspan="4">Não há dados para exibir</td>
              </tr>

              <tr v-else v-for="church in churches" :key="church.id">
                <td>{{ church.nome }}</td>
                <td>{{ church.created_at.date }}</td>
                <td>{{ church.updated_at.date }}</td>
                <td class="text-center">
                  <RouterLink
                    class="btn btn-sm btn-primary"
                    :to="{ name: 'ShowChurchView', params: { id: church.id } }"
                    ><i class="bi bi-eye-fill me-2"></i>Detalhes</RouterLink
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-footer">
        Sistema de Gestão de Membros - {{ new Date().getFullYear() }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
