<script>
import { getNews } from '@/api';
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
        { name: 'Germany', iso: 'de' },
        { name: 'USA', iso: 'us' },
        { name: 'United Kingdom', iso: 'gb' },
        { name: 'France', iso: 'fr' },
        { name: 'China', iso: 'cn' },
        { name: 'Russia', iso: 'ru' },
      ],
    };
  },
  computed: {
    /*news() {
      const news = store.getters['getNews'];
      return news;
    },*/
  },
  async created() {
    this.news = store.getters['getNews'];
    this.loading = true;
    await axios.get('https://newsapi.org/v2/top-headlines?country=gb&apiKey=3e03a786a0b24618b5f0839d08ec69e0')
      .then((resp) =>
        (this.news = resp.data.articles),
      );
    store.dispatch('saveNews', this.news);
    this.loading = false;

  },
  methods: {
    async fetchNews() {
      this.loading = true;
      await getNews().then((resp) => (this.news = resp.data));
      this.loading = false;
    },
    async selectTopic(country) {
      this.loading = true;
      this.selectedCountry = country.name;
      await axios.get(`https://newsapi.org/v2/top-headlines?country=${country.iso}&apiKey=3e03a786a0b24618b5f0839d08ec69e0`)
        .then((resp) =>
          (this.news = resp.data.articles),
        );
      store.dispatch('saveNews', this.news);
      this.loading = false;
    },
  },
};
</script>

<template>
  <div>
    <h2>Latest News</h2>
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
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title v-text='article.title' class='mb-4 mt-2'></v-list-item-title>
            <div class='d-flex flex-row'>
              <v-icon>mdi-newspaper-variant-multiple</v-icon>
              <v-list-item-subtitle v-text='article.description'
                                    class='ml-2 d-flex align-center'></v-list-item-subtitle>
            </div>
            <div class='d-flex flex-row mt-2'>
              <v-icon>mdi-web-check</v-icon>
              <v-list-item-subtitle v-text='article.source.name'
                                    class='ml-2 d-flex align-center'></v-list-item-subtitle>
              <v-btn icon :href='article.url' target='_blank'>
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>

      </v-card>
    </div>
  </div>

</template>

