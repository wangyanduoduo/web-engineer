/*
 * @Author: wy
 * @Date: 2023-12-22 11:01:11
 * @LastEditors: wy
 * @LastEditTime: 2023-12-22 15:07:07
 * @FilePath: /笔记/web-engineer/project-test/src/js/nav.js
 * @Description:
 */
//	导航固定顶部
import 'flexslider';
$(function () {
  $(window).scroll(function () {
    var ws = $(window).scrollTop();
    if (ws > 60) {
      $('.head')
        .addClass('ding')
        .css({ background: 'rgba(255,255,255,' + ws / 300 + ')' });
    } else {
      $('.head').removeClass('ding').css({ background: '#fff' });
    }
  });
});

$(function () {
  $('#home_slider').flexslider({
    animation: 'slide',
    controlNav: true,
    directionNav: true,
    animationLoop: true,
    slideshow: true,
    slideshowSpeed: 2000,
    useCSS: false,
  });
});
