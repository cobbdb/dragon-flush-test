var $ = require('dragonjs');

module.exports = $.ClearSprite({
    name: 'real',
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
        ctx.fillStyle = '#e1e1e1';
        ctx.fillRect(
            this.pos.x,
            this.pos.y,
            this.size.width,
            this.size.height
        );
    }
});
