<template>
  <v-app>
    <v-main>
      <HeaderHome />
      <InputUser />
    </v-main>
  </v-app>
</template>

<script>
import HeaderHome from './components/HeaderHome';
import InputUser from './components/InputUser';

export default {
  name: 'App',

  components: {
    HeaderHome,
    InputUser,
  },

  data: () => ({
    //
  }),
};
</script>
