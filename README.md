# WebCumberNode Boilerplate
## Cucumber JS with [WebDriverIO](http://webdriver.io) in Node.JS

This is a little demo project, to run NodeJS, using Cucumber.js as a behaviour
testing suite, for automated browser tests.

It gives you a base foundation to set up running BDD tests in any environment
that has Node.JS and Selenium2-Server-Standalone WebDriver.

## Ingredients

  * 1 part Node.JS, with a sprinkling of NPM
  * 1 part fresh Virtual Machine, running the Selenium2-Server-Standalone pakcage.
  * If you don't have the selenium server, get it [here](http://selenium.googlecode.com/files/selenium-server-standalone-2.20.0.jar) (.jar download)
  * You don't need a Virtual Machine to run selenium, although it makes the whole thing taste better
  * The VM should have one/many/all of Firefox, Chrome, Opera, IE, Safari

## Instructions

First you need to pre-heat the VM, by turning it on and loading selenium server.
Make sure you have the host-name set in ./features/support/testproperties.json
to the IP address of your VM (or just 127.0.0.1 if you're running locally).

Also prepare your environment by running `npm install`. If you're feeling
brave you can also install the dependencies globally, which helps with Cucumber
as it installs a bin in your $PATH.

Now run `./node-modules/cucumber/bin/cucumber.js`, or, if you installed globally,
just `cucumber.js` will do.

Watch as your selenium server spins up a fresh copy of firefox, visits Google.com
and runs a search, then shuts down and repeats for a second test.

If you want to change browser, just change the testproperties or run
`cucumber.js --browser='internet explorer'`, for example or
`cucumber.js --browser=safari`.

If you want to test in chrome, you'll also need the ChromeDriver package.
Consult the Selenium wiki for more.

## File structure

Here is a categorisation of the main files you'll want to look at/edit:

  * features/*.feature - the story files you want to run.
  * support/teardown.js - closes the browser after each scenario
  * support/testproperties.json - Configuration stuffs
  * support/world.js - This is the bootstrapper for [WebDriverIO](http://webdriver.io), be careful!
  * step_definitions/generic.js - Good place to keep testwide step definitions, such as "I click <id>"
  * step_definitions/*.js - Other step definitions, ideally you should have a 1-1 relationship between feature file and specific definitions as the complimentary .js file
