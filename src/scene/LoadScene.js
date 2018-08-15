var LoadScene = (function(superClass) {

	var Stage       = Laya.Stage;
	var ProgressBar = Laya.ProgressBar;
	var Handler     = Laya.Handler;
	var WebGL       = Laya.WebGL;
	var progressBar;
	var self;
    function LoadScene(opts) {
        LoadScene.super(this);
		self = this;
		// 先加载进度条图片
        Laya.loader.load(["./res/ui/progressBar.png", "./res/ui/progressBar$bar.png"], Handler.create(this, onLoadBarComplete));

    }
    Laya.class(LoadScene, 'loadScene', superClass);

    var _proto = LoadScene.prototype;

	/**
	 * 进度条图片加载完成回调
	 */
	function onLoadBarComplete(){
		progressBar = new ProgressBar("./res/ui/progressBar.png");
		progressBar.width = 400;
		progressBar.x = (Laya.stage.width - progressBar.width) / 2;
		progressBar.y = Laya.stage.height / 2;
		progressBar.sizeGrid = "5,5,5,5";
		progressBar.changeHandler = new Handler(this, onChange);
		Laya.stage.addChild(progressBar);
		Laya.timer.loop(100, this, changeValue);
		startLoad();
	}

	/**
	 * 每一样资源加载完成后回调
	 */
	function onLoaded() {
		console.log('加载完成,进入游戏');
		Laya.stage.removeChild(progressBar);
		Laya.stage.addChild(new StartScene());
	}

	/**
	 * 开始正式加载资源
	 */
	function startLoad() {
		Laya.loader.load("./res/atlas/Aliens.atlas", Handler.create(this, onLoaded));
	}

	function changeValue(){

		if (progressBar.value >= 1)
			progressBar.value = 0;
		progressBar.value += 0.05;
	}

	function onChange(value){
		// console.log("进度：" + Math.floor(value * 100) + "%");
	}


    return LoadScene;

})(Laya.Sprite);