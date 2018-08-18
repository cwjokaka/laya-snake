/**
 * 开始页面
 */
var StartScene = (function(superClass) {


    var Handler = Laya.Handler;
    var stage = Laya.stage;
	var Stage = Laya.Stage;

    function StartScene(opts) {
        StartScene.super(this);
        //注册按钮点击事件，点击后开始游戏
        this.startBtn.on(Laya.Event.CLICK,this,this.onStartBtnClick);

    }
    Laya.class(StartScene, 'startScene', superClass);

    var _proto = StartScene.prototype;

    _proto.onStartBtnClick = function(e){
        e.stopPropagation();
        ObjectHolder.init();
        var playScene = new PlayScene() 
        stage.replaceChild(playScene, this);
        playScene.init();
    }


    _proto.init = function() {
        var self = this;
        // 填充背景颜色
        // this.graphics.drawRect(0, 0, gameConfig.screen.WIDTH, gameConfig.screen.HEIGHT, 'white');
        
        // Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
		Laya.stage.bgColor = "#232628";
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
        

        // var button = new laya.ui.Button(null, '开始游戏');
        // this.addChild(button);
        // button.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        // button.width = 200;
        // button.height = 100;
        // button.pivot(100, 50);
        // button.labelStroke = 1;
        // button.labelSize = 32;
        // button.strokeColors = 'green,green,green,green';
        // button.clickHandler = Handler.create(button, function(){
        //     ObjectHolder.init();
        //     var playScene = new PlayScene() 
        //     stage.replaceChild(playScene, self);
        //     playScene.init();
        // });
        

    }

    return StartScene;

})(ui.StartUI);