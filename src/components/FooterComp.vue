<script>
export default {
  name: 'FooterComp',
  data() {
    return {
      items: [
        { title: 'Impressum', to: '/impressum' },
      ],
    };
  },
};

</script>

<template>
  <v-footer
    color='primary lighten-2'
    padless
  >
    <v-row
      justify='center'
      no-gutters
    >
      <v-btn
        v-for='(item, idx) in items'
        :key='idx'
        color='white'
        text
        rounded
        class='my-2'
        :to='item.to'
      >
        {{ item.title }}
      </v-btn>
      <v-btn
        color='white'
        text
        rounded
        class='my-2'
        href='https://github.com/kevinkrs/masterproject_backend'
        target='_blank'
      >
        Github
      </v-btn>
      <v-col cols='12'>
        <div class='primary lighten-1 py-4 text-center white--text'>
          {{ new Date().getFullYear() }} — <strong>Fakechecker</strong>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>