module.exports = function () {
    console.log('Generic Steps Loaded');
    this.World = require('../support/world.js');

    /* "<Given> I visit <url>" */
    this.Given(/^I visit (https?:\/\/.*\..*)$/, function (url, callback) {
        this.init().url(url, callback);
    });

    /* "<When> I enter <text> into <inputId>" */
    this.When(/^I enter '(.*)' into '(.*)'$/, function (text, inputId, callback) {

        inputId = '#' + inputId;

        this.waitFor(inputId, 3000, function (err, found) {

            if (!err) {
                this.setValue(inputId, text, callback);
                return;
            }

            callback.fail(new Error('Element ' + inputId + ' was not found after 3s'));

        });
    });
};
