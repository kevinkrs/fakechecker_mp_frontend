<script>
import MenuHeader from '@/components/MenuHeader';
import FooterComp from '@/components/FooterComp';

export default {
  name: 'App',

  components: {
    FooterComp,
    MenuHeader,
  },

  data: () => ({
    //test
  }),
};
</script>

<template>
  <v-app>
    <MenuHeader />
    <FooterComp />
  </v-app>
</template>
