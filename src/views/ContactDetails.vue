<template>
  <article v-if="contact" class="contact-details">
    <img :src="contact.imgUrl" alt="" />
    <h2>{{ contact.name }}</h2>
    <h3>{{ contact.email }}</h3>
    <RouterLink to="/contact">
      <button>Back</button>
    </RouterLink>
  </article>
</template>

<script>
import axios from "axios";
import { contactService } from "../services/contact.service";

export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.contact = await contactService.getById(contactId);
    this.contact.imgUrl = await axios
      .get(`https://robohash.org/${this.contact._id}`)
      .then((res) => res.config.url);
  },
};
</script>

<style>
</style>