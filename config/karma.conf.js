module.exports = function (config) {
    config.set({
        basePath: '../',

        files: [
          'app/lib/angular/angular.min.js',
          'app/lib/angular/angular-*.js',
          'app/js/*.js',
            'app/js/**/*.js',
          'test/unit/**/*.js'
        ],

        exclude: [

    ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};
