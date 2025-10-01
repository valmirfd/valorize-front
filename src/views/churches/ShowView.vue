<script>
import { RouterLink } from "vue-router";
import ChurchesApi from "@/services/api/ChurchesApi";
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
      name: "",
    });
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
      </div>
    </div>
  </div>
</template>

<style scoped></style>
