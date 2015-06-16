var $ = require('dragonjs');

module.exports = function (opts) {
    return $.ClearSprite({
        pos: opts.pos,
        size: $.Dimension(20, 20),
        mask: $.Rectangle(),
        depth: 5
    }).extend({
        draw: function (ctx) {
            ctx.strokeStyle = '#63869c';
            ctx.strokeRect(
                this.pos.x,
                this.pos.y,
                this.size.width,
                this.size.height
            );
        }
    });
};
