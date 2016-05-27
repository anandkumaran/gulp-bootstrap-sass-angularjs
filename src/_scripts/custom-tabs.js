'use strict';
(function(dmUIConfig) {
  $(document).ready(function () {
    // Tabs and Accordion for Recommended products on Product Details
    $('.js-accordion-tabs').easyResponsiveTabs({
      type: 'default',
      width: 'auto',
      fit: true,
      tabidentify: 'hor_1',
      activate: function(event) {
        // $('.resp-tab-content').scrollTop(1).perfectScrollbar('update');
      }
    });

    $('.js-accordion-tabs-recommanded').easyResponsiveTabs({
      type: 'default',
      width: 'auto',
      fit: true,
      tabidentify: 'hor_1',
      activate: function(event) {
        $('.js-carousel, .js-landing-carousel, .product-listing__quantity-primary .slider-variant').resize();
        $('.landing-carousel-navigation, .landing-top-carousel-navigation, .landing-top-carousel-navigation-secondary, .landing-top-carousel-navigation-tertiary').css('opacity', 0).delay(100).animate({
          opacity: 1
        }, 800);
        $('.resp-tab-content-active .dashboard-notification--list').scrollTop(1).perfectScrollbar('update');
      }
    });

    $('.js-accordion-tabs-delivery').easyResponsiveTabs({
      type: 'vertical',
      width: 'auto',
      fit: true,
      tabidentify: 'delivery-vertical'
    });

    //Accordio for FAQ
    $('.js-accordion-tab').on('click', function() {
      if(!$(this).hasClass('active')) {

        $('.js-accordion-tab').removeClass('active');
        $('.js-accordion-tab i').removeClass('icon-caret-up');
        $('.js-accordion-panel .js-accordion-content').slideUp();

        $(this).find('i').addClass('icon-caret-up');
        $(this).addClass('active');
        $(this).parents('.js-accordion-panel').find('.js-accordion-content').toggleClass('active').slideDown();
      }
      else {
        $('.js-accordion-tab').removeClass('active');
        $('.js-accordion-tab i').removeClass('icon-caret-up');
        $('.js-accordion-panel .js-accordion-content').slideUp();
      }
    });
  });
}(DM_UI_CONFIG));
