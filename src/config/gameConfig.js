/**
* 游戏配置 + 常量
*/
var gameConfig;
(function (gameConfig) {
    // 屏幕背景
    gameConfig.screen = {
        WIDTH : 800,
        HEIGHT : 800,
        COLOR : '#FFCC66'
    };
    // 格子
    gameConfig.grid = {
        WIDTH : 40,
        HEIGHT : 40,
        BORDER_COLOR: '#000000',
        BORDER_WIDTH: 2,
        PADDING: 1      // 单元格碰撞体型修正, 如果为0, 相邻的格子也会发生碰撞
    };
    // 节点
    gameConfig.node = {
        WIDTH : 40,
        HEIGHT : 40,
        COLOR : '#000000'
    };
    // 方向枚举
    gameConfig.dirs = {
        UP: 0,
        DOWN: 1,
        LEFT: 2,
        RIGHT: 3
    };

})(gameConfig || (gameConfig = {}));