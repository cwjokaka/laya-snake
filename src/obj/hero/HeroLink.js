/*
* 英雄链
*/
var HeroLink = (function (superClass) {

    function HeroLink(opts) {
        HeroLink.super(this);
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
        this.dir = opts.dir || gameConfig.dirs.RIGHT;
    }

    Laya.class(HeroLink, 'heroLink', superClass);

    var _proto = HeroLink.prototype;
    
    // 移动
    _proto.move = function() {
        if (this.head) {
            this.head.dir = this.dir;
            this.head.move();
        } else {
            console.log('没有首节点,不能进行移动');
        }
    }
    // 尾部追加
    _proto.addHero = function(hero) {
        if (this.tail) {
            this.tail.addHero(hero);
            this.tail = hero;
        } else {
            console.log('空链首次添加节点');
            this.head = this.tail = hero;
            this.move();
        }
        this.length++;
        this.addChild(hero);
    }
    // 尾部追加
    _proto.appendHero = function() {
        var hero = new Hero({curX:this.tail.curX, curY:this.tail.curY});
        if (this.tail) {
            this.tail.addHero(hero);
            this.tail = hero;
        } else {
            console.log('空链首次添加节点');
            this.head = this.tail = hero;
            this.move();
        }
        this.length++;
        this.addChild(hero);
    }
    // 尾部删除
    _proto.delHero = function() {
        if (this.tail) {
            // 如果尾部有前驱节点
            if (this.tail.pNode) {
                this.tail.pNode.nNode = undefined;
            } else {
                this.head = undefined;
            }
            // this.removeChild(this.tail);
            this.tail.destroy();
            this.tail = this.tail.pNode;
            this.length--;
        } else {
            console.log('没有尾节点,不能再进行删除');
        }
    }
    // 删除某个节点
    _proto.removeHero = function(hero) {
        var node = this.head;
        if (hero === node) {
            console.log('删除的是首节点,需要重启蛇链');
            if (node.nNode) {
                this.head = node.nNode;
                this.head.pNode = undefined;
            }
            this.removeChild(hero);
            this.move();

        } else {
            while (node = node.nNode) {
                if(node == hero) {
                    node.pNode.nNode = node.nNode;
                    if (node.nNode) {
                        node.nNode.pNode = node.pNode;
                        this.removeChild(hero);
                    }
                    break;
                }
            }
        }
    },
    // 改变方向
    _proto.changeDir = function(dir) {
        if (this.head) {
            var cDir = this.head.dir;
            // 如果是相反方向,则变更方向无效
            if (cDir + dir == 0) {
                console.log('方向变更无效');
                return;
            }
            this.dir = dir;
            // this.head.dir = dir;
            this.head.rdir = dir;
        }
    }
    // 获取物品
    _proto.getItem = function(item) {
        
    }
    // 停止移动
    _proto.pause = function() {
        var node = this.head;
        if (node && node.moveTween) {
            node.moveTween.pause();
            while((node = node.nNode) && node.moveTween) {
                node.moveTween.pause();
            }
        }
    }
    // 恢复移动
    _proto.resume = function() {
        var node = this.head;
        if (node && node.moveTween) {
            node.moveTween.resume();
            while((node = node.nNode) && node.moveTween) {
                node.moveTween.resume();
            }
        }
    }

    _proto.print = function() {
        var curNode = this.head;
        while (curNode) {
            console.log(curNode);
            curNode = curNode.nNode;
        }
        
    }

    return HeroLink;

})(Laya.Sprite);