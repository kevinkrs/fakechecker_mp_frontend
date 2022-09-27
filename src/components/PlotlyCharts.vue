<script>
import { Plotly } from 'vue-plotly';

export default {
  name: 'PlotlyCharts',
  props: {
    data: { type: Array, required: true, default: null },
    layout: { type: Object, required: true, default: null },
  },
  components: {
    Plotly,
  },
};
</script>

<template>
  <Plotly :data='data' :layout='layout'></Plotly>
</template>