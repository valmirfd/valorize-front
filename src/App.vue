<script>
import { RouterView, useRouter } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import { defineComponent } from "vue";
import { globalRouter } from "@/router/globalRouter";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    globalRouter.router = router;
  },
});
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style scoped></style>
