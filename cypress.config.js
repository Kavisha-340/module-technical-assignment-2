const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 200000, 
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
