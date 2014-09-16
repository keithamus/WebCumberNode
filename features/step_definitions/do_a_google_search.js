module.exports = function () {
    console.log('Do a Google Search Steps Loaded');
    this.World = require('../support/world');

    /* "<Then> I should see search results" */
    this.Then(/^I should see search results$/, function (callback) {

        var inputId = '#resultStats';

        this.waitFor(inputId, 3000, function (err) {

            if (err) {
                return callback.fail(new Error('Element ' + inputId + ' was not found after 3s'));
            }

            this.getText(inputId, function (err, text) {

                text = (''+text).match(/^About ([\d,]+) .*$/);
                text = parseInt(text[1].replace(/,/g,''), 10);

                // Fail this test if the search results are null
                if (text === 0 || isNaN(text))
                    return callback.fail(new Error('Expected to see some results, but saw 0 (captured result count is ' + number + ')'));

                // Pass and say about it.
                console.log( '(Saw ' + text + ' results)');
                return callback();
            });

        });
    });
};
