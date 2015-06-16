var $ = require('dragonjs');

module.exports = function (name, pos) {
    var dragging = false;
    return $.ClearSprite({
        name: name,
        pos: pos,
        size: $.Dimension(8, 8),
        mask: $.Circle(),
        depth: 100,
        collisionSets: [
            $.collisions
        ],
        on: {
            'colliding/screendrag': function () {
                dragging = true;
                $.Mouse.on.up(function () {
                    dragging = false;
                });
            }
        }
    }).extend({
        update: function () {
            if (dragging) {
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
