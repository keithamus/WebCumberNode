module.exports = function(callback) {

    if ( callback ) {

        // Get our test properties
        var PROPERTIES = require('./testproperties.json');

        // Override any testproperty from command line with --[PROPERTY]=[VALUE]
        process.argv.forEach(function (arg) {
            arg = arg.match(/^--([A-Za-z]+)=(.*)/);

            // Only look for --[PROPERTY] style args, everything else can be forgotten
            if (arg == null || !arg[1]) return;


            // If the JSON file has the argument to override, then override it.
            if (PROPERTIES.hasOwnProperty(arg[1])) {
                PROPERTIES[arg[1]] = arg[2];

            // Otherwise proclaim that it is an unrecognised argument
            } else {
                console.log('Unrecognised argument ' + arg[1]);
            }

        });

        console.log('Loading browser ' + PROPERTIES.browser);
        var browser = require("webdriverio").remote({
            logLevel: PROPERTIES.logLevel || 'none',
            host: PROPERTIES.host,
            desiredCapabilities: {
                browserName: PROPERTIES.browser || 'firefox'
            }
        });

        // Inject the browser into the callback, we don't need anything else
        callback(browser);
    }
};
