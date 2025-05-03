$(function(){

    const $btnMega = $('.btn-megamenu');
    const $btnMegaClose = $('.btn-close');
    const $megamenu = $('.megamenu');

    // 모바일 메뉴
    function mega(){
        // btnMega 클릭하면 ㅡ
        $btnMega.on('click',megaOpen);
        $btnMegaClose.on('click',megaClose);
    }   
    function megaOpen(){
        $megamenu.show();
    }
    function megaClose(){
        $megamenu.hide();
    }
    // mega 실행
    mega();

    // 반응형 모바일메뉴 제어
    function removeMobileNav(){
        $(window).on('resize', resizeMobile)
    }
    function resizeMobile(){
        let $windowWidth = $(window).width();
        if($windowWidth > 1024){
            // window 너비가 1024보다 커지면(웹사이즈로 바뀌면)
            megaClose();
            // megaClose 실행
        }
    }
    // removeMobileNav 실행
    removeMobileNav();

})