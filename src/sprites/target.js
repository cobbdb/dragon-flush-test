var $ = require('dragonjs');

module.exports = $.ClearSprite({
    name: 'target',
    pos: $.Point(
        $.canvas.width / 2 - 3,
        $.canvas.height / 2 - 3
    ),
    size: $.Dimension(6, 6),
    mask: $.Circle(),
    depth: 10
}).extend({
    draw: function (ctx) {
        ctx.fillStyle = '#b93a38';
        ctx.beginPath();
        ctx.arc(
            this.pos.x,
            this.pos.y,
            this.mask.radius,
            0, 2 * 3.1415
        );
        ctx.fill();
        this.base.draw(ctx);
    },
    update: function () {
        if ($.Mouse.is.dragging) {
            this.move($.Mouse.offset);
        }
        this.base.update();
    }
});
