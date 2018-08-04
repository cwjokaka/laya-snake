/*
* 塔的子弹;
*/
var TowerBullet = (function (superClass) {
    function TowerBullet(opts) {
        opts.color = 'white';
        superClass.call(this, opts);
    }

    Laya.class(TowerBullet, 'bullet', superClass);

    var _proto = Bullet.prototype;

    _proto.move = function() {
        console.log('塔子弹移动');
    }

    _proto.onCrash = function(hero) {
        console.log('撞上了');
        this.destroy();
    }

    return TowerBullet;
}(Bullet));