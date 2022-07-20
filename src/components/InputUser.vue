<template>
  <div id="InputUser">
    <v-content>
      <v-container fluid>
        <v-textarea
          name="input-7-1"
          label="Enter your Fact"
          auto-grow
          placeholder="Donald Trump is the president of France"
          clearable
          style="width: 500px"
          outlined
        ></v-textarea>
        <v-btn elevation="2" x-large color="primary"> Check it</v-btn>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'InputUser',
};
</script>
