var $ = require('dragonjs'),
    from = $.Point(),
    to = $.Point();

module.exports = $.ClearSprite({
    name: 'line',
    depth: 10
}).extend({
    update: function () {
        var tar1 = $.screen('flush').sprite('target1').mask,
            tar2 = $.screen('flush').sprite('target2').mask,
            m = (tar1.y - tar2.y) / (tar1.x - tar2.x),
            b = tar1.y - m * tar1.x;
        from.x = 0;
        from.y = b;
        to.x = $.canvas.width;
        to.y = m * $.canvas.width + b;
    },
    draw: function (ctx) {
        ctx.strokeStyle = '#73ff00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
    }
});
