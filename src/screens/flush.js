var $ = require('dragonjs'),
    Target = require('../sprites/target.js');

module.exports = $.Screen({
    name: 'flush',
    collisionSets: [
        require('../collisions/flush.js')
    ],
    spriteSet: [
        require('../sprites/static.js'),
        Target('target1', $.Point(
            $.canvas.width * 0.2,
            $.canvas.height * 0.1
        )),
        Target('target2', $.Point(
            $.canvas.width * 0.9,
            $.canvas.height * 0.8
        )),
        require('../sprites/line.js'),
        require('../sprites/real.js'),
        require('../sprites/ghost-top.js')
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
