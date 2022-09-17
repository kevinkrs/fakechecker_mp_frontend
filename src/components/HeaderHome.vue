<script>
export default {
  name: 'HeaderHome',
};
</script>

<template>
  <div id="HeaderHome">
    <v-app-bar color="primary" dark app>
      <v-app-bar-title>CheckMyFact</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-items class="hidden-sm-and-down">
        <v-btn>Home</v-btn>
        <v-btn>How does it Work?</v-btn>
        <v-btn>About us</v-btn>
      </v-app-bar-items>
    </v-app-bar>
  </div>
</template>
