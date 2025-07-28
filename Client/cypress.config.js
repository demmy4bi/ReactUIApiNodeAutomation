import { defineConfig } from "cypress";

//const { defineConfig } = require('cypress');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173/auth",
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 120000,
    viewportHeight: 800,
    viewportWidth: 1500,
    chromeWebSecurity: false,
  },
});
