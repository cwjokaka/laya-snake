var Hero = (function(superClass){

    var Handler = Laya.Handler;
	var Ease    = Laya.Ease;
    var Rectangle = laya.maths.Rectangle;

    function Hero(opts) {
        Hero.super(this);
        this.init(opts);
    }
    Laya.class(Hero, 'hero', superClass);

    // 初始化
    Hero.prototype.init = function(opts) {
        this.dir = opts.dir || gameConfig.grid.RIGHT;
        this.curX = opts.curX || 0;
        this.curY = opts.curY || 0;
        this.x = this.curX;
        this.y = this.curY;
        this.tarX = 0;
        this.tarY = 0;
        this.pNode = opts.pNode || undefined;
        this.nNode = opts.nNode || undefined;
        this.setBounds(new Rectangle(gameConfig.grid.PADDING, gameConfig.grid.PADDING, gameConfig.node.WIDTH - gameConfig.grid.PADDING * 2, gameConfig.node.HEIGHT - gameConfig.grid.PADDING * 2));
        // 填充颜色
        this.graphics.drawRect(0, 0, gameConfig.node.WIDTH, gameConfig.node.HEIGHT, opts.color || gameConfig.node.COLOR);   
    }
    // 攻击
    Hero.prototype.attack = function() {
        console.log('Hero攻击!');
    }
    // 移动
    Hero.prototype.move = function() {
        // 方案二: 递归从最后一个节点开始移动
        // 如果不是首节点, 则移动到上一节点的位置, 否则按当前方向移动
        // 递归
        if (this.nNode) {
            this.nNode.move();
        }
        // 如果不是首节点
        if (this.pNode) {
            this.dir = this.pNode.dir;
            this.curX = this.tarX;
            this.curY = this.tarY;
            this.tarX = this.pNode.tarX;
            this.tarY = this.pNode.tarY;
            // console.log('子节点移动target: x' +this.tarPos.x+ ' y'+this.tarPos.y);
            Laya.Tween.to(this, {x:this.tarX, y:this.tarY}, 300, Ease.linearIn, null, 0, true);
        } 
        // 如果是首节点
        else {
            this.curX = this.tarX;
            this.curY = this.tarY;
            switch(this.dir) {
                case gameConfig.dirs.UP:
                    this.tarY = this.curY - gameConfig.grid.WIDTH;
                    break;
                case gameConfig.dirs.DOWN:
                    this.tarY = this.curY + gameConfig.grid.WIDTH;
                    break;
                case gameConfig.dirs.LEFT:
                    this.tarX = this.curX - gameConfig.grid.WIDTH;
                    break;
                case gameConfig.dirs.RIGHT:
                    this.tarX = this.curX + gameConfig.grid.WIDTH;
                    break;
            }
            // console.log('首节点移动target: x' +this.tarPos.x+ ' y'+this.tarPos.y);
            Laya.Tween.to(this, {x: this.tarX, y: this.tarY}, 300, Ease.linearIn, Handler.create(this, this.move), 0, true);
            if (this.nNode) {
                // console.log('nNode: x' + this.nNode.tarX + ' y' + this.nNode.tarY );
            }
        }        

    }
    // 增加一个英雄,默认添加在尾部
    Hero.prototype.addHero = function(hero) {
        // 递归到最后一个节点
        if (this.nNode) {
            this.nNode.addHero(hero);
            return;
        }
        hero.pNode = this;
        this.nNode = hero;
    }
    // 英雄获取物品
    Hero.prototype.getItem = function(item) {
        console.log('我得到物品啦');
    }


    return Hero;

}(Laya.Sprite));