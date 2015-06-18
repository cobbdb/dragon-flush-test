var $ = require('dragonjs');

module.exports = function (name, pos) {
    return $.ClearSprite({
        name: name,
        pos: pos,
        size: $.Dimension(8, 8),
        mask: $.Circle(),
        depth: 100,
        collisionSets: [
            $.collisions
        ]
    }).extend({
        update: function () {
            if (this.dragging) {
                this.move($.Mouse.offset);
            }
            this.base.update();
        },
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
        }
    });
};
