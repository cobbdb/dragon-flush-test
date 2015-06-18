var $ = require('dragonjs'),
    Ghost = require('./ghost.js'),
    line = require('./line.js');

module.exports = Ghost().extend({
    update: function () {
        var xpos = $.screen('flush').sprite('static').pos.x - this.size.width;
        this.move($.Point(
            xpos,
            line.solveY(xpos) || $.canvas.height
        ));
    }
});
