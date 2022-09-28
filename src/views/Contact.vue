<script>
export default {
  /* eslint-disable */
  name: 'Contact',

  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length >= 5) || 'Message must be more than 5 characters',
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<template>
  <v-content class='pa-8'>
    <div class='contact'>
      <v-container>
        <h1>Contact Us</h1>
        <v-form
          ref='form'
          v-model='valid'
          lazy-validation
        >
          <v-text-field
            v-model='name'
            :counter='20'
            :rules='nameRules'
            label='Name'
            required
          ></v-text-field>

          <v-text-field
            v-model='email'
            :rules='emailRules'
            label='E-mail'
            required
          ></v-text-field>

          <v-textarea
            v-model='message'
            :rules='messageRules'
            label='Message'
            required
          ></v-textarea>

          <v-btn
            :disabled='!valid'
            class='mr-4'
            @click='submit'
          >
            Submit
          </v-btn>

          <v-btn
            class='mr-4'
            @click='reset'
          >
            Reset
          </v-btn>
        </v-form>
      </v-container>
    </div>
  </v-content>
</template>
