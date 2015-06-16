var $ = require('dragonjs');

module.exports = function () {
    return $.ClearSprite({
        name: 'ghost',
        size: $.Dimension(30, 30),
        mask: $.Rectangle(),
        depth: 1
    }).extend({
        update: function () {
            this.move(
                $.screen('flush').sprite('target1').pos
            );
        },
        draw: function (ctx) {
            ctx.strokeStyle = '#63869c';
            ctx.lineWidth = 1;
            ctx.strokeRect(
                this.pos.x,
                this.pos.y,
                this.size.width,
                this.size.height
            );
        }
    });
};
