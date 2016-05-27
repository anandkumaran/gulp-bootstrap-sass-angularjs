(function(dmUIConfig) {
  $(window).load(function () {
    $('.landing-banner .flexslider').flexslider({
      animation: 'slide',
      slideshow: true,
      animationLoop: true,
      slideshowSpeed: 3000,
      animationSpeed: 1500,
      directionNav: false,
      itemWidth: 980,
      itemMargin: 10,
      pauseOnAction: true,
      pauseOnHover: true,
      touch: true,
      minItems: 1,
      maxItems: 1,
      start: function (slider) {
        slider.slides.eq(slider.animatingTo).addClass('flex-active');
      },
      before: function (slider) {
        slider.slides.removeClass('flex-active').eq(slider.animatingTo).addClass('flex-active');
        if(slider.animatingTo === 0 || slider.animatingTo === 2 || slider.animatingTo === 4) {
          $('.landing-banner').css('background-color', '#dbdbdb');
        }
        else {
          $('.landing-banner').css('background-color', '#f0f0e0');
        }
      },
      after: function(slider) {
        if (!slider.playing) {
          slider.delay(3000).play();
        }
      }
    });

    $('.category-landing-flex-pager').flexslider({
      animation: 'slide',
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 181,
      minItems: 4,
      maxItems: 4,
      itemMargin: 0,
      directionNav: false,
      touch: false,
      useCSS: false,
      asNavFor: '.category-flex-slider'
    });

    $('.category-flex-slider').flexslider({
      animation: 'slide',
      controlNav: false,
      animationLoop: false,
      slideshow: true,
      directionNav: false,
      sync: '.category-landing-flex-pager'
    });

    $('.landing-tabs--secondary .js-landing-carousel').flexslider({
      selector: '.slides:first > li',
      animation: 'slide',
      animationLoop: false,
      slideshowSpeed: 3000,
      animationSpeed: 500,
      slideshow: false,
      controlNav: false,
      reverse: false,
      itemWidth: 218,
      itemMargin: 20,
      minItems: 1,
      maxItems: 4,
      move: 1,
      touch: true,
      customDirectionNav: $('.landing-carousel-navigation a')
    });

    $('.landing-tabs--secondary-recommended .js-landing-carousel').flexslider({
      selector: '.slides:first > li',
      animation: 'slide',
      animationLoop: false,
      slideshowSpeed: 3000,
      animationSpeed: 500,
      slideshow: false,
      controlNav: false,
      reverse: false,
      itemWidth: 218,
      itemMargin: 20,
      minItems: 1,
      maxItems: 4,
      move: 1,
      touch: true,
      customDirectionNav: $('.landing-carousel-navigation-recommended a')
    });

    $('.landing-tabs--tertiary .js-landing-carousel').flexslider({
      selector: '.slides:first > li',
      animation: 'slide',
      animationLoop: false,
      slideshowSpeed: 3000,
      animationSpeed: 500,
      slideshow: false,
      controlNav: false,
      reverse: false,
      itemWidth: 218,
      itemMargin: 20,
      minItems: 1,
      maxItems: 4,
      move: 1,
      touch: true,
      customDirectionNav: $('.landing-top-carousel-navigation a')
    });

    $('.landing-tabs--quaternary .js-landing-carousel').flexslider({
      selector: '.slides:first > li',
      animation: 'slide',
      animationLoop: false,
      slideshowSpeed: 3000,
      animationSpeed: 500,
      slideshow: false,
      controlNav: false,
      reverse: false,
      itemWidth: 218,
      itemMargin: 20,
      minItems: 1,
      maxItems: 4,
      move: 1,
      touch: true,
      customDirectionNav: $('.landing-top-carousel-navigation-quaternary a')
    });

    $('.landing-tabs--quinary .js-landing-carousel').flexslider({
      selector: '.slides:first > li',
      animation: 'slide',
      animationLoop: false,
      slideshowSpeed: 3000,
      animationSpeed: 500,
      slideshow: false,
      controlNav: false,
      reverse: false,
      itemWidth: 218,
      itemMargin: 20,
      minItems: 1,
      maxItems: 4,
      move: 1,
      touch: true,
      customDirectionNav: $('.landing-top-carousel-navigation-quinary a')
    });

    var gridBreakpointsSm = 1023;
    if ($(window).width() <= gridBreakpointsSm) {
      // for splash small devices
      $('.landing-tabs--tertiary .js-md-landing-carousel').flexslider({
        selector: '.slides:first > li',
        animation: 'slide',
        animationLoop: false,
        slideshowSpeed: 3000,
        animationSpeed: 500,
        slideshow: false,
        controlNav: false,
        reverse: false,
        itemWidth: 218,
        itemMargin: 20,
        minItems: 1,
        maxItems: 4,
        touch: true,
        move: 1,
        useCSS: false
      });

      // landing Most Popular for small devices
      $('.js-landing-upper-carousel').flexslider({
        selector: '.slides:first > li',
        animation: 'slide',
        animationLoop: false,
        slideshowSpeed: 3000,
        animationSpeed: 500,
        slideshow: false,
        controlNav: false,
        reverse: false,
        itemWidth: 268,
        itemMargin: 12,
        minItems: 1,
        maxItems: 3,
        move: 1,
        smoothHeight: false,
        touch: true,
        customDirectionNav: $('.promotions-carousel-navigation a')
      });
    }
    else {
      // landing Most Popular for large devices
      $('.js-landing-upper-carousel').flexslider({
        selector: '.slides:first > li',
        animation: 'slide',
        animationLoop: false,
        slideshowSpeed: 3000,
        animationSpeed: 500,
        slideshow: false,
        controlNav: false,
        reverse: false,
        itemWidth: 358,
        itemMargin: 12,
        minItems: 1,
        maxItems: 3,
        move: 1,
        smoothHeight: false,
        useCSS: false,
        customDirectionNav: $('.promotions-carousel-navigation a')
      });
    }
  });

  if($('.landing-banner').is(':visible')) {
    $(window).bind('resize', function() {
      setTimeout(function(){
        var slider = $('.landing-banner .flexslider').data('flexslider');
        slider.resize();
      }, 100);
    });
  }
}(DM_UI_CONFIG));
