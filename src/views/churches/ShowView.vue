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
      superintendente_id: "",
      titular_id: "",
      is_sede: "",
      user_id: "",
      address_id: "",
      images: ref([]),
      address: ref({}),
    });

    const fetchChurch = async () => {
      try {
        const api = new ChurchesApi();
        const data = await api.get(`/churches/show/${route.params.id}`);
        church.value = data;
        isLoading.value = false;
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

    onMounted(fetchChurch);

    return {
      church,
      isLoading,
    };
  },
});
</script>

<template>
  <div class="container mt-4 mb-4">
    <div class="row col-md-6">
      <div class="col md-12">
        <div class="card shadow-md">
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
              <li class="list-group-item">
                <strong>Telefone : </strong>{{ church.telefone }}
              </li>
              <li class="list-group-item"><strong>CNPJ : </strong>{{ church.cnpj }}</li>
              <li class="list-group-item"><strong>Código : </strong>{{ church.code }}</li>
              <li class="list-group-item">
                <strong>Situação : </strong>{{ church.situacao }}
              </li>
              <li class="list-group-item">
                <strong>User_ID : </strong>{{ church.user_id }}
              </li>
              <li class="list-group-item">
                <strong>SuperintendentenID : </strong>{{ church.superintendente_id }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
