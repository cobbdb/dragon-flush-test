var $ = require('dragonjs');

/**
 * @return {Sprite}
 */
module.exports = function (opts) {
    return $.Sprite({
        name: 'target',
        collisionSets: [
            $.collisions
        ],
        mask: $.Rectangle(
            $.Point(),
            $.Dimension(64, 64)
        ),
        strips: {
            'target': $.AnimationStrip({
                sheet: $.SpriteSheet({
                    src: 'target.png'
                }),
                start: $.Point(10, 10),
                size: $.Dimension(64, 64),
                frames: 5,
                speed: 10
            })
        },
        startingStrip: 'target',
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
