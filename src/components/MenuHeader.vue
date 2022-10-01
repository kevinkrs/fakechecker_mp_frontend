<script>
import store from '@/store';
import { postUserHistory } from '@/api';

export default {
  name: 'MenuHeader',
  data() {
    return {
      drawer: null,
      items: [
        { title: 'CheckFacts', icon: 'mdi-web-check', to: '/' },
        { title: 'News', icon: 'mdi-newspaper-variant-multiple', to: '/news' },
        { title: 'Contact', icon: 'mdi-account-box', to: '/contact' },
      ],
    };
  },
  computed: {
    history() {
      return store.getters['getHistory'];
    },
  },
  methods: {
    // @vuese
    // Used to send user checker results and inputs to backend to use for retraining the model.
    // @arg The parameter send to backend is the history object with title, date, url and
    async donateHistory() {
      const history = store.getters['getHistory'];
      await postUserHistory(history);
    },
  },
};
</script>

<template>
  <v-app id='inspire'>
    <v-navigation-drawer
      v-model='drawer'
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class='text-h6'>
            FactChecker
          </v-list-item-title>
          <v-list-item-subtitle>
            Checking facts for credibility
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for='item in items'
          :key='item.title'
          :to='item.to'
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color='primary'
      dark
      shrink-on-scroll
      src='header.jpg'
      scroll-target='#scrolling-techniques-2'
    >
      <template v-slot:img='{ props }'>
        <v-img
          v-bind='props'
          gradient='to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)'
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click='drawer = !drawer'></v-app-bar-nav-icon>

      <v-toolbar-title>FactChecker</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class='mt-2'>
        <v-tooltip bottom>
          <template v-slot:activator='{on, attrs}' v-if='history.length > 0'>
            <v-btn v-bind='attrs'
                   v-on='on'
                   @click='donateHistory'
                   class='d-flex align-center'>
              <v-icon>mdi-heart</v-icon>
              Contribute
            </v-btn>
          </template>
          <template v-slot:activator='{on, attrs}' v-else>
            <v-btn v-bind='attrs'
                   v-on='on'
                   disabled
                   @click='donateHistory'
                   class='d-flex align-center'>
              <v-icon>mdi-heart</v-icon>
              Contribute
            </v-btn>
          </template>

          <span>Donate your history and predictions for our model development!</span>
        </v-tooltip>
      </div>

      <a href='https://github.com/kevinkrs/masterproject_backend' target='_blank' class='text-decoration-none'>
        <v-btn icon class='ml-2'>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </a>
      <!--
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>-->
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>