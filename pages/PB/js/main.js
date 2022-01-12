$(function(){

 wSize();
 footerBtn();

})


$(window).on('resize',function(){
    wSize();

});


function wSize(){
    var w = $(window).width();
    if(w>800){ //PC
        $('#mMenu_wrap .lnb>a').on('mouseenter',pcSubmenu);
        $('#main_menu').on('mouseleave',pcSubout);
        subMenu();
        $('#main_menu').show();
        $('#mMenu_wrap .lnb>ul').hide();
        setInterval(onTimer,3000);
       
    }else if(w<=800){
        $('#mMenu_wrap .lnb>a').off();
        $('#main_menu').off();
        $('#main_menu').hide();
        // $('#submenu').hide();
        $('#mbtn').off();
        $('#mbtn').on('click',topMenuBtn);
        $('#mMenu_wrap .lnb>a').on('click',tabletSub);
        //tMenu();
        //t_subMenu();
    }
}
function subMenu(){
    $('#mMenu_wrap .lnb>a').mouseenter(function(){
        $('#submenu').stop().slideDown();
        $('#mMenu_wrap ul li ul').stop().slideDown();
    })
    $('#main_menu').mouseleave(function(){
        $('#submenu').stop().slideUp();
        $('#mMenu_wrap ul li ul').stop().slideUp();
    })
}
function pcSubmenu(){
    $('#submenu').stop().slideDown();
    $('#mMenu_wrap ul li ul').stop().slideDown();
}
function pcSubout(){
    $('#submenu').stop().slideUp();
    $('#mMenu_wrap ul li ul').stop().slideUp();
}

function topMenuBtn(){
    $('#mMenu_wrap .lnb>ul').slideUp();
    $('#main_menu').stop().slideToggle();
    console.log('click');
}

function tabletSub(){
   if($(this).next().css('display')=='none'){
        $('#mMenu_wrap .lnb>ul').slideUp();
        $(this).parent().find('ul').slideDown();
    }
    $(this).parent().find('ul').slideDown(); 
}

//채용정보, 브랜드사이트 하위메뉴 보기
function footerBtn(){
    $('#recruit>a').click(function(){
        $('#recruit>ul').slideToggle();
        return false;
    })
    $('#brandsite>a').click(function(){
        if($('#recruit>ul').css('display')=='block'){
            $('#recruit>ul').hide();
        }
        $('#brandsite>ul').slideToggle();
        return false;
    })
}

var imgIndex = 0;
function bgChange(n){
    var imgArr = ['mainVisual01.jpg','mainVisual02.jpg','mainVisual03.jpg'];
    var imageUrl = "url(images/" + imgArr[n] + ")";
    $('#mainVisual').css({backgroundImage:imageUrl}).fadeIn(1000);
}
function onTimer(){
    if(imgIndex<2){
        imgIndex++;
    }else{
        imgIndex = 0;
    }
    bgChange(imgIndex);
}
