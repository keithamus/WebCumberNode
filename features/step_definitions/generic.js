'use strict';

module.exports = function () {
  console.log('Generic Steps Loaded');
  this.World = require('../support/world.js');

  /* "<Given> I visit <url>" */
  this.Given(/^I visit (https?:\/\/.*\..*)$/, function (url, callback) {
    this.init().url(url, callback);
  });

  /* "<When> I enter <text> into <inputId>" */
  this.When(/^I enter '(.*)' into '(.*)'$/, function (text, inputId, callback) {

    var htmlInputId = '#' + inputId;
    var htmlButtonClass = 'button.gbqfb';
    this.waitFor(htmlInputId, 5000, function (err, found) {

      if (!err) {
        this.setValue(htmlInputId, text, function (err) {

          if (err) {
            callback.fail(new Error('Element ' + htmlInputId + ' was not found'));
          }

          this.click(htmlButtonClass, function () {
            return callback();
          });

        })
      }


    });
  });

  /* "<When> I enter <text> into <inputId> (chainable version)" */
  this.When(/^I enter '(.*)' into '(.*)' \(chainable version\)$/, function (text, inputId, callback) {

    var htmlInputId = '#' + inputId;
    var htmlButtonClass = 'button.gbqfb';

    this.waitFor(htmlInputId, 5000).setValue(htmlInputId, text).click(htmlButtonClass, callback);

  });

};
