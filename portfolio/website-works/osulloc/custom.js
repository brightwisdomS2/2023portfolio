$(function () {
    var sec1galleryLi = $('.gallery>ul>li');
    var galleryLiLen = $('.gallery>ul>li').length;
    var galleryBg = [];

    for (var i = 0; i < sec1galleryLi.length; i++) {
        galleryBg.push("url(img/index/sec1/gallery-" + i + ".jpg) no-repeat 50%")
        sec1galleryLi.eq(i).css({
            'background': galleryBg[i],
            'background-size': 'cover'
        })
    }

    var idx = -1;
    /* var sec1box = $('.box')*/

    function autoGallery() {

        if (idx >= galleryLiLen) idx = -1;

        idx++;

        sec1galleryLi.eq(idx).fadeIn(400).siblings().fadeOut();

        if (idx >= galleryLiLen) idx = -1;

        var galleryBox = $('.gallery-title>ul>li').eq(idx).find('.box');
        $('.gallery-title>ul>li').eq(idx).find('.box').animate({
            width: '200px'
        }, 4000, function () {
            $(this).animate({
                width: '0px'
            }, 0);
        })

        if (idx >= galleryLiLen - 1) {
            idx = -1;
            return false
        }
    }



    ////////////////////////////////////////////////////////////////
    var setIn = setInterval(autoGallery, 4000);

    let sec2tConArrowleft = $('span.arrow.arrowLeft');
    let sec2tConArrowRight = $('span.arrow.arrowRight');
    let tcon = $('.t-con');
    let productSpace = $('.product-space')
    let productBox = $('.sec2 .product-box');
    let productGallery = $('.product-gallery');

    sec2tConArrowleft.on('click', sec2tConArrowleftFunc)

    var sec2tConIdx = 0;

    function sec2tConArrowleftFunc() {

        sec2tConIdx--;
        console.log(sec2tConIdx);
        var galleryGab = productBox.eq(1).offset().left - productBox.eq(0).offset().left;
        var goLeft = -(galleryGab * sec2tConIdx);

        productGallery.animate({
            left: goLeft
        }, 200);
        if (sec2tConIdx < 0) {
            productGallery.stop();
            sec2tConIdx = 0;
        } 
        

    }

    sec2tConArrowRight.on('click', sec2tConArrowRightFunc)

    function sec2tConArrowRightFunc() {

        sec2tConIdx++;

        console.log(sec2tConIdx);

        var galleryGab = productBox.eq(1).offset().left - productBox.eq(0).offset().left;
        var goLeft = -(galleryGab * sec2tConIdx);

        productGallery.animate({
            left: goLeft
        }, 200);
        if (sec2tConIdx >= productBox.length - "4") {
            /*idx = -1;*/
            productGallery.stop()
            sec2tConIdx = 4
        } 
        // else if (sec2tConIdx > 4){
        //     productGallery.stop();
        //     sec2tConIdx = 0;
        // }
        console.log(productBox.length)
    }


    var sec2arrowLeft = $('.r-title-space span.arrow.left');
    var sec2arrowRight = $('.r-title-space span.arrow.right');
    sec2arrowRight.on('click', sec2arrowRightFunc);

    function sec2arrowLeftFunc() {
        $('.r-product-space').eq(0).fadeIn(0).siblings().fadeOut(0);
    }
    sec2arrowLeft.on('click', sec2arrowLeftFunc);

    function sec2arrowRightFunc() {
        $('.r-product-space').eq(1).fadeIn(0).siblings().fadeOut(0);
    }


    var sec3arrowleft = $('.t-con span.arrow.left');
    var sec3arrowright = $('.t-con span.arrow.right');
    var sec3gallery = $('.shop-gallery');
    var sec3galleryLi = $('.shop')

    var galleryGab = sec3galleryLi.eq(1).offset().left - sec3galleryLi.eq(0).offset().left;

    var goLeft = -galleryGab;

    sec3arrowleft.on('click', sec3arrowleftFunc);
    var sec3idx = 0;

    function sec3arrowleftFunc() {
        sec3idx--;

        console.log(sec3idx);

        var galleryGab = sec3galleryLi.eq(1).offset().left - sec3galleryLi.eq(0).offset().left;
        var goRight = galleryGab * sec3idx;

        sec3gallery.animate({
            left: goRight
        }, 200);

        if (sec3idx < sec3galleryLi.length - 2) {
            sec3gallery.stop()
            sec3idx = 0
        }
    }


    sec3arrowright.on('click', sec3arrowrightFunc);

    function sec3arrowrightFunc() {

        sec3idx++;

        console.log(sec3idx);

        var galleryGab = sec3galleryLi.eq(1).offset().left - sec3galleryLi.eq(0).offset().left;
        var goLeft = -(galleryGab * sec3idx);

        sec3gallery.animate({
            left: goLeft
        }, 200);

        if (sec3idx > sec3galleryLi.length - 1) {
            sec3gallery.stop()
            sec3idx = 1
        }
    }

    var btn1 = $('.tea-btn>ul>li').eq(0);
    var btn2 = $('.tea-btn>ul>li').eq(1);
    var btn3 = $('.tea-btn>ul>li').eq(2);
    var btn4 = $('.tea-btn>ul>li').eq(3);

    btn1.on('click', btn1Func);

    function btn1Func(e) {
        $('.video-link').eq(3).show(0).siblings().hide();
        $(this).addClass('sec5on1').siblings().removeClass('sec5on1')
    }

    btn2.on('click', btn2Func);

    function btn2Func(e) {
        $('.video-link').eq(2).show(0).siblings().hide();
        $('video').eq(1).show(0).siblings().hide();
        $(this).addClass('sec5on1').siblings().removeClass('sec5on1')
    }

    btn3.on('click', btn3Func);

    function btn3Func(e) {
        $('.video-link').eq(1).show(0).siblings().hide();
        $(this).addClass('sec5on1').siblings().removeClass('sec5on1')
    }

    btn4.on('click', btn4Func);

    function btn4Func(e) {
        $('.video-link').eq(0).show(0).siblings().hide();
        $(this).addClass('sec5on1').siblings().removeClass('sec5on1')
    }


    let reviewPage = $('.inner-btn>ul>li').eq(0);
    let bestPage = $('.inner-btn>ul>li').eq(1);
    let salePage = $('.inner-btn>ul>li').eq(2);


    reviewPage.on('click', reviewPageFunc);

    function reviewPageFunc(e) {
        $('.page.review').show(0).siblings().hide(0);
        $(this).addClass('sec5on2').siblings().removeClass('sec5on2');
    }

    bestPage.on('click', bestPageFunc);

    function bestPageFunc(e) {
        $('.page.best').show(0).siblings().hide(0);
        $(this).addClass('sec5on2').siblings().removeClass('sec5on2');
    }

    salePage.on('click', salePageFunc);

    function salePageFunc(e) {
        $('.page.sale').show(0).siblings().hide(0);
        $(this).addClass('sec5on2').siblings().removeClass('sec5on2');
    }


    var gocart = $('span.cartBg img');

    gocart.on('click', gocartFunc);

    function gocartFunc(e) {
        var bool = confirm("장바구니로 이동하시겠습니까?")

        console.log("bool");
        if (bool == true) {
            console.log("이동");
            /*var link = footer.html*/
            location.href = "footer.html"
            //장바구니페이지 링크걸기
        } else {
            location.href = "index.html"
        }
    }

    var bannerLi = $('.banner-con>ul>li');
    var bannerBg = [];

    for (var i = 0; i < bannerLi.length; i++) {
        bannerBg.push("url(img/index/sec6/banner-" + i + ".jpg) no-repeat 50%");
        bannerLi.eq(i).css({
            'background': bannerBg[i],
            'background-size': 'cover'
        })
    }

    var arrowleft = $('span.arrow.left');
    var arrowright = $('span.arrow.right');

    arrowleft.on('click', arrowleftFunc);

    function arrowleftFunc() {
        //클릭할 때 마다 li의 첫번째
        var bannerLi = $('.banner-con>ul>li');
        $('.banner-con>ul').append(bannerLi.eq(0));
    }

    arrowright.on('click', arrowrightFunc);

    function arrowrightFunc() {
        //클릭할 때 마다 li의 마지막번째
        var bannerLi = $('.banner-con>ul>li');
        var lastNum = $('.banner-con>ul>li').length - 1;

        $('.banner-con>ul').prepend(bannerLi.eq(lastNum));
    }
})