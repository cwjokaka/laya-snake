/*
* name;
*/
(function () {

    var WebGL = laya.webgl.WebGL;
    var Stage   = Laya.Stage;
    var Event   = Laya.Event;
    var screen = gameConfig.screen;

    Laya.init(screen.WIDTH, screen.HEIGHT, WebGL);
    Laya.stage.alignV = Stage.ALIGN_MIDDLE;
    Laya.stage.alignH = Stage.ALIGN_MIDDLE;
    laya.utils.Stat.show(0, 0);

    ObjectHolder.init();

}());