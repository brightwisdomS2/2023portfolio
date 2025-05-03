$(function () {
    //scroll benefit animation

    $(window).resize(function () {
        if (window.innerWidth > 767) {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 150) {
                    $('.benefit-inner>div').addClass('active')
                } else {
                    $('.benefit-inner>div').removeClass('active')
                }
            })
        } else {
            $('.benefit-inner>div').css({
                opacity: 1
            })
        }
    }).resize();

    //scroll brand-story animation

    $(window).resize(function () {
        if (window.innerWidth > 767) {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 600) {
                    $('.sec2-inner>div>p').addClass('active'),
                        $('.cleaz-logo img:nth-child(1)').addClass('active'),
                        $('.cleaz-logo img:nth-child(2)').addClass('active')
                } else {
                    $('.sec2-inner>div>p').removeClass('active'),
                        $('.cleaz-logo img:nth-child(1)').removeClass('active'),
                        $('.cleaz-logo img:nth-child(2)').removeClass('active')
                }
            })

        } else {

            $('.sec2-inner>div>p').css({
                    opacity: 1
                }),
                $('.cleaz-logo img:nth-child(1)').css({
                    opacity: 1
                }),
                $('.cleaz-logo img:nth-child(2)').css({
                    opacity: 1
                })
            /* 스크립트내용*/

        }

    }).resize();



    var slideIdx = 0;

    $(window).resize(function () {
        if (window.innerWidth > 767) {
            setInterval(function () {
                if (slideIdx < 7) {
                    slideIdx++;
                } else {
                    slideIdx = 0;
                }

                var slidePosition = slideIdx * (-33.3333) + '%';
                $('.review-box').animate({
                    left: slidePosition
                }, 300);
            }, 1000)
        } else {
            setInterval(function () {
                if (slideIdx < 10) {
                    slideIdx++;
                } else {
                    slideIdx = 0;
                }

                var slidePosition = slideIdx * (-100) + '%';
                $('.review-box').animate({
                    left: slidePosition
                }, 300);
            }, 1000)
        }
    }).resize();
    
})