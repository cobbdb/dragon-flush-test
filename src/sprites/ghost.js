var $ = require('dragonjs');

module.exports = function () {
    return $.ClearSprite({
        size: $.Dimension(30, 30),
        mask: $.Rectangle(),
        depth: 50
    }).extend({
        draw: function (ctx) {
            ctx.strokeStyle = '#63869c';
            ctx.lineWidth = 2;
            ctx.strokeRect(
                this.pos.x,
                this.pos.y,
                this.size.width,
                this.size.height
            );
        }
    });
};
