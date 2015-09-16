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

		this.picViewArea = this.popupWin.find('div.lightbox-pic-view');//图片预览区
		this.popupPic = this.popupWin.find('img.lightbox-image');//图片区
		this.picCaptionArea = this.popupWin.find('div.lightbox-pic-caption');//图片描述区
		this.nextBtn = this.popupWin.find('span.lightbox-next-btn');
		this.prevBtn = this.popupWin.find('span.lightbox-prev-btn');
		this.captionText = this.popupWin.find('p.lightbox-pic-desc');//图片描述
		this.currentIndex = this.popupWin.find('span.lightbox-of-index');//图片当前索引
		this.closeBtn = this.popupWin.find('span.lightbox-close-btn');//图片关闭按钮

		//准备开发事件委托，获取组数据
		this.groupName = null;
		this.groupData = [];
		this.bodyNode.delegate('js-lightbox,*[data-role=js-lightbox]','click', function(e) {
			//阻止事件冒泡
			e.stopPropagation();
			var currentGroupName = $(this).attr('data-group');
			if (currentGroupName != self.groupName) {
				self.groupName = currentGroupName;
				//根据当前组名获取同一组数据
				self.getGroup();
			}

			//初始化弹出
			self.initPopup($(this));

		});
		//关闭弹窗
		this.popupMask.click(function(){
			$(this).fadeOut();
			self.popupWin.fadeOut();
		});
		this.closeBtn.click(function(){
			self.popupMask.fadeOut();
			self.popupWin.fadeOut();

		});
		//绑定上下切换按钮事件
		this.flag = true;
		this.nextBtn.hover(function() {
			if (!$(this).hasClass('disabled')&&self.groupData.length>1) {
            	$(this).addClass('lightbox-next-btn-show');
			}
		}, function() {
			if (!$(this).hasClass('disabled')&&self.groupData.length>1) {
            	$(this).removeClass('lightbox-next-btn-show');
			}
		}).click(function(e){
			if (!$(this).hasClass('disabled')&&self.flag) {
				self.flag = false;
				e.stopPropagation();
				self.goto('next');
			}
		});
		this.prevBtn.hover(function() {
			if (!$(this).hasClass('disabled')&&self.groupData.length>1) {
            	$(this).addClass('lightbox-prev-btn-show');
			}
		}, function() {
			if (!$(this).hasClass('disabled')&&self.groupData.length>1) {
            	$(this).removeClass('lightbox-prev-btn-show');
			}
		}).click(function(e){
			if (!$(this).hasClass('disabled')&&self.flag) {
				self.flag = false;
				e.stopPropagation();
				self.goto('prev');
			}
		});
		};	
	LightBox.prototype={
		goto: function(dir){
			if (dir === 'next') {
				this.index++;
				if (this.index >= this.groupData.length-1) {
					this.nextBtn.addClass('disabled').removeClass('lightbox-next-btn-show');
				}
				if (this.index !== 0) {
					this.prevBtn.removeClass('disabled');
				}
				var src = this.groupData[this.index].src;
				this.loadPicSize(src);
			}else if (dir === 'prev'){
				this.index--;
				if (this.index <= 0) {
					this.prevBtn.addClass('disabled').removeClass('lightbox-prev-btn-show');
				}
				if (this.index !== this.groupData.length-1) {
					this.nextBtn.removeClass('disabled');
				}
				var src2 = this.groupData[this.index].src;
				this.loadPicSize(src2);
			
			}

		},
		loadPicSize:function(sourceSrc){
			var self = this;
			self.popupPic.css({width:'auto',height:'auto'}).hide();
			this.preLoadImg(sourceSrc,function(){
				self.popupPic.attr("src",sourceSrc);
				var picWidth = self.popupPic.width();
					picHeight = self.popupPic.height();
				self.changePic(picWidth,picHeight);
			});
		},
		changePic: function(width,height){
			var self = this;
			winWidth = $(window).width();
			winHeight = $(window).height();

			//如果图片的宽高大于当前视口的宽高，判断是否溢出，算出最小比例
			var scale = Math.min(winWidth/(width+10),winHeight/(height+10),1);
			width = width*scale;
			height = height*scale;


			this.picViewArea.animate({width:width-10,height:height-10}, 300);
			this.popupWin.animate({
				width:width,
				height:height,
				marginLeft:-(width/2),
				top:(winHeight-height)/2
			},function () {
				self.popupPic.css({
					width:width-10,
					height:height-10
				}).fadeIn();
				self.picCaptionArea.fadeIn();
				self.flag = true;
			});
			//设置描述文字和当前索引
			this.captionText.text(this.groupData[this.index].caption);
			this.currentIndex.text('当前索引:'+(this.index+1)+' of '+this.groupData.length);
		},
		preLoadImg:function(src,callback){
			var img = new Image();
			if(!!window.ActiveXObject){
				img.onreadystatechange = function(){
					if (this.readyState == "complete") {
						callback();
					}
				};
			}else{
				img.onload = function(){
					callback();
				};
			}
			img.src = src;
		},
		showMaskAndPopup:function (sourceSrc,currentId) {
			var self = this;
			//隐藏图片和标题区，显示白色加载背景
			this.popupPic.hide();
			this.picCaptionArea.hide();
			//淡入幕布
			this.popupMask.fadeIn();
			//获取可视屏幕宽高
			var winWidth = $(window).width(),
				winHeight = $(window).height();
			//设置图片区域宽高
			this.picViewArea.css({
				width: winWidth/2,
				height: winHeight/2
			});
			this.popupWin.fadeIn();
			var viewHeight = winHeight/2+10;
			this.popupWin.css({
				width: winWidth/2+10,
				height: winHeight/2+10,
				marginLeft: -(winWidth/2+10)/2,
				top:-viewHeight
			}).animate(
					{top:(winHeight-viewHeight)/2},
					function () {
							self.loadPicSize(sourceSrc);
					
					});

			//根据当前点击的元素id获取在当前组别的索引
			this.index = this.getIndexOf(currentId);
		 	//alert($(this).index()); 
		 	//按钮显示与否的控制
		 	var groupDataLength = this.groupData.length;
		 	if (groupDataLength>1) {
		 		if (this.index === 0) {
		 			this.prevBtn.addClass('disabled');
		 			this.nextBtn.removeClass('disabled');
		 		} else if (this.index === groupDataLength-1) {
		 			this.prevBtn.removeClass('disabled');
		 			this.nextBtn.addClass('disabled');
		 		} else{
		 			this.prevBtn.removeClass('disabled');
		 			this.nextBtn.removeClass('disabled');
		 		}
		 	} else {
		 		this.prevBtn.addClass('disabled');
		 		this.nextBtn.addClass('disabled');
		 	}

		},

		getIndexOf:function (currentId) {
			var index = 0;
			//遍历获取到的数组数据来获取索引
			$(this.groupData).each(function(i) {
				index=i;
				if (this.id == currentId) {
					return false;

				}
			});
			return index;
		},

		initPopup:function (currentObj) {
			var self = this;
			sourceSrc = currentObj.attr('data-source');	
			currentId = currentObj.attr('data-id');
			this.showMaskAndPopup(sourceSrc,currentId);
		},

		getGroup:function(){
			var self = this;
			//根据当前组别名称获取页面中所有的相同组别的对象
			var groupList = this.bodyNode.find('*[data-group='+this.groupName+']');
			//清空数组数据 不然会在原有基础之上新加下一组的数据
			//self.groupData.length = 0;
			groupList.each(function() {
				self.groupData.push({
					src:$(this).attr('data-source'),
					id:$(this).attr('data-id'),
					caption:$(this).attr('data-caption'),
				});
			});
		},

		renderDOM:function(){
			var strDom = 
			'<div class="lightbox-pic-view">'+
			'<span class="lightbox-btn lightbox-prev-btn"></span>'+
			'<img class="lightbox-image" src="">'+
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
	window['LightBox']= LightBox;
})(jQuery);