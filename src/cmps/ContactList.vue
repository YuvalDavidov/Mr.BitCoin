<template>
  <section>
    <ul class="contact-list">
      <li
        class="contact-preview"
        v-for="contact in contacts"
        :key="contact._id"
      >
        <ContactPreview :contact="contact" />
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "./ContactPreview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<style>
</style>