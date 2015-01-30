# WebCumberNode Boilerplate

**NOTE:** This is a fork of [https://github.com/keithamus/WebCumberNode](https://github.com/keithamus/WebCumberNode)
with some minor changes: chainable WebDriverIO methods, code formatting and read me clarifications  

## [Cucumber.JS](https://github.com/cucumber/cucumber-js) with [WebDriverIO](http://webdriver.io) in Node.JS

This is a demo project showing how to write a behaviour driven testing suite for automated browser tests.

It automates two google searches, checks that it returns some results using the firefox browser.

## Dependencies
- node.js
- [selenium-standalone server](https://github.com/vvo/selenium-standalone) 
- [cucumber.js](https://github.com/cucumber/cucumber-js)
- [WebDriverIO](https://github.com/webdriverio/webdriverio). For complete API documentation: [http://www.webdriver.io/](http://www.webdriver.io/)


## Running Boilerplate
  1. Install the [selenium-standalone](https://github.com/vvo/selenium-standalone) node package:
     ``` terminal
      npm install selenium-standalone@latest -g
      selenium-standalone install
     ```
      
  2. Git clone this boilerplate project:
    ```terminal
      git clone git@github.com:dennislo/WebCumberNode.git
    ```
    
  3. Go into this boilerplate project and install it's dependencies:
    ```terminal
      cd WebCumberNode
      npm install
    ```
  
  4. Start the selenium-standalone server:
    ```terminal
      selenium-standalone start
    ```
  
  5. Kick off the cucumber test suite:
    ```terminal
      `./node-modules/cucumber/bin/cucumber.js`
    ```
    or, if you installed cucumber.js globally, just `cucumber.js` will do
      
Now watch as your selenium server spins up a fresh copy of firefox, visits Google.com
and runs a search, then shuts down and repeats for a second test.
 
## Overriding test properties

If you want to change browser, just change the testproperties or run
`cucumber.js --browser='internet explorer'`, for example or
`cucumber.js --browser=safari`.

If you want to test in chrome, you'll also need the ChromeDriver package.
Consult the Selenium wiki for more.

## Selenium Standalone Server 

  * If you don't have the selenium server, get it [here](http://selenium.googlecode.com/files/selenium-server-standalone-2.20.0.jar) (.jar download)
  * You don't need a Virtual Machine to run selenium, although it makes the whole thing taste better
  * The VM should have one/many/all of Firefox, Chrome, Opera, IE, Safari

## File structure

Here is a categorisation of the main files you'll want to look at/edit:

  * `features/*.feature` - the story files you want to run
  * `support/teardown.js` - closes the browser after each scenario. For more information see [after_hooks](https://github.com/cucumber/cucumber-js#after-hooks)
  * `support/testproperties.json` - WebDriverIO browser configuration used by `world.js`
  * `support/world.js` - This is the bootstrapper for [WebDriverIO](http://webdriver.io). Be careful when editing this file!
  * `step_definitions/generic.js` - Good place to keep testwide step definitions, such as "I click <id>"
  * `step_definitions/*.js` - Other step definitions, ideally you should have a 1-to-1 relationship between feature file and specific definitions as the complimentary .js file
