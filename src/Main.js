(function(){

    var stage = Laya.stage;

    var startScene = new StartScene();
    var playScene = new PlayScene();
    
    stage.addChild(startScene);
    startScene.init();


    // setTimeout(function(){
    //     stage.replaceChild(playScene, startScene);
    //     playScene.init();
    // }, 2000);


})();