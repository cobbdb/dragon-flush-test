var $ = require('dragonjs'),
    Ghost = require('./ghost.js'),
    line = require('./line.js');

module.exports = Ghost().extend({
    update: function () {
        var xpos = $.screen('flush').sprite('static').mask.right;
        this.move($.Point(
            xpos,
            line.solveY(xpos)
        ));
    }
});
