/*
* name;
*/
var Bullet = (function (superClass) {
    function Bullet(opts) {
        Bullet.super(this);
        this.target = opts.target || undefined;
        // 填充颜色
        this.graphics.drawRect(gameConfig.node.WIDTH / 3 , 0, gameConfig.node.WIDTH / 3, gameConfig.node.HEIGHT, opts.color || gameConfig.node.COLOR);   

    }

    Laya.class(Bullet, 'bullet', superClass);

    var _proto = Bullet.prototype;

    _proto.move = function() {
        if (!this.target) {
            
        }
        var heroLink = ObjectHolder.HeroLink;
        console.log('子弹移动');
    }

    _proto.onCrash = function(hero) {
        console.log('撞上了');
        this.destroy();
    }

    return Bullet;
}(Laya.Sprite));