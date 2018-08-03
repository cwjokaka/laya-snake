/*
* name;
*/
var Enemy = (function (superClass) {

    function Enemy(opts) {
        Enemy.super(this);
        
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