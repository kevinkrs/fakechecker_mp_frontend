<script>
import { getPrediction } from '@/api';
import store from '@/store/index';

export default {
  name: 'InputUser',
  data() {
    return {
      statement: '',
      statementdate: '',
      url: '',
      author: '',
      currentState: null,
      currentDate: null,
      response: null,
      loading: null,
    };
  },
  methods: {
    async predict() {
      this.loading = true;
      await getPrediction({
        statement: this.statement,
        statementdate: this.statementdate,
      }).then((resp) => (this.response = resp.data));
      store.dispatch('saveInferenceResult', this.response);
      this.loading = false;
    },
    fetchStatement() {
      store.dispatch('fetchStatement', {
        statement: this.statement,
        statementdate: this.statementdate,
      });
    },
    getState() {
      this.currentState = this.$store.getters['getStatement'];
    },
    getDate() {
      this.currentDate = this.$store.getters['getDate'];
    },
    getResponse() {},
  },
};
</script>

<template>
  <div id="InputUser">
    <v-main>
      <v-container>
        <div class="d-flex justify-space-around">
          <v-col cols="6">
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
              v-model="statementdate"
            >
            </v-textarea>
            <v-btn
              v-if="this.statement && this.statementdate"
              elevation="2"
              x-large
              color="primary"
              @click="predict"
            >
              Check
            </v-btn>
            <v-btn v-else elevation="2" x-large color="primary" disabled
              >Check</v-btn
            >
          </v-col>
          <v-col cols="6" class="d-flex align-center justify-center">
            <v-col v-if="!response && !loading" outlined cols="4"
              >No checks yet</v-col
            >
            <v-col v-else-if="loading" outlined cols="4">
              <v-progress-linear
                color="deep-purple accent-4"
                indeterminate
                rounded
                height="6"
              ></v-progress-linear>
            </v-col>
            <v-col v-else cols="4">{{ response.summary }}</v-col>
          </v-col>
        </div>
      </v-container>
    </v-main>
  </div>
</template>
