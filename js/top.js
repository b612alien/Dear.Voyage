$( document ).ready( function() {
    $( window ).scroll( function() {
      if ( $( this ).scrollTop() > 200 ) {
        $( '.top' ).fadeIn();
      } else {
        $( '.top' ).fadeOut();
      }
    } );
    $( '.top' ).click( function() {
      $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
      return false;
    } );
  } );

    // 스크롤 위치에 따라 SVG 이미지 파일 경로 변경 함수
function changeSVGPath() {
  var svgElement = document.getElementById('top-svg');
  var footerPosition = document.querySelector('footer').getBoundingClientRect().top;
  var svgPath = '';

  if (footerPosition <= window.innerHeight) {
    svgPath = '../img/top-wh.svg'; // 푸터 위치 이하에서는 변경된 이미지 파일 경로
  } else {
    svgPath = '../img/top.svg'; // 푸터 위치 이상에서는 기존 이미지 파일 경로
  }

  svgElement.setAttribute('src', svgPath);
}

// 페이지 스크롤 이벤트에 따라 SVG 이미지 파일 경로 변경 함수 호출
window.addEventListener('scroll', function() {
  changeSVGPath();
});

// 초기 로드 시 SVG 이미지 파일 경로 변경 함수 호출
window.addEventListener('DOMContentLoaded', function() {
  changeSVGPath();
});

