/*
* 塔的子弹;
*/
var TowerBullet = (function (superClass) {
    function TowerBullet(opts) {
        opts.color = 'black';
        superClass.call(this, opts);
    }

    Laya.class(TowerBullet, 'towerBullet', superClass);

    var _proto = Bullet.prototype;

    _proto.move = function() {
        var targetX = this.target.x + gameConfig.grid.WIDTH / 2;
        var targetY = this.target.y + gameConfig.grid.HEIGHT / 2;

        var x = Math.abs(this.x-targetX);
        var y = Math.abs(this.y-targetY);
        var distance = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
        var cos = y / distance;
        var radina = Math.acos(cos);                    //用反三角函数求弧度
        var angle = Math.floor(180/(Math.PI/radina));   //将弧度转换成角度
        // console.log(radina);

        if(targetX>this.x && targetY>this.y){
            angle = 180 - angle;
            radina = Math.PI - radina;
        }

        if(targetX==this.x && targetY>this.y){
            angle = 180;
            radina = Math.PI;
        }

        if(targetX>this.x && targetY==this.y){
            angle = 90;
            radina = Math.PI / 2;
        }

        if(targetX<this.x && targetY>this.y){
            angle = 180+angle;
            radina = Math.PI + radina;
        }

        if(targetX<this.x && targetY==this.y){
            angle = 270;
            radina = (Math.PI * 4) / 3;
        }

        if(targetX<this.x && targetY<this.y){
            angle = 360 - angle;
            radina = Math.PI * 2 - radina;
        }

        var deltaX = Math.sin(radina) * 2;
        var deltaY = - Math.cos(radina) * 2;

        this.x = this.x + deltaX;
        this.y = this.y + deltaY;

        this.rotation = angle;
    }

    _proto.onCrash = function(hero) {
        console.log('撞上了');
        this.destroy();
    }

    return TowerBullet;
}(Bullet));