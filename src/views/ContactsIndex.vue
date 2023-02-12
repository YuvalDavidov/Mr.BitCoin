<template>
  <section>
    <h3>Contacts</h3>
    <ContactFilter @filter="onSetFilterBy" />
    <ContactList
      @remove="removeContact"
      v-if="contacts"
      :contacts="filteredContacts"
    />
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
      filterBy: {},
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
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
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