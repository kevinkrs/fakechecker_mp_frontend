<script>
import { getPrediction, getSimilarNews } from '@/api';
import store from '@/store';
import InferenceDashboard from '@/components/InferenceDashboard';
/* eslint-disable */
export default {
  name: 'FactChecker',
  components: { InferenceDashboard },
  data: (vm) => ({
    menu: false,
    valid: true,
    urlRules: [

      v => (v && v.length <= 256) || 'URL must be less than 256 characters', /* eslint-disable-next-line no-useless-escape*/
      v => /https?:[0-9]*\/\/[\w!?/\+\-_~=;\.,*&@#$%\(\)\'\[\]]+/.test(v) || 'URL must be valid',

    ],

    nameRules: [
      /* eslint-disable-next-line no-useless-escape*/
      v => (!v || /^[a-z ,.'-]+$/i.test(v)) || 'Name must be valid',

    ],

    statement: '',
    statementdate: '',
    statementurl: '',
    author: '',
    response: null,
    loading: null,
    history: null,
    selectedHistoryItem: null,
    similarNews: null,
    warning: false,
  }),


  async created() {
    this.history = store.getters['getHistory'];
    const fromNews = store.getters['getCheckerInput'];
    if (fromNews) {
      this.statement = fromNews.excerpt;
      this.statementdate = fromNews.published_date.substr(0, 10);
      this.statementurl = fromNews.link;
      this.author = fromNews.author;
    } else {
      this.statement = store.getters['getStatement'];
      this.statementdate = store.getters['getDate'];
      this.statementurl = store.getters['getUrl'];
      this.author = store.getters['getAuthor'];
    }
    this.response = store.getters['getInferenceResult'];
    this.similarNews = store.getters['getSimilarStatements'];
    this.warning = store.getters['getWarning'];
  },
  methods: {
    // @vuese
    // Main function calling the transformer inference for a given input as well as the semantic search model.
    // Calls two api endpoints. One for inference and the other for semantic search.
    // @arg statement, statementdate, statementurl, author
    async predict() {
      this.loading = true;
      await getPrediction({
        statement: this.statement,
        statementdate: this.statementdate.substring(0, 9),
        statementurl: this.statementurl,
        author: this.author,
      }).then((resp) => (this.response = resp.data));
      store.dispatch('saveInferenceResult', this.response);

      await getSimilarNews({
        statement: this.statement,
        statementdate: this.statementdate.substring(0, 9),
        statementurl: this.statementurl,
        author: this.author,
      }).then((resp) => (this.similarNews = resp.data));
      store.dispatch('saveSimilarNews', this.similarNews);
      this.checkReliability(this.similarNews);
      this.saveToHistory();
      this.loading = false;
    },
    // @vuese
    // Saves current user input to state. Persists state after reloading.
    fetchStatement() {
      store.dispatch('fetchStatement', {
        statement: this.statement,
        statementdate: this.statementdate,
        statementurl: this.statementurl,
        author: this.author,
      });
    },
    checkReliability(similarNews) {
      let count = 0;
      for (let item in similarNews) {
        if (item.label === 'FALSE' || 'false' || 'mostly-false' || 'pants fire') {
          count = count + 1;
          console.log(item.label);
        }
      }
      if (count > 3) {
        this.warning = true;
        store.dispatch('fetchWarning', this.warning);
      }

    },
    // @vuese
    // Cleans user inputs and sets them to empty strings
    // @arg None
    clearInputs() {
      this.statementdate = '';
      this.statement = '';
      this.statementurl = '';
      this.author = '',
        this.response = null;
      store.dispatch('fetchStatement', {
        statement: this.statement,
        statementdate: this.statementdate,
        statementurl: this.statementurl,
      });
      store.dispatch('saveInferenceResult', this.response);
    },
    // @vuese
    // Pushes current user fact check to history object in state.
    // @arg None
    saveToHistory() {
      store.dispatch('saveHistory', {
        statement: this.statement,
        statementdate: this.statementdate,
        statementurl: this.statementurl,
        author: this.author,
        results: this.response,
      });
    },
    setHistoryData(item) {
      this.statement = item.statement;
      this.statementdate = item.statementdate;
      this.statementurl = item.statementurl;
      this.author = item.author;
      this.response = item.results;
    },
    // @vuese
    // Helper function to utilize datepicker.
    // @arg date
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    },
    // @vuese
    // Helper function to utilize datepicker.
    // @arg date
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
  },
};
</script>

<template>
  <div id='InputUser'>
    <v-container>
      <v-alert
        v-if='warning'
        dense
        border='left'
        type='warning'
      >
        This statement has many similar statement which are labeled as <strong>fake news</strong>. <br>
        Please consider further research on that topic, since the model could be biased!
      </v-alert>
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
          <v-col
            cols='12'
            sm='6'
            md='4'
          >
            <v-menu
              ref='menu'
              v-model='menu'
              :close-on-content-click='false'
              :return-value.sync='statementdate'
              transition='scale-transition'
              offset-y
              min-width='auto'
            >
              <template v-slot:activator='{ on, attrs }'>
                <v-text-field
                  v-model='statementdate'
                  label='Select date'
                  prepend-icon='mdi-calendar'
                  readonly
                  v-bind='attrs'
                  v-on='on'
                ></v-text-field>
              </template>
              <v-date-picker
                v-model='statementdate'
                no-title
                scrollable
                @click='$refs.menu.save(date)'
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color='primary'
                  @click='menu = false'
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color='primary'
                  @click='$refs.menu.save(date)'
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-text-field
            name='input-7-1'
            label='URL (optional)'
            placeholder='www.facebook.com'
            clearable
            class='mt-4'
            style='width: 500px'
            height='40'
            outlined
            v-model='statementurl'
            :rules='urlRules'
          ></v-text-field>
          <v-text-field
            name='input-7-1'
            label='Author (optional)'
            placeholder='The Guardian/ James Patternman'
            clearable
            style='width: 300px'
            height='40'
            outlined
            v-model='author'
            :rules='nameRules'
          ></v-text-field>

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
              elevation='2'
              x-large
              color='grey lighten-2'
              class='mx-2'
              @click='clearInputs'
            >Clear
            </v-btn>
          </div>
          <div v-else>
            <v-btn elevation='2' x-large color='primary' disabled
            >Check
            </v-btn>
            <v-btn
              elevation='2'
              x-large
              color='grey lighten-2'
              class='mx-2'
              disabled
            >Clear
            </v-btn>
          </div>
        </v-col>
        <v-col md='5' sm='12' class='d-flex align-center justify-center'>
          <v-col v-if='!response && !loading' cols='5'>
            <v-icon>mdi-smiley-cry-outline</v-icon>
            No checks yet
          </v-col>
          <v-col v-else-if='loading' cols='4'>
            <v-progress-circular
              color='amber darken-4'
              indeterminate
              rounded
              height='10'
            ></v-progress-circular>
          </v-col>
          <v-col v-else class='d-flex flex-column pt-0'>
            <v-col class='pt-0'>
              <InferenceDashboard :response='response'></InferenceDashboard>
            </v-col>
            <v-col cols='12'>
              <hr>
              <h3 class='my-4'>Similar fact-checked statements</h3>
              <v-card class='mb-4' v-for='(item, idx) in similarNews' :key='idx'>
                <v-tooltip bottom>
                  <template v-slot:activator='{on, attrs}'>
                    <v-chip label v-bind='attrs'
                            v-on='on'>{{ item.scores.toFixed(2) }}
                    </v-chip>
                  </template>
                  Scores of similarity to given input
                </v-tooltip>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title v-text='item.title' class='mb-4 mt-2'></v-list-item-title>
                    <div class='d-flex flex-row'>
                      <v-tooltip bottom>
                        <template v-slot:activator='{on, attrs}'>
                          <v-icon v-bind='attrs'
                                  v-on='on'>mdi-calendar-week
                          </v-icon>
                        </template>
                        Factcheck date
                      </v-tooltip>
                      <v-list-item-subtitle v-text='item.factcheckdate' class='ml-2 d-flex align-center'>
                      </v-list-item-subtitle>
                    </div>
                    <div class='d-flex flex-row mt-2'>
                      <v-tooltip bottom>
                        <template v-slot:activator='{on, attrs}'>
                          <v-icon v-bind='attrs'
                                  v-on='on'>mdi-web-check
                          </v-icon>
                        </template>
                        Result
                      </v-tooltip>
                      <v-list-item-subtitle v-text='item.label'
                                            class='ml-2 d-flex align-center'></v-list-item-subtitle>
                      <v-btn icon :href='item.url' target='_blank'>
                        <v-tooltip bottom>
                          <template v-slot:activator='{on, attrs}'>
                            <v-icon v-bind='attrs'
                                    v-on='on'>mdi-open-in-new
                            </v-icon>
                          </template>
                          Link to original source
                        </v-tooltip>
                      </v-btn>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-col>
        </v-col>
        <v-menu
          v-if='history.length !== 0'
          bottom
          transition='slide-y-transition'
          offset-y
        >
          <template v-slot:activator='{ on, attrs }'>
            <v-btn color='primary' dark v-bind='attrs' v-on='on'>
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
                <v-list-item-title
                  v-text='item.results.prob_max.toFixed(2)'
                ></v-list-item-title>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text='`${item.statement.substring(0, 10)}...`'
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-menu>
        <v-btn v-else disabled>History</v-btn>
      </div>
    </v-container>
  </div>
</template>
