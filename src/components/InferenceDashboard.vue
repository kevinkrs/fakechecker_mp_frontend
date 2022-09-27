<script>
import PlotlyCharts from '@/components/PlotlyCharts';

export default {
  name: 'InferenceDashboard',
  props: {
    response: { type: Object, required: true, default: null },
  },
  components: {
    PlotlyCharts,
  },
  computed: {
    chartData() {
      const chartData = {
        data: [{
          x: [0.24, 0.76],
          y: ['False', 'True'],
          type: 'bar',
          orientation: 'h',
          marker: {
            color: ['rgb(1, 148, 154, 0.8)', 'rgb(219, 31, 72, 0.8)'],
          },
        }],
        layout: {
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
  <v-main>
    <v-container>
      <PlotlyCharts :layout='chartData.layout' :data='chartData.data'></PlotlyCharts>
    </v-container>
  </v-main>
</template>
