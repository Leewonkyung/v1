$(function(){

	//wow js
   	new WOW().init();
	
	flexImg();
	gallery();
	setInterval(onTimer,3000);
	// bgChange();
})

//호텔미리보기 갤러리
function gallery(){
	var text0 = $('#th01 h3').text();
	var text1 = $('#th01 p').text();
	$('#big h3').text(text0);
	$('#big p').text(text1);

	$('.thumbs a').click(function(){
		var ch = $(this).attr('href');
		$('#big img').attr('src',ch);
		$('#big img').css({display:'none'}).fadeIn(800);
		var title = $(this).next('h3').text();
		var info = $(this).siblings('p').text();
		$('#big h3').text(title);
		$('#big p').text(info);
		return false;
	})
}

//가까운 인기도시 아코디언 이미지
function flexImg(){
	$('#contents2>ul>li').mouseenter(function(){
		$('#contents2>ul>li').stop().animate({width:'17.9%'});
		$(this).stop().animate({width:'28%'},'slow');
		$(this).find('img').stop().animate({opacity:1});
		console.log('hover');
	}).mouseleave(function(){
		$(this).stop().animate({width:'20%'},'slow');
		$(this).find('img').stop().animate({opacity:0.5});
		$('#contents2>ul>li').stop().animate({width:'20%'});
		
	})
}

//해변인기도시 시간마다 배경 바꾸기
var imgIndex = 0;
function bgChange(n){
	var imgArr = ['popular-bg.png','popular-bg02.jpg','popular-bg03.jpg'];
	var imageUrl = "url(img/" + imgArr[n] + ")";
	$('#contents4').css({backgroundImage:imageUrl});
}
function onTimer(){
	if(imgIndex<2){
		imgIndex++;
	}else{
		imgIndex = 0;
	}
	bgChange(imgIndex);
}