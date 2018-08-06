/*
* name;
*/
var Enemy = (function (superClass) {

    function Enemy(opts) {
        Enemy.super(this);
        this.x = opts.x || 0;
        this.y = opts.y || 0;
        this.maxHp = opts.maxHp;
        this.hp = opts.hp;
        this.graphics.drawRect(0, 0, gameConfig.node.WIDTH, gameConfig.node.HEIGHT, opts.color || 'green');   
    }
    Laya.class(Enemy, 'enemy', superClass);

    var _proto = Enemy.prototype;

    _proto.move = function() {
        console.log('敌人移动中');
    }

    _proto.attack = function() {
        console.log('敌人攻击中');
    }


    return Enemy;

}(Laya.Sprite));