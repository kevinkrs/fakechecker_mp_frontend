<script>
import { Plotly } from 'vue-plotly';

export default {
  // @vuese
  // Generic plots component using plotly.js
  // Can produce any kind of chart, based on input data and layout.
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