<script>
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
            FactsChecker
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

      <v-toolbar-title>Cool name we have to come up with</v-toolbar-title>

      <v-spacer></v-spacer>

      <!--      <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

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