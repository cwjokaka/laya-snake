/*
* 对象管理者
*/
var ObjectHolder = (function () {

    var obj = {};

    obj.init = function() {
        this.heroLink = new HeroLink({});
        this.itemBox = new Laya.Sprite();
        this.enemyBox = new Laya.Sprite();
    }

    return obj;
}());