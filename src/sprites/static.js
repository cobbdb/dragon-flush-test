﻿var $ = require('dragonjs');

module.exports = $.ClearSprite({
    name: 'static',
    pos: $.Point(
        $.canvas.width / 2 - 50,
        $.canvas.height / 2 - 50
    ),
    size: $.Dimension(100, 100),
    mask: $.Rectangle(),
    depth: 0,
    collisionSets: require('../collisions/flush.js')
}).extend({
    draw: function (ctx) {
        ctx.fillStyle = '#666';
        ctx.fillRect(
            this.pos.x,
            this.pos.y,
            this.size.width,
            this.size.height
        );
    }
});
