$(document).ready(function () {
    //Wow.js
    new WOW().init();

    //Header CSS
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('on');
            $('.gnb>a').addClass('on');
        } else {
            $('header').removeClass('on');
            $('.gnb>a').removeClass('on');
        }
    })


    $('.gnb>a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })

    $(window).scroll(function () {
        var height = $(document).scrollTop();
    })



    //Trigger
    $('.trigger').click(function () {
        $(this).toggleClass('active');
        $('.gnb').toggleClass('active');
    })
    $('section, .gnb a').click(function () {
        $('.gnb').removeClass('active');
        $('.trigger').removeClass('active');
    })


    // $(window).on('scroll',function() {
    //     $('.target').each(function() {
    //         if($(window).scrollTop() >= $(this).offset().top) {
    //             var id = $(this).attr('id');
    //             $('.gnb a').removeClass('active');
    //             $('.gnb a[href=#"+ id +"]').addClass('active');
    //         }
    //     });
    // });

    var home = $('#home').position().top;
    var about = $('#about').position().top - 500;
    var skill = $('#skill').position().top - 500;
    var portfolio = $('#portfolio').position().top - 500;
    var epilogue = $('#epilogue').position().top - 500;

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop < about) {
            $('.gnb a').eq(0).addClass('active').siblings().removeClass('active')
        } else if (about <= scrollTop && scrollTop < skill) {
            $('.gnb a').eq(1).addClass('active').siblings().removeClass('active')
        } else if (skill <= scrollTop && scrollTop < portfolio) {
            $('.gnb a').eq(2).addClass('active').siblings().removeClass('active')
        } else if (portfolio <= scrollTop && scrollTop < epilogue) {
            $('.gnb a').eq(3).addClass('active').siblings().removeClass('active')
        } else if (epilogue < scrollTop) {
            $('.gnb a').eq(4).addClass('active').siblings().removeClass('active')
        }
    })


    //Portfolio Mobile Web App Mockup Image FadeIn&OUT
    // var MobileMockup = $('.mobile-web-app .mockup-image>div');

    // MobileMockup.eq(0).show().siblings().hide();

    // var MobileIdx = 0;
    // console.log(MobileIdx);

    // setInterval(function () {
    //     if (MobileIdx < 2) {
    //         MobileIdx++;
    //     } else {
    //         MobileIdx = 0;
    //     }

    //     MobileMockup.eq(MobileIdx).siblings().fadeOut(1000);
    //     MobileMockup.eq(MobileIdx).fadeIn(1000);
    // }, 3000)


    //Practical Publishing & Graphic Category
    $('.practical-graphic .tab-menu').mouseenter(function () {
        $(this).find('.category').stop().slideDown(300)
    })
    $('.practical-graphic .tab-menu').mouseleave(function () {
        $(this).find('.category').stop().slideUp(300)
    })

    $('.practical-grapic .cont-inner>div>div').hide();

    $('.category>li').click(function () {
        $('.tab-menu>li>a').removeClass('active');
        $(this).parent().prev().addClass('active')
        $('.category>li').removeClass('active')
        $(this).addClass('active').siblings().removeClass('active');

        var num = $(this).index();
        console.log(num)

        // $($(this).parentsUntil('.practical-graphic')).find('.cont-inner>div')

        console.log($(this).parent().parent().index())

        var PracGrapLiIdx = $(this).parent().parent().index();
        if (PracGrapLiIdx < 1) {
            $('.prac-con>div').eq(num).show().siblings().hide();
        } else {
            $('.grap-con>div').eq(num).show().siblings().hide();
        }
    })

    // colormode change
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark")
    }
    
    document.getElementById("themeSwitch").addEventListener("click",() => {
      document.documentElement.classList.toggle("dark")
    })

})


// $('.practical-graphic .tab-menu>li').click(function(){
//     $(this).addClass('active');
//     $(this).parent().siblings().children().removeClass('active');
// })