const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',  // Set base URL for all tests
    video: true,  // Ensure Cypress records videos
    screenshotsFolder: "cypress/screenshots", // Store screenshots
    videosFolder: "cypress/videos",  // Ensure videos are saved here

    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    },
  },
});
