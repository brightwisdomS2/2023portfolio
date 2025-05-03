//풀페이지 스크롤
$(function(){
  $('#fullpage').fullpage({
    fingersonly: true, /*모바일에서 손으로 드래그 할 때도 적용되게*/
    anchors:['firstPage','secondPage','thirdPage','fourthPage','fifthPage','sixthPage','seventhPage'], /*호출할 페이지 명*/
    menu:'.rightNav', /*메뉴*/
    afterLoad: function(anchorLink,index){ /*counterup 함수*/
      if(index==2){
        $('.count').counterUp({delay:10,time:550});
      }
      if(index==3){
        $('.count2').counterUp({delay:10,time:550});
      }
    }
  });
});


//GNB
$(function(){
  setGnb(); /*setGnb라는 함수 호출*/
  function setGnb(){ /*setGnb라는 함수는 다음과 같은 함수 실행*/
    $('.innerHeader .gnb>li>a').on('mouseenter focus',function(){
    /*on()이라는 그룹 이벤트 메서드로 이벤트 등록*/
    /*마우스엔터 + 포커스*/
      $('header').addClass('on');
      $('.innerHeader .gnb>li .inner').addClass('on');
      $('header').css({'border':'none'});
    }) 
    $('header').on('mouseleave',function(){
      $('.innerHeader').removeClass('on');
      $('.innerHeader .gnb>li .inner').removeClass('on');
      $('header').css({'border-bottom':'1px solid rgba(255,255,255,0.1)'});
    })
  }
})


//이미지 슬라이드
$(function(){
  $('.visual').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 2000,
    customPaging: function(slider,i){
      var tit=$(slider.$slides[i]).find('.dot').html();
      /*$slides[i] = slides에 있는 매개변수 i = .list에 있는 .dot*/
      /*html문서내에 있는 .dot를 찾아서 tit에 대입*/
      return '<div class="pager-tit" class="+ i +">'+tit+'</div>'
      /*그것을 pager-tit에 반환*/
    }
  })
})


//이미지 슬라이드 -너비 높이 스크립트
$(function(){
  var winW=$(window).width();
  var winH=$(window).height();
  list=$('.visual .list');
  list.css({width:winW+'px',height:winH+'px'});
})








