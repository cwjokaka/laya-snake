var Background = (function(superClass){

    var Handler = Laya.Handler;

    function Background() {
        Background.super(this);
        this.init();
    }
    Laya.class(Background, 'background', superClass);

    Background.prototype.init = function() {
        var width = gameConfig.screen.WIDTH;
        var height = gameConfig.screen.HEIGHT;
        var grid_x_num = width / gameConfig.grid.WIDTH;
        var grid_y_num = height / gameConfig.grid.HEIGHT;
        var grid_width = gameConfig.screen.WIDTH / grid_x_num;
        var grid_height = gameConfig.screen.HEIGHT / grid_y_num;
        var grid_border_color = gameConfig.grid.BORDER_COLOR;
        var grid_border_width = gameConfig.grid.BORDER_WIDTH;

        // 绘制背景颜色
        this.graphics.drawRect(0, 0, width, height, gameConfig.screen.COLOR);
        
        // 绘制方格
        for(var i=0; i<=grid_x_num; i++) {
            this.graphics.drawLine(i * grid_width, 0, i * grid_width, height, grid_border_color, grid_border_width);
        } 
        for(var i=0; i<=grid_y_num; i++) {
            this.graphics.drawLine(0, i * grid_height, width, i * grid_height, grid_border_color, grid_border_width);
        } 

        // this.loadImage("./res/tiledmap/background.json", 0, 0, gameConfig.node.WIDTH, gameConfig.node.HEIGHT);
        // this.loadImage("Aliens/alienGreen_round.png", 0, 0, gameConfig.node.WIDTH, gameConfig.node.HEIGHT);
        // this.tiledMap = new Laya.TiledMap();
		// this.tiledMap.createMap("./res/tiledmap/background.json", new Laya.Rectangle(0, 0, gameConfig.screen.WIDTH, gameConfig.screen.HEIGHT), 
        // Handler.create(this, function(){
        //     var mapLayer = this.tiledMap.getLayerByName('obj');
        //     var s = new Laya.Sprite();
        //     s.graphics.drawCircle(100, 100, 100, '#ddd');
        //     mapLayer.addChild(s);
        // }));
        

    }
    return Background;
}(Laya.Sprite));