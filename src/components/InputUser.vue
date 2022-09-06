<script>

export default {
  name: 'InputUser',
  data () {
    return {
    sentence: '',
    url: '',
    author: '',
    currentSentence: null,
  }
  },
  methods: {
    setSentence() {
      console.log(this.sentence)
      this.$store.dispatch('fetchSentence', this.sentence)
    },
    getSentence() {
      this.currentSentence = this.$store.getters['getCurrentInput']
      console.log(this.$store.getters['getCurrentInput'])
    }
  }
};
</script>

<template>
  <div id="InputUser">
    <v-main>
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
    </v-main>
  </div>
</template>