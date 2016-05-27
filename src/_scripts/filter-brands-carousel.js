'use strict';
(function(dmUIConfig) {
  $(document).ready(function () {
    $('.filter-module__brand-slider').flexslider({
      animation: 'slide',
      animationLoop: false,
      itemWidth: 60,
      itemMargin: 10,
      slideshow: false,
      controlNav: false,
      reverse: false,
      minItems: 3,
      maxItems: 7,
      prevText: '<i class="icon-caret-left"></i>',
      nextText: '<i class="icon-caret-right"></i>',
      move: 1
    });
    $('.filter-module__colour-slider').flexslider({
      animation: 'slide',
      animationLoop: false,
      itemWidth: 23,
      itemMargin: 10,
      slideshow: false,
      controlNav: false,
      reverse: false,
      minItems: 6,
      maxItems: 6,
      prevText: '<i class="icon-caret-left"></i>',
      nextText: '<i class="icon-caret-right"></i>',
      move: 1
    });
    $('.filter-module__variant-slider').flexslider({
      animation: 'slide',
      animationLoop: false,
      itemWidth: 59,
      itemMargin: 10,
      slideshow: false,
      controlNav: false,
      reverse: false,
      minItems: 3,
      maxItems: 7,
      prevText: '<i class="icon-caret-left"></i>',
      nextText: '<i class="icon-caret-right"></i>',
      move: 1
    });
    if($(window).width() > 769 && $(window).width() < 1023) {
      $('.filter-module__type-slider').flexslider({
        animation: 'slide',
        animationLoop: false,
        itemWidth: 125,
        itemMargin: 10,
        slideshow: false,
        controlNav: false,
        reverse: false,
        minItems: 1,
        maxItems: 3,
        prevText: '<i class="icon-caret-left"></i>',
        nextText: '<i class="icon-caret-right"></i>',
        move: 1
      });
    }
    else {
      $('.filter-module__type-slider').flexslider({
        animation: 'slide',
        animationLoop: false,
        itemWidth: 125,
        itemMargin: 10,
        slideshow: false,
        controlNav: false,
        reverse: false,
        minItems: 1,
        maxItems: 1,
        prevText: '<i class="icon-caret-left"></i>',
        nextText: '<i class="icon-caret-right"></i>',
        move: 1
      });
    }
  });
}(DM_UI_CONFIG));
