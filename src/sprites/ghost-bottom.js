var $ = require('dragonjs'),
    Ghost = require('./ghost.js'),
    line = require('./line.js');

module.exports = Ghost().extend({
    name: 'B',
    update: function () {
        var ypos = $.screen('flush').sprite('static').mask.bottom;
        this.move($.Point(
            line.solveX(ypos) || $.canvas.width / 2,
            ypos
        ));
        this.base.update();
    }
});
