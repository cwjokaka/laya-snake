/*
* name;
*/
var Archer = (function (superClass) {

    function Archer(opts) {
        opts.color = 'red';
        superClass.call(this, opts);
    }

    Laya.class(Archer, 'archer', superClass);

    var _proto = Archer.prototype;
    // 初始化
   _proto.init = function(opts) {
        // // 填充颜色
        // this.graphics.drawRect(0, 0, gameConfig.node.WIDTH, gameConfig.node.HEIGHT, opts.color || gameConfig.node.COLOR);  
        // var img = new Image();
        //设置皮肤(取图集中小图的方式就是 原小图目录名/原小图资源名.png)
        // img.skin = "Aliens/alienGreen_round.png";
        // var t = Laya.loader.getRes("../../res/apes/monkey2.png");
        this.loadImage("Aliens/alienPink_round.png", 0, 0, gameConfig.node.WIDTH, gameConfig.node.HEIGHT);
		// Laya.stage.addChild(ape); 
    }

    // 行动
    _proto.action = function() {
        switch(this.state) {
            case HeroState.PREPARE:
                console.log('Archer准备中');
                
                break;
            case HeroState.ACTIONABLE:
                console.log('Archer可行动');
                for(var i=0; i<ObjectHolder.enemyBox.numChildren; i++) {
                    console.log('Archer攻击!');
                    var enemy = ObjectHolder.enemyBox.getChildAt(i);
                    var deltaX = this.x - enemy.x;
                    var deltaY = this.y - enemy.y;
                    var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
                    if(distance <= this.range) {
                        console.log('进入Archer攻击范围!射子弹');
                    }
                }
                break;
        }
    }



    return Archer;
}(Hero));