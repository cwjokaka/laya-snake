var PlayScene = (function(superClass) {

    var WebGL = laya.webgl.WebGL;
    var Stage   = Laya.Stage;
    var Event   = Laya.Event;
	var BlurFilter = Laya.BlurFilter;
	var Ease    = Laya.Ease;
    var Handler = Laya.Handler;

    var stage = Laya.stage;
    var screen = gameConfig.screen;
    var FSM = gameConfig.gameMainFSM;

    function PlayScene(opts) {
        PlayScene.super(this);
    }
    Laya.class(PlayScene, 'playScene', superClass);

    var _proto = PlayScene.prototype;

    _proto.init = function() {
        // new Laya.TiledMap()
        var self = this;
        this.state = FSM.PLAY;

        this.bg = new Background();

        // var bgs = this.bg.tiledMap.mapSprite();
        this.heroLink = ObjectHolder.heroLink;
        this.itemBox = ObjectHolder.itemBox;
        this.enemyBox = ObjectHolder.enemyBox;
        this.bulletBox = ObjectHolder.bulletBox;
        this.barBox = ObjectHolder.barBox;

        // 视图层        
        this.view = new Laya.Sprite();
        // bgs.addChild(this.view);
        this.addChild(this.view);

        this.view.addChild(this.bg);
        this.view.addChild(this.heroLink);
        this.view.addChild(this.itemBox);
        this.view.addChild(this.enemyBox);
        this.view.addChild(this.bulletBox);
        this.view.addChild(this.barBox);
        // this.addChild(button);

        this.joyStick = new JoyStick();
        this.joyStick.pos(180, 500);
        this.addChild(this.joyStick);

        // 摄像机
        this.camera = new Camera2D(this.view, stage.width, stage.height);

        var hero = new Hero({dir: gameConfig.dirs.RIGHT, curX: 40, curY:40});
        var item = new Item({x: 120, y: 120});
        var itemArcher = new ItemArcher({x: 80, y: 80});
        var enemy = new EnemyTower({x: 160, y:160});

        this.heroLink.addHero(hero);
        this.heroLink.move();

        this.itemBox.addChild(item);
        this.itemBox.addChild(itemArcher);

        this.enemyBox.addChild(enemy);

        // 监听键盘输入
        Laya.stage.on(Event.KEY_DOWN, this, onKeyDown);
        function onKeyDown(e) {
            console.log(e.keyCode);
            switch(e.keyCode) {
                case 38:
                    self.heroLink.changeDir(gameConfig.dirs.UP);
                    break;
                case 40:
                    self.heroLink.changeDir(gameConfig.dirs.DOWN);
                    break;
                case 37:
                    self.heroLink.changeDir(gameConfig.dirs.LEFT);
                    break;
                case 39:
                    self.heroLink.changeDir(gameConfig.dirs.RIGHT);
                    break;
                // p 暂停 && 恢复
                case 80:
                    if(self.state == FSM.PLAY) {
                        // 暂停
                        self.pause();
                    } else if (self.state == FSM.PAUSE) {
                        self.resume();
                    }
            }
        }

        // 开始游戏循环
        Laya.timer.frameLoop(1, this, this.onLoop);
    }

    // 游戏循环
    _proto.onLoop = function() {

        if (this.state != FSM.PLAY){
            return;
        }

        for(var i = 0; i<this.barBox.numChildren; i++) {
            this.barBox.getChildAt(i).follow();
        }

        // 碰撞检测
        for (var i=0; i<this.heroLink.numChildren; i++) {
            var curHero = this.heroLink.getChildAt(i);
            for (var j=0; j<this.itemBox.numChildren; j++) {
                var item = this.itemBox.getChildAt(j);
                if (curHero.getBounds().intersects(item.getBounds())) {
                    item.pos(Math.random() * 760, Math.random() * 760);
                    item.onHeroFound(hero);
                    curHero.getItem(item);
                }
            }
            for (var k=0; k<this.bulletBox.numChildren; k++) {
                var bullet = this.bulletBox.getChildAt(k);
                if (curHero.getBounds().intersects(bullet.getBounds())) {
                    bullet.onCrash(curHero);
                    if (curHero.hurt(bullet)) {
                        if (!curHero.pNode && !curHero.nNode){
                            this.state = FSM.END;
                        }
                        break;
                    }
                }
            }
        }

        // 英雄行动
        for (var i=0; i<this.heroLink.numChildren; i++) {
            this.heroLink.getChildAt(i).action();
        }

        // 敌人攻击
        for (var i=0; i<this.enemyBox.numChildren; i++) {
            this.enemyBox.getChildAt(i).attack();
        }

        // 子弹移动
        for (var i=0; i<this.bulletBox.numChildren; i++) {
            this.bulletBox.getChildAt(i).move();
        }

        // 查看joyStick的角度
        var angle = this.joyStick.angle;
        // console.log(angle);
        if (angle) {
            if (angle >= 45 && angle < 135) {
                // 向上
                this.heroLink.changeDir(gameConfig.dirs.UP);
            }
            else if (angle >= 135 && angle < 225) {
                // 向右
                this.heroLink.changeDir(gameConfig.dirs.RIGHT);
            }
            else if (angle >= 225 && angle < 315) {
                // 向下
                this.heroLink.changeDir(gameConfig.dirs.DOWN);
            }
            else if ((angle >= 315 && angle <= 360) || (angle >= 0 && angle < 45)) {
                // 向左
                this.heroLink.changeDir(gameConfig.dirs.LEFT);
            } 
        }

        // 摄像机锁定
        this.camera.scrollTo(this.heroLink.head.x, this.heroLink.head.y);

        // 判断游戏是否结束
        if (this.state == FSM.END) {
            var endScene = new EndScene(); 
            ObjectHolder.init();
            endScene.init();
            stage.replaceChild(endScene, this);
            Laya.timer.clear(this, this.onLoop);
            // Laya.timer.clearAll(self);
            this.destroy(true);
        }

    }
    // 游戏暂停函数
    _proto.pause = function() {
        console.log('游戏暂停');
        Laya.timer.clear(this, this.onLoop);
        this.heroLink.pause();
        this.state = FSM.PAUSE;
        
        this.blurFilter = new BlurFilter();
        this.blurFilter.strength = 5;
        this.view.filters = [this.blurFilter];
        Laya.Tween.to(this.blurFilter, {strength: 10}, 300, Ease.linearIn, null, 0, false);

    }
    // 游戏恢复函数
    _proto.resume = function() {
        console.log('游戏恢复');
        Laya.Tween.to(this.blurFilter, {strength: 5}, 300, Ease.linearIn, 
        Handler.create(this, function(){
            Laya.timer.frameLoop(1, this, this.onLoop);
            this.heroLink.resume();
            this.state = FSM.PLAY;
            this.view.filters = [];
            this.blurFilter = undefined;
        }), 0, false);
		

        // 开始游戏循环
    }


    return PlayScene;

})(Laya.Sprite);