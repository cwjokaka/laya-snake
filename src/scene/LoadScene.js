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
		// progressBar.changeHandler = new Handler(this, onChange);
		Laya.stage.addChild(progressBar);
		// Laya.timer.loop(100, this, changeValue);
		startLoad();
	}

	/**
	 * 开始正式加载资源
	 */
	function startLoad() {
		Laya.loader.load([
			"./res/atlas/Aliens.atlas",
			"./res/atlas/Debris.atlas",
			"./res/atlas/Other.atlas",
			"./res/atlas/Glass elements.atlas",
			"./res/atlas/Stone elements.atlas",
			"./res/atlas/Wood elements.atlas"
			], 
		Handler.create(this, onAllLoaded),
		Handler.create(this, onPerLoaded, null, false)
		);
	}

	/**
	 * 资源全部加载完成后回调
	 */
	function onAllLoaded() {
		console.log('加载完成,进入游戏');
		Laya.stage.removeChild(progressBar);
		Laya.stage.addChild(new StartScene());
	}

	/**
	 * 每个资源加载完成后回调
	 */
	function onPerLoaded(percent) {
		progressBar.value = percent;
		console.log('当前进度:' + percent);
	}

    return LoadScene;

})(Laya.Sprite);