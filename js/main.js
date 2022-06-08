$(document).ready(function() {

    var scrollStartingCheck = true;
    var scrollEndingCheck = false;

    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta <= 0) {
            if(scrollStartingCheck === true){
                $('.main > div:nth-of-type(' + 1 + ')').removeClass('pageTop')
                var offSetTop = $('.main > div:nth-of-type(' + 2 + ')').offset().top;
                $('body').animate({
                    scrollTop: offSetTop
                }, 800);
                scrollStartingCheck = false;
            }
        }else if(event.originalEvent.wheelDelta >= 0 && scrollEndingCheck === true){

            var offSetTop = $('.main > div:nth-of-type(' + 2 + ')').offset().top;
            $('body').animate({
                scrollTop: offSetTop
            }, 800);
            scrollEndingCheck = false;
        }
    });

    new Swiper('.Myswiper', {
        speed: 800,
        direction: 'vertical',
        mousewheel: {
            sensitivity: 1,
        },
    });

    new Swiper('.Myswiper--inner', {
        speed: 800,
        direction: 'vertical',
        mousewheel: {
            sensitivity: 1,
        },
        nested: true,
        on: {
            reachBeginning: function () {
                $('body').one('mousewheel', function(){
                    $('.main > div:nth-of-type(' + 1 + ')').addClass('pageTop')
                    $('html *, body *').animate({
                        scrollTop: 0
                    }, 800);
                    scrollStartingCheck = true;
                });
            },
        },
    });

    new Swiper('.Myswiper--inner2', {
        speed: 800,
        direction: 'vertical',
        mousewheel: {
            sensitivity: 1,
        },
        nested: true,
        on: {
            reachEnd: function () {
                $('body').one('mousewheel', function(){
                    if($('.main > div:nth-of-type(' + 3 + ')')){
                        var offSetTop = $('.main > div:nth-of-type(' + 3 + ')').offset().top;
                        $('body').animate({
                            scrollTop: offSetTop
                        }, 800);
                        scrollEndingCheck = true;
                    }
                });
            },
        },
    });

});