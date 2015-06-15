module.exports = function (grunt) {
    grunt.config.merge({
        uglify: {
            build: {
                files: {
                    'dist/dragon-flush-test.min.js': [
                        'dist/dragon-flush-test.js'
                    ]
                }
            }
        }
    });
};
