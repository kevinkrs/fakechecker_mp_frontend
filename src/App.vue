<script>
import MenuHeader from '@/components/MenuHeader';

export default {
  name: 'App',

  components: {
    MenuHeader,
  },

  data: () => ({
    //test
  }),
};
</script>

<template>
  <v-app>
    <v-main class='px-16'>
      <MenuHeader />
    </v-main>
  </v-app>
</template>
