'use strict';
(function(dmUIConfig) {
  $(document).ready(function () {

    function sticky() {
      var currentScrollPos = $(window).scrollTop();
      if (currentScrollPos >= 50) {
        $('.col-alt-logo').removeClass('col-lg-3').addClass('col-lg-2');
        $('.avatar-medium-device').removeClass('js-hide-show').addClass('col-md-2');
        $('.dropdown-signin, .dropdown-register, .js-myaccount-dropdown, .dropdown-minicart').removeClass('opened');
        $('.header-dropdown').css('display', 'none');
        $('.js-class-alt-search').removeClass('col-lg-8 col-lg-7').addClass('col-lg-5');
        setTimeout(function(){
          $('.header-component__primary').find('.delivery-code__label, .delivery-code__pin, .icon-delivery-caret-down, .cart-price-label').show().animate({
            opacity: 1
          }, 450);
          $('.js-class-delivery-downdown, .js-class-cart-downdown').removeClass('col-lg-1').addClass('col-lg-2');
          $('.delivery-code .icon-delivery-location, .cart-wrap, .avatar').removeClass('active');
        }, 320);
        // $('.js-sub-menu, .sub-menu-items').css('top', '98px');
        $('.js-header-container').addClass('header-sticky');
      }
      else {
        $('.col-alt-logo').removeClass('col-lg-2').addClass('col-lg-3');
        $('.avatar-medium-device').addClass('js-hide-show');
        // $('.js-sub-menu, .sub-menu-items').css('top', '141px');
        $('.js-header-container').removeClass('header-sticky');
      }
    }

    if($(window).width() >= 768) {
      $(window).scroll( $.throttle( 250, sticky ) );
    }

    // Category open
    $('.splash .js-category-dropdown').on('click', function () {
      $('#locationModal').show();
      return false;
    });

    $('.main-menu__location-mini').on('touchstart', function () {
      $('#locationModal').show();
      $('html, body').css('overflow', 'hidden');
    });

    if($(window).width() >= 1000) {
      $('.js-category-dropdown').hover( function () {
        if(!$('.splash').length) {
          $(this).addClass('category-open');
          $('.category-menu-down', this).toggleClass('icon-caret-up category-menu-up');
          var menuHeight = $('.main-menu__navigation--category-dropdown').height();
          $('.sub-menu').height(menuHeight-1);
          $('.sub-menu-items').height(menuHeight - 70);
        }
      },
      function () {
        if(!$('.splash').length) {
          $(this).removeClass('category-open');
          $('.category-menu-down', this).toggleClass('icon-caret-up category-menu-up');
        }
      });

      $('.js-category').hover(function () {
        $(this).addClass('active');
        $(this).find('.js-sub-menu').css('display', 'block');
        $(this).find('.js-sub-menu .js-category-item:first-child .sub-menu-items').fadeIn();
        $(this).find('.js-sub-menu .js-category-item:first-child .sub-menu-items .sub-menu-img').css('display', 'block');
      },
      function () {
        $(this).removeClass('active');
        $(this).find('.js-sub-menu').css('display', 'none');
        $(this).find('.js-sub-menu .js-category-item:first-child .sub-menu-items').fadeOut();
      });
    }
    else {
      $('.js-category-dropdown').on('click', function () {
        $(this).addClass('category-open');
      });

      $('.js-category-item .sub-menu-parent').on('click', function () {
        if(!$(this).parent().hasClass('active')) {
          $('.sub-menu-item').removeClass('active');
          $(this).parent().addClass('active');
          $(this).parent().find('.sub-menu-items ul').slideDown();
        }
        else {
          $('.sub-menu-item').removeClass('active');
          $(this).parent().removeClass('active');
          $(this).parent().find('.sub-menu-items ul').slideUp();
        }
      });
    }

    if($(window).width() <= 1023) {
      $('.main-menu__navigation--category-dropdown').on('click', '.js-category-parent', function () {

        if(!$(this).hasClass('active')) {
          $('.main-menu__navigation--category-dropdown .js-category-parent').removeClass('active');
          $(this).addClass('active');
          $('.main-menu__navigation--category-dropdown .js-sub-menu').hide();
          $(this).parent().find('.js-sub-menu').slideDown();
        }
        else {
          $('.main-menu__navigation--category-dropdown .js-category-parent').removeClass('active');
          $(this).parent().find('.js-sub-menu').hide();
        }
      });
    }

    $('.js-main-menu-back').on('click touchstart', function () {
      $('.js-category-dropdown').removeClass('category-open');
      $('.js-category-dropdown .category-menu-down').removeClass('icon-caret-up category-menu-up');
    });

  });
}(DM_UI_CONFIG));
