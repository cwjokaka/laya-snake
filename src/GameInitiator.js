/*
* 游戏初始化;
*/
(function () {

    var WebGL = laya.webgl.WebGL;
    var Stage   = Laya.Stage;
    var Event   = Laya.Event;
    var screen = gameConfig.screen;
    var Browser   = Laya.Browser;
    console.log(Browser.clientWidth, Browser.clientHeight);
    // Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
    Laya.init(1024, 768, WebGL);

    Laya.stage.alignV = Stage.ALIGN_MIDDLE;
    Laya.stage.alignH = Stage.ALIGN_MIDDLE;

    Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
	Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;

    // laya.utils.Stat.show(0, 0);

    ObjectHolder.init();

}());