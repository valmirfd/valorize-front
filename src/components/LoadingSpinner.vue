<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingSpinner",
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<template>
  <div v-if="isLoading" class="spinner-border mb-3" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<style scoped></style>
