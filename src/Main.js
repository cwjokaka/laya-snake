(function(){

    var stage = Laya.stage;
    var startScene = new StartScene();
    var playScene = new PlayScene();
    
    stage.addChild(startScene);
    startScene.init();
    

})();