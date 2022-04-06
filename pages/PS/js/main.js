$(function(){
	$('.slider').bxSlider({
        auto: true,
        speed: 500,
        mode: 'fade',
        captions: true,
        slideWidth: 1200,        
      });

	var visual = $('#con_set > ul > li');
    var button = $('#nav > a');
    var current = 0;
    var setIntervalId;
    
    button.eq(0).addClass('on');
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();
            button.removeClass('on');
            tg.addClass('on');

            move(i);
        }
    });
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == visual.length){
                n = 0;
            }
            
            button.eq(n).trigger('click');
        }, 5000);
    }

    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({left:0}).stop().animate({left:'-1200px'});
        nextEl.css({left:'100%'}).stop().animate({left:0});

        current = i;
    }
})

	