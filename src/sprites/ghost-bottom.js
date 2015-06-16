var $ = require('dragonjs'),
    Ghost = require('./ghost.js'),
    line = require('./line.js');

module.exports = Ghost().extend({
    update: function () {
        var ypos = $.screen('flush').sprite('static').mask.bottom;
        this.move($.Point(
            line.solveX(ypos),
            ypos
        ));
    }
});
