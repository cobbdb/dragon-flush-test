var $ = require('dragonjs');

module.exports = function () {
    return $.ClearSprite({
        name: 'Z',
        size: $.Dimension(30, 30),
        mask: $.Rectangle(),
        depth: 85,
        collisionSets: require('../collisions/flush.js'),
        on: {
            'collide/static': function () {
                this.color = this.touchColor;
            },
            'separate/static': function () {
                this.color = this.defaultColor;
            }
        }
    }).extend({
        defaultColor: '#63869c',
        touchColor: '#ffd800',
        color: '#63869c',
        draw: function (ctx) {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.strokeRect(
                this.pos.x,
                this.pos.y,
                this.size.width,
                this.size.height
            );
            ctx.fillStyle = this.color;
            ctx.font = '16px serif';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillText(
                this.name,
                this.pos.x + this.size.width / 2,
                this.pos.y + this.size.height / 2
            );
        },
        move: function (dest) {
            dest.x = global.Math.min(dest.x, $.canvas.width - this.size.width);
            dest.x = global.Math.max(dest.x, 0);
            dest.y = global.Math.min(dest.y, $.canvas.height - this.size.height);
            dest.y = global.Math.max(dest.y, 0);
            this.base.move(dest);
        }
    });
};
