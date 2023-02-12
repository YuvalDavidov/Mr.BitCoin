<script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./cmps/AppHeader.vue";
import AppFooter from "./cmps/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <section class="main-layout">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </section>
</template>
