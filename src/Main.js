(function(){

    var WebGL = laya.webgl.WebGL;
    var Stage   = Laya.Stage;
    var Event   = Laya.Event;
    var screen = gameConfig.screen;

    Laya.init(screen.WIDTH, screen.HEIGHT, WebGL);
    Laya.stage.alignV = Stage.ALIGN_MIDDLE;
    Laya.stage.alignH = Stage.ALIGN_MIDDLE;
    laya.utils.Stat.show(0, 0);

    // 创建背景
    var bg = new Background();
    Laya.stage.addChild(bg);
    


    var heroLink = new HeroLink({});
    var itemBox = new Laya.Sprite();

    Laya.stage.addChild(heroLink);
    Laya.stage.addChild(itemBox);

    var hero = new Hero({dir: gameConfig.dirs.RIGHT, curX: 40, curY:40});
    var item = new Item({x: 120, y: 120});
    var itemArcher = new ItemArcher({x: 80, y: 80});


    heroLink.addHero(hero);
    heroLink.move();

    itemBox.addChild(item);
    itemBox.addChild(itemArcher);


    // 监听键盘输入
	Laya.stage.on(Event.KEY_DOWN, this, onKeyDown);

    function onKeyDown(e) {
        // console.log(e.keyCode);
        switch(e.keyCode) {
            case 38:
                heroLink.changeDir(gameConfig.dirs.UP);
                break;
            case 40:
                heroLink.changeDir(gameConfig.dirs.DOWN);
                break;
            case 37:
                heroLink.changeDir(gameConfig.dirs.LEFT);
                break;
            case 39:
                heroLink.changeDir(gameConfig.dirs.RIGHT);
                break;
            // 空格
            case 32:
                var newHero = new Hero({dir: gameConfig.dirs.RIGHT, curX: 80, curY: 80});
                heroLink.addHero(newHero);
                // hero.dir = gameConfig.dirs.RIGHT;
                break;
            // x
            case 88:
                heroLink.delHero();
                // hero.dir = gameConfig.dirs.RIGHT;
                break;
            // z 删除首节点
            case 90:
                heroLink.removeHero(hero);
                break;

        }
    }

    // 游戏循环函数
    function onLoop() {
        // console.log(hero.x, hero.y, hero.curX, hero.curY, hero.tarX, hero.tarY);
        for (var i=0; i<heroLink.numChildren; i++) {
            var curHero = heroLink.getChildAt(i);
            for (var j=0; j<itemBox.numChildren; j++) {
                var item = itemBox.getChildAt(j);
                if (curHero.getBounds().intersects(item.getBounds())) {
                    // console.log('碰撞了');
                    // heroLink.appendHero();
                    item.pos(Math.random() * 760, Math.random() * 760);
                    item.onHeroFound(hero, heroLink);

                    curHero.getItem(item);
                }
            }

        }
    }

    Laya.timer.frameLoop(1, this,onLoop);
    
})();