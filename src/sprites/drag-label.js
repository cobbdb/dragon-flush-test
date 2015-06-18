var $ = require('dragonjs');

module.exports = function (pos) {
    return $.ui.Label({
        text: '< drag me!',
        pos: pos,
        depth: 200,
        style: function (ctx) {
            ctx.font = '24px Comic Sans MS';
            ctx.textBaseline = 'top';
            ctx.textAlign = 'left';
            ctx.fillStyle = '#333';
        }
    }).extend({
        update: function () {
            var targ1 = $.screen('flush').sprite('target1'),
                targ2 = $.screen('flush').sprite('target2');
            if (targ1.dragging || targ2.dragging) {
                this.stop();
            }
        }
    });
};
