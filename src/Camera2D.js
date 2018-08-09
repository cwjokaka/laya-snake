/*
* 摄像机;
*/
var Camera2D = (function () {
    
    /**
     * @param {*关注的图层} node
     * @param {*摄像机宽度} width
     * @param {*摄像机高度} height
     */
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
        this.node.x = Laya.MathUtil.lerp(this.node.x, -x + this.width / 2, 0.1);
        this.node.y = Laya.MathUtil.lerp(this.node.y, -y + this.height / 2, 0.1);
    }

    return Camera2D;
}());