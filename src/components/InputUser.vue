<script>
import { getPrediction } from '@/api';

export default {
  name: 'InputUser',
  data () {
    return {
    statement: '',
    statementdate: '',
    url: '',
    author: '',
    currentState: null,
    currentDate: null,
    response: null,
    loading: true
  }
  },
  methods: {
    async predict() {
      await getPrediction({
        statement: this.statement,
        statementdate: this.statementdate
      }).then((resp) => this.response = resp.data)
      this.$store.dispatch('saveInferenceResult', this.response)
      this.loading = false
    },
    fetchStatement(){
      this.$store.dispatch()
    },
    getState() {
      this.currentState = this.$store.getters['getStatement']
    },
    getDate(){
      this.currentDate = this.$store.getters['getDate']
    },
    getResponse(){

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
          required
          v-model="statement"
        ></v-textarea>
        <v-textarea
          name="input-2-1"
          label="Enter statement date"
          placeholder="2020-05-12"
          clearable
          required
          style="width: 500px"
          outlined
          v-model="statementdate">
        </v-textarea>
        <v-btn elevation="2" x-large color="primary" @click="predict"> Check </v-btn>
      </v-container>
    </v-main>
  </div>
</template>