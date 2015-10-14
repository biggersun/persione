(function($){
	$.fn.extend({
			Scroll:function(opt,callback){
                if(!opt){
                    var opt={};
                }
                var _btnDown = $("#"+ opt.left);
                var _btnUp = $("#"+ opt.right);
                var timerID;
                var _this=this.find("ul:first");
                var imgHeight = _this.find("li:first").height();
                //var ImgWid=_this.find("li:first").width();
                var speed=opt.speed?parseInt(opt.speed,10):500;
                var timer=opt.timer;
                var upHeight = 0-imgHeight;
                //var leftWid=0-ImgWid;
                //var _index = this.index();
                 
                //滚动函数
                var scrollDown=function(){
                        _btnDown.unbind("click",scrollUp); //Shawphy:取消向左按钮的函数绑定
                        _this.animate({
                                marginTop: upHeight
                        },speed,function(){
                                    for(i=1;i<=line;i++){
                                        _this.find("li:first").appendTo(_this);
                                    }
                                //if (_index==0) {};
                                //_this.find("li:eq("+_index-1+")").appendTo(_this);
                                _this.css({marginTop:0});
                                _btnDown.bind("click",scrollUp); //Shawphy:绑定向左按钮的点击事件
                        });
                       // console.log(_index);

                };
                //Shawphy:向右翻页函数
                var scrollUp=function(){
                        _btnUp.unbind("click",scrollDown);
                            for(i=1;i<=line;i++){
                                _this.find("li:last").show().prependTo(_this);
                            }
                       // _this.find("li:eq("+_index+1+")").prependTo(_this);
                        _this.css({marginTop:upHeight});
                        
                        _this.animate({
                                marginTop:0
                        },speed,function(){
                                _btnUp.bind("click",scrollDown);
                        });
                };
               //Shawphy:自动播放
                var autoPlay = function(){
                        if(timer)timerID = window.setInterval(scrollUp,timer);
                };
                var autoStop = function(){
                        if(timer)window.clearInterval(timerID);
                };
                 //鼠标事件绑定
                _this.hover(autoStop,autoPlay).mouseout();
                _btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);//Shawphy:向左向右鼠标事件绑定
                _btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);

			}


		});
})(jQuery);