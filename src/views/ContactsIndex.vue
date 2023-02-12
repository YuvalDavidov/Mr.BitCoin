<template>
  <section>
    <h3>Contacts</h3>
    <ContactFilter />
    <ContactList v-if="contacts" :contacts="contacts" />
  </section>
</template>

<script>
import { contactService } from "../services/contact.service";

import ContactFilter from "../cmps/ContactFilter.vue";
import ContactList from "../cmps/ContactList.vue";
export default {
  data() {
    return {
      contacts: null,
    };
  },
  async created() {
    this.contacts = await contactService.query();
  },
  components: {
    ContactFilter,
    ContactList,
  },
};
</script>

<style>
</style>