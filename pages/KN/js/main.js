$(document).ready(function(){
    //wow js
    new WOW().init();
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        // slideWidth: 1200
        onSliderLoad: function(currentIndex){
           var  currentIndex = ".slider  .lst:eq("+currentIndex+")"
           mainMotion(currentIndex);
        },
        onSlideBefore: function(currentIndex){
            mainMotion(currentIndex);
        },
        onSlideAfter: function(currentIndex){}
    });

    var w = $(window).width();

    Cheight();
    // if(w>841){
    //     subMenuOpen();
    // }else if(w<=841){
    //     mobileMenuOpen();
    //     mobileSubMenuOpen();
    // }
    searchBoxOpen();
    
    //galleryMotion();
    footerSubMenu();
    iconHover();

    //mainMotion();

    //스크롤에 따라 효과 나타나기
    var isVisible = false;
    var isVisible2 = false;

    $(window).scroll(function(){
        var infoTop = $('#knInfo').offset().top;
        var galleryTop = $('#knCenter').offset().top;
        var wsct = $(window).scrollTop()+500;
        if(!isVisible){
            $('#knInfo').each(function(){
                if(infoTop<=wsct){
                    infoMotion();
                    isVisible=true;
                }
            })
        }else if(!isVisible2){
            $('#knCenter').each(function(){
                if(galleryTop<=wsct+100){
                    galleryMotion();
                    isVisible2=true;
                }
            })
        }
    })
})
$(window).resize(function(){
    Cheight();
})
function Cheight(){
    var h = $(window).height();
    var w = $(window).width();
    var reh = h-84;
    $('#lnb').hide();
    $('#contents').css('height',reh+'px');
    $('#knInfo').css('height',reh+'px');
    $('#knCenter').css('height',reh+'px');
    if(w<1024){
        $('#contents').css('height',1340+'px');
        $('#knCenter').css('height',788+'px');
    }else if(w>841){
        $('#h_left').off();
        $('#h_left').on('click',subMenuOpen);
    }else if(w<=841){
        $('#lnb').hide();
        $('#h_left').off();
        //$('#h_left').off();
        mobileMenuOpen();
        mobileSubMenuOpen();
    }
}
// 메인메뉴 슬라이드
function subMenuOpen(){
    // $('#h_left').click(function(){
        $('#searchBox').hide();
        $('#lnb').slideToggle();  
    // })    
}

//모바일메뉴 슬라이드
function mobileMenuOpen(){
    $('#h_left').click(function(){
        $('#mobile_lnb').animate({left:0});
    })
}

//모바일 서브메뉴 동작
function mobileSubMenuOpen(){
    $('.subRight,.subRight ul').hide();
    $('.mainMenu>li:nth-child(1)').addClass('on');
    $('.mainMenu>li:nth-child(1)').find('.subRight,.subRight ul').show();
    $('.mainMenu>li').click(function(){
        //클릭한 메뉴 하위메뉴 보이기
        $('.subRight,.subRight ul').hide();
        $(this).find('.subRight,.subRight ul').show();
        //클릭한 메뉴 배경색 바뀌기
        $('.mainMenu>li').removeClass('on');
        $(this).addClass('on');
        // var a = $(this).find('ul').show();
        // console.log(a);
    })

    $('#m_close').click(function(){
        $('#mobile_lnb').animate({left:'-90%'});
    })
}
// 검색창 슬라이드
function searchBoxOpen(){
    $('header button').click(function(){
        $('#lnb').slideUp();
        $('#searchBox').slideToggle();
    })
    $('#close').click(function(){
        $('#searchBox').slideUp();  
    })
    $('#btn').click(function(){
        alert("검색할 제품명을 입력해 주세요");0
    })
}
function footerSubMenu(){
    $('#familySite').click(function(){
        $('#footerSub').slideToggle();
        return false;
    })
}
// 메인 슬라이드
function mainMotion(currentIndex){
    var obj1 = $('.main_left #mtext');
    var obj2 = $('.main_left #mimg');
    var obj3 = $('.main_right h2');
    var obj4 = $('.main_right h3');
    var obj5 = $('.main_right h4');
    //var myTween = new TweenMax(obj1,2,{opacity:1});
    TweenMax.set(obj1,{opacity:0,x:-20});
    TweenMax.set(obj2,{opacity:0,x:20});
    TweenMax.set(obj3,{opacity:0,y:30});
    TweenMax.set(obj4,{opacity:0,y:30});
    TweenMax.set(obj5,{opacity:0,y:30});

    TweenMax.to(obj1,0.4,{opacity:1,x:0,delay:0.6});
    TweenMax.to(obj2,0.4,{opacity:1,x:0,delay:1.0});
    TweenMax.to(obj3,0.4,{opacity:1,y:0,delay:1.0});
    TweenMax.to(obj4,0.4,{opacity:1,y:0,delay:1.2});
    TweenMax.to(obj5,0.4,{opacity:1,y:0,delay:1.4});
}
function iconHover(){
    $('#sns .pc_ico').mouseenter(function(){
        $(this).attr("src", $(this).attr("src").replace("off.png", "on.png"));
    }).mouseleave(function(){
        $(this).attr("src", $(this).attr("src").replace("on.png", "off.png"));
    })
}
// function imgMotion(){
//     var productImg1 = $('#con1 img');
//     var productImg2 = $('#con2 img');
//     var productImg3 = $('#con3 img');
//     var productImg4 = $('#con4 img');

//     TweenMax.set(productImg1,{opacity:0,x:60});
//     TweenMax.set(productImg2,{opacity:0,x:60});
//     TweenMax.set(productImg3,{opacity:0,x:60});
//     TweenMax.set(productImg4,{opacity:0,x:60});

//     TweenMax.to(productImg1,0.2{opacity:1,x:0,delay:0.6});
//     TweenMax.to(productImg2,0.2{opacity:1,x:0,delay:0.9});
//     TweenMax.to(productImg3,0.2{opacity:1,x:0,delay:1.2});
//     TweenMax.to(productImg4,0.2{opacity:1,x:0,delay:1.4});
// }
function infoMotion(){
    var icon1 = $('#iconBox li:eq(0)');
    var icon2 = $('#iconBox li:eq(1)');
    var icon3 = $('#iconBox li:eq(2)');

    TweenMax.set(icon1,{opacity:0,y:30});
    TweenMax.set(icon2,{opacity:0,y:30});
    TweenMax.set(icon3,{opacity:0,y:30});

    TweenMax.to(icon1,0.2,{opacity:1,y:0,delay:0.6});
    TweenMax.to(icon2,0.2,{opacity:1,y:0,delay:0.8});
    TweenMax.to(icon3,0.2,{opacity:1,y:0,delay:1.0});
}

function galleryMotion(){
    var gallery1 = $('#photoMenu .menu:eq(0)');
    var gallery2 = $('#photoMenu .menu:eq(1)');
    var gallery3 = $('#photoMenu .menu:eq(2)');

    TweenMax.set(gallery1,{opacity:0,y:30});
    TweenMax.set(gallery2,{opacity:0,y:30});
    TweenMax.set(gallery3,{opacity:0,y:30});

    TweenMax.to(gallery1,0.2,{opacity:1,y:0,delay:0.6});
    TweenMax.to(gallery2,0.2,{opacity:1,y:0,delay:0.8});
    TweenMax.to(gallery3,0.2,{opacity:1,y:0,delay:1.0});
}

