<template>
  <section class="contact-filter">
    <label for=""
      >Search:
      <input @input="onFilter" type="text" v-model="filterBy.txt" />
    </label>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
};
</script>

<style>
</style>