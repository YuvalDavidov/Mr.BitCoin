<template>
  <header class="header full">
    <h3>BitCoin</h3>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contacts">Contacts</RouterLink>
    </nav>
    <div v-if="user" class="user-rate">
      <h4>{{ user.name }}</h4>
      <h3>
        exchangeRate <span>{{ exchangeRate }}</span>
      </h3>
    </div>
  </header>
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
