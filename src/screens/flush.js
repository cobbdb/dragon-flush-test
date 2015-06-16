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
            $.canvas.width / 2,
            $.canvas.height / 2 - 60
        )),
        Target('target2', $.Point(
            $.canvas.width * 0.3,
            $.canvas.height * 0.1
        )),
        require('../sprites/line.js'),
        require('../sprites/real.js'),
        require('../sprites/ghost-top.js'),
        require('../sprites/ghost-right.js'),
        require('../sprites/ghost-bottom.js'),
        require('../sprites/ghost-left.js')
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
