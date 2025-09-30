<script>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  }
});

</script>

<template>

  <NavBar />
  <RouterView />
</template>

<style scoped></style>
