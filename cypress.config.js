const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: true,
    defaultCommandTimeout:3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
