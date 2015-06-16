var $ = require('dragonjs'),
    Static = require('../sprites/static.js');

module.exports = $.Screen({
    name: 'flush',
    collisionSets: [
        require('../collisions/flush.js')
    ],
    spriteSet: [
        require('../sprites/target.js'),
        require('../sprites/static.js')
    ],
    one: {
        ready: function () {
            this.start();
        }
    }
}).extend({
    draw: function (ctx, debug) {
        ctx.fillStyle = '#fafafa';
        ctx.fillRect(0, 0, $.canvas.width, $.canvas.height);
        this.base.draw(ctx, debug);
    }
});
