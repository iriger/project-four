// import { defineConfig } from "Cypress";
// import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
// import createBundler  from "@bahmutov/cypress-esbuild-preprocessor";
// import esbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";




const { defineConfig } = require("cypress");
const {addCucumberPreprocessorPlugin}=require ("@badeball/cypress-cucumber-preprocessor");
const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
const esbuildPlugin= require ("@badeball/cypress-cucumber-preprocessor/esbuild");
// const {default:createEsbuildPlugin}=require("@badeball/cypress-cucumber-preprocessor");

const { allureCypress } = require ("allure-cypress/reporter");
// import { allureCypress } from "allure-cypress/reporter";
// import cypressOnFix from "cypress-on-fix";

const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({

// export default defineConfig({
  e2e: {
    specPattern:"cypress/e2e/features/*.feature",
    viewportWidth: 1440,
    baseUrl: process.env.CYPRESS_BASE_URL,
    // baseUrl: "https://telnyx.com",
    watchForFileChanges: false,
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const allurePlugin = allureCypress(on, config);

      on("after:run", (results) => {
        allurePlugin.onAfterRun(results);
      });
      // on = cypressOnFix(on);
      await addCucumberPreprocessorPlugin (on, config);
      const preprocessor = esbuildPlugin.default || esbuildPlugin;
      on ("file:preprocessor", createBundler(
        {
      
          plugins: [preprocessor(config)],
        }
      ));
      // allureCypress(on, config);
      // allureCypress(on, config, {
      //   resultsDir: "allure-results",
      // });   
return config;

    },
  },
});
