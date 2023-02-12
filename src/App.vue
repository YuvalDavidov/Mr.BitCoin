<script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./cmps/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <section class="main-layout">
    <AppHeader />
    <main>
      <RouterView />
    </main>
  </section>
</template>
