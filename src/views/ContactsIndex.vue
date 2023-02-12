<template>
  <section>
    <h3>Contacts</h3>
    <ContactFilter />
    <ContactList @remove="removeContact" v-if="contacts" :contacts="contacts" />
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
  methods: {
    async removeContact(contactId) {
      await contactService.remove(contactId);
      this.contacts = this.contacts.filter(
        (contact) => contact._id !== contactId
      );
    },
  },
  components: {
    ContactFilter,
    ContactList,
  },
};
</script>

<style>
</style>