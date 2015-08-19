;(function ($) {
	var LightBox = function () {
		var self = this;
		//创建遮罩层和弹出框
		this.popupMask = $('<div id="lightbox-mask">');
		this.popupWin = $('<div id="lightbox-popup">');
		//保存body
		this.bodyNode = $(document.body);
		//渲染剩余的DOM并且插入到body
		this.renderDOM();
	};
	LightBox.prototype={
		renderDOM:function(){
			var strDom = 
			'<div class="lightbox-pic-view">'+
			'<span class="lightbox-btn lightbox-prev-btn"></span>'+
			'<img class="lightbox-image" src="image/one01.jpg" width="100%">'+
			'<span class="lightbox-btn lightbox-next-btn"></span>'+
			'</div>'+
			'<div class="lightbox-pic-caption">'+
			'<div class="lightbox-caption-area">'+
			'<p class="lightbox-pic-desc"></p>'+
			'<span class="lightbox-of-index">当前索引：0 of 0</span>'+
			'</div>'+
			'<span class="lightbox-close-btn"></span>'+
			'</div>';
			//插入到this.popupWin
			this.popupWin.html(strDom);
			//把遮罩层和弹出框插入到body
			this.bodyNode.append(this.popupMask,this.popupWin);
		}
	};
	window["LightBox"]= LightBox;
})(jQuery);