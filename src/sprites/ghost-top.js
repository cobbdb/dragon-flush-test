var $ = require('dragonjs'),
    Ghost = require('./ghost.js'),
    line = require('./line.js');

module.exports = Ghost().extend({
    update: function () {
        var ypos = $.screen('flush').sprite('static').pos.y - this.size.height;
        this.move($.Point(
            line.solveX(ypos) || $.canvas.width / 2,
            ypos
        ));
    }
});
