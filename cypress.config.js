const { defineConfig } = require('cypress');
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.flashscore.com',
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
  },
});