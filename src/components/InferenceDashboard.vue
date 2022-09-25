<script>
import PlotlyCharts from '@/components/PlotlyCharts';
export default {
  name: 'InferenceDashboard',
  props: {
    response: { type: Object, required: true, default: null },
  },
  components: {
    PlotlyCharts
  },
  computed:{
    chartData() {
      const chartData = {
        data: [{
          x: [this.response[1][1]],
          y: ['True', 'False'],
          type:'bar'
            }],
        layout: {

        }
      }
      return chartData
    }
  }
};
</script>


<template>
  <v-main>
    <v-container>
      <PlotlyCharts :layout='chartData.layout' :data='chartData.data'
    </v-container>
  </v-main>
</template>
