$(function(){
	//wow js
   new WOW().init();
	
   var a = 5;
   $('#timelineBox ul li:last-child').addClass('on');
   $('#time04').stop().animate({left:'-100%'});
   $('#btn_prev img').click(function(){	
   	var b = a-1;
   		if(a>1){
   			$('#time0'+a).stop().animate({left:'100%'});
   			$('#time0'+b).stop().animate({left:'0'});
   			$('#timelineBox ul li').removeClass('on');
   			$('#timelineBox ul li:nth-child('+b+')').addClass('on');
   			a--;
   		}else if(a<=1){
   			return false;
   		}
   })
   $('#btn_next img').click(function(){	
   	var b = a+1;
   		if(a<5){
   			$('#time0'+a).stop().animate({left:'-100%'});
   			$('#time0'+b).stop().animate({left:'0'});
   			$('#timelineBox ul li').removeClass('on');
   			$('#timelineBox ul li:nth-child('+b+')').addClass('on');
   			a++;
   		}else if(a>=5){
   			return false;
   		}
   })

})
