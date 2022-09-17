<script>
import { getPrediction } from '@/api';
import store from '@/store/index';
import InferenceDashboard from '@/components/InferenceDashboard';

export default {
  name: 'InputUser',
  components: { InferenceDashboard },
  data() {
    return {
      statement: '',
      statementdate: '',
      url: '',
      author: '',
      response: null,
      loading: null,
      history: null,
      selectedHistoryItem: null,
    };
  },
  async created() {
    this.statement = store.getters['getStatement'];
    this.statementdate = store.getters['getDate'];
    this.response = store.getters['getInferenceResult'];
    this.history = store.getters['getHistory'];
    console.log(this.history.length);
  },
  methods: {
    async predict() {
      this.loading = true;
      await getPrediction({
        statement: this.statement,
        statementdate: this.statementdate,
      }).then((resp) => (this.response = resp.data));
      store.dispatch('saveInferenceResult', this.response);
      this.saveToHistory();
      this.loading = false;
    },
    fetchStatement() {
      store.dispatch('fetchStatement', {
        statement: this.statement,
        statementdate: this.statementdate,
      });
    },
    clearInputs() {
      this.statementdate = '';
      this.statement = '';
      this.response = null;
      store.dispatch('fetchStatement', {
        statement: this.statement,
        statementdate: this.statementdate,
      });
      store.dispatch('saveInferenceResult', this.response);
    },
    saveToHistory() {
      store.dispatch('saveHistory', {
        statement: this.statement,
        statementdate: this.statementdate,
        results: this.response,
      });
    },
    setHistoryData(item) {
      this.statement = item.statement;
      this.statementdate = item.statementdate;
      this.response = item.results;
    },
  },
};
</script>

<template>
  <div id='InputUser'>
    <v-main>
      <v-container>
        <div class='d-flex justify-space-around'>
          <v-col cols='6'>
            <v-textarea
              name='input-7-1'
              label='Enter your Fact'
              auto-grow
              placeholder='Donald Trump is the president of France'
              clearable
              style='width: 500px'
              outlined
              required
              v-model='statement'
            ></v-textarea>
            <v-textarea
              name='input-2-1'
              label='Enter statement date'
              placeholder='2020-05-12'
              clearable
              required
              style='width: 500px'
              outlined
              v-model='statementdate'
            >
            </v-textarea>
            <div v-if='this.statement && this.statementdate'>
              <v-btn
                elevation='2'
                x-large
                color='primary'
                @click='predict(), fetchStatement()'
              >
                Check
              </v-btn>
              <v-btn
                elevation='2' x-large color='grey lighten-2'
                class='mx-2'
                @click='clearInputs'
              >Clear
              </v-btn>
            </div>
            <div v-else>
              <v-btn elevation='2' x-large color='primary' disabled
              >Check
              </v-btn
              >
              <v-btn
                elevation='2' x-large color='grey lighten-2'
                class='mx-2'
                disabled
              >Clear
              </v-btn>
            </div>
          </v-col>
          <v-col cols='6' class='d-flex align-center justify-center'>
            <v-col v-if='!response && !loading' cols='4'
            >No checks yet
            </v-col
            >
            <v-col v-else-if='loading' cols='4'>
              <v-progress-circular
                color='amber darken-4'
                indeterminate
                rounded
                height='10'
              ></v-progress-circular>
            </v-col>
            <div v-else>
              <InferenceDashboard
                :response='response'>
              </InferenceDashboard>
            </div>
          </v-col>
          <v-menu v-if='history.length !== 0'
                  bottom
                  transition='slide-y-transition'
                  offset-y>

            <template v-slot:activator='{ on, attrs }'>
              <v-btn
                color='primary'
                dark
                v-bind='attrs'
                v-on='on'
              >
                History
              </v-btn>
            </template>
            <v-list-item-group color='white'>
              <v-list-item
                v-for='(item, index) in history'
                :key='index'
                v-model='selectedHistoryItem'
                @click='setHistoryData(item)'
              >
                <v-list-item-icon>
                  <v-list-item-title v-text='item.results.prob_max.toFixed(2)'></v-list-item-title>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text='`${item.statement.substring(0,10)}...`'></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-menu>
          <v-btn v-else disabled> History</v-btn>
        </div>
      </v-container>
    </v-main>
  </div>
</template>
