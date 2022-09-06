<script>

export default {
  name: 'InputUser',
  data () {
    return {
    sentence: '',
    url: '',
    author: '',
    debug:'',
  }
  },
  methods: {
    setSentence() {
      console.log(this.sentence)
      this.$store.commit('setSentence', this.sentence)
    },
    test() {
      console.log("works")
    }
  }
};
</script>

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
          v-model="sentence"
        ></v-textarea>
        <v-btn elevation="2" x-large color="primary" @click=setSentence> Check </v-btn>
      </v-container>
    </v-content>
    <div>{{ this.sentence }}</div>
  </div>
</template>