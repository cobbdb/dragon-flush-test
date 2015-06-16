var $ = require('dragonjs');

/**
 * @return {Sprite}
 */
module.exports = function (opts) {
    return $.Sprite({
        name: 'static',
        collisionSets: [
            $.collisions
        ],
        mask: $.Rectangle(
            $.Point(),
            $.Dimension(64, 64)
        ),
        strips: {
            'static': $.AnimationStrip({
                sheet: $.SpriteSheet({
                    src: 'static.png'
                }),
                start: $.Point(10, 10),
                size: $.Dimension(64, 64),
                frames: 5,
                speed: 10
            })
        },
        startingStrip: 'static',
        pos: $.Point(100, 100),
        depth: 2,
        on: {
            'colliding/screentap': function () {
            }
        }
    }).extend({
        update: function () {
            this.base.update();
        }
    });
};