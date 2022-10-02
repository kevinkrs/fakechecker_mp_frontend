const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  mode: 'production',
  transpileDependencies: [
    'vuetify',
  ],
});
