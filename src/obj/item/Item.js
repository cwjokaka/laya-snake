/*
* name;
*/
var Item = (function (superClass) {

    var Rectangle = laya.maths.Rectangle;

    function Item(opts) {
        Item.super(this);
        this.x = opts.x || 0;
        this.y = opts.y || 0;
        this.setBounds(new Rectangle(0, 0, gameConfig.node.WIDTH, gameConfig.node.HEIGHT));
        this.graphics.drawRect(0, 0, gameConfig.node.WIDTH, gameConfig.node.HEIGHT, opts.color || '#dddddd');   
    }
    Laya.class(Item, 'item', superClass);

    var _proto = Item.prototype;
    // 当被英雄碰到时触发
    _proto.onHeroFound = function(hero) {
        console.log('Hero被找到啦');
        var hero = new Hero({});
        ObjectHolder.heroLink.addHero(hero);
    
    }


    return Item;
}(Laya.Sprite));