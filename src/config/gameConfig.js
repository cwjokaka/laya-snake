/**
* 游戏配置 + 常量
*/
var gameConfig;
(function (gameConfig) {
    var self = gameConfig;
    // 格子
    gameConfig.grid = {
        WIDTH : 64,
        HEIGHT : 64,
        BORDER_COLOR: '#000000',
        BORDER_WIDTH: 2,
        PADDING: 1      // 单元格碰撞体型修正, 如果为0, 相邻的格子也会发生碰撞
    };

    // 屏幕背景
    gameConfig.screen = {
        WIDTH : self.grid.WIDTH * 16,
        HEIGHT : self.grid.HEIGHT * 16,
        COLOR : '#FFCC66'
    };

    // 节点
    gameConfig.node = {
        WIDTH : 64,
        HEIGHT : 64,
        COLOR : '#000000'
    };
    // 方向枚举
    gameConfig.dirs = {
        UP: 1,
        DOWN: -1,
        LEFT: 2,
        RIGHT: -2
    };
    // 游戏状态机
    gameConfig.gameMainFSM = {
        READY: 0,
        START: 1,
        PAUSE: 2,
        END: 3
    };

})(gameConfig || (gameConfig = {}));