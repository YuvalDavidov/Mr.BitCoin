<template>
  <section class="home-page">
    <h1>Home</h1>

    <article v-if="user">
      User name: <span> {{ user.name }}</span>
      <br />
      User balance: <span>{{ user.balance }}</span>
    </article>

    <article v-if="exchangeRate">
      <label for="">
        Bitcoin Rate:
        <span>{{ exchangeRate }}</span>
      </label>
    </article>
  </section>
</template>

<script>
import { userService } from "../services/user.service";
import { bitcoinService } from "../services/bitcoin.service";
export default {
  data() {
    return {
      user: null,
      exchangeRate: null,
    };
  },
  async created() {
    this.user = await userService.getUser();
    this.exchangeRate = await bitcoinService.getRate();
  },
};
</script>

<style>
</style>