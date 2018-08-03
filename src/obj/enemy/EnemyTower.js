/*
* name;
*/
var EnemyTower = (function (superClass) {
    function EnemyTower(opts) {
        opts.color = 'red';
        superClass.call(this, opts);
    }

    Laya.class(EnemyTower, 'enemyTower', superClass);


    return EnemyTower;
}(Enemy));