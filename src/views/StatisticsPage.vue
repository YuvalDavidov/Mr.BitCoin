<template>
  <section>
    <h1>Stats</h1>
    <ChartBar />
  </section>
</template>

<script>
import ChartBar from "../cmps/ChartBat.vue";

import { bitcoinService } from "../services/bitcoin.service";

export default {
  data() {
    return {
      stats: null,
    };
  },
  async created() {
    this.stats = bitcoinService.getMarketPriceHistory();
    console.log(this.stats);
  },
  components: {
    ChartBar,
  },
};
</script>

<style>
</style>