<script>
import axios from 'axios';
import store from '@/store';

export default {
  name: 'NewsTicker',
  data() {
    return {
      loading: false,
      news: null,

      selectedCountry: 'United Kingdom',
      countries: [
        { name: 'Germany', iso: 'DE' },
        { name: 'USA', iso: 'US' },
        { name: 'United Kingdom', iso: 'GB' },
        { name: 'France', iso: 'FR' },
        { name: 'China', iso: 'CN' },
        { name: 'Russia', iso: 'RU' },
      ],
      snackbar: false,
      text: 'News where successfully copied to checker!',
    };
  },
  computed: {},
  async created() {
    // @vuese
    // Main API call to get news, utilizing newsapi.org.
    this.news = store.getters['getNews'];
    if (!this.news) {
      this.loading = true;
      await axios.get('https://newsapi.org/v2/top-headlines?country=gb&apiKey=3e03a786a0b24618b5f0839d08ec69e0')
        .then((resp) =>
          (this.news = resp.data.articles),
        );
      store.dispatch('saveNews', this.news);
      this.loading = false;
    }

  },
  methods: {
    // @vuese
    // Enables user to select the news source country.
    async selectTopic(country) {
      this.loading = true;
      this.selectedCountry = country.name;
      await axios.get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=${country.iso}&topic=news&lang=en`, {
        headers: {
          'x-api-key': '0rIuRE2AuBqatD-pT7TtPZjMJ5Vb_TGJPFHpr-R8Yuc',
        },
      }).then((resp) => (this.news = resp.data.articles));
      /*await axios.get(`https://newsapi.org/v2/top-headlines?country=${country.iso}&apiKey=3e03a786a0b24618b5f0839d08ec69e0`)
        .then((resp) =>
          (this.news = resp.data.articles),
        );*/
      store.dispatch('saveNews', this.news);
      this.loading = false;
    },
    // @vuese
    // Saving the selected article for FactChecker. User gets notified that article has been copied successfully.
    saveForChecker(article) {
      console.log(article);
      store.dispatch('fetchForChecker', article);
    },
    openSnackbar() {
      this.snackbar = true;
    },
  },
};
</script>

<template>
  <div class='pa-8'>
    <h1>Latest News</h1>
    <div class='d-flex justify-end'>
      <v-menu bottom
              transition='slide-y-transition'
              offset-y>
        <template v-slot:activator='{ on, attrs }'>
          <v-btn color='primary' dark v-bind='attrs' v-on='on'>
            {{ selectedCountry }}
          </v-btn>
        </template>
        <div v-for='(country, idx) in countries' :key='idx'>
          <v-list-item @click='selectTopic(country)'> {{ country.name }}
          </v-list-item>
        </div>
      </v-menu>
    </div>
    <div v-if='loading' class='d-flex justify-center align-center'>
      <v-progress-circular
        color='amber darken-4'
        indeterminate
        rounded
        height='10'
      ></v-progress-circular>
    </div>
    <div v-else>
      <v-card tile max-width='600' class='mx-auto my-4' v-for='article in this.news' :key='article.id'>
        <v-list-item three-line @click='saveForChecker(article); snackbar=true'>
          <v-list-item-content>
            <v-list-item-title v-text='article.title' class='mb-4 mt-2'></v-list-item-title>
            <div class='d-flex flex-row'>
              <v-tooltip bottom>
                <template v-slot:activator='{on, attrs}'>
                  <v-icon v-bind='attrs'
                          v-on='on'>mdi-newspaper-variant-multiple
                  </v-icon>
                </template>
                Description
              </v-tooltip>
              <v-list-item-subtitle class='ml-2 d-flex align-center'>
                {{ article.excerpt ? article.excerpt.substr(0, 200) : article.description.substr(0, 200) }} ...
              </v-list-item-subtitle>
            </div>
            <div class='d-flex flex-row mt-2'>
              <v-tooltip bottom>
                <template v-slot:activator='{on, attrs}'>
                  <v-icon v-bind='attrs'
                          v-on='on'>mdi-web-check
                  </v-icon>
                </template>
                Source
              </v-tooltip>
              <v-list-item-subtitle v-text='article.clean_url'
                                    class='ml-2 d-flex align-center'></v-list-item-subtitle>
              <v-btn icon :href='article.link' target='_blank'>
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
    </div>
    <v-snackbar
      v-model='snackbar'
    >
      {{ text }}

      <template v-slot:action='{ attrs }'>
        <v-btn
          color='pink'
          text
          v-bind='attrs'
          @click='snackbar = false'
        >
          Close
        </v-btn>
        <router-link to='/' class='text-decoration-none'>
          <v-btn color='blue'
                 text
                 v-bind='attrs'
                 @click='snackbar = false'>
            Open checker
          </v-btn>
        </router-link>
      </template>
    </v-snackbar>
  </div>
</template>

