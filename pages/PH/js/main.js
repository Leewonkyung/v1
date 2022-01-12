$(function(){

//로고이미지 바꾸기
function logoChange(){
	// $window.on('scroll',function(){
	var logo = $('.page-header-clone h1 img');
	logo.attr("src", logo.attr("src").replace("logo.png", "logo02.png"));
// })
}

//헤더 변경하기
$('.page-header').each(function(){
	//$window변수에 window객체 담기
	var $window = $(window);
	//$header변수에 $('.page-header')담기
	var $header = $(this);
	//$('.page-header')의 모든 자식요소들을 찾아서 복제하기
	var $headerClone = $header.contents().clone();
	//복제할 요소들을 담을 div생성하기
	var $headerCloneBox = $('<div class="page-header-clone"></div>')
	//$('.page-header')의 top좌표값 + $('.page-header')의 높이
	//outerHeight() = height + padding + border
	var h = $header.offset().top + $header.outerHeight();

	//.page-header-clone안에 $('.page-header')의 복제된 내용물 넣기
	$headerCloneBox.append($headerClone);
	//body안에 .page-header-clone 넣기
	$headerCloneBox.appendTo('body');

	//스크롤 이벤트 작동하면
	$window.on('scroll',function(){
		//창의 scrollbar의 top위치가 headerTop위치보다 크면
		//.page-header 맨위에 고정되기
		if($window.scrollTop()>h){
			//.page-header-clone 위에서 아래로 나타나기
			$headerCloneBox.addClass('visible');
			logoChange();
			$header.css({top:'-110px'});
		}else{
			$headerCloneBox.removeClass('visible');
			$header.css({top:'0px'});
		}
	})

	$window.trigger('scroll');
	
})

var logo = $('.page-header-clone h1');
var menu = $('.page-header ul li');
var menu2 = $('.page-header-clone ul li')
var contents = $('#contents>div');
var scroll = $('#scroll');

//스크롤 버튼 클릭 시 한페이지 슬라이드
scroll.click(function(){
	var screen = $('#accom').offset().top;
	$('html,body').stop().animate({scrollTop:screen});
})
var element = $("#scroll");
var shown = true;

setInterval(toggle, 800);

function toggle(){
	if(shown) {
       element.fadeOut();
       shown = false;
   } else {
       element.fadeIn();
       shown = true;
   }
}
//로고이미지 클릭 시 상단으로 이동
logo.click(function(){
	var tt = $('#mainVisual').offset().top;
	$('html,body').stop().animate({scrollTop:tt},500);
})
//기존 메뉴 클릭 시 이동
menu.click(function(event){
	event.preventDefault(); //return false와 같은 기능

	var tg = $(this);
	var i = tg.index();
	var section = contents.eq(i);
	var tt = section.offset().top;

	//해당 위치로 애니메이트 되기
	$('html,body').stop().animate({scrollTop:tt},500);
})
//변경된 메뉴 클릭 시 이동
menu2.click(function(event){
	event.preventDefault(); //return false와 같은 기능

	var tg = $(this);
	var i = tg.index();
	var section = contents.eq(i);
	var tt = section.offset().top;

	menu2.removeClass('on').eq(i).addClass('on');

	//해당 위치로 애니메이트 되기
	$('html,body').stop().animate({scrollTop:tt},500);
})

//스크롤 움직임에 따라 메뉴 활성화 하기
$(window).scroll(function(){
	var sct = $(window).scrollTop()+200;

	contents.each(function(){
		var tg = $(this);
		var i = tg.index();
		if(tg.offset().top <= sct){
			menu2.removeClass('on').eq(i).addClass('on');
		}
	})
})


})
