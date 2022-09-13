<script>

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
  }
  },
  methods: {
    async setStatement() {
      this.$store.dispatch('fetchStatement', {
        statement: this.statement,
        statementdate: this.statementdate
      })
    },
    getState() {
      this.currentState = this.$store.getters['getStatement']
    },
    getDate(){
      this.currentDate = this.$store.getters['getDate']
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
        <v-btn elevation="2" x-large color="primary" @click="setStatement"> Check </v-btn>
      </v-container>
      <v-btn elevation="2" x-large color="primary" @click="getState(); getDate()"> Check </v-btn>
      {{currentState}}
      {{currentDate}}
    </v-main>
  </div>
</template>