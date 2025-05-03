$(document).ready(function () {
    //Section 01 Banner Slide
    $('.sec1 .slide-box').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000
    });

    //Section 03 Tab Menu
    $('.sec3 .tab').hide()
    $('.sec3 .tab').eq(0).show()

    $('.sec3 .category li').click(function () {
        //a 링크로 인한 재로드 방지
        //크로스 브라우징
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        console.log($(this).index())

        var tabIdx=$(this).index()

        $('.sec3 .tab').eq(tabIdx).show().siblings().hide()

        $(this).addClass('active').siblings().removeClass('active')
    })

    //Section 05 Slide
    $('.sec5 .slide-box').slick({
        dots: true
    })

    //Footer
    $('.business').click(function(){
        // event.preventDefault ? event.preventDefault() : (event.returnValue = false);

        $(next).toggleClass('active');

        console.log(aa)
    })

})