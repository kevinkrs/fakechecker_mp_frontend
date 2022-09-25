<script>
import { PlotlyChart } from 'vue-plotly';

export default {
  name: 'PlotlyCharts',
  props: {
    data: { type: Object, required: true, default: null },
    layout: { type: Object, required: true, default: null },
  },
  components: {
    PlotlyChart,
  },
};
</script>

<template>
  <PlotlyChart :data='data' , :layout='layout'></PlotlyChart>
</template>