module.exports = function (grunt) {
    grunt.config.merge({
        browserify: {
            build: {
                files: {
                    'dist/dragon-flush-test.js': [
                        'src/*.js'
                    ]
                }
            }
        }
    });
};
