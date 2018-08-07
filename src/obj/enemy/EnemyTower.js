/*
* name;
*/
var EnemyTower = (function (superClass) {
    function EnemyTower(opts) {
        opts.color = 'white';
        superClass.call(this, opts);
        
        // 射击范围
        this.range = 200;
        // 攻击间隔(帧数)
        this.interval = 60;
    }

    Laya.class(EnemyTower, 'enemyTower', superClass);

    var _proto = EnemyTower.prototype;

    _proto.move = function() {
        console.log('塔不移动');
    }

    _proto.attack = function() {
        var heroLink = ObjectHolder.heroLink;
        
        if(Laya.timer.currFrame % this.interval === 0){
            // console.log('开始攻击');
            for (var i=0; i<heroLink.numChildren; i++) {
                var curHero = heroLink.getChildAt(i);
                var hx = curHero.x, hy = curHero.y;
                var ex = this.x, ey = this.y;
                var distance = Math.sqrt(Math.pow(hx - ex, 2) + Math.pow(hy - ey, 2));
                if (distance <= this.range) {
                    // console.log('进入射击范围:' + this.range);
                    var bullet = new TowerBullet({x: this.x + 20, y: this.y + 20, target: curHero});
                    ObjectHolder.bulletBox.addChild(bullet);
                    break;
                }
            }   

        }

    }



    return EnemyTower;
}(Enemy));