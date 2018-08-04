/*
* name;
*/
var Bullet = (function (superClass) {
    function Bullet(opts) {
        Bullet.super(this);
        this.target = opts.target || undefined;
    }

    Laya.class(Bullet, 'bullet', superClass);

    var _proto = Bullet.prototype;

    _proto.move = function() {
        if (!this.target) {
            
        }
        var heroLink = ObjectHolder.HeroLink;
        console.log('子弹移动');
    }

    return Bullet;
}(Laya.Sprite));