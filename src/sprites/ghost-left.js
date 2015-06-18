var $ = require('dragonjs'),
    Ghost = require('./ghost.js'),
    line = require('./line.js');

module.exports = Ghost().extend({
    name: 'L',
    update: function () {
        var xpos = $.screen('flush').sprite('static').mask.right;
        this.move($.Point(
            xpos,
            line.solveY(xpos) || 0
        ));
        this.base.update();
    }
});
