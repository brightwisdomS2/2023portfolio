$(document).ready(function () {


    /* gnb-scrollTo */
    $('.gnb>ul>li>a').click(function (e) {
        $.scrollTo(this.hash || 0, 800)
    });

    /* right-menu scrollTo */
    $('.gototop-btn').click(function (e) {
        $.scrollTo(this.hash || 0, 800)
    });



    /* sec2-txt-animation */
    $(window).resize(function () {
        if (window.innerWidth > 767) {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 300) {
                    $('.sec2-txt').addClass('active')
                } else {
                    $('.sec2-txt').removeClass('active')
                }
            })
        } else {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 350) {
                    $('.sec2-txt').addClass('active')
                } else {
                    $('.sec2-txt').removeClass('active')
                }
            })
        }
    }).resize();




    /* sec2-gallery-arrow */
    var sec2ArrowLeft = $('.sec2-btn .arrowleft');
    var sec2ArrowRight = $('.sec2-btn .arrowright');
    var GalleryLi = $('.gallery-box li');
    var galleryBox = $('.gallery-box');



    var GalleryIdx = 1;

    sec2ArrowLeft.on('click', sec2ArrowLeftFunc)

    function sec2ArrowLeftFunc() {
        GalleryIdx--;
        console.log(GalleryIdx);

        var galleryGab = GalleryLi.eq(1).offset().left - GalleryLi.eq(0).offset().left;

        console.log(galleryGab)

        var goLeft = -(galleryGab * GalleryIdx)

        galleryBox.animate({
            left: goLeft
        }, 500);

        //더 이상 왼쪽으로 넘어갈 수 없으면 멈추게
        if (GalleryIdx < 0) {
            galleryBox.stop();
            GalleryIdx = 1;
        }

        //더 이상 넘어갈 수 없으면 왼쪽 버튼 없어지게
        if (GalleryIdx <= 0) {
            sec2ArrowLeft.hide();
        }

        //다시 오른쪽으로 넘어갈 요소가 생기면 왼쪽 버튼 생기게
        if (GalleryIdx < 3) {
            sec2ArrowRight.show();
        }



        $('.gallery-box li.on').prev().addClass('on').siblings().removeClass('on')

    }


    sec2ArrowRight.on('click', sec2ArrowRightFunc)

    function sec2ArrowRightFunc() {
        GalleryIdx++;
        console.log(GalleryIdx);

        var galleryGab = GalleryLi.eq(1).offset().left - GalleryLi.eq(0).offset().left;

        console.log(galleryGab)

        var goLeft = -(galleryGab * GalleryIdx)

        galleryBox.animate({
            left: goLeft
        }, 500);

        //더 이상 오른쪽으로 넘어갈 수 없으면 멈추게
        if (GalleryIdx > 3) {
            galleryBox.stop();
            GalleryIdx = 3;
        }

        //더 이상 넘어갈 수 없으면 오른쪽 버튼 없어지게
        if (GalleryIdx >= 3) {
            sec2ArrowRight.hide();
        }

        //다시 왼쪽으로 넘어갈 요소가 생기면 왼쪽 버튼 생기게
        if (GalleryIdx > 0) {
            sec2ArrowLeft.show();
        }


        $('.gallery-box li.on').next().addClass('on').siblings().removeClass('on')

    }

    // $('.arrowleft').click(function () {
    //     $('.gallery-box li.on').prev().addClass('on').siblings().removeClass('on')
    //     $('.gallery-box').animate({left:'0'})
    // })

    // $('.arrowright').click(function () {
    //     $('.gallery-box li.on').next().addClass('on').siblings().removeClass('on')
    //     $('.gallery-box').animate({transform:'translateX(-1000%)'})
    // })






    //sec4-txt-animation

    console.log((window).scrollY);
    //현재 스크롤 위치

    $(window).resize(function () {
        if (window.innerWidth > 767) {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 1900) {
                    $('.sec4-txt b').addClass('active'),
                        $('.sec4-txt h1').addClass('active'),
                        $('.sec4-txt h3').addClass('active')
                } else {
                    $('.sec4-txt b').removeClass('active'),
                        $('.sec4-txt h1').removeClass('active'),
                        $('.sec4-txt h3').removeClass('active')
                }
            })
        } else {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 1000) {
                    $('.sec4-txt b').addClass('active'),
                        $('.sec4-txt h1').addClass('active'),
                        $('.sec4-txt h3').addClass('active')
                } else {
                    $('.sec4-txt b').removeClass('active'),
                        $('.sec4-txt h1').removeClass('active'),
                        $('.sec4-txt h3').removeClass('active')
                }
            })
        }
    }).resize();



    //sec5-txt-animation

    $(window).resize(function () {
        if (window.innerWidth > 767) {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 3500) {
                    $('.sec5-txt b').addClass('active'),
                        $('.sec5-txt h1').addClass('active'),
                        $('.sec5-txt h3').addClass('active')
                } else {
                    $('.sec5-txt b').removeClass('active'),
                        $('.sec5-txt h1').removeClass('active'),
                        $('.sec5-txt h3').removeClass('active')
                }
            })
        } else {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 1800) {
                    $('.sec5-txt b').addClass('active'),
                        $('.sec5-txt h1').addClass('active'),
                        $('.sec5-txt h3').addClass('active')
                } else {
                    $('.sec5-txt b').removeClass('active'),
                        $('.sec5-txt h1').removeClass('active'),
                        $('.sec5-txt h3').removeClass('active')
                }
            })
        }
    }).resize();




    //section5 Tab-Btn{


    $('.tab-btn li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');

        var index = $(this).index()
        console.log(index)

        $('.tab-cont>div').hide();
        $('.tab-cont>div').eq(index).show();

        //a링크의 이동 막아준다
        return false;
    })


    //section5 Slick-Slide
    $('.sec5-slide-box').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    })

    /*     $(window).resize(function(){
            if(window.innerWidth<768){
                $('.sec-slide')
            }
        })
     */
    $('.review-slide-cont').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
    })
    $('.review-slide-cont').slick('slickPlay');


    /* privacy btn */
    $('.privacy-page a').click(function () {
        $('#privacy-pop').show()
    })

    $('#privacy-pop .priv-txt .close-btn, #privacy-pop .priv-bg').click(function () {
        $('#privacy-pop').hide()
    })




    /* mobile */

    //trigger 누르면 왼쪽에서 gnb 나타나고 배경
    $('.trigger').click(function () {
        $('.gnb').stop().animate({
            left: 0
        });
        $('.trigger-bg').css({
            'height': '100vh'
        })
    })

    //gnb 메뉴 누르면 이동과 동시에 gnb,배경 다시 사라짐
    //배경 눌러도 gnb,배경 사라짐
    $(window).resize(function () {
        if (window.innerWidth < 768) {
            $('.gnb a').click(function () {
                $('.gnb').stop().animate({
                    left: -1000
                });
                $('.trigger-bg').css({
                    'height': '0'
                })
            });
            $('.trigger-bg').click(function () {
                $('.gnb').stop().animate({
                    left: -1000
                });
                $('.trigger-bg').css({
                    'height': '0'
                })
            })
        }
    }).resize();





})