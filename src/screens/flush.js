var $ = require('dragonjs');

module.exports = $.Screen({
    name: 'flush',
    collisionSets: [
        require('../collisions/flush.js')
    ],
    spriteSet: [
        require('../sprites/static.js'),
        require('../sprites/target.js')
    ],
    one: {
        ready: function () {
            this.start();
        }
    }
}).extend({
    draw: function (ctx) {
        this.base.draw(ctx);
    }
});
