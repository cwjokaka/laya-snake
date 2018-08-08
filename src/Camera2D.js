/*
* 摄像机;
*/
var Camera2D = (function () {
    
    function Camera2D(node, width, height) {
        this.node = node;
        this.width = width;
        this.height = height;
    }

    var _proto = Camera2D.prototype;

    /**
     * 镜头滚动至x, y
     */
    _proto.scrollTo = function(x, y) {
        //  ;
        //  = ;
        this.node.x = Laya.MathUtil.lerp(this.node.x, -x + this.width / 2, 0.2);
        this.node.y = Laya.MathUtil.lerp(this.node.y, -y + this.height / 2, 0.2);
    }

    return Camera2D;
}());