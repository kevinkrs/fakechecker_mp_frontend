<script>
import { Plotly } from 'vue-plotly';

export default {
  name: 'PlotlyCharts',

  props: {
    // Generic plots component using plotly.js. Uses passed data for plot creation.
    data: { type: Array, required: true, default: null },
    // Layout defines the additional plot parameters.
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