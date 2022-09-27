<script>
import PlotlyCharts from '@/components/PlotlyCharts';

export default {
  name: 'InferenceDashboard',
  props: {
    response: { type: Array, required: true, default: null },
  },
  components: {
    PlotlyCharts,
  },
  computed: {
    chartData() {
      const chartData = {
        data: [{
          x: ['False', 'True'],
          y: [this.response.probs[0], this.response.probs[1]],
          type: 'bar',
          marker: {
            color: ['rgb(1, 148, 154, 0.8)', 'rgb(219, 31, 72, 0.8)'],
          },
        }],
        layout: {
          height: 300,
          width: 400,
          margin: {
            l: 40,
            b: 20,
            r: 40,
            t: 20,
          },
        },
      };
      return chartData;
    },
  },
};
</script>


<template>
  <v-container>
    <PlotlyCharts :layout='chartData.layout' :data='chartData.data'></PlotlyCharts>
  </v-container>
</template>
