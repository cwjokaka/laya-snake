var EndScene = (function(superClass) {

    var Handler = Laya.Handler;
    var stage = Laya.stage;
	var Stage = Laya.Stage;

    function EndScene(opts) {
        EndScene.super(this);
    }
    Laya.class(EndScene, 'endScene', superClass);

    var _proto = EndScene.prototype;


    _proto.init = function() {
        var self = this;
        // 填充背景颜色
        // this.graphics.drawRect(0, 0, gameConfig.screen.WIDTH, gameConfig.screen.HEIGHT, 'white');
        
        // Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
		Laya.stage.bgColor = "#232628";
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;

        var button = new laya.ui.Button(null, '重新开始');

        this.addChild(button);
        button.pos(400, 400);
        button.width = 200;
        button.height = 100;
        button.pivot(100, 50);
        button.labelStroke = 1;
        button.labelSize = 32;
        button.strokeColors = 'green,green,green,green';
        button.clickHandler = Handler.create(button, function(){
            ObjectHolder.init();
            var playScene = new PlayScene();
            stage.replaceChild(playScene, self);
            playScene.init();
        });
        

    }

    return EndScene;

})(Laya.Sprite);