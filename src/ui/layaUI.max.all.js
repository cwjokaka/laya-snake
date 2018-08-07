var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var StartUI=(function(_super){
		function StartUI(){
			
		    this.startBtn=null;

			StartUI.__super.call(this);
		}

		CLASS$(StartUI,'ui.StartUI',_super);
		var __proto__=StartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(StartUI.uiView);

		}

		StartUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Button","props":{"y":169,"x":222,"width":167,"var":"startBtn","skin":"comp/button.png","label":"开始游戏","height":60}}]};
		return StartUI;
	})(View);