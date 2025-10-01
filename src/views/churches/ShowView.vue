<script>
import { RouterLink } from "vue-router";
import ChurchesApi from "@/services/api/ChurchesApi";
import { toast } from "vue3-toastify";
import { defineComponent, ref, onMounted } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "ShowView",

  components: {
    LoadingSpinner,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();

    const isLoading = ref(true);
    const church = ref({
      nome: "",
      telefone: "",
      cnpj: "",
      code: "",
      situacao: "",
      superintendete_id: "",
      titular_id: "",
      is_sede: "",
      user_id: "",
      address_id: "",
      address: ref([]),
    });

    const fetchChurches = async () => {
      try {
        const api = new ChurchesApi();
        //const data = await api.show(`/churches/show/${route.params.id}`);
        const data = await api.get(`/churches/show/${route.params.id}`);
        church.value = data;
        isLoading.value = false;

        console.log(church);
      } catch (error) {
        if (error.response && error.response.status !== 401) {
          toast.error(`Erro ao recuperar os dados: ${error}`, {
            theme: "colored",
            hideProgressBar: true,
          });
        }
        isLoading.value = false;
        console.log(`Erro ao recuperar os dados: ${error}`);
      }
    };

    onMounted(fetchChurches);

    return {
      church,
      isLoading,
    };
  },
});
</script>

<template>
  <div class="container-fluid mt-4 mb-4">
    <div class="card shadow-lg">
      <div class="card-header d-inline-flex justify-content-between">
        <h5 class="text-muted">Detalhes da Igreja</h5>
        <RouterLink class="btn btn-sm btn-outline-secondary" to="/churches"
          ><i class="bi bi-arrow-left-short me-2"></i>Voltar</RouterLink
        >
      </div>
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-center">
          <LoadingSpinner :isLoading="isLoading" />
        </div>

        <ul class="list-group mb-3">
          <li class="list-group-item"><strong>Igreja : </strong>{{ church.nome }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
