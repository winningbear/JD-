

			/*使用命名空间，避免全局变量污染*/
	var GLOBAL={};
	GLOBAL.namespace=function(str){
		var arr=str.split('.');
			o=GLOBAL;
		for(i=(arr[0]=="GLOBAL")?1:0;i<arr.length;i++){
			o[arr[i]]=o[arr[i]]||{};
			o=o[arr[i]];
		}
	}


/*自定义EventUtil函数，用于添加、删除事件、阻止事件冒泡*/
var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubbles = true;
        }
    },
    getRelatedTarget: function (event) {
        if (event.relatedTarger) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else { return null; }

    }
}
	/*通过className来获取DOM节点*/
	function getElementsByClass(className){
		var all=document.all?document.all:document.getElementsByTagName('*');
		var elements=new Array();
		for (var i = 0; i <all.length; i++) {
			if(all[i].className==className){
				elements[elements.length]=all[i];
			}
		}
		return elements;
	}
	window.onload=function(){
	GLOBAL.namespace('Dom'); /*用命名空间的子元素来定义Dom节点*/
	/*头部运送按钮监听事件*/
	GLOBAL.Dom.headerSend=getElementsByClass('header-send')[0];
	GLOBAL.Dom.headerSendPlace=getElementsByClass('header-sendPlace')[0];
	GLOBAL.Dom.myShoppingCar=getElementsByClass('myShoppingCar')[0];
	GLOBAL.Dom.myShoppingCarContent1=getElementsByClass('myShoppingCar-content1')[0];
	GLOBAL.Dom.myShoppingCarContent2=getElementsByClass('myShoppingCar-content2')[0];
	GLOBAL.Dom.headerSend.onmouseover=function(){
		this.style.backgroundColor='#fff';
		this.style.borderLeft="thin solid #ccc";
		this.style.borderRight="thin solid #ccc";
		this.getElementsByTagName('img')[0].src="images/header-up.png";
	GLOBAL.Dom.headerSendPlace.style.display='block';
	}
	GLOBAL.Dom.headerSend.onmouseout=function(){
		this.style.backgroundColor='#F1F1F1';
		this.style.borderLeft='none';
		this.style.borderRight='none';
		this.getElementsByTagName('img')[0].src="images/header-down.png";
		GLOBAL.Dom.headerSendPlace.style.display='none';
	}
	GLOBAL.Dom.headerSendPlace.onmouseover=function(){
		this.style.display='block';
	}
	GLOBAL.Dom.headerSendPlace.onmouseout=function(){
		this.style.display='none';
	}
	/*购物车监听事件*/
	GLOBAL.Dom.myShoppingCar.onmouseover=function(){
		GLOBAL.Dom.myShoppingCar.style.boxShadow='0 0 15px #DFDFDF';
		GLOBAL.Dom.myShoppingCar.style.borderBottom='none';
		GLOBAL.Dom.myShoppingCarContent1.style.borderTop='none';
		GLOBAL.Dom.myShoppingCarContent1.style.borderLeft='none';
		GLOBAL.Dom.myShoppingCarContent1.style.display='block';
		GLOBAL.Dom.myShoppingCarContent1.style.boxShadow='2px 2px 5px #DFDFDF';
		GLOBAL.Dom.myShoppingCarContent2.style.borderRight='none';
		GLOBAL.Dom.myShoppingCarContent2.style.display='block';
		GLOBAL.Dom.myShoppingCarContent2.style.boxShadow='-2px 0 5px #DFDFDF';
	}
	GLOBAL.Dom.myShoppingCar.onmouseout=function(){
		GLOBAL.Dom.myShoppingCarContent1.style.display='none';
		GLOBAL.Dom.myShoppingCarContent2.style.display='none';
		GLOBAL.Dom.myShoppingCar.style.boxShadow='none';
		GLOBAL.Dom.myShoppingCar.style.borderBottom='1px solid #DFDFDF';
	}
	GLOBAL.Dom.myShoppingCarContent1.onmouseover=function(){
		GLOBAL.Dom.myShoppingCar.style.boxShadow='0 0 15px #DFDFDF';
		GLOBAL.Dom.myShoppingCar.style.borderBottom='none';
		GLOBAL.Dom.myShoppingCarContent1.style.borderTop='none';
		GLOBAL.Dom.myShoppingCarContent1.style.borderLeft='none';
		GLOBAL.Dom.myShoppingCarContent1.style.display='block';
		GLOBAL.Dom.myShoppingCarContent1.style.boxShadow='2px 2px 5px #DFDFDF';
		GLOBAL.Dom.myShoppingCarContent2.style.borderRight='none';
		GLOBAL.Dom.myShoppingCarContent2.style.display='block';
		GLOBAL.Dom.myShoppingCarContent2.style.boxShadow='-2px 0 5px #DFDFDF';		
	}
	GLOBAL.Dom.myShoppingCarContent2.onmouseover=function(){
		GLOBAL.Dom.myShoppingCar.style.boxShadow='0 0 15px #DFDFDF';
		GLOBAL.Dom.myShoppingCar.style.borderBottom='none';
		GLOBAL.Dom.myShoppingCarContent1.style.borderTop='none';
		GLOBAL.Dom.myShoppingCarContent1.style.borderLeft='none';
		GLOBAL.Dom.myShoppingCarContent1.style.display='block';
		GLOBAL.Dom.myShoppingCarContent1.style.boxShadow='2px 2px 5px #DFDFDF';
		GLOBAL.Dom.myShoppingCarContent2.style.borderRight='none';
		GLOBAL.Dom.myShoppingCarContent2.style.display='block';
		GLOBAL.Dom.myShoppingCarContent2.style.boxShadow='-2px 0 5px #DFDFDF';
	}
	GLOBAL.Dom.myShoppingCarContent1.onmouseout=function(){
		GLOBAL.Dom.myShoppingCarContent1.style.display='none';
		GLOBAL.Dom.myShoppingCarContent2.style.display='none';
		GLOBAL.Dom.myShoppingCar.style.boxShadow='none';
		GLOBAL.Dom.myShoppingCar.style.borderBottom='1px solid #DFDFDF';
	}
	GLOBAL.Dom.myShoppingCarContent2.onmouseout=function(){
		GLOBAL.Dom.myShoppingCarContent1.style.display='none';
		GLOBAL.Dom.myShoppingCarContent2.style.display='none';
		GLOBAL.Dom.myShoppingCar.style.boxShadow='none';
		GLOBAL.Dom.myShoppingCar.style.borderBottom='1px solid #DFDFDF';
	}


	/******************侧边栏监听事件**************/
	
		GLOBAL.Dom.midNavbar=getElementsByClass('mid-navbar')[0].getElementsByTagName('li');
		GLOBAL.Dom.navbarContent=getElementsByClass('navbar-content');
		for(var i=0;i<GLOBAL.Dom.midNavbar.length;i++){
			GLOBAL.Dom.midNavbar[i]._index=i;

			GLOBAL.Dom.midNavbar[i].onmouseover=function(){			
				this.style.backgroundColor='#F1F1F1';
				this.style.backgroundImage='none';
				GLOBAL.Dom.navbarContent[this._index].style.display='block';
			}
			GLOBAL.Dom.midNavbar[i].onmouseout=function(){
				this.style.backgroundColor='#c91f37';
				this.style.backgroundImage='url(images/mid-navbar.png)';
				GLOBAL.Dom.navbarContent[this._index].style.display='none';
			}
		}
	
	/******************中部焦点轮播图*******************/	
	(function(){
		GLOBAL.Dom.carousel=getElementsByClass('mid-carousel')[0];
		GLOBAL.Dom.list=getElementsByClass('list')[0];
		GLOBAL.Dom.carouselLeft=getElementsByClass('carousel-left')[0];
		GLOBAL.Dom.carouselRight=getElementsByClass('carousel-right')[0];
		var animated=0;
		function animating(imgWidth){
			var left=parseInt(GLOBAL.Dom.list.offsetLeft)+imgWidth;
				interval=10;
				animated=1;
				speed=imgWidth/20;

			function go(){
				if ( (speed>0 && GLOBAL.Dom.list.offsetLeft < left) || (speed<0 && GLOBAL.Dom.list.offsetLeft>left) ) {
					GLOBAL.Dom.list.style.left=parseInt(GLOBAL.Dom.list.offsetLeft) +speed +'px';	
					setTimeout(go, interval);
				}
				else{
					left=GLOBAL.Dom.list.offsetLeft;
					if (left>-200) {
						GLOBAL.Dom.list.style.left=-700*6+'px';
					}
					if(left<-700*6){
						GLOBAL.Dom.list.style.left=-700+'px';

					}
					animated=0;
				}
			}
				go();
		}
		function play(){
			timer=setTimeout(function(){
				GLOBAL.Dom.carouselLeft.onclick();
				play();
			}, 3000);
		}
		function stop(){
			clearInterval(timer);
		}
		GLOBAL.Dom.carouselLeft.onclick=function(){
			if(!animated){
				if(animated){
					return;
				}
				animating(-700);
			}
		}
		GLOBAL.Dom.carouselRight.onclick=function(){
			if(!animated){
				if(animated){
					return;
				}
				animating(700);
			}
		}
		play();
		GLOBAL.Dom.carousel.onmouseover=function(){
			stop();		
			GLOBAL.Dom.carouselLeft.style.display='block';
			GLOBAL.Dom.carouselRight.style.display='block';			
}		
		GLOBAL.Dom.carousel.onmouseout=function(){
			play();
			GLOBAL.Dom.carouselLeft.style.display='none';
			GLOBAL.Dom.carouselRight.style.display='none';
	}
}());		
		/**********广告栏的轮播图**************/
	
		GLOBAL.Dom.adList=getElementsByClass('ad-list')[0];
		GLOBAL.Dom.adCarouselRight=getElementsByClass('ad-carouselRight')[0];
		GLOBAL.Dom.adCarouselNext=getElementsByClass('ad-carousel-next')[0];
		GLOBAL.Dom.adCarouselPre=getElementsByClass('ad-carousel-pre')[0];
		function animating1(imgWidth){
			var left=parseInt(GLOBAL.Dom.adList.offsetLeft)+imgWidth;
				interval=10;
				animated1=1;
				speed=imgWidth/10;

			function go(){
				if ( (speed>0 && GLOBAL.Dom.adList.offsetLeft < left) || (speed<0 && GLOBAL.Dom.adList.offsetLeft>left) ) {
					GLOBAL.Dom.adList.style.left=parseInt(GLOBAL.Dom.adList.offsetLeft) +speed +'px';					
					setTimeout(go, interval);
				}
				else{
					left=GLOBAL.Dom.adList.offsetLeft;
					if (left>-200) {
						GLOBAL.Dom.adList.style.left=-2000+'px';
					}
					if(left<-2000){
						GLOBAL.Dom.adList.style.left=-1000+'px';

					}
					animated1=0;
				}
			}
				go();
		}
		GLOBAL.Dom.adCarouselNext.onclick=function(event){
			event=EventUtil.getEvent(event);
			EventUtil.stopPropagation(event);
			animating1(-1000);
		}	
		GLOBAL.Dom.adCarouselPre.onclick=function(event){
			event=EventUtil.getEvent(event);
			EventUtil.stopPropagation(event);
			animating1(1000);
		}
		GLOBAL.Dom.adCarouselRight.onmouseover=function(){		
				GLOBAL.Dom.adCarouselPre.style.display='block';
				GLOBAL.Dom.adCarouselNext.style.display='block';			
	}	
		GLOBAL.Dom.adCarouselRight.onmouseout=function(){
			GLOBAL.Dom.adCarouselPre.style.display='none';
			GLOBAL.Dom.adCarouselNext.style.display='none';			
}


		/***************第x层楼导航栏**************/
		
			GLOBAL.Dom.floorHeader=getElementsByClass('floor-header');
			for(var j=0;j<GLOBAL.Dom.floorHeader.length;j++){
				GLOBAL.Dom.floorHeader[j].onmouseover=function(){
					var li=this.getElementsByTagName('li');
					for(var i=0;i<li.length;i++){
						li[i].onmouseover=function(){
						var img=this.getElementsByTagName('img')[0];
						
						this.style.borderBottom='none';
						this.style.borderRight='1px solid #C81623';
						this.style.borderLeft='1px solid #C81623';
						this.style.borderTop='2px solid #C81623';
						if(img){
						img.style.display='none';
						}
					}
						li[i].onmouseout=function(){
							var img=this.getElementsByTagName('img')[0];
							this.style.borderBottom='1px solid #C81623';
							this.style.borderRight='none';
							li[0].style.borderRight='1px solid #ccc';
							this.style.borderLeft='none';
							li[li.length-1].style.borderLeft='1px solid #ccc';
							this.style.borderTop='1px solid #ccc';
							if(img){
							img.style.display='block';
						}
					}
				}			
			}	
		}
			
		

		/************************楼层跟随导航************************/
		
			GLOBAL.Dom.trace=getElementsByClass('trace')[0];
			GLOBAL.Dom.traceLi=GLOBAL.Dom.trace.getElementsByTagName('li');	
			var top=window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
			if(top<400){
				GLOBAL.Dom.trace.style.display='none';
			}
			if(top>400&&top<1500){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[0].style.backgroundColor='#C81623';
				}
				if(top>1500&&top<2000){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[1].style.backgroundColor='#C81623';
				}
				if(top>2000&&top<2500){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[2].style.backgroundColor='#C81623';
				}
				if(top>2500&&top<3000){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[3].style.backgroundColor='#C81623';
				}
				if(top>3000&&top<3500){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[4].style.backgroundColor='#C81623';
				}
				if(top>3500){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[5].style.backgroundColor='#C81623';
				}

			window.onscroll=function(){
				var top=window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
				if(top<400){
				GLOBAL.Dom.trace.style.display='none';
				}
				if(top>400&&top<1500){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[0].style.backgroundColor='#C81623';
				}
				if(top>1500&&top<2000){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[1].style.backgroundColor='#C81623';
				}
				if(top>2000&&top<2500){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[2].style.backgroundColor='#C81623';
				}
				if(top>2500&&top<3000){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[3].style.backgroundColor='#C81623';
				}
				if(top>3000&&top<3500){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[4].style.backgroundColor='#C81623';
				}
				if(top>3500){					
					GLOBAL.Dom.trace.style.display='block';
					for(var i=0;i<GLOBAL.Dom.traceLi.length;i++){
					GLOBAL.Dom.traceLi[i].style.backgroundColor='#fff';
				}
					GLOBAL.Dom.traceLi[5].style.backgroundColor='#C81623';
				}
			}				
		
		/***********************************右侧icon栏***************************/
		
			GLOBAL.Dom.rightIcon=getElementsByClass('right-side-icon')[0].getElementsByTagName('li');
			GLOBAL.Dom.rightIconSlide=getElementsByClass('right-icon-slide');
			var timer=null;
			for(var i=0;i<GLOBAL.Dom.rightIcon.length;i++){
				GLOBAL.Dom.rightIcon[i]._index=i;
			var sliding=new Array;
				sliding[i]=true;
				GLOBAL.Dom.rightIcon[i].onmouseover=function(){
					var that=this;
						sliding[that._index]=true;
					function slide(){
						if(GLOBAL.Dom.rightIconSlide[that._index].offsetLeft>-70&&sliding[that._index]){
							GLOBAL.Dom.rightIconSlide[that._index].style.left=parseInt(GLOBAL.Dom.rightIconSlide[that._index].offsetLeft)- 5 +'px';
							setTimeout(slide,30)
						}
						else if(GLOBAL.Dom.rightIconSlide[that._index].offsetLeft>-70&&!sliding[that._index]){
							GLOBAL.Dom.rightIconSlide[that._index].style.left=parseInt(GLOBAL.Dom.rightIconSlide[that._index].offsetLeft);
						}
						else{
							GLOBAL.Dom.rightIconSlide[that._index].style.left=-70+'px';
						}
					}
					slide();											
				}
				GLOBAL.Dom.rightIcon[i].onmouseout=function(){
					var that=this;
						sliding[that._index]=false;
					function slide(){
						if(GLOBAL.Dom.rightIconSlide[that._index].offsetLeft<0&&!sliding[that._index]){
							GLOBAL.Dom.rightIconSlide[that._index].style.left=parseInt(GLOBAL.Dom.rightIconSlide[that._index].offsetLeft)+ 5 +'px';
							setTimeout(slide,30)
						}
						else if(GLOBAL.Dom.rightIconSlide[that._index].offsetLeft<0&&sliding[that._index]){
							GLOBAL.Dom.rightIconSlide[that._index].style.left=parseInt(GLOBAL.Dom.rightIconSlide[that._index].offsetLeft);
						}
						else{
							GLOBAL.Dom.rightIconSlide[that._index].style.left=0+'px';
						}
					}
					slide();											
				}		
			}
			
}