$(document).ready(function(){

  AOS.init();
  
  var headerH = $('header').outerHeight();
  $(window).scroll(function(){

    if ($(window).scrollTop() >= headerH) {
       $('header').addClass('fixed-header');
       $(".btn-top").fadeIn();
    }
    else {
       $('header').removeClass('fixed-header');
       $(".btn-top").fadeOut();
    }
  
  });

  $(".btn-top").click(function (){
    $("html, body").stop(true).animate({scrollTop: 0},400);
  })

  $(".section-slide").each(function(q) {
      var wrap = $(this).find("ul");
      wrap.addClass('ani-play');
      $(this).hover(function(){
          if(wrap.hasClass('ani-play')){
              wrap.removeClass('ani-play');
              wrap.addClass('ani-pause');
          }
      },function(){
          if(wrap.hasClass('ani-pause')){
              wrap.removeClass('ani-pause');
              wrap.addClass('ani-play');
          }
      })
  });
  
  flowRolling();

})

function flowRolling(){
  const $wrap = $('.section-slide ul');
  const $list = $('.section-slide ul li');
  let wrapWidth = $wrap.width();
  let listWidth = $list.width();

  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct();

  function flowBannerAct() {
    if (listWidth < wrapWidth) {
      const listCount = Math.ceil(wrapWidth * 2 / listWidth);
      for (let i = 2; i < listCount; i++) {
        $clone = $clone.clone();
        $wrap.append($clone);
      }
    }
    $wrap.css({ 'animation': `350s linear infinite flowRolling` }); 
  } 

  $wrap.addClass('ani-play');
  $wrap.hover(function(){
    if($(this).hasClass('ani-play')){
      $(this).removeClass('ani-play');
      $(this).addClass('ani-pause');
      }
  },function(){
      if($(this).hasClass('ani-pause')){
        $(this).removeClass('ani-pause');
        $(this).addClass('ani-play');
      }
  })
}

