var $ = require('dragonjs'),
    from = $.Point(),
    to = $.Point();

module.exports = $.ClearSprite({
    depth: 80
}).extend({
    solveX: function (y) {
        return this.finite() ? (y - this.b) / this.m : null;
    },
    solveY: function (x) {
        return this.finite() ? this.m * x + this.b : null;
    },
    m: 0,
    b: 0,
    finite: function () {
        return global.isFinite(this.m);
    },
    update: function () {
        var tar1 = $.screen('flush').sprite('target1').mask,
            tar2 = $.screen('flush').sprite('target2').mask;
        this.m = (tar1.y - tar2.y) / (tar1.x - tar2.x);
        this.b = tar1.y - this.m * tar1.x;
        from.x = this.finite() ? 0 : $.canvas.width / 2;
        from.y = this.finite() ? this.b : 0;
        to.x = this.finite() ? $.canvas.width : $.canvas.width / 2;
        to.y = this.finite() ? this.m * $.canvas.width + this.b : $.canvas.height;
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
