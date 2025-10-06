const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
     baseUrl: "https://startnimble.com",
    env: {
      loginUrl: "/login"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
