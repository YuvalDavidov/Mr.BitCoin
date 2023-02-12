<template>
  <h4>{{ contact.name }}</h4>
  <label for="">
    <span>Email:</span>
    <p>{{ contact.email }}</p>
  </label>
  <label for="">
    <span> Phone number:</span>
    <p>{{ contact.phone }}</p>
  </label>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>