/*
* 血条;
*/
var Bar = (function (superClass) {

    function Bar(opts) {
        Bar.super(this);
        this.alpha = opts.alpha || 0.5;
        this.x = opts.x || 0;
        this.y = opts.y || 0;
        this.border = opts.border || 2;
        this.maxWidth = opts.maxWidth || gameConfig.node.WIDTH;
        this.curWidth = opts.curWidth || this.maxWidth;
        this.color = opts.color || 'red';
        // 血条绑定的对象
        this.bindObj = opts.bindObj;
        // this.zOrder = opts.zOrder || 2;
        // 填充颜色(底层)
        this.graphics.drawRect(-this.border, -this.border, this.maxWidth + this.border * 2, 5 + this.border * 2, 'white');  
        // 填充颜色(上层)
        this.graphics.drawRect(0, 0, gameConfig.node.WIDTH, 5, this.color);
        // this.frameLoop(1, this, function(){
        // });

    }
    Laya.class(Bar, 'bar', superClass);

    var _proto = Bar.prototype;

    _proto.setPercent = function(num){
        var width = this.maxWidth * num;
        Laya.Tween.to(this, {curWidth: width}, 100, Laya.Ease.bounceInOut, null, 0, true);
    }

    // 跟随并重绘血条
    _proto.follow = function() {
            this.x = this.bindObj.x;
            this.y = this.bindObj.y - 20;
            this.graphics.clear();
            // 填充颜色(底层)
            this.graphics.drawRect(-this.border, -this.border, this.maxWidth + this.border * 2, 5 + this.border * 2, 'white');  
            // 填充颜色(上层)
            this.graphics.drawRect(0, 0, this.curWidth, 5, this.color);
    }

    return Bar;
}(Laya.Sprite));