/*
* 血条;
*/
var Bar = (function (superClass) {

    function Bar(opts) {
        Bar.super(this);
        this.alpha = opts.alpha || 1;
        this.x = opts.x || 0;
        this.y = opts.y || 0;
        this.border = opts.border || 2;
        this.maxWidth = opts.maxWidth || gameConfig.node.WIDTH;
        // this.zOrder = opts.zOrder || 2;
        // 填充颜色(底层)
        this.graphics.drawRect(-this.border, -this.border, this.maxWidth + this.border * 2, 5 + this.border * 2, opts.color || 'white');  
        // 填充颜色(上层)
        this.graphics.drawRect(0, 0, gameConfig.node.WIDTH, 5, opts.color || 'red');  

    }
    Laya.class(Bar, 'bar', superClass);

    var _proto = Bar.prototype;

    _proto.setPercent = function(num){
        var width = this.maxWidth * num;
        this.graphics.clear();
        // 填充颜色(底层)
        this.graphics.drawRect(-this.border, -this.border, this.maxWidth + this.border * 2, 5 + this.border * 2, 'white');  
        // 填充颜色(上层)
        this.graphics.drawRect(0, 0, width, 5, 'red');  

    }

    return Bar;
}(Laya.Sprite));