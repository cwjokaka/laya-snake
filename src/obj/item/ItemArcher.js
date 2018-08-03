/*
* name;
*/
var ItemArcher = (function (superClass) {
    function ItemArcher(opts) {
        opts.color = 'red';
        superClass.call(this,opts);
    }

    Laya.class(ItemArcher, 'itemArcher', superClass);

    var _proto = ItemArcher.prototype;

    // 当被英雄碰到时触发
    _proto.onHeroFound = function(hero) {
        console.log('弓箭手被找到啦');
        var archer = new Archer({});
        ObjectHolder.heroLink.addHero(archer);
    }



    return ItemArcher;
}(Item));