(function($){
	$.fn.extend({
			Scroll:function(opt,callback){
                if(!opt){
                    var opt={};
                }
                var _btnLeft = $("#"+ opt.left);
                var _btnRight = $("#"+ opt.right);
                var timerID;
                var _this=this.find("ul:first");
                var ImgWid=_this.find("li:first").width();
                var speed=opt.speed?parseInt(opt.speed,10):500;
                var timer=opt.timer;
                var leftWid=0-ImgWid;
                var indexAll = _this.find("li").length-1;
                //滚动函数
                var scrollLeft=function(){
                        _btnLeft.unbind("click",scrollRight); //Shawphy:取消向左按钮的函数绑定
                        _this.animate({
                                marginLeft: leftWid
                        },speed,function(){
                                    // for(var i=0;i<indexAll;i++){
                                    //     _this.find("li:eq("+i+")").appendTo(_this);                                
                                    // }
                                _this.find("li:first").appendTo(_this);
                                _this.css({marginLeft:0});
                                _btnLeft.bind("click",scrollRight); //Shawphy:绑定向左按钮的点击事件
                        });

                };
                //Shawphy:向右翻页函数
                var scrollRight=function(){
                        _btnRight.unbind("click",scrollLeft);
                            // for(var i=0;i<indexAll;i++){
                            //        _this.find("li:eq("+i+")").show().prependTo(_this);                               
                            //     }
                       // this.j=0;
                        // for(var i=0;i<indexAll;i++){j++;}
                        _this.find("li:last").show().prependTo(_this);
                        _this.css({marginLeft:leftWid});
                        
                        _this.animate({
                                marginLeft:0
                        },speed,function(){
                                _btnRight.bind("click",scrollLeft);
                        });
                };
               //Shawphy:自动播放
                var autoPlay = function(){
                        if(timer)timerID = window.setInterval(scrollRight,timer);
                };
                var autoStop = function(){
                        if(timer)window.clearInterval(timerID);
                };
                 //鼠标事件绑定
                _this.hover(autoStop,autoPlay).mouseout();
                _btnLeft.css("cursor","pointer").click( scrollLeft ).hover(autoStop,autoPlay);//Shawphy:向左向右鼠标事件绑定
                _btnRight.css("cursor","pointer").click( scrollRight ).hover(autoStop,autoPlay);

			}


		});
})(jQuery);