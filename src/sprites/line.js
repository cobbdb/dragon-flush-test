var $ = require('dragonjs'),
    from = $.Point(),
    to = $.Point();

module.exports = $.ClearSprite({
    depth: 80
}).extend({
    solveX: function (y) {
        return (y - this.b) / this.m;
    },
    solveY: function (x) {
        return this.m * x + this.b;
    },
    m: 0,
    b: 0,
    update: function () {
        var tar1 = $.screen('flush').sprite('target1').mask,
            tar2 = $.screen('flush').sprite('target2').mask;
        this.m = (tar1.y - tar2.y) / (tar1.x - tar2.x);
        this.b = tar1.y - this.m * tar1.x;
        from.x = 0;
        from.y = this.b;
        to.x = $.canvas.width;
        to.y = this.m * $.canvas.width + this.b;
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
