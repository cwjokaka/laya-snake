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
        if (!this.target) {
            
        }
        var heroLink = ObjectHolder.HeroLink;
        console.log('子弹移动');
    }


    return TowerBullet;
}(Bullet));