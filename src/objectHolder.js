/*
* 对象管理者
*/
var objectHolder = (function () {

    var objectHolder = {};

    objectHolder.heroLink = new HeroLink({});
    objectHolder.itemBox = new Laya.Sprite();

    objectHolder.enemyBox = new Laya.Sprite();

    return objectHolder;
}());