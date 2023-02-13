<template>
  <Bar
    v-if="chartData.labels"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import { bitcoinService } from "../services/bitcoin.service";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: null,
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: null,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  async created() {
    this.prices = await bitcoinService.getMarketPriceHistory();
    console.log(this.prices);
    this.chartData.labels = this.prices.values.map((value) => {
      const date = new Date(value.x * 1000);
      return `${date.getDate() + 1}/${date.getMonth() + 1}`;
    });
    this.chartData.datasets[0].data = this.prices.values.map(
      (value) => value.y
    );
  },
};
</script>