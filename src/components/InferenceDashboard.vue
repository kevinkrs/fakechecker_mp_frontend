<script>
export default {
  name: 'InferenceDashboard',
  props: {
    response: { type: Object, required: true, default: null },
  },
};
</script>


<template>
  <v-main>
    <v-container>
      <div>{{ response.label }} {{ response.prob_max }}</div>
    </v-container>
  </v-main>
</template>
