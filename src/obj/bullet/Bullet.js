/*
* name;
*/
var Bullet = (function (superClass) {
    
    var Rectangle = laya.maths.Rectangle;

    function Bullet(opts) {
        Bullet.super(this);
        this.target = opts.target || undefined;
        this.x = opts.x || 0;
        this.y = opts.y || 0;
        this.pivotX = gameConfig.node.WIDTH / 2;
        this.pivotY = gameConfig.node.WIDTH / 2;
        // 移动速度
        this.speed = opts.speed || 1;
        // 攻击力
        this.atk = opts.atk || 20;
        // 填充颜色
        this.graphics.drawRect(gameConfig.node.WIDTH / 3 , 0, gameConfig.node.WIDTH / 3, gameConfig.node.HEIGHT, opts.color || gameConfig.node.COLOR);   
        // 添加边界
        this.setBounds(new Rectangle(gameConfig.node.WIDTH / 3, 0, gameConfig.node.WIDTH / 3, gameConfig.node.HEIGHT));
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